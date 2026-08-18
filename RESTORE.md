# barrandodger.com — Full Backup Mirror (wezzo72/Backup)

This repository is a complete mirror of the Barran Dodger Archive at barrandodger.com.

## What's here (git)
- `client/src/` — full React/TypeScript source code
- `server/` — Express backend
- `scripts/`, `migrations/` — automation and database migrations
- `client/public/documents/` — all 545+ evidence PDFs and documents
- `client/public/evidence-images/` — 313 forensic evidence images
- `client/public/evidence/` — audio and additional evidence files
- `client/public/audio/` — audio files
- `client/public/images/`, `covers/`, `video/` — site assets
- `client/src/assets/images/` — source image assets
- `attached_assets/` — uploaded evidence files

## Large files in GitHub Releases
- **ndis-surveillance-audio-Kim.mp3** (126 MB) — Release: `evidence-audio-v1`
  → https://github.com/wezzo72/Backup/releases/tag/evidence-audio-v1

## Not included
- Pre-built ZIP archives (redundant; content is in individual files above)
- `node_modules/`, `dist/`, `.git/` (generated artefacts)

## How to restore
```bash
git clone https://github.com/wezzo72/Backup.git barrandodger
cd barrandodger
npm install
# Download the large audio file from Releases:
curl -L -o client/public/evidence/ndis-surveillance-audio-Kim.mp3 \
  https://github.com/wezzo72/Backup/releases/download/evidence-audio-v1/ndis-surveillance-audio-Kim.mp3
npm run dev
```
