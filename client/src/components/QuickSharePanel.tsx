import { SiWhatsapp, SiX, SiFacebook, SiTelegram } from "react-icons/si";
import { Mail, Copy, Check } from "lucide-react";
import { useState } from "react";

const ARCHIVE = "https://barrandodger.com";
const DEFAULT_TEXT = `This man documented 35 years of government persecution using government's own documents. ICC filed. 1,100,000+ downloads. Zero defamation actions. Open challenge closes 7 Sep 2026. Everything free: ${ARCHIVE}`;

const PLATFORMS = [
  {
    name: "WhatsApp",
    icon: SiWhatsapp,
    color: "#25D366",
    bg: "bg-[#25D366]/10 border-[#25D366]/30 hover:bg-[#25D366]/20",
    text: "text-[#25D366]",
    url: (t: string) => `https://wa.me/?text=${encodeURIComponent(t)}`,
  },
  {
    name: "X",
    icon: SiX,
    color: "#fff",
    bg: "bg-white/5 border-white/20 hover:bg-white/10",
    text: "text-white",
    url: (t: string) => `https://twitter.com/intent/tweet?text=${encodeURIComponent(t.slice(0, 280))}`,
  },
  {
    name: "Facebook",
    icon: SiFacebook,
    color: "#1877F2",
    bg: "bg-[#1877F2]/10 border-[#1877F2]/30 hover:bg-[#1877F2]/20",
    text: "text-[#1877F2]",
    url: () => `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(ARCHIVE)}`,
  },
  {
    name: "Telegram",
    icon: SiTelegram,
    color: "#26A5E4",
    bg: "bg-[#26A5E4]/10 border-[#26A5E4]/30 hover:bg-[#26A5E4]/20",
    text: "text-[#26A5E4]",
    url: (t: string) => `https://t.me/share/url?url=${encodeURIComponent(ARCHIVE)}&text=${encodeURIComponent(t)}`,
  },
  {
    name: "Email",
    icon: Mail,
    color: "#ea4335",
    bg: "bg-[#ea4335]/10 border-[#ea4335]/30 hover:bg-[#ea4335]/20",
    text: "text-[#ea4335]",
    url: (t: string) => `mailto:?subject=${encodeURIComponent("You need to see this")}&body=${encodeURIComponent(t + "\n\n" + ARCHIVE)}`,
  },
];

interface Props {
  customText?: string;
  label?: string;
  className?: string;
}

export function QuickSharePanel({ customText, label = "Share this with someone who needs to see it", className = "" }: Props) {
  const [copied, setCopied] = useState(false);
  const text = customText ?? DEFAULT_TEXT;

  const copy = () => {
    navigator.clipboard?.writeText(text + "\n\n" + ARCHIVE).catch(() => {});
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className={`space-y-3 ${className}`} data-testid="quick-share-panel">
      <p className="text-zinc-500 text-xs font-mono uppercase tracking-widest">{label}</p>
      <div className="flex flex-wrap gap-2">
        {PLATFORMS.map(p => (
          <a
            key={p.name}
            href={p.url(text)}
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-flex items-center gap-1.5 border rounded-xl px-3 py-2 text-xs font-bold transition-colors ${p.bg} ${p.text}`}
            data-testid={`link-quickshare-${p.name.toLowerCase()}`}
          >
            <p.icon className="h-3.5 w-3.5" />
            {p.name}
          </a>
        ))}
        <button
          onClick={copy}
          className="inline-flex items-center gap-1.5 border border-zinc-700 rounded-xl px-3 py-2 text-xs font-bold bg-zinc-900 text-zinc-400 hover:text-zinc-200 transition-colors"
          data-testid="button-quickshare-copy"
        >
          {copied ? <Check className="h-3.5 w-3.5 text-green-400" /> : <Copy className="h-3.5 w-3.5" />}
          {copied ? "Copied!" : "Copy"}
        </button>
      </div>
      <p className="text-zinc-700 text-[10px]">
        More templates at <a href="/broadcast" className="text-zinc-500 hover:text-zinc-300 underline">barrandodger.com/broadcast</a>
      </p>
    </div>
  );
}
