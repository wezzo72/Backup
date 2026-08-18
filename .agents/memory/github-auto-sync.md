---
name: GitHub auto-sync on deploy
description: GitHub mirror push is baked into the deployment build command — runs automatically on every publish.
---

# GitHub Auto-Sync on Deploy

## Rule
Every publish to barrandodger.com automatically pushes the full repo to the GitHub mirror as part of the deployment build step.

**Why:** User requested this as a permanent command. The manual "Sync to GitHub" workflow was being forgotten, leaving the mirror stale after each publish.

## How to apply
- The `.replit` `[deployment] build` command chains `npm run build && git push --force` to the GitHub mirror.
- Uses `GITHUB_5PERSONAL_ACCESS_TOKEN` secret.
- Git push failure does NOT block deployment (uses `|| echo` fallback).
- The manual "Sync to GitHub" workflow still exists for on-demand syncs.

## Important: Do NOT bake git push into the deployment build command
Attempted to chain `npm run build && git push` in the `.replit` `[deployment] build` command. It caused deployment failures because GitHub returns HTTP 500 on 4.25 GiB force-push packs — the `|| echo` fallback was not sufficient to prevent build failure. The build command must stay as `["npm", "run", "build"]` only. GitHub sync remains a separate manual workflow.

## If the manual sync fails
The `Sync to GitHub` workflow fails with HTTP 500 / "RPC failed" when the pack size exceeds GitHub's receive limit (~2 GiB). This is a GitHub-side limit. Options: use Git LFS for large assets, or push incrementally. Token: `GITHUB_5PERSONAL_ACCESS_TOKEN`.
