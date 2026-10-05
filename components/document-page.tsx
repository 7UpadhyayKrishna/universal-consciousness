import { notFound } from "next/navigation";
import { DocumentView } from "@/components/document-view";
import { JsonLd } from "@/components/json-ld";
import {
  childDocuments,
  clusterDocuments,
  getByPath,
  getDocuments,
} from "@/lib/content/load";
import type { Source } from "@/lib/content/schema";
import { breadcrumbs } from "@/lib/seo/breadcrumbs";
import { documentJsonLd } from "@/lib/seo/jsonld";
import { buildMetadata } from "@/lib/seo/metadata";

export async function metadataFor(path: string) {
  const doc = await getByPath(path);
  if (!doc) return {};
  return buildMetadata(doc);
}

export async function DocumentPage({
  path,
  bibliography = [],
}: {
  path: string;
  bibliography?: Source[];
}) {
  const doc = await getByPath(path);
  if (!doc) notFound();
  const children = await childDocuments(doc);
  const supporting =
    doc.kind === "pillar" ? await clusterDocuments(doc) : children;
  const listed = children.length > 0 ? children : supporting;
  return (
    <>
      <JsonLd data={documentJsonLd(doc, breadcrumbs(doc), listed)} />
      <DocumentView
        doc={doc}
        supporting={supporting}
        bibliography={bibliography}
      />
    </>
  );
}

export async function staticParamsFor(
  prefix: string,
  key: string,
): Promise<Record<string, string>[]> {
  const documents = await getDocuments();
  return documents
    .filter((doc) => doc.path.startsWith(prefix) && doc.path !== prefix)
    .map((doc) => ({ [key]: doc.slug }));
}
