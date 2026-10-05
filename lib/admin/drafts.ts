import fs from "fs";
import path from "path";
import { emptyDraft, type DraftRecord } from "./types";

const DRAFT_ROOT = path.join(process.cwd(), "content", "drafts");

function draftPath(id: string): string | undefined {
  if (!/^draft-[a-z0-9-]+$/i.test(id)) return undefined;
  return path.join(DRAFT_ROOT, `${id}.json`);
}

function asDraft(value: unknown): DraftRecord | undefined {
  if (!value || typeof value !== "object") return undefined;
  const record = value as Partial<DraftRecord>;
  if (typeof record.id !== "string" || !record.id) return undefined;
  return { ...emptyDraft(), ...record, id: record.id };
}

export function listDrafts(): DraftRecord[] {
  if (!fs.existsSync(DRAFT_ROOT)) return [];
  const drafts: DraftRecord[] = [];
  for (const name of fs.readdirSync(DRAFT_ROOT)) {
    if (!name.endsWith(".json")) continue;
    try {
      const parsed = asDraft(JSON.parse(fs.readFileSync(path.join(DRAFT_ROOT, name), "utf8")));
      if (parsed) drafts.push(parsed);
    } catch {
      continue;
    }
  }
  return drafts.sort((a, b) => b.updated_at.localeCompare(a.updated_at));
}

export function readDraft(id: string): DraftRecord | undefined {
  const file = draftPath(id);
  if (!file || !fs.existsSync(file)) return undefined;
  return asDraft(JSON.parse(fs.readFileSync(file, "utf8")));
}

export function writeDraft(draft: DraftRecord): DraftRecord {
  const file = draftPath(draft.id);
  if (!file) throw new Error("Invalid draft id");
  fs.mkdirSync(DRAFT_ROOT, { recursive: true });
  const next = { ...draft, updated_at: new Date().toISOString() };
  fs.writeFileSync(file, `${JSON.stringify(next, null, 2)}\n`);
  return next;
}

export function createDraftId(): string {
  return `draft-${crypto.randomUUID()}`;
}
