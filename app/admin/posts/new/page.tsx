import { PostEditor } from "@/components/admin/post-editor";
import { listLinkTargets, listSources, listTopics } from "@/lib/admin/catalog";
import { emptyDraft } from "@/lib/admin/types";

export default function NewPostPage() {
  return (
    <>
      <p className="eyebrow">Editorial desk</p>
      <h1>New article</h1>
      <PostEditor
        draft={emptyDraft()}
        topics={listTopics()}
        sources={listSources()}
        paths={listLinkTargets()}
      />
    </>
  );
}
