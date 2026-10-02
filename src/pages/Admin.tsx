import { useEffect, useMemo, useState, type FormEvent } from "react";
import { Link } from "react-router-dom";
import {
  AlertCircle,
  ArrowLeft,
  Check,
  CheckCircle2,
  Eye,
  EyeOff,
  FileWarning,
  KeyRound,
  LayoutGrid,
  Lock,
  LogOut,
  Mail,
  Pencil,
  Plus,
  Search,
  Shield,
  ShieldCheck,
  Star,
  Trash2,
  X,
} from "lucide-react";
import EmptyState from "@/components/EmptyState";
import { useApp } from "@/context/AppContext";
import { SUBJECTS, subjectById } from "@/data/subjects";
import type { Difficulty, Goal, Language, Resource, ResourceType, SourceKind } from "@/lib/types";
import { cn, RESOURCE_TYPES, TONES, typeMeta } from "@/lib/utils";
import {
  hashPassword,
  ADMIN_PASSWORD_HASH,
  ADMIN_EMAILS,
  createSessionToken,
  validateSessionToken,
  rateLimit,
  sanitizeText,
  isSafeUrl,
} from "@/lib/security";

type Tab = "directory" | "form" | "reports";

const ADMIN_STORAGE_KEY = "studybust12_admin_session";

interface FormState {
  title: string;
  subjectId: string;
  chapterId: string;
  type: ResourceType;
  source: string;
  sourceKind: SourceKind;
  language: Language;
  difficulty: Difficulty;
  goal: Goal;
  duration: string;
  description: string;
  url: string;
  recommended: boolean;
}

const BLANK: FormState = {
  title: "",
  subjectId: "phy",
  chapterId: "",
  type: "yt-lectures",
  source: "",
  sourceKind: "youtube",
  language: "Hinglish",
  difficulty: "Beginner",
  goal: "Learning",
  duration: "",
  description: "",
  url: "",
  recommended: false,
};

export default function Admin() {
  const app = useApp();
  const [isAdminAuthenticated, setIsAdminAuthenticated] = useState<boolean>(false);
  const [isVerifyingSession, setIsVerifyingSession] = useState(true);

  const [adminEmail, setAdminEmail] = useState("");
  const [adminPassword, setAdminPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loginError, setLoginError] = useState("");
  const [isLoggingIn, setIsLoggingIn] = useState(false);

  const [tab, setTab] = useState<Tab>("directory");
  const [query, setQuery] = useState("");
  const [confirmId, setConfirmId] = useState<string | null>(null);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [form, setForm] = useState<FormState>(BLANK);
  const [formError, setFormError] = useState("");

  // Validate existing session token on mount
  useEffect(() => {
    let isMounted = true;
    async function verify() {
      try {
        const token = localStorage.getItem(ADMIN_STORAGE_KEY);
        if (token) {
          const isValid = await validateSessionToken(token);
          if (isMounted && isValid) {
            setIsAdminAuthenticated(true);
          }
        }
      } catch {
        // ignore storage errors
      } finally {
        if (isMounted) setIsVerifyingSession(false);
      }
    }
    verify();
    return () => {
      isMounted = false;
    };
  }, []);

  const handleAdminLogin = async (e: FormEvent) => {
    e.preventDefault();
    setLoginError("");

    if (!rateLimit("admin_login_attempt", 5, 60000)) {
      setLoginError("Too many login attempts. Please wait 60 seconds before trying again.");
      return;
    }

    const trimmedEmail = adminEmail.trim().toLowerCase();
    const trimmedPassword = adminPassword.trim();

    if (!trimmedEmail || !trimmedPassword) {
      setLoginError("Please enter both admin email and password.");
      return;
    }

    setIsLoggingIn(true);
    try {
      const inputHash = await hashPassword(trimmedPassword);
      const emailMatches = ADMIN_EMAILS.includes(trimmedEmail);
      const passwordMatches = inputHash === ADMIN_PASSWORD_HASH;

      if (emailMatches && passwordMatches) {
        const token = await createSessionToken();
        try {
          localStorage.setItem(ADMIN_STORAGE_KEY, token);
        } catch {
          // ignore
        }
        setIsAdminAuthenticated(true);
        setLoginError("");
        app.toast("Access granted — Welcome to StudyBust Admin Panel!", "success");
      } else {
        setLoginError("Invalid credentials. Please enter authorized admin credentials.");
      }
    } catch {
      setLoginError("An error occurred during authentication. Please try again.");
    } finally {
      setIsLoggingIn(false);
    }
  };

  const handleAdminLogout = () => {
    try {
      localStorage.removeItem(ADMIN_STORAGE_KEY);
      localStorage.removeItem("studynest12_admin_session");
    } catch {
      // ignore
    }
    setIsAdminAuthenticated(false);
    setAdminEmail("");
    setAdminPassword("");
    setLoginError("");
    app.toast("Admin session terminated safely.", "neutral");
  };

  const rows = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return app.resources;
    return app.resources.filter((r) =>
      [r.title, r.source, subjectById(r.subjectId)?.name ?? ""].join(" ").toLowerCase().includes(q),
    );
  }, [app.resources, query]);

  const openReports = app.reports.filter((r) => !r.resolved).length;

  const startAdd = () => {
    setEditingId(null);
    setForm(BLANK);
    setFormError("");
    setTab("form");
  };

  const startEdit = (r: Resource) => {
    setEditingId(r.id);
    setForm({
      title: r.title,
      subjectId: r.subjectId,
      chapterId: r.chapterId ?? "",
      type: r.type,
      source: r.source,
      sourceKind: r.sourceKind,
      language: r.language,
      difficulty: r.difficulty,
      goal: r.goal,
      duration: r.duration ? String(r.duration) : "",
      description: r.description,
      url: r.url,
      recommended: r.recommended,
    });
    setFormError("");
    setTab("form");
  };

  const submit = (e: FormEvent) => {
    e.preventDefault();
    const sanitizedTitle = sanitizeText(form.title);
    const sanitizedSource = sanitizeText(form.source);
    const sanitizedDescription = sanitizeText(form.description);
    const rawUrl = form.url.trim();

    if (!sanitizedTitle || !sanitizedSource || !rawUrl) {
      setFormError("Title, source (channel/website) and URL are required.");
      return;
    }
    if (!isSafeUrl(rawUrl)) {
      setFormError("URL must be a valid HTTP or HTTPS protocol link.");
      return;
    }
    const payload = {
      title: sanitizedTitle,
      subjectId: form.subjectId,
      chapterId: form.chapterId || null,
      type: form.type,
      source: sanitizedSource,
      sourceKind: form.sourceKind,
      language: form.language,
      difficulty: form.difficulty,
      goal: form.goal,
      duration: form.duration ? Number(form.duration) : null,
      description: sanitizedDescription || "No description provided yet.",
      url: rawUrl,
      recommended: form.recommended,
    };
    if (editingId) {
      const existing = app.resources.find((r) => r.id === editingId);
      app.updateResource(editingId, {
        ...payload,
        id: editingId,
        addedAt: existing?.addedAt ?? new Date().toISOString(),
        views: existing?.views ?? 0,
      });
    } else {
      app.addResource(payload);
    }
    setTab("directory");
  };

  const formSubject = subjectById(form.subjectId);

  if (isVerifyingSession) {
    return (
      <div className="flex min-h-[60vh] flex-col items-center justify-center space-y-3 text-center bg-navy-950 text-white">
        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gold-400/10 text-gold-400 animate-pulse ring-1 ring-gold-400/30">
          <Lock className="h-6 w-6" />
        </div>
        <p className="text-xs font-semibold tracking-wide text-navy-300">Verifying admin session security…</p>
      </div>
    );
  }

  if (!isAdminAuthenticated) {
    return (
      <section className="relative flex min-h-[calc(100vh-4rem)] items-center justify-center overflow-hidden bg-navy-950 px-4 py-16 text-white">
        <div className="bg-hero-grid absolute inset-0 opacity-40" aria-hidden="true" />
        <div
          className="pointer-events-none absolute -top-40 left-1/2 h-[34rem] w-[34rem] -translate-x-1/2 rounded-full opacity-20 blur-3xl"
          style={{ background: "radial-gradient(circle, #f5b93b 0%, transparent 70%)" }}
          aria-hidden="true"
        />

        <div className="relative w-full max-w-md animate-fade-up">
          <div className="mb-6 flex items-center justify-between">
            <Link
              to="/"
              className="inline-flex items-center gap-2 rounded-lg border border-navy-800 bg-navy-900/80 px-3 py-1.5 text-xs font-bold text-navy-300 transition-colors hover:border-navy-700 hover:text-white"
            >
              <ArrowLeft className="h-3.5 w-3.5" /> Back to website
            </Link>
            <span className="inline-flex items-center gap-1.5 rounded-full border border-gold-400/30 bg-gold-400/10 px-2.5 py-0.5 text-[11px] font-extrabold uppercase tracking-wider text-gold-300">
              <ShieldCheck className="h-3.5 w-3.5" /> Restricted Access
            </span>
          </div>

          <div className="rounded-2xl border border-navy-800/80 bg-navy-900/90 p-8 shadow-2xl backdrop-blur-xl">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-tr from-gold-500/20 via-gold-400/15 to-transparent text-gold-300 ring-1 ring-gold-400/30">
              <Lock className="h-7 w-7" />
            </div>

            <h1 className="mt-5 font-display text-2xl font-extrabold tracking-tight text-white">
              Admin Authentication
            </h1>
            <p className="mt-1.5 text-sm leading-relaxed text-navy-300">
              Please enter your administrator credentials to access the study directory management console.
            </p>

            {loginError ? (
              <div className="mt-5 flex items-start gap-2.5 rounded-xl border border-rose-500/30 bg-rose-500/10 p-3 text-xs leading-relaxed text-rose-300 animate-shake">
                <AlertCircle className="h-4 w-4 shrink-0 text-rose-400 mt-0.5" />
                <span>{loginError}</span>
              </div>
            ) : null}

            <form onSubmit={handleAdminLogin} className="mt-6 space-y-4">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-navy-300">
                  Admin Email
                </label>
                <div className="relative mt-1.5">
                  <Mail className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-navy-400" />
                  <input
                    type="text"
                    value={adminEmail}
                    onChange={(e) => setAdminEmail(e.target.value)}
                    placeholder="admingmail.com"
                    autoComplete="username"
                    required
                    className="w-full rounded-xl border border-navy-700 bg-navy-950/80 py-2.5 pl-10 pr-4 text-sm text-white placeholder-navy-500 transition-all focus:border-gold-400 focus:outline-none focus:ring-2 focus:ring-gold-400/20"
                  />
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between">
                  <label className="block text-xs font-bold uppercase tracking-wider text-navy-300">
                    Admin Password
                  </label>
                </div>
                <div className="relative mt-1.5">
                  <KeyRound className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-navy-400" />
                  <input
                    type={showPassword ? "text" : "password"}
                    value={adminPassword}
                    onChange={(e) => setAdminPassword(e.target.value)}
                    placeholder="••••••••"
                    autoComplete="current-password"
                    required
                    className="w-full rounded-xl border border-navy-700 bg-navy-950/80 py-2.5 pl-10 pr-10 text-sm text-white placeholder-navy-500 transition-all focus:border-gold-400 focus:outline-none focus:ring-2 focus:ring-gold-400/20"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword((v) => !v)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-navy-400 hover:text-navy-200"
                    aria-label={showPassword ? "Hide password" : "Show password"}
                  >
                    {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                  </button>
                </div>
              </div>

              {/* Admin credentials are for demo purposes only */}
              <div className="rounded-lg border border-navy-800 bg-navy-950/50 p-2.5 text-center">
                <p className="text-[11px] text-navy-400">
                  Demo admin panel — credentials are for authorized administrators only.
                </p>
              </div>

              <button
                type="submit"
                disabled={isLoggingIn}
                className="btn-gold mt-2 w-full justify-center py-3 text-sm font-extrabold shadow-lg shadow-gold-500/10"
              >
                {isLoggingIn ? "Verifying Access..." : "Sign In to Admin Panel"}
              </button>
            </form>
          </div>
        </div>
      </section>
    );
  }

  return (
    <>
      <section className="border-b border-inkline bg-navy-950">
        <div className="container-x flex flex-wrap items-center justify-between gap-4 py-8">
          <div>
            <div className="flex items-center gap-3">
              <p className="inline-flex items-center gap-2 text-[11px] font-extrabold uppercase tracking-[0.18em] text-gold-300">
                <Shield className="h-4 w-4" />
                Admin panel
              </p>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-2 py-0.5 text-[11px] font-semibold text-emerald-400">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                Session Active (admingmail.com)
              </span>
            </div>
            <h1 className="mt-2 font-display text-3xl font-extrabold tracking-tight text-white">Manage the directory</h1>
            <p className="mt-2 max-w-xl text-sm leading-relaxed text-navy-300">
              Add, edit and recommend resources, and triage broken-link reports. Demo mode —
              changes persist in this browser only.
            </p>
          </div>
          <div className="flex items-center gap-2.5">
            <button
              type="button"
              onClick={handleAdminLogout}
              className="inline-flex items-center gap-2 rounded-lg border border-navy-800 bg-navy-900 px-3.5 py-2 text-xs font-bold text-rose-300 transition-colors hover:border-rose-900/60 hover:bg-rose-950/40 hover:text-rose-200"
            >
              <LogOut className="h-3.5 w-3.5" />
              Sign out
            </button>
            <button type="button" onClick={startAdd} className="btn-gold">
              <Plus className="h-4.5 w-4.5" />
              Add resource
            </button>
          </div>
        </div>
      </section>

      <section className="container-x py-8">
        <div className="flex gap-1.5 overflow-x-auto no-scrollbar" role="tablist" aria-label="Admin sections">
          {(
            [
              { id: "directory", label: "Resource directory", icon: LayoutGrid },
              { id: "form", label: editingId ? "Edit resource" : "Add resource", icon: Pencil },
              { id: "reports", label: `Broken links${openReports ? ` (${openReports})` : ""}`, icon: FileWarning },
            ] as Array<{ id: Tab; label: string; icon: typeof LayoutGrid }>
          ).map((t) => (
            <button
              key={t.id}
              role="tab"
              aria-selected={tab === t.id}
              onClick={() => setTab(t.id)}
              className={cn(
                "focus-ring inline-flex shrink-0 items-center gap-2 rounded-lg px-4 py-2.5 text-sm font-bold transition-all",
                tab === t.id ? "bg-navy-900 text-white shadow-sm" : "text-navy-500 hover:bg-navy-50 hover:text-navy-900",
              )}
            >
              <t.icon className="h-4 w-4" />
              {t.label}
            </button>
          ))}
        </div>

        {/* ------------------------------ directory ------------------------------ */}
        {tab === "directory" ? (
          <div className="mt-6">
            <div className="relative max-w-md">
              <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-navy-300" />
              <input
                type="search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search the directory…"
                aria-label="Search directory"
                className="input-base pl-9"
              />
            </div>

            <div className="mt-5 overflow-x-auto rounded-xl border border-inkline bg-white shadow-card">
              <table className="w-full min-w-[760px] border-collapse text-left">
                <thead>
                  <tr className="border-b border-inkline bg-navy-50/60 text-[10.5px] font-extrabold uppercase tracking-[0.12em] text-navy-400">
                    <th className="px-5 py-3">Resource</th>
                    <th className="px-4 py-3">Subject</th>
                    <th className="px-4 py-3">Type</th>
                    <th className="px-4 py-3">Source</th>
                    <th className="px-4 py-3 text-center">Featured</th>
                    <th className="px-4 py-3 text-right">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {rows.map((r) => {
                    const subject = subjectById(r.subjectId);
                    const meta = typeMeta(r.type);
                    return (
                      <tr key={r.id} className="border-b border-inkline/70 transition-colors last:border-0 hover:bg-navy-50/40">
                        <td className="max-w-[300px] px-5 py-3.5">
                          <p className="truncate text-sm font-bold text-navy-900">{r.title}</p>
                          <p className="mt-0.5 truncate text-[11px] font-semibold text-navy-400">
                            {r.chapterId ? (subject?.chapters.find((c) => c.id === r.chapterId)?.name ?? r.chapterId) : "Full subject"}
                          </p>
                        </td>
                        <td className="px-4 py-3.5 text-xs font-bold text-navy-700">{subject?.name ?? r.subjectId}</td>
                        <td className="px-4 py-3.5">
                          <span className={cn("inline-flex items-center gap-1 rounded-md border px-2 py-0.5 text-[10.5px] font-bold", TONES[meta.tone].chip)}>
                            {meta.short}
                          </span>
                        </td>
                        <td className="px-4 py-3.5 text-xs font-semibold text-navy-500">
                          {r.source}
                          <span className="block text-[10px] uppercase tracking-wide text-navy-300">{r.sourceKind}</span>
                        </td>
                        <td className="px-4 py-3.5 text-center">
                          <button
                            type="button"
                            aria-label={r.recommended ? `Unfeature ${r.title}` : `Feature ${r.title}`}
                            aria-pressed={r.recommended}
                            onClick={() => app.toggleRecommended(r.id)}
                            className={cn(
                              "focus-ring rounded-lg p-2 transition-all",
                              r.recommended ? "bg-gold-100 text-gold-600" : "text-navy-300 hover:bg-navy-50 hover:text-navy-600",
                            )}
                          >
                            <Star className={cn("h-4.5 w-4.5", r.recommended && "fill-gold-400 stroke-gold-500")} />
                          </button>
                        </td>
                        <td className="px-4 py-3.5">
                          <div className="flex items-center justify-end gap-1">
                            <button
                              type="button"
                              aria-label={`Edit ${r.title}`}
                              onClick={() => startEdit(r)}
                              className="focus-ring rounded-lg p-2 text-navy-400 transition-colors hover:bg-navy-50 hover:text-navy-800"
                            >
                              <Pencil className="h-4 w-4" />
                            </button>
                            {confirmId === r.id ? (
                              <span className="flex items-center gap-1">
                                <button
                                  type="button"
                                  onClick={() => {
                                    app.deleteResource(r.id);
                                    setConfirmId(null);
                                  }}
                                  className="focus-ring rounded-lg bg-rose-600 px-2.5 py-1.5 text-[11px] font-extrabold text-white hover:bg-rose-700"
                                >
                                  Confirm
                                </button>
                                <button
                                  type="button"
                                  aria-label="Cancel delete"
                                  onClick={() => setConfirmId(null)}
                                  className="focus-ring rounded-lg p-1.5 text-navy-400 hover:bg-navy-50"
                                >
                                  <X className="h-3.5 w-3.5" />
                                </button>
                              </span>
                            ) : (
                              <button
                                type="button"
                                aria-label={`Delete ${r.title}`}
                                onClick={() => setConfirmId(r.id)}
                                className="focus-ring rounded-lg p-2 text-navy-400 transition-colors hover:bg-rose-50 hover:text-rose-600"
                              >
                                <Trash2 className="h-4 w-4" />
                              </button>
                            )}
                          </div>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
              {rows.length === 0 ? (
                <div className="p-6">
                  <EmptyState title="No resources match" body="Adjust the search, or add a new resource to the directory." action={<button type="button" onClick={startAdd} className="btn-navy"><Plus className="h-4 w-4" /> Add resource</button>} />
                </div>
              ) : null}
            </div>
            <p className="mt-3 text-xs font-semibold text-navy-400">
              Showing {rows.length} of {app.resources.length} resources. “Featured” maps to the Recommended badge students see.
            </p>
          </div>
        ) : null}

        {/* -------------------------------- form -------------------------------- */}
        {tab === "form" ? (
          <form onSubmit={submit} className="mt-6 max-w-3xl rounded-xl border border-inkline bg-white p-6 shadow-card sm:p-8">
            <div className="flex items-center justify-between">
              <h2 className="font-display text-xl font-extrabold tracking-tight text-navy-900">
                {editingId ? "Edit resource" : "Add a new resource"}
              </h2>
              {editingId ? (
                <button type="button" onClick={() => { setEditingId(null); setForm(BLANK); setTab("directory"); }} className="focus-ring inline-flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-bold text-navy-500 hover:bg-navy-50 hover:text-navy-900">
                  <X className="h-3.5 w-3.5" /> Cancel edit
                </button>
              ) : null}
            </div>
            <p className="mt-1 text-sm text-navy-500">Assign the subject, chapter and source — students find it instantly through search and filters.</p>

            <div className="mt-6 space-y-5">
              <L label="Resource title" htmlFor="ar-title">
                <input id="ar-title" type="text" value={form.title} onChange={(e) => setForm({ ...form, title: e.target.value })} placeholder="e.g. Electrochemistry — One Shot with Numericals" className="input-base" />
              </L>

              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <L label="Subject" htmlFor="ar-subject">
                  <select id="ar-subject" value={form.subjectId} onChange={(e) => setForm({ ...form, subjectId: e.target.value, chapterId: "" })} className="input-base">
                    {SUBJECTS.map((s) => (
                      <option key={s.id} value={s.id}>{s.name}</option>
                    ))}
                  </select>
                </L>
                <L label="Chapter (optional — blank = full subject)" htmlFor="ar-chapter">
                  <select id="ar-chapter" value={form.chapterId} onChange={(e) => setForm({ ...form, chapterId: e.target.value })} className="input-base">
                    <option value="">Full subject</option>
                    {formSubject?.chapters.map((c, i) => (
                      <option key={c.id} value={c.id}>{i + 1}. {c.name}</option>
                    ))}
                  </select>
                </L>
                <L label="Resource type" htmlFor="ar-type">
                  <select id="ar-type" value={form.type} onChange={(e) => setForm({ ...form, type: e.target.value as ResourceType })} className="input-base">
                    {RESOURCE_TYPES.map((t) => (
                      <option key={t.id} value={t.id}>{t.label}</option>
                    ))}
                  </select>
                </L>
                <L label="Duration in minutes (optional)" htmlFor="ar-duration">
                  <input id="ar-duration" type="number" min="1" value={form.duration} onChange={(e) => setForm({ ...form, duration: e.target.value })} placeholder="e.g. 120" className="input-base" />
                </L>
                <L label="YouTube channel or website name" htmlFor="ar-source">
                  <input id="ar-source" type="text" value={form.source} onChange={(e) => setForm({ ...form, source: e.target.value })} placeholder="e.g. Physics Wallah" className="input-base" />
                </L>
                <L label="Source kind" htmlFor="ar-kind">
                  <select id="ar-kind" value={form.sourceKind} onChange={(e) => setForm({ ...form, sourceKind: e.target.value as SourceKind })} className="input-base">
                    <option value="youtube">YouTube channel</option>
                    <option value="website">Website</option>
                  </select>
                </L>
                <L label="Language" htmlFor="ar-lang">
                  <select id="ar-lang" value={form.language} onChange={(e) => setForm({ ...form, language: e.target.value as Language })} className="input-base">
                    <option>English</option>
                    <option>Hindi</option>
                    <option>Hinglish</option>
                  </select>
                </L>
                <L label="Difficulty" htmlFor="ar-diff">
                  <select id="ar-diff" value={form.difficulty} onChange={(e) => setForm({ ...form, difficulty: e.target.value as Difficulty })} className="input-base">
                    <option>Beginner</option>
                    <option>Intermediate</option>
                    <option>Advanced</option>
                  </select>
                </L>
                <L label="Preparation goal" htmlFor="ar-goal">
                  <select id="ar-goal" value={form.goal} onChange={(e) => setForm({ ...form, goal: e.target.value as Goal })} className="input-base">
                    <option>Learning</option>
                    <option>Practice</option>
                    <option>Revision</option>
                  </select>
                </L>
                <L label="Resource URL" htmlFor="ar-url">
                  <input id="ar-url" type="url" value={form.url} onChange={(e) => setForm({ ...form, url: e.target.value })} placeholder="https://…" className="input-base" />
                </L>
              </div>

              <L label="Short description" htmlFor="ar-desc">
                <textarea id="ar-desc" rows={3} value={form.description} onChange={(e) => setForm({ ...form, description: e.target.value })} placeholder="One or two lines students will see on the card…" className="input-base resize-none" />
              </L>

              <label className="flex cursor-pointer items-center gap-3 rounded-lg border border-gold-200 bg-gold-50 px-4 py-3">
                <input
                  type="checkbox"
                  checked={form.recommended}
                  onChange={(e) => setForm({ ...form, recommended: e.target.checked })}
                  className="h-4 w-4 accent-[#e9a514]"
                />
                <span className="text-sm font-bold text-navy-900">
                  Mark as recommended
                  <span className="block text-xs font-semibold text-navy-500">Shows the gold Recommended badge and boosts it in “recommended” sorting.</span>
                </span>
              </label>

              {formError ? <p className="rounded-lg border border-rose-200 bg-rose-50 px-4 py-2.5 text-xs font-bold text-rose-700">{formError}</p> : null}

              <div className="flex gap-3">
                <button type="submit" className="btn-navy flex-1 py-3">
                  <Check className="h-4.5 w-4.5" />
                  {editingId ? "Save changes" : "Publish resource"}
                </button>
                <button type="button" onClick={() => { setEditingId(null); setForm(BLANK); setFormError(""); }} className="btn-ghost">
                  Reset
                </button>
              </div>
            </div>
          </form>
        ) : null}

        {/* ------------------------------- reports ------------------------------- */}
        {tab === "reports" ? (
          <div className="mt-6 max-w-3xl space-y-4">
            {app.reports.length === 0 ? (
              <EmptyState
                title="No broken-link reports"
                body="When students tap “Report” on a resource card, it lands here for review."
              />
            ) : (
              <>
                {app.reports.map((rep) => (
                  <div key={rep.id} className={cn("flex flex-wrap items-center gap-4 rounded-xl border bg-white p-5 shadow-card", rep.resolved ? "border-inkline opacity-70" : "border-rose-200")}>
                    <span className={cn("flex h-10 w-10 shrink-0 items-center justify-center rounded-lg", rep.resolved ? "bg-green-50 text-green-600" : "bg-rose-50 text-rose-600")}>
                      {rep.resolved ? <CheckCircle2 className="h-5 w-5" /> : <FileWarning className="h-5 w-5" />}
                    </span>
                    <div className="min-w-0 flex-1">
                      <p className="truncate text-sm font-bold text-navy-900">{rep.resourceTitle}</p>
                      <p className="mt-0.5 text-xs font-semibold text-navy-500">
                        “{rep.reason}” · reported {rep.date}
                      </p>
                    </div>
                    {rep.resolved ? (
                      <span className="rounded-full bg-green-50 px-3 py-1 text-[10.5px] font-extrabold uppercase tracking-wide text-green-700">Resolved</span>
                    ) : (
                      <div className="flex items-center gap-2">
                        {app.resources.some((r) => r.id === rep.resourceId) ? (
                          <button
                            type="button"
                            onClick={() => {
                              const target = app.resources.find((r) => r.id === rep.resourceId);
                              if (target) startEdit(target);
                            }}
                            className="focus-ring rounded-lg border border-inkline bg-white px-3 py-2 text-xs font-bold text-navy-700 transition-colors hover:bg-navy-50"
                          >
                            Edit resource
                          </button>
                        ) : null}
                        <button type="button" onClick={() => app.resolveReport(rep.id)} className="focus-ring rounded-lg bg-navy-900 px-4 py-2 text-xs font-bold text-white transition-colors hover:bg-navy-700">
                          Mark resolved
                        </button>
                      </div>
                    )}
                  </div>
                ))}
                <p className="text-xs font-semibold text-navy-400">
                  Tip: resolve after replacing the sample URL with a curated one in the directory tab.
                </p>
              </>
            )}
          </div>
        ) : null}
      </section>
    </>
  );
}

function L({ label, htmlFor, children }: { label: string; htmlFor: string; children: React.ReactNode }) {
  return (
    <div>
      <label htmlFor={htmlFor} className="mb-1.5 block text-[10.5px] font-extrabold uppercase tracking-[0.14em] text-navy-400">
        {label}
      </label>
      {children}
    </div>
  );
}
