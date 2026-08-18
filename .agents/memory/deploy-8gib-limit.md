---
name: Deployment 8 GiB repl layer limit
description: What causes the 8 GiB limit to be hit and what to exclude to stay under it.
---

# Deployment 8 GiB Repl Layer Limit

## The rule
Total size of all container layers (Nix/system + pid1 + hosting + Repl + Repl-cache) must stay under 8 GiB. The Repl layer is the workspace filtered by `.replitignore`. Adding large files to the workspace without a matching `.replitignore` entry is the most common cause of failures.

**Why:** Replit's Cloud Run deployment snapshots the entire repl layer. The Nix store alone consumes ~6 GB; only ~2 GB of workspace content is safe before hitting the ceiling.

## What `.replitignore` currently excludes
(All paths relative to workspace root; these must match **basenames**, not full paths, in `du --exclude` measurements)

- `.git/` — 25 GB of PDF binary git history
- `node_modules/` — runtime deps bundled by esbuild into `dist/index.cjs`
- `dist/ghpages/` — GH Pages static build (pushed separately)
- `client/public/documents/` — 2.4 GB PDFs; redirected to GitHub Pages in production
- `client/public/evidence-images/` — 401 MB; redirected to GitHub Pages
- `client/public/audio/` — 165 MB; redirected to GitHub Pages
- `client/public/images/` — 123 MB; redirected to GitHub Pages
- `client/public/covers/` — 2 MB; redirected to GitHub Pages
- `client/public/evidence/` — 319 MB; redirected to GitHub Pages
- `client/public/forensic-analyses/` — forensic PDFs; redirected to GitHub Pages
- `client/public/zips/` — pre-built ZIPs (now on GitHub Releases instead)
- `client/src/assets/images/` — 524 MB source images; Vite compiles them into `dist/public/assets/` so source copies are redundant in the layer
- `client/public/video/` — 46 MB; redirected to GitHub Pages
- `attached_assets/` — chat session uploads
- `.local/` — Replit agent files

## Safe workspace budget after all exclusions
~1.6 GB (well under the ~2 GB budget).

## Critical gotcha: `du --exclude` uses basenames
`du --exclude='client/public/documents'` does NOTHING — it must be `--exclude='documents'`.
This means the correct measurement is:
```
du -sh --exclude='.git' --exclude='node_modules' --exclude='ghpages' \
  --exclude='documents' --exclude='evidence-images' --exclude='audio' \
  --exclude='images' --exclude='covers' --exclude='evidence' \
  --exclude='forensic-analyses' --exclude='attached_assets' \
  --exclude='.local' --exclude='zips' --exclude='video' --exclude='assets' \
  /home/runner/workspace/
```
Target: < 1.8 GB.

## Build step creates `/home/runner/ghpages-staging/`
The `.replit` build command moves `dist/ghpages/` to `/home/runner/ghpages-staging/` to keep it out of the workspace. Whether this directory is included in the Repl layer is unclear — the 03:42 AM build succeeded with this in place, so it appears safe.

## When adding new large assets
Always add the corresponding path to `.replitignore` BEFORE the next deployment, otherwise the build will fail. Check updated workspace size with the `du` command above.
