---
name: Automation scripts
description: Which scripts run automatically vs manually, what tokens they need, and the automation plan for barrandodger.com
---

# Site Automation Scripts

## What runs automatically (no action needed)

- **stamp-pdfs.cjs** — runs on every server startup (built into server/index.ts)
- **permanence-deploy.mjs + stamp-pdfs.cjs** — runs after every `npm run build` (added as `postbuild` in package.json) — pings Google/Bing/Yandex sitemaps, IndexNow all URLs, Wayback top 15 pages

## What to run manually after major content additions

| Command | What it does | Token needed |
|---|---|---|
| `node scripts/permanence-deploy.mjs` | All search engine pings + Wayback top 15 | None |
| `node scripts/mass-index-now.mjs` | Submit all 400+ URLs to IndexNow providers | None |
| `node scripts/archive-to-wayback.mjs` | Full Wayback snapshot of all 400+ pages | None |
| `node scripts/backup-pdfs-to-github-releases.js` | Upload all PDFs to GitHub Releases vault | GITHUB_3PERSONAL_ACCESS_TOKEN ✅ available |
| `node scripts/push-full-ghpages.mjs` | Push full site mirror to GitHub Pages | GITHUB_5PERSONAL_ACCESS_TOKEN ✅ available |
| `node scripts/backup-to-internet-archive.js` | Upload all PDFs to archive.org | IA_ACCESS_KEY + IA_SECRET_KEY ❌ not set |
| `node scripts/backup-to-zenodo.js` | Create academic DOI deposit at CERN Zenodo | ZENODO_ACCESS_TOKEN ❌ not set |

## IndexNow status (as of 2026-08-10)
- **Yandex** ✅ accepts (HTTP 200)
- **Seznam** ✅ accepts (HTTP 200)  
- **Bing/api.indexnow.org** ❌ HTTP 403 — "UserForbiddedToAccessSite" — needs IndexNow key re-verification
- **Naver** ❌ HTTP 404

## Tokens still needed (request from user)
- `IA_ACCESS_KEY` + `IA_SECRET_KEY` — from archive.org/account/s3.php — enables archive.org PDF collection
- `ZENODO_ACCESS_TOKEN` — from zenodo.org/account/settings/applications/tokens/new/ — enables academic DOI

## One-time tasks not yet done
- Wikidata entity creation: paste `scripts/wikidata-quickstatements.txt` at quickstatements.toolforge.org
- Fix Bing IndexNow 403: re-verify indexnow key at bing.com/webmasters

**Why:** These permanence strategies make the archive uncensorable and academically citable. Each additional mirror adds redundancy evidence cannot be erased.
