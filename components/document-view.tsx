import Image from "next/image";
import Link from "next/link";
import {
  childDocuments,
  entityNeighbors,
  getAuthor,
  neighbors,
  relatedDocuments,
} from "@/lib/content/load";
import type { Document, Source } from "@/lib/content/schema";
import { plainText, readingTime, wordCount } from "@/lib/content/text";
import { breadcrumbs } from "@/lib/seo/breadcrumbs";
import { site } from "@/lib/site";
import { photoFor } from "@/lib/photos";
import { Markdown } from "./markdown";
import { PhotoCredit } from "./photo-credit";

const RELATION_LABEL: Record<string, string> = {
  relatedTo: "is related to",
  partOf: "is part of",
  originatedIn: "is discussed in relation to",
  associatedWith: "is associated with",
  contrastsWith: "is often contrasted with",
  explainedBy: "is explained through",
  practicedThrough: "is practiced through",
  mentionedIn: "is mentioned alongside",
  writtenAboutBy: "is written about by",
};

function formatDate(iso: string): string {
  return new Intl.DateTimeFormat("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
    timeZone: "America/New_York",
  }).format(new Date(iso));
}

function LinkList({
  title,
  docs,
}: {
  title: string;
  docs: Document[];
}) {
  if (docs.length === 0) return null;
  return (
    <section className="link-block">
      <h2>{title}</h2>
      <ul>
        {docs.map((item) => (
          <li key={item.path}>
            <Link href={item.path}>{item.title}</Link>
            <span>{item.excerpt}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

export async function DocumentView({
  doc,
  supporting = [],
  bibliography = [],
}: {
  doc: Document;
  supporting?: Document[];
  bibliography?: Source[];
}) {
  const crumbs = breadcrumbs(doc);
  const author = doc.kind === "author" ? doc : await getAuthor(doc);
  const related = await relatedDocuments(doc);
  const children = await childDocuments(doc);
  const listed = children.length > 0 ? children : supporting;
  const { previous, next } = await neighbors(doc);
  const connections = await entityNeighbors(doc);
  const words = wordCount(plainText(doc));
  const minutes = readingTime(words);
  const disclaimer = doc.disclaimer.required
    ? doc.disclaimer.text || site.defaultDisclaimer
    : "";
  const photo = photoFor(doc.topic, doc.id);

  return (
    <article className="document">
      <nav className="crumbs" aria-label="Breadcrumb">
        <ol>
          {crumbs.map((crumb, index) => (
            <li key={crumb.path}>
              {index < crumbs.length - 1 ? (
                <Link href={crumb.path}>{crumb.name}</Link>
              ) : (
                <span aria-current="page">{crumb.name}</span>
              )}
            </li>
          ))}
        </ol>
      </nav>
      <p className="kicker">{doc.category.name}</p>
      <h1>{doc.h1}</h1>
      <p className="dek">{doc.excerpt}</p>
      <p className="byline">
        {author ? (
          <>
            Written by <Link href={author.path}>{author.title}</Link>
          </>
        ) : (
          "Written by the Universal Consciousness Editorial Team"
        )}
        <span>
          Published {formatDate(doc.publication.date_published)}
          {doc.publication.date_modified !== doc.publication.date_published
            ? ` · Updated ${formatDate(doc.publication.date_modified)}`
            : ""}
          {" · "}
          {minutes} min read
        </span>
      </p>

      <aside className="answer" aria-label="Short answer">
        <p className="answer-label">{doc.quick_answer.question}</p>
        <p>{doc.quick_answer.answer}</p>
      </aside>

      <figure className="feature">
        <Image
          src={photo.src}
          alt={photo.alt}
          width={photo.width}
          height={photo.height}
          priority
        />
        <PhotoCredit photo={photo} />
      </figure>

      {Object.keys(doc.facts).length > 0 ? (
        <table className="facts">
          <caption>Reference details</caption>
          <tbody>
            {Object.entries(doc.facts).map(([key, value]) => (
              <tr key={key}>
                <th scope="row">{key}</th>
                <td>{value}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : null}

      <section className="takeaways">
        <h2>Key takeaways</h2>
        <ul>
          {doc.key_takeaways.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>

      <div className="article-grid">
        <nav className="toc" aria-label="On this page">
          <p>On this page</p>
          <ol>
            {doc.sections.map((section) => (
              <li key={section.slug}>
                <a href={`#${section.slug}`}>{section.heading}</a>
              </li>
            ))}
            <li>
              <a href="#faq">Frequently asked questions</a>
            </li>
            {doc.sources.length > 0 ? (
              <li>
                <a href="#sources">Sources</a>
              </li>
            ) : null}
          </ol>
        </nav>
        <div>
          <Markdown content={doc.intro} />
          {doc.sections.map((section) => (
            <section key={section.slug} id={section.slug} className="section">
              <h2>{section.heading}</h2>
              <Markdown content={section.content} />
            </section>
          ))}

          <LinkList
            title={doc.kind === "pillar" || doc.kind === "hub" ? "In this collection" : "Related reading"}
            docs={doc.kind === "pillar" || doc.kind === "hub" ? listed : related}
          />
          {doc.kind !== "pillar" && doc.kind !== "hub" ? null : related.length > 0 && children.length > 0 ? (
            <LinkList title="Related reading" docs={related} />
          ) : null}

          {connections.length > 0 ? (
            <section className="link-block">
              <h2>How the ideas connect</h2>
              <ul>
                {connections.map((item) => (
                  <li key={`${item.entity.id}-${item.relationship}-${item.target.id}`}>
                    <Link href={item.entity.path}>{item.entity.name}</Link>{" "}
                    {RELATION_LABEL[item.relationship] ?? "is connected with"}{" "}
                    <Link href={item.target.path}>{item.target.name}</Link>
                  </li>
                ))}
              </ul>
            </section>
          ) : null}

          <section id="faq" className="faq">
            <h2>Frequently asked questions</h2>
            {doc.faq.map((item) => (
              <details key={item.question}>
                <summary>{item.question}</summary>
                <p>{item.answer}</p>
              </details>
            ))}
          </section>

          {previous || next ? (
            <nav className="pager" aria-label="More in this topic">
              {previous ? (
                <Link href={previous.path}>
                  <span>Previous</span>
                  {previous.title}
                </Link>
              ) : (
                <span />
              )}
              {next ? (
                <Link href={next.path}>
                  <span>Next</span>
                  {next.title}
                </Link>
              ) : null}
            </nav>
          ) : null}

          {doc.sources.length > 0 ? (
            <section id="sources" className="sources">
              <h2>Sources and references</h2>
              <ol>
                {doc.sources.map((source) => (
                  <li key={source.id}>
                    <a href={source.url} target="_blank" rel="noopener noreferrer">
                      {source.title}
                    </a>
                    <span>
                      {source.name} · {source.type}
                    </span>
                  </li>
                ))}
              </ol>
            </section>
          ) : null}

          {bibliography.length > 0 ? (
            <section className="sources" aria-label="Bibliography">
              <h2>Works cited across the publication</h2>
              <ol>
                {bibliography.map((source) => (
                  <li key={source.id}>
                    <a href={source.url} target="_blank" rel="noopener noreferrer">
                      {source.title}
                    </a>
                    <span>
                      {source.name} · {source.type}
                    </span>
                  </li>
                ))}
              </ol>
            </section>
          ) : null}

          {disclaimer ? (
            <aside className="disclaimer">
              <h2>Note on claims</h2>
              <p>{disclaimer}</p>
            </aside>
          ) : null}
        </div>
      </div>
    </article>
  );
}
