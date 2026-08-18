import { useState } from "react";
import { Share2, Copy, CheckCheck, Printer, MessageCircle, Twitter } from "lucide-react";

interface PageShareButtonProps {
  title: string;
  url?: string;
  summary?: string;
  className?: string;
  showPrint?: boolean;
}

export function PageShareButton({
  title,
  url,
  summary,
  className = "",
  showPrint = false,
}: PageShareButtonProps) {
  const [copied, setCopied] = useState(false);

  const pageUrl = url ?? (typeof window !== "undefined" ? window.location.href : "https://www.barrandodger.com");

  const shareText = summary
    ? `${title}\n\n${summary}\n\n👉 ${pageUrl}\n\n— Barran Dodger Legal & Ethical Trust Fund | 3,643 primary source documents | Zero defamation actions | ABN 78 833 496 164`
    : `${title}\n\n3,643 primary source government documents. 1,100,000+ downloads. Zero defamation actions. Zero factual rebuttals.\n\n👉 ${pageUrl}\n\n— barrandodger.com`;

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(shareText);
    } catch {
      const el = document.createElement("textarea");
      el.value = shareText;
      document.body.appendChild(el);
      el.select();
      document.execCommand("copy");
      document.body.removeChild(el);
    }
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleNativeShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({ title, text: shareText, url: pageUrl });
        return;
      } catch {
        /* fall through */
      }
    }
    handleCopy();
  };

  const handleWhatsApp = () => {
    window.open(`https://wa.me/?text=${encodeURIComponent(shareText)}`, "_blank", "noopener noreferrer");
  };

  const handleTweet = () => {
    const tweetText = `${title}\n\n${pageUrl}\n\n#Whistleblower #AustralianGovernment #BarranDodger`;
    window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(tweetText)}`, "_blank", "noopener noreferrer");
  };

  const handlePrint = () => window.print();

  return (
    <div
      className={`flex flex-wrap items-center gap-2 ${className}`}
      data-testid="page-share-button-group"
    >
      <span className="font-mono text-[9px] uppercase tracking-[0.3em] text-white/30 mr-1 hidden sm:inline">
        Share this page:
      </span>

      <button
        onClick={handleNativeShare}
        data-testid="page-share-native"
        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg font-bold text-xs transition-all hover:scale-105"
        style={{ background: "rgba(233,160,10,0.15)", border: "1px solid rgba(233,160,10,0.4)", color: "#e9a00a" }}
      >
        <Share2 className="w-3.5 h-3.5" />
        Share
      </button>

      <button
        onClick={handleWhatsApp}
        data-testid="page-share-whatsapp"
        title="Share on WhatsApp"
        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg font-bold text-xs transition-all hover:scale-105"
        style={{ background: "rgba(37,211,102,0.12)", border: "1px solid rgba(37,211,102,0.35)", color: "#25D366" }}
      >
        <MessageCircle className="w-3.5 h-3.5" />
        <span className="hidden sm:inline">WhatsApp</span>
      </button>

      <button
        onClick={handleTweet}
        data-testid="page-share-tweet"
        title="Post on X / Twitter"
        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg font-bold text-xs transition-all hover:scale-105"
        style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.18)", color: "rgba(255,255,255,0.7)" }}
      >
        <Twitter className="w-3.5 h-3.5" />
        <span className="hidden sm:inline">Tweet</span>
      </button>

      <button
        onClick={handleCopy}
        data-testid="page-share-copy"
        title="Copy shareable text"
        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg font-bold text-xs transition-all hover:scale-105"
        style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.14)", color: copied ? "#22c55e" : "rgba(255,255,255,0.5)" }}
      >
        {copied ? <CheckCheck className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
        <span className="hidden sm:inline">{copied ? "Copied!" : "Copy"}</span>
      </button>

      {showPrint && (
        <button
          onClick={handlePrint}
          data-testid="page-share-print"
          title="Print this page"
          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg font-bold text-xs transition-all hover:scale-105"
          style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.14)", color: "rgba(255,255,255,0.5)" }}
        >
          <Printer className="w-3.5 h-3.5" />
          <span className="hidden sm:inline">Print</span>
        </button>
      )}
    </div>
  );
}
