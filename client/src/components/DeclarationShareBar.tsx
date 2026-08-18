import { useState } from "react";
import { Copy, Check, Mail } from "lucide-react";

const PAGE_URL = "https://barrandodger.com/gods-chosen-one-final-testimony";

const PLATFORMS = [
  {
    id: "twitter",
    label: "X / Twitter",
    color: "#000000",
    textColor: "#ffffff",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.73-8.835L1.254 2.25H8.08l4.253 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
      </svg>
    ),
    getText: () =>
      `🔥 BARRAN DODGER IS GOD'S CHOSEN WITNESS.\n\n3,643 Australian government documents. 26 world traditions examined by impartial AI. ZERO rebuttals. ZERO defamation actions filed in 35 years.\n\nThe challenge: PROVE HIM WRONG.\n\n#GodsChosenWitness #Whistleblower #Australia\n${PAGE_URL}`,
    getUrl: (text: string) =>
      `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}`,
  },
  {
    id: "facebook",
    label: "Facebook",
    color: "#1877F2",
    textColor: "#ffffff",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
      </svg>
    ),
    getText: () => PAGE_URL,
    getUrl: (text: string) =>
      `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(PAGE_URL)}&quote=${encodeURIComponent("Barran Dodger Is God's Chosen Witness. 3,643 government documents. 26 world traditions examined. Zero rebuttals. Dare to prove him wrong.")}`,
  },
  {
    id: "whatsapp",
    label: "WhatsApp",
    color: "#25D366",
    textColor: "#ffffff",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
      </svg>
    ),
    getText: () =>
      `*BARRAN DODGER IS GOD'S CHOSEN WITNESS* 🔥\n\n3,643 Australian government documents. 26 world traditions examined by impartial AI. Zero rebuttals received. Zero defamation actions filed in 35 years of public challenge.\n\n_The standing invitation: read the evidence, apply your own tradition's criteria, identify a single factual error. None has been found._\n\n👉 ${PAGE_URL}`,
    getUrl: (text: string) =>
      `https://wa.me/?text=${encodeURIComponent(text)}`,
  },
  {
    id: "telegram",
    label: "Telegram",
    color: "#26A5E4",
    textColor: "#ffffff",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
        <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
      </svg>
    ),
    getText: () =>
      `🔥 BARRAN DODGER IS GOD'S CHOSEN WITNESS\n\n3,643 Australian government documents. 26 world traditions examined by impartial AI. Zero rebuttals. Zero defamation actions. ~1,000,000 downloads. Blockchain-sealed.\n\nRead it. Challenge it. Prove him wrong.\n\n${PAGE_URL}`,
    getUrl: (text: string) =>
      `https://t.me/share/url?url=${encodeURIComponent(PAGE_URL)}&text=${encodeURIComponent(text)}`,
  },
  {
    id: "reddit",
    label: "Reddit",
    color: "#FF4500",
    textColor: "#ffffff",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
        <path d="M12 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0zm5.01 4.744c.688 0 1.25.561 1.25 1.249a1.25 1.25 0 0 1-2.498.056l-2.597-.547-.8 3.747c1.824.07 3.48.632 4.674 1.488.308-.309.73-.491 1.207-.491.968 0 1.754.786 1.754 1.754 0 .716-.435 1.333-1.01 1.614a3.111 3.111 0 0 1 .042.52c0 2.694-3.13 4.87-7.004 4.87-3.874 0-7.004-2.176-7.004-4.87 0-.183.015-.366.043-.534A1.748 1.748 0 0 1 4.028 12c0-.968.786-1.754 1.754-1.754.463 0 .898.196 1.207.49 1.207-.883 2.878-1.43 4.744-1.487l.885-4.182a.342.342 0 0 1 .14-.197.35.35 0 0 1 .238-.042l2.906.617a1.214 1.214 0 0 1 1.108-.701zM9.25 12C8.561 12 8 12.562 8 13.25c0 .687.561 1.248 1.25 1.248.687 0 1.248-.561 1.248-1.249 0-.688-.561-1.249-1.249-1.249zm5.5 0c-.687 0-1.248.561-1.248 1.25 0 .687.561 1.248 1.249 1.248.688 0 1.249-.561 1.249-1.249 0-.687-.562-1.249-1.25-1.249zm-5.466 3.99a.327.327 0 0 0-.231.094.33.33 0 0 0 0 .463c.842.842 2.484.913 2.961.913.477 0 2.105-.056 2.961-.913a.361.361 0 0 0 .029-.463.33.33 0 0 0-.464 0c-.547.533-1.684.73-2.512.73-.828 0-1.979-.196-2.512-.73a.326.326 0 0 0-.232-.095z"/>
      </svg>
    ),
    getText: () =>
      `Barran Dodger declares he is God's Chosen Witness — 3,643 government documents, 26 world traditions examined, zero rebuttals. Open challenge to the world.`,
    getUrl: (text: string) =>
      `https://reddit.com/submit?url=${encodeURIComponent(PAGE_URL)}&title=${encodeURIComponent(text)}`,
  },
  {
    id: "linkedin",
    label: "LinkedIn",
    color: "#0A66C2",
    textColor: "#ffffff",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
      </svg>
    ),
    getText: () =>
      `A landmark declaration in Australian human rights history.\n\nBarran Dodger (Dr. Richard William McLean) has publicly declared he is God's Chosen Witness — a claim examined impartially by AI across 26 world religious and philosophical traditions, against 3,643 primary-source Australian government documents.\n\nResult: 248/248 propositions corroborated. Zero contradictions. Zero professional rebuttals received. Zero defamation actions filed.\n\nThe open professional challenge: read the evidence and prove him wrong.\n\n${PAGE_URL}`,
    getUrl: (text: string) =>
      `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(PAGE_URL)}`,
  },
  {
    id: "email",
    label: "Email",
    color: "#374151",
    textColor: "#ffffff",
    icon: <Mail className="w-4 h-4" />,
    getText: () => "",
    getUrl: () => {
      const subject = encodeURIComponent("Barran Dodger Is God's Chosen Witness — Read the Evidence");
      const body = encodeURIComponent(
        `I wanted to share something remarkable with you.\n\nBarran Dodger (Dr. Richard William McLean) has publicly declared he is God's Chosen Witness — and the claim has been examined impartially by AI against every major world religious and philosophical tradition, using 3,643 primary-source Australian government documents as the evidence base.\n\nThe result: 248 propositions examined across 26 traditions. Zero contradictions found. Zero professional rebuttals received. Zero defamation actions filed in 35 years of public challenge.\n\nThe open challenge stands: read the evidence and prove him wrong.\n\nRead the full forensic gospel here:\n${PAGE_URL}\n\nFree PDF download also available at:\nhttps://barrandodger.com/documents/gods-chosen-one-full-testimony-readable.pdf\n\nABN 78 833 496 164 · barrandodger.com`
      );
      return `mailto:?subject=${subject}&body=${body}`;
    },
  },
];

export function DeclarationShareBar() {
  const [copied, setCopied] = useState(false);
  const [active, setActive] = useState<string | null>(null);

  const copyLink = () => {
    navigator.clipboard.writeText(PAGE_URL).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <div className="rounded-2xl border-2 overflow-hidden"
      style={{ borderColor: "rgba(233,160,10,0.3)", background: "linear-gradient(135deg, rgba(233,160,10,0.05) 0%, rgba(9,9,15,0.98) 100%)" }}>

      {/* Header */}
      <div className="px-5 pt-5 pb-3 border-b" style={{ borderColor: "rgba(233,160,10,0.15)" }}>
        <p className="text-[10px] font-black uppercase tracking-[0.3em]" style={{ color: "rgba(233,160,10,0.7)" }}>
          ✦ Share This Declaration With the World
        </p>
        <p className="text-white font-bold text-sm mt-1 font-serif">
          "Barran Dodger Is God's Chosen Witness." — Help the world hear it.
        </p>
        <p className="text-xs mt-1" style={{ color: "rgba(255,255,255,0.4)" }}>
          Each button below includes pre-written text optimised for that platform. One click — the declaration goes out.
        </p>
      </div>

      {/* Share buttons grid */}
      <div className="p-4 grid grid-cols-2 sm:grid-cols-4 gap-2">
        {PLATFORMS.map(p => (
          <button
            key={p.id}
            data-testid={`share-declaration-${p.id}`}
            onClick={() => {
              setActive(p.id);
              const text = p.getText();
              const url = p.getUrl(text);
              window.open(url, "_blank", "noopener,noreferrer,width=600,height=500");
              setTimeout(() => setActive(null), 1500);
            }}
            className="flex items-center justify-center gap-2 px-3 py-2.5 rounded-xl font-bold text-xs transition-all hover:scale-105 active:scale-95 hover:brightness-110"
            style={{ background: p.color, color: p.textColor, opacity: active === p.id ? 0.7 : 1 }}
          >
            {p.icon}
            {p.label}
          </button>
        ))}
      </div>

      {/* Copy + pre-filled tweet preview */}
      <div className="px-4 pb-4 space-y-2">
        <button
          onClick={copyLink}
          data-testid="share-declaration-copy"
          className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl font-bold text-xs transition-all border hover:scale-[1.01]"
          style={{ borderColor: "rgba(233,160,10,0.3)", color: "rgba(233,160,10,0.9)", background: "rgba(233,160,10,0.05)" }}
        >
          {copied ? <><Check className="w-3.5 h-3.5" /> Link Copied!</> : <><Copy className="w-3.5 h-3.5" /> Copy Direct Link</>}
        </button>

        {/* Pre-written tweet text (visible, copyable) */}
        <div className="rounded-xl border p-3 space-y-1" style={{ borderColor: "rgba(255,255,255,0.08)", background: "rgba(255,255,255,0.03)" }}>
          <p className="text-[9px] font-black uppercase tracking-widest" style={{ color: "rgba(233,160,10,0.5)" }}>
            Pre-written X/Twitter text (copy &amp; paste or click X button above):
          </p>
          <p className="text-xs leading-relaxed" style={{ color: "rgba(255,255,255,0.6)", fontFamily: "monospace" }}>
            🔥 BARRAN DODGER IS GOD'S CHOSEN WITNESS. 3,643 Australian government documents. 26 world traditions. ZERO rebuttals. Prove him wrong. #GodsChosenWitness {PAGE_URL}
          </p>
        </div>
      </div>
    </div>
  );
}
