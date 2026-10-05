import fs from "fs";
import path from "path";

export function emit(spec) {
  const doc = {
    id: spec.id,
    kind: spec.kind,
    status: "published",
    title: spec.title,
    slug: spec.slug,
    path: spec.path,
    h1: spec.title,
    excerpt: spec.excerpt,
    quick_answer: spec.quick_answer,
    topic: spec.topic,
    category: spec.category,
    subtopics: spec.subtopics ?? [],
    intent: spec.intent,
    primary_keyword: spec.primary_keyword,
    secondary_keywords: spec.secondary_keywords ?? [],
    entities: spec.entities ?? [],
    about: spec.about ?? [],
    mentions: spec.mentions ?? [],
    intro: spec.intro,
    sections: spec.sections,
    key_takeaways: spec.key_takeaways,
    faq: spec.faq,
    source_ids: spec.source_ids ?? [],
    author_id: "editorial-team",
    seo: {
      meta_title: spec.title,
      meta_description: spec.description,
      canonical: spec.path,
      robots: "index,follow",
      og_title: spec.title,
      og_description: spec.description,
      og_image: `/images/${spec.id}.svg`,
    },
    media: {
      featured_image: `/images/${spec.id}.svg`,
      featured_image_alt: spec.alt,
      width: 1600,
      height: 900,
    },
    publication: {
      date_published: "2026-10-04T10:00:00-04:00",
      date_modified: "2026-10-04T10:00:00-04:00",
    },
    language: "en-US",
    country: "US",
    related: spec.related ?? [],
    children: spec.children ?? [],
    disclaimer: { required: Boolean(spec.disclaimer), text: "" },
    facts: spec.facts ?? {},
  };
  const file = path.join(process.cwd(), spec.file);
  fs.mkdirSync(path.dirname(file), { recursive: true });
  fs.writeFileSync(file, `${JSON.stringify(doc, null, 2)}\n`);
}

export function category(name, slug) {
  return { id: slug, name, slug };
}
