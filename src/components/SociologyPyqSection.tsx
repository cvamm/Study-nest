import { useState, useMemo } from "react";
import {
  Search,
  ChevronDown,
  ChevronUp,
  Users,
  HelpCircle,
  CheckCircle2,
  XCircle,
  Eye,
  EyeOff,
  RotateCcw,
  Award,
  BookOpen,
} from "lucide-react";
import { SOC_PYQ_CHAPTERS, type PyqChapter } from "@/data/socPyqs";
import { cn } from "@/lib/utils";

interface SociologyPyqSectionProps {
  initialChapterNum?: number;
  lockChapter?: boolean;
  defaultOpen?: boolean;
}

export default function SociologyPyqSection({
  initialChapterNum = 1,
  lockChapter = false,
  defaultOpen = true,
}: SociologyPyqSectionProps) {
  const [selectedChapterIdx, setSelectedChapterIdx] = useState<number>(() => {
    const idx = initialChapterNum - 1;
    return idx >= 0 && idx < SOC_PYQ_CHAPTERS.length ? idx : 0;
  });

  const [selectedBookFilter, setSelectedBookFilter] = useState<"all" | "part1" | "part2">("all");
  const [isSectionOpen, setIsSectionOpen] = useState(defaultOpen);
  const [showOptions] = useState(true);
  const [selectedFilter, setSelectedFilter] = useState<"all" | "MCQ" | "AR" | "allMCQ" | "SA" | "LA">("MCQ");
  const [searchQuery, setSearchQuery] = useState("");
  const [expandedSolutions, setExpandedSolutions] = useState<Set<number>>(new Set());
  const [allExpanded, setAllExpanded] = useState(false);
  const [selectedOptions, setSelectedOptions] = useState<Record<number, string>>({});

  const activeChapter: PyqChapter = SOC_PYQ_CHAPTERS[selectedChapterIdx] ?? SOC_PYQ_CHAPTERS[0];

  const filteredQuestions = useMemo(() => {
    let list = activeChapter.questions;

    if (selectedFilter === "MCQ") {
      list = list.filter((q) => q.type === "MCQ");
    } else if (selectedFilter === "AR") {
      list = list.filter((q) => q.type === "AR");
    } else if (selectedFilter === "allMCQ") {
      list = list.filter((q) => q.type === "MCQ" || q.type === "AR");
    } else if (selectedFilter === "SA") {
      list = list.filter((q) => q.type === "SA");
    } else if (selectedFilter === "LA") {
      list = list.filter((q) => q.type === "LA");
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

  const resetChapterAnswers = () => {
    setSelectedOptions({});
    setExpandedSolutions(new Set());
  };

  const filterCounts = useMemo(() => {
    const qs = activeChapter.questions;
    return {
      all: qs.length,
      MCQ: qs.filter((q) => q.type === "MCQ").length,
      AR: qs.filter((q) => q.type === "AR").length,
      allMCQ: qs.filter((q) => q.type === "MCQ" || q.type === "AR").length,
      SA: qs.filter((q) => q.type === "SA").length,
      LA: qs.filter((q) => q.type === "LA").length,
    };
  }, [activeChapter]);

  // Track user score on MCQs for this chapter
  const scoreStats = useMemo(() => {
    const mcqs = activeChapter.questions.filter((q) => q.type === "MCQ" || q.type === "AR");
    let answered = 0;
    let correct = 0;

    mcqs.forEach((q) => {
      const chosen = selectedOptions[q.id];
      if (chosen) {
        answered++;
        const cleanAnswer = q.answer.trim().toLowerCase();
        const cleanChosen = chosen.trim().toLowerCase();
        const isRight = cleanAnswer.includes(cleanChosen) || cleanAnswer.startsWith(cleanChosen.slice(0, 3));
        if (isRight) correct++;
      }
    });

    return { total: mcqs.length, answered, correct };
  }, [activeChapter, selectedOptions]);

  // Filter visible chapters by Part 1 / Part 2 in chapter selection
  const displayedChapters = useMemo(() => {
    return SOC_PYQ_CHAPTERS.map((ch, idx) => ({ ch, idx })).filter(({ idx }) => {
      if (selectedBookFilter === "part1") return idx < 5;
      if (selectedBookFilter === "part2") return idx >= 5;
      return true;
    });
  }, [selectedBookFilter]);

  return (
    <div className="rounded-2xl border border-rose-200/80 bg-white shadow-lift overflow-hidden">
      {/* Header Banner */}
      <div className="relative overflow-hidden bg-gradient-to-r from-rose-950 via-neutral-900 to-red-950 p-6 text-white sm:p-8">
        <div className="bg-hero-grid absolute inset-0 opacity-20" aria-hidden="true" />
        <div
          className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full opacity-20 blur-3xl"
          style={{ background: "radial-gradient(circle, #e11d48 0%, transparent 70%)" }}
          aria-hidden="true"
        />

        <div className="relative flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <div className="flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-rose-400/40 bg-rose-400/15 px-3 py-1 text-[11px] font-extrabold uppercase tracking-wider text-rose-300">
                <Users className="h-3.5 w-3.5" />
                CBSE 650 Sociology (039) Master Chapterwise Bank
              </span>
              <span className="rounded-full bg-rose-500/20 px-2.5 py-0.5 text-[11px] font-bold text-rose-300 ring-1 ring-rose-500/40">
                50 Questions per Chapter (13 Chapters)
              </span>
              <span className="rounded-full bg-amber-400/20 px-2.5 py-0.5 text-[11px] font-bold text-amber-300 ring-1 ring-amber-400/40">
                Interactive MCQ Mode Active
              </span>
            </div>
            <h3 className="mt-3 font-display text-2xl font-extrabold tracking-tight text-white sm:text-3xl">
              {lockChapter
                ? `Chapter ${activeChapter.info.chapter_num}: ${activeChapter.info.title}`
                : "Sociology Chapterwise Board PYQ Bank"}
            </h3>
            <p className="mt-2 max-w-2xl text-xs sm:text-sm leading-relaxed text-rose-200/90">
              {activeChapter.info.unit_title} &bull; {activeChapter.info.weightage_unit} &bull; 
              25 MCQs, 5 Assertion-Reason, 10 Short Answer & 10 Long Evaluative questions with rationales and step-by-step marking schemes.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2.5">
            {scoreStats.answered > 0 && (
              <div className="flex items-center gap-2 rounded-xl bg-white/10 px-3.5 py-2 text-xs font-bold text-rose-100 ring-1 ring-white/15">
                <Award className="h-4 w-4 text-amber-300" />
                <span>Score: {scoreStats.correct}/{scoreStats.answered}</span>
                <button
                  type="button"
                  onClick={resetChapterAnswers}
                  title="Reset practice answers"
                  className="ml-1 text-rose-300 hover:text-white transition-colors"
                >
                  <RotateCcw className="h-3.5 w-3.5" />
                </button>
              </div>
            )}
            <button
              type="button"
              onClick={() => setIsSectionOpen(!isSectionOpen)}
              className="focus-ring inline-flex items-center gap-2 rounded-xl bg-rose-500 px-5 py-2.5 text-xs font-extrabold text-white shadow-md transition-all hover:bg-rose-400 hover:shadow-lg active:scale-[.98]"
            >
              {isSectionOpen ? (
                <>
                  <ChevronUp className="h-3.5 w-3.5" />
                  Hide Questions
                </>
              ) : (
                <>
                  <ChevronDown className="h-3.5 w-3.5" />
                  Practice MCQs & PYQs ({filterCounts.all})
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
                  All (13)
                </button>
                <button
                  type="button"
                  onClick={() => setSelectedBookFilter("part1")}
                  className={cn(
                    "rounded-md px-2.5 py-0.5 transition-all",
                    selectedBookFilter === "part1" ? "bg-rose-900 text-white font-extrabold" : "text-rose-900 hover:bg-rose-50",
                  )}
                >
                  Part 1: Indian Society (5)
                </button>
                <button
                  type="button"
                  onClick={() => setSelectedBookFilter("part2")}
                  className={cn(
                    "rounded-md px-2.5 py-0.5 transition-all",
                    selectedBookFilter === "part2" ? "bg-rose-900 text-white font-extrabold" : "text-rose-900 hover:bg-rose-50",
                  )}
                >
                  Part 2: Change & Dev (8)
                </button>
              </div>
            </div>
            <span className="text-xs font-semibold text-rose-800">
              Chapter {activeChapter.info.chapter_num} of {SOC_PYQ_CHAPTERS.length} &bull; {activeChapter.info.title}
            </span>
          </div>

          <div className="flex gap-1.5 overflow-x-auto pb-1 no-scrollbar">
            {displayedChapters.map(({ ch, idx }) => {
              const active = idx === selectedChapterIdx;
              const isPart1 = idx < 5;
              return (
                <button
                  key={ch.info.chapter_num}
                  type="button"
                  onClick={() => {
                    setSelectedChapterIdx(idx);
                    setIsSectionOpen(true);
                  }}
                  className={cn(
                    "shrink-0 rounded-xl px-3 py-1.5 text-xs font-bold transition-all text-left border flex items-center gap-1.5",
                    active
                      ? "bg-rose-900 text-white border-rose-950 shadow-sm"
                      : "bg-white text-navy-800 border-rose-200/80 hover:bg-rose-100/70 hover:border-rose-300",
                  )}
                >
                  <span
                    className={cn(
                      "flex h-4.5 w-4.5 items-center justify-center rounded-full text-[10px] font-black",
                      active
                        ? "bg-rose-200 text-rose-950"
                        : isPart1
                        ? "bg-rose-100 text-rose-800"
                        : "bg-amber-100 text-amber-800",
                    )}
                  >
                    {ch.info.chapter_num}
                  </span>
                  <span className="truncate max-w-[170px] sm:max-w-[210px]">{ch.info.title}</span>
                </button>
              );
            })}
          </div>
        </div>
      )}

      {/* Main Interactive Question Panel */}
      {isSectionOpen && (
        <div className="p-4 sm:p-6 lg:p-8">
          {/* Controls Bar: Type Filters, Search & Bulk Actions */}
          <div className="mb-6 flex flex-col gap-4 border-b border-inkline pb-6">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              {/* Filter Tabs */}
              <div className="flex flex-wrap items-center gap-1.5">
                <button
                  type="button"
                  onClick={() => setSelectedFilter("MCQ")}
                  className={cn(
                    "rounded-xl px-3.5 py-1.5 text-xs font-extrabold transition-all border",
                    selectedFilter === "MCQ"
                      ? "bg-rose-800 text-white border-rose-900 shadow-sm"
                      : "bg-rose-50/70 text-rose-950 border-rose-200 hover:bg-rose-100",
                  )}
                >
                  MCQs ({filterCounts.MCQ})
                </button>
                <button
                  type="button"
                  onClick={() => setSelectedFilter("allMCQ")}
                  className={cn(
                    "rounded-xl px-3.5 py-1.5 text-xs font-extrabold transition-all border",
                    selectedFilter === "allMCQ"
                      ? "bg-rose-800 text-white border-rose-900 shadow-sm"
                      : "bg-rose-50/70 text-rose-950 border-rose-200 hover:bg-rose-100",
                  )}
                >
                  All MCQs & AR ({filterCounts.allMCQ})
                </button>
                <button
                  type="button"
                  onClick={() => setSelectedFilter("AR")}
                  className={cn(
                    "rounded-xl px-3.5 py-1.5 text-xs font-extrabold transition-all border",
                    selectedFilter === "AR"
                      ? "bg-rose-800 text-white border-rose-900 shadow-sm"
                      : "bg-rose-50/70 text-rose-950 border-rose-200 hover:bg-rose-100",
                  )}
                >
                  Assertion-Reason ({filterCounts.AR})
                </button>
                <button
                  type="button"
                  onClick={() => setSelectedFilter("SA")}
                  className={cn(
                    "rounded-xl px-3.5 py-1.5 text-xs font-extrabold transition-all border",
                    selectedFilter === "SA"
                      ? "bg-rose-800 text-white border-rose-900 shadow-sm"
                      : "bg-rose-50/70 text-rose-950 border-rose-200 hover:bg-rose-100",
                  )}
                >
                  Short Answer ({filterCounts.SA})
                </button>
                <button
                  type="button"
                  onClick={() => setSelectedFilter("LA")}
                  className={cn(
                    "rounded-xl px-3.5 py-1.5 text-xs font-extrabold transition-all border",
                    selectedFilter === "LA"
                      ? "bg-rose-800 text-white border-rose-900 shadow-sm"
                      : "bg-rose-50/70 text-rose-950 border-rose-200 hover:bg-rose-100",
                  )}
                >
                  Long Answer ({filterCounts.LA})
                </button>
                <button
                  type="button"
                  onClick={() => setSelectedFilter("all")}
                  className={cn(
                    "rounded-xl px-3.5 py-1.5 text-xs font-extrabold transition-all border",
                    selectedFilter === "all"
                      ? "bg-rose-800 text-white border-rose-900 shadow-sm"
                      : "bg-white text-navy-700 border-inkline hover:bg-navy-50",
                  )}
                >
                  All (50)
                </button>
              </div>

              {/* Toggle All Solutions */}
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={toggleAllSolutions}
                  className="inline-flex items-center gap-1.5 rounded-xl border border-rose-200 bg-white px-3 py-1.5 text-xs font-bold text-rose-900 shadow-sm transition-all hover:bg-rose-50"
                >
                  {allExpanded ? (
                    <>
                      <EyeOff className="h-3.5 w-3.5 text-rose-700" />
                      Hide Explanations
                    </>
                  ) : (
                    <>
                      <Eye className="h-3.5 w-3.5 text-rose-700" />
                      Show All Solutions
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Search Input & Quiz Progress Bar */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-navy-400" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search questions, concepts, thinkers (Srinivas, Ghurye, Marx...)..."
                  className="w-full rounded-xl border border-rose-200 bg-white py-2 pl-9 pr-4 text-xs font-medium text-navy-900 placeholder:text-navy-400 focus:border-rose-400 focus:outline-none focus:ring-2 focus:ring-rose-200"
                />
              </div>

              {/* Progress Summary */}
              {scoreStats.total > 0 && (
                <div className="flex items-center gap-3 text-xs font-bold text-navy-700">
                  <span>MCQ Progress:</span>
                  <div className="h-2 w-32 rounded-full bg-rose-100 overflow-hidden">
                    <div
                      className="h-full bg-rose-600 transition-all duration-300"
                      style={{ width: `${(scoreStats.answered / scoreStats.total) * 100}%` }}
                    />
                  </div>
                  <span className="text-rose-950 font-extrabold">
                    {scoreStats.answered}/{scoreStats.total} answered
                  </span>
                </div>
              )}
            </div>
          </div>

          {/* Active Chapter Details Badge */}
          <div className="mb-6 flex flex-wrap items-center justify-between gap-2 rounded-xl bg-gradient-to-r from-rose-50 to-pink-50/50 border border-rose-200/80 px-4 py-2.5">
            <div className="flex items-center gap-2">
              <BookOpen className="h-4 w-4 text-rose-700" />
              <span className="font-display text-xs font-extrabold text-rose-950">
                Chapter {activeChapter.info.chapter_num}: {activeChapter.info.title}
              </span>
            </div>
            <span className="text-[11px] font-semibold text-rose-800">
              Showing {filteredQuestions.length} of {activeChapter.questions.length} Questions
            </span>
          </div>

          {/* Question List */}
          {filteredQuestions.length === 0 ? (
            <div className="rounded-xl border border-dashed border-rose-300 bg-rose-50/30 p-12 text-center">
              <HelpCircle className="mx-auto h-8 w-8 text-rose-400" />
              <p className="mt-2 font-display text-sm font-bold text-rose-950">No questions match your filter</p>
              <p className="mt-1 text-xs text-navy-500">Try changing the search query or question type filter</p>
            </div>
          ) : (
            <div className="space-y-4">
              {filteredQuestions.map((q) => {
                const isExpanded = expandedSolutions.has(q.id);
                const chosenOption = selectedOptions[q.id];

                let typeTitle = "1 Mark MCQ";
                let badgeColor = "bg-rose-50 text-rose-800 border-rose-200";

                if (q.type === "AR") {
                  typeTitle = "1 Mark Assertion-Reason";
                  badgeColor = "bg-purple-50 text-purple-800 border-purple-200";
                } else if (q.type === "SA") {
                  typeTitle = "2/3 Marks Short Answer";
                  badgeColor = "bg-amber-50 text-amber-800 border-amber-200";
                } else if (q.type === "LA") {
                  typeTitle = "4/6 Marks Evaluative / Long";
                  badgeColor = "bg-indigo-50 text-indigo-800 border-indigo-200";
                }

                return (
                  <div
                    key={q.id}
                    className="rounded-xl border border-rose-200/70 bg-white p-4 sm:p-5 shadow-sm transition-all hover:border-rose-300 hover:shadow-md"
                  >
                    {/* Header: Q Number, Tag & Badge */}
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <div className="flex items-center gap-2">
                        <span className="font-display text-sm font-extrabold text-navy-950">Q{q.id}.</span>
                        <span className="rounded bg-rose-50 border border-rose-200 px-2 py-0.5 text-[11px] font-bold text-rose-900">
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

                    {/* Multiple Choice Options Grid (in MCQ Form!) */}
                    {q.options && q.options.length > 0 && (
                      <div className="mt-3.5">
                        <div className="grid grid-cols-1 gap-2">
                          {q.options.map((opt, oIdx) => {
                            const isSelected = chosenOption === opt;
                            const cleanAnswer = q.answer.trim().toLowerCase();
                            const cleanOpt = opt.trim().toLowerCase();
                            const isCorrect = cleanAnswer.includes(cleanOpt) || cleanAnswer.startsWith(cleanOpt.slice(0, 3));

                            return (
                              <button
                                key={oIdx}
                                type="button"
                                onClick={() => handleOptionSelect(q.id, opt, isCorrect)}
                                className={cn(
                                  "w-full text-left rounded-lg border px-3.5 py-2.5 text-xs font-medium transition-all flex items-center justify-between group",
                                  isSelected
                                    ? isCorrect
                                      ? "bg-emerald-100 border-emerald-400 text-emerald-950 font-bold"
                                      : "bg-red-50 border-red-300 text-red-950 font-bold"
                                    : isExpanded && isCorrect
                                    ? "bg-emerald-50 border-emerald-300 text-emerald-900 font-bold"
                                    : "border-rose-100 bg-rose-50/20 text-navy-800 hover:bg-rose-50 hover:border-rose-300",
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
                      </div>
                    )}

                    {/* Solution Toggle Button */}
                    <div className="mt-4 flex items-center justify-between border-t border-inkline pt-3">
                      <button
                        type="button"
                        onClick={() => toggleSolution(q.id)}
                        className="inline-flex items-center gap-1.5 text-xs font-bold text-rose-700 transition-colors hover:text-rose-900"
                      >
                        {isExpanded ? (
                          <>
                            <ChevronUp className="h-3.5 w-3.5" />
                            Hide Answer & Rationale
                          </>
                        ) : (
                          <>
                            <ChevronDown className="h-3.5 w-3.5" />
                            {q.type === "MCQ" || q.type === "AR"
                              ? "Show Correct Answer & Rationale"
                              : "Show Model Answer & Marking Scheme"}
                          </>
                        )}
                      </button>

                      {q.options && chosenOption && (
                        <span className="text-[11px] font-semibold text-navy-500">
                          Option Selected
                        </span>
                      )}
                    </div>

                    {/* Expanded Answer / Solution / Marking Scheme */}
                    {isExpanded && (
                      <div className="mt-3 rounded-lg border border-emerald-200/80 bg-emerald-50/50 p-4 text-xs leading-relaxed text-navy-900">
                        <div className="flex items-center gap-1.5 font-bold text-emerald-950 mb-1.5">
                          <CheckCircle2 className="h-4 w-4 text-emerald-600" />
                          <span>Correct Answer: {q.answer}</span>
                        </div>
                        {q.explanation && (
                          <div className="mt-2 text-navy-800 whitespace-pre-line border-t border-emerald-200/60 pt-2 font-normal">
                            <span className="font-bold text-emerald-900 block mb-0.5">Sociological Rationale / Marking Scheme:</span>
                            {q.explanation}
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
