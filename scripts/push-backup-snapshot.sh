#!/usr/bin/env bash
# Push a fresh source-code snapshot to wezzo72/Backup on every sync.
# Uses git archive (no history) so the push is always small (~600 MB)
# regardless of how large the main repo's git history grows.
# Large binary dirs (documents, evidence-images, etc.) are excluded because
# they are already preserved on GitHub Releases.

set -e

TMPGIT=$(mktemp -d)
trap "rm -rf $TMPGIT" EXIT

cd "$(git rev-parse --show-toplevel)"

echo "Building source snapshot..."
git archive HEAD \
  --format=tar \
  ":(exclude)client/public/documents" \
  ":(exclude)client/public/evidence-images" \
  ":(exclude)client/public/audio" \
  ":(exclude)client/public/images" \
  ":(exclude)client/public/covers" \
  ":(exclude)client/public/evidence" \
  ":(exclude)client/public/forensic-analyses" \
  ":(exclude)client/public/zips" \
  ":(exclude)client/public/video" \
  ":(exclude)client/src/assets/images" \
  | tar xf - -C "$TMPGIT"

cd "$TMPGIT"
git init -q
git config user.email "agent@replit.com"
git config user.name "Replit Agent"
git add -A
git commit -q -m "Backup snapshot $(date -u '+%Y-%m-%d %H:%M UTC')"

echo "Pushing to wezzo72/Backup..."
GIT_LFS_SKIP_PUSH=1 git push --force \
  "https://x-token-auth:${GITHUB_WEZZO72_ACCESS_TOKEN}@github.com/wezzo72/Backup.git" \
  main

echo "✓ Backup pushed to wezzo72/Backup"
