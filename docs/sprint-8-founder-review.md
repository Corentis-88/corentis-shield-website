# Sprint 8A founder review

This review pack summarises the current uncommitted launch batch before any commit, push or
Cloudflare deployment. No Git staging, commit, push, deployment, Formspree submission, outreach
email or LinkedIn post has been performed.

## 1. Git state

- Current branch: `main`
- Latest commit: `f97b3ef Refine funding and partner positioning`
- Remote:
  - `origin`: `https://github.com/Corentis-88/corentis-shield-website.git`
- Working tree: uncommitted changes are present
- Suggested commit message: `Launch harden Corentis Shield website`

## 2. Change volume and categories

Tracked modified files:

- 15 modified tracked files in `git diff --stat`
- Approximate tracked diff: 652 insertions and 148 deletions

Untracked launch-batch files include new routes, components, content, PDFs, docs, public launch
assets and scripts from Sprints 1-8A.

## 3. Major changes by sprint

Sprint 1 structure:

- Added funding-readiness site structure.
- Added audience and resource routes while preserving the existing website.

Sprint 2 PDFs/evidence:

- Added evidence/statistics data.
- Added resource-pack data.
- Added PDFKit generation.
- Added six downloadable PDFs in `public/packs`.

Sprint 3 visual proof:

- Added proof components for checkpoint flows, before/after control, pilot report previews and
  control matrix previews.
- Improved methodology, pilot report and resource surfaces.
- Added `/video-brief`.

Sprint 4 audience journeys:

- Added `/design-partners`, `/investors`, `/assurance` and `/walkthrough`.
- Improved contact anchors and CTA routing.

Sprint 5 launch/outreach docs:

- Added launch-readiness docs.
- Added `verify:launch`.
- Added initial outreach drafts and launch checklist.

Sprint 6 SEO/static launch hardening:

- Added `launch:check`.
- Improved static export verification.
- Added metadata, `robots.txt`, `sitemap.xml` and `og-corentis-shield.svg`.
- Added first-batch, first-send and video execution materials.

Sprint 7 deployment/outreach execution docs:

- Added deployment report.
- Added Cloudflare runbook.
- Added live-site test checklist.
- Added first 10 targets template, final first-send messages, LinkedIn launch copy and first video
  build plan.

Sprint 8A founder review:

- Added this founder review pack.
- Added manual commit/push runbook.
- Added Cloudflare live deploy checklist.
- Added live URL test results template.

## 4. Files changed by category

App routes:

- Existing routes updated: `/`, `/why-corentis`, `/contact`, `/funding`, `/runtime-guard`,
  `/assurance-lab`, `/financial-services`, `/offerings`
- New routes added: `/assurance`, `/design-partners`, `/founder`, `/investors`, `/partners`,
  `/resources`, `/video-brief`, `/walkthrough`

Components:

- Existing navigation/footer/section components updated.
- New proof/resource components added:
  - `BeforeAfterControlPanel`
  - `CheckpointFlowGraphic`
  - `ControlMatrixPreview`
  - `EvidenceStatCards`
  - `PilotReportPreview`
  - `ProcessTimeline`
  - `ResourceCard`

Content/data:

- `content/evidence-stats.json`
- `content/resource-packs.json`

PDFs/public assets:

- Six PDF packs in `public/packs`
- `public/robots.txt`
- `public/sitemap.xml`
- `public/og-corentis-shield.svg`

Scripts:

- `scripts/generate-resource-packs.mjs`
- `scripts/verify-launch-readiness.mjs`

Docs:

- Launch readiness, deployment and live-test documentation in `docs/`

Outreach material:

- Investor, design partner, assurance/governance, LinkedIn, spoken pitch, first-send, first-target
  and video execution files in `content/outreach/`

Metadata/SEO:

- Site metadata and social sharing configuration updated in `app/layout.tsx`

Package config:

- `package.json` scripts added for `generate:packs`, `verify:launch` and `launch:check`
- `package-lock.json` updated for PDF generation dependency state

## 5. Files that should not be committed

Do not force-add:

- `out/`
- `.next/`
- `node_modules/`
- `.env`
- `.env.local`
- `.env*.local`

## 6. Ignore confirmation

`.gitignore` already ignores:

- `node_modules/`
- `.next/`
- `out/`
- `dist/`
- `.env`
- `.env.local`
- `.env*.local`

Build outputs and environment files should stay uncommitted.

## 7. Final local verification result

- Command: `npm.cmd run launch:check`
- Result: Passed
- Static export: Passed
- PDF generation/export: Passed
- Route export checks: Passed
- PDF link checks: Passed
- Contact anchor checks: Passed
- Sitemap/robots/OG checks: Passed

## 8. Human review checklist

- [ ] Open local homepage.
- [ ] Open local resources page.
- [ ] Download PDFs.
- [ ] Inspect contact page.
- [ ] Inspect investor page.
- [ ] Inspect design partner page.
- [ ] Inspect assurance page.
- [ ] Inspect mobile view.
- [ ] Review first-send outreach copy.
- [ ] Review LinkedIn launch post.
- [ ] Review PDFs quickly.

## 9. Recommended commit message

```text
Launch harden Corentis Shield website
```
