export const site = {
  name: "Universal Consciousness",
  shortName: "Universal Consciousness",
  url: (
    process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.universalconsciousness.com"
  ).replace(/\/$/, ""),
  description:
    "Explore consciousness, meditation, spirituality, yoga, chakras, ancient wisdom, and practical guides for developing greater awareness and inner clarity.",
  positioning:
    "Universal Consciousness is a modern guide to consciousness, meditation, spirituality, ancient wisdom, and inner transformation.",
  locale: "en-US",
  ogLocale: "en_US",
  language: "en-US",
  country: "US",
  contactEmail: "editors@universalconsciousness.com",
  logo: "/images/logo.svg",
  defaultDisclaimer:
    "Universal Consciousness is an educational publication. This page describes traditional ideas and, where relevant, publicly available research. It is not medical, psychological, or religious advice, and it is not a substitute for care from a qualified professional.",
  homepage: {
    title:
      "Universal Consciousness | Spirituality, Meditation & Inner Awareness",
    h1: "Universal Consciousness: Exploring Spirituality, Meditation & Inner Awareness",
    featuredGuides: [
      "meditation-for-beginners",
      "mindfulness-for-beginners",
      "understanding-chakras",
      "starting-a-spiritual-practice",
    ],
    latest: [
      "what-is-consciousness",
      "what-is-meditation",
      "what-is-kundalini",
      "what-are-chakras",
      "what-is-vedanta",
      "what-is-ayurveda",
    ],
    questions: [
      "how-long-should-you-meditate",
      "what-happens-during-meditation",
      "why-does-meditation-feel-difficult",
      "what-should-you-know-before-trying-reiki",
    ],
  },
} as const;

export function absoluteUrl(path: string): string {
  if (path.startsWith("http://") || path.startsWith("https://")) return path;
  return `${site.url}${path.startsWith("/") ? path : `/${path}`}`;
}
