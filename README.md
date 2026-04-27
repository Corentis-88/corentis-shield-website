# Corentis Shield Website

Static marketing website for Corentis Technologies and Corentis Shield.

## Cloudflare Pages deployment

This project should deploy to Cloudflare Pages as a static Next.js export.

Use these Cloudflare Pages settings:

- Framework preset: Next.js, or None/static if manually configured
- Build command: `npm run generate:packs && npm run build`
- Build output directory: `out`
- Production branch: `main`
- Node version: `20` or `22`

Important:

- Do not use OpenNext for this website.
- Do not use Wrangler Worker deployment for this website.
- Do not run `wrangler deploy`, `open-next deploy`, `opennextjs-cloudflare deploy`, `next-on-pages`, or `pages:deploy`.
- No Worker service binding, including `WORKER_SELF_REFERENCE`, is required.

The Next.js config uses `output: "export"`, so `next build` produces the static `out/`
directory for Cloudflare Pages to serve directly. The PDF packs should be generated before
the build so Cloudflare exports the latest files into `out/packs`.

## Contact form

The contact form posts to Formspree and remains compatible with static export.

Set this environment variable locally and in Cloudflare Pages Preview/Production:

```text
NEXT_PUBLIC_CONTACT_FORM_ENDPOINT=https://formspree.io/f/xkokbbvw
```

The form submits with `fetch` and `FormData` using `Accept: application/json`, then shows inline
success or error states. It does not use a mail backend, API route, server action, Worker, or
`mailto:` draft.

## Launch readiness

Before launch or outreach, run:

```text
npm.cmd run generate:packs
npm.cmd run build
npm.cmd run verify:launch
```

Resource PDFs live in `public/packs` and are copied to `out/packs` during static export.
For the full local launch check, run:

```text
npm.cmd run launch:check
```

Founder launch checklist:

- `docs/launch-readiness.md`
- `docs/cloudflare-deployment-runbook.md`
- `docs/live-site-test-checklist.md`
- `docs/sprint-8-founder-review.md`
- `docs/manual-commit-and-push-runbook.md`
- `docs/cloudflare-live-deploy-checklist.md`
- `docs/live-url-test-results-template.md`

Outreach drafts:

- `content/outreach/investor-email.md`
- `content/outreach/design-partner-email.md`
- `content/outreach/assurance-governance-email.md`
- `content/outreach/founder-linkedin-posts.md`
- `content/outreach/spoken-pitches.md`
- `content/outreach/video-production-prompts.md`
- `content/outreach/first-batch-tracker.md`
- `content/outreach/first-send-pack.md`
- `content/outreach/video-execution-pack.md`
- `content/outreach/first-10-targets-template.md`
- `content/outreach/first-send-final.md`
- `content/outreach/linkedin-launch-final.md`
- `content/outreach/first-video-build-plan.md`
