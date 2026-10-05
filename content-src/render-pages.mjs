import { category } from "../scripts/lib/doc.mjs";
import { mdpage } from "../scripts/lib/mdpage.mjs";

const floors = {
  pillar: 540,
  explainer: 540,
  guide: 540,
  comparison: 540,
  misconception: 540,
  glossary: 600,
  chakra: 600,
  meditation: 600,
  yoga: 600,
  question: 450,
  hub: 260,
};

function words(text) {
  return text
    .replace(/\[([^\]]+)\]\([^)]+\)/g, "$1")
    .replace(/[^\p{L}\p{N}\s'-]/gu, " ")
    .trim()
    .split(/\s+/)
    .filter(Boolean).length;
}

export function renderPages(pages) {
  for (const page of pages) {
    const folder =
      page.kind === "pillar"
        ? "pillars"
        : page.kind === "explainer" ||
            page.kind === "guide" ||
            page.kind === "comparison" ||
            page.kind === "misconception"
          ? "articles"
          : page.kind === "hub"
            ? "hubs"
            : `${page.kind}s`;
    const fileKind = page.kind === "glossary" ? "glossary" : folder;
    const markdown = [page.intro, ...page.sections.map((section) => `## ${section.heading}\n\n${section.content}`)].join("\n\n");
    const bodyWords = words(
      `${page.quick_answer.question} ${page.quick_answer.answer} ${markdown} ${page.key_takeaways.join(" ")} ${page.faq.map((item) => `${item.question} ${item.answer}`).join(" ")}`,
    );
    const floor = floors[page.kind] ?? 200;
    if (bodyWords < floor) {
      console.error(`SHORT ${bodyWords}/${floor} ${page.path}`);
    }
    mdpage(
      {
        id: page.id,
        kind: page.kind,
        title: page.title,
        slug: page.slug,
        path: page.path,
        topic: page.topic,
        category: category(page.category, page.categorySlug ?? page.topic),
        excerpt: page.excerpt,
        description: page.description,
        alt: page.alt,
        intent: page.intent ?? ["informational"],
        primary_keyword: page.primary_keyword,
        secondary_keywords: page.secondary_keywords ?? [],
        about: page.about ?? [],
        mentions: page.mentions ?? [],
        source_ids: page.source_ids,
        related: page.related ?? [],
        children: page.children ?? [],
        disclaimer: page.disclaimer ?? false,
        facts: page.facts ?? {},
        quick_answer: page.quick_answer,
        key_takeaways: page.key_takeaways,
        faq: page.faq,
        file: page.file ?? `content/documents/${fileKind}/${page.slug}.json`,
      },
      markdown,
    );
  }
}
