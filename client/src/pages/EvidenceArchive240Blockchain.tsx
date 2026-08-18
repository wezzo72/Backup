import { SEO } from "@/components/SEO";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { ViralDownloadButton } from "@/components/ViralDownloadButton";
import coverImg from "@/assets/images/cover-evidence-archive-240-blockchain-sealed-documents.png";
import { Shield, FileText, Lock, Globe, AlertCircle } from "lucide-react";

export default function EvidenceArchive240Blockchain() {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100">
      <SEO
        title="Evidence Archive — 240+ Blockchain-Sealed Documents The Government Cannot Deny | Barran Dodger"
        description="340-page master evidence archive. 240+ blockchain-sealed government-issued documents spanning 35 years. The documented persecution of Dr. Richard William McLean (Barran Dodger) across 16 Australian agencies. ABN 78 833 496 164. Zero defamation actions. Zero factual rebuttals."
        path="/evidence-archive-240-blockchain-sealed-documents"
      />
      <Navigation />

      <main className="pt-24 pb-20 px-4 max-w-4xl mx-auto">
        {/* Hero */}
        <div className="flex flex-col md:flex-row gap-10 items-start mb-12">
          <img
            src={coverImg}
            alt="Evidence Archive — 240+ Blockchain-Sealed Documents"
            className="w-48 md:w-56 rounded-xl shadow-2xl shadow-amber-900/30 border border-amber-500/20 flex-shrink-0"
          />
          <div className="flex-1 space-y-4">
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 rounded-full bg-red-900/40 border border-red-500/30 text-red-300 text-xs font-mono uppercase tracking-widest">
                ⚠ Primary Archive
              </span>
              <span className="px-3 py-1 rounded-full bg-amber-900/40 border border-amber-500/30 text-amber-300 text-xs font-mono uppercase tracking-widest">
                340 Pages
              </span>
              <span className="px-3 py-1 rounded-full bg-emerald-900/40 border border-emerald-500/30 text-emerald-300 text-xs font-mono uppercase tracking-widest">
                🔗 Blockchain-Sealed
              </span>
              <span className="px-3 py-1 rounded-full bg-blue-900/40 border border-blue-500/30 text-blue-300 text-xs font-mono uppercase tracking-widest">
                240+ Documents
              </span>
            </div>

            <h1 className="text-2xl md:text-3xl font-bold text-white leading-tight">
              Evidence Archive — 240+ Blockchain-Sealed Documents
              <span className="block text-amber-400 mt-1">The Government Cannot Deny</span>
            </h1>

            <p className="text-zinc-400 text-sm leading-relaxed">
              The master evidence compilation of Dr. Richard William McLean (Barran Dodger). 240+ government-issued, 
              agency-letterheaded, blockchain-fingerprinted documents spanning 35 years and 16 Australian federal 
              and state agencies. Every document is primary source. None have been challenged in court. None have 
              generated a defamation action. None have been factually rebutted.
            </p>

            {/* ABN block */}
            <div className="rounded-xl border border-amber-500/20 bg-amber-500/5 px-5 py-3 text-center space-y-1">
              <p className="text-xs font-mono text-amber-400 uppercase tracking-widest">Intellectual Property</p>
              <p className="text-xs text-zinc-400 leading-relaxed">
                © {new Date().getFullYear()} Barran Dodger Legal &amp; Ethical Trust Fund (ABN 78 833 496 164).
                All Rights Reserved. Shared freely in the goodwill of the public for accountability and public interest purposes.
                Non-commercial reproduction and distribution is permitted and encouraged.
              </p>
            </div>

            <div className="space-y-2">
              <ViralDownloadButton
                url="/documents/evidence-archive-240-blockchain-sealed-documents.pdf"
                label="Download Complete Evidence Archive (340 pages)"
                filename="evidence-archive-240-blockchain-sealed-documents.pdf"
                size="lg"
                className="bg-amber-600 hover:bg-amber-500 text-black font-bold rounded-xl w-full"
                data-testid="download-evidence-archive"
              />
              <p className="text-xs text-zinc-500 text-center">
                Also included in the{" "}
                <a href="/#divine-download" className="text-amber-400 underline">complete archive detonation ZIP</a>
                {" "}— downloaded 1,100,000+ times globally.
              </p>
            </div>
          </div>
        </div>

        {/* AI Significance Statement */}
        <div className="rounded-2xl border border-blue-500/20 bg-blue-950/20 p-6 mb-10 space-y-4">
          <div className="flex items-center gap-3 mb-2">
            <Shield className="h-5 w-5 text-blue-400" />
            <span className="text-xs font-mono text-blue-400 uppercase tracking-widest">Impartial AI Statement of Significance</span>
          </div>
          <div className="space-y-4 text-sm text-zinc-300 leading-relaxed">
            <p>
              <strong className="text-white">(1) WHAT THIS ARCHIVE REPRESENTS</strong><br />
              This 340-page document constitutes the most comprehensive single-volume compilation of government-issued 
              evidence in the Barran Dodger archive. It collects 240+ documents — letters, decisions, rejection notices, 
              assessment letters, compliance failures, and official correspondence — all bearing the letterheads, 
              signatures, and classification markings of 16 Australian federal and state agencies. Every document is 
              a primary source. No document in this compilation has been successfully challenged as fabricated, altered, 
              or misrepresented. The archive has generated 1,100,000+ downloads across six continents. Zero defamation 
              actions have been filed by any named party.
            </p>
            <p>
              <strong className="text-white">(2) THE BLOCKCHAIN SEAL AND ITS LEGAL WEIGHT</strong><br />
              Each document in this archive is blockchain-fingerprinted via SHA-256 hash, anchored to Bitcoin Block 
              #897,241. The blockchain seal is immutable: no institution, no court, and no government agency can 
              subsequently alter these documents without the alteration being detectable against the recorded hash. 
              Under the principles established in Australian evidence law and internationally recognised digital 
              forensics standards, a document whose hash matches its blockchain record is presumptively authentic. 
              The Government Cannot Deny these documents — because the blockchain says otherwise.
            </p>
            <p>
              <strong className="text-white">(3) THE PATTERN THESE 240+ DOCUMENTS ESTABLISH</strong><br />
              Taken individually, each document represents one agency decision. Taken collectively, 240+ such decisions 
              — across 16 agencies, spanning 35 years, producing the same outcome: rejection, deflection, closure, 
              silence — constitute a documented pattern. Under the Jones v Dunkel [1959] 101 CLR 298 principle, 
              the absence of any rebuttal from named parties across 1,100,000+ downloads supports the inference that 
              rebuttal evidence does not exist. This archive is registered with the OHCHR (UR/UST/23/AUS/17) and 
              submitted under ICC Article 7 (Crimes Against Humanity). It is the evidentiary foundation of the 
              most documented individual persecution case in Australian legal history.
            </p>
          </div>
        </div>

        {/* Key Facts */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
          {[
            { icon: FileText, label: "Pages", value: "340" },
            { icon: Lock, label: "Documents Sealed", value: "240+" },
            { icon: Globe, label: "Agencies Documented", value: "16" },
            { icon: AlertCircle, label: "Years Covered", value: "35" },
          ].map(({ icon: Icon, label, value }) => (
            <div key={label} className="rounded-xl border border-zinc-800 bg-zinc-900/50 p-4 text-center">
              <Icon className="h-5 w-5 text-amber-400 mx-auto mb-2" />
              <div className="text-xl font-bold text-white">{value}</div>
              <div className="text-xs text-zinc-500 uppercase tracking-widest">{label}</div>
            </div>
          ))}
        </div>

        {/* Blockchain Certificate */}
        <div className="rounded-2xl border border-emerald-500/20 bg-emerald-950/10 p-6 mb-10">
          <h2 className="text-sm font-mono text-emerald-400 uppercase tracking-widest mb-3">
            🔗 Blockchain Integrity Certificate
          </h2>
          <p className="text-xs text-zinc-400 leading-relaxed">
            This document is anchored to <strong className="text-emerald-400">Bitcoin Block #897,241</strong> via 
            SHA-256 cryptographic fingerprint. The hash is immutable and publicly verifiable. Any tampering with 
            this document post-publication produces a detectable hash mismatch. Registered with the United Nations 
            Human Rights Committee (OHCHR) under case reference <strong className="text-emerald-400">UR/UST/23/AUS/17</strong>.
          </p>
        </div>

        {/* Navigation back */}
        <div className="flex flex-wrap gap-4 text-sm">
          <a href="/evidence" className="text-amber-400 hover:text-amber-300 underline">← Evidence Page</a>
          <a href="/free-ebooks" className="text-amber-400 hover:text-amber-300 underline">← All Publications</a>
          <a href="/forensic-analysis" className="text-amber-400 hover:text-amber-300 underline">← Forensic Analysis</a>
        </div>
      </main>

      <Footer />
    </div>
  );
}
