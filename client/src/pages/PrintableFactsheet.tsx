import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { Printer, Download, Copy, Check } from "lucide-react";
import { useState } from "react";

const FACTSHEET_TEXT = `BARRAN DODGER LEGAL & ETHICAL TRUST FUND
ABN 78 833 496 164 — barrandodger.com

THE FACTS — SOURCED FROM GOVERNMENT'S OWN DOCUMENTS

35 YEARS — 1990 to 2026
13 GOVERNMENT AGENCIES — including ASIO, OAIC, Commonwealth Ombudsman, NDIS, AFP, AHPRA, Victoria Police, ComCare, AAT, Federal Court, IBAC, Mental Health Complaints Commissioner, ATO

14 FORCED PSYCHIATRIC HOSPITALISATIONS
Zero criminal charges — ever. The hospitalisations correlate precisely with formal complaints filed against agencies.

FOUND WITH NO PULSE — 2021
Weribee Mercy Hospital. 2.87% survival probability. Survived. Kept documenting.

DOCUMENTED ASSASSINATION ATTEMPT — 2024
At 55B Archbold Road, Long Jetty NSW. Independent witness confirmed. Witness subsequently required to sign NDA.

ECONOMIC DESTRUCTION
$58.6M minimum — $112.8M mid-range forensic valuation.
Calculated from government's own cost schedules and entitlement records.

AI VERIFICATION — 675/675 CONFIRMED
52 independent AI forensic analyses (GPT, Claude, Gemini).
675 propositions tested. Zero contradicted. Across 52 independent analyses.

INTERNATIONAL RECORD
ICC Article 7 (crimes against humanity) — formally received, The Hague.
OHCHR case reference: UR/UST/23/AUS/17 — registered, Geneva.

ZERO DEFAMATION ACTIONS
1,100,000+ downloads across 6 continents.
Not one named agency or individual has contested any factual claim.

THE OPEN CHALLENGE
"If anything in this archive is false, file a defamation action. The court will examine every document. Nobody has. Ask yourself why."
— barrandodger.com/open-challenge

WHAT YOU CAN DO
1. Download and share: barrandodger.com
2. Email your MP: barrandodger.com/email-your-mp
3. Share templates: barrandodger.com/broadcast
4. Press kit for journalists: barrandodger.com/press
5. Sign the petition: barrandodger.com/sign-the-petition

"The archive has no single point of failure. It is on Replit, GitHub, Wayback Machine, Zenodo, and Bitcoin blockchain. It cannot be deleted."`;

export default function PrintableFactsheet() {
  const [copied, setCopied] = useState(false);
  const copy = () => {
    navigator.clipboard?.writeText(FACTSHEET_TEXT).catch(() => {});
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className="min-h-screen bg-zinc-950 text-white">
      <SEO
        title="Printable Factsheet — Barran Dodger Archive | Hand Out Offline"
        description="Print-ready factsheet summarising the Barran Dodger archive. Key facts, government document sources, international legal status, and action steps. Free to print and distribute."
        path="/factsheet"
        keywords="barran dodger factsheet, printable whistleblower facts, hand out Australia government corruption, offline share Richard McLean archive, print facts flyer"
      />
      <Navigation />

      <section className="relative pt-24 pb-8 px-4 text-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-zinc-900/50 to-zinc-950 pointer-events-none" />
        <div className="relative max-w-2xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 bg-zinc-800/60 border border-zinc-700/40 rounded-full px-4 py-1.5">
            <Printer className="h-3.5 w-3.5 text-zinc-400" />
            <span className="text-zinc-400 text-xs font-mono uppercase tracking-widest">Print &amp; distribute offline</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-serif font-black text-white leading-tight">
            Printable Factsheet
          </h1>
          <p className="text-zinc-400 text-sm max-w-xl mx-auto">
            Print this and hand it to someone. Stick it on a noticeboard. Leave it at a GP clinic waiting room or library. Every offline copy is one that can't be blocked.
          </p>
          <div className="flex flex-wrap justify-center gap-3 pt-2">
            <button onClick={() => window.print()}
              className="inline-flex items-center gap-2 bg-white text-black font-black text-sm rounded-xl px-5 py-2.5 hover:bg-zinc-200 transition-colors"
              data-testid="button-print-factsheet">
              <Printer className="h-4 w-4" /> Print This Page
            </button>
            <button onClick={copy}
              className="inline-flex items-center gap-2 bg-zinc-800 hover:bg-zinc-700 text-white font-bold text-sm rounded-xl px-5 py-2.5 transition-colors"
              data-testid="button-copy-factsheet">
              {copied ? <Check className="h-4 w-4 text-green-400" /> : <Copy className="h-4 w-4" />}
              {copied ? "Copied!" : "Copy as text"}
            </button>
          </div>
        </div>
      </section>

      {/* Printable area */}
      <section className="px-4 pb-12 max-w-2xl mx-auto" id="printable-factsheet">
        <div className="rounded-2xl border border-zinc-700/40 bg-white text-zinc-900 p-8 print:rounded-none print:border-none print:shadow-none" style={{ fontFamily: "serif" }}>
          <div className="text-center border-b-2 border-zinc-900 pb-4 mb-6">
            <p className="font-bold text-xl uppercase tracking-widest">Barran Dodger</p>
            <p className="text-sm text-zinc-600">Legal &amp; Ethical Trust Fund · ABN 78 833 496 164</p>
            <p className="text-xs text-zinc-500 mt-1">barrandodger.com</p>
          </div>

          <h2 className="text-center font-black text-lg uppercase tracking-widest mb-6 text-zinc-800">
            The Facts — From Government's Own Documents
          </h2>

          {[
            { heading: "35 Years — 1990 to 2026", body: "13 government agencies — including ASIO, OAIC, Commonwealth Ombudsman, NDIS, AFP, AHPRA, Victoria Police, ComCare, AAT, Federal Court, IBAC, Mental Health Complaints Commissioner." },
            { heading: "14 Forced Psychiatric Hospitalisations", body: "Zero criminal charges — ever. The hospitalisations correlate precisely with formal complaints filed against agencies. The government's own clinical records show he was 'neither psychotic nor delusional.'" },
            { heading: "Found With No Pulse — 2021", body: "Weribee Mercy Hospital. 2.87% survival probability. Survived. Continued documenting. The first thing he did when he recovered was return to the archive." },
            { heading: "Documented Assassination Attempt — 2024", body: "At 55B Archbold Road, Long Jetty NSW. Independent disability support worker confirmed. Subsequently required to sign a non-disclosure agreement." },
            { heading: "$112.8M Mid-Range Economic Destruction", body: "Calculated from government's own cost schedules. $58.6M minimum. Documented across NDIS, ComCare, Centrelink entitlement suppression." },
            { heading: "675/675 AI Propositions Confirmed", body: "52 independent forensic AI analyses (GPT, Claude, Gemini). Zero contradictions across 3,643 primary source documents." },
            { heading: "ICC & OHCHR — Internationally Registered", body: "ICC Article 7 (crimes against humanity) formally received, The Hague. OHCHR case UR/UST/23/AUS/17 registered, Geneva." },
            { heading: "Zero Defamation Actions", body: "1,100,000+ downloads across 6 continents. Not one named agency or individual has contested any factual claim in any court." },
          ].map(item => (
            <div key={item.heading} className="mb-4 pb-4 border-b border-zinc-200 last:border-b-0">
              <p className="font-black text-sm text-zinc-900 uppercase tracking-wide">{item.heading}</p>
              <p className="text-sm text-zinc-600 mt-1 leading-relaxed">{item.body}</p>
            </div>
          ))}

          <div className="border-t-2 border-zinc-900 pt-4 mt-4">
            <p className="font-black text-sm uppercase tracking-widest text-zinc-800 mb-3">What You Can Do</p>
            <div className="grid grid-cols-2 gap-2 text-xs text-zinc-700">
              {[
                ["Download & share", "barrandodger.com"],
                ["Email your MP", "barrandodger.com/email-your-mp"],
                ["Share templates", "barrandodger.com/broadcast"],
                ["Press kit", "barrandodger.com/press"],
                ["Sign petition", "barrandodger.com/sign-the-petition"],
                ["Academic citations", "barrandodger.com/academic-record"],
              ].map(([label, url]) => (
                <div key={label}>
                  <span className="font-bold">{label}:</span> <span className="font-mono text-[10px]">{url}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="text-center mt-6 pt-4 border-t border-zinc-200">
            <p className="text-[10px] text-zinc-400 font-mono">Barran Dodger Legal &amp; Ethical Trust Fund · ABN 78 833 496 164 · barrandodger.com · Free to print and distribute · No copyright restriction</p>
          </div>
        </div>
      </section>

      <style>{`
        @media print {
          body > *:not(#printable-factsheet) { display: none !important; }
          #printable-factsheet { display: block !important; position: fixed; top: 0; left: 0; width: 100%; }
          nav, footer { display: none !important; }
        }
      `}</style>

      <section className="px-4 pb-12 max-w-2xl mx-auto text-center space-y-2">
        <p className="text-zinc-600 text-xs">Print it. Leave it. Hand it out. Post it online. Every copy is a record that cannot be erased.</p>
        <p className="text-zinc-700 text-[10px] font-mono">ABN 78 833 496 164 · No copyright restriction · Free to reproduce</p>
      </section>

      <Footer />
    </div>
  );
}
