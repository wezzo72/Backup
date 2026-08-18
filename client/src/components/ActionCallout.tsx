import { Mail, Megaphone, FileText, PenLine } from "lucide-react";

const ACTIONS = [
  {
    icon: Mail,
    title: "Email Your MP",
    desc: "Pre-written letters for every angle. Takes 60 seconds.",
    href: "/email-your-mp",
    color: "border-green-800/40 bg-green-950/20 hover:border-green-700/60",
    badge: "text-green-400",
    cta: "Write now →",
  },
  {
    icon: Megaphone,
    title: "Share Kit",
    desc: "WhatsApp, TikTok, LinkedIn, email, YouTube — all ready to copy.",
    href: "/broadcast",
    color: "border-purple-800/40 bg-purple-950/20 hover:border-purple-700/60",
    badge: "text-purple-400",
    cta: "Get templates →",
  },
  {
    icon: FileText,
    title: "Press Kit",
    desc: "Story angles, boilerplate, facts, and contact for journalists.",
    href: "/press",
    color: "border-blue-800/40 bg-blue-950/20 hover:border-blue-700/60",
    badge: "text-blue-400",
    cta: "Open press kit →",
  },
  {
    icon: PenLine,
    title: "Sign the Petition",
    desc: "Force a parliamentary response — Change.org campaign.",
    href: "/sign-the-petition",
    color: "border-amber-800/40 bg-amber-950/20 hover:border-amber-700/60",
    badge: "text-amber-400",
    cta: "Sign now →",
  },
];

interface Props {
  title?: string;
  className?: string;
}

export function ActionCallout({ title = "Take Action Now", className = "" }: Props) {
  return (
    <div className={`space-y-4 ${className}`} data-testid="action-callout">
      <p className="text-zinc-400 text-xs font-mono uppercase tracking-widest">{title}</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {ACTIONS.map(a => (
          <a
            key={a.href}
            href={a.href}
            className={`flex items-start gap-3 rounded-2xl border p-4 transition-all ${a.color}`}
            data-testid={`link-action-callout-${a.href.replace("/", "")}`}
          >
            <a.icon className={`h-5 w-5 ${a.badge} mt-0.5 shrink-0`} />
            <div className="flex-1">
              <p className={`font-bold text-sm ${a.badge}`}>{a.title}</p>
              <p className="text-zinc-500 text-xs mt-0.5">{a.desc}</p>
              <p className={`text-[10px] font-mono mt-2 ${a.badge} opacity-70`}>{a.cta}</p>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
