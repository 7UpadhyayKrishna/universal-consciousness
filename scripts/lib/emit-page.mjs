import { category } from "./doc.mjs";
import { mdpage } from "./mdpage.mjs";

export function emitPage(page) {
  const markdown = `${page.lead}

## ${page.h1}

${page.meaning}

The neighboring page is ${page.linkA}. Treat that link as part of the argument, not as decoration.

## ${page.h2}

${page.origin}

A wider map lives at ${page.pillar}. Dates and school names matter, because a recent American presentation is often described as if it had no date.

## ${page.h3}

${page.practice}

If you want a narrower practical or comparative page, use ${page.linkB}. You can understand the description without joining a group or buying a course.

## What should a careful reader refuse?

${page.caution}

Readers in the United States often meet a simpler version of the same idea in a class, an app, or a short video. Name that simpler version instead of pretending it is the whole tradition. Traditional teaching, personal report, and research stay in separate sentences on this site. The [editorial policy](/editorial-policy/) is the rule. The [disclaimer](/disclaimer/) applies whenever a sentence leans toward health, safety, or a promised transformation. The [corrections](/corrections/) page is how to challenge a factual mistake. Name the school, the text, or the century whenever a sentence would otherwise float free of history. A reader may stop at the definition when that is all the question required.
`;
  const kindFolder = {
    explainer: "articles",
    guide: "articles",
    comparison: "articles",
    misconception: "articles",
    question: "questions",
    glossary: "glossary",
    chakra: "chakras",
    meditation: "meditation",
    yoga: "yoga",
    pillar: "pillars",
    hub: "hubs",
  }[page.kind];
  mdpage(
    {
      kind: page.kind,
      id: page.id ?? page.slug,
      title: page.title,
      slug: page.slug,
      path: page.path ?? `/${kindFolder === "articles" ? "articles" : kindFolder}/${page.slug}/`,
      topic: page.topic,
      category: category(page.category, page.topic),
      excerpt: page.excerpt,
      description: page.description,
      alt: `Abstract geometric illustration of circles and a horizon for the page on ${page.category.toLowerCase()}.`,
      intent: page.intent ?? ["informational"],
      primary_keyword: page.keyword,
      secondary_keywords: [],
      about: page.about,
      mentions: page.mentions ?? [],
      source_ids: page.sources,
      related: page.related,
      disclaimer: Boolean(page.disclaimer),
      facts: page.facts ?? {},
      quick_answer: { question: page.question, answer: page.answer },
      key_takeaways: page.takeaways,
      faq: page.faq.map((item) => ({
        ...item,
        answer:
          item.answer.length >= 40
            ? item.answer
            : `${item.answer} The longer linked page carries the rest of the context.`,
      })),
      file: `content/documents/${kindFolder}/${page.slug}.json`,
    },
    markdown,
  );
}

export function faq(q1, a1, q2, a2) {
  return [
    { question: q1, answer: a1 },
    { question: q2, answer: a2 },
  ];
}
