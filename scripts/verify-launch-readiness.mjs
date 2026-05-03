import fs from "node:fs";
import path from "node:path";

const rootDir = process.cwd();
const outDir = path.join(rootDir, "out");
const defaultMinPdfSize = 7 * 1024;
const fundingMinPdfSize = 10 * 1024;
const resourcePacks = JSON.parse(
  fs.readFileSync(path.join(rootDir, "content", "resource-packs.json"), "utf8")
);
const companyDetails = JSON.parse(
  fs.readFileSync(path.join(rootDir, "content", "company-details.json"), "utf8")
);

const routes = [
  "/",
  "/why-corentis",
  "/resources",
  "/controlbench-uk",
  "/partners",
  "/founder",
  "/design-partners",
  "/investors",
  "/assurance",
  "/walkthrough",
  "/contact",
  "/video-brief",
];

const fundingPdfSlugs = new Set([
  "funding-readiness-overview",
  "controlbench-rd-brief",
  "fca-supercharged-sandbox-brief",
  "ai-assurance-innovation-fund-readiness-brief",
  "sovereign-ai-strategic-memo",
  "90-day-funding-execution-plan",
]);

const pdfs = resourcePacks
  .filter((resource) => resource.status === "Available" && resource.publicPdfPath)
  .map((resource) => ({
    file: path.basename(resource.publicPdfPath),
    minSize: fundingPdfSlugs.has(resource.slug) ? fundingMinPdfSize : defaultMinPdfSize,
  }));

const resourceChooserLinks = [
  "/packs/corentis-investor-overview.pdf",
  "/packs/corentis-assurance-governance-summary.pdf",
  "/packs/corentis-design-partner-pack.pdf",
  "/packs/corentis-fca-supercharged-sandbox-brief.pdf",
  "/packs/corentis-runtime-checkpoint-explainer.pdf",
  "/packs/corentis-control-matrix-example.pdf",
  "/packs/corentis-sample-pilot-report.pdf",
  "/packs/corentis-funding-readiness-overview.pdf",
];

const htmlLinkChecks = [
  {
    label: "top resource chooser",
    route: "/resources",
    links: resourceChooserLinks,
  },
  {
    label: "resource download grid",
    route: "/resources",
    links: resourcePacks
      .filter((resource) => resource.status === "Available" && resource.publicPdfPath)
      .map((resource) => resource.publicPdfPath),
  },
  {
    label: "investors page",
    route: "/investors",
    links: ["/packs/corentis-investor-overview.pdf"],
  },
  {
    label: "design partners page",
    route: "/design-partners",
    links: ["/packs/corentis-design-partner-pack.pdf"],
  },
  {
    label: "assurance page",
    route: "/assurance",
    links: [
      "/packs/corentis-assurance-governance-summary.pdf",
      "/packs/corentis-control-matrix-example.pdf",
    ],
  },
];

const contactAnchors = ["design-partner", "investor", "assurance", "walkthrough"];

const companyHtmlChecks = [
  {
    label: "footer company details",
    route: "/",
    values: [
      companyDetails.companyName,
      companyDetails.companyNumber,
      companyDetails.registeredOfficeSingleLine,
      companyDetails.email,
    ],
  },
  {
    label: "contact page company details",
    route: "/contact",
    values: [
      companyDetails.companyName,
      companyDetails.companyNumber,
      companyDetails.registeredOfficeSingleLine,
      companyDetails.email,
    ],
  },
  {
    label: "funding page company details",
    route: "/funding",
    values: [
      companyDetails.companyName,
      companyDetails.companyNumber,
      companyDetails.registeredOfficeSingleLine,
      companyDetails.email,
    ],
  },
];

const failures = [];

function routeCandidates(route) {
  if (route === "/") {
    return [path.join(outDir, "index.html")];
  }

  const clean = route.replace(/^\//, "");
  return [path.join(outDir, clean, "index.html"), path.join(outDir, `${clean}.html`)];
}

function htmlPath(route) {
  return routeCandidates(route).find((candidate) => fs.existsSync(candidate));
}

function pass(message) {
  console.log(`PASS ${message}`);
}

function fail(message) {
  failures.push(message);
  console.error(`FAIL ${message}`);
}

if (!fs.existsSync(outDir)) {
  fail("out/ directory is missing. Run npm.cmd run build first.");
} else {
  pass("out/ directory exists");
}

for (const route of routes) {
  const found = routeCandidates(route).some((candidate) => fs.existsSync(candidate));
  if (found) {
    pass(`route exported: ${route}`);
  } else {
    fail(`route export missing: ${route}`);
  }
}

for (const check of htmlLinkChecks) {
  const filePath = htmlPath(check.route);
  if (!filePath) {
    fail(`cannot inspect missing route HTML: ${check.route}`);
    continue;
  }

  const html = fs.readFileSync(filePath, "utf8");
  for (const link of check.links) {
    if (html.includes(link)) {
      pass(`${check.label} links to ${link}`);
    } else {
      fail(`${check.label} missing link to ${link}`);
    }
  }
}

const contactHtmlPath = htmlPath("/contact");
if (contactHtmlPath) {
  const html = fs.readFileSync(contactHtmlPath, "utf8");
  for (const anchor of contactAnchors) {
    if (html.includes(`id="${anchor}"`)) {
      pass(`/contact includes #${anchor}`);
    } else {
      fail(`/contact missing #${anchor}`);
    }
  }
}

for (const check of companyHtmlChecks) {
  const filePath = htmlPath(check.route);
  if (!filePath) {
    fail(`cannot inspect missing route HTML for company details: ${check.route}`);
    continue;
  }

  const html = fs.readFileSync(filePath, "utf8");
  for (const value of check.values) {
    if (html.includes(value)) {
      pass(`${check.label} includes ${value}`);
    } else {
      fail(`${check.label} missing ${value}`);
    }
  }
}

for (const pdf of pdfs) {
  const filePath = path.join(outDir, "packs", pdf.file);
  if (!fs.existsSync(filePath)) {
    fail(`PDF missing from out/packs: ${pdf.file}`);
    continue;
  }

  const { size } = fs.statSync(filePath);
  if (size <= pdf.minSize) {
    fail(`PDF appears too small (${size} bytes, expected > ${pdf.minSize}): ${pdf.file}`);
  } else {
    pass(`PDF exported: ${pdf.file} (${size} bytes)`);
  }
}

for (const staticFile of ["sitemap.xml", "robots.txt", "og-corentis-shield.svg"]) {
  const filePath = path.join(outDir, staticFile);
  if (fs.existsSync(filePath)) {
    pass(`static launch asset exported: ${staticFile}`);
  } else {
    fail(`static launch asset missing: ${staticFile}`);
  }
}

if (failures.length > 0) {
  console.error("\nLaunch readiness verification failed.");
  console.error("Next steps:");
  console.error("1. Run npm.cmd run generate:packs");
  console.error("2. Run npm.cmd run build");
  console.error("3. Re-run npm.cmd run verify:launch");
  process.exit(1);
}

console.log("\nLaunch readiness verification passed.");
