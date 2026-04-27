import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import PDFDocument from "pdfkit";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, "..");
const packsDir = path.join(rootDir, "public", "packs");

const resourcePacks = JSON.parse(
  fs.readFileSync(path.join(rootDir, "content", "resource-packs.json"), "utf8")
);
const evidenceStats = JSON.parse(
  fs.readFileSync(path.join(rootDir, "content", "evidence-stats.json"), "utf8")
);

const page = {
  width: 595.28,
  height: 841.89,
  margin: 54,
  bottom: 92,
};

const brand = {
  ink: "#06111f",
  navy: "#0b1b2e",
  cyan: "#22d3ee",
  cyanSoft: "#e0f7ff",
  teal: "#2dd4bf",
  tealSoft: "#ecfdf5",
  amberSoft: "#fff7ed",
  amber: "#f59e0b",
  line: "#cbd5e1",
  body: "#243447",
  muted: "#64748b",
  paper: "#f8fafc",
  white: "#ffffff",
};

function evidenceByIds(ids = []) {
  return ids.map((id) => evidenceStats.find((item) => item.id === id)).filter(Boolean);
}

function contentWidth() {
  return page.width - page.margin * 2;
}

function ensureSpace(doc, needed = 90) {
  if (doc.y + needed > page.height - page.bottom) {
    doc.addPage();
    addPageAccent(doc);
  }
}

function addPageAccent(doc) {
  doc.rect(0, 0, page.width, 8).fill(brand.cyan);
  doc.y = page.margin;
}

function addFooter(doc, pageNumber) {
  const y = page.height - 42;
  doc
    .font("Helvetica")
    .fontSize(8)
    .fillColor(brand.muted)
    .text("Corentis Shield", page.margin, y, { width: 120, lineBreak: false })
    .fillColor(brand.muted)
    .text("AI checkpoint for regulated workflows", 176, y, { width: 260, lineBreak: false })
    .text(String(pageNumber), 520, y, { width: 38, align: "right", lineBreak: false });
}

function coverPage(doc, pack) {
  doc.rect(0, 0, page.width, page.height).fill(brand.ink);
  doc.circle(485, 112, 96).fill("#0e7490");
  doc.circle(430, 150, 86).fill("#075985");
  doc.rect(0, 0, page.width, 14).fill(brand.cyan);

  doc
    .font("Helvetica-Bold")
    .fontSize(11)
    .fillColor(brand.cyan)
    .text("Corentis Shield", page.margin, 70);
  doc
    .font("Helvetica")
    .fontSize(9)
    .fillColor("#cbd5e1")
    .text("AI checkpoint for regulated workflows", page.margin, 89);

  doc.roundedRect(page.margin, 136, 170, 28, 14).fillAndStroke("#083344", "#155e75");
  doc
    .font("Helvetica-Bold")
    .fontSize(8.5)
    .fillColor("#cffafe")
    .text(pack.audience, page.margin + 14, 146, { width: 142 });

  doc
    .font("Helvetica-Bold")
    .fontSize(34)
    .fillColor(brand.white)
    .text(pack.pdfTitle, page.margin, 205, { width: 430, lineGap: 4 });
  doc
    .font("Helvetica")
    .fontSize(14)
    .fillColor("#cbd5e1")
    .text(pack.subtitle, page.margin, doc.y + 18, { width: 430, lineGap: 4 });

  doc.roundedRect(page.margin, 470, 430, 112, 14).fillAndStroke("#0b1b2e", "#164e63");
  doc
    .font("Helvetica-Bold")
    .fontSize(15)
    .fillColor(brand.white)
    .text("AI needs a checkpoint before it acts. Corentis provides it.", page.margin + 22, 493, {
      width: 386,
      lineGap: 4,
    });
  doc
    .font("Helvetica")
    .fontSize(10.5)
    .fillColor("#cbd5e1")
    .text(pack.shortDescription, page.margin + 22, doc.y + 12, { width: 386, lineGap: 3 });

  doc
    .font("Helvetica")
    .fontSize(9)
    .fillColor("#94a3b8")
    .text("Generated April 2026", page.margin, 728)
    .text("For discussion and pilot exploration only", page.margin, 744);
}

function sectionHeading(doc, heading, eyebrow) {
  ensureSpace(doc, 82);
  if (eyebrow) {
    doc
      .font("Helvetica-Bold")
      .fontSize(7.8)
      .fillColor("#0891b2")
      .text(eyebrow.toUpperCase(), page.margin, doc.y, { characterSpacing: 0.6 });
    doc.moveDown(0.35);
  }
  doc.font("Helvetica-Bold").fontSize(17).fillColor(brand.ink).text(heading, {
    width: contentWidth(),
    lineGap: 2,
  });
  doc.moveDown(0.35);
  doc
    .moveTo(page.margin, doc.y)
    .lineTo(page.width - page.margin, doc.y)
    .strokeColor("#bae6fd")
    .stroke();
  doc.moveDown(0.8);
}

function paragraph(doc, text) {
  if (!text) return;
  ensureSpace(doc, 58);
  doc.font("Helvetica").fontSize(10.4).fillColor(brand.body).text(text, {
    width: contentWidth(),
    lineGap: 3.2,
  });
  doc.moveDown(0.75);
}

function bulletList(doc, items = []) {
  if (!items?.length) return;
  items.forEach((item) => {
    ensureSpace(doc, 28);
    const y = doc.y + 5;
    doc.circle(page.margin + 4, y, 2.2).fill(brand.cyan);
    doc
      .font("Helvetica")
      .fontSize(10)
      .fillColor(brand.body)
      .text(item, page.margin + 16, doc.y, {
        width: contentWidth() - 16,
        lineGap: 3,
      });
    doc.moveDown(0.32);
  });
  doc.moveDown(0.45);
}

function callout(doc, title, body, tone = "cyan") {
  ensureSpace(doc, 94);
  const y = doc.y;
  const fill = tone === "amber" ? brand.amberSoft : tone === "teal" ? brand.tealSoft : "#eff6ff";
  const stroke = tone === "amber" ? "#fed7aa" : tone === "teal" ? "#99f6e4" : "#bae6fd";
  doc.roundedRect(page.margin, y, contentWidth(), 76, 10).fillAndStroke(fill, stroke);
  doc
    .font("Helvetica-Bold")
    .fontSize(9)
    .fillColor(tone === "amber" ? "#9a3412" : "#075985")
    .text(title, page.margin + 16, y + 14, { width: contentWidth() - 32 });
  doc
    .font("Helvetica")
    .fontSize(9.3)
    .fillColor(brand.body)
    .text(body, page.margin + 16, y + 31, { width: contentWidth() - 32, lineGap: 2.4 });
  doc.y = y + 92;
}

function evidenceCards(doc, evidence) {
  sectionHeading(doc, "Evidence context", "Selected signals");
  evidence.slice(0, 6).forEach((item) => {
    ensureSpace(doc, 108);
    const y = doc.y;
    doc.roundedRect(page.margin, y, contentWidth(), 88, 12).fillAndStroke("#f8fafc", "#cbd5e1");
    doc
      .font("Helvetica-Bold")
      .fontSize(8)
      .fillColor("#0891b2")
      .text(item.shortLabel.toUpperCase(), page.margin + 16, y + 13, { width: 180 });
    doc
      .font("Helvetica-Bold")
      .fontSize(12)
      .fillColor(brand.ink)
      .text(item.headlineStat, page.margin + 16, y + 30, {
        width: contentWidth() - 32,
        lineGap: 2,
      });
    const source = `${item.sourcePublisher}, ${item.sourceDate}`;
    doc
      .font("Helvetica")
      .fontSize(8)
      .fillColor(brand.muted)
      .text(source, page.margin + 16, y + 70, { width: contentWidth() - 32 });
    doc.y = y + 104;
  });
}

function matrixRows(doc, rows = []) {
  if (!rows.length) return;
  sectionHeading(doc, "Control matrix", "Illustrative mapping");
  rows.forEach((row) => {
    ensureSpace(doc, 122);
    const y = doc.y;
    doc.roundedRect(page.margin, y, contentWidth(), 102, 10).fillAndStroke("#f0fdfa", "#99f6e4");
    doc
      .font("Helvetica-Bold")
      .fontSize(10.2)
      .fillColor(brand.ink)
      .text(row.riskArea, page.margin + 14, y + 13, {
        width: contentWidth() - 28,
      });
    const labels = [
      ["Checkpoint", row.runtimeCheckpoint],
      ["Review", row.humanReviewTrigger],
      ["Evidence", row.evidenceCaptured],
      ["Owner", row.owner],
    ];
    let x = page.margin + 14;
    labels.forEach(([label, value]) => {
      doc
        .font("Helvetica-Bold")
        .fontSize(7.6)
        .fillColor("#0f766e")
        .text(label, x, y + 39, {
          width: 112,
        });
      doc
        .font("Helvetica")
        .fontSize(7.8)
        .fillColor(brand.body)
        .text(value, x, y + 53, {
          width: 112,
          lineGap: 1.8,
        });
      x += 120;
    });
    doc.y = y + 118;
  });
}

function selectedSources(doc, evidence) {
  sectionHeading(doc, "Selected sources");
  evidence.forEach((item) => {
    ensureSpace(doc, 50);
    doc
      .font("Helvetica-Bold")
      .fontSize(9)
      .fillColor(brand.ink)
      .text(`${item.sourcePublisher}: ${item.sourceName}`, { width: contentWidth(), lineGap: 2 });
    doc
      .font("Helvetica")
      .fontSize(8)
      .fillColor(brand.muted)
      .text(`${item.sourceDate}. ${item.sourceUrl}`, { width: contentWidth(), lineGap: 2 });
    doc.moveDown(0.45);
  });
}

function bodyPages(doc, pack, evidence) {
  addPageAccent(doc);
  sectionHeading(doc, "Overview", pack.audience);
  callout(
    doc,
    "Core position",
    "Corentis Shield is an AI checkpoint for regulated workflows.",
    "cyan"
  );
  paragraph(
    doc,
    "AI needs a checkpoint before it acts. Corentis provides it. Corentis Shield is designed to help teams check AI outputs before they reach customers, teams or live systems."
  );

  for (const section of pack.sections || []) {
    sectionHeading(doc, section.heading);
    paragraph(doc, section.body);
    bulletList(doc, section.bullets);
  }

  matrixRows(doc, pack.matrixRows);
  evidenceCards(doc, evidence);
  selectedSources(doc, evidence);

  sectionHeading(doc, "Next step");
  callout(doc, "Call to action", pack.ctaText, "teal");
  callout(
    doc,
    "Important note",
    pack.disclaimer ||
      "This document is for discussion and pilot exploration only. It does not constitute legal, regulatory or compliance advice.",
    "amber"
  );
}

function addFooters(doc) {
  const range = doc.bufferedPageRange();
  for (let index = range.start; index < range.start + range.count; index += 1) {
    doc.switchToPage(index);
    addFooter(doc, index + 1);
  }
}

function generatePack(pack) {
  const pdfPath = path.join(rootDir, "public", pack.publicPdfPath.replace(/^\//, ""));
  const evidence = evidenceByIds(pack.evidenceIds);
  const doc = new PDFDocument({ size: "A4", margin: page.margin, bufferPages: true });
  const stream = fs.createWriteStream(pdfPath);

  doc.pipe(stream);
  coverPage(doc, pack);
  doc.addPage();
  bodyPages(doc, pack, evidence);
  addFooters(doc);
  doc.end();

  return new Promise((resolve, reject) => {
    stream.on("finish", () => resolve(pdfPath));
    stream.on("error", reject);
  });
}

async function main() {
  fs.mkdirSync(packsDir, { recursive: true });
  const generated = [];

  for (const pack of resourcePacks) {
    generated.push(await generatePack(pack));
  }

  console.log("Generated resource packs:");
  generated.forEach((filePath) => console.log(`- ${path.relative(rootDir, filePath)}`));
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
