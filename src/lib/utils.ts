import {
  Atom,
  BarChart3,
  BookOpen,
  Brain,
  Briefcase,
  Calculator,
  ClipboardList,
  Code2,
  Dna,
  FileQuestion,
  FileText,
  FlaskConical,
  Globe2,
  Landmark,
  MonitorPlay,
  MonitorSmartphone,
  NotebookPen,
  PlayCircle,
  RefreshCw,
  Scale,
  Sigma,
  Target,
  TrendingUp,
  Users,
  Zap,
  type LucideIcon,
} from "lucide-react";
import type { Difficulty, Goal, ResourceType, Tone } from "@/lib/types";

export const cn = (...parts: Array<string | false | null | undefined>) =>
  parts.filter(Boolean).join(" ");

/* ---------- tone presets (full class strings so Tailwind can see them) ---------- */

export interface ToneClasses {
  chip: string; // small badges
  soft: string; // soft background blocks
  text: string;
  solid: string;
  border: string;
  bar: string; // progress bar fill
}

export const TONES: Record<Tone, ToneClasses> = {
  sky: { chip: "bg-sky-50 text-sky-700 border-sky-200", soft: "bg-sky-50", text: "text-sky-700", solid: "bg-sky-500", border: "border-sky-200", bar: "bg-sky-500" },
  emerald: { chip: "bg-emerald-50 text-emerald-700 border-emerald-200", soft: "bg-emerald-50", text: "text-emerald-700", solid: "bg-emerald-500", border: "border-emerald-200", bar: "bg-emerald-500" },
  amber: { chip: "bg-amber-50 text-amber-700 border-amber-200", soft: "bg-amber-50", text: "text-amber-700", solid: "bg-amber-500", border: "border-amber-200", bar: "bg-amber-500" },
  green: { chip: "bg-green-50 text-green-700 border-green-200", soft: "bg-green-50", text: "text-green-700", solid: "bg-green-500", border: "border-green-200", bar: "bg-green-500" },
  rose: { chip: "bg-rose-50 text-rose-700 border-rose-200", soft: "bg-rose-50", text: "text-rose-700", solid: "bg-rose-500", border: "border-rose-200", bar: "bg-rose-500" },
  teal: { chip: "bg-teal-50 text-teal-700 border-teal-200", soft: "bg-teal-50", text: "text-teal-700", solid: "bg-teal-500", border: "border-teal-200", bar: "bg-teal-500" },
  orange: { chip: "bg-orange-50 text-orange-700 border-orange-200", soft: "bg-orange-50", text: "text-orange-700", solid: "bg-orange-500", border: "border-orange-200", bar: "bg-orange-500" },
  lime: { chip: "bg-lime-50 text-lime-700 border-lime-200", soft: "bg-lime-50", text: "text-lime-700", solid: "bg-lime-500", border: "border-lime-200", bar: "bg-lime-500" },
  cyan: { chip: "bg-cyan-50 text-cyan-700 border-cyan-200", soft: "bg-cyan-50", text: "text-cyan-700", solid: "bg-cyan-500", border: "border-cyan-200", bar: "bg-cyan-500" },
  blue: { chip: "bg-blue-50 text-blue-700 border-blue-200", soft: "bg-blue-50", text: "text-blue-700", solid: "bg-blue-500", border: "border-blue-200", bar: "bg-blue-500" },
  yellow: { chip: "bg-yellow-50 text-yellow-700 border-yellow-200", soft: "bg-yellow-50", text: "text-yellow-700", solid: "bg-yellow-500", border: "border-yellow-200", bar: "bg-yellow-500" },
  violet: { chip: "bg-violet-50 text-violet-700 border-violet-200", soft: "bg-violet-50", text: "text-violet-700", solid: "bg-violet-500", border: "border-violet-200", bar: "bg-violet-500" },
  fuchsia: { chip: "bg-fuchsia-50 text-fuchsia-700 border-fuchsia-200", soft: "bg-fuchsia-50", text: "text-fuchsia-700", solid: "bg-fuchsia-500", border: "border-fuchsia-200", bar: "bg-fuchsia-500" },
  red: { chip: "bg-red-50 text-red-700 border-red-200", soft: "bg-red-50", text: "text-red-700", solid: "bg-red-500", border: "border-red-200", bar: "bg-red-500" },
  slate: { chip: "bg-slate-100 text-slate-700 border-slate-200", soft: "bg-slate-100", text: "text-slate-700", solid: "bg-slate-500", border: "border-slate-200", bar: "bg-slate-500" },
};

/* ---------- resource type registry ---------- */

export interface TypeMeta {
  id: ResourceType;
  label: string;
  short: string;
  icon: LucideIcon;
  tone: Tone;
}

export const RESOURCE_TYPES: TypeMeta[] = [
  { id: "yt-lectures", label: "YouTube Lectures", short: "Lectures", icon: MonitorPlay, tone: "rose" },
  { id: "detailed-lectures", label: "Detailed Lectures", short: "Detailed", icon: PlayCircle, tone: "sky" },
  { id: "one-shot", label: "One-Shot Revision", short: "One-Shot", icon: Zap, tone: "amber" },
  { id: "notes", label: "Notes & Study Material", short: "Notes", icon: NotebookPen, tone: "emerald" },
  { id: "ncert", label: "NCERT Resources", short: "NCERT", icon: BookOpen, tone: "teal" },
  { id: "pyq", label: "Previous Year Questions", short: "PYQs", icon: FileQuestion, tone: "orange" },
  { id: "sample-papers", label: "Sample Papers", short: "Samples", icon: FileText, tone: "cyan" },
  { id: "important-questions", label: "Important Questions", short: "Important", icon: Target, tone: "red" },
  { id: "mock-tests", label: "Mock Tests", short: "Mocks", icon: ClipboardList, tone: "violet" },
  { id: "revision", label: "Revision Resources", short: "Revision", icon: RefreshCw, tone: "lime" },
];

export const typeMeta = (id: ResourceType): TypeMeta =>
  RESOURCE_TYPES.find((t) => t.id === id) ?? RESOURCE_TYPES[0];

export const DIFF_META: Record<Difficulty, string> = {
  Beginner: "bg-green-50 text-green-700 border-green-200",
  Intermediate: "bg-amber-50 text-amber-700 border-amber-200",
  Advanced: "bg-rose-50 text-rose-700 border-rose-200",
};

export const GOAL_META: Record<Goal, string> = {
  Learning: "bg-sky-50 text-sky-700 border-sky-200",
  Practice: "bg-amber-50 text-amber-700 border-amber-200",
  Revision: "bg-emerald-50 text-emerald-700 border-emerald-200",
};

export const SUBJECT_ICONS: Record<string, LucideIcon> = {
  atom: Atom,
  flask: FlaskConical,
  sigma: Sigma,
  dna: Dna,
  book: BookOpen,
  calculator: Calculator,
  briefcase: Briefcase,
  trending: TrendingUp,
  code: Code2,
  monitor: MonitorSmartphone,
  landmark: Landmark,
  scale: Scale,
  globe: Globe2,
  brain: Brain,
  users: Users,
};

export const subjectIcon = (key: string): LucideIcon => SUBJECT_ICONS[key] ?? BookOpen;

/* ---------- formatters ---------- */

export const fmtDuration = (min: number | null): string => {
  if (min == null) return "—";
  if (min < 60) return `${min} min`;
  const h = Math.floor(min / 60);
  const m = min % 60;
  return m ? `${h}h ${String(m).padStart(2, "0")}m` : `${h}h`;
};

export const fmtViews = (n: number): string =>
  n >= 1000 ? `${(n / 1000).toFixed(n >= 10000 ? 0 : 1)}k` : String(n);

export const timeAgo = (iso: string): string => {
  const days = Math.max(0, Math.floor((Date.now() - new Date(iso).getTime()) / 86400000));
  if (days === 0) return "Today";
  if (days === 1) return "Yesterday";
  if (days < 7) return `${days}d ago`;
  if (days < 30) return `${Math.floor(days / 7)}w ago`;
  if (days < 365) return `${Math.floor(days / 30)}mo ago`;
  return `${Math.floor(days / 365)}y ago`;
};

export const todayISO = (): string => new Date().toISOString().slice(0, 10);

export const fmtDate = (iso: string): string =>
  new Date(`${iso}T00:00:00`).toLocaleDateString("en-IN", { day: "numeric", month: "short" });

export const uid = (): string => `${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 7)}`;

export const BarChartIcon = BarChart3;
