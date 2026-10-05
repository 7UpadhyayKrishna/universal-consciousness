import type { DocumentFile } from "./schema";

export function plainText(doc: Pick<
  DocumentFile,
  "quick_answer" | "intro" | "sections" | "key_takeaways" | "faq"
>): string {
  return [
    doc.quick_answer.question,
    doc.quick_answer.answer,
    doc.intro,
    ...doc.sections.flatMap((section) => [section.heading, section.content]),
    ...doc.key_takeaways,
    ...doc.faq.flatMap((item) => [item.question, item.answer]),
  ].join("\n");
}

export function wordCount(text: string): number {
  const stripped = text
    .replace(/```[\s\S]*?```/g, " ")
    .replace(/\[([^\]]+)\]\([^)]+\)/g, "$1")
    .replace(/https?:\/\/\S+/g, " ")
    .replace(/[#>*_~`|]/g, " ")
    .replace(/[^\p{L}\p{N}\s'-]/gu, " ")
    .replace(/\s+/g, " ")
    .trim();
  if (!stripped) return 0;
  return stripped.split(" ").filter(Boolean).length;
}

export function readingTime(words: number): number {
  return Math.max(1, Math.round(words / 230));
}

export function minimumWords(kind: DocumentFile["kind"]): number {
  switch (kind) {
    case "pillar":
    case "explainer":
    case "guide":
    case "comparison":
    case "misconception":
      return 420;
    case "glossary":
    case "chakra":
    case "meditation":
    case "yoga":
      return 420;
    case "question":
      return 400;
    case "hub":
      return 280;
    case "trust":
    case "author":
      return 350;
    default:
      return 200;
  }
}

export function extractInternalLinks(text: string): string[] {
  const links: string[] = [];
  const pattern = /\[[^\]]+\]\((\/[^)\s]+)\)/g;
  for (const match of text.matchAll(pattern)) {
    links.push(normalizePath(match[1]));
  }
  return links;
}

export function normalizePath(path: string): string {
  const [withoutHash] = path.split("#");
  const [withoutQuery] = withoutHash.split("?");
  if (withoutQuery === "/") return "/";
  return withoutQuery.endsWith("/") ? withoutQuery : `${withoutQuery}/`;
}
