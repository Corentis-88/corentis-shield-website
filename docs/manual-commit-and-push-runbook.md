# Manual commit and push runbook

Only run these commands after reviewing changed files and deciding the site is ready to deploy.

## 1. Safety warning

Do not commit or push until you have reviewed the launch batch. A push to the production branch may
trigger Cloudflare Pages deployment.

## 2. Pre-commit checks

Run:

```text
npm.cmd run launch:check
git status --short
```

`launch:check` regenerates PDFs, formats files, builds the static export and verifies route/PDF
outputs.

`git status --short` shows what would be committed if you stage the whole repo.

## 3. Recommended commit sequence

Run these manually only when ready:

```text
git add .
git status --short
git commit -m "Launch harden Corentis Shield website"
git push origin main
```

What each command does:

- `git add .` stages changed files that are not ignored.
- `git status --short` lets you inspect the staged file list before committing.
- `git commit -m "Launch harden Corentis Shield website"` creates the local commit.
- `git push origin main` pushes the commit to GitHub and may trigger Cloudflare Pages.

## 4. What to check after `git add`

Before committing, confirm staged files do not include:

- `.env` or `.env.local`
- `node_modules`
- `.next`
- `out`
- accidental private files
- screenshots containing private information
- secret API keys

## 5. If something wrong appears staged

Unstage it with:

```text
git restore --staged <file>
```

Then check status again:

```text
git status --short
```

## 6. If push fails

- Check the remote with `git remote -v`.
- Check the branch with `git branch --show-current`.
- Check internet/authentication.
- Do not force push unless you fully understand the consequences.
- If unsure, stop and inspect the error before retrying.
