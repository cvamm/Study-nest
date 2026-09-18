import type {
  Difficulty,
  Goal,
  Language,
  Resource,
  ResourceType,
  SourceKind,
} from "@/lib/types";
import { subjectById } from "@/data/subjects";

/**
 * DEMO DIRECTORY
 * --------------
 * All entries below are realistic SAMPLE data. External links either open an
 * official site (NCERT / CBSE Academic / DIKSHA / ExamFear) or a YouTube
 * search for the topic — no resource has been verified or curated yet.
 * Replace `url` values when real curation begins; the data structure is
 * already backend-ready for Supabase.
 */

export const OFFICIAL_SITES = {
  ncert: "https://ncert.nic.in/",
  cbse: "https://cbseacademic.nic.in/",
  diksha: "https://diksha.gov.in/",
  examfear: "https://www.examfear.com/",
} as const;

const yt = (q: string) =>
  `https://www.youtube.com/results?search_query=${encodeURIComponent(q)}`;

const c = (s: string, i: number) => `${s}-c${i}`;

interface Opts {
  recommended?: boolean;
  daysAgo?: number;
  views?: number;
  url?: string;
}

let seq = 0;

const R = (
  title: string,
  subjectId: string,
  chapterId: string | null,
  type: ResourceType,
  source: string,
  sourceKind: SourceKind,
  language: Language,
  difficulty: Difficulty,
  goal: Goal,
  duration: number | null,
  description: string,
  opts: Opts = {},
): Resource => {
  seq += 1;
  const short = subjectById(subjectId)?.short ?? "";
  return {
    id: `res-${String(seq).padStart(3, "0")}`,
    title,
    subjectId,
    chapterId,
    type,
    source,
    sourceKind,
    language,
    difficulty,
    goal,
    duration,
    description,
    url:
      opts.url ??
      (sourceKind === "youtube"
        ? yt(`${title} ${short} class 12`)
        : `https://example.com/studynest12/${subjectId}/${String(seq).padStart(3, "0")}`),
    recommended: opts.recommended ?? false,
    addedAt: new Date(Date.now() - (opts.daysAgo ?? 21) * 86400000).toISOString(),
    views: opts.views ?? 9200,
  };
};

export const SEED_RESOURCES: Resource[] = [
  /* ------------------------------ PHYSICS ------------------------------ */
  R("Electric Charges & Fields — Full Chapter One Shot", "phy", c("phy", 1), "one-shot", "Physics Wallah", "youtube", "Hinglish", "Beginner", "Revision", 325, "Coulomb's law to Gauss's theorem with derivations, numericals and board-style examples in a single sitting.", { recommended: true, daysAgo: 12, views: 482000 }),
  R("Current Electricity — Detailed Lecture Series (Part 1)", "phy", c("phy", 3), "detailed-lectures", "Unacademy Atoms", "youtube", "English", "Intermediate", "Learning", 88, "Ohm's law, Kirchhoff's rules and Wheatstone bridge explained slowly with solved numericals.", { daysAgo: 34, views: 96000 }),
  R("Ray Optics & Optical Instruments — Complete Chapter Playlist", "phy", c("phy", 9), "yt-lectures", "Vedantu", "youtube", "Hinglish", "Intermediate", "Learning", 320, "Refraction, lenses and optical instruments covered lecture-by-lecture with ray diagrams.", { daysAgo: 41, views: 210000 }),
  R("Electrostatic Potential & Capacitance — Handwritten Notes PDF", "phy", c("phy", 2), "notes", "StudyNest Notes", "website", "English", "Intermediate", "Revision", null, "Crisp handwritten notes: formulas, derivations and a solved-numerical bank for quick revision."),
  R("Semiconductor Electronics — NCERT Solutions & Explanation", "phy", c("phy", 14), "ncert", "NCERT Official", "website", "English", "Beginner", "Learning", null, "Official NCERT textbook material plus solutions for diodes, transistors and logic gates.", { url: OFFICIAL_SITES.ncert, daysAgo: 60, views: 150000 }),
  R("Class 12 Physics PYQs 2015–2025 — Chapterwise Bank", "phy", null, "pyq", "StudyNest PYQ Bank", "website", "English", "Advanced", "Practice", null, "Every board question of the last decade sorted chapterwise with answer hints and trends.", { recommended: true, daysAgo: 8, views: 320000 }),
  R("CBSE Class 12 Physics Sample Paper 2025–26 + Marking Scheme", "phy", null, "sample-papers", "CBSE Academic", "website", "English", "Advanced", "Practice", 180, "Official latest sample question paper with the full marking scheme released by CBSE.", { recommended: true, url: OFFICIAL_SITES.cbse, daysAgo: 5, views: 540000 }),
  R("Moving Charges & Magnetism — Important Board Questions", "phy", c("phy", 4), "important-questions", "ExamFear Education", "website", "English", "Intermediate", "Practice", null, "Curated list of repeatedly-asked questions on Biot–Savart, Ampere's law and galvanometers.", { url: OFFICIAL_SITES.examfear, daysAgo: 27, views: 61000 }),
  R("Electromagnetic Induction — One Shot with Numericals", "phy", c("phy", 6), "one-shot", "Sunil Jangra Physics", "youtube", "Hindi", "Beginner", "Revision", 240, "Faraday's laws, Lenz's law and motional EMF revised end-to-end with past-year numericals.", { daysAgo: 19, views: 88000 }),
  R("Full Syllabus Mock Test 1 — Physics (Board Pattern)", "phy", null, "mock-tests", "StudyNest Mocks", "website", "English", "Advanced", "Practice", 180, "3-hour board-pattern mock with section-wise timing targets and an answer key."),
  R("Alternating Current — Quick Revision + Formula Sheet", "phy", c("phy", 7), "revision", "Shobhit Nirwan", "youtube", "Hinglish", "Intermediate", "Revision", 52, "LCR circuits, phasors and resonance in under an hour with a downloadable formula sheet.", { recommended: true, daysAgo: 15, views: 132000 }),
  R("Wave Optics — Most Expected Derivations Walkthrough", "phy", c("phy", 10), "important-questions", "Magnet Brains", "youtube", "Hindi", "Advanced", "Practice", 74, "Huygens' principle, YDSE and diffraction derivations written exactly how boards expect.", { daysAgo: 22, views: 47000 }),
  R("Atoms & Nuclei — Combined Marathon Revision", "phy", c("phy", 12), "revision", "Physics Wallah", "youtube", "Hinglish", "Intermediate", "Revision", 190, "Bohr model, radioactivity and binding energy covered back-to-back before exams.", { daysAgo: 9, views: 175000 }),

  /* ----------------------------- CHEMISTRY ----------------------------- */
  R("Electrochemistry — One Shot with Nernst Numericals", "chem", c("chem", 2), "one-shot", "Vedantu", "youtube", "Hinglish", "Beginner", "Revision", 210, "Galvanic cells, conductance and Nernst equation with every numerical type boards ask.", { recommended: true, daysAgo: 11, views: 265000 }),
  R("Coordination Compounds — Detailed Lecture Series", "chem", c("chem", 5), "detailed-lectures", "Unacademy Atoms", "youtube", "English", "Intermediate", "Learning", 265, "IUPAC naming, isomerism, VBT and CFT taught step-by-step with practice sets.", { daysAgo: 38, views: 118000 }),
  R("Organic Named Reactions — Master Notes (All Chapters)", "chem", null, "notes", "StudyNest Notes", "website", "English", "Intermediate", "Revision", null, "Every named reaction of Class 12 organic chemistry on a few pages with mechanisms and tricks."),
  R("Solutions — NCERT Intext & Exercise Solutions", "chem", c("chem", 1), "ncert", "NCERT Official", "website", "English", "Beginner", "Practice", null, "Official NCERT chapter text with solved intext and exercise questions for colligative properties.", { url: OFFICIAL_SITES.ncert, daysAgo: 55, views: 98000 }),
  R("Class 12 Chemistry PYQs 2015–2025 — Chapterwise Bank", "chem", null, "pyq", "StudyNest PYQ Bank", "website", "English", "Advanced", "Practice", null, "Decade of board questions for physical, inorganic and organic chemistry with trend analysis.", { recommended: true, daysAgo: 7, views: 287000 }),
  R("Biomolecules — Rapid Revision with Mnemonics", "chem", c("chem", 10), "revision", "Magnet Brains", "youtube", "Hinglish", "Beginner", "Revision", 64, "Carbohydrates, proteins and nucleic acids memorised fast with mnemonics and tables.", { daysAgo: 17, views: 74000 }),
  R("Aldehydes & Ketones — Important Conversions + Questions", "chem", c("chem", 8), "important-questions", "ExamFear Education", "website", "English", "Advanced", "Practice", null, "The conversions and tests boards love: aldol, Cannizzaro, iodoform and more.", { url: OFFICIAL_SITES.examfear, daysAgo: 29, views: 52000 }),
  R("CBSE Class 12 Chemistry Sample Paper 2025–26", "chem", null, "sample-papers", "CBSE Academic", "website", "English", "Advanced", "Practice", 180, "Official sample paper with marking scheme — attempt it under timed conditions.", { url: OFFICIAL_SITES.cbse, daysAgo: 5, views: 415000 }),
  R("Chemical Kinetics — Numerical Marathon", "chem", c("chem", 3), "yt-lectures", "Doubtnut", "youtube", "Hinglish", "Intermediate", "Practice", 118, "Rate laws, order of reaction and Arrhenius numericals solved one after another.", { daysAgo: 25, views: 66000 }),

  /* ------------------------------ MATHEMATICS ------------------------------ */
  R("Integrals — One Shot (Complete Calculus Integration)", "math", c("math", 7), "one-shot", "Neha Agrawal Mathematically Yours", "youtube", "Hinglish", "Intermediate", "Revision", 288, "Every integration method with shortcuts and 60+ solved examples in one video.", { recommended: true, daysAgo: 10, views: 620000 }),
  R("Probability — Detailed Lecture Series", "math", c("math", 13), "detailed-lectures", "Vedantu", "youtube", "English", "Advanced", "Learning", 240, "Conditional probability, Bayes' theorem and distributions built from first principles.", { daysAgo: 36, views: 154000 }),
  R("Matrices — Complete Chapter Lectures (Hindi Medium)", "math", c("math", 3), "yt-lectures", "Magnet Brains", "youtube", "Hindi", "Beginner", "Learning", 300, "Types, operations, inverse and elementary transformations taught from zero.", { daysAgo: 44, views: 190000 }),
  R("3D Geometry — Formula Sheet + 120 Solved Examples", "math", c("math", 11), "notes", "StudyNest Notes", "website", "English", "Intermediate", "Revision", null, "Lines and planes in 3D condensed into a formula sheet with worked examples for each type."),
  R("Class 12 Maths PYQs 2015–2025 — Chapterwise Bank", "math", null, "pyq", "StudyNest PYQ Bank", "website", "English", "Advanced", "Practice", null, "Ten years of board maths with chapterwise tagging, case-study questions and solutions.", { recommended: true, daysAgo: 6, views: 356000 }),
  R("CBSE Class 12 Maths Sample Paper 2025–26", "math", null, "sample-papers", "CBSE Academic", "website", "English", "Advanced", "Practice", 180, "Official sample paper — standard and pattern exactly like the real board exam.", { url: OFFICIAL_SITES.cbse, daysAgo: 5, views: 489000 }),
  R("Differential Equations — Important Questions Set", "math", c("math", 9), "important-questions", "ExamFear Education", "website", "English", "Intermediate", "Practice", null, "Variable separable, homogeneous and linear DEs — the questions that appear every year.", { url: OFFICIAL_SITES.examfear, daysAgo: 31, views: 58000 }),
  R("Application of Derivatives — Rapid Revision", "math", c("math", 6), "revision", "Shobhit Nirwan", "youtube", "Hinglish", "Intermediate", "Revision", 58, "Tangents, maxima-minima and approximation revised fast with board examples.", { daysAgo: 14, views: 121000 }),
  R("Full Syllabus Mock Test 1 — Mathematics", "math", null, "mock-tests", "StudyNest Mocks", "website", "English", "Advanced", "Practice", 180, "Board-pattern mock with section A–E split, time targets and a detailed answer key."),
  R("Determinants — Tricks & Board Patterns", "math", c("math", 4), "yt-lectures", "Neha Agrawal Mathematically Yours", "youtube", "Hinglish", "Intermediate", "Learning", 96, "Properties of determinants with the short-tricks that save 20 minutes in the exam.", { daysAgo: 23, views: 143000 }),

  /* ------------------------------- BIOLOGY ------------------------------- */
  R("Principles of Inheritance & Variation — One Shot", "bio", c("bio", 5), "one-shot", "NCERT Wallah", "youtube", "Hinglish", "Beginner", "Revision", 230, "Mendelian genetics to pedigree analysis with every NCERT diagram redrawn live.", { recommended: true, daysAgo: 13, views: 305000 }),
  R("Molecular Basis of Inheritance — Detailed Lecture", "bio", c("bio", 6), "detailed-lectures", "NCERT Wallah", "youtube", "English", "Advanced", "Learning", 275, "Replication, transcription and the lac operon explained line-by-line from NCERT.", { daysAgo: 40, views: 167000 }),
  R("Biotechnology — Diagrams & Process Notes Pack", "bio", c("bio", 10), "notes", "StudyNest Notes", "website", "English", "Intermediate", "Revision", null, "rDNA technology, PCR and bioreactors as labelled diagrams with 5-mark answer frames."),
  R("Ecosystem — NCERT Line-by-Line Revision", "bio", c("bio", 13), "ncert", "Magnet Brains", "youtube", "English", "Beginner", "Revision", 86, "Energy flow, pyramids and succession read straight off NCERT — the way boards test.", { daysAgo: 18, views: 83000 }),
  R("Class 12 Biology PYQs 2015–2025 — Chapterwise Bank", "bio", null, "pyq", "StudyNest PYQ Bank", "website", "English", "Advanced", "Practice", null, "A decade of biology board questions tagged by chapter, diagram questions included.", { recommended: true, daysAgo: 8, views: 244000 }),
  R("CBSE Class 12 Biology Sample Paper 2025–26", "bio", null, "sample-papers", "CBSE Academic", "website", "English", "Advanced", "Practice", 180, "Official sample paper with scheme — practise the exact case-based question style.", { url: OFFICIAL_SITES.cbse, daysAgo: 5, views: 372000 }),
  R("Human Reproduction — Chapter Lectures", "bio", c("bio", 3), "yt-lectures", "NCERT Wallah", "youtube", "Hinglish", "Intermediate", "Learning", 150, "Gametogenesis to parturition with labelled diagrams drawn on screen.", { daysAgo: 47, views: 139000 }),
  R("Human Health & Disease — Important Questions", "bio", c("bio", 8), "important-questions", "ExamFear Education", "website", "English", "Intermediate", "Practice", null, "Immunity, AIDS and cancer questions that repeat year after year.", { url: OFFICIAL_SITES.examfear, daysAgo: 26, views: 49000 }),
  R("Full Syllabus Mock Test 1 — Biology", "bio", null, "mock-tests", "StudyNest Mocks", "website", "English", "Advanced", "Practice", 180, "Board-pattern biology mock with diagram-based questions and answer key."),

  /* ---------------------------- ENGLISH CORE ---------------------------- */
  R("Flamingo & Vistas — All Chapters Summary One Shot", "eng", null, "one-shot", "Apni Kaksha", "youtube", "Hinglish", "Beginner", "Revision", 165, "All 14 chapters summarised with themes, characters and likely questions in one video.", { recommended: true, daysAgo: 16, views: 520000 }),
  R("The Last Lesson — Detailed Chapter Analysis", "eng", c("eng", 1), "yt-lectures", "Apni Kaksha", "youtube", "English", "Beginner", "Learning", 48, "Theme, summary and question-answers for the most-asked Flamingo chapter.", { daysAgo: 52, views: 210000 }),
  R("Writing Section — Formats & Solved Examples Notes", "eng", null, "notes", "StudyNest Notes", "website", "English", "Beginner", "Practice", null, "Notice, invitation, letter, article and report formats with solved CBSE examples."),
  R("English Core PYQs 2015–2025 — Chapterwise Bank", "eng", null, "pyq", "StudyNest PYQ Bank", "website", "English", "Intermediate", "Practice", null, "Literature questions tagged per chapter plus past writing-section prompts.", { daysAgo: 9, views: 128000 }),
  R("CBSE Class 12 English Sample Paper 2025–26", "eng", null, "sample-papers", "CBSE Academic", "website", "English", "Intermediate", "Practice", 180, "Official sample paper — check how unseen passages and writing tasks are framed.", { url: OFFICIAL_SITES.cbse, daysAgo: 5, views: 205000 }),

  /* ----------------------------- ACCOUNTANCY ----------------------------- */
  R("Partnership Fundamentals — One Shot", "acc", c("acc", 2), "one-shot", "Commerce Wallah", "youtube", "Hinglish", "Beginner", "Revision", 205, "P&L appropriation, capitals and interest calculations with full-length questions.", { recommended: true, daysAgo: 12, views: 232000 }),
  R("Cash Flow Statement — Detailed Lectures", "acc", c("acc", 10), "detailed-lectures", "Commerce Wallah", "youtube", "Hinglish", "Intermediate", "Learning", 132, "Operating, investing and financing activities decoded with CBSE-format problems.", { daysAgo: 33, views: 141000 }),
  R("Accounting for Share Capital — Complete Chapter Playlist", "acc", c("acc", 6), "yt-lectures", "Commerce Wallah", "youtube", "Hinglish", "Intermediate", "Learning", 180, "Issue, forfeiture and reissue of shares with pro-rata cases solved live.", { daysAgo: 45, views: 176000 }),
  R("Accounting Ratios — Formula Sheet & Practice Notes", "acc", c("acc", 9), "notes", "StudyNest Notes", "website", "English", "Intermediate", "Revision", null, "Every ratio formula with 40 graded practice questions and shortcuts."),
  R("Class 12 Accountancy PYQs 2015–2025", "acc", null, "pyq", "StudyNest PYQ Bank", "website", "English", "Advanced", "Practice", null, "Ten years of accounts papers with chapter tags and model answers.", { daysAgo: 10, views: 167000 }),
  R("CBSE Class 12 Accountancy Sample Paper 2025–26", "acc", null, "sample-papers", "CBSE Academic", "website", "English", "Advanced", "Practice", 180, "Official paper with marking scheme — includes the company-accounts sections.", { url: OFFICIAL_SITES.cbse, daysAgo: 5, views: 198000 }),
  R("Adjustment Entries — Important Questions Bank", "acc", c("acc", 8), "important-questions", "ExamFear Education", "website", "English", "Intermediate", "Practice", null, "Closing stock, depreciation, bad debts — every adjustment asked in analysis questions.", { url: OFFICIAL_SITES.examfear, daysAgo: 28, views: 43000 }),

  /* --------------------------- BUSINESS STUDIES --------------------------- */
  R("Marketing Management — One Shot + Mnemonics", "bst", c("bst", 10), "one-shot", "Commerce Wallah", "youtube", "Hinglish", "Beginner", "Revision", 120, "4 Ps, branding and consumer rights memorised with mnemonics that stick.", { recommended: true, daysAgo: 14, views: 158000 }),
  R("Case Study Practice — Directing & Controlling", "bst", c("bst", 7), "important-questions", "Commerce Wallah", "youtube", "Hinglish", "Intermediate", "Practice", 90, "Identify-the-concept case questions drilled with answer-writing technique.", { daysAgo: 20, views: 77000 }),
  R("Business Environment — Detailed Lecture", "bst", c("bst", 3), "detailed-lectures", "Commerce Wallah", "youtube", "English", "Beginner", "Learning", 75, "Dimensions of environment and LPG impact explained with current examples.", { daysAgo: 49, views: 92000 }),
  R("Class 12 Business Studies PYQs 2015–2025", "bst", null, "pyq", "StudyNest PYQ Bank", "website", "English", "Intermediate", "Practice", null, "Chapterwise PYQs plus a bank of case-study questions from past papers.", { daysAgo: 11, views: 119000 }),
  R("CBSE Class 12 BST Sample Paper 2025–26", "bst", null, "sample-papers", "CBSE Academic", "website", "English", "Intermediate", "Practice", 180, "Official sample paper — note the source-based case questions.", { url: OFFICIAL_SITES.cbse, daysAgo: 5, views: 132000 }),

  /* ------------------------------ ECONOMICS ------------------------------ */
  R("National Income Accounting — One Shot", "eco", c("eco", 2), "one-shot", "Rajat Arora", "youtube", "Hinglish", "Beginner", "Revision", 175, "GDP, GNP, value-added and income methods with every numerical type.", { recommended: true, daysAgo: 13, views: 271000 }),
  R("Money and Banking — Detailed Lectures", "eco", c("eco", 3), "detailed-lectures", "Rajat Arora", "youtube", "English", "Intermediate", "Learning", 110, "Credit creation and RBI's tools explained with diagrams boards love.", { daysAgo: 37, views: 134000 }),
  R("LPG — 1991 Reforms Chapter Notes", "eco", c("eco", 9), "notes", "StudyNest Notes", "website", "English", "Beginner", "Revision", null, "Liberalisation, privatisation and globalisation summarised with pros, cons and data."),
  R("Class 12 Economics PYQs 2015–2025", "eco", null, "pyq", "StudyNest PYQ Bank", "website", "English", "Advanced", "Practice", null, "Macro + Indian economy questions tagged chapterwise with 6-mark model answers.", { daysAgo: 9, views: 143000 }),
  R("CBSE Class 12 Economics Sample Paper 2025–26", "eco", null, "sample-papers", "CBSE Academic", "website", "English", "Advanced", "Practice", 180, "Official sample paper covering both books with the marking scheme.", { url: OFFICIAL_SITES.cbse, daysAgo: 5, views: 156000 }),
  R("Balance of Payments — Important Questions", "eco", c("eco", 6), "important-questions", "ExamFear Education", "website", "English", "Intermediate", "Practice", null, "BoP, trade deficit and exchange rate questions that repeat almost yearly.", { url: OFFICIAL_SITES.examfear, daysAgo: 24, views: 39000 }),

  /* --------------------------- COMPUTER SCIENCE --------------------------- */
  R("Python — Complete Class 12 Revision One Shot", "cs", c("cs", 1), "one-shot", "Apni Kaksha", "youtube", "Hinglish", "Beginner", "Revision", 240, "Functions, files and exception handling revised with output questions throughout.", { recommended: true, daysAgo: 15, views: 388000 }),
  R("SQL — Detailed Lecture Series", "cs", c("cs", 4), "detailed-lectures", "Apni Kaksha", "youtube", "English", "Intermediate", "Learning", 150, "DDL, DML, joins and aggregate functions with the exact query patterns CBSE asks.", { daysAgo: 35, views: 204000 }),
  R("Computer Networks — One Shot", "cs", c("cs", 6), "one-shot", "Apni Kaksha", "youtube", "Hinglish", "Beginner", "Revision", 95, "Topologies, protocols and devices in 95 minutes — theory section sorted.", { daysAgo: 17, views: 165000 }),
  R("Class 12 CS PYQs 2015–2025 + Practical Questions", "cs", null, "pyq", "StudyNest PYQ Bank", "website", "English", "Advanced", "Practice", null, "Theory papers plus practical file and viva questions tagged chapterwise.", { daysAgo: 10, views: 176000 }),
  R("CBSE Class 12 CS Sample Paper 2025–26", "cs", null, "sample-papers", "CBSE Academic", "website", "English", "Advanced", "Practice", 180, "Official sample paper with SQL and Python output sections.", { url: OFFICIAL_SITES.cbse, daysAgo: 5, views: 187000 }),
  R("Python Data Structures — Notes (List, Stack, Queue)", "cs", c("cs", 2), "notes", "StudyNest Notes", "website", "English", "Intermediate", "Revision", null, "Push/pop implementations and list operations with tracing practice questions."),
  R("Interface Python with SQL — Practice Set", "cs", c("cs", 5), "important-questions", "StudyNest Question Bank", "website", "English", "Intermediate", "Practice", null, "25 connector-based programs in the style of the board's Section C questions."),

  /* ------------------------- INFORMATICS PRACTICES ------------------------- */
  R("Python + Pandas — Full Revision One Shot", "ip", c("ip", 1), "one-shot", "Apni Kaksha", "youtube", "Hinglish", "Beginner", "Revision", 200, "Series, DataFrames and CSV handling revised with output questions.", { recommended: true, daysAgo: 16, views: 231000 }),
  R("Class 12 IP PYQs 2015–2025", "ip", null, "pyq", "StudyNest PYQ Bank", "website", "English", "Advanced", "Practice", null, "IP theory papers plus practical-based questions tagged by unit.", { daysAgo: 12, views: 98000 }),
  R("CBSE Class 12 IP Sample Paper 2025–26", "ip", null, "sample-papers", "CBSE Academic", "website", "English", "Advanced", "Practice", 180, "Official sample paper for Informatics Practices with scheme.", { url: OFFICIAL_SITES.cbse, daysAgo: 5, views: 104000 }),
  R("SQL Queries — Practice Set for IP", "ip", c("ip", 4), "important-questions", "StudyNest Question Bank", "website", "English", "Intermediate", "Practice", null, "Joins and subqueries drilled with the tables CBSE typically uses."),

  /* -------------------------------- HISTORY -------------------------------- */
  R("Mahatma Gandhi & the Nationalist Movement — One Shot", "his", c("his", 10), "one-shot", "Magnet Brains", "youtube", "Hinglish", "Beginner", "Revision", 150, "Champaran to Quit India with source-based question practice built in.", { recommended: true, daysAgo: 18, views: 127000 }),
  R("Rebels and the Raj — 1857 Detailed Lecture", "his", c("his", 9), "detailed-lectures", "Magnet Brains", "youtube", "Hindi", "Intermediate", "Learning", 120, "Causes, events and historiography of 1857 with evidence-based answers.", { daysAgo: 42, views: 64000 }),
  R("Class 12 History PYQs 2015–2025", "his", null, "pyq", "StudyNest PYQ Bank", "website", "English", "Intermediate", "Practice", null, "Source-based and long-answer questions tagged per theme.", { daysAgo: 11, views: 71000 }),
  R("Map Work — All Maps Explained (2025–26 List)", "his", null, "notes", "Magnet Brains", "youtube", "Hindi", "Beginner", "Practice", 65, "Every map item on the CBSE list located and memorised with tricks.", { daysAgo: 21, views: 89000 }),
  R("Framing the Constitution — Important Questions", "his", c("his", 11), "important-questions", "StudyNest Question Bank", "website", "English", "Intermediate", "Practice", null, "Constituent Assembly debates and key questions framed for 8-mark answers."),

  /* --------------------------- POLITICAL SCIENCE --------------------------- */
  R("Federalism — One Shot", "pol", c("pol", 6), "one-shot", "Magnet Brains", "youtube", "Hinglish", "Beginner", "Revision", 85, "Union-state relations, emergencies and cooperative federalism in one sitting.", { recommended: true, daysAgo: 19, views: 58000 }),
  R("Constitution — Why and How: Detailed Lecture", "pol", c("pol", 1), "detailed-lectures", "Magnet Brains", "youtube", "English", "Beginner", "Learning", 95, "The making of the Constitution with the arguments boards ask you to compare.", { daysAgo: 46, views: 73000 }),
  R("Class 12 Political Science PYQs 2015–2025", "pol", null, "pyq", "StudyNest PYQ Bank", "website", "English", "Intermediate", "Practice", null, "Both books covered — Constitution at Work and Post-Independence politics.", { daysAgo: 12, views: 54000 }),
  R("CBSE Class 12 Pol. Science Sample Paper 2025–26", "pol", null, "sample-papers", "CBSE Academic", "website", "English", "Intermediate", "Practice", 180, "Official sample paper with source-based questions.", { url: OFFICIAL_SITES.cbse, daysAgo: 5, views: 62000 }),

  /* -------------------------------- GEOGRAPHY -------------------------------- */
  R("Human Settlements — One Shot", "geo", c("geo", 10), "one-shot", "Magnet Brains", "youtube", "Hinglish", "Beginner", "Revision", 78, "Rural-urban settlement patterns with the map-based questions included.", { recommended: true, daysAgo: 20, views: 47000 }),
  R("Migration — Types, Causes & Consequences: Detailed Lecture", "geo", c("geo", 12), "detailed-lectures", "Magnet Brains", "youtube", "English", "Intermediate", "Learning", 70, "Push-pull factors and Indian migration data interpreted step-by-step.", { daysAgo: 43, views: 38000 }),
  R("Class 12 Geography PYQs 2015–2025 + Map Items", "geo", null, "pyq", "StudyNest PYQ Bank", "website", "English", "Intermediate", "Practice", null, "Questions tagged by chapter plus the full map-work list with locations.", { daysAgo: 13, views: 44000 }),
  R("Map Work — India Physical (Rivers, Mountains, Soil)", "geo", null, "notes", "StudyNest Notes", "website", "English", "Beginner", "Practice", null, "Printable practice maps for every CBSE-listed Indian map item."),

  /* ------------------------------- PSYCHOLOGY ------------------------------- */
  R("Self and Personality — One Shot", "psy", c("psy", 2), "one-shot", "Magnet Brains", "youtube", "Hinglish", "Beginner", "Revision", 92, "Freud, Rogers and assessment tools revised with application questions.", { recommended: true, daysAgo: 22, views: 36000 }),
  R("Psychological Disorders — Detailed Lecture", "psy", c("psy", 4), "detailed-lectures", "Magnet Brains", "youtube", "English", "Intermediate", "Learning", 105, "Anxiety, mood and schizophrenic disorders with DSM criteria simplified.", { daysAgo: 48, views: 41000 }),
  R("Class 12 Psychology PYQs 2015–2025", "psy", null, "pyq", "StudyNest PYQ Bank", "website", "English", "Intermediate", "Practice", null, "Chapterwise psychology board questions with model answers.", { daysAgo: 14, views: 28000 }),
  R("Therapeutic Approaches — Comparison Notes", "psy", c("psy", 5), "notes", "StudyNest Notes", "website", "English", "Intermediate", "Revision", null, "CBT, psychodynamic and humanistic therapies compared in tables boards reward."),

  /* ------------------------------- SOCIOLOGY ------------------------------- */
  R("Social Movements — One Shot", "soc", c("soc", 8), "one-shot", "Magnet Brains", "youtube", "Hinglish", "Beginner", "Revision", 80, "Farmers', environmental and women's movements with case examples.", { recommended: true, daysAgo: 23, views: 31000 }),
  R("The Market as a Social Institution — Detailed Lecture", "soc", c("soc", 3), "detailed-lectures", "Magnet Brains", "youtube", "English", "Intermediate", "Learning", 88, "From weekly haats to global markets — structural and cultural perspectives.", { daysAgo: 50, views: 26000 }),
  R("Class 12 Sociology PYQs 2015–2025", "soc", null, "pyq", "StudyNest PYQ Bank", "website", "English", "Intermediate", "Practice", null, "Both books' questions tagged by chapter with value-based question bank.", { daysAgo: 15, views: 24000 }),
  R("Mass Media & Cultural Diversity — Quick Notes", "soc", c("soc", 10), "notes", "StudyNest Notes", "website", "English", "Beginner", "Revision", null, "Media ownership, censorship and cultural globalisation in exam-ready notes."),
];
