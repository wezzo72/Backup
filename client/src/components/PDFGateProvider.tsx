import { useState, useEffect, createContext, useContext } from "react";
import { Elements, CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { loadStripe, type Stripe as StripeType } from "@stripe/stripe-js";
import { X, Mail, AlertTriangle, ShieldCheck, User, CheckCircle2, Copy, Check, Globe, Unlock, Heart } from "lucide-react";

const ETH_ADDRESS = "0xB5bBbd2CeB082c75284A9796D4AA5a0317c52432";

interface GateContextType {
  openGate: (url: string, target?: string) => void;
}
const GateContext = createContext<GateContextType>({ openGate: () => {} });
export function useGate() { return useContext(GateContext); }

// ── Subscriber token storage (kept for backward compat — existing paid users) ──
const SUB_KEY = "bd_sub_token_v1";

function getSubscriberToken(): string | null {
  try { return localStorage.getItem(SUB_KEY); } catch { return null; }
}

function saveSubscriberToken(token: string) {
  try { localStorage.setItem(SUB_KEY, token); } catch {}
}

// ── Free-access flag — anyone who clicks "free access" unlocks the whole archive ──
const FREE_ACCESS_KEY = "bd_free_access_v1";

export function hasFreeAccess(): boolean {
  try { return localStorage.getItem(FREE_ACCESS_KEY) === "1"; } catch { return false; }
}

export function grantFreeAccess() {
  try { localStorage.setItem(FREE_ACCESS_KEY, "1"); } catch {}
}

// Court documents, PIDs, and primary forensic reports — always free
const FREE_DOCS = new Set([
  '/documents/federal-court-pid-assessment-2023.pdf',
  '/documents/2026-05-03-letter-of-demand-ablepoint-formal-complaint.pdf',
  '/documents/2026-05-03-letter-of-demand-ablepoint-safety.pdf',
  '/documents/crimes_against_humanity_final_demand.pdf',
  '/documents/master-consolidated-legal-record.pdf',
  // Primary forensic academic reports — unconditionally free, no gate
  '/documents/taxpayer-cost-estimation-35-years.pdf',
  '/documents/state-terrorism-forensic-analysis.pdf',
  '/documents/asylum-refugee-eligibility-analysis.pdf',
]);

function isFreeDocument(url: string): boolean {
  const path = url.split('?')[0].toLowerCase();
  return FREE_DOCS.has(path);
}

// Legacy per-document store (kept for backward compatibility)
const ACCESS_KEY = "bd_doc_tokens_v3";
interface DocEntry { token: string; expires: number; }
function getStore(): Record<string, DocEntry> {
  try { return JSON.parse(localStorage.getItem(ACCESS_KEY) || "{}"); } catch { return {}; }
}
function saveStore(store: Record<string, DocEntry>) {
  try { localStorage.setItem(ACCESS_KEY, JSON.stringify(store)); } catch {}
}
function normalizeUrl(url: string) { return url.split("?")[0].toLowerCase(); }

export function hasAccess(url?: string): boolean {
  // Court documents are always free — no gate
  if (url && isFreeDocument(url)) return true;
  // Free-access flag — user chose open access, archive is open to all
  if (hasFreeAccess()) return true;
  // Existing paid/subscriber token (wildcard) — unlocks everything
  if (getSubscriberToken()) return true;
  if (!url) return false;
  // Per-document payment token
  const entry = getStore()[normalizeUrl(url)];
  return !!entry && Date.now() < entry.expires && !!entry.token;
}

export function grantAccess(url: string, token: string, expires: number) {
  const store = getStore();
  store[normalizeUrl(url)] = { token, expires };
  saveStore(store);
}

export function getDownloadUrl(url: string): string {
  // Prefer subscriber (wildcard) token
  const subToken = getSubscriberToken();
  if (subToken) {
    const sep = url.includes("?") ? "&" : "?";
    return `${url}${sep}token=${encodeURIComponent(subToken)}`;
  }
  // Fallback to per-document token
  const entry = getStore()[normalizeUrl(url)];
  if (!entry?.token) return url;
  const sep = url.includes("?") ? "&" : "?";
  return `${url}${sep}token=${encodeURIComponent(entry.token)}`;
}

function isGatedHref(href: string): boolean {
  if (!href || href.startsWith("#") || href.startsWith("mailto:") || href.startsWith("tel:")) return false;
  const lower = href.toLowerCase();
  if (lower.endsWith(".pdf") || lower.endsWith(".epub")) return true;
  if (lower.includes("/attached_assets/")) return true;
  if (lower.includes("/api/epub/")) return true;
  if (lower.includes("/api/forensic/pdf/") || lower.includes("/api/forensic/full-essay") || lower.includes("/api/forensic/bundle")) return true;
  if (lower.includes("/api/video-analysis/pdf/")) return true;
  if (lower.includes("/api/divine-reckoning/pdf")) return true;
  if (lower.includes("/api/evidence-registry/analyses-bundle")) return true;
  if (lower.includes("/api/archive/divine-download")) return true;
  if (/\/api\/essays\/[^/]+\/(pdf|epub)/.test(lower)) return true;
  return false;
}

function getDocumentName(url: string): string {
  try {
    const parts = url.split("/");
    const filename = parts[parts.length - 1].split("?")[0];
    return decodeURIComponent(filename.replace(/[-_]/g, " ").replace(/\.pdf$/i, "").replace(/\.epub$/i, ""));
  } catch { return "this document"; }
}

const CARD_STYLE = {
  style: {
    base: { color: "#fde68a", fontFamily: "monospace", fontSize: "14px", "::placeholder": { color: "#78350f" }, iconColor: "#d97706" },
    invalid: { color: "#f87171" },
  },
};

function Field({ icon: Icon, placeholder, value, onChange, type = "text", required = false, testId }: {
  icon: any; placeholder: string; value: string; onChange: (v: string) => void;
  type?: string; required?: boolean; testId?: string;
}) {
  return (
    <div className="flex items-center gap-2 rounded-xl border border-orange-500/30 px-3 py-2.5" style={{ background: "#1c0c02" }}>
      <Icon className="h-4 w-4 text-orange-600/60 flex-shrink-0" />
      <input
        type={type}
        placeholder={placeholder + (required ? " *" : "")}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        required={required}
        className="bg-transparent text-orange-100 placeholder-amber-800/60 text-sm outline-none w-full"
        data-testid={testId}
      />
    </div>
  );
}

// ── Crypto payment panel ───────────────────────────────────────────────────────
function CryptoPanel() {
  const [copied, setCopied] = useState(false);
  const copy = () => {
    navigator.clipboard.writeText(ETH_ADDRESS);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };
  const qr = `https://api.qrserver.com/v1/create-qr-code/?data=ethereum:${ETH_ADDRESS}&size=180x180&bgcolor=2c1404&color=fbbf24&margin=8`;
  return (
    <div className="space-y-3">
      <div className="flex flex-col items-center gap-3 rounded-xl border border-orange-500/30 p-4" style={{ background: "#1a0900" }}>
        <img src={qr} alt="ETH QR code" width={120} height={120} className="rounded-lg" />
        <div className="w-full space-y-1">
          <p className="text-orange-400/60 text-[10px] uppercase tracking-widest text-center font-mono">Ethereum · ETH / USDC / ERC-20</p>
          <div className="flex items-center gap-2 rounded-lg border border-orange-500/30 px-3 py-2" style={{ background: "#0f0500" }}>
            <p className="text-orange-300 text-[10px] font-mono break-all flex-1 leading-snug">{ETH_ADDRESS}</p>
            <button onClick={copy} className="flex-shrink-0 text-orange-500 hover:text-orange-300 transition-colors" data-testid="button-crypto-copy">
              {copied ? <Check className="h-4 w-4 text-green-400" /> : <Copy className="h-4 w-4" />}
            </button>
          </div>
          {copied && <p className="text-green-400 text-[10px] text-center font-mono">Address copied!</p>}
        </div>
      </div>
      <div className="rounded-xl border border-blue-900/40 px-4 py-3 space-y-1.5" style={{ background: "#0a0a1a" }}>
        <p className="text-blue-300 text-[10px] font-black uppercase tracking-widest">How to pay with crypto</p>
        <ol className="text-blue-200/70 text-[11px] leading-relaxed space-y-0.5 list-decimal list-inside">
          <li>Open Coinbase → Tap <strong>Transfer → Send</strong></li>
          <li>Paste the address above · Send any amount in ETH or USDC</li>
          <li>Email your transaction hash to <strong className="text-blue-300">drbarrandodger@proton.me</strong></li>
          <li>Your download link will be sent back within 24 hours</li>
        </ol>
      </div>
      <p className="text-orange-900/60 text-[9px] text-center font-mono">ETH · USDC · DAI · any ERC-20 token accepted · ABN 78 833 496 164</p>
    </div>
  );
}

// ── Payment tabs — card, PayPal, or crypto ────────────────────────────────────
function PaymentTabs({ documentUrl, onSuccess, stripePromise }: { documentUrl: string; onSuccess: (id: string, name: string, email: string) => void; stripePromise: Promise<any> | null }) {
  const [tab, setTab] = useState<"card" | "paypal" | "crypto">("card");
  return (
    <div className="space-y-3">
      <div className="flex rounded-xl overflow-hidden border border-orange-500/30">
        <button
          onClick={() => setTab("card")}
          className={`flex-1 py-2 text-[10px] font-black uppercase tracking-widest transition-colors ${tab === "card" ? "bg-orange-600 text-black" : "text-orange-600 hover:text-orange-400"}`}
          data-testid="tab-pay-card"
        >
          💳 Card — $3.33
        </button>
        <button
          onClick={() => setTab("paypal")}
          className={`flex-1 py-2 text-[10px] font-black uppercase tracking-widest transition-colors border-l border-orange-500/30 ${tab === "paypal" ? "text-white" : "text-orange-600 hover:text-orange-400"}`}
          style={tab === "paypal" ? { background: "#0070ba" } : {}}
          data-testid="tab-pay-paypal"
        >
          🅿 PayPal
        </button>
        <button
          onClick={() => setTab("crypto")}
          className={`flex-1 py-2 text-[10px] font-black uppercase tracking-widest transition-colors border-l border-orange-500/30 ${tab === "crypto" ? "text-white" : "text-orange-600 hover:text-orange-400"}`}
          style={tab === "crypto" ? { background: "#627eea" } : {}}
          data-testid="tab-pay-crypto"
        >
          Ξ Crypto
        </button>
      </div>
      {tab === "card" ? (
        stripePromise ? (
          <Elements stripe={stripePromise}>
            <PaymentForm documentUrl={documentUrl} onSuccess={onSuccess} />
          </Elements>
        ) : (
          <div className="text-center py-4">
            <div className="h-5 w-5 border-2 border-orange-500 border-t-transparent rounded-full animate-spin mx-auto mb-2" />
            <p className="text-orange-400/50 text-xs">Loading payment form…</p>
          </div>
        )
      ) : tab === "paypal" ? (
        <div className="space-y-3 py-1">
          <a
            href="https://paypal.me/barrandodgertrust/3.33"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 w-full bg-[#0070ba] hover:bg-[#005ea6] text-white font-bold text-sm py-3 rounded-xl transition-colors"
            data-testid="button-gate-paypal-3-33"
          >
            🅿 Pay $3.33 AUD via PayPal
          </a>
          <div className="bg-zinc-900/60 rounded-lg p-3 space-y-1 text-xs text-zinc-400">
            <p className="font-bold text-zinc-300">After paying:</p>
            <p>Email <span className="text-orange-400 font-mono">drbarrandodger@proton.me</span> with subject <span className="font-mono text-white">Archive Access</span> and your name — the download link will be sent within 24 hours.</p>
            <p className="text-zinc-600 pt-1">ABN 78 833 496 164 · Barran Dodger Legal &amp; Ethical Trust Fund</p>
          </div>
        </div>
      ) : (
        <CryptoPanel />
      )}
    </div>
  );
}

// ── Payment form — the only route to access ───────────────────────────────────
function PaymentForm({ onSuccess, documentUrl }: { onSuccess: (paymentIntentId: string, name: string, email: string) => void; documentUrl: string }) {
  const stripe = useStripe();
  const elements = useElements();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [paying, setPaying] = useState(false);
  const [err, setErr] = useState("");

  const handlePay = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!stripe || !elements) return;
    if (!name.trim()) { setErr("Please enter your name."); return; }
    if (!email.includes("@")) { setErr("Please enter a valid email address."); return; }
    setPaying(true); setErr("");
    try {
      const res = await fetch("/api/stripe/payment-intent", { method: "POST" });
      const data = await res.json();
      if (!res.ok || !data.clientSecret) throw new Error(data.error || "Payment setup failed");
      const card = elements.getElement(CardElement);
      if (!card) throw new Error("Card element not ready");
      const result = await stripe.confirmCardPayment(data.clientSecret, {
        payment_method: { card, billing_details: { name: name.trim(), email: email.trim() } },
      });
      if (result.error) {
        setErr(result.error.message || "Payment failed. Please try again.");
      } else {
        onSuccess(result.paymentIntent.id, name.trim(), email.trim());
      }
    } catch (ex: any) {
      setErr(ex.message || "Payment failed. Please try again.");
    } finally { setPaying(false); }
  };

  return (
    <form onSubmit={handlePay} className="space-y-2.5">
      <Field icon={User} placeholder="Your full name" value={name} onChange={setName} required testId="input-pay-name" />
      <Field icon={Mail} placeholder="Email address" value={email} onChange={setEmail} type="email" required testId="input-pay-email" />
      <div className="border border-orange-500/30 rounded-xl p-3" style={{ background: "#1c0c02" }}>
        <CardElement options={CARD_STYLE} />
      </div>
      {err && <p className="text-red-400 text-xs flex items-center gap-1"><AlertTriangle className="h-3 w-3 flex-shrink-0" />{err}</p>}
      <button type="submit" disabled={paying || !stripe}
        className="w-full flex items-center justify-center gap-2 bg-orange-600 hover:bg-orange-600 disabled:opacity-50 disabled:cursor-not-allowed text-black font-bold text-sm px-5 py-3 rounded-xl transition-colors"
        data-testid="button-pay-333">
        <ShieldCheck className="h-4 w-4" />
        {paying ? "Processing payment…" : "Pay $3.33 AUD — Unlock This Document"}
      </button>
      <p className="text-orange-400/50 text-[10px] text-center">
        Secured by Stripe · ABN 78 833 496 164 · You will be added to the witness list
      </p>
    </form>
  );
}

export function PDFGateProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [pendingUrl, setPendingUrl] = useState("");
  const [pendingTarget, setPendingTarget] = useState("_blank");
  const [stripePromise, setStripePromise] = useState<Promise<StripeType | null> | null>(null);
  const [paid, setPaid] = useState(false);

  // Auto-open gate when redirected from a direct PDF URL (server sends /?gate=<path>)
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const gatePath = params.get('gate');
    if (gatePath) {
      // Clean the URL without reloading
      const clean = new URL(window.location.href);
      clean.searchParams.delete('gate');
      clean.searchParams.delete('expired');
      window.history.replaceState({}, '', clean.toString());
      // Small delay so the app is fully mounted before the modal opens
      setTimeout(() => {
        setPendingUrl(gatePath);
        setPendingTarget('_blank');
        setPaid(false);
        setIsOpen(true);
      }, 400);
    }
  }, []);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      const anchor = (e.target as HTMLElement).closest("a");
      if (!anchor) return;
      const href = anchor.getAttribute("href") || "";
      if (!isGatedHref(href)) return;
      if (hasAccess(href)) {
        e.preventDefault();
        e.stopPropagation();
        triggerDownload(href, anchor.getAttribute("target") || "_self");
        return;
      }
      e.preventDefault();
      e.stopPropagation();
      setPendingUrl(href);
      setPendingTarget(anchor.getAttribute("target") || "_self");
      setPaid(false);
      setIsOpen(true);
    };
    document.addEventListener("click", handler, true);
    return () => document.removeEventListener("click", handler, true);
  }, []);

  useEffect(() => {
    if (isOpen && !stripePromise) {
      fetch("/api/stripe/publishable-key")
        .then((r) => r.json())
        .then(({ publishableKey }) => { if (publishableKey) setStripePromise(loadStripe(publishableKey)); })
        .catch(() => {});
    }
  }, [isOpen, stripePromise]);

  const triggerDownload = (url: string, target: string) => {
    const downloadUrl = getDownloadUrl(url);
    const a = document.createElement("a");
    a.href = downloadUrl;
    a.target = target || "_blank";
    a.rel = "noopener noreferrer";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  const handlePaymentSuccess = async (paymentIntentId: string, payerName: string, payerEmail: string) => {
    try {
      const res = await fetch("/api/payment/issue-download-token", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ paymentIntentId, documentUrl: pendingUrl }),
      });
      const data = await res.json();
      if (data.token) grantAccess(pendingUrl, data.token, data.expires);
    } catch {}
    fetch("/api/subscribers", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: payerName, email: payerEmail, source: "stripe_payment_333" }),
    }).catch(() => {});
    setPaid(true);
    setTimeout(() => {
      setIsOpen(false);
      setPaid(false);
      triggerDownload(pendingUrl, pendingTarget);
    }, 1600);
  };

  const handleFreeAccess = () => {
    grantFreeAccess();
    setPaid(true);
    setTimeout(() => {
      setIsOpen(false);
      setPaid(false);
      triggerDownload(pendingUrl, pendingTarget);
    }, 900);
  };

  const close = () => { setIsOpen(false); setPaid(false); };
  const docName = pendingUrl ? getDocumentName(pendingUrl) : "this document";

  const openGate = (url: string, target: string = "_blank") => {
    if (hasAccess(url)) {
      triggerDownload(url, target);
      return;
    }
    setPendingUrl(url);
    setPendingTarget(target);
    setPaid(false);
    setIsOpen(true);
  };

  return (
    <GateContext.Provider value={{ openGate }}>
      {children}
      {isOpen && (
        <div
          className="fixed inset-0 z-[9998] flex items-center justify-center p-4"
          style={{ background: "rgba(0,0,0,0.93)" }}
          onClick={(e) => { if (e.target === e.currentTarget) close(); }}
          data-testid="pdf-gate-modal"
        >
          <div
            className="rounded-2xl overflow-hidden w-full max-w-md shadow-2xl animate-in zoom-in-95 duration-200 overflow-y-auto"
            style={{ background: "#0c1a05", border: "2px solid rgba(132,204,22,0.4)", maxHeight: "92vh" }}
          >
            {/* Top accent — lime green (free) */}
            <div className="h-1.5" style={{ background: "linear-gradient(90deg, #84cc16, #22c55e, #84cc16)" }} />

            {/* Header */}
            <div className="px-5 pt-4 pb-3 border-b flex items-start justify-between gap-3" style={{ borderColor: "rgba(132,204,22,0.2)" }}>
              <div className="flex items-center gap-2">
                <Globe className="h-4 w-4 text-lime-400 flex-shrink-0" />
                <div>
                  <p className="text-lime-300 text-xs font-black uppercase tracking-widest">
                    Archive Access — Free &amp; Open
                  </p>
                  <p className="text-lime-100/50 text-[11px] leading-snug mt-0.5">
                    Accessing: <span className="text-lime-300 font-semibold italic">{docName}</span>
                  </p>
                </div>
              </div>
              <button onClick={close} className="text-lime-600/60 hover:text-lime-400 transition-colors mt-0.5 shrink-0" data-testid="button-gate-close">
                <X className="h-4 w-4" />
              </button>
            </div>

            <div className="p-5 space-y-4">
              {paid ? (
                <div className="text-center space-y-3 py-4">
                  <CheckCircle2 className="h-12 w-12 text-lime-400 mx-auto" />
                  <p className="text-lime-300 font-bold text-lg">Archive open. Download starting…</p>
                  <p className="text-lime-400/60 text-sm">Every document is yours — free, permanently.</p>
                </div>
              ) : (
                <>
                  {/* PRIMARY: Free access — the main option */}
                  <div className="rounded-xl p-4 space-y-3" style={{ background: "rgba(132,204,22,0.09)", border: "1px solid rgba(132,204,22,0.35)" }}>
                    <div className="space-y-1">
                      <p className="text-lime-300 font-bold text-sm">This archive is free — a service to humanity and truth.</p>
                      <p className="text-lime-100/60 text-[11px] leading-relaxed">
                        3,643+ primary-source documents. 35 years of evidence. Open to every journalist, researcher,
                        advocate, and citizen on Earth. No account. No payment. No restriction.
                      </p>
                    </div>
                    <button
                      onClick={handleFreeAccess}
                      className="w-full flex items-center justify-center gap-2 font-bold text-black text-sm py-3 rounded-xl transition-all hover:opacity-90 active:scale-[0.98]"
                      style={{ background: "linear-gradient(135deg, #84cc16, #22c55e)" }}
                      data-testid="button-free-access"
                    >
                      <Unlock className="h-4 w-4" />
                      Access Free — Open the Archive
                    </button>
                    <p className="text-lime-600/50 text-[10px] text-center">
                      Unlocks this document and every document in the archive permanently on this device.
                    </p>
                  </div>

                  {/* DIVIDER */}
                  <div className="flex items-center gap-3">
                    <div className="flex-1 h-px" style={{ background: "rgba(255,165,0,0.2)" }} />
                    <p className="text-orange-500/60 text-[10px] font-black uppercase tracking-widest whitespace-nowrap">
                      — or support the legal fight —
                    </p>
                    <div className="flex-1 h-px" style={{ background: "rgba(255,165,0,0.2)" }} />
                  </div>

                  {/* SECONDARY: Optional $3.33 donation */}
                  <div className="rounded-xl px-4 py-3 space-y-1" style={{ background: "rgba(255,105,20,0.07)", border: "1px solid rgba(255,105,20,0.2)" }}>
                    <div className="flex items-start gap-2">
                      <Heart className="h-3.5 w-3.5 text-orange-400 flex-shrink-0 mt-0.5" />
                      <p className="text-orange-200/70 text-[11px] leading-relaxed">
                        Dr. McLean is under active threat in Long Jetty NSW.{" "}
                        <span className="text-orange-300 font-semibold">A voluntary $3.33 donation funds the legal case and formally witnesses the evidence.</span>{" "}
                        It is never required.
                      </p>
                    </div>
                  </div>

                  <PaymentTabs documentUrl={pendingUrl} onSuccess={handlePaymentSuccess} stripePromise={stripePromise} />

                  {/* Stats */}
                  <div className="grid grid-cols-3 gap-2 text-center pt-1 border-t" style={{ borderColor: "rgba(132,204,22,0.15)" }}>
                    <div>
                      <p className="text-lime-400 font-bold text-sm">451k+</p>
                      <p className="text-lime-600/70 text-[10px]">Downloads</p>
                    </div>
                    <div>
                      <p className="text-lime-400 font-bold text-sm">3,643+</p>
                      <p className="text-lime-600/70 text-[10px]">Documents</p>
                    </div>
                    <div>
                      <p className="text-lime-400 font-bold text-sm">Free</p>
                      <p className="text-lime-600/70 text-[10px]">Always</p>
                    </div>
                  </div>
                </>
              )}
            </div>

            <div className="px-5 pb-4">
              <p className="text-lime-900/60 text-[9px] text-center font-mono">
                ABN 78 833 496 164 · Barran Dodger Legal &amp; Ethical Trust Fund · barrandodger.com
              </p>
            </div>
          </div>
        </div>
      )}
    </GateContext.Provider>
  );
}
