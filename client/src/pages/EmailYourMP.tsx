import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { Badge } from "@/components/ui/badge";
import { Copy, Check, ExternalLink, Mail } from "lucide-react";
import { useState } from "react";
import { ActionCallout } from "@/components/ActionCallout";
import { QuickSharePanel } from "@/components/QuickSharePanel";

const ARCHIVE = "https://barrandodger.com";

const KEY_POLITICIANS = [
  { name: "Anthony Albanese", role: "Prime Minister", email: "pm@pm.gov.au", electorate: "Grayndler NSW" },
  { name: "Mark Dreyfus KC", role: "Attorney-General", email: "mark.dreyfus.mp@aph.gov.au", electorate: "Isaacs VIC" },
  { name: "Bill Shorten", role: "Minister for NDIS", email: "bill.shorten.mp@aph.gov.au", electorate: "Maribyrnong VIC" },
  { name: "Andrew Giles", role: "Minister for Home Affairs", email: "andrew.giles.mp@aph.gov.au", electorate: "Scullin VIC" },
  { name: "Murray Watt", role: "Minister for Employment", email: "murray.watt@aph.gov.au", electorate: "Murton QLD" },
  { name: "David Shoebridge", role: "Senator — Greens (Whistleblower champion)", email: "senator.shoebridge@aph.gov.au", electorate: "NSW Senate" },
  { name: "Jacqui Lambie", role: "Senator — Jacqui Lambie Network", email: "senator.lambie@aph.gov.au", electorate: "TAS Senate" },
  { name: "Independent crossbench senators", role: "Senate crossbench — highest leverage", email: "senate@aph.gov.au", electorate: "Various" },
];

const LETTER_TEMPLATES = [
  {
    id: "direct",
    label: "Direct — For most MPs",
    subject: "Request for parliamentary inquiry: documented persecution of whistleblower Dr. Richard McLean (ABN 78 833 496 164)",
    body: `Dear [MP Name],

I am writing to request your urgent attention to what appears to be the most comprehensively documented case of institutional whistleblower persecution in Australian history.

Dr. Richard William McLean — operating publicly as Barran Dodger (ABN 78 833 496 164) — has assembled 3,643 primary source government documents spanning 35 years (1990–2026) documenting systematic persecution by 13 Australian government agencies, including ASIO, OAIC, the Commonwealth Ombudsman, APRA, NDIS, and others.

THE DOCUMENTED RECORD:
• 14 forced psychiatric hospitalisations — zero criminal charges, ever
• Found with no pulse in 2021 (2.87% survival probability) — survived — kept documenting
• Documented assassination attempt 2024 — independent witness subsequently NDA'd
• ICC Article 7 submission formally received (The Hague)
• OHCHR case reference: UR/UST/23/AUS/17 (Geneva)
• Forensic economic valuation: $58.6M minimum / $112.8M mid-range
• 52 independent AI forensic analyses — 675/675 propositions confirmed
• 1,100,000+ downloads across 6 continents — zero defamation actions filed

The Federal Court's own General Counsel confirmed the disclosed conduct meets statutory thresholds for perverting the course of justice, maladministration, and danger to health or safety under the PID Act 2013 — and then declined to act on procedural grounds.

I am requesting:
1. A formal parliamentary inquiry into the documented conduct of the agencies named in the archive
2. A review of the Public Interest Disclosure Act 2013 and whether it is fit for purpose
3. Parliamentary acknowledgment of the documented harm

The full archive is publicly available at ${ARCHIVE} — free to access, blockchain-sealed, and AI-verified. Dr. McLean is available for comment at drbarrandodger@proton.me.

Yours sincerely,
[Your Name]
[Your Electorate]`,
  },
  {
    id: "ndis",
    label: "NDIS-focused — For Bill Shorten",
    subject: "NDIS entrapment documented by independent disability support worker — request for ministerial response",
    body: `Dear Minister Shorten,

I am writing regarding documented NDIS entrapment of whistleblower Dr. Richard William McLean, confirmed by an independent disability support worker who was subsequently required to sign a non-disclosure agreement.

Ben, a DSW disability support provider, independently confirmed:
1. That Dr. McLean is being held in NDIS-controlled housing at 55B Archbold Road, Long Jetty NSW under conditions constituting entrapment
2. That an assassination attempt occurred in 2024 at this address
3. That NDIS support structure was weaponised to restrict Dr. McLean's freedom of movement

Ben subsequently confirmed police corroborated his account — and was then required to sign a non-disclosure agreement.

Dr. McLean has 3,643 primary source government documents spanning 35 years at ${ARCHIVE}. The archive includes specific NDIS documentation. He has an active ICC Article 7 submission and OHCHR case reference UR/UST/23/AUS/17.

I am requesting:
1. A ministerial review of Dr. McLean's NDIS support arrangement
2. An explanation for the NDA requirements imposed on independent support workers
3. A formal response to the documented entrapment claims

Yours sincerely,
[Your Name]`,
  },
  {
    id: "attorney",
    label: "Legal — For Attorney-General Dreyfus",
    subject: "PID Act failure — Federal Court General Counsel confirmed thresholds met — request for Attorney-General response",
    body: `Dear Attorney-General Dreyfus,

I am writing regarding a documented failure of the Public Interest Disclosure Act 2013 in the case of whistleblower Dr. Richard William McLean (Barran Dodger, ABN 78 833 496 164).

The Federal Court's own General Counsel confirmed in correspondence that the conduct disclosed by Dr. McLean "meets the statutory threshold for perverting the course of justice, maladministration, and danger to health or safety" under the PID Act 2013 — and then declined to act on procedural grounds.

This is documented in Dr. McLean's publicly available archive at ${ARCHIVE}.

Dr. McLean has:
• 3,643 primary source government documents
• ICC Article 7 submission received (The Hague)
• OHCHR case reference UR/UST/23/AUS/17
• 14 forced psychiatric hospitalisations — zero criminal charges
• 1,100,000+ downloads across 6 continents — zero defamation actions

Your name appears in the documentary record. I am requesting:
1. A formal statement from your office responding to the documented PID Act failure
2. An explanation for the absence of any formal investigation despite threshold confirmation
3. An independent review of the PID Act as applied to Dr. McLean's disclosures

Yours sincerely,
[Your Name]`,
  },
  {
    id: "senate",
    label: "Senate inquiry — For crossbench senators",
    subject: "Senate inquiry request: whistleblower Dr. Richard McLean — ICC Article 7, OHCHR registered, 3,643 documents",
    body: `Dear Senator [Name],

I am requesting your support for a Senate inquiry into the case of whistleblower Dr. Richard William McLean (Barran Dodger, ABN 78 833 496 164).

Dr. McLean's case represents what appears to be a systematic failure of every whistleblower protection mechanism in Australian law — documented across 35 years, 13 agencies, and 3,643 primary source government documents.

ICC Article 7 has been filed. OHCHR has assigned case reference UR/UST/23/AUS/17. 1,100,000+ people across 6 continents have downloaded the archive. Not one named institution has filed a defamation action.

As a senator with the power to refer matters to committee, I am asking you to:
1. Review the archive at ${ARCHIVE}
2. Consider a referral to the Senate Legal and Constitutional Affairs Committee
3. Request a formal government response to the documented record

Dr. McLean is at risk — an active Community Treatment Order authorises NSW Police to forcibly transport him to psychiatric detention. He lives at 55B Archbold Road, Long Jetty NSW. This is his address. His situation is documented.

Yours sincerely,
[Your Name]`,
  },
];

function CopyBlock({ label, text, mailto }: { label: string; text: string; mailto?: string }) {
  const [copied, setCopied] = useState(false);
  const copy = () => {
    navigator.clipboard?.writeText(text).catch(() => {});
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };
  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between flex-wrap gap-2">
        <p className="text-zinc-500 text-[10px] font-mono uppercase tracking-widest">{label}</p>
        <div className="flex gap-2">
          <button onClick={copy}
            className="flex items-center gap-1.5 bg-zinc-800 hover:bg-zinc-700 text-zinc-300 text-xs font-bold px-3 py-1.5 rounded-lg transition-colors"
            data-testid={`button-copy-${label.toLowerCase().replace(/\s/g, "-")}`}>
            {copied ? <Check className="h-3 w-3 text-green-400" /> : <Copy className="h-3 w-3" />}
            {copied ? "Copied!" : "Copy"}
          </button>
          {mailto && (
            <a href={mailto} className="flex items-center gap-1.5 bg-blue-900/30 hover:bg-blue-900/50 text-blue-300 text-xs font-bold px-3 py-1.5 rounded-lg transition-colors border border-blue-800/40"
              data-testid="link-open-email">
              <Mail className="h-3 w-3" /> Open email
            </a>
          )}
        </div>
      </div>
      <pre className="text-zinc-300 text-xs leading-relaxed whitespace-pre-wrap font-sans bg-zinc-950/60 rounded-lg p-4 border border-zinc-800 max-h-64 overflow-y-auto">{text}</pre>
    </div>
  );
}

export default function EmailYourMP() {
  const [selectedTemplate, setSelectedTemplate] = useState(LETTER_TEMPLATES[0]);

  const mailtoUrl = `mailto:?subject=${encodeURIComponent(selectedTemplate.subject)}&body=${encodeURIComponent(selectedTemplate.body)}`;

  return (
    <div className="min-h-screen bg-zinc-950 text-white">
      <SEO
        title="Email Your MP — Demand Investigation of Dr. Richard McLean | Barran Dodger"
        description="Pre-written letters for Australian MPs and senators demanding an independent investigation of the Barran Dodger archive. Email your representative in 60 seconds."
        path="/email-your-mp"
        keywords="email MP whistleblower Australia, contact senator Richard McLean, write to attorney general barran dodger, parliament investigation demand, PID Act failure Australia"
      />
      <Navigation />

      <section className="relative pt-24 pb-12 px-4 text-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-green-950/20 to-zinc-950 pointer-events-none" />
        <div className="relative max-w-3xl mx-auto space-y-4">
          <Badge className="bg-green-500/20 text-green-300 border-green-500/30 font-mono text-xs">
            <Mail className="h-3 w-3 mr-1" /> EMAIL YOUR MP — 60 SECONDS
          </Badge>
          <h1 className="text-4xl md:text-5xl font-serif font-black text-white leading-tight">
            Make It Their Problem.
          </h1>
          <p className="text-zinc-300 text-base max-w-2xl mx-auto">
            Pre-written letters for every angle — direct, NDIS, legal, Senate crossbench. Copy, customise your name, and send. MPs are required to respond to constituent correspondence.
          </p>
        </div>
      </section>

      {/* Find your MP */}
      <section className="px-4 pb-8 max-w-3xl mx-auto">
        <div className="rounded-2xl border border-green-700/30 bg-green-950/10 p-5 space-y-3">
          <p className="text-green-400 text-xs font-mono uppercase tracking-widest">Step 1 — Find Your MP</p>
          <p className="text-zinc-300 text-sm">Enter your postcode on the AEC website to find your federal MP and senators.</p>
          <a href="https://www.aec.gov.au/profiles/" target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-green-700 hover:bg-green-600 text-white font-bold text-sm rounded-xl px-5 py-2.5 transition-colors"
            data-testid="link-aec-find-mp">
            <ExternalLink className="h-4 w-4" /> Find My MP — AEC →
          </a>
          <p className="text-zinc-600 text-xs">aec.gov.au/profiles — free, official Australian Electoral Commission tool</p>
        </div>
      </section>

      {/* Key politicians */}
      <section className="px-4 pb-8 max-w-3xl mx-auto space-y-3">
        <p className="text-zinc-400 text-xs font-mono uppercase tracking-widest">High-Leverage Targets</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {KEY_POLITICIANS.map((p) => (
            <div key={p.name} className="rounded-xl border border-zinc-800 bg-zinc-900/40 p-4 space-y-2">
              <div>
                <p className="text-white font-bold text-sm">{p.name}</p>
                <p className="text-zinc-400 text-xs">{p.role} · {p.electorate}</p>
              </div>
              <a href={`mailto:${p.email}?subject=${encodeURIComponent(selectedTemplate.subject)}&body=${encodeURIComponent(selectedTemplate.body)}`}
                className="inline-flex items-center gap-1.5 text-xs text-green-400 hover:text-green-300 transition-colors"
                data-testid={`link-email-${p.name.toLowerCase().replace(/\s/g, "-")}`}>
                <Mail className="h-3 w-3" /> {p.email}
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* Letter templates */}
      <section className="px-4 pb-10 max-w-3xl mx-auto space-y-4">
        <p className="text-zinc-400 text-xs font-mono uppercase tracking-widest">Step 2 — Choose Your Letter</p>
        <div className="flex flex-wrap gap-2">
          {LETTER_TEMPLATES.map(t => (
            <button key={t.id} onClick={() => setSelectedTemplate(t)}
              className={`text-xs font-bold px-3 py-1.5 rounded-lg transition-colors ${selectedTemplate.id === t.id ? "bg-green-700 text-white" : "bg-zinc-800 text-zinc-400 hover:bg-zinc-700"}`}
              data-testid={`button-template-${t.id}`}>
              {t.label}
            </button>
          ))}
        </div>
        <div className="rounded-2xl border border-zinc-800 bg-zinc-900/40 p-5 space-y-4">
          <CopyBlock label="Subject line" text={selectedTemplate.subject} />
          <CopyBlock label="Letter body — replace [Your Name] and [Your Electorate]" text={selectedTemplate.body} mailto={mailtoUrl} />
        </div>
        <p className="text-zinc-600 text-xs leading-relaxed">
          Replace <span className="text-zinc-400 font-mono">[Your Name]</span>, <span className="text-zinc-400 font-mono">[MP Name]</span>, and <span className="text-zinc-400 font-mono">[Your Electorate]</span> before sending. MPs are legally required to respond to constituent correspondence within 30 days.
        </p>
      </section>

      <section className="px-4 pb-8 max-w-3xl mx-auto">
        <QuickSharePanel label="Share the archive while you're here" />
      </section>

      <section className="px-4 pb-8 max-w-3xl mx-auto">
        <ActionCallout title="More ways to create pressure" />
      </section>

      <section className="px-4 pb-12 max-w-3xl mx-auto text-center">
        <p className="text-zinc-700 text-xs font-mono">ABN 78 833 496 164 · Barran Dodger Legal &amp; Ethical Trust Fund · Free to use and adapt</p>
      </section>

      <Footer />
    </div>
  );
}
