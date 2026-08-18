---
name: New PDF upload pattern
description: End-to-end checklist for adding a new PDF to barrandodger.com, based on confirmed working workflow
---

## Full checklist for a new PDF upload

### 1. Place & stamp PDF
```bash
cp "uploaded-file.pdf" client/public/documents/<slug>.pdf
node scripts/stamp-pdfs.cjs client/public/documents/<slug>.pdf
```

### 2. Generate cover image
- Use media-generation skill / `generateImage()` in CodeExecution
- Dark navy/gold aesthetic; 768×1024 px
- Save to `client/src/assets/images/cover-<slug>.png`

### 3. Create dedicated page
- File: `client/src/pages/<PascalCaseName>.tsx`
- Required elements (every page MUST have all of these):
  - `<SEO>` with title/description/keywords/path
  - `<Navigation />` + `<Footer />`
  - Hero section with badges (category, AI Analysis, Blockchain Sealed, ABN 78 833 496 164)
  - Cover image import + display
  - `<ViralDownloadButton url="/documents/<slug>.pdf" ...>`
  - ABN/copyright block: "© [year] Barran Dodger Legal & Ethical Trust Fund (ABN 78 833 496 164)"
  - Impartial AI Statement of Significance (full prose, 4-6 paragraphs)
  - Prophetic parallels / key facts grid
  - Blockchain Integrity Certificate section (`data-testid="certificate-<slug>"`)
  - Hashtags array with click-to-copy
  - Timestamp with ISO date

### 4. Register route in App.tsx
- Add import: `import <PageName> from "@/pages/<PageName>";`
- Add routes (before final catch-all `<Route component={ViralLanding} />`):
  ```tsx
  <Route path="/<slug>" component={<PageName>} />
  <Route path="/<slug-alt-1>" component={<PageName>} />
  ```

### 5. Add to Gospel.tsx (if theological/spiritual)
- Add cover import: `import cover<Name> from "@/assets/images/cover-<slug>.png";`
- Add card block before the "SACRED GOSPELS FORENSIC THESIS" section (or appropriate location)
- Uses `<ViralDownloadButton>` — already imported in Gospel.tsx at line 13

### 6. Add to FreeEbooks.tsx MAJOR_PUBLICATIONS array
- Pattern: `{ slug: "<slug>", title: "...", subtitle: "...", coverFile: "cover-<slug>", category: "...", downloadUrl: "/documents/<slug>.pdf", downloadLabel: "Download PDF", downloadFilename: "<slug>-barran-dodger.pdf", pageUrl: "/<slug>" }`
- FreeEbooks uses `import.meta.glob('../assets/images/cover-*.png', { eager: true })` — coverFile must match filename stem exactly

### 7. Add to Publications.tsx ALL_PUBLICATIONS array
- Include `icon`, `image: undefined`, `tags[]`, `url` (PDF path), `aiSignificance` (full AI statement)
- ScrollText and BookOpen are already imported in Publications.tsx

### 8. Restart app + verify
```bash
# App restarts automatically via workflow
# Screenshot both pages to confirm
```

### 9. Push GitHub mirror
- Run "Push GitHub Pages" workflow: `node scripts/push-full-ghpages.mjs`
- Full upload (~1,210 files) takes ~20-30 mins when checkpoint is cold
- Checkpoint trick: after a rebuild, script pre-populates `.ghpages-checkpoint.json` from GitHub recursive tree API so only changed files upload next time

**Why:** This was confirmed working for Elijah, Jesus, Crystal & Barran and Sacred Gospels Forensic Thesis uploads on 28 July 2026.
