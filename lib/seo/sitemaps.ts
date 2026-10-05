import { getDocuments } from "@/lib/content/load";
import { site } from "@/lib/site";

export const SITEMAP_GROUPS = [
  "static",
  "articles",
  "topics",
  "glossary",
  "questions",
  "practices",
  "authors",
] as const;

export type SitemapGroup = (typeof SITEMAP_GROUPS)[number];

const STATIC_PATHS = new Set([
  "/about/",
  "/editorial-policy/",
  "/corrections/",
  "/contact/",
  "/privacy/",
  "/terms/",
  "/disclaimer/",
  "/sources/",
]);

export function isSitemapGroup(value: string): value is SitemapGroup {
  return (SITEMAP_GROUPS as readonly string[]).includes(value);
}

export async function sitemapEntries(id: SitemapGroup) {
  const documents = (await getDocuments()).filter((doc) => {
    if (id === "articles") return doc.path.startsWith("/articles/");
    if (id === "topics") {
      return doc.path.startsWith("/topics/") || doc.path.startsWith("/guides/");
    }
    if (id === "glossary") return doc.path.startsWith("/glossary/");
    if (id === "questions") return doc.path.startsWith("/questions/");
    if (id === "practices") {
      return (
        doc.path.startsWith("/chakras/") ||
        doc.path.startsWith("/meditation/") ||
        doc.path.startsWith("/yoga/")
      );
    }
    if (id === "authors") return doc.path.startsWith("/authors/");
    return STATIC_PATHS.has(doc.path);
  });

  const entries = documents.map((doc) => ({
    url: `${site.url}${doc.path}`,
    lastModified: doc.publication.date_modified,
  }));

  if (id === "static") {
    entries.unshift({
      url: `${site.url}/`,
      lastModified: "2026-10-04T10:00:00-04:00",
    });
  }

  return entries;
}

export async function urlsetXml(id: SitemapGroup) {
  const urls = (await sitemapEntries(id))
    .map(
      (entry) =>
        `  <url><loc>${entry.url}</loc><lastmod>${entry.lastModified}</lastmod></url>`,
    )
    .join("\n");
  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>
`;
}

export function sitemapIndexXml() {
  const body = SITEMAP_GROUPS.map(
    (id) => `  <sitemap><loc>${site.url}/sitemap/${id}.xml</loc></sitemap>`,
  ).join("\n");
  return `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${body}
</sitemapindex>
`;
}
