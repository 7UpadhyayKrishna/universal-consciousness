import { category } from "../scripts/lib/doc.mjs";
import { mdpage } from "../scripts/lib/mdpage.mjs";

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
      alt: `Abstract geometric illustration for the ${spec.category} pillar, using circles and a fine rule.`,
      ...spec,
    },
    markdown,
  );
}

page(
  {
    topic: "moksha",
    category: "Moksha",
    title: "Moksha: Liberation in Indian Thought",
    excerpt: "What moksha means across Indian traditions, how it relates to karma and samsara, and why it is not a synonym for feeling free.",
    description: "Learn what moksha means in Indian thought, how it relates to karma and rebirth, and what the word does not mean.",
    primary_keyword: "what is moksha",
    about: ["moksha"],
    mentions: ["samsara", "karma", "vedanta"],
    source_ids: ["britannica-moksha", "britannica-samsara", "britannica-karma", "sacred-gita"],
    related: ["/articles/what-is-moksha/", "/glossary/moksha/", "/glossary/samsara/", "/topics/vedanta/", "/glossary/karma/", "/topics/ancient-wisdom/"],
    quick_answer: { question: "What is moksha?", answer: "Moksha is a Sanskrit term for liberation, especially freedom from the cycle of rebirth. Schools disagree about what is liberated, and from what, so the word is not a single doctrine." },
    key_takeaways: ["Moksha names liberation, not a mood.", "It is usually paired with samsara and karma.", "Vedanta, yoga, and other schools describe the free state differently.", "Feeling relieved after a hard week is not moksha."],
    faq: [
      { question: "Is moksha the same as enlightenment?", answer: "English speakers use enlightenment for several Buddhist and Hindu ideas. Moksha is the common Hindu term for liberation. They overlap in conversation and are not identical in every text." },
      { question: "Can a website give you moksha?", answer: "No. This page explains a teaching. It does not confer a religious attainment." },
    ],
  },
  `Moksha is the usual Sanskrit name for liberation in Hindu thought. It sits beside dharma, artha, and kama in the famous list of human aims, and it is the aim that is supposed to outrank the others when they conflict. That ranking is already a philosophy. It is not a feeling of spaciousness after a vacation.

The cycle moksha is said to end is samsara, the round of birth and death. Karma, action and its consequences, is the language most schools use for what keeps the round going. Britannica's articles on those three words are the short public references. The [glossary entries](/glossary/moksha/) are shorter still. This pillar is for the disagreement.

## What is supposed to be liberated?

Advaita Vedanta tends to say that the self was never bound, and that liberation is the knowledge that atman is not other than brahman. A theistic Vedanta may say the self is freed into a relationship with a personal God, not dissolved into an impersonal absolute. Classical yoga talks about isolation of consciousness from the changing mind. These are not three wordings of one experience. They are rival accounts. [Vedanta](/topics/vedanta/) and the [atman and brahman](/articles/atman-vs-brahman/) comparison keep the non-dual version from swallowing the others.

The Bhagavad Gita, in a public translation linked from our [sources](/sources/), is a place readers can watch the argument happen inside one poem. Krishna does not offer a single technique and then stop talking.

## How do karma and rebirth fit?

If there is no rebirth, moksha as freedom from rebirth loses its classical job, though people still use the word for inner freedom in this life. This site does not claim to know whether rebirth happens. It reports that the traditions discussing moksha usually assume a long career of lives, and that karma is the moral and ritual momentum across them. [Karma](/glossary/karma/) and [samsara](/glossary/samsara/) define those terms without turning them into a system you can game.

Popular uses of karma as instant payback, and of moksha as a personal brand, are modern shorthand. They are worth recognizing so you do not think a classical text means your bad day was a cosmic invoice.

## What should readers in the United States notice?

Many English books treat liberation as a psychological breakthrough available on a weekend. Some traditional teachers also speak of liberation in this life. The weekend version often drops the cosmology, the ethics, and the community, and keeps the adjective free. That is a translation with a cost. [Ancient wisdom](/topics/ancient-wisdom/) is the wider shelf. The [explainer](/articles/what-is-moksha/) is the page to send someone who only asked for a definition.

You can study this idea without adopting it. You can also practice a tradition that aims at it. This publication will not rank your progress or sell a shortcut. The [editorial policy](/editorial-policy/) is why. If a sentence here flattens a school, the [corrections](/corrections/) page is the way to say so. Bring the school's name when you write, because moksha without a school is only a mood.
`,
);

page(
  {
    topic: "mantras",
    category: "Mantras",
    title: "Mantras: Sound, Recitation, and Meaning",
    excerpt: "How mantras function as sacred formulas, how recitation is practiced, and why an affirmation is not the same thing.",
    description: "Learn what a mantra is, how recitation is used in yoga and worship, and how it differs from an affirmation.",
    primary_keyword: "what is a mantra",
    about: ["mantras"],
    mentions: ["mantra", "meditation"],
    source_ids: ["britannica-mantra", "sacred-yoga-sutras", "iep-yoga"],
    related: ["/articles/beginners-guide-to-mantras/", "/glossary/mantra/", "/meditation/mantra/", "/questions/are-mantras-the-same-as-affirmations/", "/topics/meditation/", "/topics/yoga/"],
    quick_answer: { question: "What is a mantra?", answer: "A mantra is a sacred syllable, verse, or formula recited in ritual or meditation. In many traditions the sound is not merely a reminder of a meaning. It is treated as effective in its own right." },
    key_takeaways: ["A mantra is a recited formula, not a personal slogan.", "Traditions differ on secrecy, meaning, and who may teach a formula.", "Repetition can steady attention even when a metaphysical claim is set aside.", "Om is one famous syllable, not the definition of all mantra practice."],
    faq: [
      { question: "Can I invent a mantra?", answer: "You can invent a phrase to repeat. Calling it a mantra claims a traditional status the phrase may not have. The [affirmation question](/questions/are-mantras-the-same-as-affirmations/) explains the difference." },
      { question: "Must a mantra be in Sanskrit?", answer: "Many famous ones are. Other religions have their own repeated prayers. Sanskrit is not a magic requirement for attention, and it is not a costume." },
    ],
  },
  `Mantra is a Sanskrit word for a ritual formula. Britannica describes mantras as sacred utterances used in prayer, meditation, and ceremony. That is a better start than the idea that a mantra is any sentence you like and repeat in order to feel confident. Confidence might follow repetition. It is not what makes a formula a mantra.

This pillar sits between [meditation](/topics/meditation/) and [yoga](/topics/yoga/). The [technique page](/meditation/mantra/) describes a session. The [beginner guide](/articles/beginners-guide-to-mantras/) is the practical introduction. The [glossary](/glossary/mantra/) is the one-screen definition.

## How is recitation understood?

In Vedic ritual, a mantra is tied to precise sound and to a rite. In later devotional practice, people repeat divine names, sometimes with a mala, sometimes aloud, sometimes silently. In some yogic and tantric settings, a syllable is planted in a subtle-body map and may be given in initiation. Those settings do not share one rule about secrecy or about whether you must know a translation.

The Yoga Sutras mention the syllable om in connection with contemplation of Ishvara. That passage is famous and narrow. It does not turn every English affirmation into a sutra. A public translation is in the [sources](/sources/).

## What happens if you repeat a phrase?

Attention often steadies when the mind has a simple rhythmic object. That psychological description does not require the phrase to be divine, and it does not prove that the phrase is divine. You can value the steadiness and remain agnostic about the metaphysics. You can also accept a tradition's account. This site's job is to keep the two accounts labeled.

[Are mantras the same as affirmations?](/questions/are-mantras-the-same-as-affirmations/) answers the comparison people actually search. Short version: an affirmation is a modern self-statement. A mantra is a formula embedded, or claimed to be embedded, in a tradition of sound and rite.

## What should a beginner respect?

Respect pronunciation enough to learn it, and respect the possibility that some communities do not want their formulas used as decor. Respect also means not scaring yourself with internet lists of syllables that are supposed to force an awakening. The [kundalini](/topics/kundalini/) material is full of that advertising. A quiet repetition of a name you understand, or of the breath, is enough to learn what repetition feels like.

If a teacher sells a secret mantra as the only door and ties it to escalating fees, you are looking at an institution's economics. You are not looking at a requirement of the Sanskrit language. The [editorial policy](/editorial-policy/) covers how this page will talk about those claims. The [disclaimer](/disclaimer/) matters if someone promises that a sound will treat an illness. It will not, on the evidence this publication is willing to cite. A sound can focus a mind. A sound is not a pharmacy, and this pillar will not become one.
`,
);

page(
  {
    topic: "breathwork",
    category: "Breathwork",
    title: "Breathwork: Pranayama and Modern Breathing",
    excerpt: "How yogic pranayama differs from quiet breath awareness and from intense modern breathwork, including safety limits.",
    description: "Compare pranayama, simple breath awareness, and intense breathwork, and learn the safety limits of changing your breathing.",
    primary_keyword: "what is breathwork",
    about: ["breathwork"],
    mentions: ["prana", "yoga", "meditation"],
    source_ids: ["iep-yoga", "sacred-hatha", "nccih-yoga", "nccih-meditation"],
    disclaimer: true,
    related: ["/glossary/prana/", "/meditation/breath-awareness/", "/questions/what-is-the-difference-between-pranayama-and-meditation/", "/topics/yoga/", "/topics/meditation/", "/questions/how-do-traditions-describe-prana/"],
    quick_answer: { question: "What is breathwork?", answer: "Breathwork is a loose modern name for practices that deliberately change or watch the breath. Yogic pranayama is one traditional family. Quiet breath awareness is another. Intense fast-breathing methods are a third, and they carry more risk." },
    key_takeaways: ["Breathwork is an umbrella, not one technique.", "Pranayama belongs to yoga and assumes a traditional frame.", "Watching the breath is not the same as forcing the breath.", "Fast or held breathing can cause dizziness and is not a cure."],
    faq: [
      { question: "Is breathwork safe for everyone?", answer: "No. Vigorous breathing and long breath holds can be a bad idea in pregnancy, with some heart or lung conditions, and with panic. Quiet observation is a different practice." },
      { question: "Does pranayama prove prana?", answer: "Pranayama is a discipline taught inside a tradition that speaks of prana. Doing the exercise does not scientifically establish a life-force substance." },
    ],
  },
  `Breathwork is an English umbrella. It can mean a yoga class that lengthens the exhale, a meditation that simply notices the breath, or a workshop that asks you to breathe hard for a long time until your hands tingle. Those are different acts with different risks. The umbrella is convenient for marketing and inconvenient for safety.

This pillar sorts the umbrella. [Prana](/glossary/prana/) is the traditional word for vitality or breath-energy. [How traditions describe prana](/questions/how-do-traditions-describe-prana/) stays with that language. [Breath awareness](/meditation/breath-awareness/) is the quiet method. [Pranayama versus meditation](/questions/what-is-the-difference-between-pranayama-and-meditation/) is the comparison.

## What is pranayama?

In classical yoga, pranayama is regulation of the breath and, in the tradition's terms, of prana. The Yoga Sutras list it as a limb. Hatha texts add techniques, retentions, and warnings that assume a teacher. A public hatha translation sits in the [sources](/sources/). None of this is a license for an app to invent a ratio and call it ancient.

The Internet Encyclopedia of Philosophy's yoga article keeps the philosophical frame. NCCIH's yoga page is the health-context frame: yoga practices, including breathing, are not a reason to skip care, and instruction matters. Tingling, cramps, and lightheadedness during forceful breathing are body events. They are not proof that energy has risen.

## How is quiet awareness different?

Noticing the breath, as in many mindfulness and Buddhist exercises, does not try to maximize air or to hold it until you are dizzy. The aim is attention. You can do it lying down. You can stop. It is closer to [meditation](/topics/meditation/) than to a stamina drill. People still call it breathwork, which is why the word has become muddy.

If your only goal is to calm down before sleep, a slightly longer exhale while awake and safe is a modest tool. It is not a treatment for a sleep disorder, and it is not pranayama in the full traditional sense.

## What deserves extra caution?

Methods that use prolonged fast breathing, strong locks, or underwater-style holds have a different risk profile. They can provoke panic, fainting, or, rarely, more serious events in vulnerable people. They are sometimes wrapped in liberation language borrowed from [kundalini](/topics/kundalini/) imagery. The wrapping does not change the physiology of carbon dioxide and blood pressure.

This site will not give ratios, hold times, or a sequence for intense practice. The [disclaimer](/disclaimer/) applies. If you have a medical condition, ask a clinician before you change how you breathe on purpose. [Yoga](/topics/yoga/) classes that include a few calm breaths are a separate, usually milder case. The [editorial policy](/editorial-policy/) is why those cases stay in different sentences. If you want a next step, choose the quiet page, not the most dramatic video. The quiet page is [breath awareness](/meditation/breath-awareness/).
`,
);

console.log("pillars f done");
