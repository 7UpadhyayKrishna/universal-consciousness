import { category, emit } from "../scripts/lib/doc.mjs";
import { mdpage } from "../scripts/lib/mdpage.mjs";

const base = {
  kind: "pillar",
  intent: ["informational"],
  author_id: "editorial-team",
};

function page(spec, markdown) {
  mdpage(
    {
      ...base,
      file: `content/documents/pillars/${spec.slug}.json`,
      id: `pillar-${spec.slug}`,
      category: category(spec.category, spec.slug),
      topic: spec.slug,
      path: `/topics/${spec.slug}/`,
      alt: `Abstract geometric illustration of circles and fine rules for the ${spec.category} pillar.`,
      ...spec,
    },
    markdown,
  );
}

page(
  {
    slug: "mindfulness",
    category: "Mindfulness",
    title: "Mindfulness: Attention Training and Its Limits",
    excerpt:
      "What mindfulness means in Buddhist training and in modern clinics, and what the research does not license you to claim.",
    description:
      "Learn what mindfulness means, how modern programs adapted it, and what research does and does not show.",
    primary_keyword: "what is mindfulness",
    secondary_keywords: ["mindfulness for beginners", "mindfulness meditation"],
    about: ["mindfulness"],
    mentions: ["meditation", "awareness"],
    source_ids: ["apa-mindfulness", "apa-mindfulness-topic", "nccih-meditation", "pubmed-tang-2015"],
    related: [
      "/articles/what-is-mindfulness/",
      "/articles/mindfulness-for-beginners/",
      "/articles/meditation-vs-mindfulness/",
      "/meditation/mindfulness/",
      "/topics/meditation/",
      "/articles/what-research-says-about-mindfulness/",
    ],
    quick_answer: {
      question: "What is mindfulness?",
      answer:
        "Mindfulness is a way of paying attention to present experience, often with an attitude of curiosity rather than immediate reaction. Buddhist sources treat it as one part of a larger training. Modern clinics often teach a secular version aimed at stress and mood.",
    },
    key_takeaways: [
      "Mindfulness names an attention skill with Buddhist roots and modern clinical adaptations.",
      "Secular courses are not the same thing as a full Buddhist path.",
      "Research supports limited stress-related claims and rejects cure language.",
      "A short daily period is a legitimate way to begin.",
    ],
    faq: [
      {
        question: "Is mindfulness the same as meditation?",
        answer:
          "Mindfulness is one family of meditation and, in Buddhist lists, one mental quality. Many other meditations are not mindfulness practices.",
      },
      {
        question: "Does mindfulness require Buddhism?",
        answer:
          "No. Clinical courses teach it without asking for Buddhist belief. The historical roots are still worth knowing.",
      },
    ],
  },
  `Mindfulness became an American household word through medicine, apps, and schools. The word is older and narrower than that boom. In Buddhist lists of mental qualities it names a faculty of remembering or keeping in mind what is happening, so that a person can respond with the rest of the training rather than with habit.

This pillar keeps those layers separate. It is not a promise that mindfulness fixes a life. The [meditation](/topics/meditation/) pages cover the wider family of practices. This page is about one influential member of that family.

## What does the word mean in Buddhist training?

In Pali and Sanskrit discussions, mindfulness is not a mood and not a brand. It is a capacity used alongside ethics, concentration, and wisdom. Remembering the breath, remembering a posture, or remembering that a feeling is a feeling are classic exercises. The point is clarity, not performance.

A clinic can borrow the exercise without borrowing the whole path. That borrowing should be named. Mindfulness-based stress reduction, developed in a medical setting in the late twentieth century, taught attention practices to patients who were not asked to become Buddhists. That program is a modern adaptation. It is not identical to a monastic curriculum, and it does not need to pretend that it is.

Readers who want the secular practice itself can use the [mindfulness technique page](/meditation/mindfulness/) and the [beginner guide](/articles/mindfulness-for-beginners/). Readers comparing vocabulary can use [meditation versus mindfulness](/articles/meditation-vs-mindfulness/).

## How did mindfulness enter American healthcare?

Hospitals, universities, and later employers adopted short courses built around body scans, sitting practice, and gentle movement. The American Psychological Association describes mindfulness meditation as a researched way some people work with stress. That is a professional summary, not a slogan from an app store.

The National Center for Complementary and Integrative Health groups mindfulness with other meditation practices and tells the public that evidence is stronger for some uses than for others. A 2015 review in the neuroscience literature, indexed on PubMed, surveyed studies of mindfulness and brain measures. Such reviews show a research field. They do not show that every program, teacher, or ten-minute recording produces the same effect.

Workplace programs add a further ambiguity. An employer may offer mindfulness while leaving the conditions of work unchanged. Attention training is not a substitute for fair schedules, medical care, or safety.

## What can research support?

Research can support cautious statements. Some structured programs are associated with modest improvements in stress, anxiety, or depression scores for some participants, compared with some controls. The size of the change varies. The quality of trials varies. People who drop out are part of the story.

Research does not support claims that mindfulness cures disease, replaces medication, or produces enlightenment. It also does not support the idea that a person who finds the practice unpleasant is doing it wrong. Difficulty is discussed on the [meditation myths](/articles/common-meditation-myths/) page and in the [research explainer](/articles/what-research-says-about-mindfulness/).

If you have a mental health diagnosis, treat mindfulness as an optional skill to raise with a clinician, not as a plan you invent from a website.

## How is a session usually taught?

A common instruction is to notice the breath, a sound, or body sensations, and to label distraction when it appears, then return. Sessions in secular courses often run from a few minutes to around forty-five. Longer is not automatically better. The [body scan](/meditation/body-scan/) is a frequent companion practice because it gives attention a slow path through the body.

Teachers differ on whether to aim for relaxation. Relaxation can happen. It is not the definition. A person can be mindful of a difficult sensation without making the sensation go away.

Apps can demonstrate the instruction. They can also gamify a practice that was supposed to reduce compulsion. Use them as a timer and a teacher, then notice whether the score has become the point.

## What do people confuse with mindfulness?

People confuse mindfulness with emptying the mind, with positive thinking, and with being calm at all costs. None of those is the technical idea. They also confuse it with every other meditation. Concentration practices that exclude distractions, and mantra practices that repeat a formula, train attention differently. [Mindfulness and concentration](/articles/mindfulness-vs-concentration/) sets out that difference.

Another confusion is moral. Mindfulness is sometimes sold as a way to accept injustice quietly. Attention can be used that way, and it can also be used to see a situation more clearly. The technique does not pick your politics for you.

The [glossary entry](/glossary/mindfulness/) is the short definition. This pillar is the argument around it.

## How should a beginner start?

Start with a short daily period and one instruction. Five to ten minutes is a legitimate start. Sit or lie in a way you can keep. When the mind leaves, notice that and return. That is the practice. The [beginner guide](/articles/mindfulness-for-beginners/) writes the first steps without a personality test or a promise.

Read the [evidence page](/articles/what-research-says-about-mindfulness/) before you repeat a health claim to someone else. If practice brings panic, dissociation, or a worsening of trauma symptoms, stop and get qualified help. Intensity is not a badge.

Keep the religious question honest. You can learn a secular exercise. If you want the Buddhist context, seek a teacher in that tradition rather than assuming an app has supplied it.

## What should you ignore in popular coverage?

Ignore lists that rank mindfulness as a cure for productivity, insomnia, and relationships in the same breath. A skill that changes attention can matter in those areas and still fail as a universal fix. Ignore testimonials that skip dropouts. Ignore brain images used as decoration. A picture of a scan is not a result unless the study and its limits are named.

Prefer pages that say who was taught, for how long, and compared with what. The [National Center for Complementary and Integrative Health](https://www.nccih.nih.gov/health/meditation-and-mindfulness-what-you-need-to-know) writes for the public in that spirit. This cluster follows it. When a headline is more excited than the source, trust the source.

You can still enjoy a quiet ten minutes without a study. Just do not promote the ten minutes into medicine or into a complete philosophy. A good test of an article, including the ones on this site, is whether it can name a limit without losing the practice. If you remember only one distinction, remember this: mindfulness can be a skill you practice, a term in a Buddhist list, or a wellness brand, and those three should not be asked to prove one another.
`,
);

page(
  {
    slug: "spirituality",
    category: "Spirituality",
    title: "Spirituality: Meaning, Practice, and Careful Language",
    excerpt:
      "How spirituality is used in the United States, how it differs from religion, and how to read claims about awakening without losing the plot.",
    description:
      "Understand spirituality as a word for meaning and practice, and how it differs from religion and from health claims.",
    primary_keyword: "what is spirituality",
    secondary_keywords: ["spirituality meaning", "spirituality vs religion"],
    about: ["spirituality"],
    mentions: ["consciousness", "ancient-wisdom"],
    source_ids: ["sep-mysticism", "sep-consciousness", "nccih-meditation"],
    related: [
      "/articles/what-is-spirituality/",
      "/articles/spirituality-vs-religion/",
      "/articles/starting-a-spiritual-practice/",
      "/guides/spirituality/",
      "/topics/consciousness/",
      "/articles/spiritual-awakening-and-enlightenment/",
    ],
    quick_answer: {
      question: "What is spirituality?",
      answer:
        "Spirituality is a broad word for practices and beliefs about meaning, the sacred, or a reality taken to be deeper than ordinary routine. It sometimes overlaps with religion and sometimes names a path people pursue outside a congregation.",
    },
    key_takeaways: [
      "Spirituality is a wide label and needs a narrower definition on each page.",
      "It is not automatically better than religion, or separate from it.",
      "Special experiences do not prove a single doctrine.",
      "Meaning and medical evidence are different kinds of claims.",
    ],
    faq: [
      {
        question: "Do I have to leave religion to be spiritual?",
        answer:
          "No. Many people use spiritual language inside a religion. Others use it outside one. Neither choice is assumed here.",
      },
      {
        question: "Is a spiritual experience proof?",
        answer:
          "It is proof that you had an experience. What the experience means is a further question, and traditions answer it differently.",
      },
    ],
  },
  `Spirituality is one of the least precise words in American English. It can mean prayer, a hike, a meditation app, a belief in God, or a refusal of organized religion. A publication that uses the word has to say which sense is in play.

Universal Consciousness uses it for the cluster of questions about meaning, practice, and traditions of inner life. It does not use it as a superior alternative to religion, and it does not use it as a health treatment. The [comparison with religion](/articles/spirituality-vs-religion/) is the page for that boundary.

## What are people usually pointing at?

Often they are pointing at experiences of awe, conscience, grief, or stillness, and at practices that cultivate those experiences on purpose. Sometimes they are pointing at a doctrine: that a soul exists, that the universe is purposeful, or that consciousness is more than the brain. Those are different claims. The first can be described. The second has to be argued, and this site will not pretend the argument is finished. The [consciousness](/topics/consciousness/) pillar keeps the philosophical side visible.

Mysticism, as philosophers use the term, refers to reports of union, emptiness, or a reality that feels more direct than ordinary perception. The Stanford Encyclopedia's article on mysticism shows how divided scholars are about what those reports prove. A moving experience is not automatically evidence.

## How does spirituality relate to religion?

Religion usually adds institutions, rituals shared with others, authorities, and a history. Spirituality is sometimes the private side of a religion and sometimes a way of leaving one. Neither arrangement is more mature by default.

Many readers in the United States inherited a Protestant picture in which sincere inner faith matters more than ritual. That picture shapes how Indian and Japanese practices get translated into personal growth. The translation can be respectful, and it can also erase the community that carried the practice. [Ancient wisdom](/topics/ancient-wisdom/) pages try to put the community and the text back in view.

If you are already inside a synagogue, church, mosque, or temple, you do not need this publication's permission to call your life spiritual. The [starting guide](/articles/starting-a-spiritual-practice/) is for people assembling a practice without assuming a single institution.

## What practices tend to gather under the word?

Meditation, prayer, yoga, reading, service, fasting, pilgrimage, and time in nature all appear in American conversations about spiritual life. They do not share one mechanism. A mantra and a protest can both be meaningful. Only one of them is a meditation technique.

This site's practical pages stay specific. [Mantras](/topics/mantras/), [breathwork](/topics/breathwork/), and [yoga](/topics/yoga/) are not folded into a single spiritual product. The [guide hub](/guides/spirituality/) is a reading list, not a ladder you must climb.

Be wary of anyone who sells spirituality as a bundle: a belief, a diet, a personality type, and a payment plan. The bundle is a business. The questions underneath it can still be serious.

## What about awakening and special experiences?

Awakening and enlightenment are words traditions use for a change in how a person understands self and world. They are not synonyms for feeling inspired on a weekend. The page on [awakening and enlightenment](/articles/spiritual-awakening-and-enlightenment/) separates popular American usage from narrower doctrinal uses, including Buddhist and Vedantic ones.

Reports of light, bliss, or loss of boundary appear in many traditions and also in medical contexts. Similar reports do not prove identical causes. Sleep deprivation, drugs, grief, and epilepsy can change experience. So can long practice. A responsible description leaves room for more than one explanation.

If an experience frightens you or disconnects you from ordinary care of your life, seek a clinician. A teacher who tells you to interpret distress only as a spiritual breakthrough is asking you to skip a basic safety check.

## How should claims of healing be read?

Spirituality and health talk past each other in American marketing. A practice can be meaningful and still be unproven as medicine. Meditation research, summarized by the National Center for Complementary and Integrative Health, supports limited statements about stress and does not support miracle language.

This publication will describe a tradition's hope. It will label the hope. It will not convert the hope into a result. The [disclaimer](/disclaimer/) is the standing version of that rule. The [explainer](/articles/what-is-spirituality/) is the shorter definition if you do not need the whole cluster.

## How can a reader use this section?

Pick one practice you can describe, one text or teacher you can name, and one claim you are willing to hold lightly. That is enough structure to learn. The [beginner path](/articles/starting-a-spiritual-practice/) suggests how to do that without collecting identities.

Use question pages when you have a narrow query, and topic pillars when you need the map. Spirituality as a label is the map's widest border. It is useful only when the pages inside it stay precise.

## What does this publication refuse to sell you?

It refuses a ranking of how spiritual you are. It refuses a test that assigns you a type and then a product. It refuses the idea that suffering is only a lesson you failed to learn. Grief, illness, and injustice are not puzzles designed for your growth, even if a practice helps you bear them.

It also refuses to mock the subject. People turn to prayer and meditation because ordinary language runs out. That turn deserves clear description. Clarity includes the history of the practice, the disagreements inside it, and the evidence around any health claim. The [editorial policy](/editorial-policy/) is the longer version of this refusal.

If you want a next page, read the [explainer](/articles/what-is-spirituality/) or the [comparison with religion](/articles/spirituality-vs-religion/). Both stay inside the same rules. Bring a specific question. The word spirituality will not answer it until you say whether you mean a practice, a community, a doctrine, or a hope about health. Those four are enough categories to keep the rest of the cluster honest, and they are the categories this publication will keep using when a page would otherwise drift into mood. Bring notes. Write down the practice, the community if there is one, the sentence you are tempted to believe, and the sentence the sources actually support. That small habit will do more for your reading than another definition of spirituality.
`,
);

console.log("pillars b written");
