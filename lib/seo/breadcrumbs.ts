import type { Document } from "@/lib/content/schema";

export type Crumb = { name: string; path: string };

const SECTION_LABELS: Record<string, { name: string; path: string }> = {
  "/glossary/": { name: "Glossary", path: "/glossary/" },
  "/questions/": { name: "Questions", path: "/questions/" },
  "/chakras/": { name: "Chakras", path: "/chakras/" },
  "/meditation/": { name: "Meditation", path: "/meditation/" },
  "/yoga/": { name: "Yoga", path: "/yoga/" },
  "/authors/": { name: "Authors", path: "/authors/" },
  "/articles/": { name: "Articles", path: "/" },
  "/guides/": { name: "Guides", path: "/" },
};

export function breadcrumbs(doc: Document): Crumb[] {
  const home: Crumb = { name: "Home", path: "/" };
  if (doc.path === "/glossary/") return [home, { name: "Glossary", path: doc.path }];
  if (doc.path === "/questions/") return [home, { name: "Questions", path: doc.path }];
  if (doc.path === "/chakras/") return [home, { name: "Chakras", path: doc.path }];
  if (doc.path === "/meditation/") return [home, { name: "Meditation", path: doc.path }];
  if (doc.path === "/yoga/") return [home, { name: "Yoga", path: doc.path }];
  if (doc.path === "/authors/") return [home, { name: "Authors", path: doc.path }];

  if (doc.kind === "pillar") {
    return [home, { name: doc.category.name, path: doc.path }];
  }

  if (doc.path.startsWith("/articles/") || doc.path.startsWith("/guides/")) {
    return [
      home,
      { name: doc.category.name, path: `/topics/${doc.topic}/` },
      { name: doc.h1, path: doc.path },
    ];
  }

  const section = Object.keys(SECTION_LABELS).find((prefix) =>
    doc.path.startsWith(prefix),
  );
  if (section && doc.path !== SECTION_LABELS[section].path) {
    return [home, SECTION_LABELS[section], { name: doc.h1, path: doc.path }];
  }

  return [home, { name: doc.h1, path: doc.path }];
}
