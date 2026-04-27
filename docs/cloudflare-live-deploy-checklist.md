# Cloudflare live deploy checklist

Use this after the founder has reviewed, committed and pushed the launch batch.

## 1. Before deploy

- [ ] `npm.cmd run launch:check` passed locally.
- [ ] Commit reviewed.
- [ ] Changes pushed to GitHub.
- [ ] Cloudflare Pages project is connected to the correct repo.
- [ ] Production branch is `main`.
- [ ] Build command is `npm run generate:packs && npm run build`.
- [ ] Output directory is `out`.
- [ ] Node version is `20` or `22`.
- [ ] `NEXT_PUBLIC_CONTACT_FORM_ENDPOINT` is set.

## 2. During deploy

- [ ] Watch Cloudflare build logs.
- [ ] Confirm `generate:packs` runs.
- [ ] Confirm `next build` succeeds.
- [ ] Confirm the `out` directory is published.
- [ ] Confirm there is no OpenNext/Wrangler/Worker deployment step.

## 3. After deploy

- [ ] Visit live homepage.
- [ ] Visit key pages.
- [ ] Download all PDFs.
- [ ] Check `/sitemap.xml`.
- [ ] Check `/robots.txt`.
- [ ] Check `/og-corentis-shield.svg`.
- [ ] Check mobile layout.
- [ ] Check `/contact`.
- [ ] Send one safe Formspree test message manually.
- [ ] Confirm Formspree notification received.

## 4. If deploy fails

- [ ] Copy the build error.
- [ ] Do not panic.
- [ ] Check Node version.
- [ ] Check build command.
- [ ] Check environment variable.
- [ ] Rerun `npm.cmd run launch:check` locally.
- [ ] Use the previous Cloudflare deployment if needed.
