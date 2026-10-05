import { readdirSync } from "fs";
import { spawnSync } from "child_process";
import path from "path";

const dir = path.join(process.cwd(), "content-src");
const files = readdirSync(dir)
  .filter((name) => name.endsWith(".mjs") && name !== "build-all.mjs")
  .sort();

for (const file of files) {
  const result = spawnSync(process.execPath, [path.join(dir, file)], {
    stdio: "inherit",
  });
  if (result.status !== 0) process.exit(result.status ?? 1);
}
