import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Shield, Copy, CheckCircle } from "lucide-react";
import { useState, useCallback } from "react";

// ─── COMPLETE BLOCKCHAIN INTEGRITY REGISTRY ────────────────────────────────
// Every file in this archive has been SHA-256 fingerprinted.
// PDFs (436) are self-sealing — the hash is printed on their cover page.
// Images and audio have no embedded cover; their hashes are published here.
// Bitcoin Block #897,241 · ABN 78 833 496 164 · barrandodger.com
// ──────────────────────────────────────────────────────────────────────────

const AUDIO_FILES: { file: string; label: string; hash: string; url: string }[] = [
  { file: "cass-murder-declaration-testimony-070826.mp3", label: "Cass Murder Declaration — 7 August 2026, 11:12 AM AEST", hash: "21ebd5c81acc82c94f164f1f223b9012e30079737d8de33649b3852ab4499c55", url: "/audio/cass-murder-declaration-testimony-070826.mp3" },
  { file: "sam-brother-in-christ-defects-070826.mp3", label: "Sam (Brother in Christ) Defects — Faith Weaponisation — 7 August 2026", hash: "f12af69a5593bd2f90c3a78c42061392c78ed8be6f0b78ecccc85730bcba2100", url: "/audio/sam-brother-in-christ-defects-070826.mp3" },
  { file: "kim-confirms-zac-violent-attack-danny-ablepoint-080826.mp3", label: "Kim (AblePoint) Confirms Zac Attack on Danny — Begs Suppression — 8 August 2026", hash: "196ca1a75809d2a27ca304a4732ddbd0df34ae3e39a30db18c2d66c2c193763b", url: "/audio/kim-confirms-zac-violent-attack-danny-ablepoint-080826.mp3", exhibit: "EXHIBIT 080826-AUDIO" },
  { file: "cass-able-care-death-threat-evidence.mp3", label: "Cass / AbleCare — Death Threat Evidence", hash: "a14a50a0be495fa4ff8d31a3266c07cf1fede2ce94905f0fcb9bb178a9de2240", url: "/audio/cass-able-care-death-threat-evidence.mp3" },
  { file: "kim-able-care-refuses-report-290426.mp3", label: "Kim (AbleCare) Refuses to Report — 29 April 2026", hash: "5aa6873eed57dd58a0337d4e4d7133cf8db8c63e3dcc8fb861db56c8e8f60fe0", url: "/audio/kim-able-care-refuses-report-290426.mp3" },
  { file: "kim-ablepoint-will-sort-it-out.mp3", label: "Kim — AblePoint Will Sort It Out", hash: "3e2604994e072c99bfa478c4beec04ebd3f4fdc3b80a8d8c6dde5bf3ef653ae4", url: "/audio/kim-ablepoint-will-sort-it-out.mp3" },
  { file: "kim-refuses-to-leave-surveillance-evidence.mp3", label: "Kim Refuses to Leave — Surveillance Evidence", hash: "b461c5dcc657cce8e2df6684718b9e64e6760f1bd04fc50674dd4e673530452b", url: "/audio/kim-refuses-to-leave-surveillance-evidence.mp3" },
  { file: "qlife-no-one-will-help-you.m4a", label: "QLife — 'No One Will Help You'", hash: "dbc4ed367e44673c8823c39361b8cc372a11a074f7c23946225d78350a3ab314", url: "/audio/qlife-no-one-will-help-you.m4a" },
  { file: "sam-brother-in-christ-defects-060826.mp3", label: "Sam Faith Betrayal Audio — 6 August 2026 (alternate)", hash: "f12af69a5593bd2f90c3a78c42061392c78ed8be6f0b78ecccc85730bcba2100", url: "/audio/sam-brother-in-christ-defects-060826.mp3" },
];

const EVIDENCE_IMAGES: { file: string; label: string; hash: string; url: string; exhibit?: string }[] = [
  { file: "ben-ndis-confirms-assassination-close-call-070826.png", label: "Ben (NDIS) — Assassination 'A Close Call' — 7 Aug 2026", hash: "ec489395a5ab6f315bb8d7db2c064bce9c5856c8c39e5d23b7a3558180173140", url: "/evidence-images/ben-ndis-confirms-assassination-close-call-070826.png", exhibit: "EXHIBIT 070826-A" },
  { file: "ben-ndis-confirms-corruption-uncovered-070826.png", label: "Ben (NDIS) — Corruption Uncovered — 7 Aug 2026", hash: "0e1aa910f472d8cf8bdceb767c0adeca3fa227fdf6b634b2dec2ef0a23ea727a", url: "/evidence-images/ben-ndis-confirms-corruption-uncovered-070826.png", exhibit: "EXHIBIT 070826-B" },
  { file: "text-to-parents-070826-a.png", label: "Text to Parents — Part 1 — 7 Aug 2026", hash: "7143780e2272f0016430e20ebd832317a96d9b756eec3b6b4687bb2532d4eddc", url: "/evidence-images/text-to-parents-070826-a.png", exhibit: "EXHIBIT 070826-C" },
  { file: "text-to-parents-070826-b.png", label: "Text to Parents — Part 2 — 7 Aug 2026", hash: "6293de2a2e95d65c1b55055beb993273334cfe345833d776032d6556c310bb48", url: "/evidence-images/text-to-parents-070826-b.png", exhibit: "EXHIBIT 070826-D" },
  { file: "sukhi-tear-out-of-office-accusation-070826.png", label: "Sukhi Tear — Out of Office / Accusation — 7 Aug 2026", hash: "8edc3594f0b1114801f3f89536e907956a247fa977531fe6a0068816155301a8", url: "/evidence-images/sukhi-tear-out-of-office-accusation-070826.png", exhibit: "EXHIBIT 070826-E" },
  { file: "sam-testimony-ablepoint-deliberate-detriment-070826.jpg", label: "Sam (AblePoint) — Deliberate Detriment Testimony — 7 Aug 2026", hash: "5c5820379b9b963aacc42daf6a9a9a5ec55078c710c14832ebcb9a5e5771787c", url: "/evidence-images/sam-testimony-ablepoint-deliberate-detriment-070826.jpg", exhibit: "EXHIBIT 070826-F" },
  { file: "sam-cass-public-guardian-ablepoint-070826.png", label: "Cass→Sam Pipeline — Public Guardian Trap + AblePoint Silent — 7 Aug 2026", hash: "09debde34cdbca5d890e0fd820732f21e42321cc8335c7e32577eaf11eb62480", url: "/evidence-images/sam-cass-public-guardian-ablepoint-070826.png", exhibit: "EXHIBIT 070826-H" },
  { file: "nswtg-crystal-vet-financial-control-070826.png", label: "NSW Trustee & Guardian — Crystal Vet Financial Control — 7 Aug 2026", hash: "5a8b722917afd5bd837b28c0b078a525c6e52fa6eb2a6835be02ad2ee1e5df7b", url: "/evidence-images/nswtg-crystal-vet-financial-control-070826.png", exhibit: "EXHIBIT 070826-I/J/K" },
  { file: "sukhi-tear-out-of-office-070826.png", label: "Sukhi Tear — Out of Office (original) — 7 Aug 2026", hash: "8edc3594f0b1114801f3f89536e907956a247fa977531fe6a0068816155301a8", url: "/evidence-images/sukhi-tear-out-of-office-070826.png" },
  { file: "rich_mclean_ndis_portrait.jpg", label: "Dr. Richard William McLean — NDIS Portrait", hash: "182ed48f9c59ec30c3e47eb56d63109604f0ce724564bf1369d1deaa0580f939", url: "/evidence-images/rich_mclean_ndis_portrait.jpg" },
  { file: "RUSSELL_BALL_RECORDING_REJECTION_1769766139027.jpeg", label: "Russell Ball — Recording Rejection Evidence", hash: "c7436c73cf73bdc73543ff15af19fb0d364f42af5d763d4bdbb44a3578dafaab", url: "/evidence-images/RUSSELL_BALL_RECORDING_REJECTION_1769766139027.jpeg" },
  { file: "MICRON21_COURT_EVIDENCE_1_1769766543643.png", label: "Micron21 — Court Evidence (1)", hash: "49cd8bb3a6c13d3436419f5284e3ab0d9c39bb2c0feb9818150ccd482130cccf", url: "/evidence-images/MICRON21_COURT_EVIDENCE_1_1769766543643.png" },
  { file: "MICRON21_DEFAMATION_COURT_EVIDENCE_1769766536728.png", label: "Micron21 — Defamation Court Evidence", hash: "49cd8bb3a6c13d3436419f5284e3ab0d9c39bb2c0feb9818150ccd482130cccf", url: "/evidence-images/MICRON21_DEFAMATION_COURT_EVIDENCE_1769766536728.png" },
  { file: "THE_OFFICIAL_WHISTLEBLOWER_TORTURE_DOSSIER_OF_DR._RICHARD_WILLIAM_McLEAN__BARRAN_DODGER___Cover__1769811670092.png", label: "Whistleblower Torture Dossier — Cover", hash: "78942b388d4f39d8f1e019587051b4cc40330859164dd58a3caeb7af6befdec2", url: "/evidence-images/THE_OFFICIAL_WHISTLEBLOWER_TORTURE_DOSSIER_OF_DR._RICHARD_WILLIAM_McLEAN__BARRAN_DODGER___Cover__1769811670092.png" },
  { file: "TRIBUNAL_DECLARATION_COVER_1769766522754.png", label: "Tribunal Declaration — Cover", hash: "d39e55df697200f3ab001b5c70d7aef0b3160a49a16ee1fd59529ddeb627c420", url: "/evidence-images/TRIBUNAL_DECLARATION_COVER_1769766522754.png" },
  { file: "A5BDF951-1AE5-4EFF-9F6E-3F29C2C5CDC9_1768633103014.png", label: "Evidence Screenshot (A5BDF951)", hash: "2fd73aea56ed23ec7efec51ea66c5e826c6a0e6295e6fd9b893d5e368b01e622", url: "/evidence-images/A5BDF951-1AE5-4EFF-9F6E-3F29C2C5CDC9_1768633103014.png" },
  { file: "20070105-DSC07923_1_1770797982443.jpeg", label: "Historical Photograph — 5 January 2007", hash: "a2258f8ce21b0e34ce6a9162bf795d0030fe3fcad470a64cac0736afb3cb86bf", url: "/evidence-images/20070105-DSC07923_1_1770797982443.jpeg" },
  { file: "2023-02-18_04.00.18_1768977053196.jpeg", label: "Evidence Screenshot — 18 February 2023", hash: "c4ed2a1791b1ec16291c9d97831c81123e42f513c1ab15fd83fe19ec5a3ed63d", url: "/evidence-images/2023-02-18_04.00.18_1768977053196.jpeg" },
  { file: "cover-forensic-corroboration-billionaire-circle.png", label: "Forensic Corroboration — Billionaire Circle Cover", hash: "44961d6c24d7f74dffef95039d244ecb1e6a344943ac7fbea683a52923095b31", url: "/evidence-images/cover-forensic-corroboration-billionaire-circle.png" },
  { file: "cover-forensic-corroboration-buried-lies.png", label: "Forensic Corroboration — Buried Lies Cover", hash: "99581a74720dd0a04419c965867338b7b8aae8e501e49a6bcf8d70f530a79b9a", url: "/evidence-images/cover-forensic-corroboration-buried-lies.png" },
  { file: "A826B3FD-2BC3-48B6-B6FA-F7A4F9FA1909_1770630251378.png", label: "Evidence Screenshot (A826B3FD)", hash: "ded4073715f0086aa634f7c1fec3bb6f94242690b8c579042997ff26bb054782", url: "/evidence-images/A826B3FD-2BC3-48B6-B6FA-F7A4F9FA1909_1770630251378.png" },
  { file: "Who_Is_Barran_Dodger_Cover_1769765648022.png", label: "Who Is Barran Dodger — AI Identity Profile Cover", hash: "e0eb4e584e2f67af7bad9541e2da111614c6a19f14a0f8156f2b68fd586421ab", url: "/evidence-images/Who_Is_Barran_Dodger____A_Multi-Disciplinary_AI-Generated_Identity_Profile_Based_on_Legal_Testimony__Spiritual_Witness__Psychological_Analysis__and_Sacred_Record__Cover__1769765648022.png" },
];

const KEY_PDFS: { file: string; label: string; hash: string; url: string }[] = [
  { file: "ablepoint-permanent-disgrace-200726.pdf", label: "AblePoint Permanent Disgrace — Public Statement, 6 Police Badge Numbers (20 Jul 2026)", hash: "6ac50f612808359971901c85c160714ba3f316d839666b57ad0d9bfc008699fe", url: "/documents/ablepoint-permanent-disgrace-200726.pdf" },
  { file: "zac-incident-report-night-harassment-270726.pdf", label: "Zac Incident Report — Night Harassment, 4 Wake-Ups (27 Jul 2026, 5:05 AM)", hash: "445884b78e2762e457b21aec3d784aaf443a5348eb010531c74a61213ac7f48f", url: "/documents/zac-incident-report-night-harassment-270726.pdf" },
  { file: "potential-violence-zac-ablepoint-270726.pdf", label: "Potential Violence with Zac — Wyong Police Contact (27 Jul 2026, 2:28 PM)", hash: "2e1be669e4c66f3c30596d8f490ca419f9da6ebd3b864935f706b4d49ad3acd6", url: "/documents/potential-violence-zac-ablepoint-270726.pdf" },
  { file: "zac-avo-demand-violence-warning-official-announcement.pdf", label: "AVO Demand — Official Announcement — Zac Violence Warning (6 Aug 2026)", hash: "263be9206957faa3b076e732128987eb73861ef881f6f7977de906519c6fccee", url: "/documents/zac-avo-demand-violence-warning-official-announcement.pdf" },
  { file: "crystal-needs-a-vet-formal-submission.pdf", label: "Crystal Needs a Vet — Source Email (5 Aug 2026)", hash: "552857369a2e26ee065fb02226469eba754b6b11e6a13f7a4b5eb0def535e832", url: "/documents/crystal-needs-a-vet-formal-submission.pdf" },
  { file: "crystal-vet-invoice-please-deposit-070826.pdf", label: "Crystal Vet Invoice — Please Deposit (7 Aug 2026)", hash: "fff8b8f7c222faccaa461d1efee761493bbf236dc268138c63973159c673fcc2", url: "/documents/crystal-vet-invoice-please-deposit-070826.pdf" },
  { file: "sukhi-tear-attempted-murder-complicity-070826.pdf", label: "Sukhi Tear — Attempted Murder Complicity (7 Aug 2026)", hash: "c38f56b3e04f4b369ed206b8ed7b74ee74c0902e34896ff927505a62d060b3d7", url: "/documents/sukhi-tear-attempted-murder-complicity-070826.pdf" },
  { file: "kel-graham-ndis-ministers-guilty-soliciting-murder.pdf", label: "Kel Graham + NDIS Ministers — Soliciting Murder", hash: "e457c218dc37bf4049056ae05afceb8d58bb138bffce26a31c2335f1075de578", url: "/documents/kel-graham-ndis-ministers-guilty-soliciting-murder.pdf" },
  { file: "kill-me-do-it-god-and-i-are-good-2.pdf", label: "Kill Me — Do It — God and I Are Good (Vol. 2)", hash: "5919a88d48b330f8564b9553d841f14c2421ed9543d15845e843fe4ee81188e2", url: "/documents/kill-me-do-it-god-and-i-are-good-2.pdf" },
  { file: "praise-jesus-barran-dodger.pdf", label: "Praise Jesus — Spiritual Declaration", hash: "40fd74a3ce6a1b64b00a75fd53a75dfe325da42ceb3c87e28d6a65e3485e13b7", url: "/documents/praise-jesus-barran-dodger.pdf" },
  { file: "evidence-archive-240-blockchain-sealed-documents.pdf", label: "Evidence Archive — 240+ Blockchain-Sealed Documents", hash: "self-sealed (SHA-256 on cover page)", url: "/documents/evidence-archive-240-blockchain-sealed-documents.pdf" },
  { file: "master-consolidated-legal-record.pdf", label: "Master Consolidated Legal Record — 271 Pages", hash: "self-sealed (SHA-256 on cover page)", url: "/documents/master-consolidated-legal-record.pdf" },
  { file: "forensic-comparative-analysis-whistleblowers.pdf", label: "Forensic Comparative Analysis of Whistleblowers", hash: "self-sealed (SHA-256 on cover page)", url: "/documents/forensic-comparative-analysis-whistleblowers.pdf" },
  { file: "taxpayer-cost-estimation-35-years.pdf", label: "Taxpayer Cost Estimation — $1.67B–$4.84B AUD", hash: "self-sealed (SHA-256 on cover page)", url: "/documents/taxpayer-cost-estimation-35-years.pdf" },
  { file: "architecture-annihilation-attempted-murder.pdf", label: "Architecture of Administrative Annihilation and Attempted Murder", hash: "self-sealed (SHA-256 on cover page)", url: "/documents/architecture-annihilation-attempted-murder.pdf" },
  { file: "state-terrorism-forensic-analysis.pdf", label: "Does This Constitute State Terrorism? — 9/9 Criteria Satisfied", hash: "self-sealed (SHA-256 on cover page)", url: "/documents/state-terrorism-forensic-analysis.pdf" },
  { file: "asylum-refugee-eligibility-analysis.pdf", label: "International Asylum Eligibility Analysis", hash: "self-sealed (SHA-256 on cover page)", url: "/documents/asylum-refugee-eligibility-analysis.pdf" },
  { file: "144-reasons-chosen-witness.pdf", label: "144 Reasons Barran Dodger is God's Chosen Witness", hash: "self-sealed (SHA-256 on cover page)", url: "/documents/144-reasons-chosen-witness.pdf" },
  { file: "un-ohchr-asylum-claim-ur-ust-23-aus-17.pdf", label: "OHCHR Asylum Claim — UR/UST/23/AUS/17", hash: "self-sealed (SHA-256 on cover page)", url: "/documents/un-ohchr-asylum-claim-ur-ust-23-aus-17.pdf" },
  { file: "doug-severance-ablepoint-june-2026.pdf", label: "AblePoint Severance — Doug Attack 3:40 AM — 27 June 2026", hash: "self-sealed (SHA-256 on cover page)", url: "/documents/doug-severance-ablepoint-june-2026.pdf" },
];

function CopyHash({ hash }: { hash: string }) {
  const [copied, setCopied] = useState(false);
  const copy = useCallback(() => {
    navigator.clipboard.writeText(hash).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  }, [hash]);
  if (hash.startsWith("self-sealed")) return null;
  return (
    <button onClick={copy} className="ml-1 p-0.5 rounded hover:bg-emerald-900/40 transition-colors flex-shrink-0" title="Copy hash">
      {copied ? <CheckCircle className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3 text-zinc-500 hover:text-emerald-400" />}
    </button>
  );
}

function HashRow({ item }: { item: { file: string; label: string; hash: string; url: string; exhibit?: string } }) {
  const isSelfSealed = item.hash.startsWith("self-sealed");
  return (
    <div className="border border-zinc-800/60 rounded-xl p-3 bg-zinc-950/40 hover:bg-zinc-900/40 transition-colors">
      <div className="flex items-start justify-between gap-2 mb-1.5">
        <div className="flex-1 min-w-0">
          {item.exhibit && (
            <span className="inline-block text-[8px] font-black uppercase tracking-widest px-1.5 py-0.5 rounded bg-red-950 text-red-300 border border-red-700/50 mr-1.5 mb-1">{item.exhibit}</span>
          )}
          <a href={item.url} target="_blank" rel="noopener noreferrer"
            className="text-xs font-semibold text-zinc-200 hover:text-white transition-colors block truncate">
            {item.label}
          </a>
          <div className="text-[9px] text-zinc-600 font-mono truncate mt-0.5">{item.file}</div>
        </div>
      </div>
      <div className="flex items-center gap-1">
        <span className="text-[8px] font-black uppercase tracking-widest text-emerald-500 flex-shrink-0">⛓ SHA-256</span>
        <div className={`font-mono text-[8px] break-all leading-relaxed flex-1 select-all ${isSelfSealed ? "text-zinc-500 italic" : "text-emerald-400/70"}`}>
          {item.hash}
        </div>
        <CopyHash hash={item.hash} />
      </div>
    </div>
  );
}

export default function BlockchainRegistry() {
  const totalSealed = 436 + AUDIO_FILES.length + EVIDENCE_IMAGES.length;

  return (
    <div className="min-h-screen bg-[#06080f] text-white">
      <Navigation />

      <main className="max-w-5xl mx-auto px-4 pt-28 pb-20">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex justify-center mb-4">
            <div className="p-4 rounded-2xl bg-emerald-950/40 border border-emerald-500/30">
              <Shield className="w-10 h-10 text-emerald-400" />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-black text-white mb-3">
            Blockchain Integrity Registry
          </h1>
          <p className="text-emerald-400 font-bold text-sm uppercase tracking-widest mb-4">
            Barran Dodger Archive · Complete SHA-256 File Registry · ABN 78 833 496 164
          </p>
          <p className="text-zinc-300 text-base max-w-3xl mx-auto leading-relaxed">
            Every file in this archive is cryptographically fingerprinted with SHA-256.
            PDFs carry their hash printed on their cover page. Audio and image evidence files
            are registered here. Any tampering — by any party — produces a detectable hash mismatch.
            The archive cannot be altered, denied, or erased.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-8 max-w-3xl mx-auto">
            {[
              { label: "PDFs Sealed", value: "436", color: "text-cyan-400" },
              { label: "Audio Files", value: String(AUDIO_FILES.length), color: "text-amber-400" },
              { label: "Evidence Images", value: String(EVIDENCE_IMAGES.length) + "+", color: "text-rose-400" },
              { label: "Total Sealed", value: totalSealed + "+", color: "text-emerald-400" },
            ].map(s => (
              <div key={s.label} className="rounded-xl border border-zinc-800 bg-zinc-950/60 p-3">
                <div className={`text-2xl font-black ${s.color}`}>{s.value}</div>
                <div className="text-[10px] text-zinc-500 uppercase tracking-widest font-bold">{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Verification Instructions */}
        <div className="mb-10 p-5 rounded-2xl border border-emerald-800/40 bg-emerald-950/10">
          <h2 className="text-emerald-400 font-black text-sm uppercase tracking-widest mb-3">How to Verify</h2>
          <ol className="text-zinc-300 text-sm space-y-1.5 list-decimal list-inside leading-relaxed">
            <li>Download the file from the link.</li>
            <li>Run <code className="font-mono text-emerald-300 bg-zinc-900 px-1.5 py-0.5 rounded text-xs">sha256sum filename</code> (Linux/Mac) or <code className="font-mono text-emerald-300 bg-zinc-900 px-1.5 py-0.5 rounded text-xs">Get-FileHash filename -Algorithm SHA256</code> (Windows).</li>
            <li>Compare against the hash published here. An exact match proves the file is unaltered since sealing.</li>
            <li>For PDFs: open the cover page — the hash is also printed there, independently verifiable.</li>
          </ol>
          <p className="text-zinc-500 text-xs mt-3">Bitcoin Block #897,241 provides the immutable public timestamp for the archive. barrandodger.com · drbarrandodger@proton.me</p>
        </div>

        {/* 7 August 2026 — Breaking Evidence */}
        <section className="mb-12">
          <div className="flex items-center gap-3 mb-5">
            <div className="h-px flex-1 bg-red-800/40" />
            <h2 className="text-red-400 font-black text-xs uppercase tracking-widest whitespace-nowrap">7–8 August 2026 — Breaking Evidence Cluster (EXHIBITS A–K)</h2>
            <div className="h-px flex-1 bg-red-800/40" />
          </div>
          <div className="grid gap-2">
            {[
              { file: "cass-murder-declaration-testimony-070826.mp3", label: "EXHIBIT 070826-AUDIO — Cass Murder Declaration (11:12 AM AEST)", hash: "21ebd5c81acc82c94f164f1f223b9012e30079737d8de33649b3852ab4499c55", url: "/audio/cass-murder-declaration-testimony-070826.mp3", exhibit: "EXHIBIT 070826-AUDIO" },
              { ...EVIDENCE_IMAGES[0] },
              { ...EVIDENCE_IMAGES[1] },
              { ...EVIDENCE_IMAGES[2] },
              { ...EVIDENCE_IMAGES[3] },
              { ...EVIDENCE_IMAGES[4] },
              { ...EVIDENCE_IMAGES[5] },
              { file: "sam-brother-in-christ-defects-070826.mp3", label: "Sam (Brother in Christ) Defects — Faith Weaponisation Audio", hash: "f12af69a5593bd2f90c3a78c42061392c78ed8be6f0b78ecccc85730bcba2100", url: "/audio/sam-brother-in-christ-defects-070826.mp3", exhibit: "EXHIBIT 070826-G" },
              { ...EVIDENCE_IMAGES[6] },
              { ...EVIDENCE_IMAGES[7] },
              { file: "crystal-vet-invoice-please-deposit-070826.pdf", label: "Crystal Vet Invoice — Please Deposit (EXHIBIT 070826-J)", hash: "fff8b8f7c222faccaa461d1efee761493bbf236dc268138c63973159c673fcc2", url: "/documents/crystal-vet-invoice-please-deposit-070826.pdf", exhibit: "EXHIBIT 070826-J" },
              { file: "crystal-needs-a-vet-formal-submission.pdf", label: "Crystal Needs a Vet — Source Email 5 Aug 2026 (EXHIBIT 070826-K)", hash: "552857369a2e26ee065fb02226469eba754b6b11e6a13f7a4b5eb0def535e832", url: "/documents/crystal-needs-a-vet-formal-submission.pdf", exhibit: "EXHIBIT 070826-K" },
              { file: "sukhi-tear-attempted-murder-complicity-070826.pdf", label: "Sukhi Tear — Attempted Murder Complicity PDF (EXHIBIT 070826-E)", hash: "c38f56b3e04f4b369ed206b8ed7b74ee74c0902e34896ff927505a62d060b3d7", url: "/documents/sukhi-tear-attempted-murder-complicity-070826.pdf", exhibit: "EXHIBIT 070826-E (PDF)" },
            ].map((item, i) => <HashRow key={i} item={item} />)}
          </div>
        </section>

        {/* Audio Evidence */}
        <section className="mb-12">
          <div className="flex items-center gap-3 mb-5">
            <div className="h-px flex-1 bg-amber-800/40" />
            <h2 className="text-amber-400 font-black text-xs uppercase tracking-widest whitespace-nowrap">All Audio Evidence Files</h2>
            <div className="h-px flex-1 bg-amber-800/40" />
          </div>
          <div className="grid gap-2">
            {AUDIO_FILES.map((item, i) => <HashRow key={i} item={item} />)}
          </div>
        </section>

        {/* Evidence Images */}
        <section className="mb-12">
          <div className="flex items-center gap-3 mb-5">
            <div className="h-px flex-1 bg-zinc-700" />
            <h2 className="text-zinc-300 font-black text-xs uppercase tracking-widest whitespace-nowrap">Evidence Image Registry</h2>
            <div className="h-px flex-1 bg-zinc-700" />
          </div>
          <div className="grid gap-2">
            {EVIDENCE_IMAGES.map((item, i) => <HashRow key={i} item={item} />)}
          </div>
        </section>

        {/* Key PDFs */}
        <section className="mb-12">
          <div className="flex items-center gap-3 mb-5">
            <div className="h-px flex-1 bg-cyan-800/40" />
            <h2 className="text-cyan-400 font-black text-xs uppercase tracking-widest whitespace-nowrap">Key PDFs — 436 Total Self-Sealed</h2>
            <div className="h-px flex-1 bg-cyan-800/40" />
          </div>
          <p className="text-zinc-500 text-xs mb-4 leading-relaxed">
            436 PDFs carry their SHA-256 hash printed on the cover page — independently verifiable without this registry.
            New PDFs (7–8 August 2026) are listed with explicit hashes below. All 436 are available for download at{" "}
            <a href="/free-ebooks" className="text-cyan-400 underline">barrandodger.com/free-ebooks</a>.
          </p>
          <div className="grid gap-2">
            {KEY_PDFS.map((item, i) => <HashRow key={i} item={item} />)}
          </div>
        </section>

        {/* Footer note */}
        <div className="text-center border-t border-zinc-800 pt-8 mt-8">
          <p className="text-zinc-500 text-xs leading-relaxed max-w-2xl mx-auto">
            This registry is itself part of the archive and is versioned with every deployment.
            Any future discrepancy between a file's hash and the value published here constitutes
            evidence of post-publication tampering. The archive is mirrored on GitHub Pages and
            cannot be altered by any single party.
          </p>
          <p className="text-zinc-600 text-[10px] mt-3">
            Dr. Richard William McLean (Barran Dodger) · ABN 78 833 496 164 · © 2026 · barrandodger.com
          </p>
        </div>
      </main>

      <Footer />
    </div>
  );
}
