import { category, emit } from "../scripts/lib/doc.mjs";

const alt = (subject) =>
  `Abstract geometric illustration of circles, bars, and a horizon line for the ${subject} pillar.`;

emit({
  id: "pillar-consciousness",
  file: "content/documents/pillars/consciousness.json",
  kind: "pillar",
  title: "Consciousness: Ideas, Traditions, and Open Questions",
  slug: "consciousness",
  path: "/topics/consciousness/",
  topic: "consciousness",
  category: category("Consciousness", "consciousness"),
  excerpt:
    "A guide to how philosophy, science, and spiritual traditions talk about consciousness, and which questions remain unsettled.",
  description:
    "Explore what consciousness means in philosophy, science, and spiritual traditions, and which questions remain open.",
  alt: alt("consciousness"),
  intent: ["informational", "definition"],
  primary_keyword: "what is consciousness",
  secondary_keywords: ["consciousness meaning", "study of consciousness"],
  entities: [{ name: "Consciousness", type: "Concept" }],
  about: ["consciousness"],
  mentions: ["awareness", "meditation", "vedanta", "non-duality"],
  source_ids: ["sep-consciousness", "sep-self-consciousness", "sep-panpsychism"],
  related: [
    "/articles/what-is-consciousness/",
    "/glossary/consciousness/",
    "/glossary/awareness/",
    "/topics/meditation/",
    "/topics/vedanta/",
    "/guides/consciousness/",
  ],
  quick_answer: {
    question: "What is consciousness?",
    answer:
      "Consciousness is the capacity for experience: there is something it is like to see, think, or feel. Philosophers, scientists, and spiritual traditions explain that capacity in different ways, and no single account is settled.",
  },
  intro:
    "People use the word consciousness for waking life, for self-awareness, and sometimes for a reality they take to be deeper than the individual mind. Those uses are related, and they are not the same claim.\n\nThis pillar gathers the publication's reading on the idea. It is written for a general reader in the United States. It does not treat a meditation experience as proof of a metaphysical theory, and it does not treat a laboratory finding as a spiritual teaching.",
  sections: [
    {
      heading: "What do philosophers mean by consciousness?",
      slug: "what-philosophers-mean",
      content:
        "In contemporary philosophy, consciousness often names subjective experience. A standard way of putting the puzzle, associated with Thomas Nagel's question of what it is like to be a creature, is that a full physical description still leaves the felt character of experience to be explained. The [Stanford Encyclopedia of Philosophy](https://plato.stanford.edu/entries/consciousness/) separates this issue from nearby ones such as attention, wakefulness, and self-knowledge.\n\nSelf-consciousness is a further topic. A person can have experience and also be able to think about that experience as their own. The encyclopedia entry on self-consciousness treats that reflective capacity as its own problem, not as a synonym for simply being awake. When a spiritual book uses one English word for both, it helps to ask which of these ideas is in play.\n\nPanpsychism, the family of views that attribute some experiential aspect very widely in nature, is a live philosophical option for some writers and a nonstarter for others. Citing it here only marks that the debate is open. It is not a finding that the universe is a mind.",
    },
    {
      heading: "How do scientists approach the same word?",
      slug: "how-science-approaches-it",
      content:
        "Neuroscience can correlate reports of experience with brain activity, sleep stages, anesthesia, and attention. Those correlations are informative. They do not, by themselves, decide the philosophical question of why physical processes are accompanied by experience at all. Serious researchers disagree about how much of the puzzle is empirical and how much is conceptual.\n\nClinical language adds another layer. A patient can be awake, in a minimally conscious state, or unresponsive, and those are medical descriptions with practical consequences. They should not be borrowed as metaphors for enlightenment. A [meditation](/topics/meditation/) practice that changes attention is not the same event as recovery from a brain injury.\n\nThis publication does not offer a private theory of the brain. Where a page discusses research, it points to a public review and states the limit of that review.",
    },
    {
      heading: "How do Indian traditions speak about awareness?",
      slug: "how-indian-traditions-speak",
      content:
        "Several Indian schools talk about a witnessing awareness that is not identical with changing thoughts. In Advaita Vedanta, the self, atman, is taught by many interpreters as not different from brahman, the ultimate reality. That is a philosophical and scriptural claim. The [Vedanta](/topics/vedanta/) page treats it as a tradition to be understood, not as a result this site has verified.\n\nOther schools disagree. Classical yoga, as organized in Patanjali's Yoga Sutras, is interested in stilling the fluctuations of mind and in states such as samadhi. Buddhist traditions often refuse a permanent self even while training attention with great care. Using the English word consciousness for all of these teachings flattens arguments that insiders considered important.\n\nA careful reader can still compare them. Each tradition asks what remains when thoughts are quiet, and each gives a different answer about whether that remainder is a self, an absence of self, or a union with something ultimate.",
    },
    {
      heading: "What does meditation add, and what does it not prove?",
      slug: "what-meditation-adds",
      content:
        "Meditation trains attention or awareness. Practitioners sometimes report that experience feels wider, quieter, or less owned by a running commentary. Those reports matter as descriptions of practice. They do not settle the metaphysics of consciousness, and they are not a diagnosis.\n\nResearch reviews collected by the National Center for Complementary and Integrative Health discuss meditation mainly in relation to stress and related outcomes, with mixed evidence and clear cautions. That literature is about practices and measured effects. It is not a test of Vedanta. The [mindfulness](/topics/mindfulness/) pages keep the clinical conversation in its own lane.\n\nIf a teacher says a meditation proves that consciousness is universal, you are hearing an interpretation. You can value the practice and still decline the interpretation.",
    },
    {
      heading: "Which everyday uses cause the most confusion?",
      slug: "which-uses-confuse",
      content:
        "One confusion is between being conscious, in the ordinary sense of not being asleep, and being conscious of something in particular. Another is between consciousness and conscience, the moral sense of right and wrong. English lets those words drift together. They come from related roots and now do different jobs.\n\nA third confusion is the phrase universal consciousness itself. As the name of this publication, it names a subject area: the study of awareness across traditions. It is not a doctrine that one mind contains all people, and it is not a scientific term of art. The [glossary entry](/glossary/consciousness/) keeps the shorter definition. This pillar is the map of the cluster.\n\nSearch results often mix new-age essays, philosophy lectures, and religious instruction on one page of links. The differences among those genres are part of what a reader needs.",
    },
    {
      heading: "How should a beginner read this cluster?",
      slug: "how-should-a-beginner-read",
      content:
        "Start with the explainer [What is consciousness?](/articles/what-is-consciousness/) if you want the definition in one place. Use the [guide hub](/guides/consciousness/) for a shorter reading path. Follow [awareness](/glossary/awareness/) and [non-duality](/glossary/non-duality/) when the vocabulary of a book gets ahead of you.\n\nThen decide which question you actually have. A philosophical question belongs with the encyclopedia sources. A practice question belongs with meditation. A scriptural question belongs with Vedanta or the [ancient wisdom](/topics/ancient-wisdom/) pages. Mixing them into one triumphant conclusion is how this subject becomes vague.\n\nYou do not need to adopt a worldview to learn the map. The map is the point of the publication.",
    },
    {
      heading: "What should you do with a strong experience?",
      slug: "what-about-strong-experiences",
      content:
        "People sometimes report a sudden sense of unity, boundary loss, or meaning during meditation, illness, grief, or worship. Philosophers of religion discuss such reports under mysticism, and they disagree about whether the reports justify beliefs about reality. A powerful hour is data about your experience. It is not, on its own, a theory of the universe.\n\nIf the experience is frightening, disorienting, or tied to sleep loss or drugs, treat it as a health question first. This publication cannot assess you. A clinician can. Spiritual interpretation can wait until you are safe.\n\nIf the experience is quiet and useful, you can keep practicing without promoting it into a doctrine. The [glossary note on awareness](/glossary/awareness/) is a smaller next step than a total worldview.",
    },
  ],
  key_takeaways: [
    "Consciousness names subjective experience, and nearby words name different problems.",
    "Brain research and spiritual teachings answer different questions.",
    "Indian schools disagree with one another about the self.",
    "Meditation reports do not prove a metaphysical theory.",
  ],
  faq: [
    {
      question: "Is consciousness the same as the brain?",
      answer:
        "Many scientists study consciousness through the brain. Whether experience is fully explained by brain processes is still debated in philosophy. This site does not pretend that debate is over.",
    },
    {
      question: "Does meditation expand consciousness?",
      answer:
        "People use that phrase for changes in attention or for a spiritual claim. The first can be discussed carefully. The second is an interpretation, not a measurement.",
    },
    {
      question: "What does the publication's name commit me to?",
      answer:
        "Nothing doctrinal. The name marks the subject. It is not a creed and not a scientific conclusion.",
    },
  ],
});

emit({
  id: "pillar-meditation",
  file: "content/documents/pillars/meditation.json",
  kind: "pillar",
  title: "Meditation: Practices, History, and Beginner Context",
  slug: "meditation",
  path: "/topics/meditation/",
  topic: "meditation",
  category: category("Meditation", "meditation"),
  excerpt:
    "How meditation is defined, where major methods come from, and what beginners in the United States should understand before they start.",
  description:
    "Learn what meditation is, how major methods differ, and what research can and cannot say about practice.",
  alt: alt("meditation"),
  intent: ["informational", "beginner"],
  primary_keyword: "what is meditation",
  secondary_keywords: ["how to meditate", "types of meditation", "meditation for beginners"],
  entities: [{ name: "Meditation", type: "Practice" }],
  about: ["meditation"],
  mentions: ["mindfulness", "breathwork", "mantras", "yoga"],
  source_ids: ["nccih-meditation", "nccih-meditation-depth", "pubmed-goyal-2014", "iep-yoga"],
  related: [
    "/articles/what-is-meditation/",
    "/articles/meditation-for-beginners/",
    "/guides/meditation/",
    "/glossary/meditation/",
    "/meditation/mindfulness/",
    "/topics/mindfulness/",
  ],
  quick_answer: {
    question: "What is meditation?",
    answer:
      "Meditation is a group of practices that train attention, awareness, or a devotional focus. Traditions define the aim differently, and modern research studies specific methods rather than meditation as one thing.",
  },
  intro:
    "Meditation is an ordinary English word covering a large set of trainings. Some ask you to watch the breath. Some repeat a mantra. Some cultivate goodwill. Some seek a stillness described in classical yoga. Lumping them together is useful for a bookshelf and misleading for a claim about evidence.\n\nThis pillar is the center of the publication's meditation cluster. It points to technique pages, beginner guides, and the research summaries that actually exist. It does not sell a course.",
  sections: [
    {
      heading: "What counts as meditation?",
      slug: "what-counts",
      content:
        "A workable definition is a repeated practice that steadies attention or changes one's relation to thoughts and feelings. Sitting quietly while ruminating without any method is not, by that definition, meditation, even if it is restful. Prayer can overlap with meditation when it trains attention, and it can also be something else, such as petition.\n\nThe National Center for Complementary and Integrative Health describes meditation and mindfulness as practices with a history in several religious traditions and a newer role in secular settings. That double history matters. A church basement class and a Buddhist monastery can both be serious, and they are not teaching the same goal.\n\nIf a page on this site names a method, it names the method. [Mindfulness](/meditation/mindfulness/), [mantra practice](/meditation/mantra/), [breath awareness](/meditation/breath-awareness/), the [body scan](/meditation/body-scan/), and [loving-kindness](/meditation/loving-kindness/) are not interchangeable.",
    },
    {
      heading: "Where do the major families come from?",
      slug: "where-families-come-from",
      content:
        "South Asian traditions provide a large share of the methods now taught in the United States. The Yoga Sutras describe a discipline in which meditation and absorption are late limbs, not the same thing as a stretch class. Buddhist sources describe mindfulness of breathing, loving-kindness, and analytical meditations. Hindu devotional practices include repetition of divine names.\n\nEast Asian traditions contribute Zen sitting and other contemplative forms. Christian history includes lectio divina and the Jesus Prayer, which are not Indian practices wearing new clothes. Twentieth-century teachers also built secular programs, notably mindfulness-based stress reduction, which adapted Buddhist attention training for a clinic without asking patients to adopt Buddhist doctrine.\n\nA beginner does not need this whole map on day one. The map prevents a later surprise: the word meditation on a studio schedule may mean any of the above. The [yoga](/topics/yoga/) pillar covers the textual side of the Indian material.",
    },
    {
      heading: "How do people actually practice?",
      slug: "how-people-practice",
      content:
        "A common session has a posture that can be held without strain, a chosen object such as the breath or a phrase, and a way of noticing distraction without turning the session into self-attack. Length varies. The question [how long should you meditate](/questions/how-long-should-you-meditate/) treats duration as a practical choice, not a moral rank.\n\nGuided audio can help a beginner notice what to do with attention. It can also hide whether you are learning a skill or only following a voice. Silence is not more authentic by default. It is a different support.\n\n[Meditation for beginners](/articles/meditation-for-beginners/) walks through a first week without claiming that a first week produces a personality change. [Daily practice](/articles/daily-meditation-practice/) is about repetition, which is the part most people underestimate.",
    },
    {
      heading: "What does research show, and where does it stop?",
      slug: "what-research-shows",
      content:
        "A 2014 systematic review in JAMA Internal Medicine, indexed on PubMed, examined meditation programs for stress and well-being. It found moderate evidence for some anxiety and depression outcomes in some programs, and weaker or insufficient evidence for many other claims. That is a reason to be interested and a reason to refuse slogans.\n\nNCCIH's public pages make a similar point in plainer language. Meditation may help some people with stress. It is not a proven cure for disease. It should not replace professional care. The American Psychological Association has described mindfulness meditation as a researched approach to stress, which is a narrower statement than many popular headlines.\n\nStudies also differ in quality. Some are small. Some lack a convincing comparison group. A tradition's antiquity does not repair a weak trial, and a positive trial does not confirm a chakra theory that the trial never tested.",
    },
    {
      heading: "What are the common misunderstandings?",
      slug: "what-are-the-misunderstandings",
      content:
        "One myth is that meditation means having no thoughts. Methods usually teach a relationship to thoughts, not a permanent blank mind. Another is that difficulty means failure. The page on [why meditation feels difficult](/questions/why-does-meditation-feel-difficult/) treats distraction as the material of practice.\n\nA third myth is that meditation is always calming in the moment. Some people meet grief, restlessness, or old memories when they sit still. That is a reason for modest doses and, when mental health is already fragile, for advice from a clinician who knows the person. It is not a reason to advertise meditation as risk-free.\n\n[Common myths](/articles/common-meditation-myths/) collects these mistakes in one place. The [mindfulness comparison](/articles/meditation-vs-mindfulness/) handles the vocabulary problem, which is that many Americans now use mindfulness as the name for all meditation.",
    },
    {
      heading: "How does this cluster fit together?",
      slug: "how-the-cluster-fits",
      content:
        "Use this pillar for the map. Use the [explainer](/articles/what-is-meditation/) for the definition. Use the [guide hub](/guides/meditation/) when you want practice pages in a row. Use the [glossary](/glossary/meditation/) when you only need a short reference. Technique pages under [meditation practices](/meditation/) describe session shape, traditional context, and beginner limits.\n\nQuestions such as [what happens during meditation](/questions/what-happens-during-meditation/) and [how meditation works](/questions/how-does-meditation-work/) stay narrower than this overview so they do not compete with it. If you are comparing sitting with postural yoga, read [yoga and meditation](/articles/yoga-vs-meditation/).\n\nNothing in the cluster asks you to join an organization. If a teacher demands secrecy, large fees, or isolation as the price of a basic attention practice, that demand is separate from meditation itself and deserves scrutiny.",
    },
    {
      heading: "Where should a reader in the United States begin?",
      slug: "where-should-a-us-reader-begin",
      content:
        "Begin with a method you can describe in one sentence, practiced for a short time, most days. Breath awareness and a simple mindfulness instruction are enough to learn what the word feels like in practice. You can read [types of sitting](/meditation/) after you have tried one method, not before you have tried any.\n\nUse American classroom language without pretending it is ancient. A studio that says mindfulness may mean secular attention training. A temple class may mean something devotional. Ask what the period is for. The [beginner guide](/articles/meditation-for-beginners/) is written for that question.\n\nKeep health claims on a short leash. If you meditate because you want help with stress, say that, and keep your clinician if you have one. If you meditate because a tradition asks for it, say that too. The publication's job is to keep those motives visible.",
    },
  ],
  key_takeaways: [
    "Meditation names a family of methods, not one script.",
    "Religious, philosophical, and clinical versions should stay distinct.",
    "Research supports modest claims about stress for some programs and rejects cure-all language.",
    "Beginners need a method, a short duration, and realistic expectations.",
  ],
  faq: [
    {
      question: "Do I have to sit on the floor?",
      answer:
        "No. A stable, comfortable posture is enough. Pain is not a sign of progress.",
    },
    {
      question: "Is meditation a religion?",
      answer:
        "Some methods are religious practices. Others are taught in secular clinics. The setting and the aim decide, not the English word alone.",
    },
    {
      question: "Can meditation replace therapy?",
      answer:
        "No. Research summaries do not support using meditation as a replacement for professional mental health care.",
    },
  ],
});

console.log("pillars a written");
