import { useState, type FormEvent } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Bookmark, Check, Info, ListChecks, ShieldCheck, Sparkles } from "lucide-react";
import Logo from "@/components/Logo";
import { useApp } from "@/context/AppContext";
import { cn } from "@/lib/utils";

const PERKS = [
  { icon: Bookmark, text: "Bookmark resources across all 15 subjects" },
  { icon: Check, text: "Track chapter completion and syllabus progress" },
  { icon: ListChecks, text: "A personal planner with auto-generated study weeks" },
  { icon: Sparkles, text: "First access when the AI study tools launch" },
];

export default function Auth() {
  const { login } = useApp();
  const navigate = useNavigate();
  const [mode, setMode] = useState<"login" | "signup">("login");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState<Record<string, string>>({});

  const submit = (e: FormEvent) => {
    e.preventDefault();
    const trimmedEmail = email.trim().toLowerCase();

    const next: Record<string, string> = {};
    if (mode === "signup" && name.trim().length < 2) next.name = "Tell us your name (at least 2 characters).";
    if (!/^\S+@\S+\.\S+$/.test(email.trim())) next.email = "Enter a valid email address.";
    if (password.length < 6) next.password = "Password needs at least 6 characters.";
    setErrors(next);
    if (Object.keys(next).length > 0) return;

    const displayName = mode === "signup" ? name.trim() : email.split("@")[0].replace(/[._-]+/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());
    login(displayName || "Student", email.trim());
    navigate("/dashboard");
  };

  return (
    <section className="grid min-h-[calc(100vh-4rem)] grid-cols-1 lg:grid-cols-[1fr_1.1fr]">
      {/* left panel */}
      <div className="relative hidden overflow-hidden bg-navy-950 lg:block">
        <div className="bg-hero-grid absolute inset-0" aria-hidden="true" />
        <div
          className="absolute -left-24 top-1/3 h-96 w-96 rounded-full opacity-20 blur-3xl"
          style={{ background: "radial-gradient(circle, #f5b93b 0%, transparent 65%)" }}
          aria-hidden="true"
        />
        <div className="relative flex h-full flex-col justify-between p-12">
          <Logo dark size="lg" />
          <div>
            <h1 className="max-w-md font-display text-4xl font-extrabold leading-tight tracking-tight text-white">
              Your study nest, <span className="text-gold-300">kept in sync.</span>
            </h1>
            <ul className="mt-8 space-y-4">
              {PERKS.map((p) => (
                <li key={p.text} className="flex items-center gap-3.5">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-gold-400/15 text-gold-300">
                    <p.icon className="h-4.5 w-4.5" />
                  </span>
                  <span className="text-sm font-semibold leading-relaxed text-navy-200">{p.text}</span>
                </li>
              ))}
            </ul>
          </div>
          <p className="text-xs font-semibold leading-relaxed text-navy-400">
            “The boards don't test how much you searched. They test how well you prepared.”
          </p>
        </div>
      </div>

      {/* form */}
      <div className="flex items-center justify-center bg-dots px-4 py-14 sm:px-10">
        <div className="w-full max-w-md animate-fade-up">
          <div className="mb-8 lg:hidden">
            <Logo />
          </div>
          <h2 className="font-display text-2xl font-extrabold tracking-tight text-navy-900 sm:text-3xl">
            {mode === "login" ? "Welcome back" : "Join the nest"}
          </h2>
          <p className="mt-2 text-sm leading-relaxed text-navy-500">
            {mode === "login"
              ? "Sign in to see your bookmarks, progress and planner."
              : "Create a free account — everything stays on your device in this demo."}
          </p>

          <div className="mt-6 grid grid-cols-2 rounded-xl border border-inkline bg-white p-1" role="tablist" aria-label="Authentication mode">
            {(["login", "signup"] as const).map((m) => (
              <button
                key={m}
                role="tab"
                aria-selected={mode === m}
                type="button"
                onClick={() => {
                  setMode(m);
                  setErrors({});
                }}
                className={cn(
                  "focus-ring rounded-lg py-2.5 text-sm font-bold transition-all",
                  mode === m ? "bg-navy-900 text-white shadow-sm" : "text-navy-500 hover:text-navy-900",
                )}
              >
                {m === "login" ? "Log in" : "Sign up"}
              </button>
            ))}
          </div>

          <form onSubmit={submit} className="mt-5 space-y-4 rounded-xl border border-inkline bg-white p-6 shadow-card">
            {mode === "signup" ? (
              <Field label="Full name" htmlFor="auth-name" error={errors.name}>
                <input id="auth-name" type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Aarav Sharma" className="input-base" autoComplete="name" />
              </Field>
            ) : null}
            <Field label="Email" htmlFor="auth-email" error={errors.email}>
              <input id="auth-email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="you@school.in" className="input-base" autoComplete="email" />
            </Field>
            <Field label="Password" htmlFor="auth-password" error={errors.password}>
              <input id="auth-password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="At least 6 characters" className="input-base" autoComplete={mode === "login" ? "current-password" : "new-password"} />
            </Field>
            <button type="submit" className="btn-gold w-full py-3">
              <ShieldCheck className="h-4.5 w-4.5" />
              {mode === "login" ? "Log in" : "Create account"}
            </button>
          </form>

          <div className="mt-4 flex items-start gap-2.5 rounded-lg border border-sky-200 bg-sky-50 px-4 py-3">
            <Info className="mt-0.5 h-4 w-4 shrink-0 text-sky-600" />
            <p className="text-xs font-semibold leading-relaxed text-sky-800">
              Frontend demo — credentials never leave your browser. The data layer is structured for a
              drop-in Supabase auth + database integration later.
            </p>
          </div>

          <p className="mt-5 text-center text-xs font-semibold text-navy-400">
            Just exploring?{" "}
            <Link to="/dashboard" className="font-bold text-navy-700 underline underline-offset-2 hover:text-navy-950">
              Open the dashboard as a guest
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  htmlFor,
  error,
  children,
}: {
  label: string;
  htmlFor: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label htmlFor={htmlFor} className="mb-1.5 block text-[10.5px] font-extrabold uppercase tracking-[0.14em] text-navy-400">
        {label}
      </label>
      {children}
      {error ? <p className="mt-1.5 text-xs font-bold text-rose-600">{error}</p> : null}
    </div>
  );
}
