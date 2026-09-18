import { useMemo } from "react";
import { Link, Navigate, useParams } from "react-router-dom";
import {
  ArrowRight,
  Check,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  Circle,
  Clock,
  Layers,
  Library,
} from "lucide-react";
import AnimatedBar from "@/components/AnimatedBar";
import EmptyState from "@/components/EmptyState";
import Reveal from "@/components/Reveal";
import ResourceCard from "@/components/ResourceCard";
import { useApp } from "@/context/AppContext";
import { subjectById } from "@/data/subjects";
import { cn, fmtDuration, RESOURCE_TYPES, subjectIcon, TONES } from "@/lib/utils";

function Crumbs({ items }: { items: Array<{ label: string; to?: string }> }) {
  return (
    <nav aria-label="Breadcrumb" className="flex flex-wrap items-center gap-1.5 text-xs font-bold text-navy-400">
      {items.map((item, i) => (
        <span key={i} className="flex items-center gap-1.5">
          {i > 0 ? <ChevronRight className="h-3 w-3 text-navy-300" /> : null}
          {item.to ? (
            <Link to={item.to} className="focus-ring rounded-sm transition-colors hover:text-navy-800">
              {item.label}
            </Link>
          ) : (
            <span className="text-navy-700">{item.label}</span>
          )}
        </span>
      ))}
    </nav>
  );
}

/* ================================ SUBJECT ================================ */

export function SubjectPage() {
  const { subjectId } = useParams();
  const { resources, completed, isChapterDone, toggleChapter } = useApp();
  const subject = subjectById(subjectId);

  const subjectResources = useMemo(
    () => resources.filter((r) => r.subjectId === subjectId),
    [resources, subjectId],
  );

  const topLevel = subjectResources.filter((r) => !r.chapterId);

  const chapterCounts = useMemo(() => {
    const map = new Map<string, number>();
    subjectResources.forEach((r) => {
      if (r.chapterId) map.set(r.chapterId, (map.get(r.chapterId) ?? 0) + 1);
    });
    return map;
  }, [subjectResources]);

  const typesPresent = useMemo(
    () => RESOURCE_TYPES.filter((t) => subjectResources.some((r) => r.type === t.id)),
    [subjectResources],
  );

  if (!subject) return <Navigate to="/subjects" replace />;

  const Icon = subjectIcon(subject.icon);
  const tone = TONES[subject.tone];
  const doneCount = subject.chapters.filter((c) => completed.includes(`${subject.id}/${c.id}`)).length;
  const pct = Math.round((doneCount / subject.chapters.length) * 100);
  const totalMin = subjectResources.reduce((acc, r) => acc + (r.duration ?? 0), 0);

  return (
    <>
      <section className="relative overflow-hidden border-b border-inkline bg-white">
        <Icon className="pointer-events-none absolute -right-10 -top-12 h-72 w-72 text-navy-900/[0.05]" aria-hidden="true" />
        <div className="container-x relative py-10 lg:py-14">
          <Crumbs items={[{ label: "Subjects", to: "/subjects" }, { label: subject.name }]} />
          <div className="mt-6 flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <div className="flex items-start gap-5">
              <span className={cn("flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl border", tone.chip)}>
                <Icon className="h-8 w-8" />
              </span>
              <div>
                <h1 className="font-display text-3xl font-extrabold tracking-tight text-navy-900 sm:text-4xl">{subject.name}</h1>
                <p className="mt-2 max-w-xl text-sm leading-relaxed text-navy-500 sm:text-base">{subject.tagline}</p>
              </div>
            </div>
            <div className="w-full max-w-xs">
              <div className="flex items-center justify-between text-xs font-extrabold uppercase tracking-wide">
                <span className="text-navy-400">Chapters completed</span>
                <span className={pct === 100 ? "text-green-600" : "text-navy-800"}>{pct}%</span>
              </div>
              <AnimatedBar
                className="mt-2 h-2"
                pct={Math.max(pct, doneCount > 0 ? 4 : 0)}
                barClass={pct === 100 ? "bg-green-500" : tone.bar}
              />
              <p className="mt-1.5 text-[11px] font-bold text-navy-400">
                {doneCount} of {subject.chapters.length} chapters · {subjectResources.length} resources · {fmtDuration(totalMin)} video
              </p>
            </div>
          </div>

          {typesPresent.length > 0 ? (
            <div className="mt-7 flex flex-wrap items-center gap-1.5">
              <span className="mr-1 text-[10.5px] font-extrabold uppercase tracking-[0.14em] text-navy-400">Available:</span>
              {typesPresent.map((t) => {
                const tt = TONES[t.tone];
                return (
                  <Link
                    key={t.id}
                    to={`/resources?subject=${subject.id}&types=${t.id}`}
                    className={cn("focus-ring inline-flex items-center gap-1 rounded-md border px-2 py-1 text-[11px] font-bold transition-transform hover:-translate-y-0.5", tt.chip)}
                  >
                    <t.icon className="h-3 w-3" />
                    {t.short}
                  </Link>
                );
              })}
              <Link to={`/resources?subject=${subject.id}`} className="focus-ring ml-1 inline-flex items-center gap-1 rounded-md border border-inkline bg-white px-2 py-1 text-[11px] font-bold text-navy-600 transition-colors hover:border-navy-300">
                All {subject.short} resources
                <ArrowRight className="h-3 w-3" />
              </Link>
            </div>
          ) : null}
        </div>
      </section>

      <section className="container-x py-12">
        <Reveal>
          <div className="flex items-center gap-3">
            <h2 className="font-display text-2xl font-extrabold tracking-tight text-navy-900">Chapters</h2>
            <span className="rounded-full bg-navy-100 px-2.5 py-0.5 text-xs font-extrabold text-navy-700">{subject.chapters.length}</span>
          </div>
          <p className="mt-1 text-sm text-navy-500">Open a chapter for its resources, or tick it off as you go.</p>
        </Reveal>

        <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
          {subject.chapters.map((ch, i) => {
            const done = isChapterDone(subject.id, ch.id);
            const count = chapterCounts.get(ch.id) ?? 0;
            return (
              <Reveal key={ch.id} delay={(i % 2) * 60}>
                <div
                  className={cn(
                    "card-hover group relative flex items-center gap-4 rounded-xl border bg-white p-4 pr-3 shadow-card",
                    done ? "border-green-200 bg-green-50/40" : "border-inkline",
                  )}
                >
                  <span
                    className={cn(
                      "flex h-10 w-10 shrink-0 items-center justify-center rounded-lg font-display text-sm font-extrabold",
                      done ? "bg-green-100 text-green-700" : cn("border", tone.chip),
                    )}
                  >
                    {done ? <Check className="h-5 w-5" /> : String(i + 1).padStart(2, "0")}
                  </span>
                  <Link to={`/subjects/${subject.id}/${ch.id}`} className="focus-ring absolute inset-0 rounded-xl" aria-label={`Open chapter ${i + 1}: ${ch.name}`}>
                    <span className="sr-only">Open chapter</span>
                  </Link>
                  <div className="min-w-0 flex-1">
                    <p className={cn("truncate font-display text-sm font-bold", done ? "text-green-900" : "text-navy-900")}>
                      {ch.name}
                    </p>
                    <p className="mt-0.5 flex items-center gap-2 text-[11px] font-bold text-navy-400">
                      <span className="inline-flex items-center gap-1">
                        <Library className="h-3 w-3" />
                        {count} {count === 1 ? "resource" : "resources"}
                      </span>
                      {done ? <span className="text-green-600">Completed</span> : null}
                    </p>
                  </div>
                  <button
                    type="button"
                    aria-label={done ? `Mark "${ch.name}" as not completed` : `Mark "${ch.name}" as completed`}
                    onClick={() => toggleChapter(subject.id, ch.id, ch.name)}
                    className={cn(
                      "focus-ring relative z-10 rounded-lg p-2 transition-all",
                      done ? "text-green-600 hover:bg-green-100" : "text-navy-300 hover:bg-navy-50 hover:text-navy-700",
                    )}
                  >
                    {done ? <CheckCircle2 className="h-5.5 w-5.5 fill-green-100" /> : <Circle className="h-5.5 w-5.5" />}
                  </button>
                  <ChevronRight className="pointer-events-none relative z-10 h-4 w-4 shrink-0 text-navy-300 transition-transform group-hover:translate-x-0.5" />
                </div>
              </Reveal>
            );
          })}
        </div>
      </section>

      {topLevel.length > 0 ? (
        <section className="container-x pb-16">
          <Reveal>
            <div className="flex items-center gap-3">
              <h2 className="font-display text-2xl font-extrabold tracking-tight text-navy-900">Full-subject resources</h2>
              <span className="rounded-full bg-navy-100 px-2.5 py-0.5 text-xs font-extrabold text-navy-700">{topLevel.length}</span>
            </div>
            <p className="mt-1 text-sm text-navy-500">Sample papers, PYQ banks and full-syllabus material for {subject.name}.</p>
          </Reveal>
          <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
            {topLevel.map((r, i) => (
              <Reveal key={r.id} delay={(i % 3) * 60}>
                <ResourceCard resource={r} />
              </Reveal>
            ))}
          </div>
        </section>
      ) : null}
    </>
  );
}

/* ================================ CHAPTER ================================ */

export function ChapterPage() {
  const { subjectId, chapterId } = useParams();
  const { resources, isChapterDone, toggleChapter } = useApp();
  const subject = subjectById(subjectId);
  const chapter = subject?.chapters.find((c) => c.id === chapterId);

  const chapterResources = useMemo(
    () => resources.filter((r) => r.subjectId === subjectId && r.chapterId === chapterId),
    [resources, subjectId, chapterId],
  );

  if (!subject) return <Navigate to="/subjects" replace />;
  if (!chapter) return <Navigate to={`/subjects/${subject.id}`} replace />;

  const index = subject.chapters.findIndex((c) => c.id === chapter.id);
  const prev = subject.chapters[index - 1];
  const next = subject.chapters[index + 1];
  const done = isChapterDone(subject.id, chapter.id);
  const Icon = subjectIcon(subject.icon);
  const tone = TONES[subject.tone];
  const totalMin = chapterResources.reduce((acc, r) => acc + (r.duration ?? 0), 0);

  const groups = RESOURCE_TYPES.map((t) => ({
    type: t,
    items: chapterResources.filter((r) => r.type === t.id),
  })).filter((g) => g.items.length > 0);

  return (
    <>
      <section className={cn("relative overflow-hidden border-b", tone.border, tone.soft)}>
        <span
          className="text-outline pointer-events-none absolute -bottom-10 right-2 hidden select-none font-display text-[10rem] font-extrabold leading-none sm:block"
          aria-hidden="true"
        >
          {String(index + 1).padStart(2, "0")}
        </span>
        <div className="container-x relative py-10 lg:py-12">
          <Crumbs
            items={[
              { label: "Subjects", to: "/subjects" },
              { label: subject.name, to: `/subjects/${subject.id}` },
              { label: `Chapter ${index + 1}` },
            ]}
          />
          <div className="mt-6 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div className="flex items-start gap-4">
              <span className={cn("flex h-14 w-14 shrink-0 items-center justify-center rounded-xl border bg-white/70", tone.chip)}>
                <Icon className="h-6.5 w-6.5" />
              </span>
              <div>
                <p className={cn("text-[11px] font-extrabold uppercase tracking-[0.18em]", tone.text)}>
                  {subject.name} · Chapter {index + 1} of {subject.chapters.length}
                </p>
                <h1 className="mt-1.5 max-w-2xl font-display text-2xl font-extrabold tracking-tight text-navy-950 sm:text-3xl">
                  {chapter.name}
                </h1>
                <p className="mt-2.5 flex flex-wrap items-center gap-x-4 gap-y-1 text-xs font-bold text-navy-500">
                  <span className="inline-flex items-center gap-1.5">
                    <Layers className="h-3.5 w-3.5" />
                    {chapterResources.length} resources
                  </span>
                  {totalMin > 0 ? (
                    <span className="inline-flex items-center gap-1.5">
                      <Clock className="h-3.5 w-3.5" />
                      {fmtDuration(totalMin)} of video content
                    </span>
                  ) : null}
                  <span>{groups.length} of {RESOURCE_TYPES.length} categories filled</span>
                </p>
              </div>
            </div>
            <button
              type="button"
              onClick={() => toggleChapter(subject.id, chapter.id, chapter.name)}
              aria-pressed={done}
              className={cn(
                "focus-ring inline-flex w-fit shrink-0 items-center gap-2 rounded-lg px-5 py-2.5 text-sm font-bold transition-all active:scale-[.98]",
                done
                  ? "bg-green-600 text-white hover:bg-green-700"
                  : "bg-navy-900 text-white hover:bg-navy-700",
              )}
            >
              {done ? <CheckCircle2 className="h-4.5 w-4.5" /> : <Circle className="h-4.5 w-4.5" />}
              {done ? "Chapter completed" : "Mark as completed"}
            </button>
          </div>
        </div>
      </section>

      <section className="container-x py-12">
        {groups.length === 0 ? (
          <EmptyState
            title={`No resources for this chapter yet`}
            body="This is a demo directory, and this chapter hasn't been stocked with sample resources. Check full-subject material or browse everything available."
            action={
              <div className="flex flex-wrap justify-center gap-3">
                <Link to={`/subjects/${subject.id}`} className="btn-navy">
                  <ChevronLeft className="h-4 w-4" />
                  Back to {subject.name}
                </Link>
                <Link to={`/resources?subject=${subject.id}`} className="btn-ghost">
                  All {subject.short} resources
                </Link>
              </div>
            }
          />
        ) : (
          <div className="space-y-12">
            {groups.map((g) => (
              <Reveal key={g.type.id}>
                <div>
                  <div className="flex flex-wrap items-center gap-3">
                    <span className={cn("flex h-9 w-9 items-center justify-center rounded-lg border", TONES[g.type.tone].chip)}>
                      <g.type.icon className="h-4.5 w-4.5" />
                    </span>
                    <h2 className="font-display text-xl font-extrabold tracking-tight text-navy-900">{g.type.label}</h2>
                    <span className="rounded-full bg-navy-100 px-2.5 py-0.5 text-xs font-extrabold text-navy-700">{g.items.length}</span>
                    <Link
                      to={`/resources?subject=${subject.id}&chapter=${chapter.id}&types=${g.type.id}`}
                      className="focus-ring ml-auto inline-flex items-center gap-1 rounded-md text-xs font-bold text-navy-500 transition-colors hover:text-navy-900"
                    >
                      Filter view
                      <ArrowRight className="h-3.5 w-3.5" />
                    </Link>
                  </div>
                  <div className="mt-5 grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
                    {g.items.map((r) => (
                      <ResourceCard key={r.id} resource={r} />
                    ))}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        )}

        {/* prev / next */}
        <div className="mt-14 grid grid-cols-1 gap-3 border-t border-inkline pt-8 sm:grid-cols-2">
          {prev ? (
            <Link to={`/subjects/${subject.id}/${prev.id}`} className="card-hover focus-ring group flex items-center gap-3 rounded-xl border border-inkline bg-white p-4 shadow-card">
              <ChevronLeft className="h-5 w-5 shrink-0 text-navy-300 transition-transform group-hover:-translate-x-0.5" />
              <span className="min-w-0">
                <span className="block text-[10.5px] font-extrabold uppercase tracking-[0.14em] text-navy-400">Previous chapter</span>
                <span className="block truncate font-display text-sm font-bold text-navy-900">{index}. {prev.name}</span>
              </span>
            </Link>
          ) : (
            <span />
          )}
          {next ? (
            <Link to={`/subjects/${subject.id}/${next.id}`} className="card-hover focus-ring group flex items-center justify-end gap-3 rounded-xl border border-inkline bg-white p-4 text-right shadow-card sm:col-start-2">
              <span className="min-w-0">
                <span className="block text-[10.5px] font-extrabold uppercase tracking-[0.14em] text-navy-400">Next chapter</span>
                <span className="block truncate font-display text-sm font-bold text-navy-900">{index + 2}. {next.name}</span>
              </span>
              <ChevronRight className="h-5 w-5 shrink-0 text-navy-300 transition-transform group-hover:translate-x-0.5" />
            </Link>
          ) : null}
        </div>
      </section>
    </>
  );
}
