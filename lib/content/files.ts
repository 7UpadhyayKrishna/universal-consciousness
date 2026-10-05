import fs from "fs";
import path from "path";
import { z } from "zod";
import {
  documentSchema,
  entitySchema,
  relationshipSchema,
  sourceSchema,
  type Document,
  type Entity,
  type Relationship,
  type Source,
} from "./schema";

const CONTENT_ROOT = path.join(process.cwd(), "content");

let entityCache: Entity[] | null = null;
let relationshipCache: Relationship[] | null = null;
let sourceCache: Source[] | null = null;

function readJson(filePath: string): unknown {
  try {
    return JSON.parse(fs.readFileSync(filePath, "utf8"));
  } catch (error) {
    const message = error instanceof Error ? error.message : "Invalid JSON";
    throw new Error(`${filePath}: ${message}`);
  }
}

function walk(dir: string): string[] {
  if (!fs.existsSync(dir)) return [];
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  const files: string[] = [];
  for (const entry of entries) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) files.push(...walk(full));
    else if (entry.isFile() && entry.name.endsWith(".json")) files.push(full);
  }
  return files;
}

export function getSources(): Source[] {
  if (sourceCache) return sourceCache;
  const file = path.join(CONTENT_ROOT, "sources.json");
  const parsed = sourceSchema.array().parse(readJson(file));
  sourceCache = parsed;
  return parsed;
}

export function getEntities(): Entity[] {
  if (entityCache) return entityCache;
  const file = path.join(CONTENT_ROOT, "entities.json");
  entityCache = entitySchema.array().parse(readJson(file));
  return entityCache;
}

export function getRelationships(): Relationship[] {
  if (relationshipCache) return relationshipCache;
  const file = path.join(CONTENT_ROOT, "relationships.json");
  relationshipCache = relationshipSchema.array().parse(readJson(file));
  return relationshipCache;
}

function issueText(error: z.ZodError): string {
  return error.issues
    .map((issue) => `${issue.path.join(".") || "(root)"}: ${issue.message}`)
    .join("; ");
}

export function readDocuments(): { documents: Document[]; errors: string[] } {
  const errors: string[] = [];
  let sources: Source[] = [];
  try {
    sources = getSources();
  } catch (error) {
    errors.push(error instanceof Error ? error.message : "Could not load sources");
    return { documents: [], errors };
  }
  const byId = new Map(sources.map((source) => [source.id, source]));
  const documents: Document[] = [];
  for (const filePath of walk(path.join(CONTENT_ROOT, "documents"))) {
    let raw: unknown;
    try {
      raw = readJson(filePath);
    } catch (error) {
      errors.push(error instanceof Error ? error.message : `Invalid JSON in ${filePath}`);
      continue;
    }
    const parsed = documentSchema.safeParse(raw);
    if (!parsed.success) {
      errors.push(`${path.relative(process.cwd(), filePath)}: ${issueText(parsed.error)}`);
      continue;
    }
    const missing = parsed.data.source_ids.filter((id) => !byId.has(id));
    if (missing.length > 0) {
      errors.push(`${parsed.data.path} references unknown sources: ${missing.join(", ")}`);
      continue;
    }
    documents.push({
      ...parsed.data,
      sources: parsed.data.source_ids.map((id) => byId.get(id)!),
    });
  }
  return { documents, errors };
}
