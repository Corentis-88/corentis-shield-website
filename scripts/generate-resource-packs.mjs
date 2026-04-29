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
  bottom: 54,
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
  const y = page.height - 62;
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

function sectionHeading(doc, heading, eyebrow, needed = 82) {
  ensureSpace(doc, needed);
  if (eyebrow) {
    doc
      .font("Helvetica-Bold")
      .fontSize(7.8)
      .fillColor("#0891b2")
      .text(eyebrow.toUpperCase(), page.margin, doc.y, { characterSpacing: 0.6 });
    doc.moveDown(0.35);
  }
  doc.font("Helvetica-Bold").fontSize(15).fillColor(brand.ink).text(heading, {
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
  ensureSpace(doc, 42);
  doc.font("Helvetica").fontSize(9.4).fillColor(brand.body).text(text, {
    width: contentWidth(),
    lineGap: 2.2,
  });
  doc.moveDown(0.5);
}

function bulletList(doc, items = []) {
  if (!items?.length) return;
  items.forEach((item) => {
    ensureSpace(doc, 22);
    const y = doc.y + 5;
    doc.circle(page.margin + 4, y, 2.2).fill(brand.cyan);
    doc
      .font("Helvetica")
      .fontSize(9)
      .fillColor(brand.body)
      .text(item, page.margin + 16, doc.y, {
        width: contentWidth() - 16,
        lineGap: 2,
      });
    doc.moveDown(0.18);
  });
  doc.moveDown(0.3);
}

function callout(doc, title, body, tone = "cyan") {
  ensureSpace(doc, 78);
  const y = doc.y;
  const fill = tone === "amber" ? brand.amberSoft : tone === "teal" ? brand.tealSoft : "#eff6ff";
  const stroke = tone === "amber" ? "#fed7aa" : tone === "teal" ? "#99f6e4" : "#bae6fd";
  doc.roundedRect(page.margin, y, contentWidth(), 62, 10).fillAndStroke(fill, stroke);
  doc
    .font("Helvetica-Bold")
    .fontSize(8.6)
    .fillColor(tone === "amber" ? "#9a3412" : "#075985")
    .text(title, page.margin + 16, y + 14, { width: contentWidth() - 32 });
  doc
    .font("Helvetica")
    .fontSize(8.7)
    .fillColor(brand.body)
    .text(body, page.margin + 16, y + 30, { width: contentWidth() - 32, lineGap: 1.8 });
  doc.y = y + 76;
}

function evidenceCards(doc, evidence) {
  sectionHeading(doc, "Evidence context", "Selected signals", 150);
  const gap = 12;
  const cardWidth = (contentWidth() - gap) / 2;
  let x = page.margin;
  let y = doc.y;
  evidence.slice(0, 6).forEach((item, index) => {
    if (index % 2 === 0) {
      ensureSpace(doc, 86);
      y = doc.y;
      x = page.margin;
    } else {
      x = page.margin + cardWidth + gap;
    }
    doc.roundedRect(x, y, cardWidth, 72, 10).fillAndStroke("#f8fafc", "#cbd5e1");
    doc
      .font("Helvetica-Bold")
      .fontSize(7)
      .fillColor("#0891b2")
      .text(item.shortLabel.toUpperCase(), x + 12, y + 11, { width: cardWidth - 24 });
    doc
      .font("Helvetica-Bold")
      .fontSize(9)
      .fillColor(brand.ink)
      .text(item.headlineStat, x + 12, y + 27, {
        width: cardWidth - 24,
        lineGap: 1.4,
      });
    const source = `${item.sourcePublisher}, ${item.sourceDate}`;
    doc
      .font("Helvetica")
      .fontSize(6.8)
      .fillColor(brand.muted)
      .text(source, x + 12, y + 58, { width: cardWidth - 24 });
    if (index % 2 === 1) {
      doc.y = y + 86;
    }
  });
  if (evidence.length % 2 === 1) {
    doc.y = y + 86;
  }
}

function matrixRows(doc, rows = []) {
  if (!rows.length) return;
  sectionHeading(doc, "Control matrix", "Illustrative mapping", 130);
  rows.forEach((row) => {
    ensureSpace(doc, 82);
    const y = doc.y;
    doc.roundedRect(page.margin, y, contentWidth(), 66, 10).fillAndStroke("#f0fdfa", "#99f6e4");
    doc
      .font("Helvetica-Bold")
      .fontSize(8.8)
      .fillColor(brand.ink)
      .text(row.riskArea, page.margin + 14, y + 13, {
        width: 150,
      });
    const labels = [
      ["Checkpoint", row.runtimeCheckpoint],
      ["Review", row.humanReviewTrigger],
      ["Evidence", row.evidenceCaptured],
    ];
    let x = page.margin + 170;
    labels.forEach(([label, value]) => {
      doc
        .font("Helvetica-Bold")
        .fontSize(6.8)
        .fillColor("#0f766e")
        .text(label, x, y + 13, {
          width: 92,
        });
      doc
        .font("Helvetica")
        .fontSize(6.8)
        .fillColor(brand.body)
        .text(value, x, y + 25, {
          width: 92,
          lineGap: 1.2,
        });
      x += 100;
    });
    doc.y = y + 78;
  });
}

function selectedSources(doc, evidence) {
  sectionHeading(doc, "Selected sources", undefined, 132);
  evidence.forEach((item) => {
    ensureSpace(doc, 34);
    const sourceReference = item.sourceUrl
      ? new URL(item.sourceUrl).hostname.replace(/^www\./, "")
      : "Source reference available";
    doc
      .font("Helvetica-Bold")
      .fontSize(7.6)
      .fillColor(brand.ink)
      .text(`${item.sourcePublisher}: ${item.sourceName}`, { width: contentWidth(), lineGap: 2 });
    doc
      .font("Helvetica")
      .fontSize(6.8)
      .fillColor(brand.muted)
      .text(`${item.sourceDate}. Source reference: ${sourceReference}`, {
        width: contentWidth(),
        lineGap: 2,
      });
    doc.moveDown(0.22);
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
    const expectedSectionHeight = section.bullets?.length ? 104 : 76;
    sectionHeading(doc, section.heading, undefined, expectedSectionHeight);
    paragraph(doc, section.body);
    bulletList(doc, section.bullets);
  }

  matrixRows(doc, pack.matrixRows);
  evidenceCards(doc, evidence);
  selectedSources(doc, evidence);

  sectionHeading(doc, "Next step", undefined, 190);
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
  // PDFKit can create overflow pages when footer text is added after the document is buffered.
  // The cover page already carries the Corentis Shield brand line, so keep generated packs
  // compact and avoid footer-induced blank pages.
  void doc;
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
