import { Link } from "react-router-dom";
import {
  ArrowRight,
  Bot,
  ClipboardList,
  Compass,
  FileText,
  Layers,
  MessageSquare,
  Search,
  ShieldAlert,
  Sparkles,
  Users,
} from "lucide-react";
import EmptyState from "@/components/EmptyState";
import { NestPlaceholder } from "@/components/NestPlaceholder";
import Reveal from "@/components/Reveal";
import { RESOURCE_TYPES, TONES } from "@/lib/utils";
import { cn } from "@/lib/utils";

const ROADMAP = [
  { icon: Sparkles, title: "AI-powered recommendations", body: "Resources ranked against your completed chapters, bookmarks and planner gaps.", stage: "Foundation ready" },
  { icon: MessageSquare, title: "AI doubt-solving assistant", body: "Paste a question from any subject and get a step-by-step worked solution.", stage: "In design" },
  { icon: FileText, title: "AI chapter summaries", body: "On-demand crisp summaries generated for every chapter in the syllabus.", stage: "In design" },
  { icon: ClipboardList, title: "AI quiz generator", body: "Auto-generated practice quizzes tuned to your difficulty preference.", stage: "Planned" },
  { icon: Users, title: "Community discussion forum", body: "Subject-wise threads where Class 12 students solve doubts together.", stage: "Planned" },
];

const FAQS = [
  {
    q: "Are the resources on StudyNest 12 verified?",
    a: "Not yet. This is a demo directory with realistic sample data. External links open official sites (NCERT, CBSE Academic, DIKSHA, ExamFear) or a YouTube search for the topic — nothing is claimed as curated or verified until real links replace the placeholders.",
  },
  {
    q: "Where is my data stored?",
    a: "In this demo, everything — your account, bookmarks, completed chapters, planner and recently viewed list — lives in your browser's local storage. The code is structured so a Supabase backend (auth + Postgres) can be dropped in later without rebuilding the UI.",
  },
  {
    q: "How are resources organised?",
    a: "Every resource is tagged with a subject, a chapter (or full-subject), one of 10 categories, language, difficulty and a preparation goal. That's what makes the search and filter system work across hundreds of future entries.",
  },
  {
    q: "Can I suggest a resource or report a broken link?",
    a: "Yes — every resource card has a Report action. Reports land in the admin panel, where they can be reviewed and marked resolved.",
  },
];

export default function About() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-inkline bg-navy-950">
        <div className="bg-hero-grid absolute inset-0" aria-hidden="true" />
        <div className="container-x relative py-16 lg:py-20">
          <p className="inline-flex items-center gap-2 rounded-full border border-navy-700 bg-navy-900/70 px-3.5 py-1.5 text-[11px] font-extrabold uppercase tracking-[0.16em] text-gold-300">
            <Compass className="h-3.5 w-3.5" />
            About StudyNest 12
          </p>
          <h1 className="mt-5 max-w-2xl font-display text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl">
            One nest for every lecture, note and paper you'll ever need.
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-navy-200">
            Class 12 preparation is scattered across dozens of YouTube channels, PDF drives and
            coaching sites. StudyNest 12 aggregates it into one organised, searchable directory —
            by subject, by chapter, by exactly what you need next.
          </p>
        </div>
      </section>

      {/* how it works */}
      <section className="container-x py-16">
        <Reveal>
          <h2 className="font-display text-3xl font-extrabold tracking-tight text-navy-900">How the nest works</h2>
        </Reveal>
        <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
          {[
            { icon: Search, step: "01", title: "Search or browse", body: "Start from a subject, a chapter, or a plain-text search across titles, chapters and channels." },
            { icon: Layers, step: "02", title: "Filter to your need", body: "Narrow by type, language, difficulty and goal — learning, practice or revision." },
            { icon: ArrowRight, step: "03", title: "Open at the source", body: "Every card links out to the original lecture or document in a new tab, with context kept here." },
            { icon: ClipboardList, step: "04", title: "Track and plan", body: "Bookmark what matters, tick chapters done, and let the planner draft your week." },
          ].map((s, i) => (
            <Reveal key={s.step} delay={i * 80}>
              <div className="card-hover h-full rounded-xl border border-inkline bg-white p-6 shadow-card">
                <div className="flex items-center justify-between">
                  <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-navy-900 text-gold-300">
                    <s.icon className="h-5 w-5" />
                  </span>
                  <span className="font-display text-3xl font-extrabold text-navy-100">{s.step}</span>
                </div>
                <h3 className="mt-4 font-display text-lg font-bold text-navy-900">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-navy-500">{s.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* categories */}
      <section className="border-y border-inkline bg-white">
        <div className="container-x py-16">
          <Reveal>
            <h2 className="font-display text-3xl font-extrabold tracking-tight text-navy-900">Ten ways to study a chapter</h2>
            <p className="mt-2 max-w-2xl text-sm leading-relaxed text-navy-500">
              Every subject and chapter page organises its resources into the same ten categories,
              so you always know where to look.
            </p>
          </Reveal>
          <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
            {RESOURCE_TYPES.map((t, i) => (
              <Reveal key={t.id} delay={(i % 5) * 50}>
                <Link
                  to={`/resources?types=${t.id}`}
                  className={cn("card-hover focus-ring flex h-full items-center gap-2.5 rounded-xl border bg-white p-3.5 shadow-card", TONES[t.tone].border)}
                >
                  <span className={cn("flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border", TONES[t.tone].chip)}>
                    <t.icon className="h-4 w-4" />
                  </span>
                  <span className="text-xs font-bold leading-snug text-navy-800">{t.label}</span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* roadmap */}
      <section className="container-x py-16">
        <Reveal>
          <div className="flex items-center gap-3">
            <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-navy-900 text-gold-300">
              <Bot className="h-5 w-5" />
            </span>
            <div>
              <h2 className="font-display text-3xl font-extrabold tracking-tight text-navy-900">Roadmap</h2>
              <p className="text-sm font-semibold text-navy-500">What's coming to the nest next</p>
            </div>
          </div>
        </Reveal>
        <div className="mt-8 space-y-3">
          {ROADMAP.map((r, i) => (
            <Reveal key={r.title} delay={i * 60}>
              <div className="flex flex-wrap items-center gap-4 rounded-xl border border-inkline bg-white p-5 shadow-card transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lift">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-gold-100 text-gold-600">
                  <r.icon className="h-5 w-5" />
                </span>
                <div className="min-w-0 flex-1">
                  <h3 className="font-display text-sm font-bold text-navy-900">{r.title}</h3>
                  <p className="mt-0.5 text-xs leading-relaxed text-navy-500">{r.body}</p>
                </div>
                <span className="rounded-full bg-navy-50 px-3 py-1 text-[10px] font-extrabold uppercase tracking-[0.12em] text-navy-600">
                  {r.stage}
                </span>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* data honesty */}
      <section className="container-x pb-16">
        <Reveal>
          <div className="flex flex-wrap items-start gap-4 rounded-xl border border-amber-200 bg-amber-50 p-6">
            <ShieldAlert className="h-6 w-6 shrink-0 text-amber-600" />
            <div className="min-w-0 flex-1">
              <h2 className="font-display text-lg font-bold text-navy-900">A note on data honesty</h2>
              <p className="mt-1.5 max-w-3xl text-sm leading-relaxed text-navy-600">
                StudyNest 12 does not claim any resource has been verified, curated or affiliated with its
                source. The current directory holds sample entries; links point to official education sites
                or YouTube topic searches until real curation replaces them. CBSE and NCERT are the
                authoritative sources for syllabus and papers.
              </p>
            </div>
          </div>
        </Reveal>
      </section>

      {/* FAQ */}
      <section className="container-x pb-20">
        <Reveal>
          <h2 className="font-display text-3xl font-extrabold tracking-tight text-navy-900">Questions students ask</h2>
        </Reveal>
        <div className="mt-6 max-w-3xl space-y-3">
          {FAQS.map((f, i) => (
            <Reveal key={f.q} delay={i * 50}>
              <details className="group rounded-xl border border-inkline bg-white shadow-card open:border-navy-200">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-5 py-4 font-display text-sm font-bold text-navy-900 [&::-webkit-details-marker]:hidden">
                  {f.q}
                  <span className="text-navy-400 transition-transform duration-200 group-open:rotate-45">
                    <ArrowRight className="h-4 w-4 -rotate-45" />
                  </span>
                </summary>
                <p className="border-t border-inkline px-5 py-4 text-sm leading-relaxed text-navy-500">{f.a}</p>
              </details>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}

export function NotFound() {
  return (
    <section className="container-x py-24">
      <EmptyState
        title="This page flew the nest"
        body="The page you're looking for doesn't exist. Head back to the homepage or browse the subject library."
        action={
          <div className="flex flex-wrap justify-center gap-3">
            <Link to="/" className="btn-navy">
              Back home
            </Link>
            <Link to="/subjects" className="btn-ghost">
              Browse subjects
            </Link>
          </div>
        }
      />
      <div className="mt-8 flex justify-center">
        <NestPlaceholder className="h-24 w-24" />
      </div>
    </section>
  );
}
