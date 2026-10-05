import fs from "fs";
import path from "path";

function hash(value: string): number {
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

function illustration(name: string): string {
  const [paper, ink, metal, clay, mist] = palettes[hash(name) % palettes.length];
  const seed = hash(name);
  const mode = seed % 6;
  const cx = 480 + (seed % 420);
  const cy = 220 + ((seed >> 4) % 280);
  const r = 120 + ((seed >> 8) % 160);
  const shapes = [`<rect width="1600" height="900" fill="${paper}"/>`];
  shapes.push(
    `<rect x="80" y="70" width="1440" height="760" fill="none" stroke="${mist}" stroke-width="2"/>`,
  );
  if (mode === 0 || mode === 3) {
    shapes.push(
      `<circle cx="${cx}" cy="${cy}" r="${r}" fill="none" stroke="${ink}" stroke-width="3"/>`,
    );
    shapes.push(
      `<circle cx="${cx + 180}" cy="${cy + 40}" r="${Math.round(r * 0.55)}" fill="${metal}" opacity="0.85"/>`,
    );
  }
  if (mode === 1 || mode === 4) {
    shapes.push(
      `<path d="M180 640 C 420 ${280 + (seed % 80)}, 980 ${200 + (seed % 90)}, 1460 560" fill="none" stroke="${ink}" stroke-width="3"/>`,
    );
    shapes.push(`<circle cx="${cx}" cy="430" r="18" fill="${clay}"/>`);
  }
  if (mode === 2 || mode === 5) {
    for (let i = 0; i < 5; i += 1) {
      const y = 160 + i * 120;
      shapes.push(
        `<rect x="${220 + ((seed + i * 40) % 180)}" y="${y}" width="${420 + ((seed >> i) % 260)}" height="28" fill="${i % 2 ? metal : ink}" opacity="${i % 2 ? 0.7 : 1}"/>`,
      );
    }
  }
  shapes.push(`<path d="M140 ${700 - (seed % 40)} H1460" stroke="${clay}" stroke-width="2"/>`);
  shapes.push(`<circle cx="1320" cy="180" r="8" fill="${ink}"/>`);
  return `<?xml version="1.0" encoding="UTF-8"?>\n<svg xmlns="http://www.w3.org/2000/svg" width="1600" height="900" viewBox="0 0 1600 900" role="img">${shapes.join("")}</svg>\n`;
}

export function writeIllustration(name: string): { publicPath: string; existed: boolean } {
  const dir = path.join(process.cwd(), "public", "images");
  fs.mkdirSync(dir, { recursive: true });
  const file = path.join(dir, `${name}.svg`);
  const existed = fs.existsSync(file);
  fs.writeFileSync(file, illustration(name));
  return { publicPath: `/images/${name}.svg`, existed };
}

export function removeIllustration(name: string): void {
  const file = path.join(process.cwd(), "public", "images", `${name}.svg`);
  if (fs.existsSync(file)) fs.unlinkSync(file);
}
