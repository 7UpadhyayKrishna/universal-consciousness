import fs from "fs";
import path from "path";
import { MongoClient, type Document as MongoDocument } from "mongodb";
import { mongoClientOptions } from "../lib/db";

function loadEnvFile(file: string) {
  const full = path.join(process.cwd(), file);
  if (!fs.existsSync(full)) return;
  for (const line of fs.readFileSync(full, "utf8").split("\n")) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith("#")) continue;
    const eq = trimmed.indexOf("=");
    if (eq === -1) continue;
    const key = trimmed.slice(0, eq).trim();
    let value = trimmed.slice(eq + 1).trim();
    if (
      (value.startsWith('"') && value.endsWith('"')) ||
      (value.startsWith("'") && value.endsWith("'"))
    ) {
      value = value.slice(1, -1);
    }
    if (process.env[key] === undefined) process.env[key] = value;
  }
}

function redact(message: string): string {
  return message.replace(/mongodb(\+srv)?:\/\/[^@\s]+@/g, "mongodb$1://***@");
}

function readJson(filePath: string): unknown {
  return JSON.parse(fs.readFileSync(filePath, "utf8"));
}

function walk(dir: string): string[] {
  if (!fs.existsSync(dir)) return [];
  const files: string[] = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) files.push(...walk(full));
    else if (entry.isFile() && entry.name.endsWith(".json")) files.push(full);
  }
  return files;
}

function withId(row: Record<string, unknown>, id: string): MongoDocument {
  return { ...row, _id: id };
}

async function replaceAll(
  client: MongoClient,
  dbName: string,
  name: string,
  docs: MongoDocument[],
) {
  const collection = client.db(dbName).collection(name);
  await collection.deleteMany({});
  if (docs.length > 0) await collection.insertMany(docs);
  return docs.length;
}

async function main() {
  loadEnvFile(".env.local");
  loadEnvFile(".env");

  const uri = process.env.MONGODB_URI;
  const dbName = process.env.MONGODB_DB || "universalconsciousness";
  if (!uri) {
    console.error("MONGODB_URI is not set. Add it to .env.local.");
    process.exit(1);
  }

  const contentRoot = path.join(process.cwd(), "content");
  const documents = walk(path.join(contentRoot, "documents")).map((file) => {
    const row = readJson(file) as Record<string, unknown>;
    if (typeof row.id !== "string") {
      throw new Error(`${file} is missing a string id`);
    }
    return withId(row, row.id);
  });
  const sources = (readJson(path.join(contentRoot, "sources.json")) as Record<string, unknown>[]).map(
    (row) => withId(row, String(row.id)),
  );
  const entities = (readJson(path.join(contentRoot, "entities.json")) as Record<string, unknown>[]).map(
    (row) => withId(row, String(row.id)),
  );
  const relationships = readJson(path.join(contentRoot, "relationships.json")) as MongoDocument[];
  const redirects = readJson(path.join(contentRoot, "redirects.json")) as MongoDocument[];
  const inventory = withId(
    readJson(path.join(contentRoot, "inventory.json")) as Record<string, unknown>,
    "inventory",
  );
  const authoringRules = withId(
    readJson(path.join(contentRoot, "authoring-rules.json")) as Record<string, unknown>,
    "authoring-rules",
  );

  const client = new MongoClient(uri, {
    ...mongoClientOptions,
    serverSelectionTimeoutMS: 15_000,
  });
  try {
    await client.connect();
    const db = client.db(dbName);
    const counts = {
      documents: await replaceAll(client, dbName, "documents", documents),
      sources: await replaceAll(client, dbName, "sources", sources),
      entities: await replaceAll(client, dbName, "entities", entities),
      relationships: await replaceAll(client, dbName, "relationships", relationships),
      redirects: await replaceAll(client, dbName, "redirects", redirects),
    };
    const site = db.collection("site");
    await site.deleteMany({});
    await site.insertMany([inventory, authoringRules]);

    await db.collection("documents").createIndex({ path: 1 }, { unique: true });
    await db.collection("documents").createIndex({ kind: 1 });
    await db.collection("documents").createIndex({ topic: 1 });
    await db.collection("sources").createIndex({ id: 1 }, { unique: true });
    await db.collection("entities").createIndex({ id: 1 }, { unique: true });
    await db.collection("relationships").createIndex(
      { source: 1, relationship: 1, target: 1 },
      { unique: true },
    );

    console.log(`Seeded database ${dbName}`);
    for (const [name, count] of Object.entries(counts)) {
      console.log(`  ${name}: ${count}`);
    }
    console.log("  site: 2");
  } catch (error) {
    const message = error instanceof Error ? error.message : "Seed failed";
    console.error(redact(message));
    process.exitCode = 1;
  } finally {
    await client.close();
  }
}

main();
