import { useEffect, useMemo, useRef, useState, type FormEvent } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  ArrowRight,
  ArrowUpRight,
  Bot,
  CalendarClock,
  ChevronLeft,
  ChevronRight,
  ClipboardList,
  Clock,
  FileArchive,
  FileQuestion,
  FileText,
  MessageSquare,
  NotebookPen,
  PlayCircle,
  Search,
  Sparkles,
  Users,
  Zap,
} from "lucide-react";
import Reveal from "@/components/Reveal";
import ResourceCard from "@/components/ResourceCard";
import { useApp } from "@/context/AppContext";
import { useCountUp } from "@/lib/useCountUp";
import { CHANNELS, channelSearchUrl } from "@/data/channels";
import { SUBJECTS, TOTAL_CHAPTERS } from "@/data/subjects";
import { cn, RESOURCE_TYPES, subjectIcon, TONES, typeMeta } from "@/lib/utils";

const HERO_CHIPS = [
  { label: "Board Papers 2015–26", to: "/pyq-papers" },
  { label: "Chapterwise PYQs", to: "/subjects" },
  { label: "One-shots", to: "/resources?types=one-shot" },
  { label: "Sample papers", to: "/resources?types=sample-papers" },
  { label: "Notes", to: "/resources?types=notes" },
];

function getExamSchedule() {
  const now = new Date();
  const currentYear = now.getFullYear();
  // CBSE board exams start around Feb 15
  const feb15ThisYear = new Date(currentYear, 1, 15, 0, 0, 0);
  const examDate = now > feb15ThisYear ? new Date(currentYear + 1, 1, 15, 0, 0, 0) : feb15ThisYear;
  const prepStartYear = examDate.getFullYear() - 1;
  const prepStartDate = new Date(prepStartYear, 3, 1, 0, 0, 0);
  return { examDate, prepStartDate, prepStartYearShort: String(prepStartYear).slice(-2) };
}

export default function Home() {
  const { resources } = useApp();
  const navigate = useNavigate();
  const [q, setQ] = useState("");
  const searchRef = useRef<HTMLInputElement>(null);
  const railRef = useRef<HTMLDivElement>(null);

  const recommended = useMemo(() => {
    const list = resources.filter((r) => r.recommended);
    return (list.length > 0 ? list : resources).slice(0, 10);
  }, [resources]);

  const perSubject = useMemo(() => {
    const map = new Map<string, number>();
    resources.forEach((r) => map.set(r.subjectId, (map.get(r.subjectId) ?? 0) + 1));
    return map;
  }, [resources]);

  const perType = useMemo(() => {
    const map = new Map<string, number>();
    resources.forEach((r) => map.set(r.type, (map.get(r.type) ?? 0) + 1));
    return map;
  }, [resources]);

  const submit = (e: FormEvent) => {
    e.preventDefault();
    navigate(q.trim() ? `/resources?q=${encodeURIComponent(q.trim())}` : "/resources");
  };

  /* "/" focuses the hero search from anywhere on the page */
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      const t = e.target as HTMLElement;
      if (e.key === "/" && !["INPUT", "TEXTAREA", "SELECT"].includes(t.tagName)) {
        e.preventDefault();
        searchRef.current?.focus();
        searchRef.current?.scrollIntoView({ block: "center", behavior: "smooth" });
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const scrollRail = (dir: number) =>
    railRef.current?.scrollBy({ left: dir * 404, behavior: "smooth" });

  return (
    <>
      {/* ============================== HERO ============================== */}
      <section className="relative overflow-hidden bg-navy-950">
        <div className="bg-hero-grid absolute inset-0" aria-hidden="true" />
        <div
          className="absolute -right-40 -top-40 h-[480px] w-[480px] rounded-full opacity-25 blur-3xl"
          style={{ background: "radial-gradient(circle, #f5b93b 0%, transparent 65%)" }}
          aria-hidden="true"
        />
        <div
          className="absolute -bottom-52 -left-32 h-[420px] w-[420px] rounded-full opacity-20 blur-3xl"
          style={{ background: "radial-gradient(circle, #274b99 0%, transparent 65%)" }}
          aria-hidden="true"
        />

        <div className="container-x relative grid grid-cols-1 items-center gap-12 pb-32 pt-16 lg:grid-cols-[1.05fr_0.95fr] lg:pb-36 lg:pt-24">
          <div className="animate-fade-up">
            <p className="inline-flex items-center gap-2 rounded-full border border-navy-700 bg-navy-900/70 px-3.5 py-1.5 text-[11px] font-extrabold uppercase tracking-[0.16em] text-gold-300">
              <Sparkles className="h-3.5 w-3.5" />
              CBSE Class 12 · Session 2025–26
            </p>
            <h1 className="mt-5 font-display text-4xl font-extrabold leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-[3.5rem]">
              All Your Class 12 Resources,{" "}
              <span className="relative inline-block glow-nest">
                {/* Text with animated gold metallic shimmer */}
                <span className="text-shimmer-gold">One Nest.</span>

                {/* Glowing curved underline */}
                <svg viewBox="0 0 220 12" className="absolute -bottom-2 left-0 w-full drop-shadow-[0_0_8px_rgba(245,185,59,0.7)]" aria-hidden="true">
                  <path d="M3 9c40-6 140-8 214-4" fill="none" stroke="#f5b93b" strokeWidth="4.5" strokeLinecap="round" opacity=".9" />
                </svg>
              </span>
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-navy-200 sm:text-lg">
              Discover lectures, notes, PYQs, sample papers and revision material —
              aggregated from trusted educators and organised by subject and chapter,
              so you spend time studying, not searching.
            </p>

            <form onSubmit={submit} className="mt-8 flex max-w-xl items-stretch gap-2 rounded-xl border border-navy-700 bg-navy-900/80 p-2 shadow-lift backdrop-blur-sm transition-colors focus-within:border-gold-400/70">
              <Search className="ml-2.5 mt-auto mb-auto h-5 w-5 shrink-0 text-navy-300" aria-hidden="true" />
              <input
                ref={searchRef}
                type="search"
                value={q}
                onChange={(e) => setQ(e.target.value)}
                placeholder="Search subjects, chapters, or resources..."
                aria-label="Search subjects, chapters, or resources"
                className="w-full bg-transparent py-2 text-base sm:text-sm font-semibold text-white placeholder:text-navy-300 focus:outline-none"
              />
              <kbd className="pointer-events-none mt-auto mb-auto hidden h-7 w-7 items-center justify-center rounded-md border border-navy-700 bg-navy-800 font-sans text-[11px] font-bold text-navy-300 sm:flex" aria-hidden="true">
                /
              </kbd>
              <button type="submit" className="focus-ring btn-gold shrink-0 px-4 sm:px-5">
                Search
              </button>
            </form>

            <div className="mt-4 flex flex-wrap items-center gap-2">
              <span className="text-[11px] font-extrabold uppercase tracking-[0.14em] text-navy-400">Jump to</span>
              {HERO_CHIPS.map((c) => (
                <Link
                  key={c.label}
                  to={c.to}
                  className="focus-ring rounded-full border border-navy-700 bg-navy-900/60 px-3 py-1 text-xs font-bold text-navy-200 transition-all duration-200 hover:-translate-y-0.5 hover:border-gold-400/60 hover:text-gold-300"
                >
                  {c.label}
                </Link>
              ))}
            </div>

            {/* Mobile Exam Countdown & PYQ Badge */}
            <div className="mt-6 flex flex-col gap-3 rounded-xl border border-navy-700/80 bg-navy-900/80 p-4 shadow-lift backdrop-blur-sm lg:hidden">
              <div className="flex items-center justify-between gap-3">
                <div className="flex items-center gap-2.5">
                  <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-gold-400/15 text-gold-300">
                    <CalendarClock className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="font-display text-lg font-extrabold leading-tight text-white">
                      <CountdownDays />
                      <span className="ml-1 text-xs font-bold text-navy-300">days to board exams</span>
                    </p>
                    <p className="text-[10px] font-bold text-navy-400">
                      Prep window {prepPct()}% gone
                    </p>
                  </div>
                </div>
                <Link
                  to="/resources?types=pyq"
                  className="rounded-lg bg-gradient-to-r from-gold-400 to-gold-500 px-3 py-1.5 text-xs font-extrabold text-navy-950 shadow-sm transition-transform active:scale-95"
                >
                  PYQs Bank →
                </Link>
              </div>
              <div className="h-1.5 overflow-hidden rounded-full bg-navy-800">
                <div className="h-full rounded-full bg-gradient-to-r from-gold-300 to-gold-500 transition-all duration-500" style={{ width: `${prepPct()}%` }} />
              </div>
            </div>
          </div>

          {/* collage */}
          <div className="relative hidden lg:block" aria-hidden="true">
            <div className="relative mx-auto h-[430px] max-w-md">
              <HeroCard className="absolute left-0 top-8 w-72 rotate-[-3deg] animate-float-slow" query="Electric Charges" index={0} />
              <HeroCard className="absolute right-0 top-0 w-72 rotate-[2.5deg] animate-float" query="Integrals" index={1} />
              <div
                className="absolute bottom-0 left-10 w-64 rotate-[-1.5deg] animate-float rounded-xl border border-navy-700 bg-navy-900/90 p-4 shadow-lift backdrop-blur-sm"
                style={{ animationDelay: "0.6s" }}
              >
                <div className="flex items-center gap-3">
                  <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-gold-400/15 text-gold-300">
                    <CalendarClock className="h-5.5 w-5.5" />
                  </span>
                  <div>
                    <p className="font-display text-2xl font-extrabold leading-none text-white">
                      <CountdownDays />
                      <span className="ml-1 text-sm font-bold text-navy-300">days</span>
                    </p>
                    <p className="mt-1 text-[10px] font-extrabold uppercase tracking-[0.16em] text-navy-300">to board exams</p>
                  </div>
                </div>
                <div className="mt-3.5 h-1.5 overflow-hidden rounded-full bg-navy-800">
                  <div className="h-full rounded-full bg-gradient-to-r from-gold-300 to-gold-500" style={{ width: `${prepPct()}%` }} />
                </div>
                <p className="mt-2 text-[10.5px] font-bold text-navy-400">
                  Prep window {prepPct()}% gone · starts 1 Apr '{getExamSchedule().prepStartYearShort}
                </p>
              </div>
              <div className="absolute -left-6 bottom-28 rotate-[-6deg] animate-float-slow rounded-lg bg-gradient-to-b from-gold-300 to-gold-500 px-3 py-1.5 text-[11px] font-extrabold uppercase tracking-wide text-navy-950 shadow-lift">
                PYQs 2015–2025 inside
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================= STATS (overlap) ========================= */}
      <section className="container-x relative z-10 -mt-20">
        <Reveal>
          <div className="grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-inkline bg-inkline shadow-lift md:grid-cols-4">
            <CountStat value={SUBJECTS.length} label="Subjects covered" />
            <CountStat value={TOTAL_CHAPTERS} suffix="+" label="Chapters organised" />
            <CountStat value={resources.length} suffix="+" label="Resources in the nest" />
            <CountStat value={RESOURCE_TYPES.length} label="Resource categories" />
          </div>
        </Reveal>
      </section>

      {/* ============================== TICKER ============================== */}
      <Ticker />

      {/* ============================= SUBJECTS ============================= */}
      <section className="container-x py-16 lg:py-20">
        <Reveal>
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="text-[11px] font-extrabold uppercase tracking-[0.18em] text-gold-600">Start with a subject</p>
              <h2 className="mt-2 font-display text-3xl font-extrabold tracking-tight text-navy-900 sm:text-4xl">
                Every subject. Every chapter.
              </h2>
            </div>
            <Link to="/subjects" className="focus-ring group inline-flex items-center gap-1.5 rounded-lg text-sm font-bold text-navy-700 transition-colors hover:text-navy-950">
              Browse all subjects
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </div>
        </Reveal>

        <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {SUBJECTS.map((s, i) => {
            const Icon = subjectIcon(s.icon);
            const tone = TONES[s.tone];
            return (
              <Reveal key={s.id} delay={(i % 3) * 70}>
                <Link
                  to={`/subjects/${s.id}`}
                  className="card-hover focus-ring group relative flex h-full items-start gap-4 overflow-hidden rounded-xl border border-inkline bg-white p-5 shadow-card"
                >
                  <span className="text-outline pointer-events-none absolute -top-1 right-3 select-none font-display text-5xl font-extrabold" aria-hidden="true">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className={cn("relative flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border transition-transform duration-300 group-hover:-rotate-6 group-hover:scale-110", tone.chip)}>
                    <Icon className="h-5.5 w-5.5" />
                  </span>
                  <span className="relative min-w-0 flex-1">
                    <span className="flex items-center justify-between gap-2">
                      <span className="font-display text-[15px] font-bold text-navy-900">{s.name}</span>
                      <ChevronRight className="h-4 w-4 shrink-0 text-navy-300 transition-all group-hover:translate-x-0.5 group-hover:text-navy-600" />
                    </span>
                    <span className="mt-1 line-clamp-2 block text-xs leading-relaxed text-navy-500">{s.tagline}</span>
                    <span className="mt-2.5 flex flex-wrap items-center gap-2 text-[11px] font-bold text-navy-400">
                      <span className="rounded-md bg-navy-50 px-1.5 py-0.5 text-navy-600">{s.chapters.length} chapters</span>
                      <span className="rounded-md bg-navy-50 px-1.5 py-0.5 text-navy-600">{perSubject.get(s.id) ?? 0} resources</span>
                      {["phy", "chem", "math", "bio", "cs", "bst", "geo", "pol", "ip", "eco", "his"].includes(s.id) ? (
                        <span className="rounded-md bg-indigo-50 border border-indigo-200/80 px-1.5 py-0.5 text-indigo-700 font-extrabold">
                          {s.chapters.length * 50} PYQs
                        </span>
                      ) : null}
                    </span>
                  </span>
                  <span className={cn("absolute inset-x-0 bottom-0 h-[3px] opacity-0 transition-opacity duration-300 group-hover:opacity-100", tone.bar)} aria-hidden="true" />
                </Link>
              </Reveal>
            );
          })}
        </div>
      </section>

      {/* ============================ CATEGORIES ============================ */}
      <section className="border-y border-inkline bg-white">
        <div className="container-x py-16 lg:py-20">
          <Reveal>
            <div className="flex flex-wrap items-end justify-between gap-4">
              <div>
                <p className="text-[11px] font-extrabold uppercase tracking-[0.18em] text-gold-600">Ten categories, zero hunting</p>
                <h2 className="mt-2 font-display text-3xl font-extrabold tracking-tight text-navy-900 sm:text-4xl">
                  Whatever you need, it has a shelf
                </h2>
              </div>
              <Link to="/resources" className="focus-ring group inline-flex items-center gap-1.5 rounded-lg text-sm font-bold text-navy-700 transition-colors hover:text-navy-950">
                Open full directory
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </Link>
            </div>
          </Reveal>
          <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
            {RESOURCE_TYPES.map((t, i) => {
              const tone = TONES[t.tone];
              return (
                <Reveal key={t.id} delay={(i % 5) * 50}>
                  <Link
                    to={`/resources?types=${t.id}`}
                    className="card-hover focus-ring group relative flex h-full flex-col gap-3 overflow-hidden rounded-xl border border-inkline bg-paper p-4 shadow-card"
                  >
                    <span className={cn("flex h-10 w-10 items-center justify-center rounded-lg border transition-transform duration-300 group-hover:-rotate-6 group-hover:scale-110", tone.chip)}>
                      <t.icon className="h-5 w-5" />
                    </span>
                    <span className="font-display text-[13px] font-bold leading-snug text-navy-900">{t.label}</span>
                    <span className="mt-auto inline-flex items-center gap-1 text-[11px] font-extrabold text-navy-400 transition-colors group-hover:text-navy-700">
                      {perType.get(t.id) ?? 0} resources
                      <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-0.5" />
                    </span>
                    <span className={cn("absolute inset-x-0 bottom-0 h-[3px] opacity-0 transition-opacity duration-300 group-hover:opacity-100", tone.bar)} aria-hidden="true" />
                  </Link>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* =========================== QUICK ACCESS =========================== */}
      <section className="container-x py-16 lg:py-20">
        <Reveal>
          <p className="text-[11px] font-extrabold uppercase tracking-[0.18em] text-gold-600">Exam essentials</p>
          <h2 className="mt-2 font-display text-3xl font-extrabold tracking-tight text-navy-900 sm:text-4xl">
            Straight to what boards ask
          </h2>
        </Reveal>
        <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-3">
          <Reveal>
            <Link to="/pyq-papers" className="card-hover focus-ring group relative flex h-full flex-col justify-between overflow-hidden rounded-xl bg-navy-950 p-6 shadow-card">
              <div className="bg-hero-grid absolute inset-0" aria-hidden="true" />
              <div className="relative">
                <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-gradient-to-b from-gold-300 to-gold-500 text-navy-950 shadow-gold">
                  <FileArchive className="h-5.5 w-5.5" />
                </span>
                <h3 className="mt-4 font-display text-xl font-bold text-white">CBSE Past-Year Question Papers</h3>
                <p className="mt-2 text-sm leading-relaxed text-navy-300">
                  Over a decade of official board question papers (2015–2026), Delhi, All India, Foreign &amp; Compartment sets — verified cbse.gov.in archives.
                </p>
              </div>
              <span className="relative mt-5 inline-flex items-center gap-1.5 text-sm font-bold text-gold-300">
                Download Official Papers
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </span>
            </Link>
          </Reveal>
          <Reveal delay={80}>
            <Link to="/resources?types=sample-papers" className="card-hover focus-ring group flex h-full flex-col justify-between rounded-xl border-2 border-navy-900 bg-white p-6 shadow-card">
              <div>
                <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-gradient-to-b from-navy-800 to-navy-950 text-gold-300">
                  <FileText className="h-5.5 w-5.5" />
                </span>
                <h3 className="mt-4 font-display text-xl font-bold text-navy-900">Sample Papers</h3>
                <p className="mt-2 text-sm leading-relaxed text-navy-500">
                  Official 2025–26 sample papers with marking schemes for every subject.
                </p>
              </div>
              <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-bold text-navy-800">
                Practise papers
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </span>
            </Link>
          </Reveal>
          <Reveal delay={160}>
            <Link to="/resources?types=one-shot,revision" className="card-hover focus-ring group flex h-full flex-col justify-between rounded-xl border border-gold-200 bg-gradient-to-b from-gold-50 to-gold-100/60 p-6 shadow-card">
              <div>
                <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-gradient-to-b from-gold-300 to-gold-500 text-navy-950 shadow-gold">
                  <Zap className="h-5.5 w-5.5" />
                </span>
                <h3 className="mt-4 font-display text-xl font-bold text-navy-900">Rapid Revision</h3>
                <p className="mt-2 text-sm leading-relaxed text-navy-600/80">
                  One-shots, formula sheets and marathons for the last 30 days before boards.
                </p>
              </div>
              <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-bold text-gold-700">
                Revise faster
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </span>
            </Link>
          </Reveal>
        </div>
      </section>

      {/* ============================ FEATURED ============================ */}
      <section className="border-t border-inkline bg-white">
        <div className="container-x py-16 lg:py-20">
          <Reveal>
            <div className="flex flex-wrap items-end justify-between gap-4">
              <div>
                <p className="text-[11px] font-extrabold uppercase tracking-[0.18em] text-gold-600">Hand-picked</p>
                <h2 className="mt-2 font-display text-3xl font-extrabold tracking-tight text-navy-900 sm:text-4xl">
                  Featured & recommended
                </h2>
                <p className="mt-2 max-w-xl text-sm leading-relaxed text-navy-500">
                  High-yield hand-picked resources and official curriculum materials to jumpstart your preparation.
                </p>
              </div>
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => scrollRail(-1)}
                  aria-label="Scroll featured resources back"
                  className="focus-ring flex h-10 w-10 items-center justify-center rounded-full border border-inkline bg-white text-navy-700 shadow-card transition-all hover:border-navy-300 hover:shadow-lift active:scale-95"
                >
                  <ChevronLeft className="h-4.5 w-4.5" />
                </button>
                <button
                  type="button"
                  onClick={() => scrollRail(1)}
                  aria-label="Scroll featured resources forward"
                  className="focus-ring flex h-10 w-10 items-center justify-center rounded-full border border-inkline bg-white text-navy-700 shadow-card transition-all hover:border-navy-300 hover:shadow-lift active:scale-95"
                >
                  <ChevronRight className="h-4.5 w-4.5" />
                </button>
                <Link to="/resources?sort=recommended" className="focus-ring group ml-1 inline-flex items-center gap-1.5 rounded-lg text-sm font-bold text-navy-700 transition-colors hover:text-navy-950">
                  View all
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </Link>
              </div>
            </div>
          </Reveal>

          <div className="relative mt-8">
            <div className="pointer-events-none absolute inset-y-0 left-0 z-10 hidden w-12 bg-gradient-to-r from-white to-transparent lg:block" aria-hidden="true" />
            <div className="pointer-events-none absolute inset-y-0 right-0 z-10 hidden w-12 bg-gradient-to-l from-white to-transparent lg:block" aria-hidden="true" />
            <div ref={railRef} className="no-scrollbar touch-scroll -mx-4 flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth px-4 pb-2 sm:mx-0 sm:px-0">
              {recommended.map((r) => (
                <div key={r.id} className="w-[86vw] max-w-[390px] shrink-0 snap-start sm:w-[390px]">
                  <ResourceCard resource={r} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ============================ CHANNELS ============================ */}
      <section className="border-t border-inkline">
        <div className="container-x py-16 lg:py-20">
          <Reveal>
            <div className="flex flex-wrap items-end justify-between gap-4">
              <div>
                <p className="text-[11px] font-extrabold uppercase tracking-[0.18em] text-gold-600">Where the lectures live</p>
                <h2 className="mt-2 font-display text-3xl font-extrabold tracking-tight text-navy-900 sm:text-4xl">
                  Popular YouTube channels
                </h2>
                <p className="mt-2 max-w-xl text-sm leading-relaxed text-navy-500">
                  Educators Class 12 students already trust. Cards open a YouTube search —
                  no affiliation or verification implied.
                </p>
              </div>
            </div>
          </Reveal>
          <div className="no-scrollbar touch-scroll -mx-4 mt-8 flex snap-x gap-4 overflow-x-auto px-4 pb-2 sm:mx-0 sm:grid sm:grid-cols-2 sm:overflow-visible sm:px-0 sm:pb-0 lg:grid-cols-5">
            {CHANNELS.slice(0, 10).map((c, i) => {
              const tone = TONES[c.tone];
              return (
                <Reveal key={c.id} delay={(i % 5) * 60} className="min-w-[230px] snap-start sm:min-w-0">
                  <a
                    href={channelSearchUrl(c.name)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="card-hover focus-ring group relative flex h-full flex-col overflow-hidden rounded-xl border border-inkline bg-white p-5 shadow-card"
                  >
                    <span className={cn("flex h-11 w-11 items-center justify-center rounded-xl border font-display text-sm font-extrabold transition-transform duration-300 group-hover:-rotate-6 group-hover:scale-110", tone.chip)}>
                      {c.initials}
                    </span>
                    <span className="mt-3 font-display text-sm font-bold leading-snug text-navy-900">{c.name}</span>
                    <span className={cn("mt-2 inline-flex w-fit rounded-md border px-1.5 py-0.5 text-[10px] font-extrabold uppercase tracking-wide", tone.chip)}>{c.focus}</span>
                    <span className="mt-2 flex-1 text-xs leading-relaxed text-navy-500">{c.note}</span>
                    <span className="mt-3 inline-flex items-center gap-1 text-[11px] font-extrabold uppercase tracking-wide text-navy-400 transition-colors group-hover:text-navy-800">
                      Open on YouTube
                      <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                    </span>
                    <span className={cn("absolute inset-x-0 bottom-0 h-[3px] opacity-0 transition-opacity duration-300 group-hover:opacity-100", tone.bar)} aria-hidden="true" />
                  </a>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ============================ AI ROADMAP ============================ */}
      <section className="relative overflow-hidden bg-navy-950">
        <div className="bg-hero-grid absolute inset-0" aria-hidden="true" />
        <div
          className="absolute -top-32 right-0 h-96 w-96 rounded-full opacity-20 blur-3xl"
          style={{ background: "radial-gradient(circle, #f5b93b 0%, transparent 65%)" }}
          aria-hidden="true"
        />
        <div className="container-x relative py-16 lg:py-20">
          <Reveal>
            <div className="max-w-2xl">
              <p className="inline-flex items-center gap-2 rounded-full border border-navy-700 bg-navy-900/70 px-3.5 py-1.5 text-[11px] font-extrabold uppercase tracking-[0.16em] text-gold-300">
                <Bot className="h-3.5 w-3.5" />
                StudyBust Intelligence · Coming soon
              </p>
              <h2 className="mt-4 font-display text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
                An AI study partner is joining the nest
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-navy-300 sm:text-base">
                The foundation is being built now. These tools will plug straight into your
                bookmarks, progress and planner.
              </p>
            </div>
          </Reveal>
          <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {[
              { icon: Sparkles, title: "AI Recommendations", body: "Picks tuned to your progress and weak chapters." },
              { icon: MessageSquare, title: "AI Doubt Solver", body: "Step-by-step answers to any doubt, any time." },
              { icon: FileText, title: "AI Chapter Summaries", body: "Crisp auto-summaries for every chapter." },
              { icon: ClipboardList, title: "AI Quiz Generator", body: "Practice quizzes built from your syllabus." },
              { icon: Users, title: "Community Forum", body: "Discuss doubts with fellow Class 12 students." },
            ].map((f, i) => (
              <Reveal key={f.title} delay={i * 70}>
                <div className="group relative h-full overflow-hidden rounded-xl border border-navy-800 bg-navy-900/80 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-navy-600">
                  <span className="absolute right-3 top-3 rounded-full bg-navy-800 px-2 py-0.5 text-[9px] font-extrabold uppercase tracking-[0.12em] text-gold-300">
                    Soon
                  </span>
                  <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-gold-400/15 text-gold-300 transition-transform duration-300 group-hover:scale-110">
                    <f.icon className="h-5 w-5" />
                  </span>
                  <h3 className="mt-3.5 font-display text-sm font-bold text-white">{f.title}</h3>
                  <p className="mt-1.5 text-xs leading-relaxed text-navy-300">{f.body}</p>
                  <span className="absolute inset-x-0 bottom-0 h-[3px] bg-gradient-to-r from-gold-300 to-gold-500 opacity-0 transition-opacity duration-300 group-hover:opacity-100" aria-hidden="true" />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============================== CTA ============================== */}
      <section className="container-x py-16 lg:py-20">
        <Reveal>
          <div className="relative overflow-hidden rounded-2xl border border-gold-200 bg-gradient-to-b from-gold-50 to-gold-100/70 px-6 py-14 text-center sm:px-12">
            <div className="bg-dots absolute inset-0 opacity-60" aria-hidden="true" />
            <span className="text-outline pointer-events-none absolute -right-6 -top-14 hidden select-none font-display text-[13rem] font-extrabold leading-none md:block" aria-hidden="true">
              12
            </span>
            <div className="relative">
              <p className="inline-flex items-center gap-2 rounded-full border border-gold-300 bg-white/70 px-3.5 py-1.5 text-[11px] font-extrabold uppercase tracking-[0.16em] text-gold-700">
                <CalendarClock className="h-3.5 w-3.5" />
                <CountdownDays /> days to boards — every day counts
              </p>
              <h2 className="mx-auto mt-4 max-w-2xl font-display text-3xl font-extrabold tracking-tight text-navy-950 sm:text-4xl">
                Boards reward the organised. Start your nest today.
              </h2>
              <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-navy-600/90 sm:text-base">
                Bookmark resources, tick off chapters, plan your week — your progress stays on this device.
              </p>
              <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
                <Link to="/dashboard" className="focus-ring btn-navy px-6 py-3">
                  Open study dashboard
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link to="/auth" className="focus-ring btn-ghost px-6 py-3">
                  Create free account
                </Link>
              </div>
            </div>
          </div>
        </Reveal>
      </section>
    </>
  );
}

/* ---------- helpers ---------- */

function prepPct(): number {
  const { examDate, prepStartDate } = getExamSchedule();
  const total = examDate.getTime() - prepStartDate.getTime();
  const done = Date.now() - prepStartDate.getTime();
  return Math.min(100, Math.max(4, Math.round((done / total) * 100)));
}

function CountdownDays() {
  const { examDate } = getExamSchedule();
  const days = Math.max(0, Math.ceil((examDate.getTime() - Date.now()) / 86400000));
  return <>{days}</>;
}

function Ticker() {
  const Row = ({ hidden }: { hidden?: boolean }) => (
    <div className="flex shrink-0 items-center" aria-hidden={hidden || undefined}>
      {SUBJECTS.map((s) => (
        <span key={s.id} className="flex items-center">
          <span className="px-5 font-display text-[13px] font-extrabold uppercase tracking-[0.18em]">{s.name}</span>
          <span className="text-navy-900/40">✦</span>
        </span>
      ))}
    </div>
  );
  return (
    <div className="overflow-hidden border-y border-gold-600/40 bg-gradient-to-b from-gold-300 to-gold-400 py-3 text-navy-950">
      <div className="flex min-w-max animate-marquee">
        <Row />
        <Row hidden />
      </div>
    </div>
  );
}

function CountStat({ value, suffix = "", label }: { value: number; suffix?: string; label: string }) {
  const { ref, value: v } = useCountUp<HTMLDivElement>(value);
  return (
    <div ref={ref} className="bg-white px-4 py-7 text-center sm:py-8">
      <p className="font-display text-3xl font-extrabold tabular-nums text-navy-900 sm:text-4xl">
        {v}
        <span className="text-gold-500">{suffix}</span>
      </p>
      <p className="mt-1.5 text-[10px] font-extrabold uppercase tracking-[0.16em] text-navy-400 sm:text-[10.5px]">{label}</p>
    </div>
  );
}

function HeroCard({
  className,
  query,
  index = 0,
}: {
  className?: string;
  query?: string;
  index?: number;
}) {
  const { resources } = useApp();
  const pick =
    (query
      ? resources.find((r) => r.title.toLowerCase().includes(query.toLowerCase()) && r.recommended) ??
        resources.find((r) => r.title.toLowerCase().includes(query.toLowerCase()))
      : undefined) ??
    resources.filter((r) => r.recommended)[index] ??
    resources[index];
  if (!pick) return null;
  const meta = typeMeta(pick.type);
  const Icon = meta.id === "yt-lectures" ? PlayCircle : meta.id === "notes" ? NotebookPen : meta.icon;
  return (
    <div className={cn("rounded-xl border border-inkline bg-white p-4 shadow-lift", className)}>
      <div className="flex items-center justify-between gap-2">
        <span className={cn("inline-flex items-center gap-1 rounded-md border px-2 py-0.5 text-[10px] font-extrabold", TONES[meta.tone].chip)}>
          <Icon className="h-3 w-3" />
          {meta.short}
        </span>
        <span className="inline-flex items-center gap-1 text-[10px] font-bold text-navy-400">
          <Clock className="h-3 w-3" />
          {pick.duration ? `${Math.round(pick.duration / 60)}h` : "PDF"}
        </span>
      </div>
      <p className="mt-2.5 line-clamp-2 font-display text-[13px] font-bold leading-snug text-navy-900">{pick.title}</p>
      <p className="mt-1.5 text-[11px] font-bold text-navy-400">{pick.source}</p>
      <div className="mt-3 h-1 overflow-hidden rounded-full bg-navy-100">
        <div className="h-full w-[64%] rounded-full bg-gradient-to-r from-navy-800 to-navy-500" />
      </div>
      <p className="mt-1.5 text-[10px] font-bold text-navy-400">64% watched · sample preview</p>
    </div>
  );
}
