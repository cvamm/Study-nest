import { useState, useMemo } from "react";
import {
  Search,
  ChevronDown,
  ChevronUp,
  Scale,
  HelpCircle,
  CheckCircle2,
  XCircle,
  Eye,
  EyeOff,
  BookOpen,
  Printer,
} from "lucide-react";
import { POL_PYQ_CHAPTERS, type PyqQuestion } from "@/data/polPyqs";
import { cn } from "@/lib/utils";

interface PolPyqSectionProps {
  initialChapterNum?: number;
  lockChapter?: boolean;
  defaultOpen?: boolean;
}

export default function PolPyqSection({
  initialChapterNum = 1,
  lockChapter = false,
  defaultOpen = true,
}: PolPyqSectionProps) {
  const [selectedChapterIdx, setSelectedChapterIdx] = useState<number>(() => {
    const idx = initialChapterNum - 1;
    return idx >= 0 && idx < POL_PYQ_CHAPTERS.length ? idx : 0;
  });

  const [selectedBookFilter, setSelectedBookFilter] = useState<"all" | "partA" | "partB">("all");
  const [isSectionOpen, setIsSectionOpen] = useState(defaultOpen);
  const [showOptions, setShowOptions] = useState(true);
  const [expandedQuestionOptions, setExpandedQuestionOptions] = useState<Set<number>>(new Set());
  const [selectedFilter, setSelectedFilter] = useState<"all" | "MCQ" | "AR" | "SA" | "LA">("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [expandedSolutions, setExpandedSolutions] = useState<Set<number>>(new Set());
  const [allExpanded, setAllExpanded] = useState(false);
  const [selectedOptions, setSelectedOptions] = useState<Record<number, string>>({});

  const activeChapter = POL_PYQ_CHAPTERS[selectedChapterIdx] ?? POL_PYQ_CHAPTERS[0];

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

  const handleOptionSelect = (qId: number, option: string, isCorrect: boolean) => {
    setSelectedOptions((prev) => ({ ...prev, [qId]: option }));
    if (!isCorrect) {
      setExpandedSolutions((prev) => new Set(prev).add(qId));
    }
  };

  const toggleQuestionOptions = (id: number) => {
    setExpandedQuestionOptions((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
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

  // Filter visible chapters by Part A / Part B in chapter selection
  const displayedChapters = useMemo(() => {
    return POL_PYQ_CHAPTERS.map((ch, idx) => ({ ch, idx })).filter(({ idx }) => {
      if (selectedBookFilter === "partA") return idx < 7;
      if (selectedBookFilter === "partB") return idx >= 7;
      return true;
    });
  }, [selectedBookFilter]);

  return (
    <div className="rounded-2xl border border-rose-200/80 bg-white shadow-lift overflow-hidden">
      {/* Header Banner */}
      <div className="relative overflow-hidden bg-gradient-to-r from-rose-950 via-stone-900 to-indigo-950 p-6 text-white sm:p-8">
        <div className="bg-hero-grid absolute inset-0 opacity-20" aria-hidden="true" />
        <div
          className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full opacity-20 blur-3xl"
          style={{ background: "radial-gradient(circle, #be123c 0%, transparent 70%)" }}
          aria-hidden="true"
        />

        <div className="relative flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <div className="flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-rose-400/40 bg-rose-400/15 px-3 py-1 text-[11px] font-extrabold uppercase tracking-wider text-rose-300">
                <Scale className="h-3.5 w-3.5" />
                CBSE 750 Political Science (028) PYQ Master Bank
              </span>
              <span className="rounded-full bg-indigo-500/20 px-2.5 py-0.5 text-[11px] font-bold text-indigo-300 ring-1 ring-indigo-500/40">
                50 Questions per Chapter (15 Chapters)
              </span>
              <span className="rounded-full bg-rose-400/20 px-2.5 py-0.5 text-[11px] font-bold text-rose-300 ring-1 ring-rose-400/40">
                80 Marks Theory Pattern
              </span>
            </div>
            <h3 className="mt-3 font-display text-2xl font-extrabold tracking-tight text-white sm:text-3xl">
              {lockChapter
                ? `Chapter ${activeChapter.info.chapter_num}: ${activeChapter.info.title}`
                : "Political Science Chapterwise Board PYQ Bank"}
            </h3>
            <p className="mt-2 max-w-2xl text-xs sm:text-sm leading-relaxed text-rose-200/90">
              {activeChapter.info.book} &bull; {activeChapter.info.weightage_unit} &bull;
              Includes 25 MCQs, 5 Assertion-Reason, 10 Short Answers (2M) & 10 Long Analytical / Case Questions (6M) with verified marking schemes.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2.5">
            <a
              href="/political-science-pyq-bank.html"
              target="_blank"
              rel="noopener noreferrer"
              className="focus-ring inline-flex items-center gap-1.5 rounded-xl border border-rose-400/40 bg-rose-900/60 px-4 py-2.5 text-xs font-bold text-rose-200 shadow-sm transition-all hover:bg-rose-800/80 hover:text-white"
              title="Open full 750 questions standalone print-friendly view or export to PDF"
            >
              <Printer className="h-3.5 w-3.5" />
              <span>Print / PDF View</span>
            </a>
            <button
              type="button"
              onClick={() => setIsSectionOpen(!isSectionOpen)}
              className="focus-ring inline-flex items-center gap-2 rounded-xl bg-rose-400 px-5 py-2.5 text-xs font-extrabold text-navy-950 shadow-md transition-all hover:bg-rose-300 hover:shadow-lg active:scale-[.98]"
            >
              {isSectionOpen ? (
                <>
                  <ChevronUp className="h-3.5 w-3.5" />
                  Hide Questions
                </>
              ) : (
                <>
                  <ChevronDown className="h-3.5 w-3.5" />
                  Show PYQ Questions ({filterCounts.all})
                </>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Chapter Selection Pills (visible when not locked to a specific chapter) */}
      {!lockChapter && (
        <div className="border-b border-inkline bg-rose-50/40 p-4">
          <div className="mb-2.5 flex flex-wrap items-center justify-between gap-2">
            <div className="flex items-center gap-2">
              <span className="text-[11px] font-extrabold uppercase tracking-wider text-rose-950">
                Select Part & Chapter:
              </span>
              <div className="inline-flex rounded-lg border border-rose-300/80 bg-white p-0.5 text-[11px] font-bold">
                <button
                  type="button"
                  onClick={() => setSelectedBookFilter("all")}
                  className={cn(
                    "rounded-md px-2.5 py-0.5 transition-all",
                    selectedBookFilter === "all" ? "bg-rose-900 text-white font-extrabold" : "text-rose-900 hover:bg-rose-50",
                  )}
                >
                  All (15)
                </button>
                <button
                  type="button"
                  onClick={() => setSelectedBookFilter("partA")}
                  className={cn(
                    "rounded-md px-2.5 py-0.5 transition-all",
                    selectedBookFilter === "partA" ? "bg-rose-900 text-white font-extrabold" : "text-rose-900 hover:bg-rose-50",
                  )}
                >
                  Part A: World Politics (7)
                </button>
                <button
                  type="button"
                  onClick={() => setSelectedBookFilter("partB")}
                  className={cn(
                    "rounded-md px-2.5 py-0.5 transition-all",
                    selectedBookFilter === "partB" ? "bg-rose-900 text-white font-extrabold" : "text-rose-900 hover:bg-rose-50",
                  )}
                >
                  Part B: Politics in India (8)
                </button>
              </div>
            </div>
            <span className="text-xs font-semibold text-rose-800">
              Chapter {activeChapter.info.chapter_num} of {POL_PYQ_CHAPTERS.length} &bull; {activeChapter.info.book}
            </span>
          </div>

          <div className="flex gap-1.5 overflow-x-auto pb-1 no-scrollbar">
            {displayedChapters.map(({ ch, idx }) => {
              const active = idx === selectedChapterIdx;
              const isPartA = idx < 7;
              return (
                <button
                  key={ch.info.chapter_num}
                  type="button"
                  onClick={() => {
                    setSelectedChapterIdx(idx);
                    setIsSectionOpen(true);
                    setExpandedSolutions(new Set());
                    setAllExpanded(false);
                    setSelectedOptions({});
                  }}
                  className={cn(
                    "focus-ring shrink-0 rounded-lg px-3 py-1.5 text-xs font-bold transition-all flex items-center gap-1.5",
                    active
                      ? "bg-rose-900 text-white shadow-sm"
                      : "border border-inkline bg-white text-navy-800 hover:border-rose-300 hover:bg-rose-50",
                  )}
                >
                  <span className={cn("text-[10px] px-1 py-0.2 rounded font-extrabold uppercase", active ? "bg-rose-800 text-rose-200" : "bg-navy-100 text-navy-600")}>
                    {isPartA ? "PA" : "PB"}·{ch.info.chapter_num}
                  </span>
                  <span>{ch.info.title.length > 24 ? ch.info.title.slice(0, 24) + "..." : ch.info.title}</span>
                </button>
              );
            })}
          </div>
        </div>
      )}

      {/* Collapsed Overview CTA (when questions are hidden) */}
      {!isSectionOpen && (
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-5 bg-gradient-to-r from-rose-50/40 via-white to-rose-50/40 border-t border-inkline">
          <div className="flex items-center gap-3.5">
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-rose-100 text-rose-900 border border-rose-200">
              <Scale className="h-5 w-5" />
            </span>
            <div>
              <p className="text-sm font-extrabold text-navy-950">
                Chapter {activeChapter.info.chapter_num}: {activeChapter.info.title} ({filterCounts.all} Qs)
              </p>
              <p className="text-xs text-navy-500 font-medium mt-0.5">
                {filterCounts.MCQ} MCQs · {filterCounts.AR} Assertion-Reason · {filterCounts.SA} Short Answers (2M) · {filterCounts.LA} Long Analytical (6M)
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={() => setIsSectionOpen(true)}
            className="focus-ring inline-flex items-center gap-2 rounded-xl bg-rose-900 px-5 py-2.5 text-xs font-extrabold text-rose-100 shadow-md transition-all hover:bg-rose-800 hover:text-white hover:shadow-lg active:scale-[.98]"
          >
            <span>Show PYQ Questions ({filterCounts.all})</span>
            <ChevronDown className="h-3.5 w-3.5 text-rose-300" />
          </button>
        </div>
      )}

      {/* Questions Workspace (when expanded) */}
      {isSectionOpen && (
        <>
          {/* Filter and Search Controls */}
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-inkline bg-white p-4">
            {/* Search */}
            <div className="relative min-w-[240px] flex-1 max-w-md">
              <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-navy-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search treaties, Cold War, NAM, Emergency, Mandal, elections..."
                className="w-full rounded-xl border border-inkline bg-navy-50/50 py-2 pl-9 pr-3 text-xs text-navy-900 placeholder-navy-400 transition-colors focus:border-rose-500 focus:bg-white focus:outline-none"
              />
            </div>

            {/* Question Type Filter Pills */}
            <div className="flex flex-wrap items-center gap-1.5">
              {[
                { id: "all", label: `All (${filterCounts.all})` },
                { id: "MCQ", label: `MCQs (${filterCounts.MCQ})` },
                { id: "AR", label: `A & R (${filterCounts.AR})` },
                { id: "SA", label: `Short Answer 2M (${filterCounts.SA})` },
                { id: "LA", label: `Long Answer 6M (${filterCounts.LA})` },
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
                        ? "bg-rose-800 text-white shadow-sm"
                        : "border border-inkline bg-white text-navy-600 hover:bg-rose-50/60",
                    )}
                  >
                    {f.label}
                  </button>
                );
              })}

              {/* Options Visibility Toggle */}
              <button
                type="button"
                onClick={() => setShowOptions(!showOptions)}
                className="focus-ring inline-flex items-center gap-1.5 rounded-lg border border-inkline bg-white px-3 py-1.5 text-xs font-bold text-navy-700 transition-colors hover:border-rose-300 hover:bg-rose-50"
                title={showOptions ? "Hide options to test yourself first" : "Show all options"}
              >
                {showOptions ? <EyeOff className="h-3.5 w-3.5 text-navy-500" /> : <Eye className="h-3.5 w-3.5 text-rose-600" />}
                {showOptions ? "Hide Options" : "Show Options"}
              </button>

              <button
                type="button"
                onClick={toggleAllSolutions}
                className="focus-ring rounded-lg border border-rose-300 bg-white px-3 py-1.5 text-xs font-extrabold text-rose-800 transition-colors hover:border-rose-500 hover:bg-rose-50"
              >
                {allExpanded ? "Hide All Solutions" : "Show All Solutions"}
              </button>
            </div>
          </div>

          {/* Active Chapter Context Card */}
          <div className="bg-rose-50/50 border-b border-rose-100 px-6 py-3 flex flex-wrap items-center justify-between gap-3 text-xs text-rose-950 font-medium">
            <div className="flex items-center gap-2">
              <BookOpen className="h-4 w-4 text-rose-700 shrink-0" />
              <span>
                <strong>{activeChapter.info.book}</strong> &bull; Chapter {activeChapter.info.chapter_num}: {activeChapter.info.title}
              </span>
            </div>
            <span className="rounded-md bg-rose-100 px-2 py-0.5 text-[11px] font-bold text-rose-800">
              {activeChapter.info.weightage_unit}
            </span>
          </div>

          {/* Questions List */}
          <div className="p-4 sm:p-6 space-y-4 max-h-[750px] overflow-y-auto">
            {filteredQuestions.length === 0 ? (
              <div className="rounded-xl border border-dashed border-inkline p-8 text-center">
                <HelpCircle className="mx-auto h-8 w-8 text-rose-300" />
                <p className="mt-2 text-sm font-bold text-navy-800">No questions match your filter</p>
                <p className="mt-1 text-xs text-navy-500">Try changing the question type or clearing the search query.</p>
              </div>
            ) : (
              filteredQuestions.map((q) => {
                const isExpanded = expandedSolutions.has(q.id) || allExpanded;
                const chosenOption = selectedOptions[q.id];
                const areOptionsVisible = showOptions || expandedQuestionOptions.has(q.id);

                let badgeColor = "bg-rose-50 text-rose-700 border-rose-200";
                let typeTitle = "MCQ (1 Mark)";
                if (q.type === "AR") {
                  badgeColor = "bg-purple-50 text-purple-800 border-purple-200";
                  typeTitle = "Assertion-Reason (1 Mark)";
                } else if (q.type === "SA") {
                  badgeColor = "bg-amber-50 text-amber-800 border-amber-200";
                  typeTitle = "Short Answer (2 Marks)";
                } else if (q.type === "LA") {
                  badgeColor = "bg-emerald-50 text-emerald-800 border-emerald-200";
                  typeTitle = "Long Analytical / Case (6 Marks)";
                }

                return (
                  <div
                    key={q.id}
                    className="rounded-xl border border-inkline bg-white p-4 sm:p-5 shadow-sm transition-all hover:border-rose-300 hover:shadow-card"
                  >
                    {/* Header with question number, tag, and type */}
                    <div className="flex flex-wrap items-center justify-between gap-2 border-b border-inkline/60 pb-3">
                      <div className="flex items-center gap-2">
                        <span className="font-display text-sm font-extrabold text-navy-950">Q{q.id}.</span>
                        <span className="rounded bg-rose-50 border border-rose-200 px-2 py-0.5 text-[11px] font-bold text-rose-800">
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
                      <div className="mt-3.5">
                        {areOptionsVisible ? (
                          <div className="grid grid-cols-1 gap-2">
                            {q.options.map((opt, oIdx) => {
                              const isSelected = chosenOption === opt;
                              const cleanAnswer = q.answer.trim().toLowerCase();
                              const cleanOpt = opt.trim().toLowerCase();
                              const isCorrect = cleanAnswer.includes(cleanOpt) || (cleanAnswer.startsWith(cleanOpt.slice(0, 3)));

                              return (
                                <button
                                  key={oIdx}
                                  type="button"
                                  onClick={() => handleOptionSelect(q.id, opt, isCorrect)}
                                  className={cn(
                                    "w-full text-left rounded-lg border px-3 py-2 text-xs font-medium transition-all flex items-center justify-between",
                                    isSelected
                                      ? isCorrect
                                        ? "bg-emerald-100 border-emerald-400 text-emerald-950 font-bold"
                                        : "bg-red-50 border-red-300 text-red-950 font-bold"
                                      : isExpanded && isCorrect
                                      ? "bg-emerald-50 border-emerald-300 text-emerald-900 font-bold"
                                      : "border-inkline bg-navy-50/40 text-navy-800 hover:bg-rose-50/50 hover:border-rose-200",
                                  )}
                                >
                                  <span>{opt}</span>
                                  {isSelected && (
                                    <span>
                                      {isCorrect ? (
                                        <CheckCircle2 className="h-4 w-4 text-emerald-600 inline ml-2" />
                                      ) : (
                                        <XCircle className="h-4 w-4 text-red-600 inline ml-2" />
                                      )}
                                    </span>
                                  )}
                                </button>
                              );
                            })}
                          </div>
                        ) : (
                          <button
                            type="button"
                            onClick={() => toggleQuestionOptions(q.id)}
                            className="inline-flex items-center gap-1.5 rounded-lg border border-dashed border-rose-300 bg-rose-50/60 px-3 py-1.5 text-xs font-semibold text-rose-900 transition-colors hover:bg-rose-100/70"
                          >
                            <ChevronDown className="h-3.5 w-3.5 text-rose-700" />
                            Show Options ({q.options.length})
                          </button>
                        )}
                      </div>
                    )}

                    {/* Solution Toggle Button */}
                    <div className="mt-4 flex items-center justify-between">
                      <button
                        type="button"
                        onClick={() => toggleSolution(q.id)}
                        className="focus-ring inline-flex items-center gap-1.5 rounded-lg border border-dashed border-rose-300 bg-rose-50/60 px-3 py-1.5 text-xs font-bold text-rose-900 transition-colors hover:border-rose-500 hover:bg-rose-100/70"
                      >
                        {isExpanded ? (
                          <>
                            <ChevronUp className="h-3.5 w-3.5 text-rose-700" />
                            Hide Answer Key & Marking Scheme
                          </>
                        ) : (
                          <>
                            <ChevronDown className="h-3.5 w-3.5 text-rose-700" />
                            View Answer Key & Marking Scheme
                          </>
                        )}
                      </button>

                      <span className="text-[11px] font-semibold text-navy-400">
                        Question ID: POL-{activeChapter.info.chapter_num}-{q.id}
                      </span>
                    </div>

                    {/* Collapsible Solution Content */}
                    {isExpanded && (
                      <div className="mt-3.5 rounded-xl border border-rose-200 bg-rose-50/40 p-4 text-xs">
                        {q.answer && (
                          <div className="mb-2 flex items-baseline gap-2">
                            <span className="font-extrabold text-emerald-700">Answer:</span>
                            <span className="font-bold text-navy-900">{q.answer}</span>
                          </div>
                        )}
                        <div className="border-t border-rose-200/80 pt-2 leading-relaxed whitespace-pre-line text-navy-800">
                          {q.explanation}
                        </div>
                      </div>
                    )}
                  </div>
                );
              })
            )}

            {/* Bottom Collapse Button */}
            <div className="pt-2 pb-1 flex justify-center">
              <button
                type="button"
                onClick={() => setIsSectionOpen(false)}
                className="focus-ring inline-flex items-center gap-2 rounded-xl border border-rose-200 bg-white px-5 py-2 text-xs font-bold text-rose-900 shadow-sm hover:bg-rose-50 hover:border-rose-300 transition-all"
              >
                <ChevronUp className="h-4 w-4" />
                Collapse / Hide Questions
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
