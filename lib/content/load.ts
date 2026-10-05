import {
  getEntities as readEntities,
  getRelationships as readRelationships,
  getSources as readSources,
  readDocuments,
} from "./files";
import type { Document, Entity, Relationship, Source } from "./schema";

type ContentStore = {
  documents: Document[];
  entities: Entity[];
  relationships: Relationship[];
  sources: Source[];
  loadedAt: number;
};

const globalForContent = globalThis as unknown as {
  contentStore?: Promise<ContentStore>;
};

const CACHE_MS = process.env.NODE_ENV === "development" ? 30_000 : 5 * 60_000;

async function readStore(): Promise<ContentStore> {
  const { documents, errors } = readDocuments();
  if (errors.length > 0) {
    throw new Error(errors[0]);
  }
  return {
    documents,
    entities: readEntities(),
    relationships: readRelationships(),
    sources: readSources(),
    loadedAt: Date.now(),
  };
}

async function getStore(): Promise<ContentStore> {
  const current = globalForContent.contentStore;
  if (current) {
    const store = await current;
    if (Date.now() - store.loadedAt < CACHE_MS) return store;
  }
  const pending = readStore();
  globalForContent.contentStore = pending;
  try {
    return await pending;
  } catch (error) {
    if (globalForContent.contentStore === pending) {
      globalForContent.contentStore = undefined;
    }
    throw error;
  }
}

export async function getSources(): Promise<Source[]> {
  return (await getStore()).sources;
}

export async function getEntities(): Promise<Entity[]> {
  return (await getStore()).entities;
}

export async function getRelationships(): Promise<Relationship[]> {
  return (await getStore()).relationships;
}

export async function getDocuments(): Promise<Document[]> {
  return (await getStore()).documents;
}

export async function getByPath(documentPath: string): Promise<Document | undefined> {
  const documents = await getDocuments();
  return documents.find((doc) => doc.path === documentPath);
}

export async function getById(id: string): Promise<Document | undefined> {
  const documents = await getDocuments();
  return documents.find((doc) => doc.id === id);
}

export async function getByKind(kind: Document["kind"]): Promise<Document[]> {
  const documents = await getDocuments();
  return documents.filter((doc) => doc.kind === kind);
}

export async function getAuthor(doc: Document): Promise<Document | undefined> {
  const documents = await getDocuments();
  return documents.find((item) => item.kind === "author" && item.id === doc.author_id);
}

export async function relatedDocuments(doc: Document): Promise<Document[]> {
  const all = await getDocuments();
  return doc.related
    .map((itemPath) => all.find((item) => item.path === itemPath))
    .filter((item): item is Document => Boolean(item));
}

export async function childDocuments(doc: Document): Promise<Document[]> {
  const all = await getDocuments();
  return doc.children
    .map((itemPath) => all.find((item) => item.path === itemPath))
    .filter((item): item is Document => Boolean(item));
}

export async function neighbors(doc: Document): Promise<{
  previous?: Document;
  next?: Document;
}> {
  const articleKinds = new Set<Document["kind"]>([
    "explainer",
    "guide",
    "comparison",
    "misconception",
    "question",
  ]);
  if (!articleKinds.has(doc.kind)) return {};
  const documents = await getDocuments();
  const siblings = documents
    .filter(
      (item) =>
        item.topic === doc.topic &&
        articleKinds.has(item.kind) &&
        item.id !== doc.id,
    )
    .sort((a, b) => a.title.localeCompare(b.title, "en-US"));
  const ordered = [...siblings, doc].sort((a, b) =>
    a.title.localeCompare(b.title, "en-US"),
  );
  const index = ordered.findIndex((item) => item.id === doc.id);
  return {
    previous: index > 0 ? ordered[index - 1] : undefined,
    next: index < ordered.length - 1 ? ordered[index + 1] : undefined,
  };
}

export async function clusterDocuments(doc: Document): Promise<Document[]> {
  const documents = await getDocuments();
  return documents
    .filter(
      (item) =>
        item.topic === doc.topic &&
        item.path !== doc.path &&
        item.kind !== "trust" &&
        item.kind !== "author" &&
        item.kind !== "hub",
    )
    .sort((a, b) => a.title.localeCompare(b.title, "en-US"));
}

export async function entityNeighbors(doc: Document): Promise<
  {
    entity: Entity;
    relationship: Relationship["relationship"];
    target: Entity;
  }[]
> {
  const { entities, relationships } = await getStore();
  const byId = new Map(entities.map((entity) => [entity.id, entity]));
  const ids = new Set([...doc.about, ...doc.mentions]);
  return relationships
    .filter((item) => ids.has(item.source) || ids.has(item.target))
    .map((item) => {
      const entity = byId.get(item.source);
      const target = byId.get(item.target);
      if (!entity || !target) return undefined;
      return { entity, relationship: item.relationship, target };
    })
    .filter((item): item is NonNullable<typeof item> => Boolean(item))
    .slice(0, 8);
}

export function clearContentCache(): void {
  globalForContent.contentStore = undefined;
}
