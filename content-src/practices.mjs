import { emitPage, faq } from "../scripts/lib/emit-page.mjs";

function P(p) {
  emitPage({
    ...p,
    faq: faq(p.q2, p.a2, "Is this medical advice?", "No. It explains a traditional or modern practice. It does not diagnose, treat, or replace professional care."),
  });
}

const chakras = [
  ["root-chakra", "Root Chakra", "Muladhara", "Base of the spine", "Earth", "Lam", "The root center is the usual start of the modern seven-chakra chart. It is a teaching picture, not an organ at the pelvic floor.", "Charts call the root chakra muladhara and place it at the base of the spine. The placement and the red earth symbolism are features of a modern system, not a medical finding."],
  ["sacral-chakra", "Sacral Chakra", "Svadhisthana", "Lower abdomen", "Water", "Vam", "The sacral center is the second stop on the popular chart, tied in modern books to fluidity and feeling. Those ties are teaching slogans.", "Svadhisthana is the Sanskrit name used for the sacral chakra, usually placed in the lower abdomen. Element and color assignments belong to the modern chart."],
  ["solar-plexus-chakra", "Solar Plexus Chakra", "Manipura", "Upper abdomen", "Fire", "Ram", "The solar plexus center sits in the upper belly on the usual chart and is loaded with modern talk of will. The load is not anatomy.", "Manipura is the name the seven-chakra chart gives the solar plexus center. Fire and yellow are modern associations, not a diagnosis of the organs there."],
  ["heart-chakra", "Heart Chakra", "Anahata", "Center of the chest", "Air", "Yam", "The heart center is the middle of the popular chart. Modern books make it the seat of emotion. Traditional sources are more varied and less sentimental.", "Anahata is the Sanskrit name for the heart chakra in the usual list, placed at the chest. Green and air are chart conventions, not cardiology."],
  ["throat-chakra", "Throat Chakra", "Vishuddha", "Throat", "Space", "Ham", "The throat center is where the modern chart talks about speech and truth. The talk is a slogan attached to a traditional name.", "Vishuddha is the usual Sanskrit name for the throat chakra. Charts place it at the throat and often assign space and blue. Those assignments are not a throat exam."],
  ["third-eye-chakra", "Third Eye Chakra", "Ajna", "Between the eyebrows", "Light, in many modern charts", "Charts vary, often Om", "The third-eye center is the brow point on the popular chart, associated with insight. Insight here is a teaching theme, not a discovered organ.", "Ajna is the name used for the center between the eyebrows. Modern charts often link it with light and with Om, and older lists do not all agree."],
  ["crown-chakra", "Crown Chakra", "Sahasrara", "Crown of the head", "Often left without a single element", "Often left without a single syllable", "The crown is the top of the modern chart, pictured as a thousand-petaled lotus. It is the chart's image of completion, not a measured place in the skull.", "Sahasrara is the crown center in the usual seven-part list, placed at the top of the head. Violet or white colors are modern chart habits."],
];

for (const [slug, name, sanskrit, location, element, syllable, lead, answer] of chakras) {
  P({
    kind: "chakra",
    id: slug,
    slug,
    topic: "chakras",
    disclaimer: true,
    category: "Chakras",
    title: `${name}: Name, Place, and Limit`,
    excerpt: lead,
    description: `${name} (${sanskrit}) is a center on the modern seven-chakra chart. This page gives the usual associations and their historical limit.`.slice(0, 165),
    keyword: `${name.toLowerCase()} meaning`,
    question: `What is the ${name.toLowerCase()}?`,
    answer,
    about: ["chakras"],
    mentions: ["chakra", "kundalini"],
    sources: ["britannica-chakra", "sacred-hatha", "britannica-kundalini"],
    related: ["/topics/chakras/", "/articles/what-are-chakras/", "/articles/are-chakras-scientific/", "/glossary/chakra/", "/guides/chakras/", "/articles/understanding-chakras/"],
    facts: {
      "Sanskrit name": sanskrit,
      "Traditional location": location,
      "Element in modern charts": element,
      "Syllable in modern charts": syllable,
    },
    h1: `What do charts say about the ${name.toLowerCase()}?`,
    h2: "Where did this picture come from?",
    h3: "How should a reader use it?",
    lead,
    meaning: `${sanskrit} is the name to learn so the English label is not the only handle. Charts place it at the ${location.toLowerCase()}. They often add the element ${element.toLowerCase()} and the syllable ${syllable}. Those additions help a poster and do not describe an organ. The seven-part rainbow order is a modern synthesis.`,
    linkA: "[what chakras are](/articles/what-are-chakras/)",
    origin: "Hatha and tantric texts discuss centers, lotuses, and seed syllables without agreeing on one classroom poster. Twentieth-century interpreters stabilized the list for new readers. Kundalini imagery often uses the same ladder and has the same status: traditional picture, not a scan. Britannica's chakra article is the short public reference.",
    pillar: "the [chakras topic](/topics/chakras/)",
    practice: "You can remember the name and ignore the moral slogan that says this center explains your personality or your illness. Breath and posture can be practiced without the ladder. Stones, oils, and affirmations are contemporary crafts. The science page says why the craft is not evidence.",
    linkB: "[whether chakras are scientific](/articles/are-chakras-scientific/)",
    caution: "Do not diagnose a blocked center. Do not buy a cure aimed at this location. A sensation in the area is a sensation. If something hurts, use ordinary medicine. The glossary entry keeps the definition smaller than this page.",
    takeaways: [
      `${sanskrit} is the Sanskrit name used on the popular chart.`,
      `The usual location in that chart is the ${location.toLowerCase()}.`,
      "Colors, elements, and slogans are mostly modern teaching aids.",
      "The center is not an anatomical finding.",
    ],
    q2: "Do I need to open this chakra?",
    a2: "No. That instruction belongs to particular modern teachings. This page explains a chart. It does not prescribe a process.",
  });
}

const meditations = [
  ["mindfulness", "Mindfulness Meditation", "Mindfulness meditation notices present experience, including the moment attention leaves, and returns without turning the sit into self-attack.", "Mindfulness meditation is a way of noticing breath, body, or sound and returning when attention wanders. It is one method, with Buddhist roots and secular clinical versions."],
  ["mantra", "Mantra Meditation", "Mantra meditation repeats a formula as the object of attention. A traditional mantra is not the same thing as a personal affirmation.", "Mantra meditation uses a repeated syllable, name, or verse as the focus. The repetition can steady attention. The sacred status of the formula is a traditional claim."],
  ["breath-awareness", "Breath Awareness", "Breath awareness watches the breath without forcing it. It is a common meditation and is not the same as intense pranayama.", "Breath awareness means noticing the breath as it is. It trains attention. It does not require breath retention or a belief in prana."],
  ["body-scan", "Body Scan Meditation", "The body scan moves attention through the body in order. It is a common mindfulness exercise, not a medical imaging session.", "A body scan is a meditation that shifts attention gradually through the body, noticing sensation without trying to fix it. Secular mindfulness courses use it often."],
  ["loving-kindness", "Loving-Kindness Meditation", "Loving-kindness practice repeats phrases of goodwill toward oneself and others. It is a specific method, not a demand to like everyone.", "Loving-kindness meditation cultivates goodwill through repeated phrases, often starting with oneself and extending outward. It is a traditional Buddhist form and a studied modern adaptation."],
  ["transcendental", "Transcendental Meditation", "Transcendental Meditation is a branded mantra method taught for a fee. This page describes it without revealing mantras or claiming it is superior.", "Transcendental Meditation is a standardized mantra practice taught commercially. Research on it is contested. It is not the definition of all mantra meditation."],
];

for (const [slug, name, lead, answer] of meditations) {
  const tm = slug === "transcendental";
  P({
    kind: "meditation",
    id: `practice-${slug}`,
    slug,
    topic: "meditation",
    disclaimer: tm,
    category: "Meditation",
    title: `${name}: A Clear Description`,
    excerpt: lead,
    description: lead.length > 165 ? lead.slice(0, 160) : lead,
    keyword: `${name.toLowerCase()} practice`,
    question: `What is ${name.toLowerCase()}?`,
    answer,
    about: ["meditation"],
    mentions: slug === "mindfulness" ? ["mindfulness"] : slug === "mantra" || tm ? ["mantras"] : ["mindfulness"],
    sources: tm ? ["nccih-meditation", "pubmed-goyal-2014", "apa-mindfulness"] : ["nccih-meditation", "apa-mindfulness", "nccih-meditation-depth"],
    related: ["/topics/meditation/", "/articles/what-is-meditation/", "/articles/meditation-for-beginners/", "/glossary/meditation/", "/guides/meditation/", slug === "mindfulness" ? "/topics/mindfulness/" : "/questions/how-long-should-you-meditate/"],
    h1: `How is ${name.toLowerCase()} practiced?`,
    h2: "Where does the method come from?",
    h3: "What should a beginner expect?",
    lead,
    meaning: tm
      ? "Teachers in that organization give a mantra privately and instruct a effortless repetition, typically for about twenty minutes twice a day. The mantras are not published here. The fee and the trademark are part of the method's modern identity. Other mantra practices are older and are not this brand."
      : `${answer} A short daily period is enough to learn the shape. The meditation topic explains how this method sits beside others. Nothing in the method requires a special cushion or a belief about chakras.`,
    linkA: "[what meditation is](/articles/what-is-meditation/)",
    origin: tm
      ? "The method was taught widely in the late twentieth century and studied often, with enthusiastic and critical readings of the evidence. NCCIH discusses meditation programs in general terms and does not crown a brand. A 2014 review looked across programs and stayed modest."
      : "Religious sources and, for mindfulness-family practices, modern clinics both matter. Name which one you are learning. The beginner guide assumes you will start small. Research summaries do not turn any of these methods into a cure.",
    pillar: "the [meditation topic](/topics/meditation/)",
    practice: "Sit or lie comfortably. Use a few minutes. If you are learning mindfulness or the body scan, notice and return. If you are repeating a phrase, keep the phrase and skip the scorekeeping. Stop if you panic. The myths page is the corrective to empty-mind demands.",
    linkB: "[meditation for beginners](/articles/meditation-for-beginners/)",
    caution: tm
      ? "Do not assume a branded course is superior because it is standardized or expensive. Do not repeat health claims the studies do not support. Do not share or hunt secret mantras. Calm, if it happens, is not enlightenment."
      : "Do not use the practice to replace therapy or medical care. Do not force the breath. Do not treat a pleasant sit as proof of a doctrine. Difficulty at the start is ordinary.",
    takeaways: [
      `${name} is a specific method, not all of meditation.`,
      "A short session is a legitimate start.",
      "Traditional and clinical frames should be named.",
      "The method is not a cure.",
    ],
    q2: "How long should a session be?",
    a2: "Five to ten minutes is enough to learn. Branded courses may prescribe longer. Longer is not more virtuous by itself.",
  });
}

const yogas = [
  ["hatha-yoga", "Hatha Yoga", "yoga", false, ["yoga"], ["hatha-yoga"], "Hatha yoga names medieval techniques of posture, breath, and seal, and also a vague modern label for slower classes.", "Hatha yoga refers to body and breath disciplines in texts such as the Hatha Yoga Pradipika, and, loosely, to many contemporary classes. The text and the class are not the same thing."],
  ["kundalini-yoga", "Kundalini Yoga", "kundalini", true, ["kundalini"], ["kundalini-yoga"], "Kundalini Yoga in studios is usually a twentieth-century class of breath, posture, and chant, not the whole tantric archive.", "Studio Kundalini Yoga sequences breath patterns, postures, chanting, and rest. It uses an older word and a newer format. It is not identical to medieval hatha or to every tantric rite."],
  ["yin-yoga", "Yin Yoga", "yoga", false, ["yoga"], ["hatha-yoga"], "Yin yoga is a modern style of long-held passive postures. The English name should not be backdated into an ancient system.", "Yin yoga is a recent class format associated with teachers such as Paulie Zink, Paul Grilley, and Sarah Powers. Long holds are the method. The style is modern even when it borrows older language."],
  ["yoga-philosophy", "Yoga Philosophy", "yoga", false, ["yoga"], ["yoga-sutras"], "Yoga philosophy is the study of yoga's arguments and texts, especially the Yoga Sutras and the Gita, not the mood of a fitness room.", "Yoga philosophy reads sources such as the Yoga Sutras and the Bhagavad Gita and follows their disagreements. A posture class may share the word yoga and not teach this material."],
];

for (const [slug, name, topic, disclaimer, about, mentions, lead, answer] of yogas) {
  P({
    kind: "yoga",
    id: `tradition-${slug}`,
    slug,
    topic,
    disclaimer,
    category: "Yoga",
    title: `${name}: History and Class Format`,
    excerpt: lead,
    description: lead.length > 165 ? lead.slice(0, 160) : lead,
    keyword: `${name.toLowerCase()} explained`,
    question: `What is ${name}?`,
    answer,
    about,
    mentions,
    sources: slug === "kundalini-yoga" ? ["sacred-hatha", "britannica-kundalini", "nccih-yoga"] : ["iep-yoga", "sacred-yoga-sutras", "nccih-yoga"],
    related: ["/topics/yoga/", "/articles/what-is-yoga-philosophy/", "/articles/yoga-vs-meditation/", "/guides/yoga/", slug === "kundalini-yoga" ? "/articles/kundalini-yoga-vs-hatha-yoga/" : "/yoga/hatha-yoga/", "/topics/meditation/"],
    h1: `What does ${name} refer to?`,
    h2: "How is a class or a text actually shaped?",
    h3: "What should you not assume?",
    lead,
    meaning: answer + " Ask whether the hour in front of you is exercise, worship, textual study, or a branded method. The yoga topic keeps those layers from merging. A public source is more trustworthy than a schedule blurb.",
    linkA: "[the yoga topic](/topics/yoga/)",
    origin: slug === "yin-yoga"
      ? "The style's English name is modern. Long-held postures can be pleasant or too much for a joint. Borrowed talk of meridians or energies is an extra claim, not the definition of the holds. Hatha texts are a different history."
      : slug === "kundalini-yoga"
        ? "The branded class spread in the West through twentieth-century teachers. Hatha texts are older and are not this sequence. Ethical concerns about some organizations are about power and harm, not about whether a posture is traditional."
        : "The Yoga Sutras list posture as one limb. Hatha texts expand the body. Modern classes expand it again into fitness. The philosophy explainer is the textual door. NCCIH discusses safety and the limits of health claims.",
    pillar: "the [yoga guides](/guides/yoga/)",
    practice: "If you attend, leave any pain that is sharp, and ask what tradition is actually being taught. If you read, take one passage and one reference article. You do not need a certificate to read, and a certificate is not a lineage.",
    linkB: "[yoga philosophy](/articles/what-is-yoga-philosophy/)",
    caution: "Do not claim the style cures disease or awakens a proven energy. Do not backdate a modern brand into the medieval books. The disclaimer applies whenever health or kundalini language enters the room.",
    takeaways: [
      `${name} should be dated and described specifically.`,
      "A class format and a classical text are different objects.",
      "Pain is not progress.",
      "Health claims stay inside the public evidence.",
    ],
    q2: "Is this style ancient?",
    a2: slug === "yin-yoga" || slug === "kundalini-yoga"
      ? "The modern class format is not ancient. Older words it uses have older histories that the class does not automatically inherit."
      : "Parts of the textual tradition are old. The class you find in a studio may be new. Say which one you mean.",
  });
}

console.log("practices written");
