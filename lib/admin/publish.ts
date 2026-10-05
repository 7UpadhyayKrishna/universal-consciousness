import fs from "fs";
import path from "path";
import { getDb } from "@/lib/db";
import { getEntities, readDocuments } from "@/lib/content/files";
import { clearContentCache } from "@/lib/content/load";
import { documentSchema, sourceSchema, type DocumentFile, type Source } from "@/lib/content/schema";
import {
  extractInternalLinks,
  minimumWords,
  normalizePath,
  plainText,
  wordCount,
} from "@/lib/content/text";
import { listTopics, readSourceFile } from "./catalog";
import { writeDraft } from "./drafts";
import { removeIllustration, writeIllustration } from "./illustration";
import {
  ARTICLE_KINDS,
  disclaimerLocked,
  slugify,
  type DraftRecord,
} from "./types";

const SLUG = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;
const ARTICLE_DIR = path.join(process.cwd(), "content", "documents", "articles");
const SOURCE_FILE = path.join(process.cwd(), "content", "sources.json");

type Assessment = {
  errors: string[];
  doc?: DocumentFile;
  source?: Source;
};

function uniqueSlug(base: string, used: Set<string>): string {
  const root = base || "section";
  let slug = root;
  let count = 2;
  while (used.has(slug)) {
    slug = `${root}-${count}`;
    count += 1;
  }
  used.add(slug);
  return slug;
}

function optionalSource(draft: DraftRecord, errors: string[]): Source | undefined {
  const fresh = draft.new_source;
  const adding = [fresh.id, fresh.name, fresh.title, fresh.url].some((value) => value.trim());
  if (!adding) return undefined;
  const parsed = sourceSchema.safeParse({
    id: fresh.id.trim(),
    name: fresh.name.trim(),
    title: fresh.title.trim(),
    url: fresh.url.trim(),
    type: fresh.type,
  });
  if (!parsed.success) {
    errors.push("A new source needs an id, name, title, https URL, and type.");
    return undefined;
  }
  return parsed.data;
}

export function assessDraft(draft: DraftRecord): Assessment {
  const errors: string[] = [];
  const slug = draft.slug.trim();
  const title = draft.title.trim();
  const topic = listTopics().find((item) => item.id === draft.topic);
  const source = optionalSource(draft, errors);
  const sources = readSourceFile();
  const sourceIds = [
    ...new Set(
      [...draft.source_ids.map((id) => id.trim()), source?.id].filter(
        (id): id is string => Boolean(id),
      ),
    ),
  ];

  if (!SLUG.test(slug)) {
    errors.push("Slug must use lowercase letters, numbers, and hyphens.");
  }
  if (title.length < 8) errors.push("Title must be at least 8 characters.");
  if (draft.excerpt.trim().length < 40) errors.push("Excerpt must be at least 40 characters.");
  if (draft.intro.trim().length < 40) errors.push("Intro must be at least 40 characters.");
  if (draft.quick_question.trim().length < 8) {
    errors.push("The direct-answer question must be at least 8 characters.");
  }
  if (draft.quick_answer.trim().length < 40) {
    errors.push("The direct answer must be at least 40 characters.");
  }
  if (!topic) errors.push("Choose a topic.");
  if (!ARTICLE_KINDS.includes(draft.kind)) errors.push("Choose an article type.");
  if (draft.meta_title.trim().length < 20 || draft.meta_title.trim().length > 70) {
    errors.push("Meta title must be 20 to 70 characters.");
  }
  if (draft.meta_description.trim().length < 80 || draft.meta_description.trim().length > 170) {
    errors.push("Meta description must be 80 to 170 characters.");
  }
  if (draft.image_alt.trim().length < 20) {
    errors.push("Image alt text must be at least 20 characters.");
  }

  const filledSections = draft.sections
    .map((section) => ({
      heading: section.heading.trim(),
      content: section.content.trim(),
    }))
    .filter((section) => section.heading || section.content);
  if (filledSections.length < 1) errors.push("Add at least one section.");
  if (!filledSections.some((section) => section.heading.endsWith("?"))) {
    errors.push("At least one section heading must be a question ending in ?.");
  }
  const usedSlugs = new Set<string>();
  const sections = filledSections.map((section) => ({
    heading: section.heading,
    slug: uniqueSlug(slugify(section.heading), usedSlugs),
    content: section.content,
  }));
  for (const section of sections) {
    if (section.heading.length < 8) errors.push(`Section heading “${section.heading}” is too short.`);
    if (section.content.length < 40) errors.push(`Section “${section.heading || "untitled"}” needs more text.`);
    if (/^#{1,6}\s/m.test(section.content)) {
      errors.push(`Section “${section.heading}” contains a markdown heading. Keep headings in the heading field.`);
    }
  }
  if (/^#{1,6}\s/m.test(draft.intro)) {
    errors.push("The intro contains a markdown heading. Keep headings in section fields.");
  }

  const takeaways = draft.takeaways.map((item) => item.trim()).filter(Boolean);
  if (takeaways.length < 3 || takeaways.some((item) => item.length < 8)) {
    errors.push("Add at least 3 key takeaways, each at least 8 characters.");
  }
  const faq = draft.faq
    .map((item) => ({ question: item.question.trim(), answer: item.answer.trim() }))
    .filter((item) => item.question || item.answer);
  if (faq.length < 2 || faq.some((item) => item.question.length < 8 || item.answer.length < 40)) {
    errors.push("Add at least 2 questions. Each answer must be at least 40 characters.");
  }

  const related = [...new Set(draft.related.map((item) => normalizePath(item)))];
  if (related.length < 6) errors.push(`Select at least 6 related pages. ${related.length} selected.`);
  if (sourceIds.length < 3) errors.push(`Select at least 3 sources. ${sourceIds.length} selected.`);
  if (source && sources.some((item) => item.id === source.id)) {
    errors.push(`Source id ${source.id} already exists. Choose it from the list instead.`);
  }
  for (const id of sourceIds) {
    if (source?.id === id) continue;
    if (!sources.some((item) => item.id === id)) errors.push(`Unknown source ${id}.`);
  }

  const approxWords = wordCount(
    [
      draft.quick_question,
      draft.quick_answer,
      draft.intro,
      ...draft.sections.flatMap((section) => [section.heading, section.content]),
      ...draft.takeaways,
      ...draft.faq.flatMap((item) => [item.question, item.answer]),
    ].join("\n"),
  );
  if (approxWords < minimumWords(draft.kind)) {
    errors.push(`This article has ${approxWords} words; it needs at least ${minimumWords(draft.kind)}.`);
  }

  const { documents } = readDocuments();
  const articlePath = `/articles/${slug}/`;
  const others = documents.filter((doc) => doc.id !== slug);
  if (slug && others.some((doc) => doc.slug === slug || doc.path === articlePath)) {
    errors.push("That slug is already used by another page.");
  }
  if (title && others.some((doc) => doc.title === title)) errors.push("That title is already used.");
  if (
    draft.meta_title.trim() &&
    others.some((doc) => doc.seo.meta_title === draft.meta_title.trim())
  ) {
    errors.push("That meta title is already used.");
  }
  const knownPaths = new Set(documents.map((doc) => doc.path));
  knownPaths.add("/");
  for (const target of related) {
    if (!knownPaths.has(target)) errors.push(`Related path ${target} does not exist.`);
  }
  for (const target of extractInternalLinks(
    [...sections.map((section) => section.content), draft.intro].join("\n"),
  )) {
    if (!knownPaths.has(target)) errors.push(`A section links to unknown path ${target}.`);
  }
  if (!documents.some((doc) => doc.kind === "author" && doc.id === "editorial-team")) {
    errors.push("The editorial team author page is missing.");
  }

  if (!topic || errors.length > 0 || !SLUG.test(slug)) return { errors, source };

  const entities = new Set(getEntities().map((entity) => entity.id));
  const now = new Date().toISOString();
  const image = `/images/${slug}.svg`;
  const candidate = {
    id: slug,
    kind: draft.kind,
    status: "published" as const,
    title,
    slug,
    path: articlePath,
    h1: title,
    excerpt: draft.excerpt.trim(),
    quick_answer: {
      question: draft.quick_question.trim(),
      answer: draft.quick_answer.trim(),
    },
    topic: topic.id,
    category: { id: topic.id, name: topic.name, slug: topic.id },
    subtopics: [],
    intent: ["informational"],
    primary_keyword: slug.replace(/-/g, " "),
    secondary_keywords: [],
    entities: [],
    about: entities.has(topic.id) ? [topic.id] : [],
    mentions: [],
    intro: draft.intro.trim(),
    sections,
    key_takeaways: takeaways,
    faq,
    source_ids: sourceIds,
    author_id: "editorial-team",
    seo: {
      meta_title: draft.meta_title.trim(),
      meta_description: draft.meta_description.trim(),
      canonical: articlePath,
      robots: "index,follow",
      og_title: title,
      og_description: draft.meta_description.trim(),
      og_image: image,
    },
    media: {
      featured_image: image,
      featured_image_alt: draft.image_alt.trim(),
      width: 1600,
      height: 900,
    },
    publication: {
      date_published: now,
      date_modified: now,
    },
    language: "en-US" as const,
    country: "US" as const,
    related,
    children: [],
    disclaimer: {
      required: disclaimerLocked(draft.kind, topic.id) || draft.disclaimer,
      text: "",
    },
    facts: {},
  };

  const parsed = documentSchema.safeParse(candidate);
  if (!parsed.success) {
    for (const issue of parsed.error.issues) {
      errors.push(`${issue.path.join(".") || "article"}: ${issue.message}`);
    }
    return { errors, source };
  }

  const words = wordCount(plainText(parsed.data));
  if (words < minimumWords(parsed.data.kind)) {
    errors.push(`This article has ${words} words; it needs at least ${minimumWords(parsed.data.kind)}.`);
  }
  return errors.length ? { errors, source } : { errors: [], doc: parsed.data, source };
}

function writeSources(source: Source | undefined) {
  if (!source) return;
  const sources = readSourceFile();
  if (sources.some((item) => item.id === source.id)) return;
  fs.writeFileSync(SOURCE_FILE, `${JSON.stringify([...sources, source], null, 2)}\n`);
}

function previousSlug(publishedPath: string): string | undefined {
  const parts = publishedPath.split("/").filter(Boolean);
  return parts.at(-1);
}

async function syncDatabase(doc: DocumentFile, source: Source | undefined, previous?: string): Promise<string> {
  if (!process.env.MONGODB_URI) {
    return "MongoDB is not configured. Run npm run db:seed before the next build.";
  }
  try {
    const db = await getDb();
    const documents = db.collection<DocumentFile & { _id: string }>("documents");
    const storedSources = db.collection<Source & { _id: string }>("sources");
    await documents.replaceOne({ _id: doc.id }, doc, { upsert: true });
    if (previous && previous !== doc.id) {
      await documents.deleteOne({ _id: previous });
    }
    if (source) {
      await storedSources.replaceOne({ _id: source.id }, source, { upsert: true });
    }
    clearContentCache();
    return "The database copy was updated.";
  } catch {
    return "The article file was saved, but the database update failed. Run npm run db:seed before the next build.";
  }
}

export async function publishDraftRecord(draft: DraftRecord): Promise<
  { ok: true; draft: DraftRecord } | { ok: false; errors: string[] }
> {
  const assessment = assessDraft(draft);
  if (!assessment.doc || assessment.errors.length > 0) {
    return { ok: false, errors: assessment.errors };
  }

  const doc = assessment.doc;
  const image = writeIllustration(doc.slug);
  const imageFile = path.join(process.cwd(), "public", doc.media.featured_image);
  if (!fs.existsSync(imageFile)) {
    return { ok: false, errors: ["Could not write the illustration."] };
  }

  fs.mkdirSync(ARTICLE_DIR, { recursive: true });
  const previous = previousSlug(draft.published_path);
  if (previous && previous !== doc.slug) {
    const oldFile = path.join(ARTICLE_DIR, `${previous}.json`);
    if (fs.existsSync(oldFile)) fs.unlinkSync(oldFile);
  }

  try {
    fs.writeFileSync(path.join(ARTICLE_DIR, `${doc.slug}.json`), `${JSON.stringify(doc, null, 2)}\n`);
    writeSources(assessment.source);
  } catch (error) {
    if (!image.existed) removeIllustration(doc.slug);
    const message = error instanceof Error ? error.message : "Could not write the article.";
    return { ok: false, errors: [message] };
  }

  const notice = [
    `Published to ${doc.path}.`,
    "This page is served after the next build.",
    await syncDatabase(doc, assessment.source, previous),
  ].join(" ");

  const saved = writeDraft({
    ...draft,
    status: "published",
    published_path: doc.path,
    notice,
  });
  return { ok: true, draft: saved };
}
