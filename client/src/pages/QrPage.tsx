import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { useState } from "react";
import { Copy, CheckCheck, Printer, Download } from "lucide-react";

const SITE_URL = "https://www.barrandodger.com";
const QR_SIZE = 400;
const QR_API = `https://api.qrserver.com/v1/create-qr-code/?size=${QR_SIZE}x${QR_SIZE}&data=${encodeURIComponent(SITE_URL)}&color=1a2744&bgcolor=ffffff&format=png&margin=20`;

export default function QrPage() {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try { await navigator.clipboard.writeText(SITE_URL); } catch {}
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <SEO
        title="QR Code — Share Barran Dodger Archive | barrandodger.com"
        description="Printable QR code linking directly to barrandodger.com — the archive of 3,643 government documents. Share at events, print and distribute, post physically."
        path="/qr"
        keywords="barrandodger QR code, share whistleblower archive QR, print QR code Australia corruption"
      />
      <Navigation />

      <main className="flex-1 flex flex-col items-center justify-center px-4 py-16" style={{ paddingTop: "calc(var(--banner-height, 40px) + var(--nav-height, 64px) + 48px)" }}>

        <div className="max-w-lg w-full mx-auto text-center space-y-8">

          <div>
            <p className="font-mono text-xs uppercase tracking-[0.35em] mb-3" style={{ color: "#e9a00a" }}>
              Scan · Share · Print · Distribute
            </p>
            <h1 className="font-serif text-3xl md:text-4xl font-black text-foreground mb-3">
              Share the Archive<br />
              <span style={{ color: "#e9a00a" }}>Without a Screen</span>
            </h1>
            <p className="text-muted-foreground text-sm max-w-sm mx-auto leading-relaxed">
              Print this QR code and hand it out. Post it at community notice boards, libraries, churches,
              legal centres, and universities. Every scan is a new person who finds the evidence.
            </p>
          </div>

          {/* QR Code */}
          <div
            className="inline-block p-6 rounded-2xl mx-auto print:p-2 print:rounded-none print:shadow-none"
            style={{ background: "#ffffff", border: "3px solid rgba(233,160,10,0.4)", boxShadow: "0 0 40px rgba(233,160,10,0.1)" }}
            id="qr-block"
            data-testid="qr-code-block"
          >
            <img
              src={QR_API}
              alt="QR code linking to barrandodger.com"
              width={QR_SIZE}
              height={QR_SIZE}
              className="block"
              style={{ maxWidth: "min(340px, 80vw)", height: "auto" }}
            />
            <p className="mt-4 font-mono font-bold text-sm text-center" style={{ color: "#1a2744" }}>
              barrandodger.com
            </p>
            <p className="font-mono text-[10px] text-center mt-1" style={{ color: "#5a6a8a" }}>
              3,643 Government Documents · Zero Defamation Actions
            </p>
          </div>

          {/* Actions */}
          <div className="flex flex-wrap items-center justify-center gap-3 print:hidden">
            <button
              onClick={() => window.print()}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-black text-sm transition-all hover:scale-105"
              style={{ background: "#e9a00a", color: "#000" }}
              data-testid="button-print-qr"
            >
              <Printer className="h-4 w-4" />
              Print QR Code
            </button>
            <a
              href={QR_API}
              download="barrandodger-qr.png"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-black text-sm transition-all hover:scale-105 border"
              style={{ borderColor: "rgba(233,160,10,0.4)", color: "#e9a00a" }}
              data-testid="link-download-qr"
            >
              <Download className="h-4 w-4" />
              Download PNG
            </a>
            <button
              onClick={handleCopy}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold text-sm transition-all border"
              style={{ borderColor: "rgba(255,255,255,0.15)", color: copied ? "#22c55e" : "rgba(255,255,255,0.6)" }}
              data-testid="button-copy-url-qr"
            >
              {copied ? <CheckCheck className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
              {copied ? "Copied!" : "Copy URL"}
            </button>
          </div>

          {/* Distribution ideas */}
          <div
            className="rounded-2xl p-6 text-left print:hidden"
            style={{ background: "rgba(233,160,10,0.04)", border: "1px solid rgba(233,160,10,0.15)" }}
          >
            <p className="font-black text-sm mb-4" style={{ color: "#e9a00a" }}>
              Where to distribute this QR code:
            </p>
            <div className="grid grid-cols-2 gap-2">
              {[
                "Community notice boards",
                "Church bulletins / noticeboards",
                "University campuses",
                "Legal aid waiting rooms",
                "Public libraries",
                "Community centres",
                "Protest signs / flyers",
                "Local newspaper letters",
                "Social media profile pic overlay",
                "Email signatures",
                "Business cards",
                "Letterbox drops",
              ].map(idea => (
                <div key={idea} className="flex items-start gap-2 text-xs" style={{ color: "rgba(255,255,255,0.6)" }}>
                  <span style={{ color: "#e9a00a" }}>→</span>
                  {idea}
                </div>
              ))}
            </div>
          </div>

          <p className="text-xs font-mono print:hidden" style={{ color: "rgba(255,255,255,0.2)" }}>
            ABN 78 833 496 164 · Barran Dodger Legal & Ethical Trust Fund · barrandodger.com
          </p>
        </div>

      </main>

      <style>{`
        @media print {
          body { background: white !important; }
          header, footer, nav { display: none !important; }
          main { padding: 0 !important; display: block !important; }
          #qr-block { border: 2px solid #1a2744 !important; box-shadow: none !important; margin: 40px auto; }
        }
      `}</style>

      <Footer />
    </div>
  );
}
