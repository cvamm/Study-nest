import { cn } from "@/lib/utils";

export function LogoMark({ className }: { className?: string }) {
  return (
    <img
      src="/logo-mascot.png"
      alt="StudyBust 12 Icon"
      className={cn("h-10 w-auto object-contain shrink-0", className)}
      loading="eager"
    />
  );
}

export default function Logo({
  dark = false,
  size = "md",
  layout = "horizontal",
  className,
}: {
  dark?: boolean;
  size?: "sm" | "md" | "lg" | "xl";
  layout?: "horizontal" | "stacked" | "original" | "mark";
  className?: string;
}) {
  if (layout === "mark") {
    return <LogoMark className={className} />;
  }

  if (layout === "stacked") {
    const heightClass =
      size === "sm"
        ? "h-11"
        : size === "lg"
        ? "h-20"
        : size === "xl"
        ? "h-28"
        : "h-14";
    return (
      <span className={cn("inline-flex items-center select-none", className)}>
        <img
          src={dark ? "/logo-full-dark.png" : "/logo-full-transparent.png"}
          alt="StudyBust 12 — CBSE Board"
          className={cn("w-auto object-contain shrink-0", heightClass)}
          loading="eager"
        />
      </span>
    );
  }

  if (layout === "original") {
    const heightClass =
      size === "sm"
        ? "h-10"
        : size === "lg"
        ? "h-18"
        : size === "xl"
        ? "h-28"
        : "h-14";
    return (
      <span className={cn("inline-flex items-center overflow-hidden rounded-xl select-none", className)}>
        <img
          src="/logo.png"
          alt="StudyBust 12 — CBSE Board"
          className={cn("w-auto object-contain shrink-0", heightClass)}
          loading="eager"
        />
      </span>
    );
  }

  // Default: Horizontal brand logo (mascot + hand-drawn brand typography)
  const heightClass =
    size === "sm"
      ? "h-8"
      : size === "lg"
      ? "h-13 sm:h-14"
      : size === "xl"
      ? "h-18"
      : "h-11 sm:h-12";

  return (
    <span className={cn("inline-flex items-center select-none", className)}>
      <img
        src={dark ? "/logo-horizontal-dark.png" : "/logo-horizontal.png"}
        alt="StudyBust 12 — CBSE Board"
        className={cn("w-auto object-contain shrink-0 transition-transform duration-200 hover:scale-[1.02]", heightClass)}
        loading="eager"
      />
    </span>
  );
}
