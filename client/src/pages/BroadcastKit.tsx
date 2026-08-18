import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { Badge } from "@/components/ui/badge";
import { Copy, Check, ExternalLink } from "lucide-react";
import { useState } from "react";
import { ActionCallout } from "@/components/ActionCallout";
import { EmbedCodeGenerator } from "@/components/EmbedCodeGenerator";
import { HackerNewsTemplate, RedditTemplates } from "@/components/HackerNewsTemplate";
import { TweetThreadKit } from "@/components/TweetThreadKit";
import { JournalistPitchKit } from "@/components/JournalistPitchKit";

const ARCHIVE = "https://barrandodger.com";

interface Template { label: string; platform: string; color: string; text: string; shareUrl?: string; }

const TEMPLATES: Template[] = [
  {
    label: "WhatsApp — Broadcast / Group",
    platform: "WhatsApp",
    color: "#25D366",
    text: `🚨 READ THIS — I can't stop thinking about it.

An Australian man has 3,643 government documents proving he was persecuted by 13 government agencies for 35 years.

He was found with no pulse in 2021. He survived. He kept documenting.

14 forced psychiatric hospitalisations. No criminal charges. Ever.

He filed with the ICC. The UN has a case reference. Not one named agency has sued him — across 1,100,000+ downloads on 6 continents.

Everything is free. Blockchain-sealed. AI-verified.

${ARCHIVE}

Send this to 5 people.`,
    shareUrl: `https://wa.me/?text=${encodeURIComponent(`🚨 READ THIS — An Australian whistleblower has 3,643 government documents proving 35-year persecution. ICC filed. 1,100,000+ downloads. Zero defamation actions. Everything free: ${ARCHIVE}`)}`,
  },
  {
    label: "SMS / Text Message",
    platform: "SMS",
    color: "#34C759",
    text: `Have you seen this? Australian man documents 35 years of government persecution — 3,643 primary source docs, ICC submission, 1,100,000+ downloads, zero defamation suits. Open challenge closes 7 Sep 2026. Everything free: ${ARCHIVE}`,
  },
  {
    label: "X / Twitter Thread — Opening tweet",
    platform: "Twitter/X",
    color: "#000000",
    text: `THREAD: The most comprehensively documented whistleblower case in Australian history — and nobody will touch it.

3,643 government documents. 35 years. 13 agencies. 14 forced psychiatric hospitalisations. No criminal charges. Ever.

1,100,000+ downloads. Not one defamation action filed.

🧵👇`,
    shareUrl: `https://twitter.com/intent/tweet?text=${encodeURIComponent(`The most documented whistleblower case in Australian history. 3,643 govt documents. ICC filed. 1,100,000+ downloads. Zero defamation actions. Open challenge deadline: 7 Sep 2026. Everything free: ${ARCHIVE} #Whistleblower #Australia #BarranDodger`)}`,
  },
  {
    label: "Email Forward Template",
    platform: "Email",
    color: "#EA4335",
    text: `Subject: This Australian archive has no legal challenges across 1,100,000 downloads — and I think you should read it

I found something I haven't been able to stop thinking about.

A man in Australia — Dr. Richard McLean — has spent 35 years documenting what he says is systematic persecution by 13 government agencies. He has 3,643 primary source government documents. The International Criminal Court has received his submission. The UN Human Rights Council has a case reference number.

He was found with no pulse in 2021. He survived. He kept documenting.

The entire archive is free, blockchain-sealed, and AI-verified. Not one named institution has filed a defamation action across 1,100,000+ downloads on 6 continents.

An Open Professional Challenge closes 7 September 2026: name one false claim with your name on it. No one has.

I want to know what you think.

${ARCHIVE}

—`,
  },
  {
    label: "Facebook Post",
    platform: "Facebook",
    color: "#1877F2",
    text: `Something I can't stop thinking about.

An Australian whistleblower has assembled 3,643 government documents proving systematic persecution across 35 years and 13 agencies. He filed with the International Criminal Court. The UN has a case reference. He was found with no pulse in 2021 and survived.

1,100,000+ people have downloaded his archive from 6 continents.

Not one named agency or official has filed a defamation action. An Open Professional Challenge closes 7 September 2026 — no one has rebutted a single claim.

Everything is free.

${ARCHIVE}`,
    shareUrl: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(ARCHIVE)}`,
  },
  {
    label: "LinkedIn — Professional context",
    platform: "LinkedIn",
    color: "#0A66C2",
    text: `For those working in governance, law, human rights, or public administration — this archive deserves your attention.

Dr. Richard McLean (Barran Dodger) has assembled what may be the most comprehensively documented case of institutional whistleblower persecution in Australian history.

3,643 primary source government documents. ICC Article 7 submission. OHCHR case reference UR/UST/23/AUS/17. 52 independent AI forensic analyses — 675/675 propositions confirmed. Forensic economic valuation: $112.8M mid-range.

Zero defamation actions filed across 1,100,000+ downloads.

An Open Professional Challenge closes 7 September 2026: any named professional is invited to publish one factual rebuttal. No one has. Under Jones v Dunkel, institutional silence in the face of available exculpatory evidence is legally significant.

The archive is a legitimate object of study for anyone working on institutional accountability, public interest disclosure law, or administrative law.

${ARCHIVE}/press — Press kit and story angles available for journalists.`,
    shareUrl: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(ARCHIVE)}`,
  },
  {
    label: "TikTok / Reels — Video Script",
    platform: "Video Script",
    color: "#010101",
    text: `[HOOK — 0–3 sec]
"This man was found with no pulse. He survived. Then he filed with the International Criminal Court."

[CONTEXT — 3–15 sec]
"Dr. Richard McLean has spent 35 years documenting what 13 Australian government agencies did to him. 3,643 government documents. 14 forced psychiatric hospitalisations — zero criminal charges. An assassination attempt in 2024."

[CREDIBILITY — 15–25 sec]
"The UN has a case number. The ICC has his submission. 1,100,000 people have downloaded his archive from 6 continents. Not one defamation action has been filed. An Open Challenge closes 7 September 2026 — no one has published a named factual rebuttal."

[CTA — 25–30 sec]
"Everything is free at barrandodger.com — link in bio. If what you just heard is true, you need to share it. If it's not — they would have sued him. They haven't."

[TEXT overlays: "3,643 DOCS" / "0 CRIMINAL CHARGES" / "0 DEFAMATION SUITS" / "1,100,000+ DOWNLOADS" / "barrandodger.com"]`,
  },
  {
    label: "YouTube — Video Description",
    platform: "YouTube",
    color: "#FF0000",
    text: `In this video I cover the Barran Dodger archive — what may be the most comprehensively documented whistleblower case in Australian history.

Dr. Richard McLean (Barran Dodger) has assembled 3,643 primary source government documents spanning 35 years and 13 agencies. He was found with no pulse in 2021. He survived. He filed with the International Criminal Court. The UN Human Rights Council has his case reference.

1,100,000+ downloads. 6 continents. Zero advertising. Zero defamation actions.

━━━━━━━━━━━━━━━━━━━━━━
LINKS
━━━━━━━━━━━━━━━━━━━━━━
Archive: ${ARCHIVE}
Evidence: ${ARCHIVE}/evidence
Full Paper: ${ARCHIVE}/administrative-annihilation
Legal Status: ${ARCHIVE}/legal-status
Timeline: ${ARCHIVE}/timeline
Press Kit: ${ARCHIVE}/press

━━━━━━━━━━━━━━━━━━━━━━
CHAPTERS
━━━━━━━━━━━━━━━━━━━━━━
0:00 — Who is Barran Dodger?
0:45 — The 35-year documented timeline
2:30 — 14 psychiatric hospitalisations, 0 criminal charges
4:00 — The assassination attempt (2024)
6:00 — ICC Article 7 and OHCHR submission
7:30 — AI forensic verification — 675/675 confirmed
9:00 — Why the silence is the answer`,
  },
  {
    label: "Podcast / Interview Talking Points",
    platform: "Podcast",
    color: "#8940FA",
    text: `OPENING HOOK (for host intro):
"My guest today documented his own persecution by 13 Australian government agencies across 35 years — using their own documents. He's filed with the International Criminal Court. He was found with no pulse in 2021. He is still alive and still adding documents. His name is Dr. Richard McLean."

KEY TALKING POINTS:
1. The scale — 3,643 documents, 35 years, 13 agencies
2. The psychiatric weapon — 14 forced hospitalisations, zero charges
3. The financial destruction — $112.8M mid-range forensic valuation
4. The assassination attempt — 2024, independent witness, NDA'd
5. The ICC/UN filings — what they mean legally
6. The AI verification — 675/675 propositions confirmed by independent AI
7. The silence as evidence — zero defamation actions across 1,100,000 downloads
8. The Open Challenge — 7 September 2026 deadline
9. What needs to happen — independent investigation demands

CLOSING CTA FOR LISTENERS:
"Everything in this archive is free. Go to barrandodger.com — download it, share it, and ask yourself: if what you just heard isn't true, why hasn't anyone sued him?"`,
  },
];

function TemplateCard({ t }: { t: Template }) {
  const [copied, setCopied] = useState(false);
  const copy = () => {
    navigator.clipboard?.writeText(t.text).catch(() => {});
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };
  return (
    <div className="rounded-2xl border border-zinc-800 bg-zinc-900/40 p-5 space-y-3">
      <div className="flex items-center justify-between flex-wrap gap-2">
        <div className="flex items-center gap-2">
          <div className="w-2.5 h-2.5 rounded-full shrink-0" style={{ background: t.color }} />
          <span className="text-white font-bold text-sm">{t.label}</span>
        </div>
        <div className="flex gap-2">
          <button onClick={copy}
            className="flex items-center gap-1.5 bg-zinc-800 hover:bg-zinc-700 text-zinc-300 text-xs font-bold px-3 py-1.5 rounded-lg transition-colors"
            data-testid={`button-copy-${t.platform.toLowerCase().replace(/\//g, "-")}`}>
            {copied ? <Check className="h-3 w-3 text-green-400" /> : <Copy className="h-3 w-3" />}
            {copied ? "Copied!" : "Copy"}
          </button>
          {t.shareUrl && (
            <a href={t.shareUrl} target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-xs font-bold px-3 py-1.5 rounded-lg transition-colors"
              style={{ background: `${t.color}20`, border: `1px solid ${t.color}40`, color: t.color }}
              data-testid={`link-share-${t.platform.toLowerCase().replace(/\//g, "-")}`}>
              <ExternalLink className="h-3 w-3" /> Open
            </a>
          )}
        </div>
      </div>
      <pre className="text-zinc-400 text-xs leading-relaxed whitespace-pre-wrap font-sans max-h-48 overflow-y-auto bg-zinc-950/40 rounded-lg p-3">{t.text}</pre>
    </div>
  );
}

export default function BroadcastKit() {
  return (
    <div className="min-h-screen bg-zinc-950 text-white">
      <SEO
        title="Broadcast Kit — Share Templates for Every Platform | Barran Dodger"
        description="Ready-to-send viral templates for WhatsApp, SMS, email, TikTok, YouTube, LinkedIn, Facebook, X, and podcasts. Copy and send — designed to maximise reach for the Barran Dodger archive."
        path="/broadcast"
        keywords="share barran dodger, viral templates whistleblower, WhatsApp broadcast Richard McLean, TikTok script government corruption Australia, spread the archive"
      />
      <Navigation />

      <section className="relative pt-24 pb-12 px-4 text-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-purple-950/20 to-zinc-950 pointer-events-none" />
        <div className="relative max-w-3xl mx-auto space-y-4">
          <Badge className="bg-purple-500/20 text-purple-300 border-purple-500/30 font-mono text-xs">
            📡 BROADCAST KIT — SHARE ON EVERY PLATFORM
          </Badge>
          <h1 className="text-4xl md:text-5xl font-serif font-black text-white leading-tight">
            Copy. Send. Done.
          </h1>
          <p className="text-zinc-300 text-base max-w-2xl mx-auto">
            Pre-written, platform-optimised templates for WhatsApp, SMS, email, TikTok, YouTube, LinkedIn, Reddit, and podcasts. Each one is written for that platform's audience and character limits.
          </p>
          <p className="text-zinc-500 text-xs font-mono">
            The archive has reached 1,100,000 people with zero advertising. Every share from a real person reaches 10× further.
          </p>
        </div>
      </section>

      <section className="px-4 pb-16 max-w-3xl mx-auto space-y-4">
        {TEMPLATES.map(t => <TemplateCard key={t.platform} t={t} />)}
      </section>

      <section className="px-4 pb-8 max-w-3xl mx-auto">
        <TweetThreadKit />
      </section>

      <section className="px-4 pb-8 max-w-3xl mx-auto">
        <JournalistPitchKit />
      </section>

      <section className="px-4 pb-8 max-w-3xl mx-auto">
        <HackerNewsTemplate />
      </section>

      <section className="px-4 pb-8 max-w-3xl mx-auto">
        <RedditTemplates />
      </section>

      <section className="px-4 pb-8 max-w-3xl mx-auto">
        <EmbedCodeGenerator />
      </section>

      <section className="px-4 pb-8 max-w-3xl mx-auto">
        <ActionCallout title="Other ways to take action" />
      </section>

      <section className="px-4 pb-12 max-w-3xl mx-auto text-center">
        <p className="text-zinc-700 text-xs font-mono">ABN 78 833 496 164 · Barran Dodger Legal &amp; Ethical Trust Fund · Free to share</p>
      </section>

      <Footer />
    </div>
  );
}
