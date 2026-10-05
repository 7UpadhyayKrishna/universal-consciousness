import Link from "next/link";

export function AdminNav() {
  return (
    <nav className="admin-nav" aria-label="Editorial desk">
      <Link href="/admin/posts/">Drafts</Link>
      <Link href="/admin/posts/new/">New article</Link>
      <form action="/api/admin/logout/" method="post">
        <button type="submit">Sign out</button>
      </form>
    </nav>
  );
}
