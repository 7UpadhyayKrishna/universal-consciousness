export const ARTICLE_KINDS = [
  "explainer",
  "guide",
  "comparison",
  "misconception",
] as const;

export const SOURCE_TYPES = [
  "academic",
  "government",
  "medical",
  "book",
  "primary-text",
  "research-paper",
  "institution",
  "official-organization",
  "reference",
] as const;

export const SENSITIVE_TOPICS = [
  "kundalini",
  "reiki",
  "ayurveda",
  "chakras",
  "breathwork",
] as const;

export type ArticleKind = (typeof ARTICLE_KINDS)[number];
export type SourceType = (typeof SOURCE_TYPES)[number];

export type TopicOption = { id: string; name: string };
export type SourceOption = { id: string; name: string; title: string };
export type PathOption = { path: string; title: string };
export type DraftSection = { heading: string; content: string };
export type DraftFaq = { question: string; answer: string };
export type DraftSource = {
  id: string;
  name: string;
  title: string;
  url: string;
  type: SourceType;
};

export type DraftRecord = {
  id: string;
  status: "draft" | "published";
  title: string;
  slug: string;
  kind: ArticleKind;
  topic: string;
  excerpt: string;
  quick_question: string;
  quick_answer: string;
  intro: string;
  sections: DraftSection[];
  takeaways: string[];
  faq: DraftFaq[];
  related: string[];
  source_ids: string[];
  new_source: DraftSource;
  disclaimer: boolean;
  meta_title: string;
  meta_description: string;
  image_alt: string;
  published_path: string;
  notice: string;
  updated_at: string;
};

export function emptyDraft(): DraftRecord {
  return {
    id: "",
    status: "draft",
    title: "",
    slug: "",
    kind: "explainer",
    topic: "meditation",
    excerpt: "",
    quick_question: "",
    quick_answer: "",
    intro: "",
    sections: [
      { heading: "", content: "" },
      { heading: "", content: "" },
      { heading: "", content: "" },
      { heading: "", content: "" },
    ],
    takeaways: ["", "", ""],
    faq: [
      { question: "", answer: "" },
      { question: "", answer: "" },
    ],
    related: [],
    source_ids: [],
    new_source: { id: "", name: "", title: "", url: "", type: "reference" },
    disclaimer: false,
    meta_title: "",
    meta_description: "",
    image_alt: "",
    published_path: "",
    notice: "",
    updated_at: "",
  };
}

export function slugify(value: string): string {
  return value
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/['’]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 80)
    .replace(/-+$/g, "");
}

export function disclaimerLocked(kind: ArticleKind, topic: string): boolean {
  return kind === "misconception" || (SENSITIVE_TOPICS as readonly string[]).includes(topic);
}
