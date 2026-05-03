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
const companyDetails = JSON.parse(
  fs.readFileSync(path.join(rootDir, "content", "company-details.json"), "utf8")
);

const page = {
  width: 595.28,
  height: 841.89,
  marginLeft: 54,
  marginRight: 54,
  marginTop: 54,
  marginBottom: 84,
};
page.margin = page.marginLeft;
page.bottom = page.marginBottom;

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
  return page.width - page.marginLeft - page.marginRight;
}

function maxX() {
  return page.width - page.marginRight;
}

function measureTextHeight(doc, text, width, fontSize, options = {}) {
  const font = options.bold
    ? "Helvetica-Bold"
    : options.oblique
      ? "Helvetica-Oblique"
      : "Helvetica";
  return doc
    .font(font)
    .fontSize(fontSize)
    .heightOfString(String(text || ""), {
      width: Math.min(width, contentWidth()),
      lineGap: options.lineGap ?? 0,
      align: options.align,
    });
}

function safeText(doc, text, x = page.marginLeft, y = doc.y, width = contentWidth(), options = {}) {
  markBodyContent(doc);
  const safeX = Math.max(x, page.marginLeft);
  const safeWidth = Math.max(1, Math.min(width, maxX() - safeX));
  doc.text(String(text || ""), safeX, y, { width: safeWidth, ...options });
  return doc.y;
}

function drawWrappedText(doc, text, x, y, width, options = {}) {
  const font = options.bold
    ? "Helvetica-Bold"
    : options.oblique
      ? "Helvetica-Oblique"
      : "Helvetica";
  doc
    .font(font)
    .fontSize(options.fontSize ?? 9)
    .fillColor(options.color ?? brand.body);
  return safeText(doc, text, x, y, width, {
    lineGap: options.lineGap ?? 1.6,
    align: options.align,
  });
}

function drawVerticalCard(doc, { title, body, meta, tone = "neutral", minHeight = 56 }) {
  const padding = 14;
  const gap = 7;
  const x = page.marginLeft;
  const width = contentWidth();
  const innerWidth = width - padding * 2;
  const titleHeight = title ? measureTextHeight(doc, title, innerWidth, 8.8, { bold: true }) : 0;
  const bodyHeight = body ? measureTextHeight(doc, body, innerWidth, 8.2, { lineGap: 1.5 }) : 0;
  const metaHeight = meta ? measureTextHeight(doc, meta, innerWidth, 6.9, { lineGap: 1.2 }) : 0;
  const boxHeight = Math.max(
    minHeight,
    padding * 2 +
      titleHeight +
      (title && body ? gap : 0) +
      bodyHeight +
      (meta ? gap : 0) +
      metaHeight
  );
  ensureSpace(doc, boxHeight + 14);
  markBodyContent(doc);
  const y = doc.y;
  const fill = tone === "teal" ? brand.tealSoft : tone === "amber" ? brand.amberSoft : "#f8fafc";
  const stroke = tone === "teal" ? "#99f6e4" : tone === "amber" ? "#fed7aa" : "#cbd5e1";
  doc.roundedRect(x, y, width, boxHeight, 10).fillAndStroke(fill, stroke);
  let textY = y + padding;
  if (title) {
    textY = drawWrappedText(doc, title, x + padding, textY, innerWidth, {
      bold: true,
      fontSize: 8.8,
      color: brand.ink,
      lineGap: 1.2,
    });
    textY += gap;
  }
  if (body) {
    textY = drawWrappedText(doc, body, x + padding, textY, innerWidth, {
      fontSize: 8.2,
      color: brand.body,
      lineGap: 1.5,
    });
    textY += gap;
  }
  if (meta) {
    drawWrappedText(doc, meta, x + padding, textY, innerWidth, {
      fontSize: 6.9,
      color: brand.muted,
      lineGap: 1.2,
    });
  }
  doc.y = y + boxHeight + 14;
  doc.x = page.marginLeft;
  return doc.y;
}

function ensureSpace(doc, needed = 90) {
  if (doc.y + needed > page.height - page.marginBottom) {
    doc.addPage();
    prepareBodyPage(doc);
  }
}

function prepareBodyPage(doc) {
  doc._corentisBodyPageDecorated = false;
  doc._corentisBodyPageHasContent = false;
  doc.x = page.marginLeft;
  doc.y = page.marginTop;
}

function markBodyContent(doc) {
  if (doc._corentisBodyPageDecorated === false) {
    const oldX = doc.x;
    const oldY = doc.y;
    doc.rect(0, 0, page.width, 8).fill(brand.cyan);
    addFooter(doc);
    doc.x = oldX;
    doc.y = oldY;
    doc._corentisBodyPageDecorated = true;
  }
  if (doc._corentisBodyPageHasContent === false) {
    doc._corentisBodyPageHasContent = true;
  }
}

function addFooter(doc, color = brand.muted) {
  const oldX = doc.x;
  const oldY = doc.y;
  const y = page.height - 68;
  const footerText = `${companyDetails.companyName} | Company No. ${companyDetails.companyNumber} | ${companyDetails.email}`;
  doc.font("Helvetica").fontSize(6.7).fillColor(color).text(footerText, page.marginLeft, y, {
    width: contentWidth(),
    align: "center",
    lineBreak: false,
  });
  doc.x = oldX;
  doc.y = oldY;
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
    .text("Generated April 2026", page.marginLeft, 728)
    .text("For discussion and pilot exploration only", page.marginLeft, 744);
  addFooter(doc, "#94a3b8");
}

function sectionHeading(doc, heading, eyebrow, needed = 82) {
  ensureSpace(doc, needed);
  markBodyContent(doc);
  doc.x = page.marginLeft;
  if (eyebrow) {
    doc
      .font("Helvetica-Bold")
      .fontSize(7.8)
      .fillColor("#0891b2")
      .text(eyebrow.toUpperCase(), page.marginLeft, doc.y, {
        width: contentWidth(),
        characterSpacing: 0.6,
      });
    doc.moveDown(0.35);
  }
  doc.font("Helvetica-Bold").fontSize(15).fillColor(brand.ink);
  safeText(doc, heading, page.marginLeft, doc.y, contentWidth(), {
    width: contentWidth(),
    lineGap: 2,
  });
  doc.moveDown(0.35);
  doc.moveTo(page.marginLeft, doc.y).lineTo(maxX(), doc.y).strokeColor("#bae6fd").stroke();
  doc.moveDown(0.8);
  doc.x = page.marginLeft;
}

function paragraph(doc, text) {
  if (!text) return;
  ensureSpace(doc, 42);
  doc.font("Helvetica").fontSize(9.4).fillColor(brand.body);
  safeText(doc, text, page.marginLeft, doc.y, contentWidth(), {
    width: contentWidth(),
    lineGap: 2.2,
  });
  doc.moveDown(0.5);
  doc.x = page.marginLeft;
}

function bulletList(doc, items = []) {
  if (!items?.length) return;
  items.forEach((item) => {
    const textHeight = measureTextHeight(doc, item, contentWidth() - 20, 9, { lineGap: 2 });
    ensureSpace(doc, Math.max(24, textHeight + 10));
    const y = doc.y + 5;
    markBodyContent(doc);
    doc.circle(page.marginLeft + 4, y, 2.2).fill(brand.cyan);
    drawWrappedText(doc, item, page.marginLeft + 16, doc.y, contentWidth() - 20, {
      fontSize: 9,
      color: brand.body,
      lineGap: 2,
    });
    doc.moveDown(0.18);
  });
  doc.moveDown(0.3);
  doc.x = page.marginLeft;
}

function flowDiagram(doc, title, steps = []) {
  if (!steps.length) return;
  sectionHeading(doc, title, "Visual summary", 132);
  const cardGap = 18;
  const cardWidth = contentWidth();
  const innerWidth = cardWidth - 28;
  const heights = steps.map((step) =>
    Math.max(44, measureTextHeight(doc, step, innerWidth, 8.4, { bold: true, lineGap: 1.2 }) + 26)
  );
  const totalHeight =
    heights.reduce((sum, height) => sum + height, 0) + cardGap * (steps.length - 1);
  ensureSpace(doc, totalHeight + 14);
  markBodyContent(doc);
  let y = doc.y;
  steps.forEach((step, index) => {
    const x = page.marginLeft;
    const cardHeight = heights[index];
    doc.roundedRect(x, y, cardWidth, cardHeight, 8).fillAndStroke("#ecfeff", "#67e8f9");
    drawWrappedText(doc, step, x + 14, y + 13, innerWidth, {
      bold: true,
      fontSize: 8.4,
      color: "#075985",
      align: "center",
      lineGap: 1.2,
    });
    if (index < steps.length - 1) {
      const lineX = x + cardWidth / 2;
      doc
        .moveTo(lineX, y + cardHeight + 2)
        .lineTo(lineX, y + cardHeight + cardGap - 2)
        .strokeColor("#0891b2")
        .lineWidth(1)
        .stroke();
    }
    y += cardHeight + cardGap;
  });
  doc.y = y - cardGap + 14;
  doc.x = page.marginLeft;
}

function baselineCheckpointDiagram(doc) {
  sectionHeading(doc, "Baseline vs checkpoint", "Evaluation shape", 140);
  const columns = [
    {
      title: "Baseline",
      body: "AI proposes output or action without a runtime checkpoint. Review points and evidence gaps are assessed afterwards.",
      fill: "#fff7ed",
      stroke: "#fed7aa",
    },
    {
      title: "Checkpointed",
      body: "AI proposes output or action. Corentis checks controls, pauses risky items, routes human review and records evidence before action.",
      fill: "#ecfdf5",
      stroke: "#99f6e4",
    },
  ];
  columns.forEach((column) => {
    drawVerticalCard(doc, {
      title: column.title,
      body: column.body,
      tone: column.title === "Baseline" ? "amber" : "teal",
      minHeight: 72,
    });
  });
  doc.x = page.marginLeft;
}

function callout(doc, title, body, tone = "cyan") {
  drawVerticalCard(doc, { title, body, tone, minHeight: 62 });
}

function evidenceCards(doc, evidence) {
  if (!evidence.length) return;
  sectionHeading(doc, "Evidence context", "Selected signals", 150);
  evidence.slice(0, 6).forEach((item, index) => {
    const x = page.marginLeft;
    const title = item.shortLabel.toUpperCase();
    const source = `${item.sourcePublisher}, ${item.sourceDate}`;
    const titleHeight = doc
      .font("Helvetica-Bold")
      .fontSize(7.4)
      .heightOfString(title, { width: contentWidth() - 28 });
    const statHeight = doc
      .font("Helvetica-Bold")
      .fontSize(9.2)
      .heightOfString(item.headlineStat, { width: contentWidth() - 28, lineGap: 1.4 });
    const sourceHeight = doc
      .font("Helvetica")
      .fontSize(7)
      .heightOfString(source, { width: contentWidth() - 28, lineGap: 1.2 });
    const boxHeight = Math.max(72, titleHeight + statHeight + sourceHeight + 42);
    ensureSpace(doc, boxHeight + 12);
    markBodyContent(doc);
    const y = doc.y;
    doc.roundedRect(x, y, contentWidth(), boxHeight, 10).fillAndStroke("#f8fafc", "#cbd5e1");
    doc
      .font("Helvetica-Bold")
      .fontSize(7.4)
      .fillColor("#0891b2")
      .text(title, x + 14, y + 12, { width: contentWidth() - 28 });
    doc
      .font("Helvetica-Bold")
      .fontSize(9.2)
      .fillColor(brand.ink)
      .text(item.headlineStat, x + 14, y + 12 + titleHeight + 7, {
        width: contentWidth() - 28,
        lineGap: 1.4,
      });
    doc
      .font("Helvetica")
      .fontSize(7)
      .fillColor(brand.muted)
      .text(source, x + 14, y + 12 + titleHeight + 7 + statHeight + 8, {
        width: contentWidth() - 28,
        lineGap: 1.2,
      });
    doc.y = y + boxHeight + (index === evidence.length - 1 ? 0 : 12);
    doc.x = page.marginLeft;
  });
}

function matrixRows(doc, rows = []) {
  if (!rows.length) return;
  sectionHeading(doc, "Control matrix", "Illustrative operational mapping", 160);
  rows.forEach((row) => {
    const fields = [
      ["Policy intent", row.policyIntent],
      ["Runtime checkpoint", row.runtimeCheckpoint],
      ["Human review trigger", row.humanReviewTrigger],
      ["Evidence captured", row.evidenceCaptured],
      ["Owner / reviewer", row.owner],
      ["Success measure", row.successMeasure],
    ].filter(([, value]) => value);
    const innerWidth = contentWidth() - 28;
    const fieldHeights = fields.map(([label, value]) => {
      const labelHeight = measureTextHeight(doc, label, innerWidth, 7.1, { bold: true });
      const valueHeight = measureTextHeight(doc, value, innerWidth, 7.6, { lineGap: 1.3 });
      return labelHeight + valueHeight + 9;
    });
    const titleHeight = measureTextHeight(doc, row.riskArea, innerWidth, 9, { bold: true });
    const boxHeight = 34 + titleHeight + fieldHeights.reduce((sum, height) => sum + height, 0);
    ensureSpace(doc, boxHeight + 16);
    markBodyContent(doc);
    const y = doc.y;
    doc
      .roundedRect(page.marginLeft, y, contentWidth(), boxHeight, 10)
      .fillAndStroke("#f0fdfa", "#99f6e4");
    let fieldY = drawWrappedText(doc, row.riskArea, page.marginLeft + 14, y + 14, innerWidth, {
      bold: true,
      fontSize: 9,
      color: brand.ink,
      lineGap: 1.2,
    });
    fieldY += 9;
    fields.forEach(([label, value], index) => {
      const rowStart = fieldY;
      let textY = drawWrappedText(doc, label, page.marginLeft + 14, rowStart, innerWidth, {
        bold: true,
        fontSize: 7.1,
        color: "#0f766e",
      });
      drawWrappedText(doc, value, page.marginLeft + 14, textY + 2, innerWidth, {
        fontSize: 7.6,
        color: brand.body,
        lineGap: 1.3,
      });
      fieldY = rowStart + fieldHeights[index];
    });
    doc.y = y + boxHeight + 16;
    doc.x = page.marginLeft;
  });
}

function verticalBulletCards(doc, heading, bullets = [], eyebrow = "Structured detail") {
  if (!bullets.length) return;
  sectionHeading(doc, heading, eyebrow, 130);
  bullets.forEach((item) => {
    const textHeight = doc
      .font("Helvetica")
      .fontSize(8)
      .heightOfString(item, { width: contentWidth() - 28, lineGap: 1.5 });
    const boxHeight = Math.max(48, textHeight + 26);
    ensureSpace(doc, boxHeight + 14);
    markBodyContent(doc);
    const y = doc.y;
    doc
      .roundedRect(page.marginLeft, y, contentWidth(), boxHeight, 10)
      .fillAndStroke("#f8fafc", "#cbd5e1");
    drawWrappedText(doc, item, page.marginLeft + 14, y + 14, contentWidth() - 28, {
      fontSize: 8,
      color: brand.body,
      lineGap: 1.5,
    });
    doc.y = y + boxHeight + 14;
    doc.x = page.marginLeft;
  });
}

function selectedSources(doc, evidence) {
  if (!evidence.length) return;
  sectionHeading(doc, "Selected sources", undefined, 132);
  evidence.forEach((item) => {
    const sourceReference = item.sourceUrl
      ? new URL(item.sourceUrl).hostname.replace(/^www\./, "")
      : "Source reference available";
    const heading = `${item.sourcePublisher}: ${item.sourceName}`;
    const detail = `Date/status: ${item.sourceDate}. Source domain: ${sourceReference}.`;
    const note = item.sourceNote || item.caution;
    const needed =
      measureTextHeight(doc, heading, contentWidth(), 7.6, { bold: true, lineGap: 2 }) +
      measureTextHeight(doc, detail, contentWidth(), 6.8, { lineGap: 2 }) +
      (note ? measureTextHeight(doc, note, contentWidth(), 6.6, { lineGap: 1.8 }) : 0) +
      16;
    ensureSpace(doc, needed);
    markBodyContent(doc);
    doc
      .font("Helvetica-Bold")
      .fontSize(7.6)
      .fillColor(brand.ink)
      .text(heading, page.marginLeft, doc.y, {
        width: contentWidth(),
        lineGap: 2,
      });
    doc
      .font("Helvetica")
      .fontSize(6.8)
      .fillColor(brand.muted)
      .text(detail, page.marginLeft, doc.y, {
        width: contentWidth(),
        lineGap: 2,
      });
    if (note) {
      doc
        .font("Helvetica")
        .fontSize(6.6)
        .fillColor(brand.muted)
        .text(note, page.marginLeft, doc.y, {
          width: contentWidth(),
          lineGap: 1.8,
        });
    }
    doc.moveDown(0.22);
    doc.x = page.marginLeft;
  });
}

function companyDetailsNote(doc) {
  sectionHeading(doc, "Company details and next step", undefined, 130);
  const body = [
    `Corentis Shield is provided by ${companyDetails.companyName}.`,
    `Company No. ${companyDetails.companyNumber}.`,
    `Company type: ${companyDetails.companyType}.`,
    `Registered office: ${companyDetails.registeredOfficeSingleLine}.`,
    `Contact: ${companyDetails.email}.`,
  ].join(" ");
  paragraph(doc, body);
  ensureSpace(doc, 30);
  doc.font("Helvetica-Bold").fontSize(10).fillColor("#075985");
  safeText(doc, "Start a Conversation", page.marginLeft, doc.y, contentWidth(), {
    link: "https://corentis.co.uk/contact",
    underline: true,
  });
  doc.x = page.marginLeft;
}

function bodyPages(doc, pack, evidence) {
  prepareBodyPage(doc);
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
  flowDiagram(doc, "Checkpoint flow", [
    "AI proposes output/action",
    "Corentis checkpoint",
    "Human review",
    "Evidence logged",
  ]);
  if (
    [
      "investor-overview",
      "funding-readiness-overview",
      "controlbench-rd-brief",
      "fca-supercharged-sandbox-brief",
      "ai-assurance-innovation-fund-readiness-brief",
    ].includes(pack.slug)
  ) {
    baselineCheckpointDiagram(doc);
  }

  for (const section of pack.sections || []) {
    if (
      [
        "Sample scenario table",
        "Scenario outcome table",
        "Owner/action/checkpoint plan",
        "Workstreams",
        "Decision gates",
      ].includes(section.heading)
    ) {
      paragraph(doc, section.body);
      verticalBulletCards(doc, section.heading, section.bullets);
      continue;
    }
    const expectedSectionHeight = section.bullets?.length ? 104 : 76;
    sectionHeading(doc, section.heading, undefined, expectedSectionHeight);
    paragraph(doc, section.body);
    bulletList(doc, section.bullets);
  }

  matrixRows(doc, pack.matrixRows);
  evidenceCards(doc, evidence);
  selectedSources(doc, evidence);
  companyDetailsNote(doc);
}

function addFooters(doc) {
  // PDFKit can create overflow pages when footer text is added after the document is buffered.
  // Keep generated packs compact and avoid footer-induced blank pages; the cover and page accent
  // carry the Corentis Shield brand line.
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
