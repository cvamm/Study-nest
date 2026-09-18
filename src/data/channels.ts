import type { ChannelInfo } from "@/lib/types";

/**
 * Popular channels students use for Class 12 preparation. Cards link to a
 * YouTube search for the channel — no affiliation or verification implied.
 */
export const CHANNELS: ChannelInfo[] = [
  { id: "pw", name: "Physics Wallah", focus: "Physics · Chemistry", note: "Hinglish lectures loved for energy and depth", tone: "amber", initials: "PW" },
  { id: "atoms", name: "Unacademy Atoms", focus: "PCM", note: "Structured English-medium lecture series", tone: "sky", initials: "UA" },
  { id: "vedantu", name: "Vedantu", focus: "All streams", note: "Live-style lectures with practice in between", tone: "cyan", initials: "V" },
  { id: "magnet", name: "Magnet Brains", focus: "Science · Humanities", note: "CBSE-focused, chapter-by-chapter coverage", tone: "emerald", initials: "MB" },
  { id: "apni", name: "Apni Kaksha", focus: "CS · IP · English", note: "The go-to for computer science one-shots", tone: "orange", initials: "AK" },
  { id: "cw", name: "Commerce Wallah", focus: "Commerce", note: "Accounts, BST and Eco with exam tricks", tone: "rose", initials: "CW" },
  { id: "nw", name: "NCERT Wallah", focus: "Biology", note: "NCERT line-by-line biology teaching", tone: "green", initials: "NW" },
  { id: "ra", name: "Rajat Arora", focus: "Economics · Accounts", note: "Concept clarity with board answer writing", tone: "lime", initials: "RA" },
  { id: "neha", name: "Neha Agrawal — Mathematically Yours", focus: "Mathematics", note: "Trick-based solving and full-chapter marathons", tone: "red", initials: "NA" },
  { id: "ef", name: "ExamFear Education", focus: "All subjects", note: "Free notes, videos and question banks", tone: "blue", initials: "EF" },
];

export const channelSearchUrl = (name: string) =>
  `https://www.youtube.com/results?search_query=${encodeURIComponent(`${name} class 12`)}`;
