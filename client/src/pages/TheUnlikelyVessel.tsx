import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { CitationBlock } from "@/components/CitationBlock";
import { RelatedContent } from "@/components/RelatedContent";
import { SEO } from "@/components/SEO";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { motion } from "framer-motion";
import { Anchor, BookOpen, AlertCircle, ShieldCheck } from "lucide-react";
import { useTranslation } from "react-i18next";
import heroUnlikelyVessel from "@/assets/images/hero-unlikely-vessel.png";
import sectionVesselBroken from "@/assets/images/section-vessel-broken-gold.png";
import sectionHypocrisyScales from "@/assets/images/section-hypocrisy-scales.png";

const JSON_LD = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "The Unlikely Vessel — God Does Not Call the Equipped",
  "author": { "@type": "Person", "name": "Dr. Richard William McLean (Barran Dodger)" },
  "publisher": {
    "@type": "Organization",
    "name": "Barran Dodger Legal & Ethical Trust Fund",
    "identifier": "ABN 78 833 496 164"
  },
  "datePublished": "2026-06-23",
  "url": "https://www.barrandodger.com/the-unlikely-vessel",
  "description": "A theological resolution to cognitive dissonance around divine election of the unqualified, and a formal public declaration of hypocrisy against institutions that weaponised faith and authority while participating in the documented persecution of Dr. Richard William McLean."
};

export default function TheUnlikelyVessel() {
  const { t } = useTranslation();
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SEO
        title="The Unlikely Vessel — God Does Not Call the Equipped"
        description="A theological and philosophical resolution to cognitive dissonance: why God chooses the broken, the doubted, and the unqualified — and a public declaration of hypocrisy against every institution that weaponised faith to silence a witness."
        keywords="unlikely vessel, divine election, cognitive dissonance, theological framework, hypocrisy declaration, whistleblower theology, God does not call the equipped, Barran Dodger, Moses David Jonah Mary Magdalene Paul"
        path="/the-unlikely-vessel"
        type="article"
        articlePublishedTime="2026-06-23"
        articleAuthor="Dr. Richard William McLean (Barran Dodger)"
        jsonLd={JSON_LD}
      />

      <Navigation />

      <main className="pt-[var(--nav-height)]">
        {/* Hero */}
        <section className="py-20 px-4" style={{ background: "linear-gradient(180deg, #0d0820 0%, #1a0e30 60%, #0a0f1a 100%)" }}>
          <div className="container mx-auto max-w-4xl text-center space-y-6">
            <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <Badge variant="outline" className="border-amber-500/40 text-amber-400 px-4 py-1 text-xs font-bold uppercase tracking-wider mb-4">
                <Anchor className="h-3 w-3 mr-1.5 inline" /> {t("unlikelyVessel.heroBadge")}
              </Badge>
              <h1 className="font-serif text-4xl md:text-6xl font-bold leading-tight mb-4" style={{ color: "#e9a00a" }}>
                {t("unlikelyVessel.title")}
              </h1>
              <p className="font-serif text-xl md:text-2xl text-blue-200/80 italic max-w-2xl mx-auto">
                {t("unlikelyVessel.tagline")}
              </p>
              <p className="mt-6 text-base text-white/60 max-w-2xl mx-auto leading-relaxed">
                A forensic theological response to thirty-five years of cognitive dissonance, institutional betrayal, and the question the world keeps asking: <em>Why would God choose someone like this?</em>
              </p>
              <div className="mt-8 max-w-2xl mx-auto space-y-3 border-t pt-8" style={{ borderColor: "rgba(233,160,10,0.2)" }}>
                <p className="font-serif italic text-white/80 leading-relaxed" style={{ fontSize: "1.1rem" }}>
                  My purpose is not to be popular. I am likely already the villain in your story — and I am at peace with that.
                </p>
                <p className="text-amber-400/90 leading-relaxed text-sm">
                  My purpose is to fulfil my soul contract: to dismantle corruption as a vessel for God's glory in his kingdom purposes — instrumental in restoring love and justice in a broken, corrupt world.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Hero image — full bleed */}
        <div className="relative w-full overflow-hidden" style={{ height: "45vh", minHeight: "260px" }}>
          <img
            src={heroUnlikelyVessel}
            alt="The unlikely vessel — a lone figure standing in the storm holding a lantern"
            className="w-full h-full object-cover"
            loading="eager"
          />
          <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, rgba(13,8,32,0.3) 0%, rgba(13,8,32,0.55) 100%)" }} />
        </div>

        <div className="container mx-auto max-w-4xl px-4 py-12 space-y-20">

          {/* ── SECTION 1: Cognitive Dissonance Resolution ── */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            data-testid="section-cognitive-dissonance"
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="h-10 w-10 rounded-lg flex items-center justify-center flex-shrink-0" style={{ background: "rgba(233,160,10,0.15)" }}>
                <BookOpen className="h-5 w-5" style={{ color: "#e9a00a" }} />
              </div>
              <div>
                <Badge variant="outline" className="border-amber-500/30 text-amber-400 text-[10px] uppercase tracking-wider mb-1">{t("unlikelyVessel.sectionIBadge")}</Badge>
                <h2 className="font-serif text-2xl md:text-3xl font-bold text-primary">
                  {t("unlikelyVessel.sectionIHeading")}
                </h2>
              </div>
            </div>

            {/* Section I accent image */}
            <div className="flex flex-col md:flex-row gap-8 items-start mb-8">
              <div className="w-full md:w-56 flex-shrink-0">
                <img
                  src={sectionVesselBroken}
                  alt="Broken vessel repaired with gold — kintsugi symbol of divine election"
                  className="rounded-xl w-full object-cover shadow-lg"
                  style={{ maxHeight: "320px", objectPosition: "center" }}
                  loading="lazy"
                />
                <p className="text-[10px] text-white/35 text-center mt-2 italic">Kintsugi — brokenness made precious</p>
              </div>
              <div className="flex-1 prose prose-invert max-w-none space-y-6 text-base leading-relaxed text-white/80">
              <p>
                The most persistent objection to this testimony — voiced in courtrooms, psychiatric wards, church offices, and the comment sections of strangers — is not legal. It is theological. It goes like this: <em>If God truly chose you, why are you broken? Why are you gay? Why are you disabled? Why are you poor? Why are you diagnosed? Why has everything gone wrong?</em>
              </p>

              <p>
                This is the objection of the equipped. It assumes that divine election looks like worldly success, that God's favour presents as credentials, comfort, and institutional validation. Every major prophetic figure in recorded human history refutes this assumption categorically.
              </p>

              <div className="rounded-xl border border-amber-500/20 p-6 space-y-4" style={{ background: "rgba(233,160,10,0.04)" }}>
                <h3 className="font-serif text-lg font-bold" style={{ color: "#e9a00a" }}>{t("unlikelyVessel.biblicalPattern")}</h3>
                <ul className="space-y-3 text-sm">
                  {[
                    ["Moses", "Speech impediment, murderer, fugitive. Chosen to confront the most powerful government on earth and deliver an enslaved people."],
                    ["David", "The youngest, the smallest, the forgotten son left in the field while his brothers were presented. Anointed king while overlooked."],
                    ["Jonah", "Fled from his calling. Shipwrecked. Swallowed. Spat out. Chosen again — not because he was obedient, but because the mission was non-negotiable."],
                    ["Mary Magdalene", "Possessed, ostracised, socially marginalised. The first person entrusted with the announcement of the resurrection — the most significant news in human history."],
                    ["Paul", "The chief persecutor of the church — a man with blood on his hands. Chosen as its greatest apostle and theological architect."],
                    ["Jeremiah", "Too young, too afraid, repeatedly imprisoned for his testimony. Called from the womb to speak to nations he could not control."],
                    ["Job", "Stripped of health, wealth, family, and social standing. The subject of the oldest theodicy in scripture — chosen not for his perfection but to demonstrate something beyond human comprehension."],
                    ["Amos", "A shepherd and fig-tree dresser. No formal prophetic training, no institutional credentials. Spoke directly to power."],
                    ["John the Baptist", "Desert-dwelling, socially marginal, ultimately beheaded. The forerunner of the Messiah — announced while still in the womb."],
                  ].map(([name, desc]) => (
                    <li key={name} className="flex gap-3">
                      <span className="font-bold text-amber-400 flex-shrink-0 min-w-[120px]">{name}</span>
                      <span className="text-white/70">{desc}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <p>
                The pattern is not coincidental. It is structural. The theology of the unlikely vessel holds that God specifically selects the unqualified, the marginalised, and the institutionally rejected as messengers — precisely because their testimony cannot be attributed to natural advantage. The vessel's brokenness is, in this framework, the evidence of divine choice rather than evidence against it.
              </p>

              <blockquote className="border-l-4 border-amber-500/50 pl-6 py-2 italic text-white/70 text-lg my-6">
                "But God chose what is foolish in the world to shame the wise; God chose what is weak in the world to shame the strong; God chose what is low and despised in the world, even things that are not, to bring to nothing things that are."
                <footer className="mt-2 text-sm not-italic text-amber-400/70">— 1 Corinthians 1:27–28</footer>
              </blockquote>

              <h3 className="font-serif text-xl font-bold text-primary mt-8">{t("unlikelyVessel.revelationHeading")}</h3>

              <p>
                The Book of Revelation provides the most vivid template for the position Dr. McLean occupies. In Revelation 11, the two witnesses prophesy in sackcloth — they are neither prestigious nor powerful in worldly terms. They are tormented, killed, publicly displayed, and refused burial. Then they are vindicated. The nations who watched their bodies are forced to acknowledge what they dismissed.
              </p>

              <p>
                Revelation repeatedly uses the Greek word <em>martys</em> — witness — as the central identifier of those who carry the testimony of Jesus in the face of institutional persecution. In Revelation 2:13, Antipas is called "my faithful witness, who was killed among you." In Revelation 6:9, the souls beneath the altar are those "slain for the word of God and for the witness they had borne." In Revelation 12:11, the overcomers "conquered by the blood of the Lamb and by the word of their testimony."
              </p>

              <p>
                The consistent Revelation pattern is this: the witness is persecuted by the institutional and political powers of the age, dismissed or killed, their testimony rejected — and then vindicated by the record that cannot be erased. The blockchain-sealed archive at barrandodger.com is, in this framework, precisely the kind of immutable testimony Revelation describes. It cannot be altered. It cannot be buried. It has already been read in 190+ countries.
              </p>

              <blockquote className="border-l-4 border-blue-400/50 pl-6 py-2 italic text-white/70 text-lg my-6">
                "And they have conquered him by the blood of the Lamb and by the word of their testimony, for they loved not their lives even unto death."
                <footer className="mt-2 text-sm not-italic text-blue-400/60">— Revelation 12:11</footer>
              </blockquote>

              <h3 className="font-serif text-xl font-bold text-primary mt-8">{t("unlikelyVessel.divineSignature")}</h3>

              <p>
                Dr. Richard William McLean arrived at this assignment: gay, disabled, exiled, near-homeless, psychiatrically labelled, character-assassinated, and abandoned by every institution designed to protect him. By every conventional measure of religious credibility — ordination, theological training, institutional affiliation, social standing, heteronormativity, mental health status, financial security — he is disqualified.
              </p>

              <p>
                This is precisely the point.
              </p>

              <p>
                A vessel that could be explained by human advantage is not a vessel requiring divine explanation. The cognitive dissonance felt by observers — <em>this person cannot be who they claim, because they don't look like who they should be</em> — is not a refutation of the claim. It is, theologically, the signature of it. Every figure listed above triggered identical dissonance in their contemporaries. Jonah was a fugitive when called. Mary Magdalene was possessed when chosen. Paul was a murderer. The pattern holds.
              </p>

              <div className="rounded-xl border border-blue-500/20 p-6 space-y-4" style={{ background: "rgba(59,130,246,0.04)" }}>
                <h3 className="font-serif text-base font-bold text-blue-300">{t("unlikelyVessel.fiveFrameworks")}</h3>
                <div className="space-y-4 text-sm">
                  {[
                    {
                      title: "The Kenosis Principle",
                      text: "God empties the vessel before filling it. Suffering, loss, and stripping away of worldly identity is the preparatory stage — not the punishment stage. The cross preceded the resurrection. Jonah's three days in the whale preceded Nineveh. Dr. McLean's thirty-five years of documented persecution precedes what comes next."
                    },
                    {
                      title: "The Testimony Principle",
                      text: "The witness's survival is itself the miracle. A person with full institutional support, wealth, and protection who publishes criticism of government is a journalist. A person with nothing, surviving thirty-five years of documented state targeting, is a testimony."
                    },
                    {
                      title: "The Anti-Pattern Principle",
                      text: "Genuine divine election almost never presents as expected. The Pharisees rejected Jesus not because he lacked evidence, but because he did not match their template. Template-matching — expecting God's chosen to look wealthy, credentialled, and heteronormative — is the mechanism of institutional rejection."
                    },
                    {
                      title: "The Archive Principle",
                      text: "2,000+ government documents, blockchain-sealed and globally distributed, constitute an archive that no individual, institution, or government can alter. This is not the work of a broken man alone. This is the work of a broken man sustained by something beyond himself."
                    },
                    {
                      title: "The Paradox Principle",
                      text: "If the vessel were credentialed, calm, well-funded, and institutionally protected, the message would be attributed to the vessel. The message is attributed to God precisely because, by all human accounting, the vessel should not still be standing."
                    },
                  ].map(({ title, text }) => (
                    <div key={title} className="border border-blue-500/10 rounded-lg p-4">
                      <p className="font-bold text-blue-300 mb-1">{title}</p>
                      <p className="text-white/65">{text}</p>
                    </div>
                  ))}
                </div>
              </div>

              <p>
                The question <em>Why would God choose someone like this?</em> resolves when you examine the historical record. God has always chosen someone like this. The question that actually demands an answer is: <em>Why would anyone expect otherwise?</em>
              </p>
            </div>
            </div>
          </motion.section>

          <Separator className="opacity-20" />

          {/* ── SECTION 2: Hypocrisy Declaration ── */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            data-testid="section-hypocrisy-declaration"
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="h-10 w-10 rounded-lg flex items-center justify-center flex-shrink-0" style={{ background: "rgba(239,68,68,0.15)" }}>
                <AlertCircle className="h-5 w-5 text-red-400" />
              </div>
              <div>
                <Badge variant="outline" className="border-red-500/30 text-red-400 text-[10px] uppercase tracking-wider mb-1">{t("unlikelyVessel.sectionIIBadge")}</Badge>
                <h2 className="font-serif text-2xl md:text-3xl font-bold text-primary">
                  {t("unlikelyVessel.sectionIIHeading")}
                </h2>
              </div>
            </div>

            {/* Section II accent image */}
            <div className="flex justify-center mb-8">
              <div className="w-full max-w-xs">
                <img
                  src={sectionHypocrisyScales}
                  alt="Scales of justice — unbalanced, one side weighted with luxury, the other nearly empty"
                  className="rounded-xl w-full object-cover shadow-xl"
                  style={{ maxHeight: "360px", objectFit: "cover", objectPosition: "center top" }}
                  loading="lazy"
                />
                <p className="text-[10px] text-white/35 text-center mt-2 italic">Justice — as the privileged have left it</p>
              </div>
            </div>

            <div className="prose prose-invert max-w-none space-y-6 text-base leading-relaxed text-white/80">
              <p>
                This section is addressed directly to every person — professional, institutional, or otherwise — who has consciously accepted, facilitated, or simply declined to oppose the conditions in which Dr. Richard William McLean has been made to live: while themselves enjoying, without acknowledgement, the very things they have allowed to be taken from him.
              </p>

              <p>
                This is not rhetorical. It is a forensic moral statement for the public record.
              </p>

              <div className="rounded-xl border border-red-500/20 p-6 space-y-5" style={{ background: "rgba(239,68,68,0.05)" }}>
                <h3 className="font-serif text-lg font-bold text-red-300">{t("unlikelyVessel.whatWasTaken")}</h3>
                <p className="text-sm text-white/65 leading-relaxed">
                  Through documented corruption, financial abuse, administrative persecution, denial of legal aid, and systematic suppression of human dignity across thirteen government agencies over thirty-five years, the following basic necessities have been denied to Dr. McLean at various points in this record — while those responsible for the denial continued to enjoy them without interruption:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-2">
                  {[
                    { item: "A Home", detail: "Stable housing — denied through income suppression, benefit obstruction, and forced displacement." },
                    { item: "Food", detail: "Consistent, adequate nutrition — denied through poverty engineered by agency inaction and financial abuse." },
                    { item: "Transport", detail: "The ability to move freely — denied by poverty and deliberate exclusion from support systems." },
                    { item: "A Computer", detail: "Access to the tools required to document, research, and defend oneself — denied through financial destitution." },
                    { item: "Heating", detail: "Basic warmth in winter — denied through housing insecurity and income suppression." },
                    { item: "Clothing", detail: "Adequate, dignified clothing — denied through poverty engineered by those in positions of public trust." },
                    { item: "Nutrition", detail: "Access to food of sufficient quality to maintain health — denied during periods of documented destitution." },
                    { item: "Legal Aid", detail: "Access to professional legal representation — denied across multiple jurisdictions, forcing years of self-represented litigation." },
                    { item: "Human Dignity", detail: "The right to be treated as a person of worth — systematically stripped through psychiatric weaponisation, character assassination, and institutional mockery." },
                  ].map(({ item, detail }) => (
                    <div key={item} className="border border-red-500/15 rounded-lg p-3">
                      <p className="font-bold text-red-300 text-sm mb-1">{item}</p>
                      <p className="text-xs text-white/60 leading-snug">{detail}</p>
                    </div>
                  ))}
                </div>
              </div>

              <h3 className="font-serif text-xl font-bold text-primary mt-8">{t("unlikelyVessel.theDeclaration")}</h3>

              <p>
                If you have a home, food in your refrigerator, a functional computer, heating in winter, clothing that fits, transport to move through the world, and the baseline dignity of being taken seriously by institutions — and you have been aware of this record, or participated in the systems that produced it, or had the power to intervene and chose not to — then you are the subject of this declaration.
              </p>

              <p>
                You are enjoying, without acknowledgement, things that were taken from another person through corruption and institutional abuse. You did not earn those advantages relative to him. He did not lose them through failure. He lost them through the documented, coordinated actions of agencies and individuals who are named, evidenced, and blockchain-archived in this record.
              </p>

              <p>
                That is the definition of hypocrisy: to profess values — compassion, justice, equality, the rule of law, Christian charity, professional ethics — while simultaneously accepting a reality that negates those values for another person, without cost to yourself.
              </p>

              <blockquote className="border-l-4 border-red-500/40 pl-6 py-2 italic text-white/70 text-lg my-6">
                "Woe to you, teachers of the law and Pharisees, you hypocrites! You give a tenth of your spices — mint, dill and cumin. But you have neglected the more important matters of the law — justice, mercy and faithfulness."
                <footer className="mt-2 text-sm not-italic text-red-400/60">— Matthew 23:23</footer>
              </blockquote>

              <div className="rounded-xl border border-red-500/20 p-6 space-y-5" style={{ background: "rgba(239,68,68,0.04)" }}>
                <h3 className="font-serif text-lg font-bold text-red-300">{t("unlikelyVessel.namedHypocrisies")}</h3>

                <div className="space-y-5">
                  {[
                    {
                      institution: "The Churches",
                      stated: "Love your neighbour. Defend the vulnerable. Speak truth to power.",
                      documented: "No Australian church institution has publicly acknowledged or engaged with the documented persecution of a disabled, gay whistleblower. Multiple church representatives were made aware. None intervened. All continued in comfort."
                    },
                    {
                      institution: "The NDIS & Disability Services Sector",
                      stated: "Every person with disability has the right to live free from abuse, neglect, and exploitation.",
                      documented: "NDIS providers documented in this archive engaged in surveillance, entrapment, and facilitated harm. A recorded AbleCare call contained a direct murder threat. The NDIS Quality and Safeguards Commission received formal complaints and took no substantive action."
                    },
                    {
                      institution: "The Medical and Psychiatric Establishment",
                      stated: "First, do no harm. Patient welfare is paramount.",
                      documented: "Psychiatric diagnoses were applied and reapplied as instruments of social control. Community Treatment Orders were breached. The diagnostic process was used to delegitimise testimony rather than support wellbeing."
                    },
                    {
                      institution: "The Legal Profession and Courts",
                      stated: "Access to justice. Equal before the law.",
                      documented: "Legal aid was denied. Self-represented litigation across multiple jurisdictions spanning decades was required. Documented procedural irregularities and institutional bias are recorded across Federal Court and AAT proceedings."
                    },
                    {
                      institution: "The Federal and State Governments",
                      stated: "Australia is a nation under the rule of law, committed to human rights and the protection of whistleblowers.",
                      documented: "Thirteen agencies participated in a documented pattern of administrative persecution. Australia was formally notified via OHCHR reference URG UST 23/AUS/17 and has not responded substantively."
                    },
                    {
                      institution: "Those Who Knew and Said Nothing",
                      stated: "Silence, in this context, is not neutral.",
                      documented: "Colleagues, acquaintances, professionals, and individuals with knowledge of the documented facts chose institutional safety over moral responsibility. This declaration names the silence as a moral failure, not a safe position."
                    },
                  ].map(({ institution, stated, documented }) => (
                    <div key={institution} className="border border-red-500/15 rounded-lg overflow-hidden">
                      <div className="px-4 py-3 border-b border-red-500/10" style={{ background: "rgba(239,68,68,0.08)" }}>
                        <p className="font-bold text-red-300 text-sm">{institution}</p>
                      </div>
                      <div className="p-4 space-y-3 text-sm">
                        <div>
                          <span className="text-xs font-bold uppercase tracking-wider text-green-400/70">What was stated: </span>
                          <span className="text-white/65 italic">{stated}</span>
                        </div>
                        <div>
                          <span className="text-xs font-bold uppercase tracking-wider text-red-400/70">What is documented: </span>
                          <span className="text-white/65">{documented}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <h3 className="font-serif text-xl font-bold text-primary mt-8">{t("unlikelyVessel.inequityHeading")}</h3>

              <p>
                This declaration is not made in bitterness. It is made in the same spirit as the Woes of Matthew 23 — as a public forensic statement for the permanent record, so that those who come after can see clearly what was done, who did it, what was said in justification, and what was enjoyed in silence.
              </p>

              <p>
                The record is immutable. It is blockchain-sealed. It exists in 190+ countries. It cannot be altered, suppressed, or explained away. Every person and institution named above now exists in the permanent historical record alongside their documented actions — and alongside the home they went home to, the food they ate, the heating they turned on, and the dignity they preserved for themselves while denying it to another.
              </p>

              <p>
                That cannot remain unacknowledged. It will not remain unacknowledged. This declaration is the acknowledgement.
              </p>

              <div className="rounded-xl border border-amber-500/20 p-6" style={{ background: "rgba(233,160,10,0.04)" }}>
                <div className="flex items-start gap-3">
                  <ShieldCheck className="h-5 w-5 text-amber-400 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-bold text-amber-400 mb-2 font-serif">Formal Statement of Record</p>
                    <p className="text-sm text-white/70 leading-relaxed">
                      This declaration is issued by Dr. Richard William McLean (Barran Dodger), Trustee of the Barran Dodger Legal & Ethical Trust Fund (ABN 78 833 496 164), on 23 June 2026. It forms part of the permanent archived record at barrandodger.com and is blockchain-timestamped. It does not seek revenge. It names what occurred so that history records it accurately and those with power to act may still choose to do so.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.section>

          <Separator className="opacity-20" />

          {/* Citation Block */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            data-testid="section-citation"
          >
            <CitationBlock
              title="The Unlikely Vessel — God Does Not Call the Equipped"
              datePublished="2026-06-23"
              url="https://www.barrandodger.com/the-unlikely-vessel"
              description="A theological resolution to cognitive dissonance around divine election of the unqualified, and a formal public declaration of hypocrisy against institutions that weaponised faith and authority while participating in the documented persecution of Dr. Richard William McLean."
              keywords={["unlikely vessel", "divine election", "cognitive dissonance", "theological framework", "hypocrisy declaration", "whistleblower theology", "God does not call the equipped", "Barran Dodger", "Revelation witness", "Moses David Jonah Mary Magdalene Paul"]}
              documentType="testimony"
            />
          </motion.section>

        </div>
      </main>

      <RelatedContent currentPath="/the-unlikely-vessel" />
      <Footer />
    </div>
  );
}
