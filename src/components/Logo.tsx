import { cn } from "@/lib/utils";

export function LogoMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" className={cn("h-9 w-9 shrink-0", className)} aria-hidden="true">
      <rect width="64" height="64" rx="14" fill="#0A1B3D" />
      <path
        d="M12 34c3 10 11 17 20 17s17-7 20-17"
        stroke="#F5B93B"
        strokeWidth="3.4"
        fill="none"
        strokeLinecap="round"
        opacity=".55"
      />
      <path
        d="M16 36c2 8 9 13 16 13s14-5 16-13"
        stroke="#F5B93B"
        strokeWidth="4"
        fill="none"
        strokeLinecap="round"
      />
      <circle cx="32" cy="28" r="10.5" fill="#F7F9FE" />
      <path
        d="M26 20c3.5-3.6 9-3.4 12.4.4"
        stroke="#0A1B3D"
        strokeWidth="2.6"
        fill="none"
        strokeLinecap="round"
      />
      <circle cx="36.5" cy="27" r="1.7" fill="#0A1B3D" />
      <path d="M41 30l4.5 1.4-4 2.2" fill="#F5B93B" stroke="#F5B93B" strokeWidth="1.6" strokeLinejoin="round" />
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
      <LogoMark className={size === "lg" ? "h-11 w-11" : "h-9 w-9"} />
      <span className="flex flex-col leading-none">
        <span
          className={cn(
            "font-display font-bold tracking-tight",
            size === "lg" ? "text-2xl" : "text-lg",
            dark ? "text-white" : "text-navy-900",
          )}
        >
          StudyNest
          <span
            className={cn(
              "ml-1.5 inline-flex translate-y-[-1px] items-center rounded-md px-1.5 py-0.5 align-middle font-sans text-[11px] font-extrabold",
              dark ? "bg-gold-400 text-navy-900" : "bg-navy-900 text-gold-300",
            )}
          >
            12
          </span>
        </span>
        <span
          className={cn(
            "mt-1 text-[10px] font-bold uppercase tracking-[0.18em]",
            dark ? "text-navy-300" : "text-navy-500/70",
          )}
        >
          CBSE Resources Nest
        </span>
      </span>
    </span>
  );
}
