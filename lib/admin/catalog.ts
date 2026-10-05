import fs from "fs";
import path from "path";
import { readDocuments } from "@/lib/content/files";
import { sourceSchema, type Source } from "@/lib/content/schema";
import type { PathOption, SourceOption, TopicOption } from "./types";

export type { PathOption, SourceOption, TopicOption };

export function readSourceFile(): Source[] {
  const file = path.join(process.cwd(), "content", "sources.json");
  return sourceSchema.array().parse(JSON.parse(fs.readFileSync(file, "utf8")));
}

export function listTopics(): TopicOption[] {
  const dir = path.join(process.cwd(), "content", "documents", "pillars");
  const topics: TopicOption[] = [];
  for (const name of fs.readdirSync(dir)) {
    if (!name.endsWith(".json")) continue;
    const raw = JSON.parse(fs.readFileSync(path.join(dir, name), "utf8")) as {
      topic?: string;
      category?: { name?: string };
    };
    if (!raw.topic || !raw.category?.name) continue;
    topics.push({ id: raw.topic, name: raw.category.name });
  }
  return topics.sort((a, b) => a.name.localeCompare(b.name, "en-US"));
}

export function listSources(): SourceOption[] {
  return readSourceFile()
    .map((source) => ({ id: source.id, name: source.name, title: source.title }))
    .sort((a, b) => a.title.localeCompare(b.title, "en-US"));
}

export function listLinkTargets(): PathOption[] {
  const { documents } = readDocuments();
  return documents
    .map((doc) => ({ path: doc.path, title: doc.title }))
    .sort((a, b) => a.title.localeCompare(b.title, "en-US"));
}
