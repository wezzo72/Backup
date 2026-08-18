import express, { type Request, Response, NextFunction } from "express";
import { registerRoutes } from "./routes";
import { serveStatic } from "./static";
import { createServer } from "http";
import path from "path";
import fs from "fs";
import { storage } from "./storage";
import { prependReceiptToPDF } from "./pdfReceiptInjector";

// ── Global crash guards — prevent unhandled rejections from killing the process ──
process.on("uncaughtException", (err) => {
  console.error("[uncaughtException]", err);
});
process.on("unhandledRejection", (reason) => {
  console.error("[unhandledRejection]", reason);
});

const app = express();

// ── Fast health endpoint — must respond before any other middleware ──
// Deployment health checks hit this; it must always return 200 instantly.
app.get("/health", (_req, res) => res.status(200).json({ status: "ok" }));
app.get("/healthz", (_req, res) => res.status(200).json({ status: "ok" }));

// Redirect every www.barrandodger.com request to barrandodger.com permanently
app.use((req, res, next) => {
  const host = req.hostname || req.headers.host || '';
  if (host.startsWith('www.')) {
    const bare = host.replace(/^www\./, '');
    return res.redirect(301, `https://${bare}${req.url}`);
  }
  next();
});

app.get('/robots.txt', (_req, res) => {
  res.type('text/plain');
  res.send(`User-agent: *
Allow: /
Disallow: /api/

User-agent: Googlebot
Allow: /
Disallow: /api/
Crawl-delay: 0

User-agent: Googlebot-Image
Allow: /

User-agent: Bingbot
Allow: /
Disallow: /api/
Crawl-delay: 0

User-agent: facebookexternalhit
Allow: /

User-agent: Twitterbot
Allow: /

User-agent: LinkedInBot
Allow: /

User-agent: Applebot
Allow: /

User-agent: DuckDuckBot
Allow: /

User-agent: Slurp
Allow: /

# IndexNow verification
User-agent: *
Allow: /barrandodger-indexnow.txt

Sitemap: https://barrandodger.com/sitemap.xml
Sitemap: https://barrandodger.com/sitemap-index.xml
Sitemap: https://barrandodger.com/sitemap-main.xml
Sitemap: https://barrandodger.com/sitemap-forensic.xml
Sitemap: https://barrandodger.com/sitemap-publications.xml
Sitemap: https://barrandodger.com/sitemap-gospel.xml
Sitemap: https://barrandodger.com/sitemap-pages.xml
Sitemap: https://barrandodger.com/sitemap-pdfs.xml
`);
});

app.use((_req, res, next) => {
  res.setHeader('X-Robots-Tag', 'index, follow');
  next();
});

// Serve attached_assets — all files freely accessible, with download tracking for PDFs
// In production the attached_assets/ dir is excluded from the container image (.deployignore).
// When the local directory is absent, we redirect to the GitHub raw content mirror so
// every URL still resolves without adding gigabytes to the deployment image.
const attachedAssetsDir = path.resolve(process.cwd(), 'attached_assets');
const attachedAssetsExists = fs.existsSync(attachedAssetsDir);
const GITHUB_ASSETS_BASE =
  'https://raw.githubusercontent.com/drbarrandodger/barran-dodger-archive/main/attached_assets';

app.use('/attached_assets', async (req: Request, res: Response, next: NextFunction) => {
  const lowerPath = req.path.toLowerCase();
  if (lowerPath.endsWith('.pdf')) {
    const slug = req.path
      .replace(/^\//, '')
      .replace(/\.pdf$/i, '')
      .replace(/[^a-zA-Z0-9]+/g, '-')
      .replace(/^-|-$/g, '')
      .toLowerCase()
      .slice(0, 80);
    try {
      const { db } = await import('./db');
      const { downloadCounts } = await import('../shared/schema');
      const { sql } = await import('drizzle-orm');
      await db.execute(
        sql`INSERT INTO download_counts (document_slug, count) VALUES (${slug}, 1)
            ON CONFLICT (document_slug) DO UPDATE SET count = download_counts.count + 1`
      );
    } catch { /* non-fatal: tracking failure should not block download */ }
  }

  // In production the local dir is absent — redirect to GitHub raw mirror
  if (!attachedAssetsExists) {
    const githubUrl = `${GITHUB_ASSETS_BASE}${req.path}`;
    return res.redirect(301, githubUrl);
  }

  next();
});

// Only mount the static middleware when the directory actually exists (dev / local)
if (attachedAssetsExists) {
  app.use('/attached_assets', express.static(attachedAssetsDir, {
    setHeaders: (res, filePath) => {
      if (filePath.endsWith('.jpeg') || filePath.endsWith('.jpg')) {
        res.setHeader('Content-Type', 'image/jpeg');
      } else if (filePath.endsWith('.png')) {
        res.setHeader('Content-Type', 'image/png');
      } else if (filePath.endsWith('.pdf')) {
        res.setHeader('Content-Type', 'application/pdf');
        res.setHeader('Cache-Control', 'no-store');
      }
    }
  }));
}

// Serve all documents with server-side download tracking
// Checks github-pages-deploy/documents first, then client/public/documents as fallback
const deployDir = path.resolve(process.cwd(), 'github-pages-deploy');
const documentsDir = path.join(deployDir, 'documents');
const publicDocumentsDir = path.resolve(process.cwd(), 'client/public/documents');

const TRACKED_EXTENSIONS: Record<string, string> = {
  '.pdf': 'application/pdf',
  '.txt': 'text/plain; charset=utf-8',
  '.docx': 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
  '.doc': 'application/msword',
  '.mp3': 'audio/mpeg',
  '.mp4': 'video/mp4',
  '.jpeg': 'image/jpeg',
  '.jpg': 'image/jpeg',
  '.png': 'image/png',
};

// Extensions that require a valid download token before being served
const GATED_EXTENSIONS = new Set(['.pdf', '.epub', '.docx', '.doc', '.zip']);

// Court documents and PIDs — always free (duty solicitor & court use)
const FREE_DOCUMENTS = new Set([
  // ── Already free ────────────────────────────────────────────────────────────
  '/documents/federal-court-pid-assessment-2023.pdf',
  '/documents/2026-05-03-letter-of-demand-ablepoint-formal-complaint.pdf',
  '/documents/2026-05-03-letter-of-demand-ablepoint-safety.pdf',
  '/documents/crimes_against_humanity_final_demand.pdf',
  '/documents/master-consolidated-legal-record.pdf',

  // ── All PID (Public Interest Disclosure) documents ───────────────────────
  '/documents/federal-court-sia-lagos-pid-march-2023.pdf',
  '/documents/letter-to-sia-lagos-federal-court-pid-3mar2023.pdf',
  '/documents/ndis-pid-2023-krypton-preliminary-inquiries.pdf',
  '/documents/ndis-pid-copy-21-allegations.pdf',
  '/documents/ndis-pid-official-response.pdf',
  '/documents/ndis-pid-political-prisoner-dr-rich-mclean.pdf',
  '/documents/public-interest-disclosure-commonwealth-ombudsman-aug-2022.pdf',
  '/documents/sia-lagos-federal-court-pid-march-2023.pdf',
  '/documents/ben-ndis-disclosure-text-messages.pdf',

  // ── Protection & safety documents ────────────────────────────────────────
  '/documents/official-whistleblower-torture-dossier-dr-richard-william-mclean.pdf',
  '/documents/systemic-endangerment-of-whistleblowers-institutional-dossier.pdf',
  '/documents/statement-of-record-position-protection-2026.pdf',
  '/documents/urgent-protection-request-sos.pdf',
  '/documents/2026-05-03-formal-complaint-urgent-protection-request.pdf',
  '/documents/police-complicity-death-threat-documentation.pdf',

  // ── Court & legal documents ───────────────────────────────────────────────
  '/documents/2023-03-27-federal-court-final-assessment-dr-rich-mclean.pdf',
  '/documents/federal-court-three-point-acknowledgment-tredwell-27mar2023.pdf',
  '/documents/mclean-comcare-final-legal-proceedings.pdf',
  '/documents/ombudsman-afca-referral-loop-evidence.pdf',
  '/documents/ohchr-submission-ur-ust-23-aus-17-urgent-appeal.pdf',
  '/documents/un-ohchr-asylum-claim-ur-ust-23-aus-17.pdf',
  '/documents/01-07-2023-letter-to-attorney-general-prime-minister.pdf',
  '/documents/04-06-2023-letter-to-parliamentarians.pdf',
  '/documents/31-05-2022-letter-to-pm-albanese-opmc.pdf',

  // ── Top evidentiary compilations ─────────────────────────────────────────
  '/documents/comprehensive-case-systematic-persecution.pdf',
  '/documents/most-comprehensive-case-systematic-persecution.pdf',
  '/documents/the-certified-record-of-barran-dodger.pdf',
  '/documents/retrospective_statement_of_treatment.pdf',
  '/documents/master-forensic-evidence-report.pdf',
  '/documents/impartial-ai-analysis-2343-documents.pdf',
  '/documents/verdict-before-the-court-report.pdf',
  '/documents/court-duty-officer-statement-14-may-2026.pdf',
  '/documents/crimes-against-humanity-confirmed.pdf',
]);

app.use('/documents', async (req: Request, res: Response, next: NextFunction) => {
  const lowerPath = req.path.toLowerCase();
  const ext = Object.keys(TRACKED_EXTENSIONS).find(e => lowerPath.endsWith(e));
  if (!ext) return next();

  // ── All documents are freely accessible — maximise Google indexing & public access ─
  if (GATED_EXTENSIONS.has(ext)) {
    return next();
  }

  const basename = path.basename(req.path);
  const slug = path.basename(req.path, ext).toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');

  const primaryPath = path.join(documentsDir, basename);
  const fallbackPath = path.join(publicDocumentsDir, basename);
  // Also check subdirectories
  const subdirMatch = (() => {
    for (const subdir of ['forensic-analyses', 'gospels', 'testimony', 'evidence', 'official-documents']) {
      const p = path.join(documentsDir, subdir, basename);
      if (fs.existsSync(p)) return p;
      const p2 = path.join(publicDocumentsDir, subdir, basename);
      if (fs.existsSync(p2)) return p2;
    }
    return null;
  })();
  const filePath = fs.existsSync(primaryPath) ? primaryPath
    : fs.existsSync(fallbackPath) ? fallbackPath
    : subdirMatch;

  if (!filePath) return next();

  storage.incrementDownloadCount(slug, req.get('user-agent')).catch(() => {});

  res.setHeader('Content-Type', TRACKED_EXTENSIONS[ext]);
  res.setHeader('Content-Disposition', ['.pdf', '.mp3', '.mp4', '.jpeg', '.jpg', '.png'].includes(ext) ? 'inline' : 'attachment');
  res.setHeader('Cache-Control', 'no-store');

  if (ext === '.pdf') {
    try {
      const rawBuf = fs.readFileSync(filePath);
      const docTitle = path.basename(req.path, '.pdf').replace(/[-_]/g, ' ').replace(/\b\w/g, c => c.toUpperCase());
      const finalBuf = await prependReceiptToPDF(rawBuf, docTitle);
      res.setHeader('Content-Length', finalBuf.length);
      return res.end(finalBuf);
    } catch {
      return res.sendFile(filePath, (err) => { if (err) next(); });
    }
  }

  res.sendFile(filePath, (err) => {
    if (err) next();
  });
});
// Fallback static for any untracked file type in documents folder
app.use('/documents', express.static(documentsDir));
app.use('/documents', express.static(publicDocumentsDir));
// Production fallback: large dirs are excluded from the repl layer via .replitignore
// to stay under the 8 GiB image limit. Redirect to GitHub Pages mirror instead.
// In dev, the express.static middlewares above match first so this never fires.
const GHPAGES_BASE = 'https://drbarrandodger.github.io/barran-dodger-archive';
app.use('/documents', (req: Request, res: Response) => {
  res.redirect(302, `${GHPAGES_BASE}/documents${req.path}`);
});

app.use('/assets', express.static(path.join(deployDir, 'assets'), {
  setHeaders: (res) => {
    res.setHeader('Cache-Control', 'public, max-age=86400');
  }
}));
app.use('/images', express.static(path.join(deployDir, 'images'), {
  setHeaders: (res) => {
    res.setHeader('Cache-Control', 'public, max-age=86400');
  }
}));

// Large static dirs are excluded from the repl layer via .replitignore to keep
// the Docker image under the 8 GiB limit. Serve locally when present (dev),
// otherwise redirect to GitHub Pages mirror (production).
const clientPublicDir = path.resolve(process.cwd(), 'client/public');
const LARGE_STATIC_CACHE = { setHeaders: (res: any) => { res.setHeader('Cache-Control', 'public, max-age=86400'); } };

app.use('/evidence-images', express.static(path.join(clientPublicDir, 'evidence-images'), LARGE_STATIC_CACHE));
app.use('/evidence-images', (_req: Request, res: Response) => { res.redirect(302, `${GHPAGES_BASE}/evidence-images${_req.path}`); });

app.use('/evidence', express.static(path.join(clientPublicDir, 'evidence'), LARGE_STATIC_CACHE));
app.use('/evidence', (_req: Request, res: Response) => { res.redirect(302, `${GHPAGES_BASE}/evidence${_req.path}`); });

app.use('/audio', express.static(path.join(clientPublicDir, 'audio'), LARGE_STATIC_CACHE));
app.use('/audio', (_req: Request, res: Response) => { res.redirect(302, `${GHPAGES_BASE}/audio${_req.path}`); });

app.use('/video', express.static(path.join(clientPublicDir, 'video'), LARGE_STATIC_CACHE));
app.use('/video', (_req: Request, res: Response) => { res.redirect(302, `${GHPAGES_BASE}/video${_req.path}`); });

app.use('/covers', express.static(path.join(clientPublicDir, 'covers'), LARGE_STATIC_CACHE));
app.use('/covers', (_req: Request, res: Response) => { res.redirect(302, `${GHPAGES_BASE}/covers${_req.path}`); });

app.use('/forensic-analyses', express.static(path.join(clientPublicDir, 'forensic-analyses'), LARGE_STATIC_CACHE));
app.use('/forensic-analyses', (_req: Request, res: Response) => { res.redirect(302, `${GHPAGES_BASE}/forensic-analyses${_req.path}`); });

// images: try github-pages-deploy first (already registered above), then client/public, then GH Pages
app.use('/images', express.static(path.join(clientPublicDir, 'images'), LARGE_STATIC_CACHE));
app.use('/images', (_req: Request, res: Response) => { res.redirect(302, `${GHPAGES_BASE}/images${_req.path}`); });

// /zips/* — redirect to GitHub Releases (ZIPs are excluded from the repl layer via .replitignore)
app.use('/zips', (_req: Request, res: Response) => {
  res.redirect(302, `https://github.com/drbarrandodger/barran-dodger-archive/releases/tag/zip-archives-2026-08-17`);
});
const httpServer = createServer(app);

declare module "http" {
  interface IncomingMessage {
    rawBody: unknown;
  }
}

app.use(
  express.json({
    verify: (req, _res, buf) => {
      req.rawBody = buf;
    },
  }),
);

app.use(express.urlencoded({ extended: false }));

export function log(message: string, source = "express") {
  const formattedTime = new Date().toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
    second: "2-digit",
    hour12: true,
  });

  console.log(`${formattedTime} [${source}] ${message}`);
}

app.use((req, res, next) => {
  const start = Date.now();
  const path = req.path;
  let capturedJsonResponse: Record<string, any> | undefined = undefined;

  const originalResJson = res.json;
  res.json = function (bodyJson, ...args) {
    capturedJsonResponse = bodyJson;
    return originalResJson.apply(res, [bodyJson, ...args]);
  };

  res.on("finish", () => {
    const duration = Date.now() - start;
    if (path.startsWith("/api")) {
      let logLine = `${req.method} ${path} ${res.statusCode} in ${duration}ms`;
      if (capturedJsonResponse) {
        logLine += ` :: ${JSON.stringify(capturedJsonResponse)}`;
      }

      log(logLine);
    }
  });

  next();
});

// ── Startup bypass: serve 200 for / while routes are registering ─────────────
// Prevents "status 500" healthcheck failures during the route-registration window.
// Once appReady = true, this middleware calls next() and the full app handles it.
let appReady = false;
app.use((req: Request, res: Response, next: NextFunction) => {
  if (!appReady && req.method === 'GET' && (req.path === '/' || req.path === '')) {
    res.status(200).setHeader('Cache-Control', 'no-store').send(
      '<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"><title>Barran Dodger — Starting</title>' +
      '<style>body{background:#0a0d1a;color:#e9a00a;font-family:Georgia,serif;padding:60px;text-align:center}</style></head>' +
      '<body><h1>Barran Dodger Legal &amp; Ethical Trust Fund</h1>' +
      '<p style="color:#aaa">Server is starting — please wait a moment and refresh.</p>' +
      '<meta http-equiv="refresh" content="3"></body></html>'
    );
    return;
  }
  next();
});

(async () => {
  // ── Open port FIRST — /health and / both respond before routes are registered ─
  const port = parseInt(process.env.PORT || "5000", 10);
  await new Promise<void>((resolve) => {
    httpServer.listen({ port, host: "0.0.0.0", reusePort: true }, () => {
      log(`serving on port ${port}`);
      resolve();
    });
  });

  await registerRoutes(httpServer, app);

  app.use((err: any, _req: Request, res: Response, _next: NextFunction) => {
    const status = err.status || err.statusCode || 500;
    const message = err.message || "Internal Server Error";
    res.status(status).json({ message });
    throw err;
  });

  // importantly only setup vite in development and after
  // setting up all the other routes so the catch-all route
  // doesn't interfere with the other routes
  if (process.env.NODE_ENV === "production") {
    serveStatic(app);
  } else {
    const { setupVite } = await import("./vite");
    await setupVite(httpServer, app);
  }

  // ── Mark fully ready — startup bypass disabled, full app now handles all routes
  appReady = true;

  // Auto-stamp any new unstamped own-publication PDFs on startup (delegates to scripts/stamp-pdfs.cjs)
  (async () => {
    try {
      const { spawn } = await import('child_process');
      const stampScript = path.join(process.cwd(), 'scripts', 'stamp-pdfs.cjs');
      if (!fs.existsSync(stampScript)) return;
      const child = spawn('node', [stampScript], { env: { ...process.env }, stdio: ['ignore', 'pipe', 'pipe'] });
      let output = '';
      child.stdout.on('data', (d: Buffer) => { output += d.toString(); });
      child.on('close', () => {
        const lines = output.trim().split('\n');
        const summary = lines[lines.length - 1];
        if (summary && summary.includes('Done:')) log(`[PDF stamp] ${summary}`);
      });
    } catch { /* skip gracefully */ }
  })();

  // Auto-ping search engines on startup + mass IndexNow + Wayback Machine key pages
  setTimeout(async () => {
    try {
      const https = await import('https');
      const fs2 = await import('fs');

      const httpsGet = (url: string) => new Promise<void>((resolve) => {
        https.get(url, { headers: { 'User-Agent': 'barrandodger-pinger/1.0' } },
          (r) => { r.resume(); resolve(); }).on('error', () => resolve());
      });

      const httpsPost = (hostname: string, postPath: string, body: string) => new Promise<number>((resolve) => {
        const buf = Buffer.from(body);
        const req = (https as any).request({ hostname, path: postPath, method: 'POST',
          headers: { 'Content-Type': 'application/json; charset=utf-8', 'Content-Length': buf.length, 'User-Agent': 'barrandodger-indexnow/1.0' } },
          (r: any) => { r.resume(); resolve(r.statusCode || 0); });
        req.on('error', () => resolve(0));
        req.write(buf); req.end();
      });

      // 1. Sitemap pings
      const sitemaps = ['sitemap.xml', 'sitemap-main.xml', 'sitemap-forensic.xml',
        'sitemap-publications.xml', 'sitemap-gospel.xml', 'sitemap-pages.xml',
        'sitemap-pdfs.xml', 'sitemap-news.xml'];
      for (const s of sitemaps) {
        await httpsGet(`https://webmaster.yandex.com/ping?sitemap=https://barrandodger.com/${s}`);
      }
      await httpsGet('https://www.google.com/ping?sitemap=https://barrandodger.com/sitemap-news.xml');
      log('SEO: pinged Yandex + Google News sitemaps');

      // 2. Mass IndexNow — build full URL list: all pages + all PDFs
      const BASE = 'https://barrandodger.com';
      const KEY = 'barrandodger2026indexnow';
      const pageUrls: string[] = [];
      // Core pages
      const corePaths = ['/', '/evidence', '/administrative-annihilation', '/retrospective-statement',
        '/manifesto', '/gospel', '/blockchain', '/publications', '/free-ebooks', '/membership',
        '/verdict-before-the-court', '/undeniable', '/church-of-barran-resonance-dodger',
        '/timeline', '/prophetic-papers', '/confidential-government-documents',
        '/statement-of-significance', '/ai-statement', '/reckoning-paper',
        '/legal-cease-desist-served', '/government-documents', '/forensic-economic-valuation',
        '/top-ten-gospels', '/the-unlikely-vessel', '/video-forensic-analysis', '/pdf-library',
        '/all-urls.txt', '/llms.txt', '/rss.xml', '/sitemap.xml'];
      for (const p of corePaths) pageUrls.push(`${BASE}${p}`);

      // All PDFs
      const pdfUrls: string[] = [];
      const docDir = path.resolve('client/public/documents');
      if (fs2.existsSync(docDir)) {
        for (const f of fs2.readdirSync(docDir)) {
          if ((f as string).toLowerCase().endsWith('.pdf')) {
            pdfUrls.push(`${BASE}/documents/${encodeURIComponent(f as string)}`);
          }
        }
      }

      const allUrls = [...new Set([...pageUrls, ...pdfUrls])].slice(0, 10000);
      const indexNowBody = JSON.stringify({
        host: 'barrandodger.com', key: KEY,
        keyLocation: `${BASE}/barrandodger-indexnow.txt`,
        urlList: allUrls,
      });

      // Submit to all IndexNow providers in parallel
      const providers = ['api.indexnow.org', 'www.bing.com', 'yandex.com', 'search.seznam.cz'];
      const results = await Promise.all(providers.map(h => httpsPost(h, '/indexnow', indexNowBody)));
      log(`SEO: IndexNow mass submit — ${allUrls.length} URLs → providers: ${results.join(',')}`);

      // 3. Wayback Machine — archive 10 most critical pages (non-blocking)
      const criticalPages = ['/', '/evidence', '/confidential-government-documents',
        '/verdict-before-the-court', '/undeniable', '/legal-cease-desist-served',
        '/blockchain', '/statement-of-significance', '/pdf-library', '/llms.txt'];
      (async () => {
        for (const p of criticalPages) {
          await httpsGet(`https://web.archive.org/save/${encodeURIComponent(`${BASE}${p}`)}`);
          await new Promise(r => setTimeout(r, 1500));
        }
        log('SEO: Wayback Machine — 10 critical pages submitted for archiving');
      })();

    } catch (e) { log(`SEO startup ping error (non-fatal): ${e}`); }
  }, 12000);
})().catch((err) => {
  console.error("[startup] fatal error — server failed to start:", err);
  process.exit(1);
});
