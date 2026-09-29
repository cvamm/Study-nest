import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

/** Progress bar that animates from 0 to `pct` on mount. */
export default function AnimatedBar({
  pct,
  barClass,
  className,
  trackClass = "bg-navy-50",
}: {
  pct: number;
  barClass: string;
  className?: string;
  trackClass?: string;
}) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    const t = requestAnimationFrame(() => setMounted(true));
    return () => cancelAnimationFrame(t);
  }, []);
  const safePct = Math.max(0, Math.min(Number.isFinite(pct) ? pct : 0, 100));
  return (
    <div className={cn("overflow-hidden rounded-full", trackClass, className)}>
      <div
        className={cn("h-full rounded-full transition-[width] duration-1000 ease-out", barClass)}
        style={{ width: mounted ? `${safePct}%` : "0%" }}
      />
    </div>
  );
}
