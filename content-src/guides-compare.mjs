import { emitPage, faq } from "../scripts/lib/emit-page.mjs";

const fit = (q, a) =>
  faq(q, a, "Do I need a teacher to read this?", "No. A teacher can help with practice. This page only explains the idea and points to longer reading.");

const specs = [
  ["guide", "meditation-for-beginners", "meditation", "Meditation", false, "Meditation for Beginners: A First Week", "A first week of meditation needs one method, a short timer, and no promise of a new personality.", "Start meditation with one method, a few quiet minutes, and expectations small enough to keep.", "meditation for beginners", "How should a beginner meditate?", "Choose one simple method, sit or lie comfortably, and practice for about five to ten minutes. Notice distraction and return. That is a complete beginner session.", ["meditation"], ["mindfulness"], ["nccih-meditation", "nccih-meditation-depth", "pubmed-goyal-2014"], ["/topics/meditation/", "/articles/what-is-meditation/", "/articles/daily-meditation-practice/", "/meditation/breath-awareness/", "/guides/meditation/", "/questions/can-beginners-meditate/"], "What should the first session include?", "Which myths should you ignore?", "How do you continue after a week?", "A beginner does not need a cushion brand, a belief, or an hour of silence. A beginner needs a repeatable instruction.", "Sit in a chair if the floor hurts. Pain is not progress. Choose the breath as the object. When you notice planning or memory, label that as distraction once and come back. Five minutes is enough to learn the shape.", "[what meditation is](/articles/what-is-meditation/)", "Apps and classes often imply that thoughts are a failure. They are the material. Research summaries support modest stress language for some programs and reject cure language. Read that before you recruit a friend.", "the [meditation guides](/guides/meditation/)", "After seven short days you will know whether the instruction is clear. If it is, keep the same method for a month rather than collecting techniques. If it brings panic, stop and talk with a clinician.", "[a daily practice](/articles/daily-meditation-practice/)", "Do not fast, isolate, or breathe to dizziness because a video called that commitment. Do not replace therapy. Do not judge the week by whether you felt special. A plain chair and a short timer are the whole equipment list. Keep the same small dose for seven days before you decide the method is empty.", ["One method is enough.", "Short sessions count.", "Thoughts are not failure.", "Health claims stay modest."]],
];

function row(s) {
  const [kind, slug, topic, category, disclaimer, title, excerpt, description, keyword, question, answer, about, mentions, sources, related, h1, h2, h3, lead, meaning, linkA, origin, pillar, practice, linkB, caution, takeaways] = s;
  emitPage({
    kind, slug, topic, category, disclaimer, title, excerpt, description, keyword, question, answer, about, mentions, sources, related, h1, h2, h3, lead, meaning, linkA, origin, pillar, practice, linkB, caution, takeaways,
    faq: fit(question, answer),
  });
}

row(specs[0]);

const more = [
  {
    kind: "guide", slug: "mindfulness-for-beginners", topic: "mindfulness", category: "Mindfulness",
    title: "Mindfulness for Beginners: First Steps",
    excerpt: "A beginner mindfulness practice is a short period of noticing present sensation and returning when the mind leaves.",
    description: "Learn a simple mindfulness practice, what the word does and does not mean, and how to keep the first weeks modest.",
    keyword: "mindfulness for beginners",
    question: "How do beginners practice mindfulness?",
    answer: "Beginners can spend five to ten minutes noticing the breath or body sensations and returning when attention wanders. The aim is clearer attention, not a blank mind or a cure.",
    about: ["mindfulness"], mentions: ["meditation"], sources: ["apa-mindfulness", "nccih-meditation", "pubmed-tang-2015"],
    related: ["/topics/mindfulness/", "/articles/what-is-mindfulness/", "/meditation/mindfulness/", "/articles/meditation-for-beginners/", "/articles/what-research-says-about-mindfulness/", "/meditation/body-scan/"],
    h1: "What is the basic instruction?", h2: "What should you skip at the start?", h3: "How do you know it is going normally?",
    lead: "Mindfulness for beginners is smaller than the industry around it. You are learning to notice where attention is. You are not joining a philosophy and you are not treating a disease.",
    meaning: "Pick a sensation, often the breath at the nostrils or the rise of the belly. Stay with it lightly. When you find yourself elsewhere, that finding is a moment of mindfulness, and then you return. The body scan is a slower cousin if a single spot feels too thin.",
    linkA: "[what mindfulness is](/articles/what-is-mindfulness/)",
    origin: "The exercise has Buddhist roots and a clinical afterlife. You can learn the exercise without settling the religious question. If you want the Buddhist frame, seek it on purpose rather than assuming an app included it.",
    pillar: "the [mindfulness topic](/topics/mindfulness/)",
    practice: "Use a quiet timer. Sit or lie down. Do not add music that becomes the real object unless you have chosen sound on purpose. Ignore streaks and scores for the first month. Read the research page before you repeat a health claim.",
    linkB: "[the body scan](/meditation/body-scan/)",
    caution: "Stop if practice brings panic, dissociation, or a worsening of trauma symptoms. Intensity is not a badge. Mindfulness does not replace therapy or fair working conditions.",
    takeaways: ["Noticing and returning is the whole basic skill.", "Five minutes is a real practice.", "Secular and Buddhist frames should be named.", "Distress is a signal to get help, not to push."],
  },
  {
    kind: "guide", slug: "understanding-chakras", topic: "chakras", category: "Chakras", disclaimer: true,
    title: "Understanding Chakras Without the Hype",
    excerpt: "A beginner path through the seven-center chart that teaches the names and refuses the medical and moral claims.",
    description: "Understand the popular chakra chart, learn the Sanskrit names, and see which claims do not belong to the tradition.",
    keyword: "understanding chakras",
    question: "How should a beginner understand chakras?",
    answer: "Learn the chart as a modern teaching picture with Sanskrit names and traditional associations, and do not treat colors, stones, or emotional slogans as anatomy or diagnosis.",
    about: ["chakras"], mentions: ["chakra"], sources: ["britannica-chakra", "sacred-hatha", "britannica-kundalini"],
    related: ["/topics/chakras/", "/articles/what-are-chakras/", "/articles/are-chakras-scientific/", "/chakras/root-chakra/", "/glossary/chakra/", "/guides/chakras/"],
    h1: "What is worth memorizing?", h2: "What is later than it looks?", h3: "How can you use the map without believing it is medicine?",
    lead: "Understanding chakras begins by slowing the poster down. Seven names are enough for literacy. Seven products are not required for literacy.",
    meaning: "The usual English list runs from root to crown: muladhara, svadhisthana, manipura, anahata, vishuddha, ajna, sahasrara. Each center page on this site gives the Sanskrit name and a traditional location, then says where the color psychology is modern. Memorize the names. Hold the slogans lightly.",
    linkA: "[what chakras are](/articles/what-are-chakras/)",
    origin: "Hatha and tantric sources discuss centers, lotuses, and syllables without agreeing on one poster. The rainbow sequence is a modern synthesis. Kundalini imagery often travels with the chart and has the same limit: traditional picture, not a scan.",
    pillar: "the [chakras topic](/topics/chakras/)",
    practice: "If a class uses the words while you stretch and breathe, you can treat the words as poetry or set them aside. You do not need to open anything. Breath awareness works without a ladder of centers. Stones do not treat organs.",
    linkB: "[whether chakras are scientific](/articles/are-chakras-scientific/)",
    caution: "Refuse any claim that a blocked chakra explains a disease or a moral failure. Refuse rankings of how open you are. The glossary and the center pages are for recognition, not for a treatment plan.",
    takeaways: ["Learn the seven names as a chart, not as organs.", "The rainbow scheme is modern.", "You can practice without the chart.", "Disease and character are not chakra scores."],
  },
  {
    kind: "guide", slug: "kundalini-for-beginners", topic: "kundalini", category: "Kundalini", disclaimer: true,
    title: "Kundalini for Beginners: Read Before You Chase",
    excerpt: "A beginner briefing on kundalini that favors history and safety over techniques for forcing an awakening.",
    description: "Read what beginners should know about kundalini before trying intense practices or believing symptom lists.",
    keyword: "kundalini for beginners",
    question: "What should beginners know about kundalini?",
    answer: "Beginners should learn that kundalini is a traditional metaphor, that modern classes are a separate history, and that chasing an awakening with intense breathing is a poor and sometimes unsafe idea.",
    about: ["kundalini"], mentions: ["chakras"], sources: ["britannica-kundalini", "sacred-hatha", "nccih-yoga"],
    related: ["/topics/kundalini/", "/articles/what-is-kundalini/", "/articles/is-kundalini-dangerous/", "/yoga/kundalini-yoga/", "/guides/kundalini/", "/topics/chakras/"],
    h1: "What is the safe way to start?", h2: "What is a class usually doing?", h3: "Which promises should you ignore?",
    lead: "The useful beginner move is to study the idea before you try to produce a crisis. Understanding is a complete outcome. A dramatic sensation is not a diploma.",
    meaning: "Read the definition and the history. Notice that texts disagree. Notice that a studio brand called Kundalini Yoga is twentieth-century teaching. If you attend a class, keep it moderate, eat, and sleep. Stop if you are frightened or cannot function.",
    linkA: "[what kundalini is](/articles/what-is-kundalini/)",
    origin: "Tantric and hatha images of a coiled power are the traditional layer. Internet symptom lists are a later layer. They mix anxiety, sleep loss, and suggestion. A clinician is the right reader of frightening symptoms. A comment section is not.",
    pillar: "the [kundalini guides](/guides/kundalini/)",
    practice: "If you want a practice, use ordinary breath awareness or a short yoga class with a teacher who welcomes questions. Do not hyperventilate toward a vision. Do not isolate because a teacher calls isolation a test.",
    linkB: "[is kundalini dangerous](/articles/is-kundalini-dangerous/)",
    caution: "No established science shows a serpent energy. Ethical scandals in some modern organizations are a reason to separate a classical word from any one institution. Fees, secrecy, and contempt for outside advice are warnings in every tradition.",
    takeaways: ["Study before you chase.", "Modern classes are not the whole tradition.", "Intense breathing is not proof of awakening.", "Frightening symptoms are a health issue first."],
  },
];

for (const spec of more) emitPage({ ...spec, faq: fit(spec.question, spec.answer) });
console.log("guides started");
