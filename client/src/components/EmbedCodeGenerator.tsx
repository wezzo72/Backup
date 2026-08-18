import { useState } from "react";
import { Copy, Check, Code2 } from "lucide-react";

const EMBEDS = [
  {
    id: "live-counter",
    label: "Live download counter badge",
    preview: "1,100,000+ downloads · 6 continents · barrandodger.com",
    code: `<a href="https://barrandodger.com" target="_blank" rel="noopener noreferrer" style="display:inline-flex;align-items:center;gap:8px;padding:8px 14px;background:#18181b;border:1px solid #3f3f46;border-radius:999px;text-decoration:none;font-family:monospace;font-size:12px;color:#a1a1aa;">
  <span style="width:8px;height:8px;border-radius:50%;background:#f59e0b;display:inline-block;"></span>
  <span style="color:#f59e0b;font-weight:900;">1,100,000+</span>
  <span>downloads · 6 continents</span>
  <span style="color:#52525b;">· barrandodger.com</span>
</a>`,
  },
  {
    id: "key-fact-box",
    label: "Key facts callout box",
    preview: "Zero defamation actions · ICC filed · UN registered",
    code: `<div style="border:1px solid #3f3f46;border-radius:12px;padding:16px;background:#09090b;font-family:sans-serif;max-width:400px;">
  <p style="color:#f59e0b;font-size:11px;font-weight:900;text-transform:uppercase;letter-spacing:0.15em;margin:0 0 10px;">Barran Dodger Archive — Key Facts</p>
  <ul style="list-style:none;padding:0;margin:0;color:#a1a1aa;font-size:13px;line-height:1.8;">
    <li>✓ 3,643 primary source government documents</li>
    <li>✓ 35 years · 13 agencies</li>
    <li>✓ ICC Article 7 submission received</li>
    <li>✓ OHCHR case UR/UST/23/AUS/17</li>
    <li>✓ 1,100,000+ downloads · 0 defamation actions</li>
  </ul>
  <a href="https://barrandodger.com" target="_blank" style="display:block;margin-top:12px;color:#f59e0b;font-size:12px;text-decoration:none;">barrandodger.com →</a>
</div>`,
  },
  {
    id: "share-link",
    label: "Simple text link",
    preview: "Copy-paste HTML link",
    code: `<a href="https://barrandodger.com" target="_blank" rel="noopener noreferrer">Barran Dodger archive — 3,643 government documents, ICC filed, 1,100,000+ downloads</a>`,
  },
];

export function EmbedCodeGenerator({ className = "" }: { className?: string }) {
  const [selected, setSelected] = useState(EMBEDS[0].id);
  const [copied, setCopied] = useState(false);
  const embed = EMBEDS.find(e => e.id === selected) ?? EMBEDS[0];

  const copy = () => {
    navigator.clipboard?.writeText(embed.code).catch(() => {});
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className={`rounded-2xl border border-zinc-700/40 bg-zinc-900/40 p-5 space-y-4 ${className}`} data-testid="embed-code-generator">
      <div className="flex items-center gap-2">
        <Code2 className="h-4 w-4 text-violet-400" />
        <p className="text-xs font-mono uppercase tracking-widest text-zinc-400">Embed on your website / blog</p>
      </div>
      <div className="flex flex-wrap gap-2">
        {EMBEDS.map(e => (
          <button key={e.id} onClick={() => setSelected(e.id)}
            className={`text-xs font-bold px-3 py-1.5 rounded-lg transition-colors ${e.id === selected ? "bg-violet-700 text-white" : "bg-zinc-800 text-zinc-400 hover:bg-zinc-700"}`}
            data-testid={`button-embed-${e.id}`}>
            {e.label}
          </button>
        ))}
      </div>
      <div className="rounded-xl bg-zinc-950/60 border border-zinc-800 p-3 space-y-2">
        <p className="text-zinc-600 text-[10px] font-mono">{embed.preview}</p>
        <pre className="text-zinc-400 text-xs leading-relaxed whitespace-pre-wrap break-all font-mono">{embed.code}</pre>
        <button onClick={copy}
          className="flex items-center gap-1.5 bg-violet-900/40 hover:bg-violet-900/60 border border-violet-700/40 text-violet-300 text-xs font-bold px-3 py-1.5 rounded-lg transition-colors"
          data-testid="button-copy-embed-code">
          {copied ? <Check className="h-3 w-3 text-green-400" /> : <Copy className="h-3 w-3" />}
          {copied ? "Copied!" : "Copy embed code"}
        </button>
      </div>
      <p className="text-zinc-700 text-[10px]">Free to use. No attribution required — though it helps. No tracking code. Pure HTML.</p>
    </div>
  );
}
