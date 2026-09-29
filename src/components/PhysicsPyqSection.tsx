import { useState, useMemo } from "react";
import {
  Search,
  ExternalLink,
  Printer,
  ChevronDown,
  ChevronUp,
  FileCheck2,
  CheckCircle2,
  HelpCircle,
  Sparkles,
  Award,
  Layers,
  Check,
} from "lucide-react";
import { PHYSICS_PYQ_CHAPTERS, type PyqQuestion } from "@/data/physicsPyqs";
import { cn } from "@/lib/utils";

interface PhysicsPyqSectionProps {
  initialChapterNum?: number;
  lockChapter?: boolean;
}

export default function PhysicsPyqSection({
  initialChapterNum = 1,
  lockChapter = false,
}: PhysicsPyqSectionProps) {
  const [selectedChapterIdx, setSelectedChapterIdx] = useState<number>(() => {
    const idx = initialChapterNum - 1;
    return idx >= 0 && idx < PHYSICS_PYQ_CHAPTERS.length ? idx : 0;
  });

  const [selectedFilter, setSelectedFilter] = useState<"all" | "MCQ" | "AR" | "SA" | "LA">("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [expandedSolutions, setExpandedSolutions] = useState<Set<number>>(new Set());
  const [allExpanded, setAllExpanded] = useState(false);

  const activeChapter = PHYSICS_PYQ_CHAPTERS[selectedChapterIdx] ?? PHYSICS_PYQ_CHAPTERS[0];

  const filteredQuestions = useMemo(() => {
    let list = activeChapter.questions;

    if (selectedFilter !== "all") {
      list = list.filter((q) => q.type === selectedFilter);
    }

    const q = searchQuery.trim().toLowerCase();
    if (q) {
      list = list.filter(
        (item) =>
          item.question.toLowerCase().includes(q) ||
          item.explanation.toLowerCase().includes(q) ||
          item.tag.toLowerCase().includes(q) ||
          (item.options && item.options.some((opt) => opt.toLowerCase().includes(q))),
      );
    }

    return list;
  }, [activeChapter, selectedFilter, searchQuery]);

  const toggleSolution = (id: number) => {
    setExpandedSolutions((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  };

  const toggleAllSolutions = () => {
    if (allExpanded) {
      setExpandedSolutions(new Set());
      setAllExpanded(false);
    } else {
      const allIds = new Set(filteredQuestions.map((q) => q.id));
      setExpandedSolutions(allIds);
      setAllExpanded(true);
    }
  };

  const filterCounts = useMemo(() => {
    const qs = activeChapter.questions;
    return {
      all: qs.length,
      MCQ: qs.filter((q) => q.type === "MCQ").length,
      AR: qs.filter((q) => q.type === "AR").length,
      SA: qs.filter((q) => q.type === "SA").length,
      LA: qs.filter((q) => q.type === "LA").length,
    };
  }, [activeChapter]);

  return (
    <div className="rounded-2xl border border-navy-200/80 bg-white shadow-lift overflow-hidden">
      {/* Header Banner */}
      <div className="relative overflow-hidden bg-gradient-to-r from-navy-950 via-navy-900 to-navy-950 p-6 text-white sm:p-8">
        <div className="bg-hero-grid absolute inset-0 opacity-20" aria-hidden="true" />
        <div
          className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full opacity-15 blur-3xl"
          style={{ background: "radial-gradient(circle, #f5b93b 0%, transparent 70%)" }}
          aria-hidden="true"
        />

        <div className="relative flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <div className="flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-gold-400/40 bg-gold-400/15 px-3 py-1 text-[11px] font-extrabold uppercase tracking-wider text-gold-300">
                <Award className="h-3.5 w-3.5" />
                CBSE 700 PYQ Master Question Bank
              </span>
              <span className="rounded-full bg-emerald-500/20 px-2.5 py-0.5 text-[11px] font-bold text-emerald-300 ring-1 ring-emerald-500/40">
                50 Questions per Chapter
              </span>
            </div>
            <h3 className="mt-3 font-display text-2xl font-extrabold tracking-tight text-white sm:text-3xl">
              {lockChapter
                ? `Chapter ${activeChapter.info.chapter_num}: ${activeChapter.info.title}`
                : "Physics Chapterwise Board PYQ Bank"}
            </h3>
            <p className="mt-2 max-w-2xl text-xs sm:text-sm leading-relaxed text-navy-200">
              Unit {activeChapter.info.unit_num}: {activeChapter.info.unit_title} ({activeChapter.info.weightage_unit}) ·
              Includes 25 MCQs, 5 Assertion-Reason, 10 Short Answers & 10 Long Answers / Case Studies with official marking schemes.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2.5">
            <a
              href="/physics-pyq-bank.html"
              target="_blank"
              rel="noopener noreferrer"
              className="focus-ring inline-flex items-center gap-2 rounded-xl bg-gold-400 px-4 py-2.5 text-xs font-extrabold text-navy-950 shadow-md transition-all hover:bg-gold-300 hover:shadow-lg active:scale-[.98]"
            >
              <ExternalLink className="h-3.5 w-3.5" />
              Open Standalone Bank
            </a>
            <button
              type="button"
              onClick={() => window.open("/physics-pyq-bank.html", "_blank")}
              className="focus-ring inline-flex items-center gap-1.5 rounded-xl border border-navy-700 bg-navy-800/80 px-3.5 py-2.5 text-xs font-bold text-navy-200 transition-colors hover:border-navy-600 hover:bg-navy-800 hover:text-white"
            >
              <Printer className="h-3.5 w-3.5" />
              Print Version
            </button>
          </div>
        </div>
      </div>

      {/* Chapter Selection Pills (visible when not locked to a specific chapter) */}
      {!lockChapter && (
        <div className="border-b border-inkline bg-navy-50/70 p-4">
          <div className="mb-2 flex items-center justify-between">
            <span className="text-[11px] font-extrabold uppercase tracking-wider text-navy-500">
              Select Chapter (1 to 14):
            </span>
            <span className="text-xs font-semibold text-navy-400">
              Chapter {activeChapter.info.chapter_num} of {PHYSICS_PYQ_CHAPTERS.length}
            </span>
          </div>
          <div className="flex gap-1.5 overflow-x-auto pb-1 no-scrollbar">
            {PHYSICS_PYQ_CHAPTERS.map((ch, idx) => {
              const active = idx === selectedChapterIdx;
              return (
                <button
                  key={ch.info.chapter_num}
                  type="button"
                  onClick={() => {
                    setSelectedChapterIdx(idx);
                    setExpandedSolutions(new Set());
                    setAllExpanded(false);
                  }}
                  className={cn(
                    "focus-ring shrink-0 rounded-lg px-3 py-1.5 text-xs font-bold transition-all",
                    active
                      ? "bg-navy-900 text-white shadow-sm"
                      : "border border-inkline bg-white text-navy-600 hover:border-navy-300 hover:bg-navy-50",
                  )}
                >
                  Ch {ch.info.chapter_num}: {ch.info.title.split(" ")[0]}
                </button>
              );
            })}
          </div>
        </div>
      )}

      {/* Filter and Search Controls */}
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-inkline bg-white p-4">
        {/* Search */}
        <div className="relative min-w-[240px] flex-1 max-w-md">
          <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-navy-400" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search questions, formulas, terms (e.g. Gauss, Drift, Lens)..."
            className="w-full rounded-xl border border-inkline bg-navy-50/50 py-2 pl-9 pr-3 text-xs text-navy-900 placeholder-navy-400 transition-colors focus:border-navy-400 focus:bg-white focus:outline-none"
          />
        </div>

        {/* Question Type Filter Pills */}
        <div className="flex flex-wrap items-center gap-1.5">
          {[
            { id: "all", label: `All (${filterCounts.all})` },
            { id: "MCQ", label: `MCQs (${filterCounts.MCQ})` },
            { id: "AR", label: `Assertion-Reason (${filterCounts.AR})` },
            { id: "SA", label: `Short Answer (${filterCounts.SA})` },
            { id: "LA", label: `Long / Case (${filterCounts.LA})` },
          ].map((f) => {
            const active = selectedFilter === f.id;
            return (
              <button
                key={f.id}
                type="button"
                onClick={() => setSelectedFilter(f.id as any)}
                className={cn(
                  "focus-ring rounded-lg px-3 py-1.5 text-xs font-bold transition-all",
                  active
                    ? "bg-navy-900 text-white shadow-sm"
                    : "border border-inkline bg-white text-navy-600 hover:bg-navy-50",
                )}
              >
                {f.label}
              </button>
            );
          })}

          <button
            type="button"
            onClick={toggleAllSolutions}
            className="focus-ring ml-2 rounded-lg border border-navy-200 bg-white px-3 py-1.5 text-xs font-extrabold text-navy-700 transition-colors hover:border-navy-400 hover:bg-navy-50"
          >
            {allExpanded ? "Hide All Solutions" : "Show All Solutions"}
          </button>
        </div>
      </div>

      {/* Questions List */}
      <div className="p-4 sm:p-6 space-y-4 max-h-[750px] overflow-y-auto">
        {filteredQuestions.length === 0 ? (
          <div className="rounded-xl border border-dashed border-inkline p-8 text-center">
            <HelpCircle className="mx-auto h-8 w-8 text-navy-300" />
            <p className="mt-2 text-sm font-bold text-navy-800">No questions match your filter</p>
            <p className="mt-1 text-xs text-navy-500">Try changing the question type or clearing the search query.</p>
          </div>
        ) : (
          filteredQuestions.map((q) => {
            const isExpanded = expandedSolutions.has(q.id) || allExpanded;

            let badgeColor = "bg-blue-50 text-blue-700 border-blue-200";
            let typeTitle = "MCQ (1 Mark)";
            if (q.type === "AR") {
              badgeColor = "bg-amber-50 text-amber-800 border-amber-200";
              typeTitle = "Assertion-Reason (1 Mark)";
            } else if (q.type === "SA") {
              badgeColor = "bg-emerald-50 text-emerald-800 border-emerald-200";
              typeTitle = "Short Answer (2–3 Marks)";
            } else if (q.type === "LA") {
              badgeColor = "bg-purple-50 text-purple-800 border-purple-200";
              typeTitle = "Long Answer / Case (4–5 Marks)";
            }

            return (
              <div
                key={q.id}
                className="rounded-xl border border-inkline bg-white p-4 sm:p-5 shadow-sm transition-all hover:border-navy-300 hover:shadow-card"
              >
                {/* Header with question number, tag, and type */}
                <div className="flex flex-wrap items-center justify-between gap-2 border-b border-inkline/60 pb-3">
                  <div className="flex items-center gap-2">
                    <span className="font-display text-sm font-extrabold text-navy-900">Q{q.id}.</span>
                    <span className="rounded bg-navy-100 px-2 py-0.5 text-[11px] font-bold text-navy-700">
                      {q.tag}
                    </span>
                  </div>
                  <span className={cn("rounded-md border px-2 py-0.5 text-[11px] font-extrabold uppercase", badgeColor)}>
                    {typeTitle}
                  </span>
                </div>

                {/* Question Body */}
                <p className="mt-3 whitespace-pre-line text-sm font-semibold leading-relaxed text-navy-900">
                  {q.question}
                </p>

                {/* Multiple Choice Options Grid */}
                {q.options && q.options.length > 0 && (
                  <div className="mt-3.5 grid grid-cols-1 gap-2 sm:grid-cols-2">
                    {q.options.map((opt, oIdx) => (
                      <div
                        key={oIdx}
                        className="rounded-lg border border-inkline bg-navy-50/40 px-3 py-2 text-xs font-medium text-navy-800"
                      >
                        {opt}
                      </div>
                    ))}
                  </div>
                )}

                {/* Solution Toggle Button */}
                <div className="mt-4 flex items-center justify-between">
                  <button
                    type="button"
                    onClick={() => toggleSolution(q.id)}
                    className="focus-ring inline-flex items-center gap-1.5 rounded-lg border border-dashed border-navy-300 bg-navy-50/60 px-3 py-1.5 text-xs font-bold text-navy-700 transition-colors hover:border-navy-500 hover:bg-navy-100/70"
                  >
                    {isExpanded ? (
                      <>
                        <ChevronUp className="h-3.5 w-3.5 text-navy-500" />
                        Hide Solution
                      </>
                    ) : (
                      <>
                        <ChevronDown className="h-3.5 w-3.5 text-navy-500" />
                        Show Answer & Marking Scheme
                      </>
                    )}
                  </button>
                </div>

                {/* Solution Box */}
                {isExpanded && (
                  <div className="mt-3.5 animate-fade-up rounded-xl border-l-4 border-l-emerald-500 border-emerald-200 bg-emerald-50/60 p-4 text-xs leading-relaxed text-emerald-950">
                    <p className="font-extrabold text-emerald-800">
                      Correct Answer / Key: <span className="font-bold text-emerald-900">{q.answer}</span>
                    </p>
                    <div className="mt-2 border-t border-emerald-200/80 pt-2">
                      <p className="font-extrabold text-[11px] uppercase tracking-wider text-emerald-700">
                        Detailed Solution & Marking Scheme:
                      </p>
                      <p className="mt-1 whitespace-pre-line text-xs font-medium text-emerald-900 leading-relaxed font-sans">
                        {q.explanation}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            );
          })
        )}
      </div>

      {/* Footer Info */}
      <div className="flex flex-wrap items-center justify-between gap-3 border-t border-inkline bg-navy-50/60 px-6 py-3.5 text-xs font-semibold text-navy-600">
        <span>Showing {filteredQuestions.length} of 50 questions for this chapter</span>
        <a
          href="/physics-pyq-bank.html"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 text-xs font-bold text-navy-800 underline underline-offset-2 hover:text-navy-950"
        >
          Open printable 700-question master document
          <ExternalLink className="h-3 w-3" />
        </a>
      </div>
    </div>
  );
}
