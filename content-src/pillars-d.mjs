import { category } from "../scripts/lib/doc.mjs";
import { mdpage } from "../scripts/lib/mdpage.mjs";

function page(spec, markdown) {
  mdpage(
    {
      kind: "pillar",
      intent: ["informational"],
      file: `content/documents/pillars/${spec.slug}.json`,
      id: `pillar-${spec.slug}`,
      category: category(spec.category, spec.topic),
      topic: spec.topic,
      path: `/topics/${spec.topic}/`,
      alt: `Abstract geometric illustration of circles and rules for the ${spec.category} pillar.`,
      ...spec,
    },
    markdown,
  );
}

page(
  {
    topic: "chakras",
    slug: "chakras",
    category: "Chakras",
    title: "Chakras: Maps of a Subtle Body",
    excerpt:
      "How chakra maps developed, why the seven-color chart is a modern convention, and what those diagrams do not prove about the body.",
    description:
      "Learn what chakras are in yogic tradition, how the seven-color chart developed, and what it does not prove.",
    primary_keyword: "what are chakras",
    secondary_keywords: ["seven chakras", "chakra meaning"],
    about: ["chakras"],
    mentions: ["chakra", "kundalini", "nadi", "prana"],
    source_ids: ["britannica-chakra", "sacred-hatha", "britannica-kundalini", "nccih-yoga"],
    disclaimer: true,
    related: ["/articles/what-are-chakras/", "/articles/understanding-chakras/", "/articles/are-chakras-scientific/", "/chakras/root-chakra/", "/topics/kundalini/", "/guides/chakras/"],
    quick_answer: {
      question: "What are chakras?",
      answer:
        "Chakras are centers in subtle-body maps used by some yoga and tantric traditions. The familiar seven-chakra rainbow chart is a modern teaching aid. It is not an anatomical finding and not a single ancient consensus.",
    },
    key_takeaways: [
      "Chakra means wheel and names a feature of some ritual and yogic maps.",
      "Lists of centers vary across texts and lineages.",
      "The rainbow seven-chakra chart is a modern synthesis.",
      "Colors and psychological slogans are not medical facts.",
    ],
    faq: [
      { question: "Are chakras organs?", answer: "No. Traditions that teach them do not describe them as organs a surgeon would find. Modern medicine does not use chakra maps as anatomy." },
      { question: "Do I need to open my chakras?", answer: "That instruction belongs to particular modern teachings. It is not a requirement of this publication, and it is not a health prescription." },
    ],
  },
  `A chakra, from a Sanskrit word for wheel or circle, is a focal point in some Indian maps of a subtle body. Those maps also speak of channels, called nadis, and of breath or vitality, called prana. The maps are religious and yogic technologies. They are not diagrams from an anatomy textbook.

English-language wellness culture often presents one chart: seven centers, seven colors, seven emotional slogans, from the pelvic floor to the crown. That chart is teachable. It is also younger and simpler than the literature it claims to summarize. This pillar tells the difference. Individual centers are described under [chakra pages](/chakras/). The [explainer](/articles/what-are-chakras/) is the shorter overview.

## What do older sources actually list?

Tantric and hatha texts describe centers, lotuses, and syllables, and they do not all count or locate them in the same way. Some systems emphasize fewer centers. Some describe a different order of practice. The Hatha Yoga Pradipika is one public source in which subtle-body practice appears beside postures and breath. Reading it will not hand you the poster from a yoga studio, and that mismatch is the lesson.

Britannica's chakra article is a compact reference for the general reader. Use it beside the primary text, not instead of noticing that popular teachers simplified a ritual vocabulary for new audiences. Simplification can be honest if it is labeled. It becomes misleading when a poster is called the eternal body.

## Where did the rainbow chart come from?

Nineteenth- and twentieth-century interpreters, writing for European and later American readers, helped stabilize a seven-center teaching. Color associations and psychological meanings were elaborated further in the late twentieth century. The result is a useful folk diagram and a poor historical claim. [Are chakras scientific?](/articles/are-chakras-scientific/) handles the evidence question. [Understanding chakras](/articles/understanding-chakras/) is the beginner path through the diagram without asking you to believe it is medicine.

The [root](/chakras/root-chakra/), [heart](/chakras/heart-chakra/), and [crown](/chakras/crown-chakra/) pages show how a single center gets loaded with modern meanings. Read one of them after this pillar, not before, so the color does not arrive first.

## How are chakras tied to kundalini and prana?

In many of these maps, kundalini is the power said to move, nadis are the paths, and chakras are the stations. That is a traditional picture. It is discussed on the [kundalini](/topics/kundalini/) pillar. Prana is the broader vitality language, defined in the [glossary](/glossary/prana/). None of these words has been shown to name a force instrumented by physiology.

Practitioners may feel heat, emotion, or a shift in attention and map the feeling onto a center. The feeling can be reported. The map is an interpretation. Both can be stated in one paragraph without turning the feeling into a diagnosis or the map into a scan.

## What do modern classes add?

Studios and books assign stones, essential oils, affirmations, and personality types to centers. Those assignments are contemporary crafts. They can be meaningful inside a community. They are not recoverable as the core of the classical literature, and they are not evidence. A red stone does not treat the pelvis. An affirmation does not balance an invisible wheel.

If a class is simply a way to notice posture and breath while a teacher uses chakra language, you can decide whether the language helps you pay attention. You should not leave believing your organs have been evaluated. The [guide hub](/guides/chakras/) collects the pages that stay inside that limit. The [disclaimer](/disclaimer/) applies because this vocabulary is constantly dragged into health marketing.

## How should a careful reader use the chart?

Use it as a glossary of a popular system. Learn the Sanskrit names so you can recognize them. Notice which claims are about tradition and which are about emotion or medicine. When a sentence would still make sense if you removed the word chakra, the sentence was never really about the tradition. When a sentence only works if an invisible organ is real, you are hearing a doctrine.

You can appreciate the diagram as religious art. You can also set it aside and practice [breath awareness](/meditation/breath-awareness/) without it. This publication will not rank your centers or sell a sequence for opening them. The [editorial policy](/editorial-policy/) forbids that kind of authority. If a later source corrects a historical detail on these pages, the correction belongs on the [corrections](/corrections/) page, not in a louder claim.
`,
);

page(
  {
    topic: "reiki",
    slug: "reiki",
    category: "Reiki",
    title: "Reiki: Origins, Practice, and the Evidence",
    excerpt:
      "What Reiki is, where it was taught, what a session is like, and why energy-healing claims are not established science.",
    description:
      "Learn what Reiki is, how sessions are described, and what government health sources say the evidence does not show.",
    primary_keyword: "what is reiki",
    secondary_keywords: ["reiki healing", "reiki evidence"],
    about: ["reiki"],
    mentions: ["prana"],
    source_ids: ["nccih-reiki", "britannica-reiki", "nccih-meditation"],
    disclaimer: true,
    related: ["/articles/what-is-reiki/", "/articles/what-research-says-about-reiki/", "/articles/reiki-vs-pranic-healing/", "/questions/what-should-you-know-before-trying-reiki/", "/glossary/prana/", "/disclaimer/"],
    quick_answer: {
      question: "What is Reiki?",
      answer:
        "Reiki is a Japanese spiritual practice, developed in the early twentieth century, in which a practitioner places hands on or near a person with the aim of supporting healing through a claimed life-force energy. Scientific evidence does not establish that energy system as a physical fact.",
    },
    key_takeaways: [
      "Reiki is a modern Japanese practice, not an ancient Indian chakra cure.",
      "Sessions are usually quiet hand placements, not a medical procedure.",
      "NCCIH states that Reiki has not been clearly shown to be effective for any health condition.",
      "It must not replace professional care.",
    ],
    faq: [
      { question: "Does Reiki cure disease?", answer: "No. This publication does not make that claim, and the public research summaries it relies on do not support it." },
      { question: "Is Reiki the same as prana or chakras?", answer: "Practitioners sometimes borrow those words. Reiki has its own Japanese history and should not be collapsed into every energy vocabulary." },
    ],
  },
  `Reiki is often shelved beside chakras, crystals, and yoga in American shops. Its history is narrower. It is a Japanese practice associated with Mikao Usui in the early twentieth century, later taught through initiation lineages and, in the United States, through weekend trainings and clinical-looking treatment rooms. The atmosphere can be medical. The status of the practice is not.

This pillar separates the tradition's self-description from what health agencies are willing to say. The [explainer](/articles/what-is-reiki/) is the short version. The [evidence page](/articles/what-research-says-about-reiki/) stays with the research. The [question for newcomers](/questions/what-should-you-know-before-trying-reiki/) is the practical briefing.

## How do practitioners describe a session?

A recipient usually lies down or sits, clothed, while a practitioner rests hands on or just above the body in a series of positions. The room is quiet. There is no massage pressure required by the basic description, and there is no drug and no diagnosis. Practitioners say they are channeling or offering a universal life energy. Recipients sometimes report warmth, relaxation, or emotional release.

Those reports can be taken seriously as reports. Relaxation is a familiar human experience and does not require a new energy system to be real as a feeling. The explanation practitioners prefer is a doctrine. Britannica's Reiki article and the NCCIH Reiki page both describe the practice in this neighborhood: a complementary approach, not a proven treatment.

## What does the research summary say?

The National Center for Complementary and Integrative Health says Reiki has been studied for various conditions and that it has not been clearly shown to be effective for any health-related purpose. It also says Reiki should not be used to replace conventional care. That is the sentence this publication will not soften.

Studies in this area are often small, hard to blind, and mixed in quality. A person can feel calmer after quiet attention from another person for reasons that have nothing to do with an undetected energy. Kind attention is not nothing. It is also not a mechanism you can put on a chart of the subtle body and call settled.

## How should Reiki be compared with other energy practices?

[Pranic Healing](/articles/reiki-vs-pranic-healing/) is a different modern system, associated with a different teacher and a different vocabulary. Both speak of life force. Neither has established that force as physiology. [Prana](/glossary/prana/) is an older Sanskrit term from yoga and Ayurveda. Using it as a translation for Reiki's energy is an interpretation across cultures, not a proof that the practices are one tradition.

Chakra language is similarly optional. Some Reiki teachers added it because their students already knew the word. Addition is a history. It is not an origin.

## What should a beginner ask?

Ask what the session costs, what the practitioner will and will not do, and whether they will tell you to delay medical care. The acceptable answer to the last question is no. Ask what lineage or training they claim, and treat the answer as a biography, not as a miracle. Read the [disclaimer](/disclaimer/) before you book anything because you are frightened of a symptom.

You do not need an attunement to understand this page. If you do take a class, notice whether the teaching asks for secrecy, escalating fees, or belief as the price of a basic description. Those are institutional habits. They are not evidence of energy.

## How does this site talk about healing?

Healing is a word people use for recovery, for comfort, and for a spiritual hope. This site will not use it as a synonym for cure. If Reiki helps someone feel accompanied while they receive actual medical care, that accompaniment can be described without a theory of life force. If someone offers Reiki instead of care for a serious illness, that offer should be refused.

The [editorial policy](/editorial-policy/) requires the tradition, the report, and the evidence to stay in separate sentences. This pillar is an example. The [sources](/sources/) list includes the government page so you can read the caution in the author's own words rather than only in ours.
`,
);

console.log("pillars d done");
