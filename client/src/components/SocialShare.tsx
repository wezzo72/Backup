import { useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { Share2, Link2, Check, Mail } from "lucide-react";
import { SiX, SiFacebook, SiLinkedin, SiReddit, SiWhatsapp, SiTelegram } from "react-icons/si";
import { useToast } from "@/hooks/use-toast";

interface SocialShareProps {
  title?: string;
  description?: string;
  url?: string;
  compact?: boolean;
}

export function SocialShare({ 
  title = "Barran Dodger Legal & Ethical Trust Fund - Blockchain-Verified Evidence Archive",
  description = "540+ forensic documents with blockchain verification. Whistleblower protection & human rights documentation.",
  url = "https://www.barrandodger.com",
  compact = false,
}: SocialShareProps) {
  const { toast } = useToast();
  const [supportsNativeShare, setSupportsNativeShare] = useState(false);
  const [copied, setCopied] = useState(false);
  const { data: dlData } = useQuery<{ total: number }>({
    queryKey: ["/api/downloads/total"],
    queryFn: () => fetch("/api/downloads/total", { cache: "no-store" }).then(r => r.json()),
    staleTime: 60_000,
  });
  const liveCount = dlData?.total ? `${dlData.total.toLocaleString()}+` : "1,100,000+";
  
  useEffect(() => {
    if (typeof navigator !== "undefined" && "share" in navigator) {
      setSupportsNativeShare(true);
    }
  }, []);
  
  const encodedUrl = encodeURIComponent(url);
  const encodedTitle = encodeURIComponent(title);
  const encodedDescription = encodeURIComponent(description);

  // Platform-optimised messages — each crafted for the platform's tone and character limits
  const xText = encodeURIComponent(
    `🚨 ${liveCount} downloads. ZERO defamation actions. The archive Australia tried to bury. Open challenge closes 7 Sep 2026 — no one has rebutted a single claim. ${url} #Whistleblower #Australia #HumanRights`
  );
  const whatsappText = encodeURIComponent(
    `Have you seen this? An Australian whistleblower has 3,643 government documents — ICC filed, UN case registered, ${liveCount} downloads, ZERO defamation suits. Open challenge closes 7 Sep 2026. Everything free: ${url}`
  );
  const telegramText = encodeURIComponent(
    `📢 ${title}\n\n${liveCount} downloads. Zero defamation actions. Open Professional Challenge closes 7 Sep 2026 — no named rebuttal filed.\n\n${url}`
  );
  const redditTitle = encodeURIComponent(
    `${title} — ${liveCount} downloads, ICC filed, zero defamation actions, open challenge closes 7 Sep 2026`
  );
  const emailSubject = encodeURIComponent(
    `This archive has ${liveCount} downloads and zero defamation actions — read why`
  );
  const emailBody = encodeURIComponent(
    `I've been reading something I can't stop thinking about.\n\n${title}\n\n${description}\n\n${liveCount} downloads across 6 continents. Zero defamation actions. Zero factual rebuttals. An Open Professional Challenge closes 7 September 2026 — any named professional can publish one rebuttal. No one has.\n\n${url}`
  );
  
  const copyToClipboard = async () => {
    const shareText = `${title}\n\n${description}\n\n${liveCount} downloads. Zero defamation actions. Open challenge closes 7 Sep 2026.\n\n${url}`;
    try {
      await navigator.clipboard.writeText(shareText);
      setCopied(true);
      toast({
        title: "Message & Link Copied!",
        description: "Share this to spread the truth.",
      });
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      toast({
        title: "Failed to copy",
        description: "Please copy the URL manually.",
        variant: "destructive",
      });
    }
  };
  
  const shareLinks = [
    {
      name: "X",
      icon: <SiX className="h-4 w-4" />,
      href: `https://twitter.com/intent/tweet?text=${xText}&via=bazdod`
    },
    {
      name: "Facebook",
      icon: <SiFacebook className="h-4 w-4" />,
      href: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}&quote=${encodedTitle}`
    },
    {
      name: "LinkedIn",
      icon: <SiLinkedin className="h-4 w-4" />,
      href: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`
    },
    {
      name: "Reddit",
      icon: <SiReddit className="h-4 w-4" />,
      href: `https://reddit.com/submit?url=${encodedUrl}&title=${redditTitle}`
    },
    {
      name: "WhatsApp",
      icon: <SiWhatsapp className="h-4 w-4" />,
      href: `https://wa.me/?text=${whatsappText}`
    },
    {
      name: "Telegram",
      icon: <SiTelegram className="h-4 w-4" />,
      href: `https://t.me/share/url?url=${encodedUrl}&text=${telegramText}`
    },
    {
      name: "Email",
      icon: <Mail className="h-4 w-4" />,
      href: `mailto:?subject=${emailSubject}&body=${emailBody}`
    }
  ];
  
  const handleNativeShare = async () => {
    if (typeof navigator !== "undefined" && navigator.share) {
      try {
        await navigator.share({
          title,
          text: description,
          url
        });
      } catch (err) {
        console.log("Share cancelled");
      }
    }
  };
  
  if (compact) {
    return (
      <div className="flex items-center gap-3 flex-wrap" data-testid="social-share-compact">
        {shareLinks.map((link) => (
          <a
            key={link.name}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Share on ${link.name}`}
            className="share-icon-pulse hover-elevate flex items-center justify-center h-9 w-9 rounded-md bg-gray-900 border border-green-400/30 text-green-400"
            data-testid={`button-share-${link.name.toLowerCase()}`}
          >
            {link.icon}
          </a>
        ))}
        <button
          onClick={copyToClipboard}
          title="Copy Link"
          className="share-icon-pulse hover-elevate flex items-center justify-center h-9 w-9 rounded-md bg-gray-900 border border-green-400/30 text-green-400"
          data-testid="button-share-copy-compact"
        >
          {copied ? <Check className="h-4 w-4" /> : <Link2 className="h-4 w-4" />}
        </button>
        {supportsNativeShare && (
          <button
            onClick={handleNativeShare}
            className="share-icon-pulse hover-elevate flex items-center justify-center h-9 w-9 rounded-md bg-gray-900 border border-green-400/30 text-green-400"
            data-testid="button-share-native"
          >
            <Share2 className="h-4 w-4" />
          </button>
        )}
      </div>
    );
  }
  
  return (
    <div className="flex flex-col items-center gap-4 bg-gray-950 border border-green-400/30 rounded-xl p-6" data-testid="social-share-section">
      <p className="text-sm font-bold uppercase tracking-wider text-green-400" data-testid="text-share-label">
        Spread The Truth
      </p>
      <div className="flex items-center gap-3 flex-wrap justify-center">
        {shareLinks.map((link) => (
          <a
            key={link.name}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="share-icon-pulse hover-elevate flex items-center gap-2 h-10 px-3 rounded-md bg-gray-900 border border-green-400/30 text-green-400 text-sm font-medium"
            data-testid={`button-share-${link.name.toLowerCase()}`}
          >
            {link.icon}
            <span className="hidden sm:inline">{link.name}</span>
          </a>
        ))}
        <button
          onClick={copyToClipboard}
          className="share-icon-pulse hover-elevate flex items-center gap-2 h-10 px-3 rounded-md bg-gray-900 border border-green-400/30 text-green-400 text-sm font-medium"
          data-testid="button-share-copy"
        >
          {copied ? <Check className="h-4 w-4" /> : <Link2 className="h-4 w-4" />}
          <span className="hidden sm:inline">{copied ? "Copied!" : "Copy Link"}</span>
        </button>
        {supportsNativeShare && (
          <button
            onClick={handleNativeShare}
            className="share-icon-pulse hover-elevate flex items-center gap-2 h-10 px-3 rounded-md bg-gray-900 border border-green-400/30 text-green-400 text-sm font-medium"
            data-testid="button-share-native"
          >
            <Share2 className="h-4 w-4" />
            <span className="hidden sm:inline">More</span>
          </button>
        )}
      </div>
    </div>
  );
}
