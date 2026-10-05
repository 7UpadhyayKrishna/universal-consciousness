import { category, emit } from "../scripts/lib/doc.mjs";

const pub = category("Publication", "publication");
const alt = (subject) =>
  `Abstract geometric illustration of circles and a fine horizontal rule, used on the ${subject} page.`;

emit({
  id: "editorial-team",
  file: "content/documents/authors/editorial-team.json",
  kind: "author",
  title: "Universal Consciousness Editorial Team",
  slug: "editorial-team",
  path: "/authors/editorial-team/",
  topic: "publication",
  category: pub,
  excerpt:
    "The staff desk that writes, edits, and corrects Universal Consciousness. This profile does not claim personal clinical or lineage credentials.",
  description:
    "Meet the staff desk behind Universal Consciousness, including how pages are written, reviewed, and corrected.",
  alt: alt("editorial team"),
  intent: ["informational"],
  primary_keyword: "universal consciousness editorial team",
  about: [],
  mentions: ["consciousness"],
  related: ["/about/", "/editorial-policy/", "/corrections/"],
  quick_answer: {
    question: "Who writes Universal Consciousness?",
    answer:
      "Pages are written by the Universal Consciousness Editorial Team, a staff desk. The byline is not a named guru, physician, or lineage holder, and it does not imply a personal credential.",
  },
  intro:
    "Universal Consciousness publishes explainers, guides, glossary entries, and question pages about meditation, consciousness, and Indian philosophical traditions. The byline on those pages is a desk, not a fictional expert.\n\nThis profile exists so readers can see who is responsible for the words. Responsibility sits with the publication. It does not sit with an invented biography.",
  sections: [
    {
      heading: "What does this byline mean?",
      slug: "what-the-byline-means",
      content:
        "The Universal Consciousness Editorial Team is the name of the staff desk that researches, drafts, and revises the publication. A page signed by the desk has been prepared as reference writing for a general reader in the United States.\n\nThe desk is not a person with a degree, a clinical license, or an initiation that this site can verify. Those details are omitted because they would be fiction. If a named writer later contributes, that writer will receive a separate profile, and the profile will list only experience that can be checked.",
    },
    {
      heading: "What does the desk cover?",
      slug: "what-the-desk-covers",
      content:
        "The desk covers consciousness, meditation, mindfulness, spirituality, yoga, kundalini, chakras, reiki, Ayurveda, mantras, breathwork, Vedanta, and related terms in the [glossary](/glossary/). The aim is to explain how a tradition talks, where the talk comes from, and what a careful reader should not infer.\n\nHealth-adjacent subjects are handled with a standing distinction. A traditional claim is labeled as tradition. A practitioner report is labeled as report. A research finding is cited to a public source such as the National Center for Complementary and Integrative Health or a published review. The three are not blended into a promise.",
    },
    {
      heading: "How are pages revised?",
      slug: "how-pages-are-revised",
      content:
        "A published date marks the first public version. A modified date changes only when the page itself changes in substance. Dates are not refreshed to make an old page look new.\n\nCorrections are described on the [corrections](/corrections/) page. Readers can write to the desk through the [contact](/contact/) page. The [editorial policy](/editorial-policy/) explains source standards and the limited way software may assist drafting.",
    },
  ],
  key_takeaways: [
    "The byline names a staff desk, not a credentialed individual.",
    "Named contributors will be added only with checkable biographies.",
    "Health and spiritual claims stay separated into tradition, report, and evidence.",
  ],
  faq: [
    {
      question: "Is the editorial team a specific teacher?",
      answer:
        "No. The name refers to the publication's staff desk. It should not be read as a lineage title or a clinical qualification.",
    },
    {
      question: "Can I request a correction?",
      answer:
        "Yes. Use the contact address on the contact page and include the URL, the sentence you dispute, and a source if you have one.",
    },
  ],
  source_ids: ["nccih-meditation", "sep-consciousness"],
});

emit({
  id: "hub-authors",
  file: "content/documents/hubs/authors.json",
  kind: "hub",
  title: "Authors and Contributors",
  slug: "authors",
  path: "/authors/",
  topic: "publication",
  category: pub,
  excerpt:
    "Profiles of the people and desks responsible for Universal Consciousness. The first profile is the staff editorial desk.",
  description:
    "See who writes Universal Consciousness and how contributor profiles are limited to checkable experience.",
  alt: alt("authors"),
  intent: ["informational"],
  primary_keyword: "universal consciousness authors",
  related: ["/editorial-policy/", "/about/"],
  children: ["/authors/editorial-team/"],
  quick_answer: {
    question: "Who are the authors?",
    answer:
      "Universal Consciousness currently lists one author profile, the staff editorial desk. Additional profiles will appear only when a real contributor can be described without invented credentials.",
  },
  intro:
    "Author pages tell a reader who stands behind a sentence. This publication starts with a single honest profile rather than a cast of fictional specialists.\n\nThe [editorial team](/authors/editorial-team/) page explains the desk, its limits, and how corrections work.",
  sections: [
    {
      heading: "Why is there only one profile?",
      slug: "why-one-profile",
      content:
        "A spirituality site can look more authoritative by attaching stock portraits and borrowed degrees to articles. That would mislead readers and mislead search engines about who created the work. Universal Consciousness does not do that. A missing biography is more trustworthy than a polished fiction, and this index will stay short until there is someone real to add.\n\nUntil a named writer, historian, or clinician agrees to be identified, articles carry the desk byline. The [editorial policy](/editorial-policy/) describes how that desk uses sources and what it will not invent.",
    },
    {
      heading: "What will a future profile include?",
      slug: "future-profiles",
      content:
        "A future profile can include a biography, areas of study, and links the person actually maintains. It will not include honorary titles, initiation claims, or medical specialties that the publication cannot confirm. The [about](/about/) page explains the publication's scope.",
    },
  ],
  key_takeaways: [
    "One staff profile is live.",
    "Credentials are not invented to strengthen a byline.",
    "Future contributors get their own pages.",
  ],
  faq: [
    {
      question: "Does the desk review every page?",
      answer:
        "Yes. A page is published under the desk byline only after it has been edited for clarity, sourcing, and the publication's claim rules.",
    },
    {
      question: "Where do I send a biography?",
      answer:
        "Use the contact page. A biography is considered only if the person can be identified and the relevant experience can be described accurately.",
    },
  ],
});

emit({
  id: "about",
  file: "content/documents/trust/about.json",
  kind: "trust",
  title: "About Universal Consciousness",
  slug: "about",
  path: "/about/",
  topic: "publication",
  category: pub,
  excerpt:
    "Universal Consciousness is a United States publication explaining meditation, consciousness, yoga philosophy, and related traditions without selling a spiritual service.",
  description:
    "Learn what Universal Consciousness publishes, who it is for, and why it reads as a reference rather than a service site.",
  alt: alt("about"),
  intent: ["informational"],
  primary_keyword: "about universal consciousness",
  about: ["consciousness"],
  mentions: ["meditation", "yoga"],
  related: ["/editorial-policy/", "/authors/editorial-team/", "/topics/consciousness/"],
  quick_answer: {
    question: "What is Universal Consciousness?",
    answer:
      "Universal Consciousness is a modern guide to consciousness, meditation, spirituality, ancient wisdom, and inner transformation, written as an educational publication for readers in the United States.",
  },
  intro:
    "Universal Consciousness explains ideas that readers meet through meditation apps, yoga classes, books, and search. The publication's job is to say what a term has meant, who has used it, and which claims are traditional rather than demonstrated.\n\nIt is not a retreat center, a healing practice, or a catalog of courses. Pages do not ask you to awaken an energy, join a lineage, or buy a program.",
  sections: [
    {
      heading: "Who is the publication for?",
      slug: "who-it-is-for",
      content:
        "The first audience is people in the United States searching for clear explanations of spirituality, meditation, mindfulness, consciousness, yoga philosophy, chakras, kundalini, reiki, Ayurveda, mantras, and related ideas. The writing uses American spelling and assumes a reader who may have no Sanskrit and no temple background.\n\nThat reader still deserves precision. A popular chart of seven rainbow chakras is described as a modern convention. A classical yoga text is described as a text, with a link to a public translation when one is cited. A clinical summary from a government health page is not rewritten as a spiritual promise.",
    },
    {
      heading: "How is the site organized?",
      slug: "how-the-site-is-organized",
      content:
        "Each major subject has a pillar under Topics. Guides collect practical reading. The glossary defines single terms. Question pages answer narrower queries that are not the same as the main explainer. Chakras, meditation techniques, and yoga traditions have their own reference pages so a short definition is not forced to carry an entire history.\n\nStart with [consciousness](/topics/consciousness/) or [meditation](/topics/meditation/) if you want the two widest doors. The [editorial policy](/editorial-policy/) explains the rules underneath the pages.",
    },
    {
      heading: "What does the publication refuse to claim?",
      slug: "what-it-refuses",
      content:
        "It does not claim that a practice cures disease, removes toxins, or repairs a mental health condition. It does not invent student counts, years of experience, or founding dates. It does not present a staff desk as a guru.\n\nWhere a tradition teaches a metaphysical idea, the page can explain that teaching. The explanation is not an endorsement, and it is not evidence. The [disclaimer](/disclaimer/) states the limit in one place. Individual pages repeat it when the subject touches health or safety.",
    },
  ],
  key_takeaways: [
    "The site is a publication, not a spiritual service.",
    "The first readers are in the United States, and the language is American English.",
    "Traditional claims and research findings are kept apart.",
  ],
  faq: [
    {
      question: "Is Universal Consciousness a religious organization?",
      answer:
        "No. It publishes explanatory writing about religious and philosophical traditions. It does not conduct worship, initiations, or pastoral care.",
    },
    {
      question: "Where should I start reading?",
      answer:
        "Choose a topic pillar that matches your question, then follow the related guides and glossary terms linked from that page.",
    },
  ],
  source_ids: ["sep-consciousness", "nccih-meditation"],
});

emit({
  id: "editorial-policy",
  file: "content/documents/trust/editorial-policy.json",
  kind: "trust",
  title: "Universal Consciousness Editorial Policy",
  slug: "editorial-policy",
  path: "/editorial-policy/",
  topic: "publication",
  category: pub,
  excerpt:
    "How Universal Consciousness chooses sources, handles health claims, represents traditions, uses software, and corrects the record.",
  description:
    "Read how Universal Consciousness selects sources, separates belief from evidence, and corrects published pages.",
  alt: alt("editorial policy"),
  intent: ["informational"],
  primary_keyword: "editorial policy",
  related: ["/corrections/", "/sources/", "/disclaimer/", "/authors/editorial-team/"],
  quick_answer: {
    question: "How does Universal Consciousness edit pages?",
    answer:
      "Editors write for a general reader, cite public sources, separate traditional belief from research, and correct factual errors in public. Software may help with organization. It does not replace editorial judgment.",
  },
  intro:
    "Readers should be able to see how a page was made. This policy is the publication's account of authorship, sources, health language, tradition, corrections, and software.\n\nIt applies to every pillar, article, glossary entry, question, and reference page on the site.",
  sections: [
    {
      heading: "Who writes and reviews?",
      slug: "who-writes",
      content:
        "The [editorial team](/authors/editorial-team/) is the staff desk. Pages are published only after a human edit. There is no fictional reviewer with a medical or scholarly title.\n\nA specialist review will be labeled when a qualified person has actually reviewed the page. Until then, the reviewer field stays empty.",
    },
    {
      heading: "How are sources chosen?",
      slug: "how-sources-are-chosen",
      content:
        "Preferred sources are primary texts in public translation, standard reference works, peer-reviewed reviews, university encyclopedias, and government health explainers. The [sources](/sources/) page lists works the publication cites.\n\nA blog post that restates a claim without a source is not treated as evidence. A traditional text is evidence of what a tradition taught. It is not, by itself, evidence that a metaphysical claim is a physical fact.",
    },
    {
      heading: "How are health claims handled?",
      slug: "health-claims",
      content:
        "Meditation, yoga, breathwork, Ayurveda, reiki, and kundalini practices are often discussed beside health hopes. This publication does not convert those hopes into treatment claims.\n\nWhen a government page such as an NCCIH explainer summarizes research, the article may say what that summary says and link it. It will also say what the research does not establish. The [disclaimer](/disclaimer/) applies across the site, and sensitive pages repeat a shorter note.",
    },
    {
      heading: "How are traditions represented?",
      slug: "traditions",
      content:
        "Indian and Japanese traditions are not treated as a single ancient system that agrees with every modern workshop. Pages name the stream they are describing: a classical yoga text, a Vedanta school, a tantric subtle-body map, a twentieth-century Japanese practice, or a contemporary American class.\n\nDisagreement inside a tradition is part of the explanation. If a popular American presentation differs from earlier sources, the page says so.",
    },
    {
      heading: "How is software used?",
      slug: "software",
      content:
        "Editors may use software to outline, check consistency, suggest internal links, or draft a structure. Published prose is accepted only when an editor judges it accurate, sourced, and useful. Generating many near-duplicate pages is against this policy.\n\nSoftware is not listed as an author.",
    },
    {
      heading: "How are corrections and sponsorships handled?",
      slug: "corrections-and-sponsorships",
      content:
        "Factual errors are corrected on the page and noted through the [corrections](/corrections/) process. The modified date changes when the correction is substantive.\n\nThe publication does not currently sell courses, supplements, or retreats. If advertising, affiliates, or sponsored essays are added later, they will be labeled on the page and described in an updated policy. Unlabeled sponsorship is not allowed.",
    },
  ],
  key_takeaways: [
    "Humans edit every published page.",
    "Sources distinguish texts, reference works, and research summaries.",
    "Health language stays inside what the cited sources support.",
    "Software can assist drafting and cannot replace the desk.",
  ],
  faq: [
    {
      question: "Do you use artificial intelligence?",
      answer:
        "Software may help with outlines, consistency, and structure. A person on the editorial desk decides what is published and is responsible for it.",
    },
    {
      question: "Will you add a medical reviewer?",
      answer:
        "Only if a qualified person actually reviews the page. The publication will not invent that credit.",
    },
  ],
  source_ids: ["nccih-meditation", "sep-epistemology-india"],
});

emit({
  id: "corrections",
  file: "content/documents/trust/corrections.json",
  kind: "trust",
  title: "Corrections at Universal Consciousness",
  slug: "corrections",
  path: "/corrections/",
  topic: "publication",
  category: pub,
  excerpt:
    "How to report an error in Universal Consciousness, and how the publication records a substantive fix.",
  description:
    "See how Universal Consciousness corrects factual errors and how readers can send a correction.",
  alt: alt("corrections"),
  intent: ["informational"],
  primary_keyword: "corrections policy",
  related: ["/editorial-policy/", "/contact/"],
  quick_answer: {
    question: "How do corrections work?",
    answer:
      "Email the page URL, the sentence you believe is wrong, and a source if you have one. If the desk confirms an error, it updates the page and the modified date.",
  },
  intro:
    "Reference writing fails when an error stays invisible. Universal Consciousness corrects pages in public and keeps the correction attached to the page that changed.\n\nThis page explains how to send a report and what a reader should expect afterward. There is no separate list of corrections yet, because the publication is at its first release.",
  sections: [
    {
      heading: "What should a report include?",
      slug: "what-to-include",
      content:
        "Write to the address on the [contact](/contact/) page. Include the full URL, the passage, and why you think it is wrong. A link to a primary text, a university reference, or a government health page is the most useful attachment.\n\nA disagreement with a tradition's theology is not, by itself, a correction. The page's job is often to describe a view it does not share. A correction is for a false citation, a mixed-up date, a misnamed school, or a health claim that outruns its source.",
    },
    {
      heading: "What happens after a report?",
      slug: "what-happens-next",
      content:
        "The desk reads the note and checks the cited source against the [editorial policy](/editorial-policy/). If the page is wrong, the sentence is rewritten. The modified date changes. A short note can be added on this page when the error would have misled a reader about a health or historical claim.\n\nTypos may be fixed without a public log. Invented updates, meaning date changes with no real edit, are not part of the process. The page you are reading will stay short until there is a real correction to record.",
    },
  ],
  key_takeaways: [
    "Send the URL, the sentence, and a source.",
    "Confirmed factual errors are fixed on the page.",
    "Modified dates track real changes only.",
  ],
  faq: [
    {
      question: "Can I correct a definition I simply dislike?",
      answer:
        "You can write. The desk will change the page when the criticism shows an inaccuracy, not when it asks the publication to take sides in a doctrine.",
    },
    {
      question: "Are corrections deleted from the page history?",
      answer:
        "The live page shows the corrected text. Substantive health or history fixes can also be noted on this page.",
    },
  ],
});

emit({
  id: "contact",
  file: "content/documents/trust/contact.json",
  kind: "trust",
  title: "Contact the Universal Consciousness Editors",
  slug: "contact",
  path: "/contact/",
  topic: "publication",
  category: pub,
  excerpt:
    "Write to the Universal Consciousness editors about corrections, permissions, and general questions. No phone number or street address is listed.",
  description:
    "Contact the Universal Consciousness editors by email for corrections, permissions, and publication questions.",
  alt: alt("contact"),
  intent: ["informational"],
  primary_keyword: "contact universal consciousness",
  related: ["/corrections/", "/editorial-policy/"],
  quick_answer: {
    question: "How do I contact the publication?",
    answer:
      "Email editors@universalconsciousness.com. The publication does not list a phone number, a studio address, or a counseling line.",
  },
  intro:
    "The editors read mail about factual errors, reuse of pages, and questions about how the publication works. Mail is not a channel for spiritual direction or medical advice.\n\nUse [editors@universalconsciousness.com](mailto:editors@universalconsciousness.com). If you are reporting an error, follow the notes on the [corrections](/corrections/) page so the message can be checked.",
  sections: [
    {
      heading: "What can I write about?",
      slug: "what-can-i-write",
      content:
        "Appropriate messages include a correction with a source, a question about quoting a page, and a note about a broken citation. The [editorial policy](/editorial-policy/) already answers most questions about how pages are made.\n\nThe desk does not provide initiations, healing sessions, or personalized practice prescriptions. If you are in immediate danger or need clinical care, contact local emergency services or a licensed professional. This inbox is not monitored as a crisis line. Write during ordinary hours and expect a reply only when the question is about a page, a citation, or a correction. A spiritual emergency still belongs with local help, not with this mailbox. Please include the page address in the subject line so the note can be matched to the sentence you mean. Thank you for the care.",
    },
    {
      heading: "What will the reply include?",
      slug: "what-a-reply-includes",
      content:
        "If a correction is accepted, the reply can point to the updated page. If a request is outside the publication's role, the reply will say so briefly. Response time is not guaranteed.\n\nPlease do not send sensitive medical records or documents you would not want stored in an ordinary email inbox.",
    },
  ],
  key_takeaways: [
    "Email is the only contact method listed.",
    "Corrections should include the URL and a source.",
    "The inbox is not a clinic, hotline, or teaching relationship.",
  ],
  faq: [
    {
      question: "Do you have a street address?",
      answer:
        "No public street address, phone number, or event venue is listed, because this release of the publication does not operate a local studio.",
    },
    {
      question: "Can I pitch a guest essay?",
      answer:
        "You may write. A pitch is considered only if the writer can be identified and the piece meets the editorial policy, including the rule against invented credentials.",
    },
  ],
});

emit({
  id: "privacy",
  file: "content/documents/trust/privacy.json",
  kind: "trust",
  title: "Universal Consciousness Privacy Policy",
  slug: "privacy",
  path: "/privacy/",
  topic: "publication",
  category: pub,
  excerpt:
    "What Universal Consciousness does with information you send, and what the site does not collect in this release.",
  description:
    "Read what information Universal Consciousness collects, including email to the editors and the newsletter.",
  alt: alt("privacy"),
  intent: ["informational"],
  primary_keyword: "privacy policy",
  related: ["/contact/", "/terms/"],
  quick_answer: {
    question: "What personal information does the site collect?",
    answer:
      "This release does not run third-party analytics. If you email the editors, they receive whatever you put in that message. Newsletter signup is off until a delivery service is connected.",
  },
  intro:
    "This policy describes the first public release of Universal Consciousness. It is written in plain language for readers in the United States. It is not a substitute for legal advice about your own obligations.\n\nThe publication's purpose is to show articles. It is not built to assemble a marketing profile of visitors.",
  sections: [
    {
      heading: "What does a normal visit involve?",
      slug: "ordinary-visits",
      content:
        "When your browser requests a page, the host that serves the site may keep ordinary server logs, such as an IP address, a time, and the address of the page. Those logs are used to operate and secure the site. This release does not add a third-party analytics tag, an advertising pixel, or a social tracker.\n\nIf that changes, this page will change first, and the [editorial policy](/editorial-policy/) will describe sponsored measurement if any exists.",
    },
    {
      heading: "What about email and the newsletter?",
      slug: "email-and-newsletter",
      content:
        "If you write to the address on the [contact](/contact/) page, the message is stored in that mailbox and may be kept long enough to handle a correction or a permissions question. Do not send information you consider highly sensitive.\n\nThe newsletter form does not accept addresses unless a delivery webhook has been configured by the publisher. Until then, the form says subscriptions are not open, and no list is built. If a list opens later, this policy will name the provider and explain how to leave.",
    },
    {
      heading: "How can I ask about my information?",
      slug: "asking-about-information",
      content:
        "Write to the editors and say what you want to know, correct, or delete. The publication will respond to requests it can actually fulfill. Server logs held by a hosting company may be outside the publication's direct control and may be kept for security for a limited period.\n\nThe site is intended for a general audience. It is not directed at children, and it does not ask children to create accounts.",
    },
  ],
  key_takeaways: [
    "No third-party analytics tag is installed in this release.",
    "Email you send is stored as email.",
    "The newsletter does not collect addresses until a provider is connected.",
  ],
  faq: [
    {
      question: "Do you sell personal information?",
      answer:
        "No. The publication does not sell personal information, and this release does not run advertising profiles.",
    },
    {
      question: "Do you use cookies for ads?",
      answer:
        "Advertising cookies are not part of this release. If essential cookies are later required to run a form, the policy will say so.",
    },
  ],
});

emit({
  id: "terms",
  file: "content/documents/trust/terms.json",
  kind: "trust",
  title: "Universal Consciousness Terms of Use",
  slug: "terms",
  path: "/terms/",
  topic: "publication",
  category: pub,
  excerpt:
    "The terms for reading Universal Consciousness, including the limits on advice, reuse, and liability.",
  description:
    "Read the terms for using Universal Consciousness, including limits on advice and how content may be reused.",
  alt: alt("terms"),
  intent: ["informational"],
  primary_keyword: "terms of use",
  related: ["/disclaimer/", "/privacy/", "/editorial-policy/"],
  quick_answer: {
    question: "What are the terms of use?",
    answer:
      "You may read the publication for personal reference. The pages are educational, not professional advice, and reuse beyond ordinary quotation requires permission from the editors.",
  },
  intro:
    "These terms govern use of the Universal Consciousness website. By reading the site you agree to them. If you do not agree, do not use the site.\n\nThe publication is based in its presentation for readers in the United States. Questions about these terms can be sent through the [contact](/contact/) page.",
  sections: [
    {
      heading: "What is the site for?",
      slug: "purpose",
      content:
        "The site publishes educational writing about consciousness, meditation, and related traditions. Nothing on the site is medical, psychological, legal, or financial advice, and nothing creates a teacher-student or clinician-patient relationship. Read the [disclaimer](/disclaimer/) with these terms.\n\nYou are responsible for how you use the information, including any decision to begin or stop a practice.",
    },
    {
      heading: "Who owns the writing?",
      slug: "ownership",
      content:
        "Original text and original illustrations on this site are owned by the publication unless a page says otherwise. You may link to pages and quote short passages with credit and a link. You may not copy whole articles, republish the glossary, or train a product on the collection without written permission.\n\nTrademarks of other organizations, including names of branded meditation methods, remain their property. Mention of a name is description, not affiliation.",
    },
    {
      heading: "What is limited?",
      slug: "limits",
      content:
        "The publication provides the site as available. It does not warrant that every historical interpretation is the only defensible one, or that external sites linked from [sources](/sources/) will remain unchanged.\n\nTo the extent the law allows, the publication is not liable for losses arising from use of the site or from a practice you choose after reading it. Some jurisdictions do not allow certain limits, and those laws still apply.",
    },
  ],
  key_takeaways: [
    "The site is for personal educational reading.",
    "Short quotation with credit is welcome. Wholesale copying is not.",
    "The pages do not create a professional relationship.",
  ],
  faq: [
    {
      question: "Can I quote a paragraph?",
      answer:
        "Yes, with credit and a link to the page. For longer reuse, write to the editors.",
    },
    {
      question: "Do these terms change?",
      answer:
        "They can be updated on this page. The date modified at the top of the page is the date of the current version.",
    },
  ],
});

emit({
  id: "disclaimer",
  file: "content/documents/trust/disclaimer.json",
  kind: "trust",
  title: "Universal Consciousness Disclaimer",
  slug: "disclaimer",
  path: "/disclaimer/",
  topic: "publication",
  category: pub,
  excerpt:
    "Universal Consciousness explains traditions and summarizes public research. It does not provide medical, psychological, or religious advice.",
  description:
    "Read the Universal Consciousness disclaimer on health claims, spiritual practices, and the limits of the articles.",
  alt: alt("disclaimer"),
  intent: ["informational"],
  primary_keyword: "disclaimer",
  related: ["/editorial-policy/", "/terms/", "/topics/meditation/"],
  disclaimer: true,
  quick_answer: {
    question: "What does the disclaimer say?",
    answer:
      "Articles are educational. They are not medical, psychological, or religious advice, and they are not a substitute for care from a qualified professional.",
  },
  intro:
    "Universal Consciousness describes ideas and practices that people sometimes pursue for health, meaning, or both. Description is not a recommendation, and it is not a finding that a practice works.\n\nThis disclaimer applies to the whole site. Pages about kundalini, chakras, reiki, Ayurveda, breathwork, and disputed health claims repeat a shorter version beside the article.",
  sections: [
    {
      heading: "What is not advice?",
      slug: "not-advice",
      content:
        "Nothing here diagnoses, treats, cures, or prevents any disease or mental health condition. Breathing practices, fasting traditions, herbal preparations, and intense meditation can be inappropriate for some people. Talk with a qualified clinician before changing care, medication, or a treatment plan.\n\nIf you are in crisis, contact local emergency services. The publication has no clinicians on call. The [contact](/contact/) address is not a crisis service.",
    },
    {
      heading: "How should spiritual claims be read?",
      slug: "spiritual-claims",
      content:
        "A sentence about prana, kundalini, or a chakra reports how a tradition or a modern teacher talks. It does not establish that an invisible anatomy has been measured. Practitioner stories are identified as reports of experience. They are not generalized into outcomes for every reader.\n\nThe [editorial policy](/editorial-policy/) explains how those distinctions are edited. The [terms](/terms/) explain the limits on liability.",
    },
    {
      heading: "What about external sources?",
      slug: "external-sources",
      content:
        "Links to universities, government agencies, and public-domain texts are provided so you can read further. Those organizations do not operate this publication, and a link is not an endorsement of every page on their sites or of every page on this one.\n\nResearch summaries go out of date. The modified date on an article tells you when this publication last revised it, not when every underlying study was published.",
    },
  ],
  key_takeaways: [
    "The site does not give medical or psychological advice.",
    "Traditional metaphysics are explained, not verified.",
    "Crisis care belongs with local emergency services.",
  ],
  faq: [
    {
      question: "Can an article tell me whether to practice?",
      answer:
        "No. An article can describe how a practice is taught and what sources say. The decision is yours, ideally with qualified help when health is involved.",
    },
    {
      question: "Does a cited study mean the practice is proven?",
      answer:
        "No. A citation shows that a particular paper or explainer exists. The article should also say what that source does not establish.",
    },
  ],
});

emit({
  id: "sources-index",
  file: "content/documents/trust/sources.json",
  kind: "trust",
  title: "Sources and References",
  slug: "sources",
  path: "/sources/",
  topic: "publication",
  category: pub,
  excerpt:
    "How Universal Consciousness cites texts, reference works, and research summaries, followed by the works used across the site.",
  description:
    "See how Universal Consciousness chooses sources and browse the works cited across the publication.",
  alt: alt("sources"),
  intent: ["informational"],
  primary_keyword: "sources and references",
  related: ["/editorial-policy/", "/disclaimer/"],
  quick_answer: {
    question: "What counts as a source here?",
    answer:
      "The publication cites primary texts, academic reference articles, government health explainers, and peer-reviewed reviews. A source documents a claim. It does not automatically prove a spiritual teaching.",
  },
  intro:
    "Every substantive page ends with the works it relied on. This page explains the categories and gathers those works in one list so a reader can see the shelf the publication is using.\n\nThe list is a bibliography, not a ranking of spiritual authority. A government page about reiki and a classical yoga text answer different questions. Both can be cited, for different sentences.",
  sections: [
    {
      heading: "Which categories are used?",
      slug: "categories",
      content:
        "Primary texts include public translations of the Yoga Sutras, the Bhagavad Gita, the Upanishads, and the Hatha Yoga Pradipika. Academic references include the Stanford Encyclopedia of Philosophy and the Internet Encyclopedia of Philosophy. Government and professional explainers include pages from the National Center for Complementary and Integrative Health and the American Psychological Association. Research papers are cited through stable records such as PubMed.\n\nThe [editorial policy](/editorial-policy/) says how those categories are weighed. The [disclaimer](/disclaimer/) says what a citation cannot do.",
    },
    {
      heading: "What is missing on purpose?",
      slug: "what-is-missing",
      content:
        "The shelf does not include anonymous miracle testimonials, unsourced healing statistics, or commercial pages that exist to enroll a student. Those materials may describe a living scene. They are not used as proof of a mechanism.\n\nIf a better public source replaces a weaker one, the article and this list are updated together. The bibliography below is built from the pages that are actually published, so a source appears because some article relied on it. If a work is absent, it has not been cited yet. That absence is not a judgment that the work is worthless.",
    },
  ],
  key_takeaways: [
    "Citations are grouped by the kind of claim they support.",
    "A classical text and a clinical review are not interchangeable.",
    "The list below is generated from pages that are actually published.",
  ],
  faq: [
    {
      question: "Why do some links leave this site?",
      answer:
        "So you can read the work itself. Universal Consciousness does not control those sites.",
    },
    {
      question: "Can I suggest a source?",
      answer:
        "Yes, through the contact page. Name the claim it would support and why it is more reliable than the current citation.",
    },
  ],
  source_ids: ["sep-epistemology-india", "nccih-meditation", "sacred-yoga-sutras"],
});

const hubs = [
  {
    id: "hub-glossary",
    slug: "glossary",
    path: "/glossary/",
    title: "Glossary of Spiritual and Yogic Terms",
    description:
      "Definitions of Atman, Brahman, prana, kundalini, and other terms, each linked to a longer article.",
    excerpt:
      "Short reference entries for terms used across Universal Consciousness, written to be precise without pretending that one lineage owns the only meaning.",
    keyword: "spiritual glossary",
    children: [
      "/glossary/atman/",
      "/glossary/brahman/",
      "/glossary/chakra/",
      "/glossary/dharma/",
      "/glossary/karma/",
      "/glossary/kundalini/",
      "/glossary/mantra/",
      "/glossary/moksha/",
      "/glossary/mudra/",
      "/glossary/nadi/",
      "/glossary/prana/",
      "/glossary/samadhi/",
      "/glossary/samsara/",
      "/glossary/sattva/",
      "/glossary/shakti/",
      "/glossary/shiva/",
      "/glossary/tantra/",
      "/glossary/vedanta/",
      "/glossary/yoga/",
      "/glossary/awareness/",
      "/glossary/consciousness/",
      "/glossary/non-duality/",
      "/glossary/meditation/",
      "/glossary/mindfulness/",
    ],
    intro:
      "This glossary defines terms a reader meets in yoga classes, books, and search results. Each entry gives a working meaning, a note on origin, and the disagreements that a one-line definition would hide.\n\nUse it beside the longer [topic pillars](/topics/consciousness/). A glossary page is a reference. It is not the whole argument.",
  },
  {
    id: "hub-questions",
    slug: "questions",
    path: "/questions/",
    title: "Questions About Practice and Tradition",
    description:
      "Short answers on meditation, kundalini, chakras, mantras, and related questions that are narrower than the main guides.",
    excerpt:
      "Direct answers to specific questions, each written so the short answer can stand alone and the rest of the page shows its limits.",
    keyword: "spirituality questions",
    children: [
      "/questions/how-long-should-you-meditate/",
      "/questions/what-happens-during-meditation/",
      "/questions/why-does-meditation-feel-difficult/",
      "/questions/how-does-meditation-work/",
      "/questions/can-beginners-meditate/",
      "/questions/is-there-a-best-time-to-meditate/",
      "/questions/what-do-practitioners-report-about-kundalini/",
      "/questions/how-is-kundalini-yoga-structured/",
      "/questions/how-are-the-seven-chakras-usually-listed/",
      "/questions/what-is-the-difference-between-pranayama-and-meditation/",
      "/questions/how-do-vedanta-teachers-describe-the-self/",
      "/questions/what-does-it-mean-to-study-a-spiritual-text/",
      "/questions/are-mantras-the-same-as-affirmations/",
      "/questions/what-should-you-know-before-trying-reiki/",
      "/questions/what-is-a-meditation-retreat/",
      "/questions/how-do-traditions-describe-prana/",
    ],
    intro:
      "These pages answer one question each. They exist for readers who arrive with a specific query, and they point back to the pillar or explainer that carries the wider context.\n\nThey are not a second copy of [what meditation is](/articles/what-is-meditation/). If a question is really the main definition, the explainer is the page that should rank for it.",
  },
  {
    id: "hub-chakras",
    slug: "chakras",
    path: "/chakras/",
    title: "Chakra Reference Pages",
    description:
      "Reference pages for seven commonly listed chakras, with Sanskrit names and a warning about modern charts.",
    excerpt:
      "An index of chakra pages. Each one explains a center as it appears in modern charts and says where that chart is historically thin.",
    keyword: "seven chakras",
    disclaimer: true,
    topic: "chakras",
    category: category("Chakras", "chakras"),
    children: [
      "/chakras/root-chakra/",
      "/chakras/sacral-chakra/",
      "/chakras/solar-plexus-chakra/",
      "/chakras/heart-chakra/",
      "/chakras/throat-chakra/",
      "/chakras/third-eye-chakra/",
      "/chakras/crown-chakra/",
    ],
    intro:
      "Many English-language charts list seven chakras in a rainbow from the base of the spine to the crown. These pages explain that presentation, one center at a time, without treating the chart as an anatomical finding.\n\nRead the [chakras topic](/topics/chakras/) for the history, including why scholars treat the popular system as a modern synthesis. The [disclaimer](/disclaimer/) applies to every page in this set.",
  },
  {
    id: "hub-meditation",
    slug: "meditation-practices",
    path: "/meditation/",
    title: "Meditation Practice Guides",
    description:
      "Guides to mindfulness, mantra, breath awareness, the body scan, loving-kindness, and Transcendental Meditation.",
    excerpt:
      "Technique pages for common meditation methods, written as descriptions of practice rather than as treatment protocols.",
    keyword: "meditation practices",
    topic: "meditation",
    category: category("Meditation", "meditation"),
    children: [
      "/meditation/mindfulness/",
      "/meditation/mantra/",
      "/meditation/breath-awareness/",
      "/meditation/body-scan/",
      "/meditation/loving-kindness/",
      "/meditation/transcendental/",
    ],
    intro:
      "Meditation is a family of methods, not one exercise with a single script. These pages describe methods readers in the United States are likely to meet by name.\n\nFor the wider history, use the [meditation topic](/topics/meditation/). For a first practical overview, use [meditation for beginners](/articles/meditation-for-beginners/). None of these pages is a medical protocol.",
  },
  {
    id: "hub-yoga",
    slug: "yoga-traditions",
    path: "/yoga/",
    title: "Yoga Traditions and Styles",
    description:
      "Pages on Hatha yoga, Kundalini Yoga, Yin yoga, and yoga philosophy, with their sources kept distinct.",
    excerpt:
      "An index of yoga traditions and styles, separating classical philosophy, medieval hatha sources, and modern class formats.",
    keyword: "yoga traditions",
    topic: "yoga",
    category: category("Yoga", "yoga"),
    children: [
      "/yoga/hatha-yoga/",
      "/yoga/kundalini-yoga/",
      "/yoga/yin-yoga/",
      "/yoga/yoga-philosophy/",
    ],
    intro:
      "Yoga in an American studio can mean a postural class, a philosophical text, or a branded method. These pages keep those meanings apart.\n\nThe [yoga topic](/topics/yoga/) is the overview. [Yoga philosophy](/articles/what-is-yoga-philosophy/) follows the textual thread. Style pages say what a class is commonly like and which claims are newer than they sound.",
  },
];

for (const hub of hubs) {
  emit({
    id: hub.id,
    file: `content/documents/hubs/${hub.slug}.json`,
    kind: "hub",
    title: hub.title,
    slug: hub.slug,
    path: hub.path,
    topic: hub.topic ?? "publication",
    category: hub.category ?? pub,
    excerpt: hub.excerpt,
    description: hub.description,
    alt: alt(hub.title),
    intent: ["informational"],
    primary_keyword: hub.keyword,
    disclaimer: hub.disclaimer ?? false,
    related: ["/about/", "/editorial-policy/"],
    children: hub.children,
    quick_answer: {
      question: `What is in ${hub.title}?`,
      answer: hub.excerpt,
    },
    intro: hub.intro,
    sections: [
      {
        heading: "How should these pages be read?",
        slug: "how-to-read",
        content:
          "Start with the short answer on a page, then read the sections that match your question. Follow the related links when you need the longer argument. A collection page is a map. The individual pages are the reference.\n\nIf a sentence touches health or a contested spiritual mechanism, read it beside the disclaimer. The [editorial policy](/editorial-policy/) is the rule for how those sentences are written.",
      },
      {
        heading: "What is not collected here?",
        slug: "what-is-absent",
        content:
          "This collection does not include city-by-city studio directories, miracle rankings, or pages that exist only to repeat a keyword. If a subject does not yet have a page, it is because a distinct page was not ready, not because every search phrase deserves a URL. A missing page is preferable to a thin one.\n\nSuggestions can be sent through the [contact](/contact/) page.",
      },
    ],
    key_takeaways: [
      "Each linked page should be able to stand as its own explanation.",
      "The collection does not add doorway pages or repeated city guides.",
      "Health-related claims stay tied to the disclaimer and the cited sources.",
    ],
    faq: [
      {
        question: "Are these pages medical guidance?",
        answer:
          "No. They are educational descriptions. Decisions about health belong with a qualified professional.",
      },
      {
        question: "Where is the longer overview?",
        answer:
          "Use the matching topic pillar linked in the introduction. This page is the index of narrower references.",
      },
    ],
  });
}

console.log("institution pages written");
