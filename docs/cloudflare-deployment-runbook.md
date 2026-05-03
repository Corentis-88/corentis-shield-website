# Cloudflare deployment runbook

This runbook is for deploying the Corentis Shield website to Cloudflare Pages. It is deliberately
static and does not use OpenNext, Wrangler or Workers.

## 1. Deployment model

- Static Next.js export
- Build output directory: `out`
- PDF packs are static files in `public/packs`
- During export, PDFs are copied to `out/packs`
- No OpenNext deployment
- No Wrangler Worker deployment
- No Worker service binding or `WORKER_SELF_REFERENCE`

## 2. Required local command before deployment

Run:

```text
npm.cmd run launch:check
```

This regenerates PDFs, formats the project, builds the static export and verifies routes, PDF
links, contact anchors and launch assets.

## 3. Recommended Cloudflare Pages settings

- Framework preset: None/static or Next.js static export
- Build command: `npm run generate:packs && npm run build`
- Output directory: `out`
- Node version: `20` or `22`
- Environment variable: `NEXT_PUBLIC_CONTACT_FORM_ENDPOINT`

Use the Formspree endpoint already configured for Corentis. Keep it in Cloudflare Pages Preview
and Production environment variables.

## 4. GitHub deployment flow

Cloudflare Pages should build automatically from the GitHub branch connected to the Pages project.

Example commands for the founder to run only after reviewing the changed files:

```text
git status
git add .
git commit -m "Launch harden Corentis Shield website"
git push
```

Only run `git add`, `git commit` and `git push` when you have reviewed the changed files and are
ready to deploy.

After pushing:

1. Open the Cloudflare Pages project.
2. Watch the new deployment.
3. Confirm the build command and output directory are correct.
4. Inspect the deployment logs.
5. Open the preview URL before relying on the custom domain.

## 5. Cloudflare dashboard checklist

- [ ] Confirm the correct Pages project.
- [ ] Confirm production branch is `main` or the intended branch.
- [ ] Confirm build command: `npm run generate:packs && npm run build`.
- [ ] Confirm output directory: `out`.
- [ ] Confirm Node version: `20` or `22`.
- [ ] Confirm `NEXT_PUBLIC_CONTACT_FORM_ENDPOINT` is set.
- [ ] Confirm no OpenNext/Wrangler/Worker deployment path is enabled.
- [ ] Trigger deployment by GitHub push or Cloudflare dashboard action.
- [ ] Confirm canonical custom domain: `corentis.co.uk`.
- [ ] Confirm `www.corentis.co.uk` redirects to the apex domain or serves the same latest content.
- [ ] Check deployment logs for warnings or missing assets.

## 6. Post-deployment checks

- [ ] Homepage loads.
- [ ] `/resources` loads.
- [ ] All six PDFs download.
- [ ] `/contact` loads.
- [ ] Contact anchors work.
- [ ] Formspree test is sent safely.
- [ ] `/sitemap.xml` loads.
- [ ] `/robots.txt` loads.
- [ ] `/og-corentis-shield.svg` loads.
- [ ] Mobile view checked.

## 7. Rollback plan

If the live deployment has a serious issue:

1. Identify the previous working Cloudflare Pages deployment.
2. Use Cloudflare Pages rollback if appropriate.
3. Or revert the Git commit and redeploy.
4. Do not delete the Cloudflare project.
5. Do not switch to OpenNext/Wrangler as a quick fix for this static website.
