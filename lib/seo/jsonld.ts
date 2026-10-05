import type { Document } from "@/lib/content/schema";
import { photoFor } from "@/lib/photos";
import type { Crumb } from "@/lib/seo/breadcrumbs";
import { absoluteUrl, site } from "@/lib/site";
import { plainText, wordCount } from "@/lib/content/text";

function organization() {
  return {
    "@type": "Organization",
    "@id": `${site.url}/#organization`,
    name: site.name,
    url: `${site.url}/`,
    logo: {
      "@type": "ImageObject",
      url: absoluteUrl(site.logo),
    },
    description: site.positioning,
    email: site.contactEmail,
  };
}

function website() {
  return {
    "@type": "WebSite",
    "@id": `${site.url}/#website`,
    url: `${site.url}/`,
    name: site.name,
    description: site.description,
    inLanguage: site.language,
    publisher: { "@id": `${site.url}/#organization` },
  };
}

function breadcrumbList(doc: Document, crumbs: Crumb[]) {
  return {
    "@type": "BreadcrumbList",
    "@id": `${absoluteUrl(doc.path)}#breadcrumb`,
    itemListElement: crumbs.map((crumb, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: crumb.name,
      item: absoluteUrl(crumb.path),
    })),
  };
}

function editorialTeam() {
  return {
    "@type": "Organization",
    "@id": `${site.url}/authors/editorial-team/#team`,
    name: "Universal Consciousness Editorial Team",
    url: `${site.url}/authors/editorial-team/`,
    parentOrganization: { "@id": `${site.url}/#organization` },
  };
}

export function homepageJsonLd() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      website(),
      organization(),
      {
        "@type": "WebPage",
        "@id": `${site.url}/#webpage`,
        url: `${site.url}/`,
        name: site.homepage.title,
        description: site.description,
        isPartOf: { "@id": `${site.url}/#website` },
        about: { "@id": `${site.url}/#organization` },
        inLanguage: site.language,
      },
    ],
  };
}

export function documentJsonLd(doc: Document, crumbs: Crumb[], listed: Document[]) {
  const url = absoluteUrl(doc.path);
  const graph: Record<string, unknown>[] = [website(), organization(), breadcrumbList(doc, crumbs)];

  if (doc.kind === "author") {
    graph.push({
      "@type": "ProfilePage",
      "@id": `${url}#profile`,
      url,
      name: doc.h1,
      description: doc.excerpt,
      inLanguage: site.language,
      isPartOf: { "@id": `${site.url}/#website` },
      mainEntity: editorialTeam(),
    });
  } else if (doc.kind === "glossary") {
    graph.push({
      "@type": "DefinedTermSet",
      "@id": `${site.url}/glossary/#termset`,
      name: "Universal Consciousness Glossary",
      url: `${site.url}/glossary/`,
      inLanguage: site.language,
    });
    graph.push({
      "@type": "DefinedTerm",
      "@id": `${url}#term`,
      name: doc.h1,
      description: doc.quick_answer.answer,
      url,
      inDefinedTermSet: { "@id": `${site.url}/glossary/#termset` },
      inLanguage: site.language,
    });
  } else if (doc.kind === "pillar" || doc.kind === "hub") {
    graph.push({
      "@type": "CollectionPage",
      "@id": `${url}#collection`,
      url,
      name: doc.h1,
      description: doc.excerpt,
      inLanguage: site.language,
      isPartOf: { "@id": `${site.url}/#website` },
      mainEntity: {
        "@type": "ItemList",
        itemListElement: listed.slice(0, 40).map((item, index) => ({
          "@type": "ListItem",
          position: index + 1,
          name: item.title,
          url: absoluteUrl(item.path),
        })),
      },
    });
  } else if (doc.kind === "trust") {
    const type =
      doc.slug === "about"
        ? "AboutPage"
        : doc.slug === "contact"
          ? "ContactPage"
          : "WebPage";
    graph.push({
      "@type": type,
      "@id": `${url}#webpage`,
      url,
      name: doc.h1,
      description: doc.excerpt,
      inLanguage: site.language,
      isPartOf: { "@id": `${site.url}/#website` },
    });
  } else {
    graph.push({
      "@type": "BlogPosting",
      "@id": `${url}#article`,
      mainEntityOfPage: { "@type": "WebPage", "@id": url },
      headline: doc.h1,
      description: doc.excerpt,
      image: [absoluteUrl(photoFor(doc.topic, doc.id).src)],
      datePublished: doc.publication.date_published,
      dateModified: doc.publication.date_modified,
      author: editorialTeam(),
      publisher: { "@id": `${site.url}/#organization` },
      articleSection: doc.category.name,
      keywords: [doc.primary_keyword, ...doc.secondary_keywords],
      inLanguage: site.language,
      wordCount: wordCount(plainText(doc)),
      isPartOf: { "@id": `${site.url}/#website` },
    });
  }

  return { "@context": "https://schema.org", "@graph": graph };
}
