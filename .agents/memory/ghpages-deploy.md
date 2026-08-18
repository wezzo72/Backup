---
name: GitHub Pages mirror deploy
description: How to deploy the barrandodger.com site to the GitHub Pages mirror at drbarrandodger.github.io/barran-dodger-archive
---

## The Setup
- Repo: `drbarrandodger/barran-dodger-archive`
- Branch: `github-pages-deploy` (NOT `gh-pages`)
- URL: https://drbarrandodger.github.io/barran-dodger-archive/
- Base path: `/barran-dodger-archive/` (set in `vite.config.gh-pages.ts`)

## Deploy Method — Git Data API with checkpointing

Two scripts handle the full deploy:

### 1. `scripts/push-full-ghpages.mjs` (main workflow script)
- Scans `dist/ghpages/`, uploads each file as a GitHub blob
- Saves blob SHAs to `.ghpages-checkpoint.json` — safe to restart anytime
- Skips 4 files >40 MB (GitHub blob API limit): 3 MP3s + 1 MP4 in evidence/ and video/
- After all blobs uploaded, calls `buildTreeIncremental` + commit + force-push
- Workflow: "Push GitHub Pages" → `node /home/runner/workspace/scripts/push-full-ghpages.mjs`

### 2. `scripts/ghpages-commit.mjs` (one-shot finaliser)
- Run directly via `node scripts/ghpages-commit.mjs` when the workflow times out mid-commit
- Reads checkpoint blobs, creates incremental tree, commits, force-pushes
- Checkpoints treeSha and commitSha so partial runs can resume

## Critical: Incremental Tree Creation (avoids GitHub 502)

GitHub's Git Trees API returns 502 for trees with >~50 entries sent in a single call.
**Fix**: `buildTreeIncremental(entries, label)` — sends TREE_CHUNK=50 entries per call,
chaining `base_tree = previousSha` so each JSON body stays small.

Same pattern used in both scripts. Never send all entries in a single tree POST.

Also: checkpoint `cp.subtrees[dir]`, `cp.treeSha`, `cp.commitSha` so any step can resume.

## 4 permanently-skipped files (>40 MB)
- `evidence/ablecare-larissa-death-threat-denial.mp3` (95 MB)
- `evidence/ndis-surveillance-audio-Kim-part2.mp3` (81 MB)
- `evidence/ndis-surveillance-audio-Kim.mp3` (126 MB)
- `video/holy-reckoning-ndis.mp4` (46 MB)

These are expected and logged at startup — not a bug.

## Upload stats (July 2026 full push)
- 1208/1212 files uploaded (4 skipped — too large)
- 362 documents, 390 assets, 299 evidence-images, 95 images, 11 evidence, 5 audio, 2 covers, 42 root files
- Batch size 3, 1.5s inter-batch delay (avoids secondary rate limits)
- Retry waits 30s on rate-limit errors

## Key Files
- `vite.config.gh-pages.ts` — Replit-free vite config, base `/barran-dodger-archive/`, outDir `dist/ghpages`
- `.ghpages-checkpoint.json` — blob SHAs + partial tree/commit state; cleared on success
- `dist/ghpages/` — pre-built SPA + all public assets including PDFs

## Why GitHub Actions build is broken
1. `@replit/vite-plugin-runtime-error-modal` — Replit-only package
2. Stale npm cache causes Tailwind v3/v4 conflict
Solution: always pre-build locally on Replit and push via API.
