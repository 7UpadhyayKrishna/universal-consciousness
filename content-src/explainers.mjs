import { category } from "../scripts/lib/doc.mjs";
import { mdpage } from "../scripts/lib/mdpage.mjs";

function explainer(spec, markdown) {
  mdpage(
    {
      kind: "explainer",
      intent: ["informational", "definition"],
      file: `content/documents/articles/${spec.slug}.json`,
      id: spec.slug,
      category: category(spec.category, spec.topic),
      alt: `Abstract geometric illustration for an explainer about ${spec.category.toLowerCase()}.`,
      ...spec,
    },
    markdown,
  );
}

const pages = [];

explainer(
  {
    slug: "what-is-consciousness",
    path: "/articles/what-is-consciousness/",
    topic: "consciousness",
    category: "Consciousness",
    title: "What Is Consciousness? Meaning and Major Views",
    excerpt: "A direct explanation of consciousness as subjective experience, and how philosophy, science, and spiritual traditions use the word differently.",
    description: "Consciousness means subjective experience. See how philosophy, neuroscience, and spiritual traditions use the word differently.",
    primary_keyword: "what is consciousness",
    about: ["consciousness"],
    mentions: ["awareness", "vedanta"],
    source_ids: ["sep-consciousness", "sep-self-consciousness", "sep-panpsychism"],
    related: ["/topics/consciousness/", "/glossary/consciousness/", "/glossary/awareness/", "/topics/vedanta/", "/topics/meditation/", "/guides/consciousness/"],
    quick_answer: { question: "What is consciousness?", answer: "Consciousness is the capacity for experience, the fact that seeing, feeling, or thinking is like something for a subject. Philosophers, scientists, and spiritual traditions explain that fact in incompatible ways." },
    key_takeaways: ["The core puzzle is subjective experience.", "Wakefulness and self-reflection are nearby but different ideas.", "A meditation report does not settle the philosophy.", "This site's name is not a doctrine."],
    faq: [
      { question: "Is consciousness the brain?", answer: "Brain research studies correlates of experience. Whether those correlates fully explain experience is still argued." },
      { question: "Does the publication claim universal mind?", answer: "No. The name marks a subject area. It is not a finding that one mind contains everyone." },
    ],
  },
  `Consciousness, in the sense that matters for this article, means experience. There is something it is like to taste, to worry, or to see a color. You can be awake without that word, and you can use the word for a religious idea that goes far beyond being awake. The [topic pillar](/topics/consciousness/) sorts those uses. This page is the definition.

## What is the philosophical problem?

The Stanford Encyclopedia of Philosophy treats consciousness as a cluster of problems, not one switch. Subjective experience is the hard center. Self-consciousness, the ability to think of experience as yours, is a further capacity. Attention and wakefulness are neighbors. Collapsing them makes every spiritual sentence sound deeper than it is.

Panpsychism, the proposal that experience is somehow basic in nature, is a live option for some philosophers and an unattractive one for others. Naming it is not endorsing it. The [glossary](/glossary/consciousness/) keeps the short form. [Awareness](/glossary/awareness/) is the nearby word people use when they want less theory.

## What can science say?

Neuroscience can relate reports of experience to brain activity, sleep, and anesthesia. Those relations are real research. They do not, by themselves, answer why any physical process is accompanied by a felt world. This article will not pretend a scan closed the question.

Medical uses of conscious, as in a conscious patient, are practical and should stay in the clinic. They are a poor metaphor for enlightenment. [Meditation](/topics/meditation/) can change attention. It is not a coma scale.

## How do traditions use the same English word?

Advaita Vedanta talks about a witnessing awareness and about the identity of self and brahman. That is a doctrine, explained on the [Vedanta](/topics/vedanta/) page, not a laboratory result. Buddhist traditions often train attention while denying a permanent self. Using one English noun for both is how readers lose the argument.

A strong meditation hour can feel like evidence. It is evidence of an experience. The [guide](/guides/consciousness/) lists the pages that keep the next inference in check. The [editorial policy](/editorial-policy/) is why this explainer will not upgrade a feeling into a cosmology.
`,
);

console.log("explainers started");
