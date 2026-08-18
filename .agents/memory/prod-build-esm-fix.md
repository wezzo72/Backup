---
name: Production build ESM fix
description: The dist/index.js wrapper must use dynamic import() not require() — package.json "type":"module" makes require() fatal
---

## The rule
`script/build.ts` writes a one-line `dist/index.js` wrapper. It MUST use ESM dynamic import, NOT CommonJS require.

**Correct:**
```js
import("./index.cjs").catch((e) => { console.error(e); process.exit(1); });
```

**Wrong (breaks production):**
```js
require('./index.cjs');
```

**Why:** `package.json` has `"type": "module"` which makes Node treat all `.js` files as ESM. `require` is not defined in ESM scope. The `.replit` deployment config runs `node dist/index.js` so this wrapper must be valid ESM.

**How to apply:** Any time the build script or dist/index.js is touched, verify the wrapper line uses `import()` not `require()`. The actual server bundle goes to `dist/index.cjs` (CommonJS via esbuild), which is correct and should not change.
