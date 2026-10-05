import fs from "fs";
import path from "path";
import { getEntities, getRelationships, readDocuments } from "./files";
import type { Document } from "./schema";
import {
  extractInternalLinks,
  minimumWords,
  normalizePath,
  plainText,
  wordCount,
} from "./text";

const SENSITIVE_TOPICS = new Set([
  "kundalini",
  "reiki",
  "ayurveda",
  "chakras",
  "breathwork",
]);

const ARTICLE_KINDS = new Set<Document["kind"]>([
  "pillar",
  "explainer",
  "guide",
  "comparison",
  "misconception",
  "question",
  "glossary",
  "chakra",
  "meditation",
  "yoga",
]);

function minimumLinks(kind: Document["kind"]): number {
  switch (kind) {
    case "pillar":
    case "explainer":
    case "guide":
    case "comparison":
    case "misconception":
      return 6;
    case "glossary":
    case "chakra":
    case "meditation":
    case "yoga":
      return 4;
    case "question":
      return 3;
    default:
      return 2;
  }
}

function minimumSources(kind: Document["kind"]): number {
  switch (kind) {
    case "trust":
    case "author":
    case "hub":
      return 0;
    case "question":
      return 2;
    default:
      return 3;
  }
}

function headingIsQuestion(heading: string): boolean {
  return heading.trim().endsWith("?");
}

export function validateContent(): string[] {
  const { documents, errors: loadErrors } = readDocuments();
  const errors = [...loadErrors];
  if (loadErrors.length > 0) return errors;
  const paths = new Set(documents.map((doc) => doc.path));
  paths.add("/");
  const entities = new Set(getEntities().map((entity) => entity.id));
  const ids = new Set<string>();
  const titles = new Set<string>();
  const metaTitles = new Set<string>();

  if (documents.length < 100) {
    errors.push(`Expected at least 100 published documents, found ${documents.length}.`);
  }

  for (const doc of documents) {
    const label = doc.path;
    if (ids.has(doc.id)) errors.push(`${label} duplicates id ${doc.id}`);
    ids.add(doc.id);
    if (titles.has(doc.title)) errors.push(`${label} duplicates title`);
    titles.add(doc.title);
    if (metaTitles.has(doc.seo.meta_title)) {
      errors.push(`${label} duplicates meta title`);
    }
    metaTitles.add(doc.seo.meta_title);

    if (doc.seo.canonical !== doc.path) {
      errors.push(`${label} canonical does not match path`);
    }
    if (doc.h1.includes("\n")) {
      errors.push(`${label} h1 must be a single line`);
    }

    const body = `${doc.intro}\n${doc.sections.map((section) => section.content).join("\n")}`;
    if (/^#{1,6}\s/m.test(body)) {
      errors.push(`${label} body contains a markdown heading; headings must come from section fields so the page has one H1`);
    }

    const words = wordCount(plainText(doc));
    const minimum = minimumWords(doc.kind);
    if (words < minimum) {
      errors.push(`${label} has ${words} words; ${doc.kind} pages need at least ${minimum}`);
    }

    const published = Date.parse(doc.publication.date_published);
    const modified = Date.parse(doc.publication.date_modified);
    if (Number.isNaN(published)) errors.push(`${label} has an invalid publish date`);
    if (Number.isNaN(modified)) errors.push(`${label} has an invalid modified date`);
    if (!Number.isNaN(published) && !Number.isNaN(modified) && modified < published) {
      errors.push(`${label} was modified before it was published`);
    }

    if (!doc.media.featured_image_alt.trim()) {
      errors.push(`${label} is missing image alt text`);
    }
    const imagePath = path.join(process.cwd(), "public", doc.media.featured_image);
    if (!fs.existsSync(imagePath)) {
      errors.push(`${label} featured image is missing at ${doc.media.featured_image}`);
    }
    if (doc.seo.og_image !== doc.media.featured_image) {
      errors.push(`${label} og image does not match the featured image`);
    }

    if (doc.sources.length < minimumSources(doc.kind)) {
      errors.push(`${label} needs at least ${minimumSources(doc.kind)} sources`);
    }

    const author = documents.find(
      (item) => item.kind === "author" && item.id === doc.author_id,
    );
    if (!author && doc.kind !== "author") {
      errors.push(`${label} author ${doc.author_id} does not exist`);
    }

    for (const entityId of [...doc.about, ...doc.mentions]) {
      if (!entities.has(entityId)) {
        errors.push(`${label} references unknown entity ${entityId}`);
      }
    }

    const linkTargets = new Set<string>([
      ...extractInternalLinks(plainText(doc)),
      ...doc.related.map(normalizePath),
      ...doc.children.map(normalizePath),
    ]);
    for (const target of linkTargets) {
      if (!paths.has(target)) errors.push(`${label} links to unknown path ${target}`);
    }
    if (ARTICLE_KINDS.has(doc.kind) && linkTargets.size < minimumLinks(doc.kind)) {
      errors.push(
        `${label} has ${linkTargets.size} internal links; needs at least ${minimumLinks(doc.kind)}`,
      );
    }

    const sectionSlugs = new Set<string>();
    for (const section of doc.sections) {
      if (sectionSlugs.has(section.slug)) {
        errors.push(`${label} duplicates section slug ${section.slug}`);
      }
      sectionSlugs.add(section.slug);
    }

    if (
      ARTICLE_KINDS.has(doc.kind) &&
      doc.kind !== "glossary" &&
      !doc.sections.some((section) => headingIsQuestion(section.heading))
    ) {
      errors.push(`${label} needs question-style section headings`);
    }

    if (
      (SENSITIVE_TOPICS.has(doc.topic) || doc.kind === "misconception") &&
      doc.kind !== "hub" &&
      !doc.disclaimer.required
    ) {
      errors.push(`${label} requires a health and tradition disclaimer`);
    }

    if (doc.kind === "chakra") {
      for (const key of ["Sanskrit name", "Traditional location"]) {
        if (!doc.facts[key]) errors.push(`${label} is missing fact "${key}"`);
      }
    }
  }

  for (const entity of getEntities()) {
    if (!paths.has(normalizePath(entity.path))) {
      errors.push(`Entity ${entity.id} points to missing path ${entity.path}`);
    }
  }
  for (const relationship of getRelationships()) {
    if (!entities.has(relationship.source) || !entities.has(relationship.target)) {
      errors.push(
        `Relationship ${relationship.source} -> ${relationship.target} references an unknown entity`,
      );
    }
  }

  const pathCounts = new Map<string, number>();
  for (const doc of documents) {
    pathCounts.set(doc.path, (pathCounts.get(doc.path) ?? 0) + 1);
  }
  for (const [documentPath, count] of pathCounts) {
    if (count > 1) errors.push(`Path ${documentPath} is used ${count} times`);
  }

  return errors;
}
