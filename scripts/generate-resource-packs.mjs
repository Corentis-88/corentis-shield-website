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
const fundingRoutes = JSON.parse(
  fs.readFileSync(path.join(rootDir, "content", "funding-routes.json"), "utf8")
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

function fundingRoutesByIds(ids = []) {
  return ids.map((id) => fundingRoutes.find((item) => item.id === id)).filter(Boolean);
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

function flowDiagram(doc, title, steps = []) {
  if (!steps.length) return;
  sectionHeading(doc, title, "Visual summary", 132);
  const gap = 8;
  const cardWidth = (contentWidth() - gap * (steps.length - 1)) / steps.length;
  ensureSpace(doc, 76);
  const y = doc.y;
  steps.forEach((step, index) => {
    const x = page.margin + index * (cardWidth + gap);
    doc.roundedRect(x, y, cardWidth, 48, 8).fillAndStroke("#ecfeff", "#67e8f9");
    doc
      .font("Helvetica-Bold")
      .fontSize(6.8)
      .fillColor("#075985")
      .text(step, x + 8, y + 13, {
        width: cardWidth - 16,
        align: "center",
        lineGap: 1.1,
      });
    if (index < steps.length - 1) {
      doc
        .font("Helvetica-Bold")
        .fontSize(10)
        .fillColor("#0891b2")
        .text("→", x + cardWidth + 1.5, y + 18, { width: gap - 3, align: "center" });
    }
  });
  doc.y = y + 66;
}

function baselineCheckpointDiagram(doc) {
  sectionHeading(doc, "Baseline vs checkpoint", "Evaluation shape", 140);
  ensureSpace(doc, 116);
  const y = doc.y;
  const gap = 14;
  const colWidth = (contentWidth() - gap) / 2;
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
  columns.forEach((column, index) => {
    const x = page.margin + index * (colWidth + gap);
    doc.roundedRect(x, y, colWidth, 86, 10).fillAndStroke(column.fill, column.stroke);
    doc
      .font("Helvetica-Bold")
      .fontSize(9)
      .fillColor(brand.ink)
      .text(column.title, x + 14, y + 14, { width: colWidth - 28 });
    doc
      .font("Helvetica")
      .fontSize(8.1)
      .fillColor(brand.body)
      .text(column.body, x + 14, y + 33, { width: colWidth - 28, lineGap: 1.5 });
  });
  doc.y = y + 104;
}

function callout(doc, title, body, tone = "cyan") {
  const innerWidth = contentWidth() - 32;
  const bodyHeight = doc
    .font("Helvetica")
    .fontSize(8.7)
    .heightOfString(body, { width: innerWidth, lineGap: 1.8 });
  const boxHeight = Math.max(62, 34 + bodyHeight + 16);
  ensureSpace(doc, boxHeight + 14);
  const y = doc.y;
  const fill = tone === "amber" ? brand.amberSoft : tone === "teal" ? brand.tealSoft : "#eff6ff";
  const stroke = tone === "amber" ? "#fed7aa" : tone === "teal" ? "#99f6e4" : "#bae6fd";
  doc.roundedRect(page.margin, y, contentWidth(), boxHeight, 10).fillAndStroke(fill, stroke);
  doc
    .font("Helvetica-Bold")
    .fontSize(8.6)
    .fillColor(tone === "amber" ? "#9a3412" : "#075985")
    .text(title, page.margin + 16, y + 14, { width: innerWidth });
  doc
    .font("Helvetica")
    .fontSize(8.7)
    .fillColor(brand.body)
    .text(body, page.margin + 16, y + 30, { width: innerWidth, lineGap: 1.8 });
  doc.y = y + boxHeight + 14;
}

function evidenceCards(doc, evidence) {
  if (!evidence.length) return;
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
    const fieldHeights = fields.map(([, value]) => {
      const valueHeight = doc
        .font("Helvetica")
        .fontSize(7.6)
        .heightOfString(value, { width: contentWidth() - 170, lineGap: 1.3 });
      return Math.max(18, valueHeight + 5);
    });
    const boxHeight = 40 + fieldHeights.reduce((sum, height) => sum + height, 0);
    ensureSpace(doc, boxHeight + 16);
    const y = doc.y;
    doc
      .roundedRect(page.margin, y, contentWidth(), boxHeight, 10)
      .fillAndStroke("#f0fdfa", "#99f6e4");
    doc
      .font("Helvetica-Bold")
      .fontSize(9)
      .fillColor(brand.ink)
      .text(row.riskArea, page.margin + 14, y + 14, { width: contentWidth() - 28 });
    let fieldY = y + 36;
    fields.forEach(([label, value], index) => {
      doc
        .font("Helvetica-Bold")
        .fontSize(7.1)
        .fillColor("#0f766e")
        .text(label, page.margin + 14, fieldY, { width: 128 });
      doc
        .font("Helvetica")
        .fontSize(7.6)
        .fillColor(brand.body)
        .text(value, page.margin + 160, fieldY, {
          width: contentWidth() - 174,
          lineGap: 1.3,
        });
      fieldY += fieldHeights[index];
    });
    doc.y = y + boxHeight + 16;
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
    const y = doc.y;
    doc
      .roundedRect(page.margin, y, contentWidth(), boxHeight, 10)
      .fillAndStroke("#f8fafc", "#cbd5e1");
    doc
      .font("Helvetica")
      .fontSize(8)
      .fillColor(brand.body)
      .text(item, page.margin + 14, y + 14, { width: contentWidth() - 28, lineGap: 1.5 });
    doc.y = y + boxHeight + 14;
  });
}

function selectedSources(doc, evidence) {
  if (!evidence.length) return;
  sectionHeading(doc, "Selected sources", undefined, 132);
  evidence.forEach((item) => {
    ensureSpace(doc, 48);
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
      .text(`Date/status: ${item.sourceDate}. Source domain: ${sourceReference}.`, {
        width: contentWidth(),
        lineGap: 2,
      });
    if (item.sourceNote || item.caution) {
      doc
        .font("Helvetica")
        .fontSize(6.6)
        .fillColor(brand.muted)
        .text(item.sourceNote || item.caution, { width: contentWidth(), lineGap: 1.8 });
    }
    doc.moveDown(0.22);
  });
}

function fundingRouteCards(doc, routes) {
  if (!routes.length) return;
  sectionHeading(doc, "Funding route references", "Current route context", 190);
  routes
    .sort((a, b) => a.priorityOrder - b.priorityOrder)
    .forEach((route) => {
      ensureSpace(doc, 190);
      const y = doc.y;
      const sourceReference = route.officialSourceUrl
        ? new URL(route.officialSourceUrl).hostname.replace(/^www\./, "")
        : "Source reference available";
      const importantDates =
        route.opens === route.closes
          ? route.opens
          : `Opens: ${route.opens}. Closes: ${route.closes}.`;
      const rows = [
        ["Status", route.status],
        ["Important dates", importantDates],
        ["Corentis fit", route.corentisFit],
        ["Recommended next action", route.immediateAction],
        [
          "Source reference",
          `${sourceReference}. Applicants should confirm live eligibility and deadlines before submission.`,
        ],
      ];
      const rowHeights = rows.map(([label, value]) => {
        const valueHeight = doc
          .font("Helvetica")
          .fontSize(7.7)
          .heightOfString(value, { width: contentWidth() - 172, lineGap: 1.4 });
        return Math.max(18, valueHeight + 5);
      });
      const framingHeight = doc
        .font("Helvetica")
        .fontSize(7.8)
        .heightOfString(route.recommendedCorentisFraming, {
          width: contentWidth() - 28,
          lineGap: 1.5,
        });
      const boxHeight = 48 + framingHeight + rowHeights.reduce((sum, height) => sum + height, 0);

      ensureSpace(doc, boxHeight + 18);
      doc
        .roundedRect(page.margin, y, contentWidth(), boxHeight, 10)
        .fillAndStroke("#f8fafc", "#cbd5e1");
      doc
        .font("Helvetica-Bold")
        .fontSize(9.4)
        .fillColor(brand.ink)
        .text(route.name, page.margin + 14, y + 14, { width: contentWidth() - 28 });
      doc
        .font("Helvetica")
        .fontSize(7.8)
        .fillColor(brand.body)
        .text(route.recommendedCorentisFraming, page.margin + 14, y + 31, {
          width: contentWidth() - 28,
          lineGap: 1.5,
        });
      let rowY = doc.y + 7;
      rows.forEach(([label, value], index) => {
        const rowHeight = rowHeights[index];
        doc
          .font("Helvetica-Bold")
          .fontSize(7.2)
          .fillColor("#075985")
          .text(label, page.margin + 14, rowY, { width: 130 });
        doc
          .font("Helvetica")
          .fontSize(7.7)
          .fillColor(brand.body)
          .text(value, page.margin + 160, rowY, {
            width: contentWidth() - 174,
            lineGap: 1.4,
          });
        rowY += rowHeight;
      });
      doc.y = y + boxHeight + 18;
    });
}

function fundingSources(doc, routes) {
  if (!routes.length) return;
  sectionHeading(doc, "Funding source references", undefined, 120);
  routes.forEach((route) => {
    ensureSpace(doc, 44);
    const sourceReference = route.officialSourceUrl
      ? new URL(route.officialSourceUrl).hostname.replace(/^www\./, "")
      : "Source reference available";
    doc
      .font("Helvetica-Bold")
      .fontSize(7.6)
      .fillColor(brand.ink)
      .text(`${route.name}: ${route.status}`, { width: contentWidth(), lineGap: 1.8 });
    doc
      .font("Helvetica")
      .fontSize(6.8)
      .fillColor(brand.muted)
      .text(
        `Type/status: ${route.fundingType}. Source domain: ${sourceReference}. Applicants should confirm live eligibility and deadlines before submission.`,
        {
          width: contentWidth(),
          lineGap: 1.8,
        }
      );
    doc.moveDown(0.2);
  });
}

function bodyPages(doc, pack, evidence) {
  const routeRefs = fundingRoutesByIds(pack.fundingRouteIds);
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
        "Work packages",
        "Sample scenario table",
        "Scenario outcome table",
        "Owner/action/checkpoint plan",
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
  fundingRouteCards(doc, routeRefs);
  evidenceCards(doc, evidence);
  selectedSources(doc, evidence);
  fundingSources(doc, routeRefs);

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
