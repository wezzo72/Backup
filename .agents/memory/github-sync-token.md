---
name: GitHub Sync Token
description: Which PAT is used for the Sync to GitHub workflow and why it was changed
---

## Rule
The "Sync to GitHub" workflow uses `GITHUB_5PERSONAL_ACCESS_TOKEN` (no expiry).

**Why:** `GITHUB_3PERSONAL_ACCESS_TOKEN` had an expiry date. Switched to `GITHUB_5PERSONAL_ACCESS_TOKEN` which was created with no expiry for permanent sync reliability. Both secrets exist in Replit; only `GITHUB_5` should be referenced in the workflow command.

**How to apply:** If the GitHub sync ever fails with an auth error (403/401), do NOT switch back to `GITHUB_3`. Check if `GITHUB_5PERSONAL_ACCESS_TOKEN` still exists in Replit Secrets first. The repo is ~4GB+ which causes HTTP 500 size errors from GitHub — those are not auth failures.

**Workflow command:**
`GIT_LFS_SKIP_PUSH=1 git push https://x-token-auth:${GITHUB_5PERSONAL_ACCESS_TOKEN}@github.com/drbarrandodger/barran-dodger-archive.git main --force`
