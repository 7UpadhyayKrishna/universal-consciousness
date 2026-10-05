import { isSitemapGroup, urlsetXml } from "@/lib/seo/sitemaps";

export async function GET(
  _request: Request,
  context: { params: Promise<{ id: string }> },
) {
  const { id } = await context.params;
  const group = id.replace(/\.xml$/, "");
  if (!isSitemapGroup(group)) {
    return new Response("Not found", { status: 404 });
  }
  return new Response(await urlsetXml(group), {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
    },
  });
}
