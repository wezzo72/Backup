import { useState } from "react";
import { Mail, Copy, Check, Newspaper, ExternalLink } from "lucide-react";
import { SiX, SiBluesky, SiWhatsapp } from "react-icons/si";
import { useLocation } from "wouter";

const SITE_URL = "https://barrandodger.com";

const JOURNALIST_SUBJECT = "EXCLUSIVE LEAD: 788 Blockchain-Verified Documents — Australian Whistleblower, 14 Psych Wards, Found With No Pulse, ICC Article 7 Filed";

const JOURNALIST_BODY = `To the newsroom,

I'm forwarding this because I believe it may be one of the most under-reported public-interest stories in Australian history.

Dr Richard William McLean (known online as "Barran Dodger") has assembled a 788-document blockchain-verified archive exposing 35 years of systematic persecution by 35+ Australian government agencies.

Key verifiable facts:
• 14 forced psychiatric hospitalisations across 3 states
• Documented assassination attempt — found with no pulse (Werribee Mercy Hospital, Werribee Mercy Hospital, 2021)
• ICC Article 7 (crimes against humanity) complaint filed and received at The Hague
• UNHCR asylum submission filed — reference: UR/UST/23/AUS/17
• Attorney-General Mark Dreyfus notified in 2021 — chose silence
• 891 Bitcoin blockchain timestamps — every document cryptographically sealed
• AI analysis: 603 propositions assessed, zero contradictions found
• Not one defamation action filed by any agency, minister, or official in 35 years

The archive is freely downloadable at: ${SITE_URL}/archive-detonation

Everything is public. Everything is verified. Everything is downloadable.

I DARE YOU TO PROVE ME WRONG.

— A reader of barrandodger.com`;

const ACTIVIST_TEXT = `🚨 SHARE THIS — Australian whistleblower Dr Richard McLean has 788 BLOCKCHAIN-VERIFIED documents proving 35 years of government persecution. 14 psych wards. Found with no pulse. ICC complaint filed at The Hague. AG chose silence.

Everything is FREE to download. Everything is verified. Not one defamation action in 35 years.

📥 ${SITE_URL}/archive-detonation

#CannotBeErased #Whistleblower #AustraliaCorruption #BarranDodger`;

const ACADEMIC_SUBJECT = "Research referral — blockchain-verified whistleblower evidence archive (788 documents, AI analysis, ICC Article 7)";

const ACADEMIC_BODY = `Dear colleague,

I wanted to flag a publicly accessible research archive that may be of interest to scholars working in human rights law, political science, institutional accountability, or whistleblower protection.

The Barran Dodger Legal & Ethical Trust Fund (ABN 78 833 496 164) maintains an archive of 788 documents spanning 35 years, each SHA-256 hashed and Bitcoin blockchain-timestamped via OpenTimestamps.

The archive has been independently analysed by AI (603 propositions, zero contradictions) and includes:
- Federal Court and VCAT filings
- NDIS clinical records naming specific NDIA staff
- Government correspondence demonstrating deliberate obstruction
- ICC Article 7 and UNHCR submission materials
- Forensic economic harm analysis ($58.6M–$257.3M documented)

Freely accessible: ${SITE_URL}
Academic citation: Dr Richard William McLean, Barran Dodger Legal & Ethical Trust Fund, ABN 78 833 496 164
CC-BY 4.0 licence.

The archive may be cited, downloaded, referenced, and used for research.`;

export function JournalistKit() {
  const [location] = useLocation();
  const [copiedType, setCopiedType] = useState<string | null>(null);
  const [expanded, setExpanded] = useState(false);

  const pageUrl = `${SITE_URL}${location}`;

  const copy = async (text: string, type: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedType(type);
      setTimeout(() => setCopiedType(null), 2500);
    } catch {}
  };

  return (
    <div className="mt-16 mb-8 border border-[#e9a00a]/30 rounded-2xl bg-[#0d1526] overflow-hidden">
      <div className="px-6 py-4 border-b border-[#e9a00a]/20 flex items-center justify-between flex-wrap gap-3">
        <div className="flex items-center gap-3">
          <Newspaper className="h-5 w-5 text-[#e9a00a]" />
          <div>
            <p className="text-sm font-bold text-white uppercase tracking-wider">Spread This Testimony</p>
            <p className="text-xs text-white/50">One-click tools for journalists, activists &amp; academics</p>
          </div>
        </div>
        <button
          onClick={() => setExpanded(!expanded)}
          className="text-xs text-[#e9a00a] hover:text-amber-300 underline underline-offset-2 transition-colors"
        >
          {expanded ? "Show less" : "Show all tools"}
        </button>
      </div>

      <div className="p-4 grid grid-cols-1 sm:grid-cols-2 gap-3">
        {/* Tell a Journalist */}
        <a
          href={`mailto:?subject=${encodeURIComponent(JOURNALIST_SUBJECT)}&body=${encodeURIComponent(JOURNALIST_BODY)}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-start gap-3 p-3 rounded-xl bg-[#1a2744]/60 border border-[#e9a00a]/20 hover:border-[#e9a00a]/50 transition-all group"
        >
          <Mail className="h-5 w-5 text-[#e9a00a] mt-0.5 flex-shrink-0" />
          <div>
            <p className="text-sm font-semibold text-white group-hover:text-[#e9a00a] transition-colors">Tell a Journalist</p>
            <p className="text-xs text-white/50 mt-0.5">Opens email with pre-written story lead &amp; key facts</p>
          </div>
          <ExternalLink className="h-3.5 w-3.5 text-white/30 group-hover:text-[#e9a00a]/60 ml-auto flex-shrink-0 mt-1" />
        </a>

        {/* Share on Bluesky */}
        <a
          href={`https://bsky.app/intent/compose?text=${encodeURIComponent(ACTIVIST_TEXT.slice(0, 295))}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-start gap-3 p-3 rounded-xl bg-[#1a2744]/60 border border-[#e9a00a]/20 hover:border-[#e9a00a]/50 transition-all group"
        >
          <SiBluesky className="h-5 w-5 text-[#0085ff] mt-0.5 flex-shrink-0" />
          <div>
            <p className="text-sm font-semibold text-white group-hover:text-[#e9a00a] transition-colors">Post to Bluesky</p>
            <p className="text-xs text-white/50 mt-0.5">Preferred platform for investigative journalism</p>
          </div>
          <ExternalLink className="h-3.5 w-3.5 text-white/30 group-hover:text-[#e9a00a]/60 ml-auto flex-shrink-0 mt-1" />
        </a>

        {/* WhatsApp Activist */}
        <a
          href={`https://wa.me/?text=${encodeURIComponent(ACTIVIST_TEXT)}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-start gap-3 p-3 rounded-xl bg-[#1a2744]/60 border border-[#e9a00a]/20 hover:border-[#e9a00a]/50 transition-all group"
        >
          <SiWhatsapp className="h-5 w-5 text-[#25D366] mt-0.5 flex-shrink-0" />
          <div>
            <p className="text-sm font-semibold text-white group-hover:text-[#e9a00a] transition-colors">Send to Activists</p>
            <p className="text-xs text-white/50 mt-0.5">WhatsApp with pre-written message &amp; download link</p>
          </div>
          <ExternalLink className="h-3.5 w-3.5 text-white/30 group-hover:text-[#e9a00a]/60 ml-auto flex-shrink-0 mt-1" />
        </a>

        {/* Copy Page Link */}
        <button
          onClick={() => copy(pageUrl, "link")}
          className="flex items-start gap-3 p-3 rounded-xl bg-[#1a2744]/60 border border-[#e9a00a]/20 hover:border-[#e9a00a]/50 transition-all group text-left"
        >
          {copiedType === "link" ? (
            <Check className="h-5 w-5 text-green-400 mt-0.5 flex-shrink-0" />
          ) : (
            <Copy className="h-5 w-5 text-[#e9a00a] mt-0.5 flex-shrink-0" />
          )}
          <div>
            <p className="text-sm font-semibold text-white group-hover:text-[#e9a00a] transition-colors">
              {copiedType === "link" ? "Link Copied!" : "Copy Page Link"}
            </p>
            <p className="text-xs text-white/50 mt-0.5">Copy this page's URL to clipboard</p>
          </div>
        </button>
      </div>

      {/* Expanded tools */}
      {expanded && (
        <div className="px-4 pb-4 grid grid-cols-1 sm:grid-cols-2 gap-3 border-t border-[#e9a00a]/10 pt-4">
          {/* Academic referral */}
          <a
            href={`mailto:?subject=${encodeURIComponent(ACADEMIC_SUBJECT)}&body=${encodeURIComponent(ACADEMIC_BODY)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-start gap-3 p-3 rounded-xl bg-[#1a2744]/60 border border-[#e9a00a]/20 hover:border-[#e9a00a]/50 transition-all group"
          >
            <Mail className="h-5 w-5 text-purple-400 mt-0.5 flex-shrink-0" />
            <div>
              <p className="text-sm font-semibold text-white group-hover:text-[#e9a00a] transition-colors">Tell an Academic</p>
              <p className="text-xs text-white/50 mt-0.5">Pre-written research referral email (CC-BY 4.0)</p>
            </div>
            <ExternalLink className="h-3.5 w-3.5 text-white/30 group-hover:text-[#e9a00a]/60 ml-auto flex-shrink-0 mt-1" />
          </a>

          {/* Copy activist text */}
          <button
            onClick={() => copy(ACTIVIST_TEXT, "activist")}
            className="flex items-start gap-3 p-3 rounded-xl bg-[#1a2744]/60 border border-[#e9a00a]/20 hover:border-[#e9a00a]/50 transition-all group text-left"
          >
            {copiedType === "activist" ? (
              <Check className="h-5 w-5 text-green-400 mt-0.5 flex-shrink-0" />
            ) : (
              <Copy className="h-5 w-5 text-[#e9a00a] mt-0.5 flex-shrink-0" />
            )}
            <div>
              <p className="text-sm font-semibold text-white group-hover:text-[#e9a00a] transition-colors">
                {copiedType === "activist" ? "Copied!" : "Copy Activist Post"}
              </p>
              <p className="text-xs text-white/50 mt-0.5">Full ready-to-paste social media message</p>
            </div>
          </button>

          {/* X / Twitter journalist */}
          <a
            href={`https://twitter.com/intent/tweet?text=${encodeURIComponent("BREAKING: 788 blockchain-verified documents expose 35 years of Australian government persecution of whistleblower Dr Richard McLean. 14 psych wards. ICC complaint filed. AG chose silence. Everything downloadable free.\n\n" + pageUrl + "\n\n#CannotBeErased @bazdod")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-start gap-3 p-3 rounded-xl bg-[#1a2744]/60 border border-[#e9a00a]/20 hover:border-[#e9a00a]/50 transition-all group"
          >
            <SiX className="h-5 w-5 text-white mt-0.5 flex-shrink-0" />
            <div>
              <p className="text-sm font-semibold text-white group-hover:text-[#e9a00a] transition-colors">Tweet This Story</p>
              <p className="text-xs text-white/50 mt-0.5">Pre-written breaking news tweet to @bazdod</p>
            </div>
            <ExternalLink className="h-3.5 w-3.5 text-white/30 group-hover:text-[#e9a00a]/60 ml-auto flex-shrink-0 mt-1" />
          </a>

          {/* Download all */}
          <a
            href="/archive-detonation"
            className="flex items-start gap-3 p-3 rounded-xl bg-[#e9a00a]/10 border border-[#e9a00a]/40 hover:border-[#e9a00a] transition-all group"
          >
            <ExternalLink className="h-5 w-5 text-[#e9a00a] mt-0.5 flex-shrink-0" />
            <div>
              <p className="text-sm font-semibold text-[#e9a00a]">Download All 788 Documents</p>
              <p className="text-xs text-white/50 mt-0.5">Free ZIP archive — share the whole truth</p>
            </div>
          </a>
        </div>
      )}
    </div>
  );
}
