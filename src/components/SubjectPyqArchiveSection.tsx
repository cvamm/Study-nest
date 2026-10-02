import { useState, useMemo } from "react";
import {
  Download,
  FileArchive,
  Search,
  ExternalLink,
  Calendar,
  Layers,
  Sparkles,
  ShieldCheck,
  ChevronDown,
  ChevronUp,
  FileText,
  Filter,
} from "lucide-react";
import { getOfficialPyqArchive, type SubjectPyqArchive, type YearPyqPapers } from "@/data/officialPyqPapers";
import { cn } from "@/lib/utils";

interface SubjectPyqArchiveSectionProps {
  subjectId: string;
  className?: string;
  defaultOpen?: boolean;
}

export default function SubjectPyqArchiveSection({
  subjectId,
  className,
  defaultOpen = true,
}: SubjectPyqArchiveSectionProps) {
  const archive = useMemo(() => getOfficialPyqArchive(subjectId), [subjectId]);

  const [selectedYear, setSelectedYear] = useState<number | "all">("all");
  const [selectedType, setSelectedType] = useState<"all" | "main" | "comp">("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [expandedYears, setExpandedYears] = useState<Set<number>>(() => {
    // Expand the latest 3 years by default
    if (!archive) return new Set();
    return new Set(archive.years.slice(0, 3).map((y) => y.year));
  });

  if (!archive) {
    return null;
  }

  const toggleYear = (year: number) => {
    setExpandedYears((prev) => {
      const next = new Set(prev);
      if (next.has(year)) {
        next.delete(year);
      } else {
        next.add(year);
      }
      return next;
    });
  };

  const expandAllYears = () => {
    setExpandedYears(new Set(archive.years.map((y) => y.year)));
  };

  const collapseAllYears = () => {
    setExpandedYears(new Set());
  };

  const filteredYears = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();

    return archive.years
      .filter((y) => {
        if (selectedYear !== "all" && y.year !== selectedYear) return false;
        return true;
      })
      .map((y) => {
        let papers = y.papers;

        if (selectedType !== "all") {
          papers = papers.filter((p) => p.badgeType === selectedType);
        }

        if (q) {
          papers = papers.filter(
            (p) =>
              p.kind.toLowerCase().includes(q) ||
              String(y.year).includes(q) ||
              p.codes.some((code) => code.toLowerCase().includes(q)),
          );
        }

        return {
          ...y,
          papers,
        };
      })
      .filter((y) => y.papers.length > 0);
  }, [archive, selectedYear, selectedType, searchQuery]);

  return (
    <div className={cn("overflow-hidden rounded-2xl border border-navy-200/80 bg-white shadow-card", className)}>
      {/* Header Banner */}
      <div className="relative overflow-hidden border-b border-navy-100 bg-gradient-to-r from-navy-900 via-navy-800 to-indigo-950 p-6 text-white sm:p-8">
        <div className="absolute -right-10 -top-10 h-48 w-48 rounded-full bg-gold-400/10 blur-2xl" />
        <div className="relative flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <div className="flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-gold-400/30 bg-gold-400/10 px-3 py-1 text-[11px] font-extrabold uppercase tracking-wider text-gold-300">
                <ShieldCheck className="h-3.5 w-3.5 text-gold-400" />
                100% Official CBSE Archive
              </span>
              <span className="rounded-full bg-white/10 px-2.5 py-0.5 text-[11px] font-bold text-navy-200">
                Subject Code: {archive.subjectCode}
              </span>
            </div>
            <h3 className="mt-2 font-display text-2xl font-black tracking-tight text-white sm:text-3xl">
              {archive.subjectName} — Past-Year Board Papers (2015–2026)
            </h3>
            <p className="mt-1.5 max-w-2xl text-xs leading-relaxed text-navy-200 sm:text-sm">
              Official CBSE question papers with Delhi, All India, Foreign regions, and Compartment examination bundles.
              Each link directly fetches the authentic ZIP / PDF from <span className="font-mono text-gold-300">cbse.gov.in</span>.
            </p>
          </div>

          <div className="flex shrink-0 flex-wrap items-center gap-3">
            <div className="rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-center backdrop-blur-sm">
              <span className="block font-display text-xl font-black text-gold-400">{archive.totalYears}</span>
              <span className="text-[10px] font-bold uppercase tracking-wider text-navy-300">Years Covered</span>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-center backdrop-blur-sm">
              <span className="block font-display text-xl font-black text-cyan-400">{archive.totalBundles}</span>
              <span className="text-[10px] font-bold uppercase tracking-wider text-navy-300">ZIP Bundles</span>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-center backdrop-blur-sm">
              <span className="block font-display text-xl font-black text-emerald-400">{archive.totalPapers}</span>
              <span className="text-[10px] font-bold uppercase tracking-wider text-navy-300">Total Set Papers</span>
            </div>
          </div>
        </div>

        {/* Year Pills Bar */}
        <div className="mt-6 flex flex-wrap items-center gap-1.5 border-t border-white/10 pt-4">
          <span className="text-[11px] font-bold uppercase tracking-wider text-navy-300 mr-1">Select Year:</span>
          <button
            type="button"
            onClick={() => setSelectedYear("all")}
            className={cn(
              "rounded-lg px-2.5 py-1 text-xs font-bold transition-all",
              selectedYear === "all"
                ? "bg-gold-400 text-navy-950 font-black shadow-sm"
                : "bg-white/10 text-navy-200 hover:bg-white/20 hover:text-white",
            )}
          >
            All Years ({archive.years.length})
          </button>
          {archive.years.map((y) => (
            <button
              key={y.year}
              type="button"
              onClick={() => setSelectedYear(y.year)}
              className={cn(
                "rounded-lg px-2.5 py-1 text-xs font-bold transition-all",
                selectedYear === y.year
                  ? "bg-gold-400 text-navy-950 font-black shadow-sm"
                  : "bg-white/10 text-navy-200 hover:bg-white/20 hover:text-white",
              )}
            >
              {y.year}
            </button>
          ))}
        </div>
      </div>

      {/* Control & Search Toolbar */}
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-inkline bg-slate-50/70 p-4">
        <div className="relative min-w-[240px] flex-1 sm:max-w-md">
          <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-navy-400" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search by Q.P. code (e.g. 55/1/1), region or exam..."
            className="w-full rounded-xl border border-navy-200 bg-white py-2 pl-9 pr-4 text-xs font-medium text-navy-900 placeholder:text-navy-400 focus:border-gold-500 focus:outline-none focus:ring-2 focus:ring-gold-500/20"
          />
          {searchQuery ? (
            <button
              type="button"
              onClick={() => setSearchQuery("")}
              className="absolute right-2.5 top-1/2 -translate-y-1/2 rounded-full p-1 text-navy-400 hover:text-navy-700"
            >
              ×
            </button>
          ) : null}
        </div>

        <div className="flex flex-wrap items-center gap-2">
          {/* Exam Type Filter */}
          <div className="flex items-center gap-1 rounded-lg border border-navy-200 bg-white p-0.5 text-xs font-bold">
            <button
              type="button"
              onClick={() => setSelectedType("all")}
              className={cn("rounded-md px-2.5 py-1 transition-colors", selectedType === "all" ? "bg-navy-900 text-white" : "text-navy-600 hover:text-navy-900")}
            >
              All Types
            </button>
            <button
              type="button"
              onClick={() => setSelectedType("main")}
              className={cn("rounded-md px-2.5 py-1 transition-colors", selectedType === "main" ? "bg-emerald-600 text-white" : "text-navy-600 hover:text-emerald-700")}
            >
              Main Exam
            </button>
            <button
              type="button"
              onClick={() => setSelectedType("comp")}
              className={cn("rounded-md px-2.5 py-1 transition-colors", selectedType === "comp" ? "bg-amber-600 text-white" : "text-navy-600 hover:text-amber-700")}
            >
              Compartment
            </button>
          </div>

          {/* Expand/Collapse All */}
          <button
            type="button"
            onClick={expandedYears.size === archive.years.length ? collapseAllYears : expandAllYears}
            className="inline-flex items-center gap-1 rounded-lg border border-navy-200 bg-white px-3 py-1.5 text-xs font-bold text-navy-700 transition-colors hover:bg-navy-50"
          >
            {expandedYears.size === archive.years.length ? (
              <>
                <ChevronUp className="h-3.5 w-3.5 text-navy-500" />
                Collapse All
              </>
            ) : (
              <>
                <ChevronDown className="h-3.5 w-3.5 text-navy-500" />
                Expand All
              </>
            )}
          </button>
        </div>
      </div>

      {/* Year-by-Year Content List */}
      <div className="divide-y divide-navy-100 p-4 sm:p-6">
        {filteredYears.length === 0 ? (
          <div className="py-12 text-center">
            <FileArchive className="mx-auto h-10 w-10 text-navy-300" />
            <h4 className="mt-3 font-display text-base font-bold text-navy-900">No question papers match your filter</h4>
            <p className="mt-1 text-xs text-navy-500">Try changing your search term, exam type, or year selector above.</p>
            <button
              type="button"
              onClick={() => {
                setSelectedYear("all");
                setSelectedType("all");
                setSearchQuery("");
              }}
              className="mt-4 inline-flex items-center gap-1.5 rounded-lg border border-gold-400 bg-gold-50 px-3.5 py-1.5 text-xs font-extrabold text-gold-900 hover:bg-gold-100"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          filteredYears.map((yearGroup) => {
            const isExpanded = expandedYears.has(yearGroup.year);
            const totalSetsInYear = yearGroup.papers.reduce((sum, p) => sum + p.setsCount, 0);

            return (
              <div key={yearGroup.year} className="py-4 first:pt-0 last:pb-0">
                {/* Year Accordion Header */}
                <button
                  type="button"
                  onClick={() => toggleYear(yearGroup.year)}
                  className="flex w-full items-center justify-between rounded-xl p-3 text-left transition-colors hover:bg-slate-50 focus:outline-none"
                >
                  <div className="flex items-center gap-3">
                    <span className="flex h-9 w-14 items-center justify-center rounded-lg bg-navy-900 font-display text-sm font-black text-gold-400">
                      {yearGroup.year}
                    </span>
                    <div>
                      <h4 className="font-display text-base font-extrabold text-navy-900">
                        CBSE Class 12 &mdash; {yearGroup.year} Papers
                      </h4>
                      <div className="flex items-center gap-2 text-xs text-navy-500">
                        <span>{yearGroup.papers.length} archive bundle{yearGroup.papers.length > 1 ? "s" : ""}</span>
                        <span>&bull;</span>
                        <span className="font-bold text-navy-700">{totalSetsInYear} set paper{totalSetsInYear > 1 ? "s" : ""}</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <span className="hidden text-xs font-bold text-navy-400 sm:inline">
                      {isExpanded ? "Hide papers" : "View papers"}
                    </span>
                    <span className="rounded-lg border border-navy-200 bg-white p-1 text-navy-500">
                      {isExpanded ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
                    </span>
                  </div>
                </button>

                {/* Table of Papers for this Year */}
                {isExpanded ? (
                  <div className="mt-3 overflow-hidden rounded-xl border border-navy-100 bg-white shadow-sm">
                    <div className="overflow-x-auto">
                      <table className="w-full text-left text-xs">
                        <thead className="border-b border-navy-100 bg-slate-50 text-[11px] font-extrabold uppercase tracking-wider text-navy-500">
                          <tr>
                            <th className="px-4 py-3">Paper / Exam Type</th>
                            <th className="px-3 py-3 text-center">Sets</th>
                            <th className="px-4 py-3">CBSE Q.P. Codes / Set Papers Included</th>
                            <th className="px-4 py-3 text-right">Official Download</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-navy-50">
                          {yearGroup.papers.map((paper, pIdx) => (
                            <tr key={pIdx} className="transition-colors hover:bg-blue-50/30">
                              {/* Type */}
                              <td className="px-4 py-3 font-semibold text-navy-900">
                                <span
                                  className={cn(
                                    "inline-flex items-center rounded-md px-2.5 py-1 text-[11px] font-extrabold",
                                    paper.badgeType === "comp"
                                      ? "bg-amber-100 text-amber-900 border border-amber-200"
                                      : "bg-emerald-50 text-emerald-800 border border-emerald-200",
                                  )}
                                >
                                  {paper.kind}
                                </span>
                              </td>

                              {/* Sets Count */}
                              <td className="px-3 py-3 text-center font-bold text-navy-700">
                                <span className="rounded-md bg-navy-50 px-2 py-0.5 text-navy-800">
                                  {paper.setsCount} {paper.setsCount === 1 ? "paper" : "papers"}
                                </span>
                              </td>

                              {/* QP Codes */}
                              <td className="px-4 py-3">
                                <div className="flex flex-wrap gap-1.5 max-w-xl">
                                  {paper.codes.map((code, cIdx) => (
                                    <span
                                      key={cIdx}
                                      className="inline-block rounded-md border border-navy-200/80 bg-slate-100/80 px-2 py-0.5 font-mono text-[11px] font-semibold text-navy-800"
                                    >
                                      {code}
                                    </span>
                                  ))}
                                </div>
                              </td>

                              {/* Download Link */}
                              <td className="px-4 py-3 text-right whitespace-nowrap">
                                <a
                                  href={paper.url}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="inline-flex items-center gap-1.5 rounded-lg border border-indigo-200 bg-indigo-50 px-3 py-1.5 text-xs font-extrabold text-indigo-700 shadow-sm transition-all hover:border-indigo-300 hover:bg-indigo-100 hover:text-indigo-900 active:scale-95"
                                >
                                  <Download className="h-3.5 w-3.5" />
                                  Download ZIP
                                  {paper.size ? (
                                    <span className="font-normal text-indigo-500">({paper.size})</span>
                                  ) : null}
                                </a>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                ) : null}
              </div>
            );
          })
        )}
      </div>

      {/* Footer Info & Attribution */}
      <div className="border-t border-navy-100 bg-slate-50/80 px-6 py-4 text-xs text-navy-500 sm:flex sm:items-center sm:justify-between">
        <p>
          Source: Official CBSE Question Paper Archives (cbse.gov.in). All question papers remain &copy; CBSE.
        </p>
        <a
          href="https://www.cbse.gov.in/cbsenew/question-paper.html"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-2 inline-flex items-center gap-1 font-bold text-indigo-600 hover:underline sm:mt-0"
        >
          CBSE Official Question Paper Portal
          <ExternalLink className="h-3 w-3" />
        </a>
      </div>
    </div>
  );
}
