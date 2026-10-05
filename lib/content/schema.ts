import { z } from "zod";

export const sourceSchema = z.object({
  id: z.string().min(1),
  name: z.string().min(1),
  title: z.string().min(1),
  url: z.string().refine((value) => {
    try {
      const url = new URL(value);
      return url.protocol === "https:" || url.protocol === "http:";
    } catch {
      return false;
    }
  }, "Source URL must be absolute"),
  type: z.enum([
    "academic",
    "government",
    "medical",
    "book",
    "primary-text",
    "research-paper",
    "institution",
    "official-organization",
    "reference",
  ]),
});

export const entitySchema = z.object({
  id: z.string().regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/),
  name: z.string().min(1),
  type: z.enum([
    "Concept",
    "Practice",
    "Tradition",
    "Text",
    "Publication",
    "Organization",
  ]),
  path: z.string().startsWith("/"),
  summary: z.string().min(20),
});

export const relationshipSchema = z.object({
  source: z.string().min(1),
  relationship: z.enum([
    "relatedTo",
    "partOf",
    "originatedIn",
    "associatedWith",
    "contrastsWith",
    "explainedBy",
    "practicedThrough",
    "mentionedIn",
    "writtenAboutBy",
  ]),
  target: z.string().min(1),
});

export const documentSchema = z.object({
  id: z.string().regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/),
  kind: z.enum([
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
    "hub",
    "trust",
    "author",
  ]),
  status: z.literal("published"),
  title: z.string().min(8),
  slug: z.string().regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/),
  path: z.string().regex(/^\/(?:[a-z0-9-]+\/)+$/),
  h1: z.string().min(8),
  excerpt: z.string().min(40),
  quick_answer: z.object({
    question: z.string().min(8),
    answer: z.string().min(40),
  }),
  topic: z.string().min(1),
  category: z.object({
    id: z.string().min(1),
    name: z.string().min(1),
    slug: z.string().min(1),
  }),
  subtopics: z.array(z.string()).default([]),
  intent: z.array(z.string()).min(1),
  primary_keyword: z.string().min(2),
  secondary_keywords: z.array(z.string()).default([]),
  entities: z
    .array(z.object({ name: z.string(), type: z.string() }))
    .default([]),
  about: z.array(z.string()).default([]),
  mentions: z.array(z.string()).default([]),
  intro: z.string().min(40),
  sections: z
    .array(
      z.object({
        heading: z.string().min(8),
        slug: z.string().regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/),
        content: z.string().min(40),
      }),
    )
    .min(1),
  key_takeaways: z.array(z.string().min(8)).min(3),
  faq: z
    .array(
      z.object({
        question: z.string().min(8),
        answer: z.string().min(40),
      }),
    )
    .min(2),
  source_ids: z.array(z.string()).default([]),
  author_id: z.string().default("editorial-team"),
  seo: z.object({
    meta_title: z.string().min(20).max(70),
    meta_description: z.string().min(80).max(170),
    canonical: z.string(),
    robots: z.string().default("index,follow"),
    og_title: z.string().min(8),
    og_description: z.string().min(40),
    og_image: z.string().startsWith("/"),
  }),
  media: z.object({
    featured_image: z.string().startsWith("/images/"),
    featured_image_alt: z.string().min(20),
    width: z.number().int().positive().default(1600),
    height: z.number().int().positive().default(900),
  }),
  publication: z.object({
    date_published: z.string().min(10),
    date_modified: z.string().min(10),
  }),
  language: z.literal("en-US").default("en-US"),
  country: z.literal("US").default("US"),
  related: z.array(z.string()).default([]),
  children: z.array(z.string()).default([]),
  disclaimer: z
    .object({
      required: z.boolean(),
      text: z.string().default(""),
    })
    .default({ required: false, text: "" }),
  facts: z.record(z.string(), z.string()).default({}),
});

export const redirectSchema = z.object({
  source: z.string().min(1),
  destination: z.string().min(1),
  permanent: z.boolean(),
});

export type Source = z.infer<typeof sourceSchema>;
export type Entity = z.infer<typeof entitySchema>;
export type Relationship = z.infer<typeof relationshipSchema>;
export type Document = z.infer<typeof documentSchema> & { sources: Source[] };
export type DocumentFile = z.infer<typeof documentSchema>;
