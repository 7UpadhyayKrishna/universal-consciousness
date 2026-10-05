import { category } from "../scripts/lib/doc.mjs";
import { mdpage } from "../scripts/lib/mdpage.mjs";

function emitPage(page) {
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

Traditional teaching, personal report, and research stay in separate sentences on this site. The [editorial policy](/editorial-policy/) is the rule. The [disclaimer](/disclaimer/) applies whenever a sentence leans toward health, safety, or a promised transformation. The [corrections](/corrections/) page is how to challenge a factual mistake.
`;
  mdpage(
    {
      kind: page.kind,
      id: page.id ?? page.slug,
      title: page.title,
      slug: page.slug,
      path: page.path,
      topic: page.topic,
      category: category(page.category, page.topic),
      excerpt: page.excerpt,
      description: page.description,
      alt: `Abstract geometric illustration of circles and a horizon, made for the page about ${page.category.toLowerCase()}.`,
      intent: page.intent ?? ["informational"],
      primary_keyword: page.keyword,
      secondary_keywords: page.secondary ?? [],
      about: page.about,
      mentions: page.mentions ?? [],
      source_ids: page.sources,
      related: page.related,
      children: page.children ?? [],
      disclaimer: Boolean(page.disclaimer),
      facts: page.facts ?? {},
      quick_answer: { question: page.question, answer: page.answer },
      key_takeaways: page.takeaways,
      faq: page.faq,
      file: page.file,
    },
    markdown,
  );
}

const baseFaq = (q1, a1, q2, a2) => [
  { question: q1, answer: a1 },
  { question: q2, answer: a2 },
];

const pages = [];

function add(page) {
  pages.push(page);
}

add({
  kind: "explainer",
  slug: "what-is-meditation",
  path: "/articles/what-is-meditation/",
  file: "content/documents/articles/what-is-meditation.json",
  topic: "meditation",
  category: "Meditation",
  title: "What Is Meditation? Meaning, Types, and Context",
  excerpt: "Meditation is a family of attention practices with religious and clinical histories, not a single script or a cure.",
  description: "Learn what meditation is, how major methods differ, and what research summaries do and do not claim.",
  keyword: "what is meditation",
  question: "What is meditation?",
  answer: "Meditation is a group of practices that train attention, awareness, or a devotional focus. Traditions disagree about the goal, and research studies specific programs rather than meditation as one thing.",
  about: ["meditation"],
  mentions: ["mindfulness"],
  sources: ["nccih-meditation", "nccih-meditation-depth", "pubmed-goyal-2014"],
  related: ["/topics/meditation/", "/articles/meditation-for-beginners/", "/glossary/meditation/", "/meditation/mindfulness/", "/guides/meditation/", "/articles/meditation-vs-mindfulness/"],
  h1: "What counts as meditation?",
  h2: "Where do the main methods come from?",
  h3: "What does research actually cover?",
  lead: "People use meditation for a clinic, a temple, and a phone app, then speak as if those were one activity. They share the English word and often a seated posture. They do not share one aim.",
  meaning: "A useful test is whether attention is being trained on purpose. Sitting while ruminating can be rest. It is not yet a method. Breath awareness, a mantra, a body scan, and loving-kindness are methods, and they are not interchangeable. The National Center for Complementary and Integrative Health describes meditation as a set of practices with religious roots and secular adaptations.",
  linkA: "[mindfulness practice](/meditation/mindfulness/)",
  origin: "South Asian sources, including the Yoga Sutras and Buddhist attention trainings, supply much of what Americans now meet. Christian and other contemplative histories supply other methods that should not be relabeled as yoga. Twentieth-century clinics built secular courses, especially around mindfulness, without asking patients to adopt a creed.",
  pillar: "the [meditation topic](/topics/meditation/)",
  practice: "A beginner needs one instruction, a tolerable posture, and a short duration. Five or ten minutes counts. Difficulty noticing distraction is the practice, not a failure of it. Guided audio can teach the instruction and can also become a dependency. The beginner guide walks through a first week without promising a new personality.",
  linkB: "[meditation for beginners](/articles/meditation-for-beginners/)",
  caution: "A 2014 systematic review indexed on PubMed found moderate evidence for some stress-related outcomes in some programs and insufficient evidence for many broader claims. Meditation is not a cure and not a replacement for professional care. It is also not risk-free for every mental health history.",
  takeaways: ["Meditation names a family of methods.", "Clinical and religious versions should stay distinct.", "Evidence supports limited stress-related claims only.", "A short daily period is a legitimate start."],
  faq: baseFaq("Do I have to stop thinking?", "No. Most methods teach a way to notice thoughts and return, not a permanently blank mind.", "Is meditation a religion?", "Some forms are religious practices. Others are taught in secular settings. The setting and the aim decide."),
});

emitPage(pages[0]);
console.log("library sample");
