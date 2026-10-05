import type { Metadata } from "next";
import { DocumentPage, metadataFor, staticParamsFor } from "@/components/document-page";

export const dynamicParams = false;

export async function generateStaticParams() {
  return staticParamsFor("/topics/", "topic");
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ topic: string }>;
}): Promise<Metadata> {
  const { topic } = await params;
  return metadataFor(`/topics/${topic}/`);
}

export default async function Page({
  params,
}: {
  params: Promise<{ topic: string }>;
}) {
  const { topic } = await params;
  return <DocumentPage path={`/topics/${topic}/`} />;
}
