import { category } from "../scripts/lib/doc.mjs";
import { mdpage } from "../scripts/lib/mdpage.mjs";

function page(spec, markdown) {
  mdpage(
    {
      kind: "pillar",
      intent: ["informational"],
      file: `content/documents/pillars/${spec.slug}.json`,
      id: `pillar-${spec.slug}`,
      category: category(spec.category, spec.slug),
      topic: spec.slug,
      path: `/topics/${spec.slug}/`,
      alt: `Abstract geometric illustration with circles and a horizon line for the ${spec.category} pillar.`,
      ...spec,
    },
    markdown,
  );
}

page(
  {
    slug: "yoga",
    category: "Yoga",
    title: "Yoga: Philosophy, Practice, and Modern Classes",
    excerpt:
      "How yoga functions as a philosophical discipline, a medieval body of techniques, and a modern class format, without treating those as the same thing.",
    description:
      "Learn how yoga philosophy, older techniques, and modern classes differ, and what health research can actually say.",
    primary_keyword: "what is yoga",
    secondary_keywords: ["yoga philosophy", "hatha yoga"],
    about: ["yoga"],
    mentions: ["meditation", "breathwork", "yoga-sutras"],
    source_ids: ["iep-yoga", "britannica-yoga", "sacred-yoga-sutras", "nccih-yoga", "sacred-hatha"],
    related: [
      "/articles/what-is-yoga-philosophy/",
      "/articles/yoga-vs-meditation/",
      "/yoga/hatha-yoga/",
      "/yoga/yoga-philosophy/",
      "/guides/yoga/",
      "/topics/meditation/",
    ],
    quick_answer: {
      question: "What is yoga?",
      answer:
        "Yoga is a family of Indian disciplines involving ethics, attention, and, in many later and modern forms, the body and breath. A studio class is one descendant of that history, not the whole of it.",
    },
    key_takeaways: [
      "Classical yoga is a philosophical and meditative path, not only a workout.",
      "Hatha sources add body and breath techniques that a studio class only partly reflects.",
      "Health research supports modest claims and does not make yoga a medical treatment.",
      "Styles taught in the United States need their own histories.",
    ],
    faq: [
      {
        question: "Is yoga a religion?",
        answer:
          "Yoga has religious and philosophical roots, and many people practice postural yoga without adopting those commitments. Both facts can be true.",
      },
      {
        question: "Is yoga exercise?",
        answer:
          "Modern classes often function as exercise. Older texts often treat posture as one support for attention, not as the goal.",
      },
    ],
  },
  `In the United States, yoga usually means a class of postures, sometimes with breathing and a short rest at the end. That class is real, popular, and historically recent as a mass format. It is not the definition that classical Indian sources would have given first.

This pillar separates three layers: philosophical yoga, technique traditions such as hatha, and modern styles. Mixing them produces confident sentences that no single source supports. The [philosophy explainer](/articles/what-is-yoga-philosophy/) follows the texts. The [style pages](/yoga/) follow the class formats.

## What do classical sources describe?

The Yoga Sutras, attributed to Patanjali, organize a path of restraint, observance, posture, breath regulation, sense-withdrawal, concentration, meditation, and absorption. Posture is one limb. The text's interest is the stilling of mental fluctuation and the states that training is said to make available. A public translation is linked from the [Yoga Sutras record](https://www.sacred-texts.com/hin/ysp/index.htm) used on this site. The Internet Encyclopedia of Philosophy's yoga article is a clearer modern map of the arguments than a studio brochure.

The Bhagavad Gita uses yoga for disciplined action, knowledge, and devotion. That is a different emphasis inside a shared vocabulary. When a teacher says yoga means union, ask union of what, according to whom. Vedanta, Samkhya-influenced yoga, and devotional movements do not give one answer.

## What did later technique texts add?

Medieval hatha texts, including the Hatha Yoga Pradipika, discuss postures, seals, locks, and breath in more physical detail. They are still religious and yogic works, not fitness manuals. They assume aims such as steadiness and, in some passages, subtle-body ideas that modern science has not established as anatomy.

A contemporary vinyasa class may share a few posture names with those texts and share little of their ritual frame. [Hatha yoga](/yoga/hatha-yoga/) is the page for that distinction. [Kundalini Yoga](/yoga/kundalini-yoga/) as a studio brand is a further, twentieth-century development and should not be backdated into every hatha verse.

## What happens in a modern American class?

Most students meet yoga as exercise that may also feel contemplative. Teachers vary widely in training. Some emphasize alignment, some a flowing sequence, some a long-held shape, some chanting. The shared English word hides those choices. [Yin](/yoga/yin-yoga/) is an example of a modern style whose English name should not be treated as ancient.

NCCIH's public page on yoga says that research has looked at yoga for several conditions and that people should talk with a clinician about health problems and should practice with a qualified instructor when needed. That is a safety note, not a claim that yoga treats disease. Pain during a pose is not a sign of progress.

## How does yoga relate to meditation?

Classical lists put meditation later than posture. Many studios put a few quiet minutes at the end of a strenuous hour. Both can be valuable, and they are not the same curriculum. [Yoga versus meditation](/articles/yoga-vs-meditation/) is the comparison page. [Breathwork](/topics/breathwork/) covers pranayama-style practices that some classes include and some never mention.

You can meditate without yoga postures, and you can attend a posture class without calling it meditation. The publication keeps both options open. It does not rank them spiritually.

## What should beginners watch for?

Learn the difference between sensation and pain. Ask what tradition or style the class actually teaches. Be cautious of rooms that combine exercise with absolute claims about energy, destiny, or the teacher's unique authority. Skill in demonstrating a pose is not wisdom, and wisdom is not a substitute for knowing how a knee works.

The [beginner philosophy guide](/articles/yoga-philosophy-for-beginners/) is for readers who want the ideas without pretending a single workshop transmits a lineage. The [guide hub](/guides/yoga/) lines up the practical pages.

## How should health claims be read?

Yoga can be a way to move, to pay attention, and to participate in a tradition. Studies of particular programs sometimes find benefits for things like function or stress. Those findings belong to the programs and measures in the studies. They do not travel, unchanged, to every studio and every student.

This site will not say yoga cures anxiety, back pain, or any other condition. It will point to the government summary and leave the decision about your body with you and, when needed, a clinician. The [disclaimer](/disclaimer/) applies whenever a page drifts toward medicine.

A last distinction is cultural. Practicing postures while ignoring the sources is common. So is claiming that a weekend training made you an heir of the tradition. Neither posture is required. Curiosity about the sources is enough to start, and the [ancient wisdom](/topics/ancient-wisdom/) pages are there for that curiosity.

## How should you choose a class in the United States?

Choose on ordinary criteria first. Can you get to the room. Does the teacher welcome questions. Are props allowed. Is the pace something you can leave without being shamed. Those criteria will protect you more than a Sanskrit name on the schedule. Ask whether the hour is mainly exercise, mainly meditation, or a worship service. All three can be honest. Surprise is the problem.

If a studio makes medical claims, ask which source supports them. If the answer is only the teacher's experience, you have a report, not a finding. You can still enjoy the class. You should not repeat the claim as fact. The [NCCIH yoga page](https://www.nccih.nih.gov/health/yoga-what-you-need-to-know) is the public summary this publication prefers when health is the topic.

Prices, certifications, and lineage names vary so widely that this site does not rank them. A certificate is a piece of training history. It is not a moral quality and not a medical license. Read the [editorial policy](/editorial-policy/) if you want the rule behind that sentence. Then use the [yoga guide](/guides/yoga/) to pick a narrower page, not a more intense one. If you only have twenty minutes, use them to learn one pose family or one page of the Yoga Sutras, not to collect a new identity. The tradition is large. Your job on a Tuesday is small, and small is how a real practice or a real reading life actually grows.
`,
);

page(
  {
    slug: "kundalini",
    category: "Kundalini",
    title: "Kundalini: Meaning, History, and Common Misreadings",
    excerpt:
      "What kundalini has meant in tantric and hatha sources, how modern classes use the word, and which claims are not scientific findings.",
    description:
      "Learn what kundalini means, where the idea comes from, and which modern claims tradition and research do not support.",
    primary_keyword: "what is kundalini",
    secondary_keywords: ["kundalini energy", "kundalini awakening"],
    about: ["kundalini"],
    mentions: ["chakras", "shakti", "tantra", "kundalini-yoga"],
    source_ids: ["britannica-kundalini", "sacred-hatha", "britannica-tantra", "nccih-yoga"],
    disclaimer: true,
    related: [
      "/articles/what-is-kundalini/",
      "/articles/kundalini-for-beginners/",
      "/articles/is-kundalini-dangerous/",
      "/yoga/kundalini-yoga/",
      "/topics/chakras/",
      "/guides/kundalini/",
    ],
    quick_answer: {
      question: "What is kundalini?",
      answer:
        "Kundalini is a concept in certain Indian yogic and tantric traditions describing a latent spiritual power, often pictured as a coiled force that can rise through the body. Traditions interpret it differently, and modern science does not establish that picture as a physical fact.",
    },
    key_takeaways: [
      "Kundalini is a traditional concept, not a laboratory finding.",
      "Tantric and hatha sources do not match every modern workshop script.",
      "Studio Kundalini Yoga is a twentieth-century teaching with its own history.",
      "Intense symptoms should be treated as health questions, not only as awakening.",
    ],
    faq: [
      {
        question: "Is kundalini real?",
        answer:
          "It is real as a historical and living religious idea. That does not mean a measurable serpent energy has been established in the body.",
      },
      {
        question: "Is a kundalini class the same as the classical idea?",
        answer:
          "Not necessarily. Many classes teach a modern branded system. The historical literature is broader and often more ritual.",
      },
    ],
  },
  `Kundalini is one of the most dramatized words in English-language spirituality. Writers promise awakening, warn of danger, and describe a serpent at the base of the spine as if the image were an anatomical diagram. The image is traditional. The diagram is not a medical fact.

This pillar explains the concept, its sources, and the modern uses that outrun those sources. It is not an instruction manual for forcing an experience. Read the [explainer](/articles/what-is-kundalini/) for the shorter version and the [safety page](/articles/is-kundalini-dangerous/) before you experiment with intense methods.

## What does the term mean?

In Sanskrit usage tied to yogic and tantric literature, kundalini names a latent power, often associated with shakti, the language of divine energy. Metaphors of coiling and rising are common. The point of the metaphors, inside those traditions, is a transformation of awareness, not a party trick and not a fitness goal.

Encyclopaedia Britannica's article on kundalini is a sober public summary of that idea. It is a better starting point than a social-media symptom list. The [glossary entry](/glossary/kundalini/) keeps the definition short. This page keeps the disagreements.

Different lineages describe the process, the rituals, and the qualifications of a student differently. There is no single ancient checklist called kundalini awakening that every text shares.

## Where do the influential descriptions come from?

Tantric traditions in Hindu and Buddhist contexts developed rich accounts of the subtle body, including channels and centers. Hatha texts took up related practices of breath, seal, and posture. The Hatha Yoga Pradipika is one public window into that technical literature. It is not a beginner's workbook, and quoting one verse does not authorize a weekend certification.

Later interpreters, including modern English writers, systematized these images for new audiences. Systematizing is a kind of authorship. It should be labeled. When a chart of seven centers and a rainbow of colors is presented as the timeless map, you are often looking at a modern synthesis. The [chakras](/topics/chakras/) pillar explains that synthesis.

## How do practitioners describe experience?

People in these traditions, and people experimenting outside them, report heat, spontaneous movement, emotional surges, changes in sleep, and shifts in how the body feels. Reports are evidence that people have experiences. They are not evidence of a single hidden physiology. Similar sensations can have ordinary medical causes.

This publication will not tell you that a symptom proves awakening, and it will not tell you that every unusual sensation is kundalini. The page on [what practitioners report](/questions/what-do-practitioners-report-about-kundalini/) stays at the level of report. If you are frightened, unable to sleep, or losing the ability to care for ordinary life, seek a clinician. Spiritual interpretation can wait.

## What is Kundalini Yoga as a class?

A studio class called Kundalini Yoga, often with specific breath patterns, chanting, and postures, largely reflects a twentieth-century teaching popularized in the West, not the whole tantric archive. [Kundalini Yoga](/yoga/kundalini-yoga/) and the comparison with [hatha](/articles/kundalini-yoga-vs-hatha-yoga/) keep that history straight. The [structure question](/questions/how-is-kundalini-yoga-structured/) describes a typical class without treating it as ancient law.

Organizations around charismatic teachers deserve ordinary skepticism. Secrecy, financial pressure, and claims of unique salvation are warning signs in any tradition. They are not proof of shakti. Public reporting has raised serious ethical concerns about some organizations that spread a modern Kundalini Yoga brand. This site does not adjudicate those cases. It does tell readers to separate a classical idea from any one institution.

## What does research not show?

There is no established scientific demonstration of a serpent energy, a chakra ladder, or a kundalini mechanism as described in the traditional metaphors. Studies of yoga or meditation, including government summaries from NCCIH, concern practices, injuries, and sometimes stress-related outcomes. They do not confirm a subtle-body anatomy.

Breath practices used in some kundalini classes can make people lightheaded. That is a reason for moderation, not a sign that a higher state has been verified. The [breathwork](/topics/breathwork/) pages separate vigorous breathing from quiet breath awareness.

## What should a beginner know?

Do not chase an awakening. If you explore this material, use modest practices, keep eating and sleeping, and stay in contact with ordinary responsibilities. Read the [beginner guide](/articles/kundalini-for-beginners/) and the [guide hub](/guides/kundalini/). Avoid teachers who tell you that distress is always a spiritual test or that you must cut off outside advice.

You can study the history without practicing intense methods at all. Understanding the idea is a complete use of this pillar. Forcing an experience because a video promised bliss is a poor use of it. The [disclaimer](/disclaimer/) is part of the page because the subject is so often tied to health and to fear.

## How should this cluster be read?

Start with the definition on this page, then the [explainer](/articles/what-is-kundalini/) if you want the same idea in a tighter article. Use the [chakra pages](/chakras/) only after you have read that the rainbow chart is a modern convention. Use the [tantra glossary](/glossary/tantra/) if the word tantra has been sold to you as a lifestyle. It is a body of ritual traditions, not a synonym for intensity.

When a friend describes an awakening, you can listen without agreeing that a mechanism has been proved. Ask what they practiced, for how long, and whether they are sleeping and eating. Those questions are kinder than a theory. The [beginner guide](/articles/kundalini-for-beginners/) is written for people who have already seen alarming videos and want a calmer map.

This publication will keep revising the history if better public sources correct a sentence. It will not revise the sentence to make the practice sound more powerful. Power is the claim that most needs a source, and the sources here do not supply a physical serpent. They supply a tradition, a set of metaphors, and a warning against confusing metaphor with medicine. Keep a calendar, not a mythology, of what you practice. Note the date, the method, and how you slept. That record will tell you more than a diagram of a rising current, and it will give a clinician something concrete if you ever need one. The [corrections](/corrections/) page is there if a historical sentence on this pillar is wrong. The energy claim is not a sentence we will make stronger in order to sound traditional.
`,
);

console.log("pillars c done");
