import { cn } from "@/lib/utils";

export function LogoMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" className={cn("h-9 w-9 shrink-0", className)} aria-hidden="true">
      <g fill="#1A1A2E" stroke="#1A1A2E" strokeWidth="0">
        <path d="M10 34 L10 44 C10 45.5 11.5 47 13 47 L27 47 L29.5 44" fill="none" stroke="#1A1A2E" strokeWidth="2.2" strokeLinejoin="round" />
        <path d="M29.5 44 C30.8 42.5 31 41 31 40 L31 32 C31 31 30 30 29 30 L11 30 C10 30 9 31 9 32 L9 40" fill="none" stroke="#1A1A2E" strokeWidth="2.2" strokeLinejoin="round" />
        <rect x="12.5" y="32.5" width="16.5" height="6.3" fill="none" stroke="#1A1A2E" strokeWidth="1.2" />
        <line x1="14.5" y1="34" x2="27" y2="34" stroke="#1A1A2E" strokeWidth="0.8" />
        <line x1="14.5" y1="35.4" x2="27" y2="35.4" stroke="#1A1A2E" strokeWidth="0.8" />
        <line x1="14.5" y1="36.8" x2="27" y2="36.8" stroke="#1A1A2E" strokeWidth="0.8" />
        <line x1="14.5" y1="38.2" x2="27" y2="38.2" stroke="#1A1A2E" strokeWidth="0.8" />
        <path d="M11 30 L11.5 13 C11.6 11.8 12.6 11 13.8 11 L26.2 11 C27.4 11 28.4 11.8 28.5 13 L29 30" fill="none" stroke="#1A1A2E" strokeWidth="2.2" strokeLinejoin="round" />
        <path d="M35 30 L50 29.5 L50 46 L30 46 C29.2 46 28.5 45.3 28.5 44.5 C28.5 43.7 29 42.5 29.5 41 C30 39 32 37 34.5 35 C36.5 33.3 38 32.3 39 31.8 C38.3 31.5 37 31 35 30 Z" fill="none" stroke="#1A1A2E" strokeWidth="2" strokeLinejoin="round" />
        <path d="M34.5 35 C36 33.8 37.2 33 39 32.5 L44 31.5 L44.5 45.5 L31 45.5 C30.5 45.5 30 45 30 44.3 C30 43.7 30.4 42.7 31 41.5 C31.7 39.8 33 37.8 34.5 35 Z" fill="none" stroke="#1A1A2E" strokeWidth="1.3" strokeLinejoin="round" opacity="0.85" />
        <path d="M39 32.5 C40.3 32 41.5 31.8 44 31.5" fill="none" stroke="#1A1A2E" strokeWidth="1.1" opacity="0.6" />
        <path d="M32.5 43.8 L48 43.5" stroke="#1A1A2E" strokeWidth="1" opacity="0.45" />
      </g>
    </svg>
  );
}

export default function Logo({
  dark = false,
  size = "md",
}: {
  dark?: boolean;
  size?: "md" | "lg";
}) {
  return (
    <span className="inline-flex items-center gap-2.5">
      <LogoMark className={size === "lg" ? "h-12 w-12" : "h-10 w-10"} />
      <span className="flex flex-col leading-none">
        <span
          className={cn(
            "font-display font-extrabold tracking-tight",
            size === "lg" ? "text-2xl" : "text-xl",
            dark ? "text-white" : "text-navy-950",
          )}
        >
          Studynest 12
        </span>
        <span
          className={cn(
            "mt-1 text-[11px] font-bold uppercase tracking-[0.18em]",
            dark ? "text-sky-300" : "text-sky-600",
          )}
        >
          Education Tech
        </span>
      </span>
    </span>
  );
}
