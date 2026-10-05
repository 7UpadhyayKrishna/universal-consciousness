import type { Metadata } from "next";
import type { Document } from "@/lib/content/schema";
import { photoFor } from "@/lib/photos";
import { site } from "@/lib/site";

const ARTICLE_KINDS = new Set<Document["kind"]>([
  "explainer",
  "guide",
  "comparison",
  "misconception",
  "question",
  "chakra",
  "meditation",
  "yoga",
  "glossary",
  "pillar",
]);

export function buildMetadata(doc: Document): Metadata {
  const photo = photoFor(doc.topic, doc.id);
  const image = {
    url: photo.src,
    alt: photo.alt,
    width: photo.width,
    height: photo.height,
  };
  const isArticle = ARTICLE_KINDS.has(doc.kind);
  return {
    title: doc.seo.meta_title,
    description: doc.seo.meta_description,
    alternates: { canonical: doc.path },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
        "max-video-preview": -1,
      },
    },
    openGraph: {
      title: doc.seo.og_title,
      description: doc.seo.og_description,
      url: doc.path,
      siteName: site.name,
      locale: site.ogLocale,
      type: isArticle ? "article" : "website",
      images: [image],
      ...(isArticle
        ? {
            publishedTime: doc.publication.date_published,
            modifiedTime: doc.publication.date_modified,
          }
        : {}),
    },
    twitter: {
      card: "summary_large_image",
      title: doc.seo.og_title,
      description: doc.seo.og_description,
      images: [photo.src],
    },
  };
}
