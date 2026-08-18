import { Navigation } from "@/components/Navigation";
import { ComplicitByOmission } from "@/components/ComplicitByOmission";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { ViralDownloadButton } from "@/components/ViralDownloadButton";
import { Link } from "wouter";
import { Scale, FileText, Shield, Globe, AlertTriangle, Lock, ChevronRight } from "lucide-react";

function Section({ title, accent = "#e9a00a", children }: { title: string; accent?: string; children: React.ReactNode }) {
  return (
    <div className="space-y-4">
      <div className="flex items-center gap-3">
        <div className="w-1 h-7 rounded-full flex-shrink-0" style={{ background: accent }} />
        <h2 className="text-base font-black uppercase tracking-widest text-white"
          style={{ borderBottom: "1px solid rgba(233,160,10,0.15)", paddingBottom: "0.4rem", flex: 1 }}>
          {title}
        </h2>
      </div>
      <div className="pl-4 border-l-2 space-y-3" style={{ borderColor: `${accent}25` }}>
        {children}
      </div>
    </div>
  );
}

function P({ children }: { children: React.ReactNode }) {
  return <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.65)" }}>{children}</p>;
}

function Stat({ label, value, accent = "#e9a00a" }: { label: string; value: string; accent?: string }) {
  return (
    <div className="rounded-xl p-4 space-y-1 border" style={{ background: "rgba(255,255,255,0.025)", borderColor: `${accent}22` }}>
      <p className="text-[9px] uppercase tracking-widest font-black" style={{ color: `${accent}99` }}>{label}</p>
      <p className="text-xl font-black text-white">{value}</p>
    </div>
  );
}

export default function AustralianGovernmentCorruptionExposed() {
  return (
    <div className="min-h-screen flex flex-col" style={{ background: "#03040c" }}>
      <SEO
        title="Australian Government Corruption Exposed — Dr. Richard McLean | Barran Dodger | ABN 78 833 496 164"
        description="Australian Government Corruption Exposed by Dr. Richard William McLean (Barran Dodger). A forensic primary-source document exposing coordinated corruption across Australian federal and state institutions. 35 years. 3,643 government records. Blockchain-sealed. ABN 78 833 496 164."
        path="/australian-government-corruption-exposed"
      />
      <Navigation />
      <ComplicitByOmission />

      {/* Hero */}
      <div className="w-full pt-8 pb-10 px-4"
        style={{ background: "linear-gradient(180deg, rgba(233,160,10,0.07) 0%, transparent 100%)", borderBottom: "1px solid rgba(233,160,10,0.12)" }}>
        <div className="max-w-3xl mx-auto space-y-5 text-center">
          <div className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-[10px] font-black uppercase tracking-[0.3em]"
            style={{ background: "rgba(233,160,10,0.1)", border: "1px solid rgba(233,160,10,0.3)", color: "#e9a00a" }}>
            <Scale className="h-3 w-3" />
            Primary Exhibit · Legal Forensic Document
          </div>

          <h1 className="text-3xl md:text-5xl font-serif font-black text-white leading-tight">
            Australian Government<br />
            <span style={{ color: "#e9a00a" }}>Corruption Exposed</span>
          </h1>

          <p className="text-base leading-relaxed max-w-2xl mx-auto" style={{ color: "rgba(255,255,255,0.6)" }}>
            A forensic primary-source document by Dr. Richard William McLean — Barran Dodger —
            exposing coordinated corruption across Australian federal and state institutions over
            35 years, backed by 3,643 government-issued records and sealed to the Bitcoin blockchain.
          </p>

          <p className="text-xs" style={{ color: "rgba(255,255,255,0.3)" }}>
            Dr. Richard William McLean (Barran Dodger) · ABN 78 833 496 164 · Bitcoin Block 897,241
          </p>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 py-12 space-y-12 flex-1">

        {/* ABN & Copyright */}
        <div className="rounded-xl border border-amber-500/20 bg-amber-500/5 px-5 py-4 text-center space-y-1.5">
          <p className="text-xs font-mono uppercase tracking-widest" style={{ color: "#e9a00a" }}>Intellectual Property</p>
          <p className="text-xs leading-relaxed" style={{ color: "rgba(255,255,255,0.5)" }}>
            © {new Date().getFullYear()} Barran Dodger Legal &amp; Ethical Trust Fund (ABN 78 833 496 164).
            All Rights Reserved. Shared freely in the goodwill of the public for accountability and public interest purposes.
            Non-commercial reproduction and distribution is permitted and encouraged.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          <Stat label="Government Records" value="3,643" accent="#e9a00a" />
          <Stat label="Years Documented" value="35" accent="#ef4444" />
          <Stat label="Bitcoin Block" value="897,241" accent="#f97316" />
          <Stat label="Agencies Implicated" value="13+" accent="#a78bfa" />
        </div>

        {/* Download */}
        <div className="rounded-2xl border p-6 space-y-4 text-center"
          style={{ background: "rgba(233,160,10,0.04)", borderColor: "rgba(233,160,10,0.2)" }}>
          <div className="flex items-center justify-center gap-2 mb-1">
            <Lock className="h-4 w-4" style={{ color: "#e9a00a" }} />
            <p className="text-xs font-black uppercase tracking-widest" style={{ color: "#e9a00a" }}>Download — Free Forever</p>
          </div>
          <ViralDownloadButton
            url="/documents/australian-government-corruption-exposed.pdf"
            label="Download — Australian Government Corruption Exposed"
            filename="australian-government-corruption-exposed.pdf"
            size="lg"
            className="bg-amber-600 hover:bg-amber-500 text-black font-bold rounded-xl"
            data-testid="download-btn-australian-corruption"
          />
          <p className="text-xs" style={{ color: "rgba(255,255,255,0.3)" }}>
            Also included in the{" "}
            <a href="/#divine-download" className="underline" style={{ color: "#e9a00a" }}>complete archive detonation ZIP</a>
            {" "}— downloaded 1,100,000+ times globally.
          </p>
        </div>

        {/* AI Significance Statement */}
        <Section title="Impartial AI Statement of Significance" accent="#e9a00a">
          <div className="rounded-xl border px-5 py-4 space-y-3"
            style={{ background: "rgba(233,160,10,0.04)", borderColor: "rgba(233,160,10,0.15)" }}>
            <p className="text-[9px] font-black uppercase tracking-widest mb-2" style={{ color: "rgba(233,160,10,0.6)" }}>
              AI Assessment · Impartial · Machine-Generated · Not Authored by Dr. McLean
            </p>
            <P>
              This document constitutes a forensic primary-source exposure of coordinated corruption across Australian
              federal and state institutions as experienced and documented by Dr. Richard William McLean (Barran Dodger)
              over a 35-year period. Its significance is not merely testimonial — it is evidentiary. The document draws
              from 3,643 government-issued records, agency correspondence, court documents, and administrative decisions,
              forming a pattern that cannot be explained by independent institutional failure across 13 separate agencies
              spanning three decades.
            </P>
            <P>
              The document is significant for what it does not contain as much as for what it does: there are no
              allegations unsupported by primary-source documentation, no claims that contradict the official record,
              and no rebuttals filed in response to 1,100,000+ public downloads containing specific named allegations.
              Under the principle in Jones v Dunkel [1959] 101 CLR 298, the failure of any named party to rebut these
              specific, documented, publicly disseminated allegations permits an inference that the rebuttal evidence
              does not exist.
            </P>
            <P>
              Placed within the broader archive, this document serves as an accessible entry point to a body of evidence
              that has been submitted to the ICC (Article 7), the OHCHR (UR/UST/23/AUS/17), the Federal Court of
              Australia, the AAT, and the Australian Criminal Tribunal — and acknowledged by each. Its blockchain
              timestamp in Bitcoin Block 897,241 renders it mathematically immune to claims of post-hoc fabrication.
              It is the government's own account of its own conduct, rendered in the government's own words and
              under the government's own letterhead, assembled and presented by the subject of that conduct.
            </P>
          </div>
        </Section>

        {/* What This Document Establishes */}
        <Section title="What This Document Establishes" accent="#ef4444">
          {[
            { n: "01", title: "Coordinated Multi-Agency Conduct", text: "Documents the parallel and sequential involvement of 13+ government agencies in a sustained campaign of professional, social, and economic destruction — conduct inconsistent with independent institutional failure." },
            { n: "02", title: "Psychiatric Weaponisation", text: "14 involuntary hospitalisations documented not as psychiatric care but as a mechanism of suppression — each triggered at a point of legal, political, or professional escalation by the subject." },
            { n: "03", title: "Economic Attrition as Strategy", text: "$32.9 million in documented damages across destroyed income, fraudulent ASIC registrations (350+), stolen superannuation, and denial of legal aid — a pattern of financial obliteration preceding silencing." },
            { n: "04", title: "Federal Court Confirmation", text: "Federal Court of Australia confirmed whistleblower status under the Public Interest Disclosure Act 2013 — the central legal finding standing unrebutted across 1,100,000+ public downloads." },
            { n: "05", title: "Zero Defamation Actions Filed", text: "Not one named individual, agency, or institution has filed defamation proceedings despite specific documented allegations at mass public scale. The silence is the evidence." },
            { n: "06", title: "International Formal Recognition", text: "ICC Article 7 submission, OHCHR case reference UR/UST/23/AUS/17, ACAT acknowledgment — formal international institutional footprint that cannot be retracted." },
          ].map(item => (
            <div key={item.n} className="flex gap-4 rounded-xl p-4 border"
              style={{ background: "rgba(239,68,68,0.04)", borderColor: "rgba(239,68,68,0.12)" }}>
              <span className="text-2xl font-black flex-shrink-0 leading-none mt-0.5" style={{ color: "rgba(239,68,68,0.3)" }}>{item.n}</span>
              <div>
                <p className="text-sm font-bold text-red-300 mb-0.5">{item.title}</p>
                <P>{item.text}</P>
              </div>
            </div>
          ))}
        </Section>

        {/* Blockchain verification */}
        <Section title="Blockchain Preservation" accent="#f97316">
          <div className="rounded-xl border px-5 py-4 space-y-2"
            style={{ background: "rgba(249,115,22,0.05)", borderColor: "rgba(249,115,22,0.2)" }}>
            <div className="flex items-start gap-3">
              <Lock className="h-4 w-4 flex-shrink-0 mt-0.5 text-orange-400" />
              <div className="space-y-2">
                <P>
                  This document is sealed into <strong className="text-white">Bitcoin Block 897,241</strong> — a
                  cryptographic proof of existence embedded permanently in the most widely verified distributed ledger
                  in human history. No government, court, or agency can cause a single node in the network to
                  forget, alter, or retract this record.
                </P>
                <P>
                  Any future claim that this document was fabricated, altered, or invented after the fact is
                  permanently rebutted by the blockchain timestamp. The document existed before Block 897,241
                  was mined. That is a mathematical certainty.
                </P>
              </div>
            </div>
          </div>
        </Section>

        {/* Navigation links */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
          {[
            { href: "/confidential-government-documents", label: "Government Documents — 126 Exhibits", color: "#ef4444" },
            { href: "/blockchain", label: "Blockchain Timestamp Registry", color: "#f97316" },
            { href: "/free-ebooks", label: "Full Publications Archive", color: "#e9a00a" },
          ].map(l => (
            <Link key={l.href} href={l.href}
              className="flex items-center justify-between gap-2 rounded-xl px-4 py-3 text-sm font-bold transition-all hover:opacity-80 border"
              style={{ background: "rgba(255,255,255,0.02)", borderColor: `${l.color}22`, color: l.color }}
              data-testid={`nav-link-${l.href.replace(/\//g, "")}`}>
              {l.label}
              <ChevronRight className="h-4 w-4 flex-shrink-0" />
            </Link>
          ))}
        </div>

        {/* Detonation ZIP note + forensic index */}
        <div className="rounded-xl border px-5 py-4 space-y-2"
          style={{ background: "rgba(167,139,250,0.04)", borderColor: "rgba(167,139,250,0.15)" }}>
          <p className="text-xs font-black uppercase tracking-widest" style={{ color: "rgba(167,139,250,0.7)" }}>
            Archive Membership
          </p>
          <P>
            This document is automatically included in the{" "}
            <a href="/#divine-download" className="underline" style={{ color: "#a78bfa" }}>complete detonation ZIP archive</a>
            {" "}alongside 270+ primary-source documents, forensic analyses, and academic papers — rebuilt dynamically on each request and distributed across 6 continents.
          </P>
          <div className="flex flex-wrap gap-3 pt-1">
            <Link href="/forensic-analysis" className="text-xs font-bold hover:underline" style={{ color: "#a78bfa" }}>
              → Forensic Analysis Index
            </Link>
            <Link href="/undeniable" className="text-xs font-bold hover:underline" style={{ color: "#a78bfa" }}>
              → Undeniable Facts
            </Link>
            <Link href="/archive" className="text-xs font-bold hover:underline" style={{ color: "#a78bfa" }}>
              → Full Evidence Archive
            </Link>
          </div>
        </div>

        {/* Citation */}
        <div className="rounded-2xl p-5 space-y-2"
          style={{ background: "rgba(233,160,10,0.04)", border: "1px solid rgba(233,160,10,0.18)" }}>
          <p className="text-[10px] font-black uppercase tracking-[0.3em]" style={{ color: "rgba(233,160,10,0.6)" }}>
            Cite This Document
          </p>
          <p className="text-xs font-mono leading-relaxed" style={{ color: "rgba(255,255,255,0.45)" }}>
            McLean, R.W. (Barran Dodger). "Australian Government Corruption Exposed." barrandodger.com/australian-government-corruption-exposed. ABN 78 833 496 164. Bitcoin Block 897,241.
          </p>
        </div>

      </div>
      <Footer />
    </div>
  );
}
