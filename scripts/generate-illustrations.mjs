import fs from "fs";
import path from "path";

const root = process.cwd();
const imageDir = path.join(root, "public", "images");
fs.mkdirSync(imageDir, { recursive: true });

function hash(value) {
  let h = 2166136261;
  for (const char of value) {
    h ^= char.charCodeAt(0);
    h = Math.imul(h, 16777619);
  }
  return h >>> 0;
}

const palettes = [
  ["#f4f0e7", "#1e4a42", "#c4a574", "#8c4a32", "#d9cfc0"],
  ["#f7f3ea", "#243044", "#b7c4b0", "#8d5a3c", "#e4d8c8"],
  ["#f3efe6", "#3d3a55", "#d6a48a", "#6e7c68", "#efe2d2"],
  ["#f6f1e8", "#5c3b3b", "#d7b48a", "#7f8c86", "#eadccb"],
  ["#f8f4ec", "#1f3d4d", "#c98b6b", "#d5c4a1", "#e7ddd0"],
  ["#f4efe4", "#2f4a3c", "#a33c3c", "#e0c39a", "#efe6d8"],
];

const hints = {
  "root-chakra": ["#f6f1ea", "#7a2e2e", "#c45c4a", "#e6d2c2", "#f3e6dc"],
  "sacral-chakra": ["#f8f3ec", "#b85a2a", "#e0a06a", "#f0ddc8", "#f7ecdf"],
  "solar-plexus-chakra": ["#f8f4e8", "#c4922a", "#e2c27a", "#f3e6c4", "#fbf6ea"],
  "heart-chakra": ["#f4f6f1", "#2f6b4f", "#8fbf8a", "#d5e6d2", "#eef4ec"],
  "throat-chakra": ["#f3f6f8", "#2a5f86", "#8eb4d4", "#d5e3ee", "#eef3f7"],
  "third-eye-chakra": ["#f4f2f8", "#3d3a72", "#9a94c9", "#ddd9ee", "#f3f1f8"],
  "crown-chakra": ["#f6f3f8", "#5c4a72", "#c7b6d6", "#efe8f4", "#f8f5fa"],
};

function paletteFor(name) {
  for (const [key, palette] of Object.entries(hints)) {
    if (name.includes(key)) return palette;
  }
  return palettes[hash(name) % palettes.length];
}

function illustration(name) {
  const [paper, ink, metal, clay, mist] = paletteFor(name);
  const seed = hash(name);
  const mode = seed % 6;
  const cx = 480 + (seed % 420);
  const cy = 220 + ((seed >> 4) % 280);
  const r = 120 + ((seed >> 8) % 160);
  const shapes = [];
  shapes.push(`<rect width="1600" height="900" fill="${paper}"/>`);
  shapes.push(`<rect x="80" y="70" width="1440" height="760" fill="none" stroke="${mist}" stroke-width="2"/>`);
  if (mode === 0 || mode === 3) {
    shapes.push(`<circle cx="${cx}" cy="${cy}" r="${r}" fill="none" stroke="${ink}" stroke-width="3"/>`);
    shapes.push(`<circle cx="${cx + 180}" cy="${cy + 40}" r="${Math.round(r * 0.55)}" fill="${metal}" opacity="0.85"/>`);
  }
  if (mode === 1 || mode === 4) {
    shapes.push(`<path d="M180 640 C 420 ${280 + (seed % 80)}, 980 ${200 + (seed % 90)}, 1460 560" fill="none" stroke="${ink}" stroke-width="3"/>`);
    shapes.push(`<circle cx="${cx}" cy="430" r="18" fill="${clay}"/>`);
  }
  if (mode === 2 || mode === 5) {
    for (let i = 0; i < 5; i += 1) {
      const y = 160 + i * 120;
      shapes.push(`<rect x="${220 + ((seed + i * 40) % 180)}" y="${y}" width="${420 + ((seed >> i) % 260)}" height="28" fill="${i % 2 ? metal : ink}" opacity="${i % 2 ? 0.7 : 1}"/>`);
    }
  }
  shapes.push(`<path d="M140 ${700 - (seed % 40)} H1460" stroke="${clay}" stroke-width="2"/>`);
  shapes.push(`<circle cx="1320" cy="180" r="8" fill="${ink}"/>`);
  return `<?xml version="1.0" encoding="UTF-8"?>\n<svg xmlns="http://www.w3.org/2000/svg" width="1600" height="900" viewBox="0 0 1600 900" role="img">${shapes.join("")}</svg>\n`;
}

function walk(dir) {
  if (!fs.existsSync(dir)) return [];
  return fs.readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) return walk(full);
    return entry.name.endsWith(".json") ? [full] : [];
  });
}

const names = new Set(["home", "logo"]);
for (const file of walk(path.join(root, "content", "documents"))) {
  const doc = JSON.parse(fs.readFileSync(file, "utf8"));
  const image = doc.media?.featured_image;
  if (typeof image === "string" && image.startsWith("/images/")) {
    names.add(path.basename(image, path.extname(image)));
  }
}

for (const name of names) {
  if (name === "logo") continue;
  const file = path.join(imageDir, `${name}.svg`);
  fs.writeFileSync(file, illustration(name));
}

console.log(`Wrote ${names.size - 1} illustrations.`);
