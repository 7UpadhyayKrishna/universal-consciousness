import type { Metadata } from "next";
import { DocumentPage, metadataFor } from "@/components/document-page";
import { getDocuments } from "@/lib/content/load";
import type { Source } from "@/lib/content/schema";

export async function generateMetadata(): Promise<Metadata> {
  return metadataFor("/sources/");
}

export default async function Page() {
  const bibliography = new Map<string, Source>();
  for (const doc of await getDocuments()) {
    for (const source of doc.sources) bibliography.set(source.id, source);
  }
  return (
    <DocumentPage
      path="/sources/"
      bibliography={[...bibliography.values()].sort((a, b) => a.title.localeCompare(b.title, "en-US"))}
    />
  );
}
