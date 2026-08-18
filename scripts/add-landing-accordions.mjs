import { readFileSync, writeFileSync } from 'fs';

const filePath = 'client/src/pages/EntryLanding.tsx';
let content = readFileSync(filePath, 'utf-8');

// ── Step 1: Add ChevronDown to lucide-react import ──────────────────────────
content = content.replace(
  'import { ArrowRight, TrendingUp, Scale, Copy, Check, Share2, Mail, MessageCircle, Download, BookOpen, ShoppingBag } from "lucide-react";',
  'import { ArrowRight, TrendingUp, Scale, Copy, Check, Share2, Mail, MessageCircle, Download, BookOpen, ShoppingBag, ChevronDown } from "lucide-react";'
);
console.log('Step 1 done: ChevronDown added to import');

// ── Step 2: Insert AccordionSection component before SECTION_DIVIDER ────────
const accordionDef = `
// ─── LANDING PAGE ACCORDION ─────────────────────────────────────────────────
function AccordionSection({
  title,
  color,
  defaultOpen = false,
  children,
}: {
  title: string;
  color: string;
  defaultOpen?: boolean;
  children: React.ReactNode;
}) {
  const [isOpen, setIsOpen] = useState(defaultOpen);
  return (
    <div className="border-b-2 last:border-b-0" style={{ borderColor: "rgba(0,0,0,0.07)" }}>
      <button
        onClick={() => setIsOpen((o) => !o)}
        className="w-full flex items-center justify-between px-4 sm:px-8 py-4 sm:py-5 text-left bg-white hover:bg-zinc-50 transition-colors focus:outline-none"
        aria-expanded={isOpen}
      >
        <span
          className="font-black text-sm sm:text-base uppercase tracking-wide leading-tight pr-4"
          style={{ color }}
        >
          {title}
        </span>
        <ChevronDown
          className="flex-shrink-0 w-6 h-6 transition-transform duration-300"
          style={{ color, transform: isOpen ? "rotate(180deg)" : "rotate(0deg)" }}
        />
      </button>
      {isOpen && <div>{children}</div>}
    </div>
  );
}

`;

const sectionDividerIdx = content.indexOf('const SECTION_DIVIDER');
if (sectionDividerIdx === -1) {
  console.error('SECTION_DIVIDER not found!');
  process.exit(1);
}
content = content.slice(0, sectionDividerIdx) + accordionDef + content.slice(sectionDividerIdx);
console.log('Step 2 done: AccordionSection component inserted');

// ── Step 3: Define section boundaries ────────────────────────────────────────
const sections = [
  {
    marker: '      <BreachContainmentBanner />',
    title: 'The Urgency — What Is Happening Right Now',
    color: '#ef4444',
    defaultOpen: true,
  },
  {
    marker: '      <ImpartialAIStatement />',
    title: 'The AI Verdict: What Impartial Intelligence Found',
    color: '#a78bfa',
  },
  {
    marker: '      {/* ── HERO MOTIF ── */}',
    title: 'One Man. Every Document. — The Archive at a Glance',
    color: '#e9a00a',
  },
  {
    marker: '      {/* ══════════════════════════════════════════════════════════════',
    title: "God's Chosen Witness — The Open Challenge to the World",
    color: '#e9a00a',
  },
  {
    marker: '      {/* ── IMPARTIAL AI SIGNIFICANCE ANALYSIS ── */}',
    title: 'The Evidence of Record: Federal Court Admissions, AI Valuation & Institutional Betrayal',
    color: '#38bdf8',
  },
  {
    marker: '      {/* ── YOUTUBE — CORROBORATION FROM THE UNIVERSE ── */}',
    title: 'Independent Corroboration: The Numbers That Cannot Be Ignored',
    color: '#34d399',
  },
  {
    marker: '      {/* ── LIVE ACCOUNTABILITY COUNTERS ── */}',
    title: 'Accountability Metrics, Milestones & Whistleblower History',
    color: '#22c55e',
  },
  {
    marker: '      {/* ── CHOSEN ONE DECLARATION ── */}',
    title: 'The Prophetic Record: The Chosen One Declaration',
    color: '#8b5cf6',
  },
  {
    marker: '      {/* ── FORENSIC ANALYSIS II: THE VESSEL, THE SILENCE, THE RECKONING ── */}',
    title: 'Forensic Analysis: The Vessel, The Silence, The Reckoning',
    color: '#f59e0b',
  },
  {
    marker: '      {/* ── TESTIMONY — FIRST THING PEOPLE READ ── */}',
    title: 'Personal Testimony: In My Own Words',
    color: '#94a3b8',
  },
  {
    marker: '      <WorldAnnouncementBanner />',
    title: 'The World Announcement, Free Archive & The Reckoning Paper',
    color: '#22c55e',
  },
  {
    marker: '      {/* ── THEY ARE GOING TO JAIL — ABSOLUTE FIRST ── */}',
    title: 'Victory Statement: They Are Going to Jail & The Mantle of Witness',
    color: '#e9a00a',
  },
  {
    marker: '      {/* ── FORENSIC CORROBORATION PROTOCOL ── */}',
    title: 'The Forensic Corroboration Protocol: Open Methodology for Researchers, Journalists & AI',
    color: '#2dd4bf',
  },
  {
    marker: '      {/* ── CRIMES AGAINST HUMANITY CONFIRMED — ABSOLUTE TOP ── */}',
    title: 'Crimes Against Humanity Confirmed — The Sacred Gospels & 22 World Traditions',
    color: '#ef4444',
  },
  {
    marker: '      {/* ── FULL PROPHETIC DOCUMENT ── */}',
    title: 'Ten Lenses: The Complete Portrait of Barran Resonance Dodger',
    color: '#a78bfa',
  },
  {
    marker: '      {/* COSMIC TRANSMISSION */}',
    title: 'The Cosmic Transmission, Soul Contract & The Free Archive',
    color: '#818cf8',
  },
];

// ── Step 4: Find all marker positions in updated content ─────────────────────
const footerMarker = '      <Footer />';
const footerPos = content.lastIndexOf(footerMarker);
if (footerPos === -1) { console.error('Footer not found!'); process.exit(1); }

const insertions = [];

// Final closing tag before Footer
insertions.push({ pos: footerPos, text: '      </AccordionSection>\n\n' });

for (let i = 0; i < sections.length; i++) {
  const { marker, title, color, defaultOpen } = sections[i];
  const pos = content.indexOf(marker);
  if (pos === -1) {
    console.error(`MARKER NOT FOUND [${i}]: "${marker.slice(0, 70)}"`);
    process.exit(1);
  }
  const openTag = `      <AccordionSection title="${title}" color="${color}"${defaultOpen ? ' defaultOpen' : ''}>\n`;
  const closeTag = i === 0 ? '' : '      </AccordionSection>\n\n';
  insertions.push({ pos, text: closeTag + openTag });
  console.log(`  Section ${i + 1} found at pos ${pos}: ${title.slice(0, 50)}`);
}

// ── Step 5: Apply insertions from back to front ───────────────────────────────
insertions.sort((a, b) => b.pos - a.pos);
let result = content;
for (const { pos, text } of insertions) {
  result = result.slice(0, pos) + text + result.slice(pos);
}

writeFileSync(filePath, result, 'utf-8');
console.log(`\n✅ Done! ${sections.length} accordion sections wrapped.`);
console.log(`   New file length: ${result.length.toLocaleString()} chars`);
