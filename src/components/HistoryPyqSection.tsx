import { useState, useMemo } from "react";
import {
  Search,
  ChevronDown,
  ChevronUp,
  Landmark,
  Scroll,
  MapPin,
  HelpCircle,
  CheckCircle2,
  XCircle,
  Eye,
  EyeOff,
  BookOpen,
  Compass,
  Printer,
} from "lucide-react";
import { HISTORY_PYQ_CHAPTERS, type HistoryPyqQuestion } from "@/data/historyPyqs";
import { cn } from "@/lib/utils";

interface HistoryPyqSectionProps {
  initialChapterNum?: number;
  lockChapter?: boolean;
  defaultOpen?: boolean;
}

export default function HistoryPyqSection({
  initialChapterNum = 1,
  lockChapter = false,
  defaultOpen = true,
}: HistoryPyqSectionProps) {
  const [selectedChapterIdx, setSelectedChapterIdx] = useState<number>(() => {
    const idx = initialChapterNum - 1;
    return idx >= 0 && idx < HISTORY_PYQ_CHAPTERS.length ? idx : 0;
  });

  const [selectedPartFilter, setSelectedPartFilter] = useState<"all" | "part1" | "part2" | "part3" | "map">("all");
  const [isSectionOpen, setIsSectionOpen] = useState(defaultOpen);
  const [showOptions, setShowOptions] = useState(true);
  const [expandedQuestionOptions, setExpandedQuestionOptions] = useState<Set<number>>(new Set());
  const [selectedFilter, setSelectedFilter] = useState<"all" | "MCQ" | "AR" | "SA" | "LA" | "MAP">("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [expandedSolutions, setExpandedSolutions] = useState<Set<number>>(new Set());
  const [allExpanded, setAllExpanded] = useState(false);
  const [selectedOptions, setSelectedOptions] = useState<Record<number, string>>({});

  const activeChapter = HISTORY_PYQ_CHAPTERS[selectedChapterIdx] ?? HISTORY_PYQ_CHAPTERS[0];

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
      MAP: qs.filter((q) => q.type === "MAP").length,
    };
  }, [activeChapter]);

  // Filter visible chapters by Theme/Part in chapter selection
  const displayedChapters = useMemo(() => {
    return HISTORY_PYQ_CHAPTERS.map((ch, idx) => ({ ch, idx })).filter(({ idx }) => {
      if (selectedPartFilter === "part1") return idx < 4; // Ch 1-4: Ancient India
      if (selectedPartFilter === "part2") return idx >= 4 && idx < 8; // Ch 5-8: Medieval India
      if (selectedPartFilter === "part3") return idx >= 8 && idx < 12; // Ch 9-12: Modern India
      if (selectedPartFilter === "map") return idx === 12; // Ch 13: Map Work Module
      return true;
    });
  }, [selectedPartFilter]);

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="rounded-2xl border border-amber-200/80 bg-white shadow-lift overflow-hidden">
      {/* Header Banner */}
      <div className="relative overflow-hidden bg-gradient-to-r from-stone-950 via-amber-950 to-orange-950 p-6 text-white sm:p-8">
        <div className="bg-hero-grid absolute inset-0 opacity-20" aria-hidden="true" />
        <div
          className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full opacity-25 blur-3xl"
          style={{ background: "radial-gradient(circle, #78350f 0%, #d97706 100%)" }}
          aria-hidden="true"
        />

        <div className="relative flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <div className="flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-amber-400/40 bg-amber-400/15 px-3 py-1 text-[11px] font-extrabold uppercase tracking-wider text-amber-300">
                <Landmark className="h-3.5 w-3.5" />
                CBSE 650 History (027) PYQ Master Bank
              </span>
              <span className="rounded-full bg-orange-500/20 px-2.5 py-0.5 text-[11px] font-bold text-orange-300 ring-1 ring-orange-500/40">
                12 Chapters + Official Map Module
              </span>
              <span className="rounded-full bg-amber-400/20 px-2.5 py-0.5 text-[11px] font-bold text-amber-200 ring-1 ring-amber-400/40">
                Ancient + Medieval + Modern
              </span>
            </div>
            <h3 className="mt-3 font-display text-2xl font-extrabold tracking-tight text-white sm:text-3xl">
              {lockChapter
                ? `Chapter ${activeChapter.info.chapter_num}: ${activeChapter.info.title}`
                : "History Chapterwise Board PYQ Bank"}
            </h3>
            <p className="mt-2 max-w-2xl text-xs sm:text-sm leading-relaxed text-amber-200/90">
              {activeChapter.info.book} &bull; {activeChapter.info.weightage_unit} &bull;
              Includes MCQs, Assertion-Reason, Short Answers, Long Answers & Source-based questions with authentic CBSE marking scheme points.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2.5">
            <button
              type="button"
              onClick={handlePrint}
              className="focus-ring inline-flex items-center gap-1.5 rounded-xl border border-amber-400/40 bg-amber-900/60 px-4 py-2.5 text-xs font-bold text-amber-200 shadow-sm transition-all hover:bg-amber-800/80 hover:text-white"
              title="Print active question set"
            >
              <Printer className="h-3.5 w-3.5" />
              <span>Print Set</span>
            </button>
            <button
              type="button"
              onClick={() => setIsSectionOpen(!isSectionOpen)}
              className="focus-ring inline-flex items-center gap-2 rounded-xl bg-amber-400 px-5 py-2.5 text-xs font-extrabold text-stone-950 shadow-md transition-all hover:bg-amber-300 hover:shadow-lg active:scale-[.98]"
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
        <div className="border-b border-inkline bg-amber-50/40 p-4">
          <div className="mb-2.5 flex flex-wrap items-center justify-between gap-2">
            <div className="flex items-center gap-2 flex-wrap">
              <span className="text-[11px] font-extrabold uppercase tracking-wider text-amber-950">
                Filter Themes & Chapters:
              </span>
              <div className="inline-flex flex-wrap rounded-lg border border-amber-300/80 bg-white p-0.5 text-[11px] font-bold">
                <button
                  type="button"
                  onClick={() => setSelectedPartFilter("all")}
                  className={cn(
                    "rounded-md px-2.5 py-0.5 transition-all",
                    selectedPartFilter === "all"
                      ? "bg-amber-950 text-white shadow-xs"
                      : "text-stone-700 hover:text-stone-950",
                  )}
                >
                  All 13
                </button>
                <button
                  type="button"
                  onClick={() => setSelectedPartFilter("part1")}
                  className={cn(
                    "rounded-md px-2.5 py-0.5 transition-all flex items-center gap-1",
                    selectedPartFilter === "part1"
                      ? "bg-amber-950 text-white shadow-xs"
                      : "text-stone-700 hover:text-stone-950",
                  )}
                  title="Part I: Ancient India (Ch 1-4)"
                >
                  <Landmark className="h-3 w-3" />
                  Part I: Ancient (1-4)
                </button>
                <button
                  type="button"
                  onClick={() => setSelectedPartFilter("part2")}
                  className={cn(
                    "rounded-md px-2.5 py-0.5 transition-all flex items-center gap-1",
                    selectedPartFilter === "part2"
                      ? "bg-amber-950 text-white shadow-xs"
                      : "text-stone-700 hover:text-stone-950",
                  )}
                  title="Part II: Medieval India (Ch 5-8)"
                >
                  <Scroll className="h-3 w-3" />
                  Part II: Medieval (5-8)
                </button>
                <button
                  type="button"
                  onClick={() => setSelectedPartFilter("part3")}
                  className={cn(
                    "rounded-md px-2.5 py-0.5 transition-all flex items-center gap-1",
                    selectedPartFilter === "part3"
                      ? "bg-amber-950 text-white shadow-xs"
                      : "text-stone-700 hover:text-stone-950",
                  )}
                  title="Part III: Modern India (Ch 9-12)"
                >
                  <BookOpen className="h-3 w-3" />
                  Part III: Modern (9-12)
                </button>
                <button
                  type="button"
                  onClick={() => setSelectedPartFilter("map")}
                  className={cn(
                    "rounded-md px-2.5 py-0.5 transition-all flex items-center gap-1",
                    selectedPartFilter === "map"
                      ? "bg-amber-950 text-white shadow-xs"
                      : "text-stone-700 hover:text-stone-950",
                  )}
                  title="Section E: Map Work Module (50 Qs)"
                >
                  <MapPin className="h-3 w-3" />
                  Map Work Module
                </button>
              </div>
            </div>
            <span className="text-xs font-semibold text-amber-900">
              Active: {activeChapter.info.chapter_num === 13 ? "Official Map Module" : `Chapter ${activeChapter.info.chapter_num}`} of {HISTORY_PYQ_CHAPTERS.length}
            </span>
          </div>

          <div className="flex gap-1.5 overflow-x-auto pb-1 no-scrollbar">
            {displayedChapters.map(({ ch, idx }) => {
              const active = idx === selectedChapterIdx;
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
                    setSelectedFilter("all");
                  }}
                  className={cn(
                    "focus-ring shrink-0 rounded-lg px-3 py-1.5 text-xs font-bold transition-all",
                    active
                      ? "bg-amber-950 text-amber-200 shadow-sm border border-amber-600"
                      : "border border-inkline bg-white text-stone-800 hover:border-amber-300 hover:bg-amber-50",
                  )}
                >
                  {ch.info.chapter_num === 13
                    ? "🗺️ Map Work Module"
                    : `Ch ${ch.info.chapter_num}: ${ch.info.title.length > 25 ? ch.info.title.slice(0, 25) + "..." : ch.info.title}`}
                </button>
              );
            })}
          </div>
        </div>
      )}

      {/* Collapsed Overview CTA (when questions are hidden) */}
      {!isSectionOpen && (
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-5 bg-gradient-to-r from-amber-50/40 via-white to-orange-50/40 border-t border-inkline">
          <div className="flex items-center gap-3.5">
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-amber-100 text-amber-900 border border-amber-200">
              <Landmark className="h-5 w-5" />
            </span>
            <div>
              <p className="text-sm font-extrabold text-stone-950">
                {activeChapter.info.chapter_num === 13
                  ? "Section E: Official Map Work Module (50 Qs)"
                  : `Chapter ${activeChapter.info.chapter_num}: ${activeChapter.info.title} (${filterCounts.all} Qs)`}
              </p>
              <p className="text-xs text-stone-500 font-medium mt-0.5">
                {activeChapter.info.chapter_num === 13
                  ? "15 Ancient Sites • 10 Medieval Sites • 15 Modern Centers • 10 Board Mock Map Sets"
                  : `${filterCounts.MCQ} MCQs • ${filterCounts.AR} Assertion-Reason • ${filterCounts.SA} Short Answers (3M) • ${filterCounts.LA} Long & Source-Based (4-8M)`}
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={() => setIsSectionOpen(true)}
            className="focus-ring inline-flex items-center gap-2 rounded-xl bg-amber-950 px-5 py-2.5 text-xs font-extrabold text-amber-300 shadow-md transition-all hover:bg-amber-900 hover:text-amber-200 hover:shadow-lg active:scale-[.98]"
          >
            <span>Show PYQ Questions ({filterCounts.all})</span>
            <ChevronDown className="h-3.5 w-3.5 text-amber-400" />
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
              <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-stone-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search Harappa, Ashoka, Sanchi, Vijayanagara, Ain-i Akbari, 1857, Dandi..."
                className="w-full rounded-xl border border-inkline bg-stone-50/50 py-2 pl-9 pr-3 text-xs text-stone-900 placeholder-stone-400 transition-colors focus:border-amber-500 focus:bg-white focus:outline-none"
              />
            </div>

            {/* Question Type Filter Pills */}
            <div className="flex flex-wrap items-center gap-1.5">
              {[
                { id: "all", label: `All (${filterCounts.all})`, show: true },
                { id: "MCQ", label: `MCQs (${filterCounts.MCQ})`, show: filterCounts.MCQ > 0 },
                { id: "AR", label: `A & R (${filterCounts.AR})`, show: filterCounts.AR > 0 },
                { id: "SA", label: `Short Answer (${filterCounts.SA})`, show: filterCounts.SA > 0 },
                { id: "LA", label: `Long / Source (${filterCounts.LA})`, show: filterCounts.LA > 0 },
                { id: "MAP", label: `Map Work (${filterCounts.MAP})`, show: filterCounts.MAP > 0 },
              ]
                .filter((f) => f.show)
                .map((f) => {
                  const active = selectedFilter === f.id;
                  return (
                    <button
                      key={f.id}
                      type="button"
                      onClick={() => setSelectedFilter(f.id as any)}
                      className={cn(
                        "focus-ring rounded-lg px-3 py-1.5 text-xs font-bold transition-all",
                        active
                          ? "bg-amber-950 text-white shadow-sm"
                          : "border border-inkline bg-white text-stone-600 hover:bg-amber-50/60",
                      )}
                    >
                      {f.label}
                    </button>
                  );
                })}

              {/* Options Visibility Toggle */}
              {filterCounts.MCQ > 0 && (
                <button
                  type="button"
                  onClick={() => setShowOptions(!showOptions)}
                  className="focus-ring inline-flex items-center gap-1.5 rounded-lg border border-inkline bg-white px-3 py-1.5 text-xs font-bold text-stone-700 transition-colors hover:border-amber-300 hover:bg-amber-50"
                  title={showOptions ? "Hide options to test yourself first" : "Show all options"}
                >
                  {showOptions ? <EyeOff className="h-3.5 w-3.5 text-stone-500" /> : <Eye className="h-3.5 w-3.5 text-amber-600" />}
                  {showOptions ? "Hide Options" : "Show Options"}
                </button>
              )}

              <button
                type="button"
                onClick={toggleAllSolutions}
                className="focus-ring rounded-lg border border-amber-300 bg-white px-3 py-1.5 text-xs font-extrabold text-amber-900 transition-colors hover:border-amber-500 hover:bg-amber-50"
              >
                {allExpanded ? "Hide All Solutions" : "Show All Solutions"}
              </button>
            </div>
          </div>

          {/* Questions List */}
          <div className="p-4 sm:p-6 space-y-4 max-h-[750px] overflow-y-auto">
            {filteredQuestions.length === 0 ? (
              <div className="rounded-xl border border-dashed border-inkline p-8 text-center">
                <HelpCircle className="mx-auto h-8 w-8 text-amber-400" />
                <p className="mt-2 text-sm font-bold text-stone-800">No questions match your filter</p>
                <p className="mt-1 text-xs text-stone-500">Try changing the question type or clearing the search query.</p>
              </div>
            ) : (
              filteredQuestions.map((q) => {
                const isExpanded = expandedSolutions.has(q.id) || allExpanded;
                const chosenOption = selectedOptions[q.id];
                const areOptionsVisible = showOptions || expandedQuestionOptions.has(q.id);

                let badgeColor = "bg-blue-50 text-blue-800 border-blue-200";
                let typeTitle = "MCQ (1 Mark)";
                if (q.type === "AR") {
                  badgeColor = "bg-orange-50 text-orange-800 border-orange-200";
                  typeTitle = "Assertion-Reason (1 Mark)";
                } else if (q.type === "SA") {
                  badgeColor = "bg-purple-50 text-purple-800 border-purple-200";
                  typeTitle = "Short Answer (3 Marks)";
                } else if (q.type === "LA") {
                  badgeColor = "bg-emerald-50 text-emerald-800 border-emerald-200";
                  typeTitle = "Long Answer / Source (4-8 Marks)";
                } else if (q.type === "MAP") {
                  badgeColor = "bg-amber-50 text-amber-800 border-amber-200";
                  typeTitle = "Map Work (1-5 Marks)";
                }

                return (
                  <div
                    key={q.id}
                    className="rounded-xl border border-inkline bg-white p-4 sm:p-5 shadow-sm transition-all hover:border-amber-300 hover:shadow-card"
                  >
                    {/* Header with question number, tag, and type */}
                    <div className="flex flex-wrap items-center justify-between gap-2 border-b border-inkline/60 pb-3">
                      <div className="flex items-center gap-2">
                        <span className="font-display text-sm font-extrabold text-stone-950">Q{q.id}.</span>
                        <span className="rounded bg-amber-50 border border-amber-200 px-2 py-0.5 text-[11px] font-bold text-amber-900">
                          {q.tag}
                        </span>
                      </div>
                      <span className={cn("rounded-md border px-2 py-0.5 text-[11px] font-extrabold uppercase", badgeColor)}>
                        {typeTitle}
                      </span>
                    </div>

                    {/* Question Body */}
                    <div className="mt-3 font-sans text-sm leading-relaxed text-stone-900 whitespace-pre-wrap break-words font-medium">
                      {q.question}
                    </div>

                    {/* Multiple Choice Options Grid */}
                    {q.options && q.options.length > 0 && (
                      <div className="mt-3.5">
                        {areOptionsVisible ? (
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
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
                                      : "border-inkline bg-stone-50/40 text-stone-800 hover:bg-amber-50/50 hover:border-amber-200",
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
                            className="inline-flex items-center gap-1.5 rounded-lg border border-dashed border-amber-300 bg-amber-50/60 px-3 py-1.5 text-xs font-semibold text-amber-900 transition-colors hover:bg-amber-100/70"
                          >
                            <ChevronDown className="h-3.5 w-3.5 text-amber-700" />
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
                        className="focus-ring inline-flex items-center gap-1.5 rounded-lg border border-dashed border-amber-300 bg-amber-50/60 px-3 py-1.5 text-xs font-bold text-amber-900 transition-colors hover:border-amber-500 hover:bg-amber-100/70"
                      >
                        {isExpanded ? (
                          <>
                            <ChevronUp className="h-3.5 w-3.5 text-amber-700" />
                            Hide Solution
                          </>
                        ) : (
                          <>
                            <ChevronDown className="h-3.5 w-3.5 text-amber-700" />
                            View Marking Scheme & Historical Context
                          </>
                        )}
                      </button>

                      <span className="text-[11px] font-semibold text-stone-400">
                        ID: HIS-{activeChapter.info.chapter_num}-{q.id}
                      </span>
                    </div>

                    {/* Collapsible Solution Content */}
                    {isExpanded && (
                      <div className="mt-3.5 rounded-xl border border-amber-900/60 bg-stone-950 p-4 text-xs text-stone-200">
                        {q.answer && (
                          <div className="mb-2 flex items-baseline gap-2">
                            <span className="font-extrabold text-amber-400">Correct Answer / Key:</span>
                            <span className="font-bold text-amber-200">{q.answer}</span>
                          </div>
                        )}
                        <div className="border-t border-stone-800 pt-2 leading-relaxed whitespace-pre-wrap text-amber-100 font-sans">
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
                className="focus-ring inline-flex items-center gap-2 rounded-xl border border-amber-200 bg-white px-5 py-2 text-xs font-bold text-amber-900 shadow-sm hover:bg-amber-50 hover:border-amber-300 transition-all"
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
