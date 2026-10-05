"use server";

import { createDraftId, readDraft, writeDraft } from "@/lib/admin/drafts";
import { requireSession } from "@/lib/admin/guard";
import { publishDraftRecord } from "@/lib/admin/publish";
import {
  ARTICLE_KINDS,
  emptyDraft,
  SOURCE_TYPES,
  type DraftRecord,
} from "@/lib/admin/types";

export type DraftActionResult =
  | { ok: true; draft: DraftRecord }
  | { ok: false; errors: string[]; draft?: DraftRecord };

function normalize(input: DraftRecord): DraftRecord {
  const base = emptyDraft();
  const kind = ARTICLE_KINDS.includes(input.kind) ? input.kind : base.kind;
  const sourceType = SOURCE_TYPES.includes(input.new_source?.type)
    ? input.new_source.type
    : base.new_source.type;
  return {
    ...base,
    ...input,
    kind,
    title: input.title ?? "",
    slug: input.slug ?? "",
    topic: input.topic || base.topic,
    excerpt: input.excerpt ?? "",
    quick_question: input.quick_question ?? "",
    quick_answer: input.quick_answer ?? "",
    intro: input.intro ?? "",
    sections:
      Array.isArray(input.sections) && input.sections.length > 0
        ? input.sections.map((section) => ({
            heading: section?.heading ?? "",
            content: section?.content ?? "",
          }))
        : base.sections,
    takeaways:
      Array.isArray(input.takeaways) && input.takeaways.length > 0
        ? input.takeaways.map((item) => item ?? "")
        : base.takeaways,
    faq:
      Array.isArray(input.faq) && input.faq.length > 0
        ? input.faq.map((item) => ({
            question: item?.question ?? "",
            answer: item?.answer ?? "",
          }))
        : base.faq,
    related: Array.isArray(input.related) ? input.related.filter(Boolean) : [],
    source_ids: Array.isArray(input.source_ids) ? input.source_ids.filter(Boolean) : [],
    new_source: {
      id: input.new_source?.id ?? "",
      name: input.new_source?.name ?? "",
      title: input.new_source?.title ?? "",
      url: input.new_source?.url ?? "",
      type: sourceType,
    },
    disclaimer: Boolean(input.disclaimer),
    meta_title: input.meta_title ?? "",
    meta_description: input.meta_description ?? "",
    image_alt: input.image_alt ?? "",
    published_path: input.published_path ?? "",
    notice: input.notice ?? "",
  };
}

function withId(input: DraftRecord): DraftRecord {
  const id = /^draft-[a-z0-9-]+$/i.test(input.id) ? input.id : createDraftId();
  const existing = readDraft(id);
  const normalized = normalize(input);
  return {
    ...normalized,
    id,
    status: existing?.status === "published" ? "published" : "draft",
    published_path: existing?.published_path ?? "",
    notice: existing?.notice ?? "",
  };
}

export async function saveDraft(input: DraftRecord): Promise<DraftActionResult> {
  await requireSession();
  const draft = writeDraft(withId(input));
  return { ok: true, draft };
}

export async function publishDraft(input: DraftRecord): Promise<DraftActionResult> {
  await requireSession();
  const draft = writeDraft(withId(input));
  const result = await publishDraftRecord(draft);
  if (!result.ok) return { ...result, draft };
  return result;
}
