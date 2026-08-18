import { createHmac } from 'crypto';

const TOKEN_TTL_MS       = 7 * 24 * 60 * 60 * 1000;         // 7 days  (regular tokens)
const OWNER_TOKEN_TTL_MS = 365 * 24 * 60 * 60 * 1000;       // 1 year  (owner master token)

function getSecret(): string {
  return (process.env.STRIPE_SECRET_KEY || 'barrandodger-dl-fallback') + '-dl-v1';
}

function normalizeUrl(url: string): string {
  return url.split('?')[0].toLowerCase().replace(/\/+/g, '/').replace(/^\//, '');
}

// ── Regular per-document token ───────────────────────────────────────────────
export function issueDownloadToken(documentUrl: string): string {
  const payload = JSON.stringify({
    u: normalizeUrl(documentUrl),
    e: Date.now() + TOKEN_TTL_MS,
  });
  const b64 = Buffer.from(payload).toString('base64url');
  const sig = createHmac('sha256', getSecret()).update(b64).digest('base64url');
  return `${b64}.${sig}`;
}

// ── Owner master token — unlocks ALL documents for 1 year ────────────────────
// "u": "*" means the wildcard path — accepted for any document request.
export function issueOwnerMasterToken(): string {
  const payload = JSON.stringify({
    u: '*',
    e: Date.now() + OWNER_TOKEN_TTL_MS,
    owner: true,
  });
  const b64 = Buffer.from(payload).toString('base64url');
  const sig = createHmac('sha256', getSecret()).update(b64).digest('base64url');
  return `${b64}.${sig}`;
}

// ── Subscriber token — any verified subscriber gets wildcard access (365 days) ─
export function issueSubscriberToken(email: string): string {
  const payload = JSON.stringify({
    u: '*',
    e: Date.now() + OWNER_TOKEN_TTL_MS,
    sub: true,
    em: email.toLowerCase().trim(),
  });
  const b64 = Buffer.from(payload).toString('base64url');
  const sig = createHmac('sha256', getSecret()).update(b64).digest('base64url');
  return `${b64}.${sig}`;
}

// ── Validate token (regular or master wildcard) ───────────────────────────────
export function isValidDownloadToken(token: string, requestPath?: string): boolean {
  try {
    // Check env-var hard-bypass first (set OWNER_BYPASS_TOKEN in secrets)
    const envBypass = process.env.OWNER_BYPASS_TOKEN;
    if (envBypass && token === envBypass) return true;

    const dotIdx = token.lastIndexOf('.');
    if (dotIdx === -1) return false;
    const b64  = token.substring(0, dotIdx);
    const sig  = token.substring(dotIdx + 1);
    const expectedSig = createHmac('sha256', getSecret()).update(b64).digest('base64url');
    if (sig !== expectedSig) return false;

    const { u, e } = JSON.parse(Buffer.from(b64, 'base64url').toString());
    if (Date.now() > e) return false;

    // Wildcard master token — accepted for any path
    if (u === '*') return true;

    if (requestPath) {
      return normalizeUrl(requestPath) === u;
    }
    return true;
  } catch {
    return false;
  }
}
