---
name: Archiver v8 API change
description: archiver npm package v8 broke the old callable function API; now uses named class exports
---

## Rule
Never use `archiver('zip', opts)` — that was the v7 API and is gone in v8.

**New API (v8+):**
```ts
import { ZipArchive } from "archiver";
const archive = new ZipArchive({ zlib: { level: 1 } });
```

For tar: `import { TarArchive } from "archiver"; new TarArchive(opts)`

**Why:** archiver v8 became pure ESM and rewrote its export shape. The old `import archiver from "archiver"; archiver('zip', opts)` pattern throws `TypeError: archiver is not a function` (or `cu is not a function` in the minified CJS bundle). Every zip/tar creation in routes.ts must use the class constructors.

**How to apply:** Any new route that creates a zip archive must use `new ZipArchive(...)`. The `createRequire` workaround also fails — it returns the module object, not a callable. Only the ESM named export works.
