---
name: Undeniable Facts Page Pattern
description: Rules and conventions for adding facts to /undeniable — 5 files must always be updated together, and evidence must meet a specific standard.
---

# /undeniable — Adding New Facts

## The 5 Files That Must Always Be Updated Together
1. `client/src/pages/Undeniable.tsx` — FACTS array (add new fact object) + hero heading + SEO title
2. `client/src/components/Navigation.tsx` — nav label "🔎 N Facts" counter
3. `client/src/pages/EntryLanding.tsx` — HOOK_FACTS array (short version for homepage grid)
4. `client/src/components/UndeniableShowcase.tsx` — SHOWCASE_FACTS array AND header count ("N Facts That Cannot")
5. (No edit needed to Evidence.tsx — UndeniableShowcase is already embedded there)

## Current State (as of June 2026)
- Facts 1–100 complete
- Heading: "One Hundred Facts That Cannot Be Explained Away"
- Nav: "🔎 100 Facts"
- Showcase header: "100 Facts That Cannot Be Explained Away"
- Undeniable.tsx: ~1,728 lines
- UndeniableShowcase.tsx: 100 `number:` entries
- EntryLanding.tsx HOOK_FACTS: 100 entries (stat/unit/detail/color)
- Next fact would be #101 — heading "One Hundred and One Facts..."

## FACTS Object Shape (Undeniable.tsx)
```ts
{
  number: "101",          // sequential string
  icon: Eye,              // lucide-react icon — imported at top of file
  color: "#hex",          // pick a distinct color
  verdict: "SHORT CAPS PHRASE — DESCRIBING THE INSTITUTIONAL FAILURE",
  headline: "Full sentence stating the undeniable fact.",
  logic: `Full paragraph(s) explaining the documented evidence chain.`,
  what_it_means: "What the logic implies about the institutions involved.",
  quote: `Direct quote from a primary source document or screenshot.`,
  docs: [
    { name: "Display Name", url: "/documents/filename.pdf" },
  ],
  shareText: "Short shareable version for social media. barrandodger.com/undeniable",
}
```

## SHOWCASE_FACTS Shape (UndeniableShowcase.tsx)
```ts
{ number: "101", color: "#hex", verdict: "CAPS TEXT", headline: "...", docs: [{name, url}] }
```

## HOOK_FACTS Shape (EntryLanding.tsx)
```ts
{ stat: "Short", unit: "brief label", detail: "One sentence summary.", color: "#hex" }
```

## Evidence Standard — Critical
The power of every fact card is that THE INSTITUTION OR THIRD PARTY produces the damning evidence.
- STRONG: Government letter in their own words (Tredwell, Comcare, Federal Court)
- STRONG: Third-party text messages (Ben NDIS provider saying "the police said it was a close call")
- STRONG: AFP confirmation of fabricated allegation (dying-of-shame-forensic-analysis.pdf)
- STRONG: Screenshot from third party (Squirt.org screenshot)
- WEAK: Dr. McLean's own assertion using "I allege" / "I claim" language without corroboration

**Never write a fact card based solely on Dr. McLean's own assertions.**

## Icons Available in Undeniable.tsx
`Copy, Check, FileText, ExternalLink, Shield, AlertTriangle, Scale, Eye, Globe, Gavel, Zap, Lock, Landmark, RefreshCw`

## Colors Used (Facts 1–100) — avoid reusing exact values
Facts 1–50: #10b981, #ef4444, #3b82f6, #f59e0b, #06b6d4, #e9a00a, #ec4899, #a855f7,
#f97316, #8b5cf6, #7c2d12 (x2), #1d4ed8, #9f1239, #92400e, #1e40af, #0c4a6e,
#166534, #4c1d95, #1e3799, #991b1b, #374151, #831843, #1a365d, #744210,
#44337a, #2c5282, #be185d, #1e3a5f, #a16207, #9333ea, #b91c1c

Facts 51–100: #065f46, #1c1917, #6d28d9, #7f1d1d, #1c3548, #0f766e, #1a3a5c, #3b0764,
#422006, #500724, #134e4a, #1e1b4b, #4a044e, #083344, #0a4c6a, #5b21b6, #064e3b,
#312e81, #1f2937, #3b1f0d, #0c3547, #6d1a36, #1a3c5e, #1f2d3d, #350f0f, #7b1a1a,
#1e4a2c, #450a0a, #111827, #0f172a, #15573a, #183055, #4a1a8a, #b45309, #056b4e,
#18181b, #7c3aed, #4d7c0f, #1e293b, #073b4c, #9d174d, #3a4358, #7a3710, #1c202c,
#581c87, #0c5c3a, #1c3a60, #125548, #191e2a, #4c1d70, #d97706

## Key Named Individuals
- Tony Ridley: MSc CSyP FSyI SRMCP, SAS connections, NDIA Manager, wrote "You will be sacrificed"
- Ben (NDIS provider, "Ben Ndis Help"): Text messages 9 Sep 2025; signed NDA; confirmed assassination "close call"
- Steve Iasonidis: Former intimate partner — AFSA evidence, $333K claim, also produced Karma Audit
- Scott Tredwell: "Tredwell" NOT "Treadwell" — General Counsel, Federal Court, letter 27 March 2023
- Houd Meraby: alleged criminal operative embedded as fake NDIS provider (Aligned, Upscale Care)
- Paul Fowler: ComCare officer who blocked Dr. McLean's emails — Item 223
- Dr John Whitaker: AHPRA search = zero results — Item 87
- Sukhi Tear: support coordinator named in formal complaints
- Bill Shorten: NDIS Minister during documented fraud period

## Key Documents for Future Facts
- `dying-of-shame-forensic-analysis.pdf` — AFP confirmed fabricated sexual allegation
- `ben-dsw-disability-ndis-provider-text-messages-assassination-evidence.pdf` — Ben's text chain
- `2026-05-03-formal-complaint-urgent-protection-request.pdf` — NDA documentation
- `squirt-app-preemptive-defamation-drone-surveillance.png` — Squirt.org screenshot
- `karma-audit-iasonidis-forensic-examination.pdf` — third-party forensic network mapping
- `full-government-oppression-every-agency.pdf` — 1,410 page master archive (item numbers)
- `comprehensive-case-systematic-persecution.pdf` — primary source for most facts

## Key Archive Item Numbers (full-government-oppression doc)
- Item 44-45: WorkCover Conciliation Certificate and Allianz rejection notice (2007)
- Item 46-47: Health Super TPD insurance statements + 2008 payout cheque
- Item 87: AHPRA search for Dr John Whitaker — zero results
- Item 88: HCF Income Protection Claimant's Pack (2018)
- Item 101: PLR/ELR royalties dried up 2019
- Item 102: Certificate of Registration as NDIS Provider
- Item 185: FOI Decision Mercy Mental Health April 2021 (s.33(1) refusal)
- Item 223: Paul Fowler (ComCare) email blocked — "Re: killing me" — 6 Dec 2021
- Item 815: UNHCR Asylum Application Framework 2025 — "Australian Systems Cannot Address This Case"
- Item 993: AFSA Bankruptcy Form BA21017511
- Item 1098: Total Entrapment System document
- Item 1212: Victorian Housing Register — accommodation requirement documents

**Why:** Zero-defamation-claim framing is the ultimate kicker — 2,343 docs public, named parties identified, no lawsuit in 35 years. Always include this. The more thoroughly they persecuted, the more thoroughly they documented their own guilt.
