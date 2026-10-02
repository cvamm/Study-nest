import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import {
  FileArchive,
  Download,
  Search,
  ExternalLink,
  ShieldCheck,
  Sparkles,
  Layers,
  ChevronDown,
  ChevronUp,
  Info,
  BookOpen,
  Filter,
  CheckCircle2,
  AlertCircle,
} from "lucide-react";
import { OFFICIAL_PYQ_ARCHIVES, ALL_ARCHIVE_YEARS, type SubjectPyqArchive } from "@/data/officialPyqPapers";
import SubjectPyqArchiveSection from "@/components/SubjectPyqArchiveSection";
import Crumbs from "@/components/Crumbs";
import Reveal from "@/components/Reveal";
import { cn } from "@/lib/utils";

type StreamTab = "all" | "Science" | "Commerce" | "Humanities";

export default function PyqPapers() {
  const [selectedStream, setSelectedStream] = useState<StreamTab>("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [activeSubjectId, setActiveSubjectId] = useState<string | null>(null);

  const filteredArchives = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();

    return OFFICIAL_PYQ_ARCHIVES.filter((archive) => {
      if (selectedStream !== "all" && archive.stream !== selectedStream) {
        return false;
      }
      if (q) {
        const matchesName = archive.subjectName.toLowerCase().includes(q);
        const matchesCode = archive.subjectCode.toLowerCase().includes(q);
        const matchesStream = archive.stream.toLowerCase().includes(q);
        const matchesQpCode = archive.years.some((y) =>
          y.papers.some((p) => p.codes.some((c) => c.toLowerCase().includes(q))),
        );
        if (!matchesName && !matchesCode && !matchesStream && !matchesQpCode) {
          return false;
        }
      }
      return true;
    });
  }, [selectedStream, searchQuery]);

  const totalBundlesCount = OFFICIAL_PYQ_ARCHIVES.reduce((sum, a) => sum + a.totalBundles, 0);
  const totalPapersCount = OFFICIAL_PYQ_ARCHIVES.reduce((sum, a) => sum + a.totalPapers, 0);

  return (
    <div className="bg-slate-50/50 pb-20">
      {/* ===================== HERO SECTION ===================== */}
      <section className="relative overflow-hidden border-b border-inkline bg-white">
        <div className="container-x relative py-10 lg:py-14">
          <Crumbs items={[{ label: "Resources", to: "/resources" }, { label: "Previous Year Question Papers" }]} />

          <div className="mt-6 max-w-4xl">
            <div className="flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-gold-300 bg-gold-50 px-3 py-1 text-[11px] font-extrabold uppercase tracking-wider text-gold-900">
                <ShieldCheck className="h-3.5 w-3.5 text-gold-600" />
                Verified CBSE Board Archive (2015–2026)
              </span>
              <span className="rounded-full bg-navy-100 px-2.5 py-0.5 text-[11px] font-bold text-navy-700">
                All 15 Subjects &middot; All Sets Included
              </span>
            </div>

            <h1 className="mt-4 font-display text-3xl font-black tracking-tight text-navy-900 sm:text-4xl lg:text-5xl">
              CBSE Class 12 Past-Year Question Papers
            </h1>
            <p className="mt-3 text-sm leading-relaxed text-navy-600 sm:text-base">
              Download every CBSE Class 12 board examination question paper published between <b>2015 and 2026</b>.
              Every regional set (Delhi, All India, Foreign) and Compartment exam bundle links directly to the official
              verified <span className="font-mono font-semibold text-navy-900">cbse.gov.in</span> archive.
            </p>

            {/* Key Statistics */}
            <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-5">
              <div className="rounded-xl border border-inkline bg-slate-50/80 p-3.5 text-center">
                <span className="block font-display text-2xl font-black text-indigo-600">15</span>
                <span className="text-[10px] font-extrabold uppercase tracking-wider text-navy-500">Subjects</span>
              </div>
              <div className="rounded-xl border border-inkline bg-slate-50/80 p-3.5 text-center">
                <span className="block font-display text-2xl font-black text-indigo-600">2015–2026</span>
                <span className="text-[10px] font-extrabold uppercase tracking-wider text-navy-500">Years Covered</span>
              </div>
              <div className="rounded-xl border border-inkline bg-slate-50/80 p-3.5 text-center">
                <span className="block font-display text-2xl font-black text-gold-600">{totalBundlesCount}</span>
                <span className="text-[10px] font-extrabold uppercase tracking-wider text-navy-500">Archive Bundles</span>
              </div>
              <div className="rounded-xl border border-inkline bg-slate-50/80 p-3.5 text-center">
                <span className="block font-display text-2xl font-black text-emerald-600">{totalPapersCount}</span>
                <span className="text-[10px] font-extrabold uppercase tracking-wider text-navy-500">Set Papers Listed</span>
              </div>
              <div className="rounded-xl border border-inkline bg-slate-50/80 p-3.5 text-center col-span-2 sm:col-span-1">
                <span className="block font-display text-2xl font-black text-emerald-600">100%</span>
                <span className="text-[10px] font-extrabold uppercase tracking-wider text-navy-500">CBSE Verified</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Guide Note Box */}
      <div className="container-x mt-6">
        <div className="flex items-start gap-3 rounded-xl border border-blue-200 bg-blue-50/70 p-4 text-xs leading-relaxed text-blue-950 sm:text-sm">
          <Info className="h-5 w-5 shrink-0 text-blue-600 mt-0.5" />
          <div>
            <span className="font-extrabold text-blue-900">How CBSE Q.P. codes work: </span>
            A CBSE Question Paper code is structured as <code className="rounded bg-blue-100 px-1.5 py-0.5 font-mono text-xs font-bold text-blue-800">Subject-Code / Region / Set</code> &mdash;
            for example, <code className="rounded bg-blue-100 px-1.5 py-0.5 font-mono text-xs font-bold text-blue-800">55/1/1</code> means Physics, Region 1 (Delhi), Set 1.
            Regions 2&ndash;5 denote All India and outside regions. Clicking any <b>Download ZIP</b> retrieves the complete official archive with all sets for that subject and year.
          </div>
        </div>
      </div>

      {/* ===================== FILTER & SEARCH BAR ===================== */}
      <div className="container-x mt-8">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          {/* Stream Filter Tabs */}
          <div className="flex flex-wrap items-center gap-1.5 rounded-xl border border-inkline bg-white p-1 shadow-sm">
            {(["all", "Science", "Commerce", "Humanities"] as StreamTab[]).map((tab) => (
              <button
                key={tab}
                type="button"
                onClick={() => setSelectedStream(tab)}
                className={cn(
                  "rounded-lg px-3.5 py-1.5 text-xs font-extrabold transition-all",
                  selectedStream === tab
                    ? "bg-navy-900 text-white shadow-sm"
                    : "text-navy-600 hover:bg-slate-100 hover:text-navy-950",
                )}
              >
                {tab === "all" ? "All 15 Subjects" : tab}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative min-w-[280px] sm:max-w-xs">
            <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-navy-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search subject or Q.P. code..."
              className="w-full rounded-xl border border-navy-200 bg-white py-2 pl-9 pr-4 text-xs font-semibold text-navy-900 placeholder:text-navy-400 focus:border-gold-500 focus:outline-none focus:ring-2 focus:ring-gold-500/20"
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
        </div>

        {/* ===================== COVERAGE MATRIX TABLE ===================== */}
        <div className="mt-8 overflow-hidden rounded-2xl border border-inkline bg-white shadow-sm">
          <div className="border-b border-inkline bg-slate-50/80 px-6 py-4">
            <h3 className="font-display text-base font-extrabold text-navy-900">
              Coverage Matrix &mdash; Set Papers Available per Subject &times; Year
            </h3>
            <p className="mt-0.5 text-xs text-navy-500">
              Click any subject row below to jump directly to its complete question paper archive and download links.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-center text-xs">
              <thead className="border-b border-inkline bg-slate-100/60 text-[11px] font-extrabold uppercase tracking-wider text-navy-600">
                <tr>
                  <th className="px-4 py-3 text-left">Subject</th>
                  <th className="px-2 py-3">Code</th>
                  {ALL_ARCHIVE_YEARS.slice().reverse().map((yr) => (
                    <th key={yr} className="px-2 py-3 font-mono">{yr}</th>
                  ))}
                  <th className="px-3 py-3 text-right">Bundles</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-inkline/60">
                {filteredArchives.map((archive) => {
                  const yearsMap = new Map(archive.years.map((y) => [y.year, y]));
                  return (
                    <tr
                      key={archive.subjectId}
                      onClick={() => setActiveSubjectId(archive.subjectId)}
                      className={cn(
                        "cursor-pointer transition-colors hover:bg-gold-50/50",
                        activeSubjectId === archive.subjectId ? "bg-indigo-50/60" : "",
                      )}
                    >
                      <td className="px-4 py-2.5 text-left font-bold text-navy-900 whitespace-nowrap">
                        <span className="hover:underline">{archive.subjectName}</span>
                      </td>
                      <td className="px-2 py-2.5 font-mono text-[11px] text-navy-500">{archive.subjectCode}</td>
                      {ALL_ARCHIVE_YEARS.slice().reverse().map((yr) => {
                        const yearData = yearsMap.get(yr);
                        if (!yearData) {
                          return (
                            <td key={yr} className="px-2 py-2.5 text-navy-300">
                              &middot;
                            </td>
                          );
                        }
                        const count = yearData.papers.reduce((s, p) => s + p.setsCount, 0);
                        return (
                          <td key={yr} className="px-2 py-2.5">
                            <span className="inline-block rounded bg-indigo-50 px-1.5 py-0.5 font-mono text-[11px] font-bold text-indigo-700">
                              {count}
                            </span>
                          </td>
                        );
                      })}
                      <td className="px-3 py-2.5 text-right font-extrabold text-navy-700">
                        {archive.totalBundles}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>

        {/* ===================== SUBJECT ARCHIVE CARDS ===================== */}
        <div className="mt-12 space-y-10">
          <div className="flex items-center justify-between">
            <h2 className="font-display text-2xl font-black text-navy-900">
              Subject Archives ({filteredArchives.length})
            </h2>
            <span className="text-xs font-bold text-navy-500">
              Showing official question paper bundles & sets
            </span>
          </div>

          {filteredArchives.map((archive) => (
            <div key={archive.subjectId} id={`archive-${archive.subjectId}`} className="scroll-mt-24">
              <SubjectPyqArchiveSection subjectId={archive.subjectId} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
