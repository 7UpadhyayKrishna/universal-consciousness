import { notFound } from "next/navigation";
import { PostEditor } from "@/components/admin/post-editor";
import { listLinkTargets, listSources, listTopics } from "@/lib/admin/catalog";
import { readDraft } from "@/lib/admin/drafts";

export default async function EditPostPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const draft = readDraft(id);
  if (!draft) notFound();
  return (
    <>
      <p className="eyebrow">Editorial desk</p>
      <h1>{draft.title || "Untitled draft"}</h1>
      <PostEditor
        draft={draft}
        topics={listTopics()}
        sources={listSources()}
        paths={listLinkTargets()}
      />
    </>
  );
}
