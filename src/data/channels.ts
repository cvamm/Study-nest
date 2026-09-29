import type { ChannelInfo } from "@/lib/types";

/**
 * Popular channels students use for Class 12 preparation. Cards link to a
 * YouTube search for the channel — no affiliation or verification implied.
 */
export const CHANNELS: ChannelInfo[] = [
  { id: "pw", name: "Physics Wallah", focus: "Physics · Chemistry", note: "Hinglish lectures loved for energy and depth", tone: "amber", initials: "PW" },
  { id: "arvind", name: "Arvind Academy", focus: "Physics Specialist", note: "Renowned for Class 12 Physics one-shots, derivations and PYQs", tone: "sky", initials: "AA" },
  { id: "sunil", name: "Sunil Jangra Physics", focus: "Physics Board Special", note: "100% CBSE-focused derivations, numericals and rationalised one-shots", tone: "yellow", initials: "SJ" },
  { id: "atoms", name: "Unacademy Atoms", focus: "PCM", note: "Structured English-medium lecture series", tone: "sky", initials: "UA" },
  { id: "vedantu", name: "Vedantu", focus: "All streams", note: "Live-style lectures with practice in between", tone: "cyan", initials: "V" },
  { id: "ssp", name: "Sachin Sir Physics", focus: "Physics (SSP)", note: "Chanakya Niti series and intuitive physics derivations", tone: "rose", initials: "SSP" },
  { id: "abhishek", name: "Abhishek Sahu", focus: "Physics Baba", note: "Formulas, NCERT line-by-line and chapter masterclasses", tone: "violet", initials: "AS" },
  { id: "magnet", name: "Magnet Brains", focus: "Science · Humanities", note: "CBSE-focused, chapter-by-chapter coverage", tone: "emerald", initials: "MB" },
  { id: "apni", name: "Apni Kaksha", focus: "CS · IP · English", note: "The go-to for computer science one-shots", tone: "orange", initials: "AK" },
  { id: "cw", name: "Commerce Wallah", focus: "Commerce", note: "Accounts, BST and Eco with exam tricks", tone: "rose", initials: "CW" },
  { id: "nw", name: "NCERT Wallah", focus: "Biology", note: "NCERT line-by-line biology teaching", tone: "green", initials: "NW" },
  { id: "ra", name: "Rajat Arora", focus: "Economics · Accounts", note: "Concept clarity with board answer writing", tone: "lime", initials: "RA" },
  { id: "neha", name: "Neha Agrawal — Mathematically Yours", focus: "Mathematics", note: "Trick-based solving and full-chapter marathons", tone: "red", initials: "NA" },
  { id: "bp", name: "Bharat Panchal — Chemistry Guruji", focus: "Chemistry", note: "Legendary Class 12 chemistry one-shots, named reactions and board sheet series", tone: "emerald", initials: "BP" },
  { id: "sr", name: "Sourabh Raina", focus: "Chemistry", note: "NCERT line-by-line, reaction conversions and board PYQ marathons", tone: "teal", initials: "SR" },
  { id: "sp", name: "Sunil Panda — The Commerce King", focus: "Commerce (Accounts, BST, Eco)", note: "Premier board exam preparation, expected questions and revision series", tone: "amber", initials: "SP" },
  { id: "sm", name: "Shipra Mishra", focus: "English Core", note: "The most trusted Class 12 English educator for summaries, analysis and writing formats", tone: "rose", initials: "SM" },
  { id: "dsr", name: "Digraj Singh Rajput", focus: "Humanities & Social Science", note: "Unmatched storytelling and concept depth for History, Pol Science and Geography", tone: "violet", initials: "DSR" },
  { id: "ciu", name: "CodeitUp", focus: "Computer Science & IP", note: "CBSE Python programming, SQL and network case studies explained thoroughly", tone: "cyan", initials: "CIU" },
  { id: "sc", name: "Swati Chawla", focus: "CS · IP", note: "Deep code tracing, Pandas DataFrame tricks and SQL query masterclasses", tone: "blue", initials: "SC" },
  { id: "seep", name: "Seep Pahuja", focus: "Biology", note: "Detailed NCERT line-by-line, high-yield diagrams and genetics breakdowns", tone: "green", initials: "SP" },
  { id: "ef", name: "ExamFear Education", focus: "All subjects", note: "Free notes, videos and question banks", tone: "blue", initials: "EF" },
];

export const channelSearchUrl = (name: string) =>
  `https://www.youtube.com/results?search_query=${encodeURIComponent(`${name} class 12`)}`;
