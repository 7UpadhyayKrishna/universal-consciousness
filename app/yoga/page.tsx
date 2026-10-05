import type { Metadata } from "next";
import { DocumentPage, metadataFor } from "@/components/document-page";

export async function generateMetadata(): Promise<Metadata> {
  return metadataFor("/yoga/");
}

export default function Page() {
  return <DocumentPage path="/yoga/" />;
}
