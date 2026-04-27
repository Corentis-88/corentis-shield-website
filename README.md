# Corentis Shield Website

Static marketing website for Corentis Technologies and Corentis Shield.

## Cloudflare Pages deployment

This project should deploy to Cloudflare Pages as a static Next.js export.

Use these Cloudflare Pages settings:

- Framework preset: Next.js, or None/static if manually configured
- Build command: `npm run build`
- Build output directory: `out`
- Production branch: `main`
- Node version: `20` or `22`

Important:

- Do not use OpenNext for this website.
- Do not use Wrangler Worker deployment for this website.
- Do not run `wrangler deploy`, `open-next deploy`, `opennextjs-cloudflare deploy`, `next-on-pages`, or `pages:deploy`.
- No Worker service binding, including `WORKER_SELF_REFERENCE`, is required.

The Next.js config uses `output: "export"`, so `next build` produces the static `out/`
directory for Cloudflare Pages to serve directly.

## Contact form

The contact form posts to Formspree and remains compatible with static export.

Set this environment variable locally and in Cloudflare Pages Preview/Production:

```text
NEXT_PUBLIC_CONTACT_FORM_ENDPOINT=https://formspree.io/f/xkokbbvw
```

The form submits with `fetch` and `FormData` using `Accept: application/json`, then shows inline
success or error states. It does not use a mail backend, API route, server action, Worker, or
`mailto:` draft.
