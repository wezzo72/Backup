import { useState } from "react";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { Copy, Check, Download, FileText, Newspaper } from "lucide-react";

const TEMPLATE = (name: string, outlet: string, date: string) => `FOR IMMEDIATE RELEASE
${date}

CONTACT: Dr. Richard William McLean (Barran Dodger)
EMAIL: drbarrandodger@proton.me
PHONE: +61 0431 300 940
ARCHIVE: https://barrandodger.com
ABN: 78 833 496 164 — Barran Dodger Legal & Ethical Trust Fund

─────────────────────────────────────────────────────────────────────────

AUSTRALIAN WHISTLEBLOWER'S ARCHIVE SURPASSES 423,000 DOWNLOADS AMID ONGOING
INTERNATIONAL ACCOUNTABILITY PROCEEDINGS

One man's 35-year documentation of alleged systemic persecution by 13 Australian
government agencies reaches global audience — with formal submissions to the ICC,
UNHCR Geneva, and the Federal Court of Australia

LONG JETTY, NSW, AUSTRALIA — Dr. Richard William McLean, known publicly as Barran
Dodger, has compiled what is believed to be the most comprehensively documented case
of alleged institutional persecution in Australian history. The archive now contains
2,304 primary-source government documents, has received 1,100,000+ downloads across
six continents, and has been submitted to the International Criminal Court under
Article 7 of the Rome Statute.

KEY FACTS:
• 2,304 primary-source documents — official government correspondence, clinical
  records, NDIS files, court submissions, and agency communications spanning 1990–2025
• 13 government agencies documented — including DSS, NDIS, NSW Health, ASIO,
  Commonwealth Ombudsman, and the Office of the Public Guardian
• $18M–$32.9M in documented financial suppression, calculated from withheld
  entitlements, legal cost orders, and denied NDIS support
• 45 independent AI analyses returning 0 contradictions across 603 propositions
• Formal ICC Article 7 submission filed
• UNHCR Geneva filing lodged (Ref: URUST23AUS17)
• Federal Court PID acknowledgment of maladministration received
• Blockchain-timestamped evidence — immutable, publicly verifiable
• 1,100,000+ downloads — zero marketing spend, zero institutional funding

QUOTE FROM DR. MCLEAN:
"I did not choose this record. I survived it. Every document in this archive was
produced by the institutions themselves — not by me. I am merely the archivist.
The evidence speaks for itself."

BACKGROUND:
Dr. McLean holds a doctoral qualification and has a recognised disability. His
documentation practice began following what he describes as coordinated suppression
of a public interest disclosure filed with multiple government agencies. Despite
14 involuntary psychiatric detentions, documented homelessness, and an active death
threat (threatener now charged — Case No. I88267509, Wyong Local Court), the archive
has continued to grow and receive international attention.

The archive is freely accessible at: https://barrandodger.com
GitHub mirror: https://drbarrandodger.github.io/barran-dodger-archive/

─────────────────────────────────────────────────────────────────────────

Prepared for: ${name || "[Journalist Name]"}${outlet ? ` — ${outlet}` : ""}

For media inquiries, interview requests, or document access, contact:
drbarrandodger@proton.me | +61 0431 300 940

© ${new Date().getFullYear()} Barran Dodger Legal & Ethical Trust Fund (ABN 78 833 496 164).
Non-commercial reproduction for journalistic purposes is encouraged.

─────────────────────────────────────────────────────────────────────────
`;

export default function PressRelease() {
  const [name, setName] = useState("");
  const [outlet, setOutlet] = useState("");
  const [copied, setCopied] = useState(false);

  const today = new Date().toLocaleDateString("en-AU", { day: "numeric", month: "long", year: "numeric" });
  const text = TEMPLATE(name, outlet, today);

  const handleCopy = () => {
    navigator.clipboard.writeText(text).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    });
  };

  const handleDownload = () => {
    const blob = new Blob([text], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `barran-dodger-press-release-${Date.now()}.txt`;
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="min-h-screen flex flex-col" style={{ background: "#06080f" }}>
      <SEO
        title="Press Release Generator — Barran Dodger Archive"
        description="Generate a formatted press release about the Barran Dodger whistleblower archive for journalists, academics, and media professionals. ABN 78 833 496 164."
        path="/press-release"
      />
      <Navigation />

      <main className="flex-1 pt-20">
        <div className="w-full px-4 pt-12 pb-6 text-center"
          style={{ background: "linear-gradient(180deg, #06080f 0%, #0a0f1e 60%, #06080f 100%)" }}>
          <div className="max-w-3xl mx-auto space-y-4">
            <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest"
              style={{ background: "rgba(233,160,10,0.12)", color: "#e9a00a", border: "1px solid rgba(233,160,10,0.25)" }}>
              Media Resources
            </span>
            <h1 className="text-2xl md:text-4xl font-black text-white">Press Release Generator</h1>
            <p className="text-zinc-400 text-sm max-w-xl mx-auto">
              Journalists, academics, and media professionals — generate a formatted press release in seconds.
              Personalise it below, then copy or download.
            </p>
          </div>
        </div>

        <div className="max-w-3xl mx-auto px-4 py-10 space-y-6">
          {/* Personalise */}
          <div className="rounded-xl border p-5 space-y-4"
            style={{ background: "#0a0f1e", borderColor: "rgba(233,160,10,0.2)" }}>
            <h2 className="text-white font-bold flex items-center gap-2">
              <Newspaper className="w-4 h-4 text-amber-400" />
              Personalise (optional)
            </h2>
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label className="text-xs text-zinc-400 font-mono uppercase tracking-widest">Your Name</label>
                <input
                  type="text"
                  value={name}
                  onChange={e => setName(e.target.value)}
                  placeholder="Jane Smith"
                  className="w-full rounded-lg px-3 py-2 text-sm text-white border outline-none focus:border-amber-500 transition-colors"
                  style={{ background: "#06080f", borderColor: "rgba(255,255,255,0.1)" }}
                  data-testid="input-press-release-name"
                />
              </div>
              <div className="space-y-1.5">
                <label className="text-xs text-zinc-400 font-mono uppercase tracking-widest">Media Outlet</label>
                <input
                  type="text"
                  value={outlet}
                  onChange={e => setOutlet(e.target.value)}
                  placeholder="The Guardian Australia"
                  className="w-full rounded-lg px-3 py-2 text-sm text-white border outline-none focus:border-amber-500 transition-colors"
                  style={{ background: "#06080f", borderColor: "rgba(255,255,255,0.1)" }}
                  data-testid="input-press-release-outlet"
                />
              </div>
            </div>
          </div>

          {/* Preview */}
          <div className="rounded-xl border overflow-hidden"
            style={{ borderColor: "rgba(255,255,255,0.08)" }}>
            <div className="flex items-center justify-between px-4 py-3 border-b"
              style={{ background: "#0a0f1e", borderColor: "rgba(255,255,255,0.08)" }}>
              <span className="text-xs font-mono text-zinc-400 uppercase tracking-widest flex items-center gap-2">
                <FileText className="w-3.5 h-3.5" /> Press Release Preview
              </span>
              <div className="flex gap-2">
                <button
                  onClick={handleCopy}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition-colors"
                  style={{ background: copied ? "#065f46" : "#e9a00a", color: "#000" }}
                  data-testid="btn-press-release-copy"
                >
                  {copied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                  {copied ? "Copied!" : "Copy"}
                </button>
                <button
                  onClick={handleDownload}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold border transition-colors"
                  style={{ borderColor: "rgba(255,255,255,0.15)", color: "#fff" }}
                  data-testid="btn-press-release-download"
                >
                  <Download className="w-3.5 h-3.5" />
                  Download .txt
                </button>
              </div>
            </div>
            <pre className="p-5 text-xs text-zinc-300 leading-relaxed whitespace-pre-wrap overflow-x-auto"
              style={{ background: "#07090f", fontFamily: "monospace" }}
              data-testid="pre-press-release-preview">
              {text}
            </pre>
          </div>

          {/* Links */}
          <div className="flex flex-wrap gap-3 justify-center">
            <a href="/evidence" className="px-4 py-2 rounded-lg text-sm font-bold border transition-colors"
              style={{ borderColor: "rgba(233,160,10,0.3)", color: "#e9a00a" }}>
              Evidence Archive →
            </a>
            <a href="/press-kit" className="px-4 py-2 rounded-lg text-sm font-bold border transition-colors"
              style={{ borderColor: "rgba(255,255,255,0.1)", color: "#fff" }}>
              Full Press Kit →
            </a>
            <a href="/contact" className="px-4 py-2 rounded-lg text-sm font-bold border transition-colors"
              style={{ borderColor: "rgba(255,255,255,0.1)", color: "#fff" }}>
              Contact Dr. McLean →
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
