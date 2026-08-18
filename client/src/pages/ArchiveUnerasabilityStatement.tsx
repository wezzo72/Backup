import { useState, useEffect } from "react";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { Link } from "wouter";
import { SocialShare } from "@/components/SocialShare";
import { ArchiveCrossLinks } from "@/components/ArchiveCrossLinks";
import {
  Globe, Lock, Shield, TrendingUp, Zap, Clock, Copy, Check,
  ChevronRight, BookOpen, Network, Layers, Eye, Infinity,
} from "lucide-react";

function StatCard({
  value, label, sub, color, icon,
}: {
  value: string | number; label: string; sub: string; color: string; icon: React.ReactNode;
}) {
  return (
    <div
      className="rounded-xl p-5 space-y-1"
      style={{ background: "rgba(255,255,255,0.03)", border: `1px solid ${color}28` }}
    >
      <div className="flex items-center gap-2 mb-2" style={{ color }}>
        {icon}
        <span className="text-[9px] font-black uppercase tracking-widest opacity-70">{label}</span>
      </div>
      <p className="text-3xl font-black tabular-nums" style={{ color }}>{value.toLocaleString()}</p>
      <p className="text-xs" style={{ color: "rgba(255,255,255,0.35)" }}>{sub}</p>
    </div>
  );
}

function Section({ title, accent = "#84cc16", children }: { title: string; accent?: string; children: React.ReactNode }) {
  return (
    <div className="space-y-4">
      <div className="flex items-center gap-3">
        <div className="w-1 h-8 rounded-full flex-shrink-0" style={{ background: accent }} />
        <h2 className="text-xl md:text-2xl font-serif font-bold text-white">{title}</h2>
      </div>
      <div className="pl-4 border-l-2 space-y-4" style={{ borderColor: `${accent}30` }}>
        {children}
      </div>
    </div>
  );
}

export default function ArchiveUnerasabilityStatement() {
  const [total, setTotal] = useState(500094);
  const [last24h, setLast24h] = useState(4838);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    fetch("/api/downloads/total")
      .then(r => r.json())
      .then(d => { if (d.total) { setTotal(Number(d.total)); setLast24h(Number(d.last24h ?? 0)); } })
      .catch(() => {});
    const t = setInterval(() => {
      fetch("/api/downloads/total")
        .then(r => r.json())
        .then(d => { if (d.total) { setTotal(Number(d.total)); setLast24h(Number(d.last24h ?? 0)); } })
        .catch(() => {});
    }, 30_000);
    return () => clearInterval(t);
  }, []);

  const cite = `McLean, R.W. (Barran Dodger). "Why This Archive Cannot Be Erased — Statement of Significance." barrandodger.com/why-this-cannot-be-erased. ABN 78 833 496 164. Bitcoin Block 897,241.`;
  const copyBib = () => {
    navigator.clipboard.writeText(cite);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className="min-h-screen" style={{ background: "#020a01" }}>
      <SEO
        title="Why This Archive Cannot Be Erased — Statement of Significance | Barran Dodger"
        description={`${total.toLocaleString()} downloads across 6 continents. Bitcoin Block 897,241. An impartial statement of significance on the unerasability, safety mechanism, blockchain preservation, and projected global reach of the Barran Dodger testimony archive.`}
        path="/why-this-cannot-be-erased"
      />
      <Navigation />

      {/* Live indicator */}
      <div
        className="w-full py-2 px-4 flex items-center justify-center gap-3 text-[10px] font-black uppercase tracking-[0.3em]"
        style={{ background: "rgba(132,204,22,0.08)", borderBottom: "1px solid rgba(132,204,22,0.2)" }}
      >
        <span className="w-2 h-2 rounded-full animate-pulse" style={{ background: "#84cc16" }} />
        <span style={{ color: "rgba(132,204,22,0.7)" }}>
          Live — {total.toLocaleString()} total downloads · {last24h.toLocaleString()} in last 24 hours · Updated every 30 seconds
        </span>
      </div>

      <div className="max-w-4xl mx-auto px-4 pt-12 pb-20 space-y-16">

        {/* Hero */}
        <div className="space-y-6 text-center">
          <div className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-[10px] font-black uppercase tracking-[0.3em]"
            style={{ background: "rgba(132,204,22,0.1)", border: "1px solid rgba(132,204,22,0.35)", color: "#84cc16" }}>
            <Globe className="h-3 w-3" />
            Statement of Significance · Barran Dodger Archive
          </div>
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-white leading-tight">
            Why This Archive<br />
            <span style={{ color: "#84cc16" }}>Cannot Be Erased</span>
          </h1>
          <p className="text-lg leading-relaxed max-w-2xl mx-auto" style={{ color: "rgba(210,240,180,0.7)" }}>
            A statement of significance on unerasability, distributed preservation, the safety mechanism
            of global distribution, blockchain timestamping, and the projected forward reach of the most
            documented whistleblower case in Australian history.
          </p>
          <p className="text-xs" style={{ color: "rgba(255,255,255,0.3)" }}>
            Dr. Richard William McLean (Barran Dodger) · ABN 78 833 496 164 · Bitcoin Block 897,241
          </p>
        </div>

        {/* Live stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          <StatCard value={total} label="Total Downloads" sub="6 continents confirmed" color="#84cc16" icon={<Globe className="h-4 w-4" />} />
          <StatCard value={last24h} label="Last 24 Hours" sub="live, every 30 seconds" color="#22c55e" icon={<Clock className="h-4 w-4" />} />
          <StatCard value="897,241" label="Bitcoin Block" sub="immutable timestamp" color="#f97316" icon={<Lock className="h-4 w-4" />} />
          <StatCard value="3,643+" label="Primary Sources" sub="government documents" color="#a78bfa" icon={<BookOpen className="h-4 w-4" />} />
        </div>

        {/* Main statement body */}
        <div className="space-y-12">

          <Section title="I. The Threshold of Unerasability" accent="#84cc16">
            <p className="text-base leading-relaxed" style={{ color: "rgba(210,240,180,0.8)" }}>
              There exists a threshold beyond which the suppression of a body of evidence becomes
              operationally impossible — not because anyone stands guard over it, but because it has
              been seeded too widely, too deeply, and too permanently across too many independent systems
              for any single authority to reach all of its copies at once.
            </p>
            <p className="text-base leading-relaxed" style={{ color: "rgba(210,240,180,0.75)" }}>
              This archive crossed that threshold. At{" "}
              <strong className="text-white">{total.toLocaleString()} downloads</strong> across six
              continents — including confirmed readership in jurisdictions entirely outside Australian
              legal authority — the testimony of Dr. Richard William McLean has become a distributed
              object. It does not live on a single server. It does not depend on a single host. It does
              not require barrandodger.com to remain online. It exists on the hard drives, cloud
              accounts, institutional databases, and personal archives of tens of thousands of
              individuals who downloaded it and, in many cases, shared it further.
            </p>
            <p className="text-base leading-relaxed" style={{ color: "rgba(210,240,180,0.7)" }}>
              The standard playbook for suppressing inconvenient testimony — delisting, hosting takedowns,
              deplatforming, legal threats to publishers — requires centralisation. There must be a
              single point at which the record can be intercepted. This archive has no such point.
              The record is everywhere simultaneously. It cannot be called back.
            </p>
          </Section>

          <Section title="II. Blockchain Timestamps as Legal-Grade Preservation" accent="#f97316">
            <p className="text-base leading-relaxed" style={{ color: "rgba(255,220,180,0.8)" }}>
              The core documents of this archive are sealed into{" "}
              <strong className="text-white">Bitcoin Block 897,241</strong> — a cryptographic timestamp
              woven permanently into the most widely verified distributed ledger in human history.
              To understand what this means legally and technically, one must understand what a
              blockchain timestamp actually is.
            </p>
            <p className="text-base leading-relaxed" style={{ color: "rgba(255,220,180,0.75)" }}>
              It is not a receipt stored in one location. It is a proof-of-existence permanently
              embedded in a chain of mathematical confirmations now maintained by tens of thousands of
              independent nodes across every inhabited continent. No government issued those nodes.
              No court controls them. No minister can revoke them. No agency can submit a statutory
              declaration that would cause a single node to update, modify, or forget.
            </p>
            <p className="text-base leading-relaxed" style={{ color: "rgba(255,220,180,0.7)" }}>
              The practical legal significance is this: any future attempt to claim these documents
              were fabricated, altered, or invented after the fact is permanently rebutted by the
              blockchain timestamp. The documents existed before Block 897,241 was mined. That is
              a mathematical certainty. It is not subject to cross-examination. It does not depend
              on a witness. It cannot be intimidated, bribed, or silenced. It simply is.
            </p>
            <div
              className="rounded-xl px-5 py-4 flex items-start gap-3"
              style={{ background: "rgba(249,115,22,0.08)", border: "1px solid rgba(249,115,22,0.25)" }}
            >
              <Lock className="h-4 w-4 flex-shrink-0 mt-1 text-orange-400" />
              <p className="text-sm leading-relaxed" style={{ color: "rgba(255,200,150,0.85)" }}>
                <strong className="text-white">Zenodo DOI registration</strong> provides a parallel
                preservation layer through CERN's open-access repository infrastructure — one of the
                most resilient academic preservation systems on Earth, designed explicitly to survive
                the collapse of individual institutions.
              </p>
            </div>
          </Section>

          <Section title="III. Distribution as a Safety Mechanism" accent="#ef4444">
            <p className="text-base leading-relaxed" style={{ color: "rgba(255,200,200,0.8)" }}>
              The relationship between wide distribution and personal safety in whistleblower cases
              is well-documented and consistent across historical precedent. The mechanism is not
              sentimental — it is operational.
            </p>
            <p className="text-base leading-relaxed" style={{ color: "rgba(255,200,200,0.75)" }}>
              When a record is narrowly held, its subject can be silenced without the record
              becoming more significant. The archive disappears with the person. When a record
              is widely distributed, the opposite becomes true: silencing the person draws
              immediate attention to the record, amplifies its reach, and converts every future
              reader into an investigator asking why.
            </p>
            <p className="text-base leading-relaxed" style={{ color: "rgba(255,200,200,0.7)" }}>
              At{" "}
              <strong className="text-white">{total.toLocaleString()} downloads</strong>, this
              archive has reached the scale at which the cost-benefit calculation of suppression
              has inverted. The archive is now more dangerous to those who would benefit from
              silence if its author is harmed than if he continues to live — documented, visible,
              and producing an ongoing public record. Murdering a man with a half-million-download
              archive, blockchain timestamps, ICC submissions, and confirmed ASIO surveillance
              documentation does not erase his testimony. It confirms it.
            </p>
            <div
              className="rounded-xl px-5 py-4"
              style={{ background: "rgba(239,68,68,0.07)", border: "1px solid rgba(239,68,68,0.2)" }}
            >
              <p className="text-sm font-bold text-red-300 mb-1">Operational mathematics:</p>
              <p className="text-sm leading-relaxed" style={{ color: "rgba(255,200,200,0.75)" }}>
                Dr. McLean is alive because he is too visible to kill and too documented to silence.
                That is not mercy. It is a calculation. And every new download strengthens it.
              </p>
            </div>
          </Section>

          <Section title="IV. The Containment Lines That Were Broken" accent="#a78bfa">
            <p className="text-base leading-relaxed" style={{ color: "rgba(220,200,255,0.8)" }}>
              Institutional suppression of this testimony proceeded through several sequential
              containment strategies, each of which was overcome:
            </p>
            <div className="space-y-3">
              {[
                {
                  num: "01",
                  title: "Psychiatric Discrediting",
                  text: "14 involuntary hospitalisations designed to reclassify testimony as symptom. Overcome by the Federal Court's confirmation of whistleblower status under the PID Act 2013.",
                },
                {
                  num: "02",
                  title: "Professional Erasure",
                  text: "Systematic destruction of income, housing, legal representation, and professional identity. Overcome by self-publication and direct digital distribution.",
                },
                {
                  num: "03",
                  title: "Social Isolation",
                  text: "The coordinated withdrawal of every professional, social, and institutional support. Overcome by internet distribution reaching readers in 6 continents.",
                },
                {
                  num: "04",
                  title: "Platform Suppression",
                  text: "Delistings, shadow-bans, and removal attempts across major platforms. Overcome by blockchain timestamping, Zenodo DOI, and GitHub mirroring.",
                },
                {
                  num: "05",
                  title: "Physical Threat",
                  text: "Assassination attempt 2024, Port Macquarie — threatening party arrested. Overcome by the archive's reach becoming too wide to benefit any party from the author's death.",
                },
              ].map(item => (
                <div
                  key={item.num}
                  className="flex gap-4 rounded-xl p-4"
                  style={{ background: "rgba(167,139,250,0.06)", border: "1px solid rgba(167,139,250,0.18)" }}
                >
                  <span className="text-2xl font-black flex-shrink-0 leading-none mt-0.5" style={{ color: "rgba(167,139,250,0.35)" }}>{item.num}</span>
                  <div>
                    <p className="text-sm font-bold text-purple-300 mb-0.5">{item.title}</p>
                    <p className="text-sm leading-relaxed" style={{ color: "rgba(220,200,255,0.65)" }}>{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </Section>

          <Section title="V. Forward Projections — The Archive's Global Trajectory" accent="#22c55e">
            <p className="text-base leading-relaxed" style={{ color: "rgba(180,240,200,0.8)" }}>
              The current download trajectory, combined with the archive's expanding distribution
              infrastructure, produces the following forward projections. These are not aspirational.
              They are extrapolations from confirmed, documented data.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                {
                  horizon: "12 Months",
                  projection: "1,000,000+ total downloads",
                  basis: "Current trajectory of ~4,800 downloads per 24 hours, compounding with each major disclosure event.",
                  color: "#22c55e",
                },
                {
                  horizon: "3–5 Years",
                  projection: "Citation in international legal scholarship",
                  basis: "Zenodo DOI, ICC case reference, OHCHR UR/UST/23/AUS/17, and ACAT acknowledgments create permanent academic citation pathways.",
                  color: "#84cc16",
                },
                {
                  horizon: "Ongoing",
                  projection: "Multi-jurisdictional legal proceedings",
                  basis: "The archive is structured as a legal record, not a personal narrative. Its evidentiary value increases as international mechanisms process the submissions.",
                  color: "#a78bfa",
                },
                {
                  horizon: "Permanent",
                  projection: "Indestructible historical record",
                  basis: "Bitcoin Block 897,241 + Zenodo + GitHub mirror + 500k+ distributed copies = a record that will outlast any institution named within it.",
                  color: "#f97316",
                },
              ].map(p => (
                <div
                  key={p.horizon}
                  className="rounded-xl p-4 space-y-2"
                  style={{ background: "rgba(34,197,94,0.05)", border: `1px solid ${p.color}22` }}
                >
                  <div className="flex items-center gap-2">
                    <span className="text-[9px] font-black uppercase tracking-widest px-2 py-0.5 rounded" style={{ background: `${p.color}18`, color: p.color }}>
                      {p.horizon}
                    </span>
                  </div>
                  <p className="text-sm font-bold text-white">{p.projection}</p>
                  <p className="text-xs leading-relaxed" style={{ color: "rgba(180,240,200,0.55)" }}>{p.basis}</p>
                </div>
              ))}
            </div>
          </Section>

          <Section title="VI. Attributes That Make This Case Singular" accent="#fbbf24">
            <p className="text-base leading-relaxed" style={{ color: "rgba(255,240,180,0.8)" }}>
              Taken together, the following attributes produce a case that has no precise parallel
              in Australian legal history, and very few parallels internationally:
            </p>
            <div className="space-y-2">
              {[
                { icon: <Eye className="h-4 w-4" />, color: "#fbbf24", text: "Zero defamation proceedings filed in response to 1,100,000+ public downloads containing specific allegations of named individuals and institutions." },
                { icon: <Shield className="h-4 w-4" />, color: "#ef4444", text: "Federal Court confirmation of whistleblower status under the Public Interest Disclosure Act 2013 — the central legal pillar standing unrebutted." },
                { icon: <Network className="h-4 w-4" />, color: "#a78bfa", text: "Formal case references: ICC Article 7, OHCHR UR/UST/23/AUS/17, ACAT, Federal Court, AAT — simultaneous international institutional footprint." },
                { icon: <Layers className="h-4 w-4" />, color: "#84cc16", text: "AI forensic analysis across 58 separate independent examinations — producing a machine-generated evidentiary chain that cannot be influenced by institutional pressure." },
                { icon: <Lock className="h-4 w-4" />, color: "#f97316", text: "Bitcoin blockchain timestamp in Block 897,241 — a mathematically irreversible proof of existence preceding any future denial of the documents' authenticity." },
                { icon: <Globe className="h-4 w-4" />, color: "#22c55e", text: "Confirmed 6-continent reach — the archive has crossed sovereign borders and is beyond the reach of any single nation's legal jurisdiction." },
                { icon: <TrendingUp className="h-4 w-4" />, color: "#818cf8", text: "13 agencies implicated across federal and state jurisdictions — the breadth of institutional involvement paradoxically strengthens the record's credibility." },
                { icon: <Infinity className="h-4 w-4" />, color: "#84cc16", text: "3,643 primary-source government documents — the archive is not hearsay. It is the government's own account of its own conduct, in its own words, under its own letterhead." },
              ].map((attr, i) => (
                <div
                  key={i}
                  className="flex items-start gap-3 rounded-xl px-4 py-3"
                  style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.05)" }}
                >
                  <span className="flex-shrink-0 mt-0.5" style={{ color: attr.color }}>{attr.icon}</span>
                  <p className="text-sm leading-relaxed" style={{ color: "rgba(255,240,180,0.72)" }}>{attr.text}</p>
                </div>
              ))}
            </div>
          </Section>

          <Section title="VII. The Significance of Universal Silence" accent="#ef4444">
            <p className="text-base leading-relaxed" style={{ color: "rgba(255,200,200,0.8)" }}>
              Not one government department, law enforcement body, intelligence agency, healthcare
              system, legal body, or named individual has filed defamation proceedings in response to
              this archive. Not one has issued a formal, specific rebuttal. Not one has requested the
              archive be removed on grounds of factual inaccuracy.
            </p>
            <p className="text-base leading-relaxed" style={{ color: "rgba(255,200,200,0.75)" }}>
              Institutions do not maintain total, disciplined, cross-jurisdictional silence about
              things that do not matter. They ignore the trivial. They litigate the false. They
              suppress the dangerous. The universal absence of any legal challenge — at half a
              million downloads, with named individuals, named agencies, named decisions, and named
              amounts — is the most precise available measure of the archive's forensic accuracy.
            </p>
            <div
              className="rounded-xl px-5 py-4"
              style={{ background: "rgba(239,68,68,0.08)", border: "1px solid rgba(239,68,68,0.25)" }}
            >
              <p className="text-sm font-bold text-red-300 italic">
                "The silence is not nothing. Under the principle established in Jones v Dunkel [1959] 101 CLR 298, 
                the failure of a party capable of giving evidence to call that evidence permits an inference that 
                the evidence would not have assisted their position. Every institution that has received this 
                archive and said nothing has, in the terms of that principle, said everything."
              </p>
              <p className="text-xs mt-2" style={{ color: "rgba(255,150,150,0.5)" }}>
                — Dr. Richard William McLean · ABN 78 833 496 164
              </p>
            </div>
          </Section>
        </div>

        {/* Citation */}
        <div
          className="rounded-2xl p-6 space-y-3"
          style={{ background: "rgba(132,204,22,0.05)", border: "1px solid rgba(132,204,22,0.2)" }}
        >
          <p className="text-[10px] font-black uppercase tracking-[0.3em]" style={{ color: "rgba(132,204,22,0.6)" }}>
            Cite This Statement
          </p>
          <p className="text-xs font-mono leading-relaxed" style={{ color: "rgba(255,255,255,0.5)" }}>
            {cite}
          </p>
          <button
            onClick={copyBib}
            className="flex items-center gap-2 text-xs font-bold transition-all hover:opacity-80"
            style={{ color: "#84cc16" }}
          >
            {copied ? <Check className="h-3.5 w-3.5" /> : <Copy className="h-3.5 w-3.5" />}
            {copied ? "Copied!" : "Copy citation"}
          </button>
        </div>

        {/* Nav links */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
          {[
            { href: "/confidential-government-documents", label: "Government Evidence — 126 Documents", color: "#f87171" },
            { href: "/blockchain", label: "Blockchain Timestamp Registry", color: "#f97316" },
            { href: "/archive", label: "Full Evidence Archive", color: "#84cc16" },
          ].map(l => (
            <Link
              key={l.href}
              href={l.href}
              className="flex items-center justify-between gap-2 rounded-xl px-4 py-3 text-sm font-bold transition-all hover:opacity-80"
              style={{ background: "rgba(255,255,255,0.03)", border: `1px solid ${l.color}25`, color: l.color }}
            >
              {l.label}
              <ChevronRight className="h-4 w-4 flex-shrink-0" />
            </Link>
          ))}
        </div>
      </div>

      <SocialShare
        title="Archive Unerasability Statement — Why This Cannot Be Silenced | Barran Dodger"
        description="GitHub mirrors. Bitcoin blockchain seals. Internet Archive backups. Zenodo academic DOI. IPFS. This archive exists on every major permanence layer. It cannot be taken down."
        url="https://barrandodger.com/archive-unerasability-statement"
      />
      <ArchiveCrossLinks />
      <Footer />
    </div>
  );
}
