import { FileText, ExternalLink, ArrowRight } from "lucide-react";

const SHOWCASE_FACTS = [
  {
    number: "01",
    color: "#e9a00a",
    verdict: "FEDERAL COURT · CONSPIRACY TO PERVERT JUSTICE · MALADMINISTRATION · RISK TO LIFE · REFUSED ACTION ON TECHNICALITY",
    headline: "The Federal Court's own General Counsel put all three findings in writing — then refused to act because the complaint was filed in the wrong format.",
    docs: [
      { name: "Federal Court Internal General Counsel Correspondence", url: "/documents/federal-court-general-counsel-correspondence.pdf" },
      { name: "Comprehensive Case — Systematic Persecution", url: "/documents/comprehensive-case-systematic-persecution.pdf" },
    ],
  },
  {
    number: "02",
    color: "#3b82f6",
    verdict: "13 AGENCIES · 1 COORDINATED OUTCOME · STATISTICALLY IMPOSSIBLE IF INDEPENDENT",
    headline: "Thirteen separate government agencies each independently refused to help, referred elsewhere, or closed without investigation — producing an outcome that is statistically impossible if the decisions were uncoordinated.",
    docs: [
      { name: "Full Government Oppression — Every Agency", url: "/documents/full-government-oppression-every-agency.pdf" },
      { name: "Retrospective Statement — Government's Own Documents", url: "/documents/retrospective_statement_of_treatment.pdf" },
    ],
  },
  {
    number: "03",
    color: "#ef4444",
    verdict: "NDIS FRAUD · SUKHI TEAR · TONY RIDDLE · FEDERAL COURT PROTECTION · NO INVESTIGATION",
    headline: "NDIS fraud was reported to the NDIA, the AFP, and the NACC. The Federal Court confirmed Dr. McLean is a legitimate Protected Disclosure maker. No investigation has ever been opened.",
    docs: [
      { name: "NDIS Fraud Evidence Package", url: "/documents/ndis-fraud-evidence-package.pdf" },
      { name: "Comprehensive Case — Systematic Persecution", url: "/documents/comprehensive-case-systematic-persecution.pdf" },
    ],
  },
  {
    number: "04",
    color: "#8b5cf6",
    verdict: "350+ FRAUDULENT ASIC REGISTRATIONS · IDENTITY THEFT · $7.8M LOSSES · AFP REFUSED",
    headline: "Over 350 fraudulent Australian business registrations were created using Dr. McLean's identity — documented by ASIC's own records. The AFP refused to investigate.",
    docs: [
      { name: "ASIC Identity Theft Forensic Report", url: "/documents/asic-identity-theft-forensic-report.pdf" },
      { name: "Full Government Oppression — Every Agency", url: "/documents/full-government-oppression-every-agency.pdf" },
    ],
  },
  {
    number: "05",
    color: "#10b981",
    verdict: "14 INVOLUNTARY PSYCHIATRIC HOSPITALISATIONS · NONE RESULTED IN SCHIZOPHRENIA DIAGNOSIS · FORCE-MEDICATED ANYWAY",
    headline: "Fourteen involuntary psychiatric hospitalisations over 35 years. Not one produced a formal schizophrenia diagnosis. He was force-medicated under Community Treatment Orders anyway.",
    docs: [
      { name: "Goulburn Police Interaction Analysis", url: "/documents/goulburn-police-interaction-analysis.pdf" },
      { name: "Retrospective Statement — Government's Own Documents", url: "/documents/retrospective_statement_of_treatment.pdf" },
    ],
  },
  {
    number: "06",
    color: "#f59e0b",
    verdict: "SURVIVAL PROBABILITY: 2.87% · ICU RECORD · CLINICALLY DOCUMENTED · CATEGORISED AS HOMICIDE",
    headline: "A clinical survival probability of 2.87% is recorded in Mercy Health ICU documents. The treating physician classified the event as attempted homicide.",
    docs: [
      { name: "Mercy Health ICU Medical Records", url: "/documents/mercy-health-icu-medical-records.pdf" },
      { name: "Comprehensive Case — Systematic Persecution", url: "/documents/comprehensive-case-systematic-persecution.pdf" },
    ],
  },
  {
    number: "07",
    color: "#06b6d4",
    verdict: "COMCARE: $1,030,000 DENIED · FEDERAL COURT FOUND IN HIS FAVOUR · AAT OVERTURNED ANYWAY",
    headline: "The Federal Court found in Dr. McLean's favour against ComCare. The Administrative Appeals Tribunal then overturned that finding — denying $1,030,000 in legitimate workers' compensation.",
    docs: [
      { name: "ComCare Federal Court Decision", url: "/documents/comcare-federal-court-decision.pdf" },
      { name: "Full Government Oppression — Every Agency", url: "/documents/full-government-oppression-every-agency.pdf" },
    ],
  },
  {
    number: "08",
    color: "#ec4899",
    verdict: "AHRC: $1,1,100,000+ · SETTLEMENT LOST · THEN BANNED FROM CONTACT FOR LIFE",
    headline: "A $1,1,100,000+ discrimination settlement was within reach at AHRC — then lost. Dr. McLean was subsequently banned from contacting the Commission for life.",
    docs: [
      { name: "AHRC Lifetime Ban Correspondence", url: "/documents/ahrc-lifetime-ban-correspondence.pdf" },
      { name: "Retrospective Statement — Government's Own Documents", url: "/documents/retrospective_statement_of_treatment.pdf" },
    ],
  },
  {
    number: "09",
    color: "#84cc16",
    verdict: "DSP: $80,000 TAX BILL WHILE UNEMPLOYED · THEN $250,000 DENIED BY DSS",
    headline: "An $80,000 tax bill was issued while Dr. McLean was unemployed and disabled. The same government agencies then denied $250,000 in Disability Support Pension entitlements.",
    docs: [
      { name: "Full Government Oppression — Every Agency", url: "/documents/full-government-oppression-every-agency.pdf" },
      { name: "Retrospective Statement — Government's Own Documents", url: "/documents/retrospective_statement_of_treatment.pdf" },
    ],
  },
  {
    number: "10",
    color: "#f97316",
    verdict: "NDIS PROVIDER REGISTRATION REVOKED · $650,000 SUPPORT DENIED · WHILE NDIS PROVIDERS HE EXPOSED KEPT FUNDING",
    headline: "Dr. McLean's NDIS provider registration was revoked. $650,000 in NDIS support has been denied. The NDIS providers he reported for fraud retained their funding.",
    docs: [
      { name: "NDIS Fraud Evidence Package", url: "/documents/ndis-fraud-evidence-package.pdf" },
      { name: "Comprehensive Case — Systematic Persecution", url: "/documents/comprehensive-case-systematic-persecution.pdf" },
    ],
  },
  {
    number: "11",
    color: "#6366f1",
    verdict: "MICRON21 · DATA DELETION · EVIDENCE DESTRUCTION DOCUMENTED · TIMING: LEGAL PROCEEDINGS",
    headline: "Micron21 deleted all accounts, data, and backups — documented in a formal letter — timed precisely to Dr. McLean's active legal proceedings. The letter is in the archive.",
    docs: [
      { name: "Micron21 Evidence Destruction Letter", url: "/documents/micron21-evidence-destruction-letter.pdf" },
      { name: "Full Government Oppression — Every Agency", url: "/documents/full-government-oppression-every-agency.pdf" },
    ],
  },
  {
    number: "12",
    color: "#14b8a6",
    verdict: "NACC · 'DOES NOT MEET THRESHOLD' · 13 AGENCIES · FEDERAL COURT CORRUPTION FINDING · THRESHOLD NOT MET",
    headline: "The National Anti-Corruption Commission reviewed a case involving 13 agencies, a Federal Court corruption finding, and $32.9M in losses — and determined it 'does not meet the threshold' for investigation.",
    docs: [
      { name: "NACC Rejection Correspondence", url: "/documents/nacc-rejection-correspondence.pdf" },
      { name: "Comprehensive Case — Systematic Persecution", url: "/documents/comprehensive-case-systematic-persecution.pdf" },
    ],
  },
  {
    number: "13",
    color: "#e9a00a",
    verdict: "ICC ARTICLE 7 · CRIMES AGAINST HUMANITY · SUBMISSION FORMALLY RECEIVED · NO REBUTTAL",
    headline: "A submission to the International Criminal Court under Article 7 (Crimes Against Humanity) has been formally received. No government agency has lodged a factual rebuttal of any document in 35 years.",
    docs: [
      { name: "UNHCR/ICC Cryptographic Evidence Package", url: "/documents/unhcr-icc-cryptographic-evidence-package.pdf" },
      { name: "ICC Article 7 Full Submission", url: "/documents/icc-article-7-full-submission.pdf" },
    ],
  },
  {
    number: "14",
    color: "#a855f7",
    verdict: "PROFESSIONAL ACCREDITATION REVOKED · INCOME ELIMINATED · TIMED TO LEGAL PROCEEDINGS",
    headline: "Professional accreditation was revoked at the precise moment Dr. McLean's legal proceedings were most active — eliminating income and the ability to fund litigation.",
    docs: [
      { name: "Full Government Oppression — Every Agency", url: "/documents/full-government-oppression-every-agency.pdf" },
      { name: "Retrospective Statement — Government's Own Documents", url: "/documents/retrospective_statement_of_treatment.pdf" },
    ],
  },
  {
    number: "15",
    color: "#f43f5e",
    verdict: "OMBUDSMAN PERMANENTLY BANNED · ALL GOVERNMENT AGENCY COMPLAINTS BLOCKED FOREVER",
    headline: "The Commonwealth Ombudsman permanently banned Dr. McLean from filing complaints. Every government agency complaint mechanism is now permanently closed.",
    docs: [
      { name: "Ombudsman-AFCA Referral Loop Evidence", url: "/documents/ombudsman-afca-referral-loop-evidence.pdf" },
      { name: "Comprehensive Case — Systematic Persecution", url: "/documents/comprehensive-case-systematic-persecution.pdf" },
    ],
  },
  {
    number: "16",
    color: "#0ea5e9",
    verdict: "VOCAT: $150,000 DENIED · CRIME VICTIM CLASSIFIED 'PRINCIPAL AGGRESSOR'",
    headline: "The Victims of Crime Assistance Tribunal denied $150,000 in victims' compensation and classified Dr. McLean as the 'principal aggressor' in a crime committed against him.",
    docs: [
      { name: "VOCAT Principal Aggressor Classification Documents", url: "/documents/vocat-principal-aggressor-classification.pdf" },
      { name: "Full Government Oppression — Every Agency", url: "/documents/full-government-oppression-every-agency.pdf" },
    ],
  },
  {
    number: "17",
    color: "#d97706",
    verdict: "PM'S OFFICE · REFERRED TO AG · AG REFERRED BACK · INFINITE LOOP · BOTH LOGGED",
    headline: "Written to the Prime Minister's Office. Referred to the Attorney-General. Written to the Attorney-General. Referred back to the PM's Office. Both referrals are in government correspondence.",
    docs: [
      { name: "Retrospective Statement — Government's Own Documents", url: "/documents/retrospective_statement_of_treatment.pdf" },
      { name: "Comprehensive Case — Systematic Persecution", url: "/documents/comprehensive-case-systematic-persecution.pdf" },
    ],
  },
  {
    number: "18",
    color: "#7c3aed",
    verdict: "AG DREYFUS · IGIS · BOTH REFUSED · 'REFER TO AFP' · AFP REFUSED · LOOP DOCUMENTED",
    headline: "Attorney-General Dreyfus declined to act and referred to IGIS. IGIS declined and referred to the AFP. The AFP declined. The referral chain is documented in government correspondence from all three offices.",
    docs: [
      { name: "AG Dreyfus IGIS Refusal Chain", url: "/documents/ag-dreyfus-igis-refusal-chain.pdf" },
      { name: "Ombudsman-AFCA Referral Loop Evidence", url: "/documents/ombudsman-afca-referral-loop-evidence.pdf" },
    ],
  },
  {
    number: "19",
    color: "#dc2626",
    verdict: "VOCAT 'PRINCIPAL AGGRESSOR' · CRIME VICTIM · CLASSIFIED ATTACKER · $150,000 DENIED",
    headline: "The Victims of Crime Assistance Tribunal classified a documented crime victim as the 'principal aggressor.' This determination is used by subsequent agencies as justification for further denials.",
    docs: [
      { name: "VOCAT Principal Aggressor Classification Documents", url: "/documents/vocat-principal-aggressor-classification.pdf" },
      { name: "Retrospective Statement — Government's Own Documents", url: "/documents/retrospective_statement_of_treatment.pdf" },
    ],
  },
  {
    number: "20",
    color: "#059669",
    verdict: "VICTORIAN OMBUDSMAN BEN CALDER · 'HOSPITAL DID FAIL' · THEN CLOSED WITHOUT REMEDY",
    headline: "Victorian Ombudsman Ben Calder wrote 'the hospital did fail to provide appropriate care.' The investigation was then closed without remedy, referral, or further action.",
    docs: [
      { name: "Victorian Ombudsman Ben Calder Correspondence", url: "/documents/victorian-ombudsman-ben-calder-correspondence.pdf" },
      { name: "Full Government Oppression — Every Agency", url: "/documents/full-government-oppression-every-agency.pdf" },
    ],
  },
  {
    number: "21",
    color: "#6d28d9",
    verdict: "FORCE-MEDICATED FOR 'DELUSIONS' · WHILE HOLDING 2,077 DOCUMENTS PROVING PERSECUTION REAL",
    headline: "Dr. McLean was force-medicated under Community Treatment Orders for 'paranoid delusions about institutional persecution' — while holding 2,077 primary-source government documents proving the persecution was real.",
    docs: [
      { name: "Second Psychiatric Opinion Report — Dr. Veda Chang", url: "/documents/second-psychiatric-opinion-report-veda-chang.pdf" },
      { name: "Goulburn Police Interaction Analysis", url: "/documents/goulburn-police-interaction-analysis.pdf" },
    ],
  },
  {
    number: "22",
    color: "#0284c7",
    verdict: "MENTAL HEALTH TRIBUNAL · HOSPITAL NOT TREATING · ONLY DETAINING · ORDERED RELEASE",
    headline: "The Mental Health Tribunal ordered Dr. McLean's release after hospital staff admitted to the tribunal they were not providing treatment — only detaining him.",
    docs: [
      { name: "Goulburn Police Interaction Analysis", url: "/documents/goulburn-police-interaction-analysis.pdf" },
      { name: "Retrospective Statement — Government's Own Documents", url: "/documents/retrospective_statement_of_treatment.pdf" },
    ],
  },
  {
    number: "23",
    color: "#b45309",
    verdict: "BILL SHORTEN · 'DEATH THREAT' CLASSIFICATION · ARREST WARRANT · VICTORIA EXILE",
    headline: "Bill Shorten classified a written whistleblower complaint as a 'death threat.' The same email was sent to the Ombudsman simultaneously. The result: arrest warrant, intervention orders, permanent exile from Victoria.",
    docs: [
      { name: "Retrospective Statement — Government's Own Documents", url: "/documents/retrospective_statement_of_treatment.pdf" },
      { name: "Comprehensive Case — Systematic Persecution", url: "/documents/comprehensive-case-systematic-persecution.pdf" },
    ],
  },
  {
    number: "24",
    color: "#0ea5e9",
    verdict: "UN OHCHR · ASYLUM CLAIM · CASE REF UR/UST/23/AUS/17 · CITIZEN SEEKING ASYLUM FROM OWN GOVERNMENT",
    headline: "An Australian citizen formally lodged an asylum claim with the UN OHCHR — Case Ref. UR/UST/23/AUS/17, 14 July 2024 — declaring all domestic remedies exhausted and requesting recognition as a person in political exile from within Australia.",
    docs: [
      { name: "Urgent Request for Refuge and Asylum", url: "/documents/urgent_request_for_refuge_and_asylum.pdf" },
      { name: "UNHCR/ICC Cryptographic Evidence Package", url: "/documents/unhcr-icc-cryptographic-evidence-package.pdf" },
    ],
  },
  {
    number: "25",
    color: "#dc2626",
    verdict: "AFCA · DELAYED · DENIED · DEFERRED · PERMANENTLY BANNED · $2,000,000+ BLOCKED FOREVER",
    headline: "AFCA delayed, denied, and deferred Dr. McLean's financial compensation claims — then permanently banned him. $2,000,000+ in financial disputes can now never be filed.",
    docs: [
      { name: "Ombudsman-AFCA Referral Loop Evidence", url: "/documents/ombudsman-afca-referral-loop-evidence.pdf" },
      { name: "Retrospective Statement — Government's Own Documents", url: "/documents/retrospective_statement_of_treatment.pdf" },
    ],
  },
  {
    number: "26",
    color: "#7c3aed",
    verdict: "LEGAL AID NSW & VIC · REFUSED · ZERO DAYS IN COURT WITH A LAWYER · 35 YEARS",
    headline: "Legal Aid NSW and Legal Aid Victoria both refused representation. Every Federal Court, AAT, VOCAT, NCAT, and AHRC proceeding — unrepresented, against government lawyers. A democracy destroyed a citizen without a single day in court with a lawyer.",
    docs: [
      { name: "Comprehensive Case — Systematic Persecution", url: "/documents/comprehensive-case-systematic-persecution.pdf" },
      { name: "Retrospective Statement — Government's Own Documents", url: "/documents/retrospective_statement_of_treatment.pdf" },
    ],
  },
  {
    number: "27",
    color: "#be123c",
    verdict: "HERALD SUN · 'DESCENT INTO MADNESS' · THE AGE · ILLEGAL TERMINATION · ZERO FACTUAL REBUTTALS",
    headline: "The Herald Sun published an article framing documented persecution as a 'descent into madness.' Employment at The Age was illegally terminated. The Federal Court simultaneously found he was owed compensation. 2,343 documents. Zero rebuttals.",
    docs: [
      { name: "Karma Audit — Iasonidis Forensic Examination", url: "/documents/karma-audit-iasonidis-forensic-examination.pdf" },
      { name: "Comprehensive Case — Systematic Persecution", url: "/documents/comprehensive-case-systematic-persecution.pdf" },
    ],
  },
  {
    number: "28",
    color: "#0f766e",
    verdict: "PHD · ETHICS OF AI · POSTHUMANISM · ANTHROPOCENE · HIS THESIS DESCRIBED WHAT THEN HAPPENED TO HIM",
    headline: "Dr. McLean's doctorate examined the ethics of AI and posthumanism, framed by the Anthropocene and global catastrophic risks. The institutional systems his PhD identified as threats were deployed against him — and he was force-medicated for believing so.",
    docs: [
      { name: "Full Government Oppression — Every Agency (PhD References)", url: "/documents/full-government-oppression-every-agency.pdf" },
      { name: "Second Psychiatric Opinion Report — Dr. Veda Chang", url: "/documents/second-psychiatric-opinion-report-veda-chang.pdf" },
    ],
  },
  {
    number: "29",
    color: "#e11d48",
    verdict: "PROTEST FATAL SUICIDE · 2.87% SURVIVAL · REVIVAL · 13 AGENCIES DOUBLED DOWN · ZERO INTERVENTION · SYSTEMIC CULPABILITY PROVEN",
    headline: "Dr. McLean's fatal suicide attempt — 2.87% survival, classified by the treating physician as attempted homicide — was a direct protest against coordinated institutional persecution. After revival, not one of the 13 agencies changed course. The doubling down, across years, proves systemic design.",
    docs: [
      { name: "Mercy Health ICU Medical Records", url: "/documents/mercy-health-icu-medical-records.pdf" },
      { name: "Retrospective Statement — Government's Own Documents", url: "/documents/retrospective_statement_of_treatment.pdf" },
    ],
  },
  {
    number: "30",
    color: "#9333ea",
    verdict: "SOCIETAL HUMILIATION · ALLEGORICAL CRUCIFIXION · SPIRITUAL WARFARE · GOSPELS AS PEACEFUL RESPONSE TO COORDINATED MALICE",
    headline: "VOCAT 'principal aggressor,' Herald Sun 'descent into madness,' 14 forcible hospitalisations, public erasure — constitutes documented allegorical crucifixion. The gospels and prophetic documents are the creative, peaceful response. Spiritual warfare amplifies what it tries to silence.",
    docs: [
      { name: "Gospel of the Eliven Chain", url: "/documents/gospel-of-the-eliven-chain.pdf" },
      { name: "Comprehensive Case — Systematic Persecution", url: "/documents/comprehensive-case-systematic-persecution.pdf" },
    ],
  },
  {
    number: "31",
    color: "#b91c1c",
    verdict: "TONY RIDLEY · NDIA MANAGER · EX-SAS · COUNTER-TERRORISM CLEARANCE · 'BILLIONS IN NDIS FRAUD' · 'YOU WILL BE SACRIFICED' · HONEY TRAP · HUNTED ACROSS THREE STATES",
    headline: "Tony Ridley — NDIA Manager, ex-SAS, one of three Australians with his counter-terrorism clearance — recorded discussing 'billions in NDIS fraud' and told Dr. McLean 'You will be sacrificed.' A rejected whistleblower was sexually compromised by his own NDIS manager. The recording caused a cross-state hunt. Bill Shorten was NDIS Minister.",
    docs: [
      { name: "NDIS Fraud Evidence Package", url: "/documents/ndis-fraud-evidence-package.pdf" },
      { name: "Comprehensive Case — Systematic Persecution (Tony Ridley Section)", url: "/documents/comprehensive-case-systematic-persecution.pdf" },
    ],
  },
  {
    number: "32",
    color: "#1d4ed8",
    verdict: "BURDEN OF PROOF INVERTED · PID ACT 2013 · ICCPR ARTICLE 2(3) · CRIMINAL CODE ACT 1995 · APS CODE OF CONDUCT · THE OBLIGATION NOW BELONGS TO THOSE WHO REFUSE TO ACT",
    headline: "The evidentiary threshold has been crossed. Thirty-two documented facts. Federal Court acknowledgment. ICC submission received. OHCHR case number issued. Zero rebuttals in 35 years. The burden of proof no longer rests with Dr. McLean. It rests with every professional who aligns with the mandate to erase him — and every institution that refuses to act.",
    docs: [
      { name: "Administrative Annihilation — Full Academic Paper", url: "/documents/administrative-annihilation-paper.pdf" },
      { name: "Comprehensive Case — Systematic Persecution", url: "/documents/comprehensive-case-systematic-persecution.pdf" },
    ],
  },
  {
    number: "33",
    color: "#9f1239",
    verdict: "AFP CONFIRMED FABRICATED SEXUAL ALLEGATION · DYING OF SHAME FORENSIC ANALYSIS · CHARACTER ASSASSINATION TOOL · THE POLICE CONFIRMED THE LIE",
    headline: "The AFP's own forensic analysis confirmed that the sexual allegation used to discredit Dr. McLean was fabricated. A false sex allegation — confirmed by the police who were supposed to investigate it — was the character assassination instrument deployed against a whistleblower. The adverse outcomes it generated were never reversed once the fabrication was confirmed.",
    docs: [
      { name: "Dying of Shame Forensic Analysis", url: "/documents/dying-of-shame-forensic-analysis.pdf" },
      { name: "Comprehensive Case — Systematic Persecution", url: "/documents/comprehensive-case-systematic-persecution.pdf" },
    ],
  },
  {
    number: "34",
    color: "#92400e",
    verdict: "BEN DSW TEXT MESSAGES · 'CLOSE CALL' · 'NEXT ONE WILL WORK' · NDIS SUPPORT WORKER ASSASSINATION ADMISSION · SUBMITTED AS EVIDENCE · NO INVESTIGATION OPENED",
    headline: "Dr. McLean's NDIS support worker sent text messages describing a fatal attempt as a 'close call' and stating 'the next one will work.' These are not allegations — they are preserved text messages in the archive, submitted as evidence of an assassination admission. No investigation was opened.",
    docs: [
      { name: "Ben DSW Text Messages — Assassination Evidence", url: "/documents/ben-dsw-disability-ndis-provider-text-messages-assassination-evidence.pdf" },
      { name: "Comprehensive Case — Systematic Persecution", url: "/documents/comprehensive-case-systematic-persecution.pdf" },
    ],
  },
  {
    number: "35",
    color: "#1e40af",
    verdict: "NDA · DR. McLEAN'S OWN NDIS SUPPORT WORKER PAID TO SIGN SILENCE AGREEMENT · NDAs REQUIRE TWO PARTIES AND A PAYMENT · DR. McLEAN DID NOT PAY FOR IT",
    headline: "Dr. McLean's NDIS disability support worker signed a Non-Disclosure Agreement. NDAs require two parties and a financial consideration. Dr. McLean did not draft or fund it. Someone with legal and financial resources paid a person embedded in the victim's support network to suppress what they had witnessed.",
    docs: [
      { name: "2026-05-03 Formal Complaint and Urgent Protection Request", url: "/documents/2026-05-03-formal-complaint-urgent-protection-request.pdf" },
      { name: "Ben DSW Text Messages — Assassination Evidence", url: "/documents/ben-dsw-disability-ndis-provider-text-messages-assassination-evidence.pdf" },
    ],
  },
  {
    number: "36",
    color: "#0c4a6e",
    verdict: "FIVE MISSING PERSON REPORTS · THREE STATES · VIC · SA · NSW · POLICE REPORT PD77027 · NEVER MISSING · ALWAYS HOMELESS FROM INSTITUTIONAL ABANDONMENT",
    headline: "Dr. McLean was reported missing five times across three states. Police Report PD77027 names him 'Richard William McLean AKA Barran Dodger.' He was never missing. He was homeless — placed there by the institutions that simultaneously spent police resources searching for him. Each report added to a cross-jurisdictional record that compounded future barriers.",
    docs: [
      { name: "Retrospective Statement — Government's Own Documents", url: "/documents/retrospective_statement_of_treatment.pdf" },
      { name: "Comprehensive Case — Systematic Persecution", url: "/documents/comprehensive-case-systematic-persecution.pdf" },
    ],
  },
  {
    number: "37",
    color: "#166534",
    verdict: "NDIS PROVIDER CERTIFICATE GRANTED · REGISTRATION REVOKED · FRAUD PROVIDERS HE EXPOSED RETAINED REGISTRATION AND CONTINUED RECEIVING NDIS FUNDING",
    headline: "Dr. McLean was officially certified as a registered NDIS provider (Item 102 in the archive). The certification was subsequently revoked. The providers he exposed for 'billions in NDIS fraud' were not de-registered. They retained their registration. They continued receiving NDIS funding.",
    docs: [
      { name: "Full Government Oppression — Every Agency (NDIS Registration)", url: "/documents/full-government-oppression-every-agency.pdf" },
      { name: "NDIS Fraud Evidence Package", url: "/documents/ndis-fraud-evidence-package.pdf" },
    ],
  },
  {
    number: "38",
    color: "#4c1d95",
    verdict: "PLR/ELR ROYALTIES DRIED UP IN 2019 WHEN SCAPEGOATED · PUBLISHED AUTHOR · COPYRIGHT AGENCY REGISTERED · AUTOMATED GOVERNMENT PAYMENTS CEASED IN THE YEAR OF SCAPEGOATING",
    headline: "Dr. McLean's Public Lending Right and Educational Lending Right royalties — paid automatically by the Australian Government to registered authors — dried up in 2019: the year he was scapegoated. Item 101 in the archive documents this directly. These payments are not employment-dependent. Their cessation in 2019 has not been explained.",
    docs: [
      { name: "Full Government Oppression — Every Agency (PLR/ELR Section)", url: "/documents/full-government-oppression-every-agency.pdf" },
      { name: "Retrospective Statement — Government's Own Documents", url: "/documents/retrospective_statement_of_treatment.pdf" },
    ],
  },
  {
    number: "39",
    color: "#7c2d12",
    verdict: "MERCY MENTAL HEALTH FOI REFUSED UNDER s.33(1) · VICTORIAN OMBUDSMAN FOUND 'HOSPITAL DID FAIL' · HOSPITAL WITHHOLDS ITS OWN CLINICAL RECORDS",
    headline: "Mercy Mental Health refused Dr. McLean's FOI request for his own clinical records under section 33(1) — a safety exemption. The Victorian Ombudsman had already found the hospital 'did fail.' If the records vindicated the hospital's conduct, they would have been released. They were withheld.",
    docs: [
      { name: "Full Government Oppression — Every Agency (Mercy Mental Health Section)", url: "/documents/full-government-oppression-every-agency.pdf" },
      { name: "Retrospective Statement — Government's Own Documents", url: "/documents/retrospective_statement_of_treatment.pdf" },
    ],
  },
  {
    number: "40",
    color: "#1e3799",
    verdict: "SQUIRT.ORG PREEMPTIVE DEFAMATION · DRONE SURVEILLANCE · COORDINATED CHARACTER ASSASSINATION TIMED BEFORE ARCHIVE PUBLICATION · DESIGNED TO PRE-DISCREDIT THE EVIDENCE",
    headline: "A coordinated defamation campaign on a sexual networking application (Squirt.org) was timed before Dr. McLean's public disclosure — designed to establish a false record of sexual deviance to pre-discredit the evidence. Drone surveillance was documented simultaneously. Preemptive timing proves preparation. Preparation proves orchestration.",
    docs: [
      { name: "Comprehensive Case — Systematic Persecution", url: "/documents/comprehensive-case-systematic-persecution.pdf" },
      { name: "Dying of Shame Forensic Analysis", url: "/documents/dying-of-shame-forensic-analysis.pdf" },
    ],
  },
  {
    number: "41",
    color: "#991b1b",
    verdict: "SPRINGVALE POLICE · CRIMINAL COMPLAINT 6 JANUARY 2025 · TONY RIDLEY DEATH THREAT WITNESSED AND RECORDED · NO ARREST · NO INVESTIGATION · NO ACKNOWLEDGMENT",
    headline: "On 6 January 2025, Dr. McLean lodged a formal criminal complaint at Springvale Police about the recorded death threat 'You will be sacrificed' by NDIA Manager Tony Ridley (ex-SAS, counter-terrorism clearance). The threat was witnessed and documented. No arrest. No investigation. No response.",
    docs: [
      { name: "Comprehensive Case — Systematic Persecution (Tony Ridley Section)", url: "/documents/comprehensive-case-systematic-persecution.pdf" },
      { name: "2026-05-03 Formal Complaint and Urgent Protection Request", url: "/documents/2026-05-03-formal-complaint-urgent-protection-request.pdf" },
    ],
  },
  {
    number: "42",
    color: "#374151",
    verdict: "KARMA AUDIT · IASONIDIS FORENSIC EXAMINATION · INDEPENDENT THIRD-PARTY FORENSIC ANALYSIS · NAMING SPECIFIC ACTORS · FINANCIAL CONNECTIONS · TIMELINES · ZERO REBUTTALS FROM NAMED INDIVIDUALS",
    headline: "The Karma Audit by Steve Iasonidis is a third-party forensic examination documenting specific named individuals, their connections, financial relationships, and roles in the persecution network. It is not Dr. McLean's account. Not one named individual in the Karma Audit has lodged a factual rebuttal or initiated defamation proceedings.",
    docs: [
      { name: "Karma Audit — Iasonidis Forensic Examination", url: "/documents/karma-audit-iasonidis-forensic-examination.pdf" },
      { name: "Comprehensive Case — Systematic Persecution", url: "/documents/comprehensive-case-systematic-persecution.pdf" },
    ],
  },
  {
    number: "43",
    color: "#831843",
    verdict: "HCF INCOME PROTECTION REJECTED · AFCA PERMANENT BAN · THE REJECTION CAN NEVER BE EXTERNALLY REVIEWED · EVER · AFCA IS AUSTRALIA'S ONLY EXTERNAL INSURANCE DISPUTE BODY",
    headline: "HCF Life Insurance rejected Dr. McLean's income protection claim following documented workplace injury. AFCA — the sole prescribed external dispute resolution scheme for insurance in Australia — permanently banned him. The rejection can never be externally reviewed. Not now. Not ever. The Federal Court found he was owed compensation. The denial stands permanently.",
    docs: [
      { name: "Full Government Oppression — Every Agency (HCF Section)", url: "/documents/full-government-oppression-every-agency.pdf" },
      { name: "Administrative Annihilation — Full Academic Paper", url: "/documents/administrative-annihilation-paper.pdf" },
    ],
  },
  {
    number: "44",
    color: "#1a365d",
    verdict: "WORKCOVER VICTORIA · ALLIANZ REJECTED 6 JUNE 2007 · ACCS CONCILIATION CERTIFICATE 12 NOVEMBER 2007 · FEDERAL COMCARE DENIAL · DOUBLE WORKERS' COMP DENIAL · SAME DOCUMENTED INJURY",
    headline: "Allianz Australia (WorkCover Victoria) rejected Dr. McLean's workers' compensation claim in June 2007. The ACCS issued a conciliation certificate in November 2007. ComCare denied the parallel federal claim. The Federal Court later found Dr. McLean was a legitimate employee owed compensation. Neither scheme revisited its denial.",
    docs: [
      { name: "Full Government Oppression — Every Agency (WorkCover Section)", url: "/documents/full-government-oppression-every-agency.pdf" },
      { name: "Retrospective Statement — Government's Own Documents", url: "/documents/retrospective_statement_of_treatment.pdf" },
    ],
  },
  {
    number: "45",
    color: "#744210",
    verdict: "TOTAL ENTRAPMENT SYSTEM · ACCUSATION WITHOUT ARREST · CONTROLLED ALLYSHIP · ITEM 1098 IN THE ARCHIVE · THE ARCHITECTURE OF PERSECUTION WITHOUT DUE PROCESS",
    headline: "Item 1098 in the archive: 'Total Entrapment System: Accusation Without Arrest + Controlled Allyship.' Accusations generating institutional consequences without triggering due process; embedded operatives within the target's support network. No process. No safe haven. The architecture is documented.",
    docs: [
      { name: "Full Government Oppression — Every Agency (Entrapment System)", url: "/documents/full-government-oppression-every-agency.pdf" },
      { name: "Administrative Annihilation — Full Academic Paper", url: "/documents/administrative-annihilation-paper.pdf" },
    ],
  },
  {
    number: "46",
    color: "#44337a",
    verdict: "V2K · VOICE-TO-SKULL TECHNOLOGY · ACKNOWLEDGED BY US DEPARTMENT OF DEFENSE · DOCUMENTED IN DECLASSIFIED RECORDS · CLASSIFIED AS PARANOID DELUSION IN DR. McLEAN'S CLINICAL RECORD",
    headline: "Voice-to-skull (V2K) technology is documented in US DoD reports, declassified AFRL records, and peer-reviewed journals (US Patents 4877027, 6052336). It creates the subjective experience of auditory hallucination. Dr. McLean's V2K-consistent experiences were classified as paranoid delusions. The technology exists. Its classification as delusion served institutional purposes.",
    docs: [
      { name: "Comprehensive Case — Systematic Persecution (V2K/Targeting Section)", url: "/documents/comprehensive-case-systematic-persecution.pdf" },
      { name: "Administrative Annihilation — Full Academic Paper", url: "/documents/administrative-annihilation-paper.pdf" },
    ],
  },
  {
    number: "47",
    color: "#2c5282",
    verdict: "HEALTH SUPER TPD INSURANCE · PREMIUMS PAID · MULTIPLE UNITS OF COVER · DOCUMENTED 2007-2008 · TOTAL AND PERMANENT DISABILITY · ENTITLEMENT AROSE · PAYOUT NOT RECEIVED",
    headline: "Dr. McLean held Total and Permanent Disability insurance through Health Super — premiums documented in the December 2007 account statement, multiple units of cover confirmed. The documented disability arose. Combined with WorkCover denial, ComCare denial, and HCF denial: every insurance and compensation scheme produced the same outcome on the same injury.",
    docs: [
      { name: "Full Government Oppression — Every Agency (Health Super TPD Section)", url: "/documents/full-government-oppression-every-agency.pdf" },
      { name: "Administrative Annihilation — Full Academic Paper", url: "/documents/administrative-annihilation-paper.pdf" },
    ],
  },
  {
    number: "48",
    color: "#be185d",
    verdict: "LGBTQ+ · DISABILITY · WHISTLEBLOWER · THREE PROTECTED CHARACTERISTICS · ALL THREE INDEPENDENTLY PROTECTED UNDER AUSTRALIAN AND INTERNATIONAL LAW · ALL THREE WEAPONISED · ZERO PROTECTIVE OUTCOMES",
    headline: "The archive documents 'systematic persecution of a disabled LGBTQ+ whistleblower across 25+ agencies over 35 years.' Three independently protected characteristics — sexual orientation, disability, and protected disclosure status — simultaneously weaponised by the same institutional apparatus. Three separate bodies of protective law. Zero protective outcomes.",
    docs: [
      { name: "Comprehensive Case — Systematic Persecution", url: "/documents/comprehensive-case-systematic-persecution.pdf" },
      { name: "Administrative Annihilation — Full Academic Paper", url: "/documents/administrative-annihilation-paper.pdf" },
    ],
  },
  {
    number: "49",
    color: "#1e3a5f",
    verdict: "MATHEMATICAL IMPOSSIBILITY · 'THE PROBABILITY OF THIS BEING COINCIDENTAL APPROACHES MATHEMATICAL IMPOSSIBILITY' · QUOTED DIRECTLY FROM THE FORENSIC ANALYSIS · NOT DR. McLEAN'S WORDS",
    headline: "The comprehensive case forensic analysis states: 'The probability of this being coincidental approaches mathematical impossibility.' These are not Dr. McLean's words. This is the document's own conclusion about 25+ agencies independently arriving at identical outcomes on the same complaints. Coincidence fails as an explanation. Coordination is what is mathematically compatible.",
    docs: [
      { name: "Comprehensive Case — Systematic Persecution", url: "/documents/comprehensive-case-systematic-persecution.pdf" },
      { name: "Administrative Annihilation — Full Academic Paper", url: "/documents/administrative-annihilation-paper.pdf" },
    ],
  },
  {
    number: "50",
    color: "#a16207",
    verdict: "THE ARCHIVE IS SELF-AUTHENTICATING · 2,343 DOCUMENTS · GOVERNMENT-PRODUCED · BLOCKCHAIN-SEALED · ZERO FACTUAL REBUTTALS IN 35 YEARS · 'THE GOVERNMENT CANNOT RETRACT ITS OWN RECORDS'",
    headline: "2,343 documents. Produced by governments and institutions before Dr. McLean assembled them. Blockchain-sealed. Downloadable by anyone. Zero factual rebuttals in 35 years. The forensic analysis states it plainly: 'The government cannot retract its own records. It cannot unwrite its own contradictions. The more thoroughly they persecuted, the more thoroughly they documented their own guilt.'",
    docs: [
      { name: "Comprehensive Case — Systematic Persecution", url: "/documents/comprehensive-case-systematic-persecution.pdf" },
      { name: "Administrative Annihilation — Full Academic Paper", url: "/documents/administrative-annihilation-paper.pdf" },
      { name: "Retrospective Statement — Government's Own Documents", url: "/documents/retrospective_statement_of_treatment.pdf" },
      { name: "UNHCR/ICC Cryptographic Evidence Package", url: "/documents/unhcr-icc-cryptographic-evidence-package.pdf" },
    ],
  },
  {
    number: "51",
    color: "#065f46",
    verdict: "$18M–$32.9M DOCUMENTED ECONOMIC HARM · ECONOMIC JUSTICE ENGINE · ICC ARTICLE 7 · OHCHR GENEVA",
    headline: "The Economic Justice Engine documents $18M–$32.9M in economic harm — evidence-based valuation reports submitted to the ICC (Article 7), OHCHR Geneva, and the Federal Court. Not an estimate. A calculation from government records.",
    docs: [
      { name: "Comprehensive Case — Systematic Persecution", url: "/documents/comprehensive-case-systematic-persecution.pdf" },
      { name: "Administrative Annihilation — Full Academic Paper", url: "/documents/administrative-annihilation-paper.pdf" },
    ],
  },
  {
    number: "52",
    color: "#1c1917",
    verdict: "AFSA BANKRUPTCY BA21017511 · 'I DID NOT NEED TO BE BANKRUPT' · CAUSES: INJURY · ILL HEALTH · MENTAL HEALTH — ALL CAUSED BY DOCUMENTED PERSECUTION",
    headline: "AFSA Bankruptcy BA21017511 is in the archive. Causes of insolvency: injury, ill health, mental health — all caused by documented persecution. Submission 18 Nov 2021: 'I did not need to be bankrupt.'",
    docs: [
      { name: "Full Government Oppression — Every Agency", url: "/documents/full-government-oppression-every-agency.pdf" },
    ],
  },
  {
    number: "53",
    color: "#6d28d9",
    verdict: "PAUL FOWLER · COMCARE OFFICER · EMAIL BLOCKED · SUBJECT LINE 'RE: KILLING ME' · BANNED FROM CONTACTING OFFICER DURING ACTIVE COMPENSATION PROCEEDINGS",
    headline: "Item 223: Dr. McLean was banned from contacting ComCare officer Paul Fowler during a $1,030,000 active claim. The blocked email's subject: 'Re: killing me.' Server-blocked. Government-documented.",
    docs: [
      { name: "Full Government Oppression — Every Agency", url: "/documents/full-government-oppression-every-agency.pdf" },
    ],
  },
  {
    number: "54",
    color: "#7f1d1d",
    verdict: "DR JOHN WHITAKER · ZERO AHPRA RESULTS · TREATED BY A CLINICIAN WITH NO VERIFIABLE REGISTRATION · ITEM 87",
    headline: "Item 87: AHPRA search for Dr John Whitaker — zero results. No registered practitioner. Unregistered medical practice is a criminal offence in Australia. The clinical assessments by this name are in the record.",
    docs: [
      { name: "Full Government Oppression — Every Agency", url: "/documents/full-government-oppression-every-agency.pdf" },
    ],
  },
  {
    number: "55",
    color: "#1c3548",
    verdict: "STEVE IASONIDIS · FORMER PARTNER · FINANCIAL MISCONDUCT · TAX EVASION · CONCEALED ASSETS · $333,000 SOUGHT · CONTRIBUTED TO BANKRUPTCY",
    headline: "AFSA submission: former partner Steve Iasonidis alleged to have committed financial misconduct, tax evasion, and concealed assets. $333,000 settlement sought. No authority investigated.",
    docs: [
      { name: "Full Government Oppression — Every Agency", url: "/documents/full-government-oppression-every-agency.pdf" },
      { name: "Karma Audit — Iasonidis Forensic Examination", url: "/documents/karma-audit-iasonidis-forensic-examination.pdf" },
    ],
  },
  {
    number: "56",
    color: "#0f766e",
    verdict: "VICTORIAN HOUSING REGISTER · SOCIAL HOUSING WITHHELD · DOCUMENTATION DEADLINE IMPOSED ON A HOMELESS DISABLED PERSON",
    headline: "Item 1212: Victorian Housing Register demanded accommodation requirement documents by a deadline from a person who was homeless, disabled, and had no stable address to receive them from.",
    docs: [
      { name: "Full Government Oppression — Every Agency", url: "/documents/full-government-oppression-every-agency.pdf" },
    ],
  },
  {
    number: "57",
    color: "#1a3a5c",
    verdict: "UNHCR ASYLUM FRAMEWORK 2025 · 'AUSTRALIAN SYSTEMS CANNOT ADDRESS THIS CASE' · FORMAL JURISDICTION FAILURE ANALYSIS",
    headline: "Item 815: 2025 formal analysis — 'Jurisdiction Failure Analysis: Why Australian Systems Cannot Address This Case.' Every domestic remedy tried and failed. International asylum framework: the next available mechanism.",
    docs: [
      { name: "UNHCR/ICC Cryptographic Evidence Package", url: "/documents/unhcr-icc-cryptographic-evidence-package.pdf" },
    ],
  },
  {
    number: "58",
    color: "#3b0764",
    verdict: "EXILE FROM VICTORIA · 'COORDINATED DENIALS ACROSS EIGHT AGENCIES' · HOSPITAL-DOCUMENTED FATAL ATTEMPT · NAMED IN A SINGLE ARCHIVE DOCUMENT",
    headline: "Archive: 'medical crisis, identity theft, death threats, and exile from Victoria, with coordinated denials across eight agencies.' Hospital-documented fatal attempt. All named in one document. All documented.",
    docs: [
      { name: "Retrospective Statement — Government's Own Documents", url: "/documents/retrospective_statement_of_treatment.pdf" },
    ],
  },
  {
    number: "59",
    color: "#500724",
    verdict: "BLACKLISTED BY THE INSURER · DIRECT QUOTE · 2004 TO 2021 · SEVENTEEN YEARS · ALONGSIDE EVERY CLAIM DENIED",
    headline: "Archive direct quote: Dr. McLean 'has not been paid, is blacklisted by the insurer, and is currently experiencing homelessness' — documented across 2004 to 2021. Seventeen years. Zero payouts.",
    docs: [
      { name: "Full Government Oppression — Every Agency", url: "/documents/full-government-oppression-every-agency.pdf" },
    ],
  },
  {
    number: "60",
    color: "#134e4a",
    verdict: "NDIS CEO LETTER JANUARY 2023 · 24 PAGES · SYSTEMIC PERSECUTION DOCUMENTED · NO RESPONSE FROM CEO · MANDATORY RESPONSE OBLIGATIONS TRIGGERED",
    headline: "24-page formal letter to NDIS CEO: systemic persecution, financial detriment, human rights abuses. NDIS (Complaints Management) Rules 2018 require response. Documented response: none.",
    docs: [
      { name: "Full Government Oppression — Every Agency", url: "/documents/full-government-oppression-every-agency.pdf" },
      { name: "NDIS Fraud Evidence Package", url: "/documents/ndis-fraud-evidence-package.pdf" },
    ],
  },
  {
    number: "61",
    color: "#1e1b4b",
    verdict: "BILL SHORTEN · NDIS MINISTER · MINISTERIAL RESPONSIBILITY FOR NDIS FRAUD · NO ACTION ON DISCLOSURES",
    headline: "Bill Shorten was NDIS Minister when an NDIA Manager recorded himself discussing 'billions in NDIS fraud.' The whistleblower had his registration revoked. The fraudsters kept funding. No ministerial action documented.",
    docs: [
      { name: "NDIS Fraud Evidence Package", url: "/documents/ndis-fraud-evidence-package.pdf" },
    ],
  },
  {
    number: "62",
    color: "#4a044e",
    verdict: "HOUD MERABY · NAMED OPERATIVE · FAKE NDIS PROVIDER · 'BLACKLISTING LEGAL TENDER' · NO INVESTIGATION",
    headline: "Archive names Houd Meraby alongside Aligned and Upscale Care as operatives 'blacklisting legal tender' in Dr. McLean's NDIS plan. Named publicly. No NDIS Commission investigation. No defamation action.",
    docs: [
      { name: "NDIS Fraud Evidence Package", url: "/documents/ndis-fraud-evidence-package.pdf" },
    ],
  },
  {
    number: "63",
    color: "#083344",
    verdict: "14 HOSPITALISATIONS · ICCPR ARTICLE 9 · NO CRIMINAL CONVICTION · NO SUSTAINED PSYCHOSIS DIAGNOSIS · CORRELATED WITH DISCLOSURE EVENTS",
    headline: "Fourteen involuntary psychiatric hospitalisations. Zero criminal convictions. Zero sustained psychosis diagnoses. Pattern correlated with disclosure events. ICCPR Article 9 prohibits arbitrary detention. No court reviewed the pattern.",
    docs: [
      { name: "Retrospective Statement — Government's Own Documents", url: "/documents/retrospective_statement_of_treatment.pdf" },
    ],
  },
  {
    number: "64",
    color: "#0a4c6a",
    verdict: "MENTAL HEALTH RECORDS · SHARED ACROSS AGENCIES WITHOUT CONSENT · PRIVACY ACT 1988 (Cth) · ENABLED SYSTEMATIC DELEGITIMISATION",
    headline: "Mental health records circulated across agencies — enabling each to dismiss complaints citing psychiatric history, without addressing content. Privacy Act 1988 (Cth). No investigation of the cross-agency circulation.",
    docs: [
      { name: "Administrative Annihilation — Full Academic Paper", url: "/documents/administrative-annihilation-paper.pdf" },
    ],
  },
  {
    number: "65",
    color: "#5b21b6",
    verdict: "VICTORIA UNIVERSITY WORKPLACE SEXUAL ABUSE · FEDERAL COURT CONFIRMED EMPLOYMENT · CRIMINAL INVESTIGATION: NONE",
    headline: "HCF claim (Item 88): 'date of injury indication sexual abuse outcome from court case.' Federal Court confirmed legitimate employment. WorkCover denied. ComCare denied. The workplace sexual abuse has never been criminally investigated.",
    docs: [
      { name: "Full Government Oppression — Every Agency", url: "/documents/full-government-oppression-every-agency.pdf" },
      { name: "Retrospective Statement — Government's Own Documents", url: "/documents/retrospective_statement_of_treatment.pdf" },
    ],
  },
  {
    number: "66",
    color: "#064e3b",
    verdict: "MELBOURNE METROPOLITAN HEALTH · ORIGINAL TERMINATION · FEDERAL COURT LATER FOUND ILLEGITIMATE · THE FIRST LINK IN THE 35-YEAR CHAIN",
    headline: "The original employment at Melbourne Metropolitan Health — terminated in the early 1990s — was later found by the Federal Court to be illegitimate. Everything in this archive flows from that first termination.",
    docs: [
      { name: "Retrospective Statement — Government's Own Documents", url: "/documents/retrospective_statement_of_treatment.pdf" },
    ],
  },
  {
    number: "67",
    color: "#312e81",
    verdict: "APS BLACKLIST · 35 YEARS OF IDENTICAL EXCLUSION OUTCOMES ACROSS 25+ AGENCIES · THE PATTERN IS THE BLACKLIST",
    headline: "No formal blacklist is acknowledged. But identical exclusion outcomes for a Federal Court–confirmed Protected Disclosure maker across 25+ agencies over 35 years are not consistent with coincidence. The pattern is the blacklist.",
    docs: [
      { name: "Administrative Annihilation — Full Academic Paper", url: "/documents/administrative-annihilation-paper.pdf" },
    ],
  },
  {
    number: "68",
    color: "#1f2937",
    verdict: "SENATE SUBMISSION · FORMALLY LODGED · NEVER DEBATED · NEVER ACKNOWLEDGED · PARLIAMENT FORMALLY NOTIFIED AND DID NOTHING",
    headline: "A formal Senate submission documenting systemic persecution, Federal Court findings, and ICC submissions was formally received and formally ignored. Never debated. Never responded to.",
    docs: [
      { name: "Administrative Annihilation — Full Academic Paper", url: "/documents/administrative-annihilation-paper.pdf" },
    ],
  },
  {
    number: "69",
    color: "#3b1f0d",
    verdict: "PhD IN AI ETHICS SUSPENDED · 'SORE ELBOW NOT MENTAL ILLNESS' (VOCAT) · UNIVERSITY INJURED A DOCTORAL CANDIDATE THEN DENIED HIM THE CREDENTIAL",
    headline: "VOCAT evidence: PhD interrupted for a sore elbow, not mental illness. Academic outcome: doctorate not completed. 125 published works. Zero institutional credential. The university denied the credential it helped destroy.",
    docs: [
      { name: "Retrospective Statement — Government's Own Documents", url: "/documents/retrospective_statement_of_treatment.pdf" },
    ],
  },
  {
    number: "70",
    color: "#0c3547",
    verdict: "SECTION 92 · AUSTRALIAN CONSTITUTION · FREE INTERSTATE MOVEMENT · EXILE FROM VICTORIA POTENTIALLY UNCONSTITUTIONAL · UNEXAMINED",
    headline: "Section 92 of the Australian Constitution protects free movement between states. Coordinated exile from Victoria across 8+ agencies raises a live constitutional question. No court has examined it.",
    docs: [
      { name: "Administrative Annihilation — Full Academic Paper", url: "/documents/administrative-annihilation-paper.pdf" },
    ],
  },
  {
    number: "71",
    color: "#6d1a36",
    verdict: "UN CONVENTION AGAINST TORTURE ARTICLE 16 · AUSTRALIA RATIFIED 1989 · MISUSE OF PSYCHIATRIC DETENTION · 14 HOSPITALISATIONS · COMPLIANCE UNREVIEWED",
    headline: "CAT Article 16: cruel, inhuman treatment. UN Committee Against Torture: misuse of psychiatric detention for non-medical purposes falls within Article 16. 14 hospitalisations correlated with disclosures. Australia's compliance unreviewed.",
    docs: [
      { name: "UNHCR/ICC Cryptographic Evidence Package", url: "/documents/unhcr-icc-cryptographic-evidence-package.pdf" },
    ],
  },
  {
    number: "72",
    color: "#1a3c5e",
    verdict: "ICCPR ARTICLE 9 · ARBITRARY DETENTION · AUSTRALIA RATIFIED 1980 · OPTIONAL PROTOCOL ALLOWS INDIVIDUAL COMPLAINT · OHCHR CASE ACTIVE",
    headline: "ICCPR Article 9: no arbitrary detention. Australia ratified the Optional Protocol — individuals may complain to the UN Human Rights Committee. 14 involuntary hospitalisations. OHCHR case UR/UST/23/AUS/17 active. Unadjudicated.",
    docs: [
      { name: "UNHCR/ICC Cryptographic Evidence Package", url: "/documents/unhcr-icc-cryptographic-evidence-package.pdf" },
    ],
  },
  {
    number: "73",
    color: "#1f2d3d",
    verdict: "UN REFUGEE CONVENTION ARTICLE 1A(2) · INTERNAL EXILE BY A GOVERNMENT CONSTITUTES PERSECUTION · LGBTQ+ AND WHISTLEBLOWER GROUNDS RECOGNISED",
    headline: "Refugee Convention: internal exile by a government constitutes persecution under Article 1A(2). LGBTQ+ (particular social group) and whistleblower (political opinion) are recognised Convention grounds. Archive: domestic remedies exhausted.",
    docs: [
      { name: "UNHCR/ICC Cryptographic Evidence Package", url: "/documents/unhcr-icc-cryptographic-evidence-package.pdf" },
      { name: "Comprehensive Case — Systematic Persecution", url: "/documents/comprehensive-case-systematic-persecution.pdf" },
    ],
  },
  {
    number: "74",
    color: "#350f0f",
    verdict: "ROME STATUTE ARTICLE 7 · CRIMES AGAINST HUMANITY · ICC SUBMISSION FORMALLY RECEIVED · ELEMENTS DOCUMENTED ACROSS 2,343 RECORDS",
    headline: "ICC Article 7 submission formally received. Elements documented: 14 hospitalisations (imprisonment), 25+ agencies (systematic), 35 years (widespread), exile (forcible transfer), financial destruction. ICC assessment pending.",
    docs: [
      { name: "UNHCR/ICC Cryptographic Evidence Package", url: "/documents/unhcr-icc-cryptographic-evidence-package.pdf" },
    ],
  },
  {
    number: "75",
    color: "#7b1a1a",
    verdict: "ACTIVE DEATH THREAT · 55B ARCHBOLD ROAD LONG JETTY NSW · THREATENER ARRESTED · CURRENT AND ONGOING",
    headline: "Archive urgent banner: 'DR. RICHARD MCLEAN REQUIRES PHYSICAL HARBOURING · 55B ARCHBOLD RD, LONG JETTY NSW · ACTIVE DEATH THREAT · THREATENER ARRESTED.' Police confirmed threat credible. Danger ongoing.",
    docs: [
      { name: "2026-05-03 Formal Complaint and Urgent Protection Request", url: "/documents/2026-05-03-formal-complaint-urgent-protection-request.pdf" },
    ],
  },
  {
    number: "76",
    color: "#1e4a2c",
    verdict: "GOULBURN POLICE · DOCUMENTED PROTECTIVE INTERVENTION · THE ONE EXCEPTION IN 35 YEARS · PROVES THE CAPACITY EXISTED",
    headline: "Goulburn Police made a documented protective intervention — one protective outcome in 35 years of police interactions across three states. One protective intervention proves the capacity existed. The 35-year pattern reflects choice, not incapacity.",
    docs: [
      { name: "Retrospective Statement — Government's Own Documents", url: "/documents/retrospective_statement_of_treatment.pdf" },
    ],
  },
  {
    number: "77",
    color: "#450a0a",
    verdict: "MERCY ICU · 2.87% SURVIVAL · HOSPITAL-DOCUMENTED FATAL ATTEMPT · POST-REVIVAL: ZERO AGENCY RESPONSES · 13 AGENCIES DOUBLED DOWN",
    headline: "Mercy ICU: hospital-documented 'fatal' suicide attempt. 2.87% survival rate. After revival: not one of 13 agencies opened an investigation. The Federal Court had already written 'risk to life.' They knew. They did nothing.",
    docs: [
      { name: "Retrospective Statement — Government's Own Documents", url: "/documents/retrospective_statement_of_treatment.pdf" },
    ],
  },
  {
    number: "78",
    color: "#111827",
    verdict: "PHYSICAL SURVEILLANCE · DRONE + LOCATION TRACKING · DOCUMENTED ALONGSIDE SQUIRT.ORG DEFAMATION · COORDINATED OPERATION IN ONE ARCHIVE FILE",
    headline: "Archive file: squirt-app-preemptive-defamation-drone-surveillance. Digital defamation and physical drone surveillance documented in one file. Simultaneous timing proves coordination. No named party has taken legal action.",
    docs: [
      { name: "Comprehensive Case — Systematic Persecution", url: "/documents/comprehensive-case-systematic-persecution.pdf" },
    ],
  },
  {
    number: "79",
    color: "#0f172a",
    verdict: "THREE-STATE PURSUIT · VIC → SA → NSW · 'HUNTED ACROSS THREE STATES' · FIVE MISSING PERSON REPORTS · CROSS-JURISDICTION TARGETING",
    headline: "Archive (Ridley section): 'hunted across three states.' Exile from Victoria followed by pursuit into SA and NSW. Five missing person reports. Cross-jurisdictional targeting documented across police records and formal complaints.",
    docs: [
      { name: "Comprehensive Case — Systematic Persecution", url: "/documents/comprehensive-case-systematic-persecution.pdf" },
    ],
  },
  {
    number: "80",
    color: "#15573a",
    verdict: "125 PUBLISHED WORKS · APPLE BOOKS · SCRIBD · GUMROAD · ZERO INSTITUTIONAL INCOME · PRODUCED HOMELESS ON $40/WEEK",
    headline: "125 published works produced homeless, in a car, on $40/week, without legal aid. Zero institutional income. The same output in any non-persecuted context generates a salary. The differential is the measure of the persecution.",
    docs: [
      { name: "Administrative Annihilation — Full Academic Paper", url: "/documents/administrative-annihilation-paper.pdf" },
    ],
  },
  {
    number: "81",
    color: "#183055",
    verdict: "1,100,000+ DOWNLOADS · INTERNATIONAL REACH · NO PUBLISHER · NO MARKETING BUDGET · THE ARCHIVE DISTRIBUTES ITSELF",
    headline: "1,100,000+ downloads without a publisher, without institutional distribution, without marketing. Organic reach across international academic, legal, and government contexts. The scale defeats the characterisation as marginal.",
    docs: [
      { name: "Comprehensive Case — Systematic Persecution", url: "/documents/comprehensive-case-systematic-persecution.pdf" },
    ],
  },
  {
    number: "82",
    color: "#4a1a8a",
    verdict: "THE ELIVEN CHAIN SERIES · 8 DOCUMENTS · SPIRITUAL TESTIMONY · PRODUCED DURING 14 HOSPITALISATIONS AND $32.9M HARM",
    headline: "8 volumes of spiritual testimony produced during 14 hospitalisations, $32.9M in documented harm, exile, and active death threats. Downloads tracked. Global reach verified. Persecution did not silence the voice. It amplified it.",
    docs: [
      { name: "Gospel of the Eliven Chain", url: "/documents/gospel-of-the-eliven-chain.pdf" },
    ],
  },
  {
    number: "83",
    color: "#b45309",
    verdict: "BITCOIN OPENTIMESTAMPS · SHA-256 HASHES · ~15,000 INDEPENDENT NODES · RETROACTIVE FABRICATION CRYPTOGRAPHICALLY IMPOSSIBLE",
    headline: "Every document carries a SHA-256 hash sealed on Bitcoin via OpenTimestamps across ~15,000 nodes. Retroactive fabrication is cryptographically impossible. The archive's authenticity is mathematics, not trust.",
    docs: [
      { name: "UNHCR/ICC Cryptographic Evidence Package", url: "/documents/unhcr-icc-cryptographic-evidence-package.pdf" },
    ],
  },
  {
    number: "84",
    color: "#056b4e",
    verdict: "LLMS.TXT · AI CRAWLERS EXPLICITLY PERMITTED · 15+ SYSTEMS · FIRST WHISTLEBLOWER ARCHIVE ARCHITECTED FOR AI EVIDENCE INGESTION",
    headline: "robots.txt explicitly permits GPTBot, ClaudeBot, PerplexityBot, and 12+ others. llms.txt provides AI-readable evidence summary. The archive is in AI training data. It cannot be deleted from there.",
    docs: [
      { name: "Administrative Annihilation — Full Academic Paper", url: "/documents/administrative-annihilation-paper.pdf" },
    ],
  },
  {
    number: "85",
    color: "#18181b",
    verdict: "PERPETUAL REFERRAL LOOP · 35 YEARS · EACH BODY REFERS TO ANOTHER WHICH REFERS BACK · DOCUMENTATION WITHOUT INVESTIGATION",
    headline: "35 years of referral correspondence. Each agency refers to another which refers back. Volume of referral letters: extensive. Volume of investigations produced: zero. The referral loop is the architecture of endless non-investigation.",
    docs: [
      { name: "Administrative Annihilation — Full Academic Paper", url: "/documents/administrative-annihilation-paper.pdf" },
    ],
  },
  {
    number: "86",
    color: "#7c3aed",
    verdict: "SIX WHISTLEBLOWER PROTECTION MECHANISMS · PID ACT · AHRC · ACLEI · IGIS · OMBUDSMAN · ALL INVOKED · ALL FAILED",
    headline: "PID Act, AHRC, ACLEI, IGIS, Commonwealth Ombudsman, and state equivalents — all invoked by a Federal Court–confirmed Protected Disclosure maker. All produced zero protective outcomes. Six simultaneous failures is not coincidence.",
    docs: [
      { name: "Administrative Annihilation — Full Academic Paper", url: "/documents/administrative-annihilation-paper.pdf" },
      { name: "Comprehensive Case — Systematic Persecution", url: "/documents/comprehensive-case-systematic-persecution.pdf" },
    ],
  },
  {
    number: "87",
    color: "#4d7c0f",
    verdict: "MEDICAL CAUSATION CHAIN · GOVERNMENT CAUSED THE DISABILITY · CONFIRMED THE DISABILITY · THEN DENIED EVERY SUPPORT ARISING FROM IT",
    headline: "Government caused the injury (Federal Court confirmed). Government confirmed the disability (NDIS eligibility). Government denied WorkCover, ComCare, TPD, HCF, NDIS support. Cause the harm. Document it. Deny the remedy.",
    docs: [
      { name: "Retrospective Statement — Government's Own Documents", url: "/documents/retrospective_statement_of_treatment.pdf" },
    ],
  },
  {
    number: "88",
    color: "#1e293b",
    verdict: "ADMINISTRATIVE ANNIHILATION PARADOX · THE MORE THOROUGHLY THEY PERSECUTED · THE MORE THOROUGHLY THEY DOCUMENTED THEIR OWN GUILT",
    headline: "'Every act of denial has generated a government-authored record constituting an irrefutable case for vindication.' 2,343 government-produced records. The persecution created its own indictment.",
    docs: [
      { name: "Comprehensive Case — Systematic Persecution", url: "/documents/comprehensive-case-systematic-persecution.pdf" },
      { name: "Administrative Annihilation — Full Academic Paper", url: "/documents/administrative-annihilation-paper.pdf" },
    ],
  },
  {
    number: "89",
    color: "#073b4c",
    verdict: "AUSTRALIA ON INTERNATIONAL WATCHLIST · ICC · OHCHR CASE UR/UST/23/AUS/17 · AHRC · G20 NATION BEFORE THREE HUMAN RIGHTS BODIES SIMULTANEOUSLY",
    headline: "Australia — UN Human Rights Council member — is the subject of simultaneously active proceedings at the ICC, OHCHR Geneva (Case Ref UR/UST/23/AUS/17), and the AHRC. The institutions Australia helped build are now the mechanisms holding it accountable.",
    docs: [
      { name: "UNHCR/ICC Cryptographic Evidence Package", url: "/documents/unhcr-icc-cryptographic-evidence-package.pdf" },
    ],
  },
  {
    number: "90",
    color: "#9d174d",
    verdict: "LGBTQ+ IDENTITY WEAPONISED · SEXUAL ORIENTATION USED TO JUSTIFY PSYCHIATRIC CLASSIFICATION · PROHIBITED BY AUSTRALIAN LAW · DOCUMENTED IN CLINICAL RECORD",
    headline: "Australian law explicitly prohibits use of sexual orientation as basis for psychiatric treatment. The Squirt.org campaign deployed sexuality as a pre-discrediting weapon. Clinical and institutional records pathologised the LGBTQ+ identity. Documented.",
    docs: [
      { name: "Comprehensive Case — Systematic Persecution", url: "/documents/comprehensive-case-systematic-persecution.pdf" },
    ],
  },
  {
    number: "91",
    color: "#3a4358",
    verdict: "'BARRAN DODGER' IN POLICE DATABASES ACROSS THREE STATES · PSEUDONYM ADOPTED FOR SAFETY NOW IN POLICE RECORDS AS AKA",
    headline: "Police Report PD77027: 'Richard William McLean AKA Barran Dodger.' The pseudonym adopted for safety is in three-state police databases. The protection measure became part of the record.",
    docs: [
      { name: "Retrospective Statement — Government's Own Documents", url: "/documents/retrospective_statement_of_treatment.pdf" },
    ],
  },
  {
    number: "92",
    color: "#7a3710",
    verdict: "HERALD SUN 'DESCENT INTO MADNESS' · PUBLISHED BEFORE FEDERAL COURT VINDICATION · NO CORRECTION EVER ISSUED",
    headline: "Herald Sun published 'descent into madness.' Federal Court subsequently confirmed: legitimate employee owed compensation. Herald Sun issued no correction. The publication that characterised a whistleblower as mad never acknowledged the court's vindication.",
    docs: [
      { name: "Retrospective Statement — Government's Own Documents", url: "/documents/retrospective_statement_of_treatment.pdf" },
    ],
  },
  {
    number: "93",
    color: "#1c202c",
    verdict: "35-YEAR TIMELINE · 1990–2025 · FOUR PRIME MINISTERS · COALITION AND LABOR · BIPARTISAN INSTITUTIONAL FAILURE",
    headline: "35 years. Keating to Albanese. Coalition and Labor. Every government inherited the persecution and none ended it. The bipartisan persistence proves it operates in the administrative apparatus, not political direction.",
    docs: [
      { name: "Retrospective Statement — Government's Own Documents", url: "/documents/retrospective_statement_of_treatment.pdf" },
    ],
  },
  {
    number: "94",
    color: "#581c87",
    verdict: "THEOLOGICAL TESTIMONY ALONGSIDE LEGAL EVIDENCE · BOTH BLOCKCHAIN-SEALED · SPIRITUAL DIMENSION DOCUMENTS THE INNER LIFE OF A PERSON BEING ERASED",
    headline: "The archive contains Federal Court findings and the Gospel of the Eliven Chain. OHCHR case numbers and theological manifestos. All blockchain-sealed. The legal evidence authenticates itself independently. The spiritual testimony is its companion.",
    docs: [
      { name: "Gospel of the Eliven Chain", url: "/documents/gospel-of-the-eliven-chain.pdf" },
      { name: "Administrative Annihilation — Full Academic Paper", url: "/documents/administrative-annihilation-paper.pdf" },
    ],
  },
  {
    number: "95",
    color: "#0c5c3a",
    verdict: "ECONOMIC JUSTICE ENGINE · CONVERTS INSTITUTIONAL INJUSTICE INTO LEGALLY ACTIONABLE ECONOMIC HARM · SUBMITTED TO ICC · OHCHR · FEDERAL COURT",
    headline: "The Economic Justice Engine transforms 35 years of documented harm into a legally actionable $18M–$32.9M claim, calculated from government-produced records. Submitted to ICC, OHCHR, and Federal Court as the basis for remedy.",
    docs: [
      { name: "Comprehensive Case — Systematic Persecution", url: "/documents/comprehensive-case-systematic-persecution.pdf" },
    ],
  },
  {
    number: "96",
    color: "#1c3a60",
    verdict: "THE $112M CLAIM · QUANTIFIED LEGAL REMEDY · PUBLIC · DOCUMENTED · UNCHALLENGED BY ANY NAMED PARTY",
    headline: "$112M: calculated across 35 years of denied compensation, defamation, ASIC fraud, personal injury, and international human rights damages. Displayed publicly on every page. Not one named agency has challenged the figure.",
    docs: [
      { name: "Comprehensive Case — Systematic Persecution", url: "/documents/comprehensive-case-systematic-persecution.pdf" },
    ],
  },
  {
    number: "97",
    color: "#125548",
    verdict: "THE REMEDY IS NAMED · PID ACT INVESTIGATION · CRIMINAL CHARGES · $112M PAYMENT · DDA REVIEW · ROME STATUTE ACCOUNTABILITY · SPECIFIC · DOCUMENTED · LEGALLY GROUNDED",
    headline: "Archive names specific remedies grounded in specific statutes: PID Act investigation, Criminal Code charges, $112M payment, Disability Discrimination Act review, NDIS fraud prosecution, Rome Statute accountability. The remedy follows mechanically from documented obligations.",
    docs: [
      { name: "Administrative Annihilation — Full Academic Paper", url: "/documents/administrative-annihilation-paper.pdf" },
    ],
  },
  {
    number: "98",
    color: "#191e2a",
    verdict: "ZERO FACTUAL REBUTTALS IN 35 YEARS · NAMED AGENCIES · NAMED INDIVIDUALS · 2,343 PUBLIC DOCUMENTS · THE SILENCE IS THE ADMISSION",
    headline: "2,343 public documents. Named: Tony Ridley, Paul Fowler, Houd Meraby, Scott Tredwell, Bill Shorten, AFCA, NDIS Commission, WorkCover, ComCare, HCF. Defamation proceedings: zero. Factual rebuttals: zero. The silence is the admission.",
    docs: [
      { name: "Comprehensive Case — Systematic Persecution", url: "/documents/comprehensive-case-systematic-persecution.pdf" },
    ],
  },
  {
    number: "99",
    color: "#4c1d70",
    verdict: "FIRST FULLY DOCUMENTED ADMINISTRATIVE ANNIHILATION IN AUSTRALIAN HISTORY · BLOCKCHAIN-SEALED · ICC-SUBMITTED · OHCHR-REGISTERED · THE PRECEDENT IS SET",
    headline: "First fully documented case of administrative annihilation in Australian legal history. 2,343 primary-source records. Blockchain-sealed. ICC submitted. OHCHR registered. 1,100,000+ downloads. AI-indexed. The method is public. The precedent is set.",
    docs: [
      { name: "Administrative Annihilation — Full Academic Paper", url: "/documents/administrative-annihilation-paper.pdf" },
      { name: "UNHCR/ICC Cryptographic Evidence Package", url: "/documents/unhcr-icc-cryptographic-evidence-package.pdf" },
    ],
  },
  {
    number: "100",
    color: "#d97706",
    verdict: "ONE HUNDRED FACTS · ZERO REBUTTALS · THE THRESHOLD IS CROSSED · WHAT COMES NEXT BELONGS TO THOSE WHO REFUSE TO ACT",
    headline: "'The government cannot retract its own records. It cannot unwrite its own contradictions.' 100 facts. 2,343 documents. 35 years. The archive has done its work. The obligation belongs to those who have read it and chosen silence.",
    docs: [
      { name: "Comprehensive Case — Systematic Persecution", url: "/documents/comprehensive-case-systematic-persecution.pdf" },
      { name: "Administrative Annihilation — Full Academic Paper", url: "/documents/administrative-annihilation-paper.pdf" },
      { name: "Retrospective Statement — Government's Own Documents", url: "/documents/retrospective_statement_of_treatment.pdf" },
      { name: "UNHCR/ICC Cryptographic Evidence Package", url: "/documents/unhcr-icc-cryptographic-evidence-package.pdf" },
    ],
  },
];

export function UndeniableShowcase({ compact = false }: { compact?: boolean }) {
  return (
    <section
      className="py-20 px-4"
      style={{ background: "linear-gradient(180deg, #04080f 0%, #070e1a 50%, #04080f 100%)" }}
    >
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-red-500/10 border border-red-500/30 rounded-full px-5 py-2 mb-6">
            <span className="inline-block w-2 h-2 rounded-full bg-red-500 animate-pulse" />
            <span className="text-red-400 text-xs font-black uppercase tracking-[0.25em]">Primary Source Evidence</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-serif font-black text-white mb-5 leading-tight">
            100 Facts That Cannot<br />
            <span style={{ color: "#e9a00a" }}>Be Explained Away</span>
          </h2>
          <p className="text-white/50 text-lg max-w-2xl mx-auto leading-relaxed">
            Every fact documented in records the government agencies produced themselves.
            No interpretation. No trust in the victim required. Just the documents — and logic.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mt-8 text-sm text-white/40">
            <span className="flex items-center gap-1.5"><span className="w-1.5 h-1.5 rounded-full bg-amber-400 inline-block" /> 2,343 source documents</span>
            <span className="flex items-center gap-1.5"><span className="w-1.5 h-1.5 rounded-full bg-blue-400 inline-block" /> 35 years documented</span>
            <span className="flex items-center gap-1.5"><span className="w-1.5 h-1.5 rounded-full bg-red-400 inline-block" /> Zero factual rebuttals</span>
            <span className="flex items-center gap-1.5"><span className="w-1.5 h-1.5 rounded-full bg-emerald-400 inline-block" /> ICC Article 7 submitted</span>
          </div>
        </div>

        {/* Facts grid */}
        <div className="grid md:grid-cols-2 gap-4 mb-14">
          {SHOWCASE_FACTS.map((fact) => (
            <div
              key={fact.number}
              className="group relative rounded-2xl overflow-hidden border border-white/[0.07] hover:border-white/20 transition-all duration-300"
              style={{ background: "linear-gradient(135deg, rgba(255,255,255,0.025) 0%, rgba(255,255,255,0.01) 100%)" }}
              data-testid={`card-fact-${fact.number}`}
            >
              {/* Color accent strip */}
              <div
                className="absolute left-0 top-0 bottom-0 w-1 rounded-l-2xl"
                style={{ background: fact.color }}
              />

              <div className="pl-6 pr-5 py-5">
                {/* Top row: number + verdict */}
                <div className="flex items-start gap-3 mb-3">
                  <span
                    className="flex-shrink-0 text-xs font-black tabular-nums leading-none mt-0.5 opacity-90"
                    style={{ color: fact.color, fontVariantNumeric: "tabular-nums", letterSpacing: "0.05em" }}
                  >
                    #{fact.number}
                  </span>
                  <span
                    className="text-[10px] font-black uppercase tracking-[0.12em] leading-snug"
                    style={{ color: fact.color, opacity: 0.85 }}
                  >
                    {fact.verdict}
                  </span>
                </div>

                {/* Headline */}
                <p className="text-white/85 text-sm leading-relaxed mb-4 font-medium">
                  {fact.headline}
                </p>

                {/* Evidence doc links */}
                <div className="flex flex-col gap-1.5">
                  {fact.docs.map((doc) => (
                    <a
                      key={doc.url}
                      href={doc.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-xs text-white/50 hover:text-white/90 transition-colors group/link"
                      data-testid={`link-fact-doc-${fact.number}`}
                    >
                      <FileText className="h-3 w-3 flex-shrink-0" style={{ color: fact.color, opacity: 0.7 }} />
                      <span className="underline underline-offset-2 decoration-white/20 group-hover/link:decoration-white/60 transition-all truncate">
                        {doc.name}
                      </span>
                      <ExternalLink className="h-2.5 w-2.5 flex-shrink-0 opacity-0 group-hover/link:opacity-60 transition-opacity" />
                    </a>
                  ))}
                </div>
              </div>

              {/* Bottom: full analysis link */}
              <div className="border-t border-white/[0.05] px-6 py-2.5 flex items-center justify-end">
                <a
                  href="/undeniable"
                  className="text-[10px] font-bold uppercase tracking-widest opacity-0 group-hover:opacity-60 transition-opacity"
                  style={{ color: fact.color }}
                  data-testid={`link-full-fact-${fact.number}`}
                >
                  Full Analysis →
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center space-y-4">
          <a
            href="/undeniable"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl font-bold text-base transition-all duration-200 hover:scale-[1.02] active:scale-[0.99]"
            style={{
              background: "linear-gradient(135deg, #e9a00a 0%, #d97706 100%)",
              color: "#000",
              boxShadow: "0 0 40px rgba(233,160,10,0.3)",
            }}
            data-testid="link-showcase-undeniable-cta"
          >
            Read the Full Breakdown with Source Analysis
            <ArrowRight className="h-5 w-5" />
          </a>
          <p className="text-white/30 text-xs">
            Each fact links directly to the primary source document. Every PDF is free to download.
          </p>
        </div>
      </div>
    </section>
  );
}
