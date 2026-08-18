import { build as esbuild } from "esbuild";
import { build as viteBuild } from "vite";
import { rm, readFile, writeFile } from "fs/promises";
import path from "path";

async function buildAll() {
  await rm("dist", { recursive: true, force: true });

  console.log("building client...");
  await viteBuild();

  // Remove large static dirs from dist/public — they are served directly from
  // client/public/ by Express routes at runtime, so duplicating them in dist/
  // would nearly double the Docker image size.
  console.log("pruning large static dirs from dist/public...");
  const distPublic = path.join("dist", "public");
  const LARGE_STATIC_DIRS = [
    "documents",
    "evidence-images",
    "evidence",
    "audio",
    "video",
    "images",
    "covers",
    "forensic-analyses",
  ];
  await Promise.all(
    LARGE_STATIC_DIRS.map((dir) =>
      rm(path.join(distPublic, dir), { recursive: true, force: true })
    )
  );
  console.log("pruned large static dirs from dist/public");

  console.log("building server...");
  const pkg = JSON.parse(await readFile("package.json", "utf-8"));

  // Only externalize devDependencies — they are build-time tools (TypeScript,
  // Vite, esbuild, etc.) that are never imported by server code at runtime.
  // All runtime dependencies are bundled into dist/index.cjs so the deployed
  // container does not need node_modules/ at all (node_modules/ is excluded
  // from the repl layer via .replitignore to avoid closed-pipe errors during
  // the layer snapshot while the dev server holds file handles open).
  const devDeps = Object.keys(pkg.devDependencies || {});

  await esbuild({
    entryPoints: ["server/index.ts"],
    platform: "node",
    bundle: true,
    format: "cjs",
    outfile: "dist/index.cjs",
    define: {
      "process.env.NODE_ENV": '"production"',
    },
    minify: true,
    external: devDeps,
    logLevel: "info",
  });

  // Write a thin dist/index.js wrapper so both `node dist/index.js` and
  // `node dist/index.cjs` work. Uses dynamic import() (ESM-safe) because
  // package.json has "type": "module" — require() would throw in this context.
  await writeFile(
    "dist/index.js",
    'import("./index.cjs").catch((e) => { console.error(e); process.exit(1); });\n',
    "utf-8"
  );
  console.log("wrote dist/index.js → dist/index.cjs wrapper (ESM-safe)");
}

buildAll().catch((err) => {
  console.error(err);
  process.exit(1);
});
