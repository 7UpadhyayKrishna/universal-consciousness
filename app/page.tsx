import Image from "next/image";
import Link from "next/link";
import { NewsletterForm } from "@/components/newsletter-form";
import { JsonLd } from "@/components/json-ld";
import { getByKind, getDocuments } from "@/lib/content/load";
import type { Document } from "@/lib/content/schema";
import { PhotoCredit } from "@/components/photo-credit";
import { homePhoto, photoFor } from "@/lib/photos";
import { homepageJsonLd } from "@/lib/seo/jsonld";
import { site } from "@/lib/site";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: site.homepage.title,
  description: site.description,
  alternates: { canonical: "/" },
  openGraph: {
    title: site.homepage.title,
    description: site.description,
    url: "/",
    siteName: site.name,
    locale: site.ogLocale,
    type: "website",
    images: [
      {
        url: homePhoto.src,
        width: homePhoto.width,
        height: homePhoto.height,
        alt: homePhoto.alt,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: site.homepage.title,
    description: site.description,
    images: [homePhoto.src],
  },
};

function CardImage({ doc }: { doc: Document }) {
  const photo = photoFor(doc.topic, doc.id);
  return (
    <Image src={photo.src} alt={photo.alt} width={photo.width} height={photo.height} />
  );
}

async function pick(ids: readonly string[]) {
  const docs = await getDocuments();
  return ids
    .map((id) => docs.find((doc) => doc.id === id))
    .filter((doc): doc is NonNullable<typeof doc> => Boolean(doc));
}

export default async function HomePage() {
  const docs = await getDocuments();
  const topics = await getByKind("pillar");
  const guides = await pick(site.homepage.featuredGuides);
  const latest = await pick(site.homepage.latest);
  const questions = await pick(site.homepage.questions);
  const practices = docs.filter((doc) => doc.kind === "meditation");
  const wisdom = [
    "/topics/ancient-wisdom/",
    "/topics/vedanta/",
    "/topics/moksha/",
    "/glossary/atman/",
    "/glossary/brahman/",
    "/articles/what-is-yoga-philosophy/",
  ]
    .map((path) => docs.find((doc) => doc.path === path))
    .filter((doc): doc is NonNullable<typeof doc> => Boolean(doc));
  const newsletterOpen = Boolean(process.env.NEWSLETTER_WEBHOOK_URL);

  return (
    <>
      <JsonLd data={homepageJsonLd()} />
      <section className="hero">
        <p className="eyebrow">Spirituality and consciousness publication</p>
        <h1>{site.homepage.h1}</h1>
        <p className="lede">{site.positioning}</p>
        <p className="lede">
          The pages here explain traditional ideas, name the sources they come
          from, and say plainly what modern research can and cannot establish.
        </p>
        <div className="hero-links">
          <Link href="/topics/meditation/">Explore meditation</Link>
          <Link href="/topics/consciousness/">Start with consciousness</Link>
          <Link href="/editorial-policy/">Read the editorial policy</Link>
        </div>
        <figure className="hero-figure">
          <Image
            src={homePhoto.src}
            alt={homePhoto.alt}
            width={homePhoto.width}
            height={homePhoto.height}
            priority
          />
          <PhotoCredit photo={homePhoto} />
        </figure>
      </section>

      <section className="band">
        <h2>What is Universal Consciousness?</h2>
        <p>
          Universal Consciousness is an independent educational publication for
          readers in the United States who want clear writing on meditation,
          mindfulness, yoga philosophy, chakras, mantras, and Indian traditions
          of inner inquiry. It is a reference, not a studio, clinic, or course
          catalog.
        </p>
        <p>
          Each major subject has a pillar page and supporting explainers,
          guides, questions, and glossary entries. Claims about healing or
          special powers are labeled as traditional belief, practitioner
          report, or research finding, and those categories are not mixed.
        </p>
      </section>

      <section className="band">
        <h2>Explore topics</h2>
        <div className="topic-grid">
          {topics.map((topic) => (
            <Link className="topic-card" key={topic.path} href={topic.path}>
              <CardImage doc={topic} />
              <strong>{topic.category.name}</strong>
              <span>{topic.excerpt}</span>
            </Link>
          ))}
        </div>
      </section>

      <section className="band">
        <h2>Featured guides</h2>
        <div className="card-grid">
          {guides.map((guide) => (
            <Link className="card" key={guide.path} href={guide.path}>
              <CardImage doc={guide} />
              <strong>{guide.title}</strong>
              <span>{guide.excerpt}</span>
            </Link>
          ))}
        </div>
      </section>

      <section className="band">
        <h2>Latest articles</h2>
        <div className="card-grid">
          {latest.map((article) => (
            <Link className="card" key={article.path} href={article.path}>
              <CardImage doc={article} />
              <strong>{article.title}</strong>
              <span>{article.excerpt}</span>
            </Link>
          ))}
        </div>
      </section>

      <section className="band">
        <h2>Meditation and practice</h2>
        <p>
          Technique pages describe what a practice is, who has taught it, how a
          session is commonly structured, and what a beginner should consider.
        </p>
        <div className="card-grid">
          {practices.map((practice) => (
            <Link className="card" key={practice.path} href={practice.path}>
              <CardImage doc={practice} />
              <strong>{practice.title}</strong>
              <span>{practice.quick_answer.answer}</span>
            </Link>
          ))}
        </div>
      </section>

      <section className="band">
        <h2>Ancient wisdom explained</h2>
        <div className="card-grid">
          {wisdom.map((item) => (
            <Link className="card" key={item.path} href={item.path}>
              <CardImage doc={item} />
              <strong>{item.title}</strong>
              <span>{item.excerpt}</span>
            </Link>
          ))}
        </div>
      </section>

      <section className="band">
        <h2>Popular questions</h2>
        <div className="card-grid">
          {questions.map((question) => (
            <Link className="card" key={question.path} href={question.path}>
              <CardImage doc={question} />
              <strong>{question.quick_answer.question}</strong>
              <span>{question.quick_answer.answer}</span>
            </Link>
          ))}
        </div>
      </section>

      <section className="band standards">
        <div>
          <h2>Authors and contributors</h2>
          <p>
            Pages are written by the Universal Consciousness Editorial Team, a
            staff desk. The byline does not imply a clinical license or a
            lineage appointment. When a named contributor joins, that person
            will have a separate profile limited to credentials that can be
            verified.
          </p>
          <p>
            <Link href="/authors/editorial-team/">Read the team profile</Link>
          </p>
          <h2>Editorial standards</h2>
          <p>
            Articles separate traditional teaching, practitioner experience, and
            modern evidence. Corrections are public. The editorial policy
            explains how sources are chosen and how drafting tools are used.
          </p>
          <p>
            <Link href="/editorial-policy/">Read the editorial policy</Link>
          </p>
        </div>
        <div>
          <h2>Newsletter</h2>
          <p>The Universal Consciousness Weekly is a short reading list, not a product pitch.</p>
          <NewsletterForm open={newsletterOpen} />
        </div>
      </section>
    </>
  );
}
