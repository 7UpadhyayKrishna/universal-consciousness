import { sitemapIndexXml } from "@/lib/seo/sitemaps";

export function GET() {
  return new Response(sitemapIndexXml(), {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
    },
  });
}
