import fs from "node:fs";
import path from "node:path";

const rootDir = process.cwd();
const outDir = path.join(rootDir, "out");
const minPdfSize = 10 * 1024;

const routes = [
  "/",
  "/why-corentis",
  "/methodology",
  "/pilot-report",
  "/resources",
  "/partners-and-funders",
  "/founder",
  "/design-partners",
  "/investors",
  "/assurance",
  "/walkthrough",
  "/contact",
  "/video-brief",
];

const pdfs = [
  "corentis-investor-overview.pdf",
  "corentis-assurance-governance-summary.pdf",
  "corentis-design-partner-pack.pdf",
  "corentis-sample-pilot-report.pdf",
  "corentis-control-matrix-example.pdf",
  "corentis-runtime-checkpoint-explainer.pdf",
];

const htmlLinkChecks = [
  {
    route: "/resources",
    links: [
      "/packs/corentis-investor-overview.pdf",
      "/packs/corentis-assurance-governance-summary.pdf",
      "/packs/corentis-design-partner-pack.pdf",
      "/packs/corentis-sample-pilot-report.pdf",
      "/packs/corentis-control-matrix-example.pdf",
      "/packs/corentis-runtime-checkpoint-explainer.pdf",
    ],
  },
  { route: "/investors", links: ["/packs/corentis-investor-overview.pdf"] },
  { route: "/design-partners", links: ["/packs/corentis-design-partner-pack.pdf"] },
  {
    route: "/assurance",
    links: [
      "/packs/corentis-assurance-governance-summary.pdf",
      "/packs/corentis-control-matrix-example.pdf",
    ],
  },
  {
    route: "/pilot-report",
    links: [
      "/packs/corentis-sample-pilot-report.pdf",
      "/packs/corentis-control-matrix-example.pdf",
    ],
  },
];

const contactAnchors = ["design-partner", "investor", "assurance", "walkthrough"];

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
      pass(`${check.route} links to ${link}`);
    } else {
      fail(`${check.route} missing link to ${link}`);
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

for (const pdf of pdfs) {
  const filePath = path.join(outDir, "packs", pdf);
  if (!fs.existsSync(filePath)) {
    fail(`PDF missing from out/packs: ${pdf}`);
    continue;
  }

  const { size } = fs.statSync(filePath);
  if (size <= minPdfSize) {
    fail(`PDF appears too small (${size} bytes): ${pdf}`);
  } else {
    pass(`PDF exported: ${pdf} (${size} bytes)`);
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
