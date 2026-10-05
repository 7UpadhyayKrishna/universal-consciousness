import { category } from "../scripts/lib/doc.mjs";
import { mdpage } from "../scripts/lib/mdpage.mjs";

const hubs = [
  ["meditation", "Meditation", ["meditation-for-beginners", "daily-meditation-practice", "what-is-meditation", "meditation-vs-mindfulness"], ["/meditation/mindfulness/", "/meditation/breath-awareness/"], "Practical reading on how to meditate, what the main methods are, and which health claims to decline."],
  ["spirituality", "Spirituality", ["what-is-spirituality", "starting-a-spiritual-practice", "spirituality-vs-religion", "spiritual-awakening-and-enlightenment"], ["/topics/ancient-wisdom/", "/topics/consciousness/"], "A short path through meaning, practice, and the difference between spirituality and religion."],
  ["chakras", "Chakras", ["what-are-chakras", "understanding-chakras", "are-chakras-scientific"], ["/chakras/root-chakra/", "/chakras/heart-chakra/", "/chakras/crown-chakra/"], "Guides to the chakra chart that keep the modern rainbow system in its historical place."],
  ["yoga", "Yoga", ["what-is-yoga-philosophy", "yoga-philosophy-for-beginners", "yoga-vs-meditation"], ["/yoga/hatha-yoga/", "/yoga/kundalini-yoga/", "/yoga/yin-yoga/"], "Reading on yoga philosophy and on styles that are easy to confuse with one another."],
  ["kundalini", "Kundalini", ["what-is-kundalini", "kundalini-for-beginners", "is-kundalini-dangerous", "kundalini-yoga-vs-hatha-yoga"], ["/yoga/kundalini-yoga/", "/topics/chakras/"], "A careful path through kundalini language, beginner limits, and the modern class format."],
  ["consciousness", "Consciousness", ["what-is-consciousness", "what-is-mindfulness"], ["/glossary/awareness/", "/glossary/non-duality/", "/topics/vedanta/"], "Reading that keeps philosophy, practice, and spiritual doctrine from collapsing into one word."],
];

for (const [slug, name, articles, extras, dek] of hubs) {
  const children = [
    ...articles.map((id) => `/articles/${id}/`),
    ...extras,
  ];
  const list = children.map((path) => `[${path}](${path})`).join(", ");
  mdpage(
    {
      id: `guide-${slug}`,
      kind: "hub",
      title: `Guides for Reading about ${name}`,
      slug,
      path: `/guides/${slug}/`,
      topic: slug,
      category: category(name, slug),
      excerpt: dek,
      description: `${dek} Start with the topic pillar, then use the linked pages for a narrower question.`.slice(0, 160),
      alt: `Abstract geometric illustration introducing the ${name} guide collection.`,
      intent: ["informational"],
      primary_keyword: `${name.toLowerCase()} guide`,
      about: [slug === "consciousness" ? "consciousness" : slug],
      mentions: [],
      source_ids: slug === "kundalini" || slug === "chakras" ? ["britannica-kundalini", "nccih-yoga"] : ["nccih-meditation", "sep-consciousness"],
      related: [`/topics/${slug}/`, "/editorial-policy/"],
      children,
      disclaimer: slug === "kundalini" || slug === "chakras",
      quick_answer: {
        question: `Where should a ${name.toLowerCase()} reader start?`,
        answer: dek,
      },
      key_takeaways: [
        `The ${name.toLowerCase()} topic pillar is the map.`,
        "Each linked page answers a narrower question.",
        "Health claims stay tied to the disclaimer and the cited sources.",
      ],
      faq: [
        {
          question: "Are these instructions for a course?",
          answer: "No. They are reading paths through the publication. They do not enroll you in a program.",
        },
        {
          question: "What if two pages seem to overlap?",
          answer: "Use the pillar for the overview and the article for the specific question. They link to each other on purpose.",
        },
      ],
      file: `content/documents/hubs/guide-${slug}.json`,
    },
    `${dek}

The map is the [${name} topic](/topics/${slug}/). The pages below are the narrower reading. Use one page for one question, then come back if you need the wider argument. This collection is not a ladder and not a product.

## Which pages are gathered here?

The current set includes ${list}. Titles can be read on the pages themselves. If a link is the definition, prefer it to a secondary comment. If a link is a comparison, it assumes you have seen at least one of the things compared.

New pages will be added when they have a distinct job. A repeated city page or a keyword variant will not be added. The [editorial policy](/editorial-policy/) is the reason. Suggestions can go through the [contact](/contact/) page.

## How should health language be read?

Where a practice is sold as medicine, read the [disclaimer](/disclaimer/) before you change your care. Government summaries and classical texts answer different questions, and this guide will not pretend they are one source. A traditional hope is labeled as a hope. A research summary is linked. Neither becomes a promise because it sits on a guide page.
`,
  );
}

console.log("guide hubs done");
