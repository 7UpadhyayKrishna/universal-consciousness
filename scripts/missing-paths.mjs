import { readdirSync, readFileSync, statSync } from "fs";
import path from "path";

const rules = JSON.parse(readFileSync("content/authoring-rules.json", "utf8"));
const found = new Set();

function walk(dir) {
  for (const name of readdirSync(dir)) {
    const full = path.join(dir, name);
    if (statSync(full).isDirectory()) walk(full);
    else if (name.endsWith(".json")) {
      const doc = JSON.parse(readFileSync(full, "utf8"));
      if (doc.path) found.add(doc.path);
    }
  }
}

walk("content/documents");
const missing = rules.paths.filter((item) => !found.has(item));
console.log(`have ${found.size}, missing ${missing.length}`);
for (const item of missing) console.log(item);
