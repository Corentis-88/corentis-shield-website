# Corentis Shield launch readiness

This checklist is for the founder before public launch, Cloudflare deployment and outreach.

## 1. Launch status summary

- [ ] Site builds locally with `npm.cmd run build`.
- [ ] Static export is enabled through `next.config.ts` with `output: "export"`.
- [ ] `out/` is generated after build.
- [ ] PDF packs generate with `npm.cmd run generate:packs`.
- [ ] `out/packs` contains all six PDFs after build.
- [ ] Contact route is available at `/contact`.
- [ ] Contact form uses Formspree via `NEXT_PUBLIC_CONTACT_FORM_ENDPOINT`.
- [ ] Audience journeys exist for design partners, investors/funders, assurance teams and walkthrough requests.
- [ ] Known limitation: `next lint` currently uses the deprecated interactive `next lint` setup and has not been reconfigured.

## 2. Core pages to manually inspect

- [ ] `/`
- [ ] `/why-corentis`
- [ ] `/methodology`
- [ ] `/pilot-report`
- [ ] `/resources`
- [ ] `/partners-and-funders`
- [ ] `/founder`
- [ ] `/design-partners`
- [ ] `/investors`
- [ ] `/assurance`
- [ ] `/walkthrough`
- [ ] `/contact`
- [ ] `/video-brief`

## 3. PDF download checklist

- [ ] Investor Overview: `/packs/corentis-investor-overview.pdf`
- [ ] Assurance & Governance Summary: `/packs/corentis-assurance-governance-summary.pdf`
- [ ] Design Partner Pack: `/packs/corentis-design-partner-pack.pdf`
- [ ] Sample Pilot Report: `/packs/corentis-sample-pilot-report.pdf`
- [ ] Control Matrix Example: `/packs/corentis-control-matrix-example.pdf`
- [ ] Runtime Checkpoint Explainer: `/packs/corentis-runtime-checkpoint-explainer.pdf`

## 4. Contact journey checklist

- [ ] `/contact#design-partner`
- [ ] `/contact#investor`
- [ ] `/contact#assurance`
- [ ] `/contact#walkthrough`

## 5. Deployment checklist

- [ ] Run `npm.cmd run generate:packs`.
- [ ] Run `npm.cmd run format`.
- [ ] Run `npm.cmd run build`.
- [ ] Run `npm.cmd run verify:launch`.
- [ ] Or run the combined local check: `npm.cmd run launch:check`.
- [ ] Confirm `out/` exists.
- [ ] Confirm `out/packs` contains all six PDFs.
- [ ] Cloudflare Pages build command: `npm run generate:packs && npm run build`.
- [ ] Cloudflare Pages output directory: `out`.
- [ ] Framework preset: None/static or Next.js static export.
- [ ] Node version: 20 or 22.
- [ ] Confirm Cloudflare is not using OpenNext, Wrangler, Workers or `WORKER_SELF_REFERENCE`.
- [ ] Confirm custom domain: `www.corentis.co.uk`.
- [ ] Confirm `NEXT_PUBLIC_CONTACT_FORM_ENDPOINT` is set in Cloudflare Pages.
- [ ] Confirm Privacy, Terms and Cookies pages still work.
- [ ] After deployment, purge Cloudflare cache if old assets or PDFs appear.

## 5a. Static export verification coverage

`npm.cmd run verify:launch` checks:

- required exported route files in `out/`;
- all six exported PDFs in `out/packs`;
- a minimum PDF size so empty files are caught;
- key PDF links in exported page HTML;
- contact anchors for design partner, investor, assurance and walkthrough journeys;
- launch SEO files and assets: `sitemap.xml`, `robots.txt` and `og-corentis-shield.svg`.

## 5b. SEO and social preview status

- [ ] `public/sitemap.xml` exists and uses `https://www.corentis.co.uk`.
- [ ] `public/robots.txt` allows indexing and references the sitemap.
- [ ] `public/og-corentis-shield.svg` exists for social preview metadata.
- [ ] `/video-brief` is intentionally excluded from the sitemap because it is a production brief.
- [ ] Check social previews after deployment using LinkedIn and search/social preview tools.

## 6. Claim safety checklist

- [ ] No guaranteed compliance.
- [ ] No fake customers.
- [ ] No fake funding.
- [ ] No regulator approval claims.
- [ ] No prevents fines claim.
- [ ] No reduces redress by X% claim.
- [ ] No used by major banks claim.
- [ ] No certified claim.

## 7. Outreach readiness checklist

- [ ] Investor email ready.
- [ ] Design partner email ready.
- [ ] Assurance/governance email ready.
- [ ] LinkedIn founder post ready.
- [ ] Product video prompt ready.
- [ ] First batch tracker ready: `content/outreach/first-batch-tracker.md`.
- [ ] First-send pack ready: `content/outreach/first-send-pack.md`.
- [ ] Video execution pack ready: `content/outreach/video-execution-pack.md`.
- [ ] 30-second spoken pitch ready.
- [ ] 60-second spoken pitch ready.

## 8. Contact route notes

The contact form is a static client-side Formspree form. It does not use a backend API route,
server action, database or mailto draft. The required environment variable is:

```text
NEXT_PUBLIC_CONTACT_FORM_ENDPOINT=https://formspree.io/f/xkokbbvw
```

Before outreach, manually test the contact form only if it is safe to create a real Formspree
submission. Otherwise, inspect the form fields and endpoint configuration without submitting.

Cloudflare Pages must define the same public endpoint variable for Preview and Production. A
successful live test should show the inline success state and create one Formspree submission. A
failure usually means the environment variable is missing, the Formspree form is inactive, or the
domain has not been allowed in Formspree.

## 9. Post-deployment live checks

- [ ] Homepage loads at `https://www.corentis.co.uk`.
- [ ] Core audience pages load: `/design-partners`, `/investors`, `/assurance`, `/walkthrough`.
- [ ] PDF downloads work from `/resources`.
- [ ] Contact form displays and can be tested safely.
- [ ] Main pages work on mobile.
- [ ] Social preview uses the Corentis Shield OG image.
- [ ] `https://www.corentis.co.uk/sitemap.xml` loads.
- [ ] `https://www.corentis.co.uk/robots.txt` loads.

## 10. Final pre-launch manual actions for founder

- [ ] Open the site on desktop.
- [ ] Open the site on mobile.
- [ ] Test all main nav links.
- [ ] Test footer links.
- [ ] Download each PDF.
- [ ] Submit or test contact form only if safe.
- [ ] Check live deployed URL after Cloudflare deploy.
- [ ] Send first 5 outreach messages manually.

## 11. Sprint 7 live launch assets

- Deployment report: `docs/sprint-7-live-launch-report.md`
- Cloudflare deployment runbook: `docs/cloudflare-deployment-runbook.md`
- Live-site test checklist: `docs/live-site-test-checklist.md`
- First 10 targets template: `content/outreach/first-10-targets-template.md`
- First-send final messages: `content/outreach/first-send-final.md`
- LinkedIn launch final copy: `content/outreach/linkedin-launch-final.md`
- First video build plan: `content/outreach/first-video-build-plan.md`

## 12. Exact order of operations after Codex

1. Review changed files.
2. Run `npm.cmd run launch:check`.
3. Commit and push only when ready.
4. Check the Cloudflare deployment.
5. Run `docs/live-site-test-checklist.md`.
6. Send one safe Formspree test.
7. Create the target list manually.
8. Personalise the first 10 messages.
9. Publish the LinkedIn post.
10. Build the first video version.

## 13. Sprint 8A founder review assets

- Founder review pack: `docs/sprint-8-founder-review.md`
- Manual commit/push runbook: `docs/manual-commit-and-push-runbook.md`
- Cloudflare live deploy checklist: `docs/cloudflare-live-deploy-checklist.md`
- Live URL test results template: `docs/live-url-test-results-template.md`

## 14. After live deployment

1. Confirm the live site loads.
2. Confirm all PDF downloads work.
3. Send one safe Formspree test.
4. Confirm the contact email was received.
5. Open `content/outreach/first-10-targets-template.md`.
6. Manually choose 5 investor/funder targets.
7. Manually choose 5 design partner targets.
8. Personalise the first 3 messages only.
9. Send the first 3 messages.
10. Wait for replies before scaling.
11. Publish the LinkedIn launch post.
12. Create the first 60-second video version.

Do not send 20+ cold messages immediately. Start with a small controlled batch so the messaging
can be improved from real responses.
