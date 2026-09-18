import { useEffect, useState, type FormEvent } from "react";
import { Link, NavLink, Outlet, useLocation, useNavigate } from "react-router-dom";
import {
  AlertTriangle,
  ArrowRight,
  Bell,
  Bookmark,
  CalendarDays,
  CheckCircle2,
  ChevronDown,
  FileText,
  Info,
  LayoutDashboard,
  LogOut,
  Menu,
  Shield,
  Sparkles,
  UserRound,
  X,
} from "lucide-react";
import Logo from "@/components/Logo";
import { useApp } from "@/context/AppContext";
import { cn } from "@/lib/utils";

const NAV_ITEMS = [
  { to: "/", label: "Home", end: true },
  { to: "/subjects", label: "Subjects" },
  { to: "/resources", label: "Resources" },
  { to: "/about", label: "About" },
];

const NOTIFICATIONS = [
  { icon: FileText, text: "New sample resources added for Physics & Chemistry", time: "2h ago", unread: true },
  { icon: CalendarDays, text: "CBSE 2025–26 sample papers released — links in the directory", time: "1d ago", unread: true },
  { icon: Sparkles, text: "AI Doubt Solver is coming soon — watch your dashboard", time: "3d ago", unread: false },
];

function NavLinks({ onNavigate }: { onNavigate?: () => void }) {
  return (
    <>
      {NAV_ITEMS.map((item) => (
        <NavLink
          key={item.to}
          to={item.to}
          end={item.end}
          onClick={onNavigate}
          className={({ isActive }) =>
            cn(
              "focus-ring relative flex h-16 items-center rounded-sm px-3 text-sm font-bold transition-colors",
              isActive ? "text-navy-900" : "text-navy-500 hover:text-navy-900",
            )
          }
        >
          {({ isActive }) => (
            <>
              {item.label}
              {isActive ? <span className="absolute inset-x-3 bottom-0 h-[3px] rounded-t-full bg-gradient-to-r from-gold-300 to-gold-500" /> : null}
            </>
          )}
        </NavLink>
      ))}
    </>
  );
}

export default function Layout() {
  const { user, logout, bookmarks, toasts, dismissToast } = useApp();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [bellOpen, setBellOpen] = useState(false);
  const [userOpen, setUserOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    setMobileOpen(false);
    setBellOpen(false);
    setUserOpen(false);
  }, [location.pathname, location.search]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="flex min-h-screen flex-col">
      {/* top announcement strip */}
      <div className="relative overflow-hidden bg-navy-950 px-4 py-1.5 text-center text-[11px] font-semibold tracking-wide text-navy-200">
        <span className="pointer-events-none absolute inset-0 bg-[linear-gradient(110deg,transparent_35%,rgb(245_185_59/0.14)_50%,transparent_65%)] bg-[length:220%_100%] animate-shimmer" aria-hidden="true" />
        Demo build — resource links are sample placeholders until curation is complete.
        <span className="mx-2 text-navy-600">|</span>
        <Link to="/about" className="text-gold-300 underline-offset-2 hover:underline">
          How it works
        </Link>
      </div>

      <header
        className={cn(
          "sticky top-0 z-40 border-b backdrop-blur-md transition-all duration-300",
          scrolled
            ? "border-inkline bg-white/95 shadow-[0_12px_32px_-20px_rgb(5_13_34/0.4)]"
            : "border-inkline/70 bg-white/85",
        )}
      >
        <div className="container-x flex h-16 items-center justify-between gap-3">
          <div className="flex items-center gap-6">
            <Link to="/" aria-label="StudyNest 12 home" className="focus-ring rounded-lg transition-transform duration-200 hover:scale-[1.02]">
              <Logo />
            </Link>
            <nav className="hidden items-center md:flex" aria-label="Primary">
              <NavLinks />
            </nav>
          </div>

          <div className="flex items-center gap-1.5">
            {/* notifications */}
            <div className="relative">
              <button
                type="button"
                aria-label="Notifications"
                aria-expanded={bellOpen}
                onClick={() => setBellOpen((v) => !v)}
                className="focus-ring relative rounded-lg p-2.5 text-navy-500 transition-colors hover:bg-navy-50 hover:text-navy-900"
              >
                <Bell className="h-5 w-5" />
                <span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-gold-400 ring-2 ring-white" />
              </button>
              {bellOpen ? (
                <>
                  <button type="button" aria-label="Close notifications" className="fixed inset-0 z-40 cursor-default" onClick={() => setBellOpen(false)} />
                  <div className="absolute right-0 z-50 mt-2 w-80 animate-fade-up overflow-hidden rounded-xl border border-inkline bg-white shadow-lift">
                    <div className="flex items-center justify-between border-b border-inkline bg-navy-50/60 px-4 py-3">
                      <p className="font-display text-sm font-bold text-navy-900">Updates</p>
                      <span className="rounded-full bg-gold-100 px-2 py-0.5 text-[10px] font-extrabold text-gold-700">DEMO</span>
                    </div>
                    <ul>
                      {NOTIFICATIONS.map((n, i) => (
                        <li key={i} className="flex gap-3 border-b border-inkline/70 px-4 py-3 transition-colors hover:bg-navy-50/50 last:border-0">
                          <n.icon className="mt-0.5 h-4 w-4 shrink-0 text-navy-400" />
                          <div>
                            <p className={cn("text-xs leading-relaxed", n.unread ? "font-bold text-navy-900" : "font-semibold text-navy-500")}>{n.text}</p>
                            <p className="mt-0.5 text-[10px] font-bold uppercase tracking-wide text-navy-300">{n.time}</p>
                          </div>
                        </li>
                      ))}
                    </ul>
                    <p className="bg-navy-50/60 px-4 py-2.5 text-[10.5px] font-semibold text-navy-400">
                      Real-time alerts for new resources & exam updates — coming soon.
                    </p>
                  </div>
                </>
              ) : null}
            </div>

            {/* bookmarks */}
            <Link
              to="/dashboard?tab=bookmarks"
              aria-label={`Saved resources (${bookmarks.length})`}
              className="focus-ring relative hidden rounded-lg p-2.5 text-navy-500 transition-colors hover:bg-navy-50 hover:text-navy-900 sm:block"
            >
              <Bookmark className="h-5 w-5" />
              {bookmarks.length > 0 ? (
                <span className="absolute -right-0.5 -top-0.5 flex h-4.5 min-w-4.5 items-center justify-center rounded-full bg-navy-900 px-1 text-[9.5px] font-extrabold text-gold-300">
                  {bookmarks.length}
                </span>
              ) : null}
            </Link>

            {/* auth */}
            {user ? (
              <div className="relative">
                <button
                  type="button"
                  aria-expanded={userOpen}
                  onClick={() => setUserOpen((v) => !v)}
                  className="focus-ring flex items-center gap-2 rounded-lg border border-inkline bg-white py-1.5 pl-1.5 pr-2.5 transition-all hover:border-navy-200 hover:bg-navy-50 hover:shadow-sm"
                >
                  <span className="flex h-7 w-7 items-center justify-center rounded-md bg-gradient-to-b from-navy-800 to-navy-950 font-display text-xs font-bold text-gold-300">
                    {user.name.charAt(0).toUpperCase()}
                  </span>
                  <span className="hidden max-w-24 truncate text-sm font-bold text-navy-800 lg:block">{user.name.split(" ")[0]}</span>
                  <ChevronDown className="h-3.5 w-3.5 text-navy-400" />
                </button>
                {userOpen ? (
                  <>
                    <button type="button" aria-label="Close menu" className="fixed inset-0 z-40 cursor-default" onClick={() => setUserOpen(false)} />
                    <div className="absolute right-0 z-50 mt-2 w-56 animate-fade-up overflow-hidden rounded-xl border border-inkline bg-white py-1.5 shadow-lift">
                      <div className="border-b border-inkline px-4 py-2.5">
                        <p className="truncate text-sm font-bold text-navy-900">{user.name}</p>
                        <p className="truncate text-xs text-navy-400">{user.email}</p>
                      </div>
                      <Link to="/dashboard" className="flex items-center gap-2.5 px-4 py-2.5 text-sm font-semibold text-navy-700 transition-colors hover:bg-navy-50">
                        <LayoutDashboard className="h-4 w-4 text-navy-400" /> Study dashboard
                      </Link>
                      <Link to="/admin" className="flex items-center gap-2.5 px-4 py-2.5 text-sm font-semibold text-navy-700 transition-colors hover:bg-navy-50">
                        <Shield className="h-4 w-4 text-navy-400" /> Admin panel
                      </Link>
                      <button
                        type="button"
                        onClick={() => {
                          logout();
                          navigate("/");
                        }}
                        className="flex w-full items-center gap-2.5 px-4 py-2.5 text-left text-sm font-semibold text-rose-600 transition-colors hover:bg-rose-50"
                      >
                        <LogOut className="h-4 w-4" /> Sign out
                      </button>
                    </div>
                  </>
                ) : null}
              </div>
            ) : (
              <Link to="/auth" className="focus-ring hidden items-center gap-1.5 rounded-lg bg-gradient-to-b from-navy-800 to-navy-950 px-4 py-2 text-sm font-extrabold text-white transition-all hover:from-navy-700 hover:to-navy-900 hover:shadow-md sm:inline-flex">
                <UserRound className="h-4 w-4" />
                Sign in
              </Link>
            )}

            {/* mobile toggle */}
            <button
              type="button"
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileOpen}
              onClick={() => setMobileOpen((v) => !v)}
              className="focus-ring rounded-lg p-2.5 text-navy-600 transition-colors hover:bg-navy-50 md:hidden"
            >
              {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {mobileOpen ? (
          <div className="animate-fade-up border-t border-inkline bg-white px-4 pb-5 pt-2 md:hidden">
            <div className="flex flex-col">
              {NAV_ITEMS.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  end={item.end}
                  className={({ isActive }) =>
                    cn(
                      "rounded-lg px-3 py-2.5 text-sm font-bold",
                      isActive ? "bg-navy-50 text-navy-900" : "text-navy-500",
                    )
                  }
                >
                  {item.label}
                </NavLink>
              ))}
            </div>
            <div className="mt-3 flex gap-2 border-t border-inkline pt-4">
              {user ? (
                <Link to="/dashboard" className="btn-navy flex-1">
                  <LayoutDashboard className="h-4 w-4" /> Dashboard
                </Link>
              ) : (
                <Link to="/auth" className="btn-navy flex-1">
                  <UserRound className="h-4 w-4" /> Sign in
                </Link>
              )}
              <Link to="/dashboard?tab=bookmarks" className="btn-ghost">
                <Bookmark className="h-4 w-4" /> Saved ({bookmarks.length})
              </Link>
            </div>
          </div>
        ) : null}
      </header>

      <main className="flex-1">
        <Outlet />
      </main>

      <Footer />

      {/* toast viewport */}
      <div aria-live="polite" className="pointer-events-none fixed bottom-5 right-5 z-[70] flex w-[calc(100%-2.5rem)] max-w-sm flex-col gap-2">
        {toasts.map((t) => (
          <div key={t.id} className="pointer-events-auto flex animate-fade-up items-start gap-2.5 rounded-xl border border-navy-700 bg-navy-900 px-4 py-3 shadow-lift">
            {t.tone === "success" ? <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-green-400" /> : null}
            {t.tone === "info" ? <Info className="mt-0.5 h-4 w-4 shrink-0 text-sky-300" /> : null}
            {t.tone === "danger" ? <AlertTriangle className="mt-0.5 h-4 w-4 shrink-0 text-rose-400" /> : null}
            <p className="flex-1 text-[13px] font-semibold leading-snug text-navy-50">{t.message}</p>
            <button type="button" aria-label="Dismiss" onClick={() => dismissToast(t.id)} className="focus-ring rounded p-0.5 text-navy-300 hover:text-white">
              <X className="h-3.5 w-3.5" />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

function Footer() {
  const { toast } = useApp();
  const [email, setEmail] = useState("");

  const subscribe = (e: FormEvent) => {
    e.preventDefault();
    if (!/^\S+@\S+\.\S+$/.test(email.trim())) {
      toast("Enter a valid email to subscribe", "danger");
      return;
    }
    setEmail("");
    toast("You're on the list — board updates coming your way (demo)");
  };

  const explore = [
    { to: "/", label: "Home" },
    { to: "/subjects", label: "Browse subjects" },
    { to: "/resources", label: "Resource directory" },
    { to: "/dashboard", label: "Study dashboard" },
    { to: "/admin", label: "Admin panel" },
    { to: "/about", label: "About StudyNest 12" },
  ];
  const subjects = [
    { to: "/subjects/phy", label: "Physics" },
    { to: "/subjects/chem", label: "Chemistry" },
    { to: "/subjects/math", label: "Mathematics" },
    { to: "/subjects/bio", label: "Biology" },
    { to: "/subjects/acc", label: "Accountancy" },
    { to: "/subjects/cs", label: "Computer Science" },
  ];
  const quick = [
    { to: "/resources?types=pyq", label: "Previous Year Questions" },
    { to: "/resources?types=sample-papers", label: "Sample Papers" },
    { to: "/resources?types=one-shot", label: "One-Shot Revision" },
    { to: "/resources?types=notes", label: "Notes & Study Material" },
    { to: "/resources?types=mock-tests", label: "Mock Tests" },
    { to: "/resources?types=important-questions", label: "Important Questions" },
  ];

  return (
    <footer className="relative mt-auto overflow-hidden bg-navy-950 text-navy-200">
      <div className="bg-hero-grid absolute inset-0" aria-hidden="true" />
      <p
        className="text-outline-light pointer-events-none absolute -bottom-10 left-1/2 w-full -translate-x-1/2 select-none whitespace-nowrap text-center font-display text-[9rem] font-extrabold leading-none tracking-tight lg:text-[12rem]"
        aria-hidden="true"
      >
        STUDYNEST 12
      </p>

      <div className="container-x relative grid grid-cols-1 gap-10 py-14 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr] lg:py-16">
        <div>
          <Link to="/" className="focus-ring inline-block rounded-lg">
            <Logo dark size="lg" />
          </Link>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-navy-300">
            Lectures, notes, PYQs, sample papers and revision material for CBSE Class 12 —
            aggregated from across the web and organised by subject and chapter.
          </p>

          <form onSubmit={subscribe} className="mt-6 max-w-sm">
            <p className="text-[10.5px] font-extrabold uppercase tracking-[0.16em] text-gold-300">New resources & exam updates</p>
            <div className="mt-2.5 flex gap-2">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@school.in"
                aria-label="Email for updates"
                className="w-full rounded-lg border border-navy-700 bg-navy-900/80 px-3.5 py-2.5 text-sm font-semibold text-white placeholder:text-navy-400 focus:border-gold-400/60 focus:outline-none focus:ring-2 focus:ring-navy-800"
              />
              <button type="submit" className="focus-ring btn-gold shrink-0 px-4">
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </form>

          <div className="mt-6 inline-flex items-start gap-2 rounded-lg border border-navy-800 bg-navy-900/80 px-3.5 py-2.5">
            <p className="text-[11px] font-semibold leading-relaxed text-navy-300">
              <span className="font-extrabold text-gold-300">Demo notice:</span> the directory currently
              holds sample data. External links open official sites or topic searches until curation is done.
            </p>
          </div>
        </div>
        <FooterCol title="Explore" links={explore} />
        <FooterCol title="Popular subjects" links={subjects} />
        <FooterCol title="Quick resources" links={quick} />
      </div>
      <div className="relative border-t border-navy-800/80">
        <div className="container-x flex flex-col items-center justify-between gap-2 py-5 text-[11.5px] font-semibold text-navy-400 sm:flex-row">
          <p>© 2026 StudyNest 12. Built for CBSE Class 12 students.</p>
          <p>Independent study tool — not affiliated with CBSE or NCERT.</p>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, links }: { title: string; links: Array<{ to: string; label: string }> }) {
  return (
    <div>
      <h4 className="font-display text-sm font-bold uppercase tracking-[0.14em] text-gold-300">{title}</h4>
      <ul className="mt-4 space-y-2.5">
        {links.map((l) => (
          <li key={l.label}>
            <Link to={l.to} className="focus-ring group inline-flex items-center gap-1.5 rounded-sm text-sm font-semibold text-navy-300 transition-colors hover:text-white">
              <span className="h-px w-0 bg-gold-400 transition-all duration-300 group-hover:w-3" aria-hidden="true" />
              {l.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
