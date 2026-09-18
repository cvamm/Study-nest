import type { ReactNode } from "react";
import { NestPlaceholder } from "@/components/NestPlaceholder";

export default function EmptyState({
  title,
  body,
  action,
}: {
  title: string;
  body: string;
  action?: ReactNode;
}) {
  return (
    <div className="flex flex-col items-center justify-center rounded-xl border border-dashed border-navy-200 bg-white/70 px-6 py-14 text-center">
      <NestPlaceholder />
      <h3 className="mt-4 font-display text-lg font-bold text-navy-900">{title}</h3>
      <p className="mt-1.5 max-w-sm text-sm leading-relaxed text-navy-500">{body}</p>
      {action ? <div className="mt-5">{action}</div> : null}
    </div>
  );
}
