import { category } from "../scripts/lib/doc.mjs";
import { mdpage } from "../scripts/lib/mdpage.mjs";

const sharedFaq = (a, b) => [
  { question: a[0], answer: a[1] },
  { question: b[0], answer: b[1] },
];

function page(spec, markdown) {
  mdpage(
    {
      kind: "pillar",
      intent: ["informational"],
      file: `content/documents/pillars/${spec.topic}.json`,
      id: `pillar-${spec.topic}`,
      slug: spec.topic,
      category: category(spec.category, spec.topic),
      path: `/topics/${spec.topic}/`,
      alt: `Abstract geometric illustration for the ${spec.category} topic, with circles and a quiet horizon.`,
      ...spec,
    },
    markdown,
  );
}

page(
  {
    topic: "ayurveda",
    category: "Ayurveda",
    title: "Ayurveda: Classical Ideas and Modern Cautions",
    excerpt: "What Ayurveda is as a classical Indian medical tradition, how doshas are used, and which safety warnings belong beside the philosophy.",
    description: "Learn what Ayurveda teaches about constitution and routine, and which safety warnings matter for modern products.",
    primary_keyword: "what is ayurveda",
    about: ["ayurveda"],
    mentions: ["prana", "ancient-wisdom"],
    source_ids: ["nccih-ayurveda", "britannica-ayurveda", "britannica-prana"],
    disclaimer: true,
    related: ["/articles/what-is-ayurveda/", "/glossary/prana/", "/topics/ancient-wisdom/", "/disclaimer/", "/topics/yoga/", "/sources/"],
    quick_answer: { question: "What is Ayurveda?", answer: "Ayurveda is a classical Indian medical tradition organized around constitution, digestion, daily routine, and balance among bodily forces called doshas. It is a historical system of medicine, not a proven cure, and some modern products raise safety concerns." },
    key_takeaways: ["Ayurveda is a classical medical tradition, not a spa menu.", "The three doshas are explanatory categories, not lab results.", "Some products have been found to contain harmful metals.", "It should not replace emergency or conventional care."],
    faq: sharedFaq(["Are doshas scientific types?", "They are traditional categories used to guide regimen. They are not a substitute for medical diagnosis."], ["Is Ayurveda safe because it is natural?", "No. Natural does not mean safe. NCCIH warns that some Ayurvedic products have contained lead, mercury, or arsenic."]),
  },
  `Ayurveda, often translated as knowledge of life or longevity, is a classical South Asian medical tradition. Its literature discusses constitution, digestion, seasonal routine, and a wide materia medica. In the United States it is frequently encountered as a wellness aesthetic: oils, teas, and a quiz that names you vata, pitta, or kapha. The aesthetic is not the tradition, and neither is a license to skip medical care.

The [explainer](/articles/what-is-ayurveda/) keeps the definition short. This pillar adds the cautions that belong in the same breath as the philosophy. [Prana](/glossary/prana/) is part of the vitality language Ayurveda shares with yoga, and it is not a measured gas.

## What are the doshas?

Classical teaching describes three doshas, vata, pitta, and kapha, as patterns of movement, transformation, and stability in the body. A practitioner may say someone has a mixed constitution and recommend food, sleep, or seasonal habits on that basis. The categories organize experience. They are not blood types, and a website quiz is not a clinical evaluation.

Readers can learn the vocabulary without granting it diagnostic authority. If you are ill, the relevant categories are the ones your clinician uses. Ayurveda can be studied as history and as a living tradition beside that care, not instead of it.

## What does a classical approach care about?

Texts and practitioners spend attention on digestion, routine, and environment. Meals, sleep, and the pace of a day are treated as medicine. That emphasis can look like ordinary good sense, and sometimes it is. It can also slide into rigid rules that blame a sick person for being the wrong type. A tradition's insight and a tradition's harshness can travel together. This site will name both.

The [ancient wisdom](/topics/ancient-wisdom/) pages put Ayurveda next to philosophical sources without pretending one Sanskrit shelf agrees with itself. [Yoga](/topics/yoga/) is a neighbor, not a synonym.

## What do modern regulators warn about?

The National Center for Complementary and Integrative Health explains Ayurveda for a U.S. audience and warns that some products have contained toxic metals, whether as contaminants or as ingredients in certain formulations. That warning is not a footnote. It is a reason to avoid buying medicines online because a label sounds traditional.

Herbs can interact with drugs. They can harm the liver. They can be the wrong product in the bottle. None of this is solved by the word natural. The [disclaimer](/disclaimer/) and the [sources](/sources/) page exist so the warning stays attached to a public document you can read yourself.

## How should this publication talk about treatment?

It will describe what the tradition says a regimen is for. It will not say the regimen treats a named disease. It will not recommend a cleanse, a purge, or a metal-containing preparation. Panchakarma and similar intensive procedures are traditional therapies with risks. They are not detox in the marketing sense, and this site does not offer instructions for them.

If a sentence would send you to a product, it does not belong here. If a sentence helps you recognize a dosha chart as a traditional tool, it does. The [editorial policy](/editorial-policy/) is the rule. Britannica's Ayurveda article is a general reference for the historical frame, not a prescription.

## What is a reasonable way to learn more?

Learn the history before you buy a product. Read the NCCIH page on Ayurvedic medicine and notice how much of it is a safety document. If you consult a practitioner, ask what they recommend you keep doing with your existing clinicians. A good answer leaves your prescriptions alone unless a qualified prescriber changes them.

Use this cluster to understand a tradition, not to assemble a pharmacy. The [explainer](/articles/what-is-ayurveda/) repeats the cautions in shorter form because people often land there first. Either page should leave you more careful than you arrived, not more certain that an ancient label settles a modern illness.
`,
);

page(
  {
    topic: "ancient-wisdom",
    category: "Ancient Wisdom",
    title: "Ancient Wisdom: Reading Indian Traditions Carefully",
    excerpt: "A guide to reading the Upanishads, the Bhagavad Gita, and later philosophical schools without flattening them into slogans.",
    description: "Read Indian philosophical sources in context, including the Upanishads, the Gita, and later debates about the self.",
    primary_keyword: "indian spiritual philosophy",
    about: ["ancient-wisdom"],
    mentions: ["upanishads", "bhagavad-gita", "indian-philosophy", "vedanta"],
    source_ids: ["sep-epistemology-india", "britannica-upanishad", "sacred-gita", "sacred-upanishads"],
    related: ["/topics/vedanta/", "/topics/moksha/", "/glossary/dharma/", "/questions/what-does-it-mean-to-study-a-spiritual-text/", "/guides/consciousness/", "/topics/yoga/"],
    quick_answer: { question: "What does this site mean by ancient wisdom?", answer: "It means Indian philosophical and spiritual sources read in historical context: the Upanishads, the Bhagavad Gita, and later arguments about knowledge, self, and liberation. It does not mean a timeless set of life hacks." },
    key_takeaways: ["Ancient wisdom here means sources, not slogans.", "The Upanishads and the Gita do not say one thing.", "Later schools argue about how those texts should be read.", "A careful reader keeps disagreement visible."],
    faq: sharedFaq(["Is there one Indian philosophy?", "No. Classical India sustained several schools with incompatible claims about the self, knowledge, and liberation."], ["Can I trust a single-sentence quote?", "Only as a prompt to read the passage. Short quotes are easy to aim at a modern mood the text was not answering."]),
  },
  `Ancient wisdom is a marketing phrase as often as it is a description. This publication uses it for a specific shelf: Indian philosophical and religious sources, read with their arguments intact. The Upanishads inquire into sacrifice, self, and what is ultimate. The Bhagavad Gita stages a crisis about duty and offers paths of action, knowledge, and devotion. Later philosophers do not treat those books as a single smoothie.

The Stanford Encyclopedia's article on epistemology in classical Indian philosophy is a reminder that these traditions argued about how anyone knows anything. That argument is the opposite of a meme. Start with [Vedanta](/topics/vedanta/) and [moksha](/topics/moksha/) if you want the two widest doors. The [glossary](/glossary/) is for single words such as [dharma](/glossary/dharma/).

## What should you read first?

Read a short, identified passage rather than a book of quotations. A public translation of the Gita and a public selection of the Upanishads are linked from this site's sources. You will meet repetition, ritual assumptions, and claims that do not match a contemporary self-help tone. That friction is useful. The page [what it means to study a spiritual text](/questions/what-does-it-mean-to-study-a-spiritual-text/) describes a slower method.

Do not begin with a teacher who says the text means whatever helps you manifest a goal. Meaning is constrained by language, context, and the commentarial fights that followed. You can still find the text moving. You do not have to pretend it was written for your quarter.

## Why do schools disagree?

Because the sources are compressed and the stakes are high. Vedanta commentators dispute how the self relates to brahman. Yoga and Samkhya talk about consciousness and matter in a dualist key that Advaita rejects. Buddhist philosophers deny a permanent self. Putting all of these under ancient wisdom without the disagreements is how a bookstore section replaces a library.

[Indian philosophy](/topics/ancient-wisdom/) on this site is this cluster, not a mood. [Yoga philosophy](/articles/what-is-yoga-philosophy/) is one path through it. [Consciousness](/topics/consciousness/) is the modern word readers bring. The sources often had a more precise vocabulary, which is why the glossary exists.

## What gets lost in American presentation?

Lineage, ritual, and social context get lost first. A sentence about the self becomes a sentence about self-esteem. A sentence about renunciation becomes a weekend offline. Sometimes the translation is a bridge. Sometimes it is a replacement. This publication tries to say which one is happening.

It also refuses fake antiquity. A practice invented in California in 1970 can be interesting and should be dated. Calling it ancient is a sales tactic. The [editorial policy](/editorial-policy/) treats that tactic as an error. Corrections can be sent through the [contact](/contact/) page when a date or attribution on these pages is wrong.

## How does this cluster connect?

[Vedanta](/topics/vedanta/) is the commentarial tradition most readers will meet next. [Moksha](/topics/moksha/) is the liberation language those texts argue about. [Yoga](/topics/yoga/) is both a philosophical path and a modern class, which is why it has its own pillar rather than being swallowed here. [Dharma](/glossary/dharma/) and [karma](/glossary/karma/) are the words the Gita will not let you skip.

Read one primary passage this week and one reference article, then stop. A pile of quotations feels like learning and often is not. The [sources](/sources/) list is the shelf. The point of ancient wisdom, on this site, is that the shelf is larger than a caption. If you remember a date, a title, and a disagreement, you have learned more than if you remember only a mood.
`,
);

page(
  {
    topic: "vedanta",
    category: "Vedanta",
    title: "Vedanta: Self, Reality, and the Upanishads",
    excerpt: "How Vedanta reads the Upanishads, why Advaita says atman and brahman are not two, and what that claim does not settle.",
    description: "Understand Vedanta, the Upanishads, and the Advaita claim that the self and ultimate reality are not two.",
    primary_keyword: "what is vedanta",
    about: ["vedanta"],
    mentions: ["atman", "brahman", "upanishads", "non-duality"],
    source_ids: ["iep-advaita", "britannica-vedanta", "sacred-upanishads", "britannica-atman", "britannica-brahman"],
    related: ["/articles/what-is-vedanta/", "/articles/atman-vs-brahman/", "/glossary/non-duality/", "/topics/moksha/", "/topics/ancient-wisdom/", "/questions/how-do-vedanta-teachers-describe-the-self/"],
    quick_answer: { question: "What is Vedanta?", answer: "Vedanta is an Indian philosophical tradition that interprets the Upanishads, the Brahma Sutras, and the Bhagavad Gita. Advaita Vedanta, associated with Shankara, teaches that the self and ultimate reality are not two different things." },
    key_takeaways: ["Vedanta is commentary on a set of sources, not a single quote.", "Advaita is one Vedanta, not the only one.", "Atman and brahman are technical terms with a disputed relation.", "The teaching is philosophical, not a medical or productivity method."],
    faq: sharedFaq(["Is Vedanta the same as yoga?", "They share history and some vocabulary. Classical yoga and Advaita Vedanta do not offer the same metaphysics."], ["Does non-duality mean nothing matters?", "No. Advaita's claim is about the nature of the self and reality. Ethical life is still discussed, and the claim is not a reason to neglect people."]),
  },
  `Vedanta means, roughly, the end or culmination of the Veda. In practice it names schools that take the Upanishads, the Brahma Sutras, and the Bhagavad Gita as a canon and then argue about how to read them. The argument is the tradition. A single sentence on a mug is not.

Advaita, the non-dual school associated with Shankara, is the version most English-language readers meet. The Internet Encyclopedia of Philosophy's Advaita article is the public map this site trusts for the outline. Other Vedantas, including qualified non-dual and dual readings, insist the self and the ultimate are not simply identical. If a teacher says Vedanta as if only one answer existed, you are hearing a party, not the whole debate.

## What do atman and brahman mean here?

Atman is the self. Brahman is ultimate reality. Advaita's distinctive claim is that the deepest teaching of the Upanishads identifies them. Ignorance, on this view, makes a person experience a separate self in a world of objects. Knowledge is said to remove that error. The [comparison](/articles/atman-vs-brahman/) walks through the pair. The glossary entries for [atman](/glossary/atman/) and [brahman](/glossary/brahman/) are the short forms. [Non-duality](/glossary/non-duality/) is the English label, which is broader than Advaita and should not be used as a synonym without care.

This is not a claim this publication has verified. It is a claim the school teaches. The [question page](/questions/how-do-vedanta-teachers-describe-the-self/) collects the descriptive version.

## How is liberation described?

Moksha, in this neighborhood, is freedom from the ignorance that binds a person to samsara. It is not a mood and not a promotion at work. The [moksha](/topics/moksha/) pillar treats liberation across traditions, because Vedanta does not own the word. Readers who want the textual setting should also use [ancient wisdom](/topics/ancient-wisdom/) and the public Upanishad translations in the [sources](/sources/).

Practice, in Advaita-influenced teaching, may include study, reflection, and meditation, often after a large ethical preparation that popular extracts skip. Skipping the preparation and keeping the metaphysics is a modern habit. Name it when you see it.

## What should a modern reader not do?

Do not use non-duality to dismiss someone else's pain. A metaphysical claim about the self is not a reason to skip rent, medicine, or apology. Do not confuse Vedanta with every meditation app that says you are awareness. The app may be teaching a useful attention skill. The school is teaching a doctrine about reality. The [consciousness](/topics/consciousness/) pillar keeps that line visible.

The [explainer](/articles/what-is-vedanta/) is enough if you only need the map. The [editorial policy](/editorial-policy/) explains why this page will not call the doctrine a scientific result.

## Where should a reader go next?

If the vocabulary is the obstacle, open [atman](/glossary/atman/), [brahman](/glossary/brahman/), and [non-duality](/glossary/non-duality/) in that order, then come back. If the question is how teachers talk, use the [question page](/questions/how-do-vedanta-teachers-describe-the-self/). If you want the argument about liberation in more than one school, go to [moksha](/topics/moksha/) rather than forcing every tradition to sound like Shankara.

Bring skepticism and patience in equal measure. The Upanishads are short and difficult. Commentaries are long because the shortness was never simple. This publication would rather send you to a public translation than offer a paraphrase that flatters a contemporary identity. The [ancient wisdom](/topics/ancient-wisdom/) pillar is the wider shelf. Vedanta is one disciplined way of reading it, and it remains a way of reading even when a class turns it into a personality.
`,
);

console.log("pillars e partial");
