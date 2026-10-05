import type { Metadata } from "next";
import { DocumentPage, metadataFor } from "@/components/document-page";

export async function generateMetadata(): Promise<Metadata> {
  return metadataFor("/editorial-policy/");
}

export default function Page() {
  return <DocumentPage path="/editorial-policy/" />;
}
