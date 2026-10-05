import type { Metadata } from "next";
import { DocumentPage, metadataFor, staticParamsFor } from "@/components/document-page";

export const dynamicParams = false;

export async function generateStaticParams() {
  return staticParamsFor("/articles/", "slug");
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  return metadataFor(`/articles/${slug}/`);
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  return <DocumentPage path={`/articles/${slug}/`} />;
}
