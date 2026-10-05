import { MongoClient, type Db, type MongoClientOptions } from "mongodb";

const globalForMongo = globalThis as unknown as {
  atlasClient?: Promise<MongoClient>;
};

export const mongoClientOptions = {
  serverSelectionTimeoutMS: 10_000,
  // Node 22 tries IPv4 and IPv6 together. Atlas answers that with a TLS alert.
  autoSelectFamily: false,
  family: 4,
} satisfies MongoClientOptions;

export function databaseName(): string {
  return process.env.MONGODB_DB || "universalconsciousness";
}

export function getMongoClient(): Promise<MongoClient> {
  const uri = process.env.MONGODB_URI;
  if (!uri) {
    throw new Error("MONGODB_URI is not set");
  }
  if (!globalForMongo.atlasClient) {
    const client = new MongoClient(uri, mongoClientOptions);
    const connecting = client.connect().catch((error: unknown) => {
      globalForMongo.atlasClient = undefined;
      throw error;
    });
    globalForMongo.atlasClient = connecting;
  }
  return globalForMongo.atlasClient;
}

export async function getDb(): Promise<Db> {
  const client = await getMongoClient();
  return client.db(databaseName());
}
