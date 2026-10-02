import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, ChevronRight, FileArchive, Search } from "lucide-react";
import AnimatedBar from "@/components/AnimatedBar";
import Reveal from "@/components/Reveal";
import EmptyState from "@/components/EmptyState";
import { useApp } from "@/context/AppContext";
import { hasPyqData, SUBJECTS } from "@/data/subjects";
import { cn, subjectIcon, TONES } from "@/lib/utils";

const STREAMS: Array<{ label: string; blurb: string; ids: string[] }> = [
  {
    label: "Science",
    blurb: "Core PCM/PCB plus computing — the heaviest syllabi, fully mapped.",
    ids: ["phy", "chem", "math", "bio", "cs"],
  },
  {
    label: "Commerce",
    blurb: "Accounts, business, economics and informatics — case-study ready.",
    ids: ["acc", "bst", "eco", "ip"],
  },
  {
    label: "Humanities & Languages",
    blurb: "Optional-rich stream: history, polity, geography, psychology, sociology and English Core.",
    ids: ["eng", "his", "pol", "geo", "psy", "soc"],
  },
];

export default function Subjects() {
  const { resources, completed } = useApp();
  const [q, setQ] = useState("");

  const perSubject = useMemo(() => {
    const map = new Map<string, number>();
    resources.forEach((r) => map.set(r.subjectId, (map.get(r.subjectId) ?? 0) + 1));
    return map;
  }, [resources]);

  const filtered = useMemo(() => {
    const query = q.trim().toLowerCase();
    if (!query) return SUBJECTS;
    return SUBJECTS.filter(
      (s) =>
        s.name.toLowerCase().includes(query) ||
        s.chapters.some((c) => c.name.toLowerCase().includes(query)),
    );
  }, [q]);

  return (
    <>
      <section className="border-b border-inkline bg-white">
        <div className="container-x py-12 lg:py-16">
          <p className="text-[11px] font-extrabold uppercase tracking-[0.18em] text-gold-600">Subject library</p>
          <div className="mt-2 flex flex-wrap items-end justify-between gap-6">
            <h1 className="max-w-xl font-display text-3xl font-extrabold tracking-tight text-navy-900 sm:text-4xl">
              Pick a subject, walk chapter by chapter
            </h1>
            <div className="relative w-full max-w-sm">
              <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-navy-300" />
              <input
                type="search"
                value={q}
                onChange={(e) => setQ(e.target.value)}
                placeholder="Filter by subject or chapter name…"
                aria-label="Filter subjects"
                className="input-base pl-9"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Official CBSE Board Papers Banner */}
      <div className="container-x mt-8">
        <Link
          to="/pyq-papers"
          className="card-hover group flex flex-col items-start justify-between gap-4 rounded-2xl border border-amber-300/80 bg-gradient-to-r from-amber-50 via-gold-50/60 to-white p-5 shadow-sm sm:flex-row sm:items-center sm:p-6"
        >
          <div className="flex items-start gap-4">
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-gold-300 bg-gold-400 text-navy-950 shadow-gold">
              <FileArchive className="h-6 w-6" />
            </span>
            <div>
              <div className="flex flex-wrap items-center gap-2">
                <span className="rounded-full bg-gold-200 px-2.5 py-0.5 text-[10px] font-black uppercase tracking-wider text-gold-950">
                  New CBSE Archive
                </span>
                <span className="text-xs font-bold text-navy-600">2015–2026 Board Papers &middot; All 15 Subjects</span>
              </div>
              <h3 className="mt-1 font-display text-base font-extrabold text-navy-900 sm:text-lg">
                Download Official CBSE Past-Year Question Paper Archives
              </h3>
              <p className="mt-0.5 text-xs text-navy-600">
                273 verified archive bundles and 1,703 set papers with Delhi, All India, Foreign and Compartment exams.
              </p>
            </div>
          </div>
          <span className="inline-flex items-center gap-1.5 rounded-xl bg-navy-950 px-4 py-2 text-xs font-extrabold text-gold-300 shadow-md transition-all group-hover:bg-navy-900 group-hover:text-gold-200">
            Browse All Papers
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </span>
        </Link>
      </div>

      <div className="container-x space-y-14 py-12 lg:py-16">
        {filtered.length === 0 ? (
          <EmptyState
            title="No subjects match that search"
            body="Try a different subject or chapter name — or clear the search to see all 15 subjects."
            action={
              <button type="button" onClick={() => setQ("")} className="btn-navy">
                Clear search
              </button>
            }
          />
        ) : (
          STREAMS.map((stream) => {
            const list = stream.ids
              .map((id) => filtered.find((s) => s.id === id))
              .filter((s): s is NonNullable<typeof s> => Boolean(s));
            if (list.length === 0) return null;
            return (
              <section key={stream.label}>
                <Reveal>
                  <div className="flex items-baseline gap-4">
                    <h2 className="font-display text-2xl font-extrabold tracking-tight text-navy-900">{stream.label}</h2>
                    <span className="hidden h-px flex-1 bg-inkline sm:block" />
                  </div>
                  <p className="mt-1.5 max-w-2xl text-sm leading-relaxed text-navy-500">{stream.blurb}</p>
                </Reveal>
                <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {list.map((s, i) => {
                    const Icon = subjectIcon(s.icon);
                    const tone = TONES[s.tone];
                    const doneCount = s.chapters.filter((c) => completed.includes(`${s.id}/${c.id}`)).length;
                    const pct = Math.round((doneCount / s.chapters.length) * 100);
                    return (
                      <Reveal key={s.id} delay={(i % 3) * 70}>
                        <Link
                          to={`/subjects/${s.id}`}
                          className="card-hover focus-ring group relative flex h-full flex-col overflow-hidden rounded-xl border border-inkline bg-white p-5 shadow-card"
                        >
                          <span className="text-outline pointer-events-none absolute -top-1 right-3 select-none font-display text-5xl font-extrabold" aria-hidden="true">
                            {String(SUBJECTS.indexOf(s) + 1).padStart(2, "0")}
                          </span>
                          <div className="flex items-start justify-between">
                            <span className={cn("relative flex h-12 w-12 items-center justify-center rounded-xl border transition-transform duration-300 group-hover:-rotate-6 group-hover:scale-110", tone.chip)}>
                              <Icon className="h-5.5 w-5.5" />
                            </span>
                            <ChevronRight className="h-5 w-5 text-navy-300 transition-all group-hover:translate-x-1 group-hover:text-navy-700" />
                          </div>
                          <h3 className="mt-4 font-display text-lg font-bold text-navy-900">{s.name}</h3>
                          <p className="mt-1 flex-1 text-xs leading-relaxed text-navy-500">{s.tagline}</p>
                          <div className="mt-4 flex flex-wrap items-center gap-2 text-[11px] font-bold text-navy-400">
                            <span className="rounded-md bg-navy-50 px-1.5 py-0.5 text-navy-600">{s.chapters.length} chapters</span>
                            <span className="rounded-md bg-navy-50 px-1.5 py-0.5 text-navy-600">{perSubject.get(s.id) ?? 0} resources</span>
                            {hasPyqData(s.id) ? (
                              <span className="rounded-md bg-indigo-50 border border-indigo-200/80 px-1.5 py-0.5 text-indigo-700 font-extrabold">
                                {s.chapters.length * 50} Board PYQs
                              </span>
                            ) : null}
                          </div>
                          <div className="mt-3">
                            <div className="flex items-center justify-between text-[10.5px] font-extrabold uppercase tracking-wide">
                              <span className="text-navy-400">Your progress</span>
                              <span className={pct === 100 ? "text-green-600" : "text-navy-600"}>
                                {doneCount}/{s.chapters.length} · {pct}%
                              </span>
                            </div>
                            <AnimatedBar
                              className="mt-1.5 h-1.5"
                              pct={Math.max(pct, doneCount > 0 ? 6 : 0)}
                              barClass={pct === 100 ? "bg-green-500" : tone.bar}
                            />
                          </div>
                          <span className={cn("absolute inset-x-0 bottom-0 h-[3px] opacity-0 transition-opacity duration-300 group-hover:opacity-100", tone.bar)} aria-hidden="true" />
                        </Link>
                      </Reveal>
                    );
                  })}
                </div>
              </section>
            );
          })
        )}
      </div>
    </>
  );
}
