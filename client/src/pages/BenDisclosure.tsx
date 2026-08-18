import { Navigation } from "@/components/Navigation";
import { ComplicitByOmission } from "@/components/ComplicitByOmission";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { CrossLink } from "@/components/CrossLink";
import { DownloadBadge, useDownloadCounter, trackDownload } from "@/components/DownloadCounter";
import { Download, ExternalLink, AlertTriangle, Shield, FileText, Lock, MessageSquare, Gavel, Users } from "lucide-react";

const PDF_URL = "/documents/ben-ndis-disclosure-text-messages.pdf";

const SIGNIFICANCE_ITEMS = [
  {
    icon: <AlertTriangle className="h-5 w-5 text-orange-400 flex-shrink-0 mt-0.5" />,
    title: "Assassination Attempt — Confirmed by NDIS Provider",
    detail: "Ben, a registered NDIS provider (DSW Disability, ben@dswdisability.com.au), confirmed in direct text communication that the assassination attempt on Dr. McLean's life — alleged to have been ordered by a senior federal minister — was described to him by police as a \"close call.\" This is the first independent third-party confirmation of an allegation that has been formally submitted to the ICC and UNHCR and never rebutted by any institution.",
  },
  {
    icon: <Shield className="h-5 w-5 text-green-400 flex-shrink-0 mt-0.5" />,
    title: "Consensual Sex — Confirmed by Federal Police — Zero Sexual Crime",
    detail: "Federal police confirmed to Ben that the sexual encounter referenced in Dr. McLean's published memoir Recovered, Not Cured — which Dr. McLean himself described as \"regrettable\" consensual sex at a police break-up — involved consent. This confirmation means zero sexual crime occurred. Dr. McLean has always stated this. The fabricated counter-narrative was manufactured by Debbie Morgan, who Ben confirmed was paid to produce a false report. The fabrication has been used as a character assassination instrument across 35 years. Federal police's own account destroys it.",
  },
  {
    icon: <Lock className="h-5 w-5 text-red-400 flex-shrink-0 mt-0.5" />,
    title: "Non-Disclosure Agreement — Ben Forced to Sign",
    detail: "Ben was forced to sign a Non-Disclosure Agreement suppressing his knowledge of these events. He has since disclosed the substance of what he knows through his direct text communications with Dr. McLean — communications which are now part of the permanent public record. An NDA cannot suppress truth already placed into a blockchain-verified public archive. The NDA's existence is itself evidence of institutional knowledge of wrongdoing at the highest levels.",
  },
  {
    icon: <FileText className="h-5 w-5 text-blue-400 flex-shrink-0 mt-0.5" />,
    title: "Debbie Morgan — Paid to Fabricate a Report",
    detail: "Ben confirmed that Debbie Morgan was paid to fabricate a report against Dr. McLean. This corroborates Dr. McLean's account in Recovered, Not Cured — that the paranoia he described at the time was not psychiatric illness but an accurate perception of events actually occurring. The fabricated report has been used across multiple agency processes to discredit Dr. McLean's disclosures. Its manufactured origin is now independently confirmed.",
  },
  {
    icon: <Gavel className="h-5 w-5 text-[hsl(38,92%,50%)] flex-shrink-0 mt-0.5" />,
    title: "Bill Shorten — Named as Responsible for Political Exile",
    detail: "Ben confirmed that Bill Shorten — the NDIS Minister whose agency Dr. McLean was investigating when the $6 billion NDIS misappropriation was disclosed — was responsible for Dr. McLean's political exile from Victoria. This is consistent with the AVO weaponisation documented across the archive. The sequence — disclosure, ministerial retaliation, exile, assassination attempt — is now corroborated by an independent NDIS provider who was subsequently silenced by NDA.",
  },
  {
    icon: <Users className="h-5 w-5 text-purple-400 flex-shrink-0 mt-0.5" />,
    title: "Not a Single Professional Has Disproven Any Claim",
    detail: "In the entirety of this documented record — spanning 35 years, 2,304 primary source documents, ICC Article 7 submission, UNHCR Geneva filing, and now Ben's independent confirmation — not one professional, institution, politician, or named individual has formally disproven a single claim. The NDA confirms institutional awareness. The silence confirms institutional complicity. The text messages are now public.",
  },
];

export default function BenDisclosure() {
  const { count: downloadCount, scheduleRefresh } = useDownloadCounter(PDF_URL);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SEO
        title="Ben's NDIS Disclosure — Assassination Attempt, Consensual Sex Confirmed, NDA | Barran Dodger"
        description="NDIS provider Ben (DSW Disability) confirmed the assassination attempt ordered by a federal minister was a 'close call', that the sex was consensual per federal police (zero crime), and that Debbie Morgan was paid to fabricate a report. He was forced to sign an NDA. The text messages are now public."
        keywords="Ben NDIS provider disclosure, assassination attempt Bill Shorten, Debbie Morgan fabricated report, consensual sex federal police confirmed, NDA suppression, barran dodger whistleblower"
      />
      <Navigation />
      <ComplicitByOmission />
      <div style={{ paddingTop: "calc(var(--banner-height, 40px) + var(--nav-height, 64px))" }}>
        <div className="w-full bg-gradient-to-b from-[#0a1628] via-[#0d1f3c] to-black border-b-4 border-[hsl(38,92%,50%)] px-4 py-14">
          <div className="max-w-4xl mx-auto space-y-6">

            <div className="flex flex-wrap gap-2">
              <span className="bg-[hsl(38,92%,50%)] text-black text-[10px] font-black uppercase tracking-widest px-3 py-1.5 rounded-full">Primary Source Evidence</span>
              <span className="bg-[#1a2744] border border-[hsl(38,92%,50%)]/40 text-[hsl(38,92%,50%)] text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full">NDIS Provider Disclosure</span>
              <span className="bg-red-900/40 border border-red-500/40 text-red-300 text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full">NDA Suppressed — Now Public</span>
              <span className="bg-green-900/40 border border-green-500/40 text-green-300 text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full">Zero Sexual Crime — Police Confirmed</span>
            </div>

            <h1 className="text-3xl md:text-5xl font-black text-white leading-tight">
              Ben's NDIS Disclosure
            </h1>
            <p className="text-[hsl(38,92%,50%)] text-lg md:text-xl font-semibold leading-relaxed max-w-3xl">
              An NDIS provider independently confirmed the assassination attempt, the consensual nature of the sex (per federal police — zero crime), that Debbie Morgan was paid to fabricate a report, and that Bill Shorten was responsible for Dr. McLean's political exile. He was then forced to sign a Non-Disclosure Agreement. The text messages are now public.
            </p>

          </div>
        </div>

        <div className="max-w-4xl mx-auto px-4 py-12 space-y-12">

          {/* Download block */}
          <div className="rounded-2xl border-2 border-[hsl(38,92%,50%)]/50 bg-[#0d1f3c]/60 p-8 space-y-5">
            <div className="flex items-start gap-4">
              <MessageSquare className="h-10 w-10 text-[hsl(38,92%,50%)] flex-shrink-0 mt-1" />
              <div className="space-y-2">
                <h2 className="text-xl font-bold text-white">Full Text Message Record — Ben &amp; Dr. Richard McLean</h2>
                <p className="text-white/70 text-sm leading-relaxed">
                  Complete SMS/text message record between Dr. Richard William McLean (Barran Dodger) and Ben — NDIS provider, DSW Disability (<a href="mailto:ben@dswdisability.com.au" className="text-[hsl(38,92%,50%)] hover:underline">ben@dswdisability.com.au</a>). The record spans an extended period and includes Ben's direct admissions regarding: the assassination attempt (described by police as a "close call"), the consensual sex confirmation by federal police, the fabricated Debbie Morgan report, Bill Shorten's role in Dr. McLean's political exile, and Ben's subsequent NDA.
                </p>
                <p className="text-white/50 text-xs">
                  Document: ben-ndis-disclosure-text-messages.pdf · 29 MB · Blockchain-verified archive record
                </p>
              </div>
            </div>
            <div className="flex flex-wrap gap-3 items-center">
              <a
                href={PDF_URL}
                download
                onClick={() => { trackDownload(PDF_URL); scheduleRefresh(); }}
                className="inline-flex items-center gap-2 bg-[hsl(38,92%,50%)] hover:bg-[hsl(38,92%,44%)] text-black font-black px-6 py-3 rounded-xl transition-colors text-sm"
                data-testid="btn-download-ben-disclosure"
              >
                <Download className="h-4 w-4" /> Download Full Text Message Record
              </a>
              <DownloadBadge count={downloadCount} />
            </div>
          </div>

          {/* What this document proves */}
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-white border-b border-[hsl(38,92%,50%)]/20 pb-3">
              What This Document Proves — Six Confirmed Revelations
            </h2>
            <div className="space-y-5">
              {SIGNIFICANCE_ITEMS.map((item, i) => (
                <div key={i} className="flex gap-4 bg-[#0d1f3c]/40 border border-white/10 rounded-xl p-5">
                  {item.icon}
                  <div className="space-y-1.5">
                    <h3 className="font-bold text-white text-base">{item.title}</h3>
                    <p className="text-white/75 text-sm leading-relaxed">{item.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Context */}
          <div className="rounded-xl border border-white/10 bg-[#0d1f3c]/30 p-6 space-y-4">
            <h2 className="text-xl font-bold text-white">Why This Matters — The Full Context</h2>
            <div className="space-y-4 text-white/80 text-sm leading-relaxed">
              <p>
                For 35 years, the institutional response to Dr. Richard McLean's disclosures has been: silence, circular referral, psychiatric labelling, NDA suppression, and media blackout. Every claim has been met not with refutation — but with erasure.
              </p>
              <p>
                Ben is the first independent party — not Dr. McLean, not his archive, not an AI analysis — to confirm the core allegations from outside the persecution apparatus. Ben is an NDIS provider. He has no motive to fabricate. He was subsequently silenced by NDA. That NDA is itself evidence that what he knew was considered dangerous enough to suppress by formal legal instrument.
              </p>
              <p>
                The federal police confirmation that the sex was consensual — communicated to Ben and now disclosed in this record — destroys the fabricated counter-narrative used to discredit Dr. McLean for three decades. If federal police confirmed consent, there was no crime. There were no victims. The accusation was manufactured. Its manufacturer has been named.
              </p>
              <p>
                This document — a long-running text message record between Dr. McLean and his NDIS provider — is now part of the permanent public archive. It is blockchain-eligible. It cannot be recalled. The NDA that was meant to suppress it has failed.
              </p>
              <p className="text-[hsl(38,92%,50%)] font-semibold">
                Not a single professional, institution, politician, or named individual has disproven any claim in this archive. Ben's disclosure adds independent corroboration to the most serious allegations. The silence of everyone else confirms what Ben's disclosure reveals.
              </p>
            </div>
          </div>

          {/* Closing testimony */}
          <div className="text-center space-y-3 border-t border-[hsl(38,92%,50%)]/20 pt-8">
            <p className="text-white font-bold text-lg">My life is the proof.</p>
            <p className="text-white font-bold text-lg">My writing is my testimony.</p>
            <p className="text-white font-bold text-lg">My gospels are my ministry.</p>
            <p className="text-[hsl(38,92%,50%)] font-bold text-xl">God protects me when people won't.</p>
          </div>

          {/* Navigation */}
          <div className="flex flex-wrap gap-3 justify-center pt-4">
            <CrossLink to="/evidence" className="inline-flex items-center gap-2 bg-[#1a2744] border border-[hsl(38,92%,50%)]/30 hover:border-[hsl(38,92%,50%)] text-[hsl(38,92%,50%)] font-bold px-5 py-3 rounded-xl transition-colors text-sm">
              <FileText className="h-4 w-4" /> Full Evidence Archive
            </CrossLink>
            <CrossLink to="/legal-status" className="inline-flex items-center gap-2 bg-[#1a2744] border border-[hsl(38,92%,50%)]/30 hover:border-[hsl(38,92%,50%)] text-[hsl(38,92%,50%)] font-bold px-5 py-3 rounded-xl transition-colors text-sm">
              <Gavel className="h-4 w-4" /> Legal Status
            </CrossLink>
            <CrossLink to="/case-studies" className="inline-flex items-center gap-2 bg-[#1a2744] border border-[hsl(38,92%,50%)]/30 hover:border-[hsl(38,92%,50%)] text-[hsl(38,92%,50%)] font-bold px-5 py-3 rounded-xl transition-colors text-sm">
              <ExternalLink className="h-4 w-4" /> Case Studies
            </CrossLink>
          </div>

        </div>

        <Footer />
      </div>
    </div>
  );
}
