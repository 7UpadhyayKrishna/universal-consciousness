import Link from "next/link";

export default function NotFound() {
  return (
    <section className="not-found">
      <p className="eyebrow">404</p>
      <h1>This page is not in the collection.</h1>
      <p>The address may be mistyped, or the article has not been published.</p>
      <p>
        <Link href="/">Return to the homepage</Link>
      </p>
    </section>
  );
}
