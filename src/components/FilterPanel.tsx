import { Check, RotateCcw, Search } from "lucide-react";
import type { Difficulty, Goal, Language } from "@/lib/types";
import { SUBJECTS, subjectById } from "@/data/subjects";
import { cn, GOAL_META, RESOURCE_TYPES, TONES } from "@/lib/utils";

export interface Filters {
  q: string;
  subject: string;
  chapter: string;
  types: string[];
  langs: string[];
  diffs: string[];
  goals: string[];
  sort: string;
}

export const EMPTY_FILTERS: Filters = {
  q: "",
  subject: "",
  chapter: "",
  types: [],
  langs: [],
  diffs: [],
  goals: [],
  sort: "recommended",
};

export const countActive = (f: Filters): number =>
  (f.q ? 1 : 0) +
  (f.subject ? 1 : 0) +
  (f.chapter ? 1 : 0) +
  f.types.length +
  f.langs.length +
  f.diffs.length +
  f.goals.length +
  (f.sort !== "recommended" ? 1 : 0);

const LANGS: Language[] = ["English", "Hindi", "Hinglish"];
const DIFFS: Difficulty[] = ["Beginner", "Intermediate", "Advanced"];
const GOALS: Goal[] = ["Learning", "Practice", "Revision"];

function Chip({
  active,
  onClick,
  children,
  className,
}: {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <button
      type="button"
      aria-pressed={active}
      onClick={onClick}
      className={cn(
        "focus-ring inline-flex items-center gap-1 rounded-lg border px-2.5 py-1.5 text-[11.5px] font-bold transition-all duration-150",
        active
          ? className ?? "border-navy-900 bg-navy-900 text-white shadow-sm"
          : "border-inkline bg-white text-navy-500 hover:border-navy-200 hover:text-navy-800",
      )}
    >
      {active ? <Check className="h-3 w-3" /> : null}
      {children}
    </button>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h4 className="mb-2 text-[10.5px] font-extrabold uppercase tracking-[0.14em] text-navy-400">{title}</h4>
      {children}
    </div>
  );
}

export default function FilterPanel({
  filters,
  onChange,
  onClear,
}: {
  filters: Filters;
  onChange: (patch: Partial<Filters>) => void;
  onClear: () => void;
}) {
  const toggle = (list: string[], v: string) =>
    list.includes(v) ? list.filter((x) => x !== v) : [...list, v];

  const activeChapterSubject = subjectById(filters.subject);
  const active = countActive(filters);

  return (
    <div className="space-y-6">
      <div className="relative">
        <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-navy-300" />
        <input
          type="search"
          value={filters.q}
          onChange={(e) => onChange({ q: e.target.value, chapter: "" })}
          placeholder="Search titles, chapters, channels…"
          aria-label="Search resources"
          className="input-base pl-9"
        />
      </div>

      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-1">
        <div>
          <label htmlFor="f-subject" className="mb-1.5 block text-[10.5px] font-extrabold uppercase tracking-[0.14em] text-navy-400">
            Subject
          </label>
          <select
            id="f-subject"
            value={filters.subject}
            onChange={(e) => onChange({ subject: e.target.value, chapter: "" })}
            className="input-base"
          >
            <option value="">All subjects</option>
            {SUBJECTS.map((s) => (
              <option key={s.id} value={s.id}>
                {s.name}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="f-chapter" className="mb-1.5 block text-[10.5px] font-extrabold uppercase tracking-[0.14em] text-navy-400">
            Chapter
          </label>
          <select
            id="f-chapter"
            value={filters.chapter}
            onChange={(e) => onChange({ chapter: e.target.value })}
            disabled={!activeChapterSubject}
            className="input-base disabled:cursor-not-allowed disabled:bg-navy-50/60 disabled:text-navy-300"
          >
            <option value="">{activeChapterSubject ? "All chapters" : "Select a subject first"}</option>
            {activeChapterSubject?.chapters.map((c, i) => (
              <option key={c.id} value={c.id}>
                {i + 1}. {c.name}
              </option>
            ))}
          </select>
        </div>
      </div>

      <Section title="Resource type">
        <div className="flex flex-wrap gap-1.5">
          {RESOURCE_TYPES.map((t) => {
            const tone = TONES[t.tone];
            const isActive = filters.types.includes(t.id);
            return (
              <Chip
                key={t.id}
                active={isActive}
                onClick={() => onChange({ types: toggle(filters.types, t.id) })}
                className={cn("border-transparent text-white shadow-sm", tone.solid)}
              >
                {t.short}
              </Chip>
            );
          })}
        </div>
      </Section>

      <Section title="Language">
        <div className="flex flex-wrap gap-1.5">
          {LANGS.map((l) => (
            <Chip key={l} active={filters.langs.includes(l)} onClick={() => onChange({ langs: toggle(filters.langs, l) })}>
              {l}
            </Chip>
          ))}
        </div>
      </Section>

      <Section title="Difficulty">
        <div className="flex flex-wrap gap-1.5">
          {DIFFS.map((d) => (
            <Chip key={d} active={filters.diffs.includes(d)} onClick={() => onChange({ diffs: toggle(filters.diffs, d) })}>
              {d}
            </Chip>
          ))}
        </div>
      </Section>

      <Section title="Preparation goal">
        <div className="flex flex-wrap gap-1.5">
          {GOALS.map((g) => {
            const isActive = filters.goals.includes(g);
            return (
              <Chip
                key={g}
                active={isActive}
                onClick={() => onChange({ goals: toggle(filters.goals, g) })}
                className={cn(
                  "border-transparent shadow-sm",
                  GOAL_META[g].replace("border-", "border ").split(" ").filter((x) => x.startsWith("bg-") || x.startsWith("text-")).join(" "),
                )}
              >
                {g}
              </Chip>
            );
          })}
        </div>
      </Section>

      <div>
        <label htmlFor="f-sort" className="mb-1.5 block text-[10.5px] font-extrabold uppercase tracking-[0.14em] text-navy-400">
          Sort by
        </label>
        <select id="f-sort" value={filters.sort} onChange={(e) => onChange({ sort: e.target.value })} className="input-base">
          <option value="recommended">Recommended first</option>
          <option value="newest">Newest first</option>
          <option value="duration">Shortest duration</option>
          <option value="popular">Most viewed</option>
        </select>
      </div>

      <button
        type="button"
        onClick={onClear}
        disabled={active === 0}
        className="focus-ring inline-flex w-full items-center justify-center gap-1.5 rounded-lg border border-dashed border-navy-200 px-3 py-2 text-xs font-bold text-navy-500 transition-colors hover:border-navy-300 hover:text-navy-800 disabled:cursor-not-allowed disabled:opacity-40"
      >
        <RotateCcw className="h-3.5 w-3.5" />
        Clear all filters {active > 0 ? `(${active})` : ""}
      </button>
    </div>
  );
}
