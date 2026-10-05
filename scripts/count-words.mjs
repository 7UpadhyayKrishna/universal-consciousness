import fs from "fs";

function words(text) {
  const stripped = text
    .replace(/\[([^\]]+)\]\([^)]+\)/g, "$1")
    .replace(/[^\p{L}\p{N}\s'-]/gu, " ")
    .replace(/\s+/g, " ")
    .trim();
  return stripped ? stripped.split(" ").filter(Boolean).length : 0;
}

for (const file of process.argv.slice(2)) {
  const doc = JSON.parse(fs.readFileSync(file, "utf8"));
  const text = [
    doc.quick_answer.question,
    doc.quick_answer.answer,
    doc.intro,
    ...doc.sections.flatMap((section) => [section.heading, section.content]),
    ...doc.key_takeaways,
    ...doc.faq.flatMap((item) => [item.question, item.answer]),
  ].join("\n");
  const title = doc.seo.meta_title;
  const description = doc.seo.meta_description;
  console.log(
    `${words(text)}\t${title.length}\t${description.length}\t${doc.path}`,
  );
}
