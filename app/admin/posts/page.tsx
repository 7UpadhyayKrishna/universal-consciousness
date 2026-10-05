import Link from "next/link";
import { listDrafts } from "@/lib/admin/drafts";

export default function PostsPage() {
  const drafts = listDrafts();
  return (
    <>
      <p className="eyebrow">Editorial desk</p>
      <h1>Drafts</h1>
      {drafts.length === 0 ? (
        <p>
          No drafts yet. <Link href="/admin/posts/new/">Start an article</Link>.
        </p>
      ) : (
        <ul className="admin-list">
          {drafts.map((draft) => (
            <li key={draft.id}>
              <Link href={`/admin/posts/${draft.id}/`}>{draft.title || "Untitled draft"}</Link>
              <span>
                {draft.status === "published" ? "Published" : "Draft"}
                {draft.updated_at
                  ? ` · ${new Date(draft.updated_at).toLocaleString("en-US", {
                      dateStyle: "medium",
                      timeStyle: "short",
                    })}`
                  : ""}
              </span>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
