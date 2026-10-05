import { emit } from "./doc.mjs";

function slugify(heading) {
  return heading
    .toLowerCase()
    .replace(/['’]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "")
    .slice(0, 80);
}

export function mdpage(spec, markdown) {
  if (typeof spec.category === "string") {
    const name = spec.category;
    const slug = spec.topic || name.toLowerCase().replace(/[^a-z0-9]+/g, "-");
    spec = { ...spec, category: { id: slug, name, slug } };
  }
  const blocks = markdown.trim().split(/\n## /);
  const intro = blocks.shift().trim();
  const sections = blocks.map((block) => {
    const newline = block.indexOf("\n");
    const heading = (newline === -1 ? block : block.slice(0, newline)).trim();
    const content = (newline === -1 ? "" : block.slice(newline + 1)).trim();
    return { heading, slug: slugify(heading), content };
  });
  emit({ ...spec, intro, sections });
  const text = [spec.quick_answer.question, spec.quick_answer.answer, intro, ...sections.flatMap((s) => [s.heading, s.content]), ...(spec.key_takeaways ?? []), ...(spec.faq ?? []).flatMap((f) => [f.question, f.answer])].join(" ");
  const count = text.replace(/\[([^\]]+)\]\([^)]+\)/g, "$1").replace(/[^\p{L}\p{N}\s'-]/gu, " ").trim().split(/\s+/).filter(Boolean).length;
  const titleLength = spec.title.length;
  const descriptionLength = spec.description.length;
  const floors = { pillar: 420, explainer: 420, guide: 420, comparison: 420, misconception: 420, glossary: 420, chakra: 420, meditation: 420, yoga: 420, question: 400, hub: 260, trust: 280, author: 280 };
  const floor = floors[spec.kind] ?? 200;
  const flag = titleLength < 20 || titleLength > 70 || descriptionLength < 80 || descriptionLength > 170 ? " META" : "";
  const short = count < floor ? " SHORT" : "";
  console.log(`${count}\t${titleLength}\t${descriptionLength}\t${spec.path}${flag}${short}`);
  if (short || flag) process.exitCode = 1;
}
