export type Tone =
  | "sky"
  | "emerald"
  | "amber"
  | "green"
  | "rose"
  | "teal"
  | "orange"
  | "lime"
  | "cyan"
  | "blue"
  | "yellow"
  | "violet"
  | "fuchsia"
  | "red"
  | "slate";

export type ResourceType =
  | "yt-lectures"
  | "detailed-lectures"
  | "one-shot"
  | "notes"
  | "ncert"
  | "pyq"
  | "sample-papers"
  | "important-questions"
  | "mock-tests"
  | "revision";

export type Language = "English" | "Hindi" | "Hinglish";
export type Difficulty = "Beginner" | "Intermediate" | "Advanced";
export type Goal = "Learning" | "Practice" | "Revision";
export type SourceKind = "youtube" | "website";

export interface Chapter {
  id: string;
  name: string;
}

export interface Subject {
  id: string;
  name: string;
  short: string;
  tagline: string;
  tone: Tone;
  icon: string;
  chapters: Chapter[];
}

export interface Resource {
  id: string;
  title: string;
  subjectId: string;
  /** null = subject-level resource (sample papers, full-syllabus PYQs, etc.) */
  chapterId: string | null;
  type: ResourceType;
  source: string;
  sourceKind: SourceKind;
  language: Language;
  difficulty: Difficulty;
  goal: Goal;
  /** minutes, when applicable */
  duration: number | null;
  description: string;
  url: string;
  recommended: boolean;
  addedAt: string;
  views: number;
}

export interface PlannerTask {
  id: string;
  title: string;
  subjectId: string;
  date: string; // yyyy-mm-dd
  priority: "High" | "Medium" | "Low";
  done: boolean;
}

export interface BrokenReport {
  id: string;
  resourceId: string;
  resourceTitle: string;
  reason: string;
  date: string;
  resolved: boolean;
}

export interface ChannelInfo {
  id: string;
  name: string;
  focus: string;
  note: string;
  tone: Tone;
  initials: string;
}

export interface User {
  name: string;
  email: string;
}
