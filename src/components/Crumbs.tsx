import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";

export interface CrumbItem {
  label: string;
  to?: string;
}

export default function Crumbs({ items }: { items: CrumbItem[] }) {
  return (
    <nav aria-label="Breadcrumb" className="flex flex-wrap items-center gap-1.5 text-xs font-bold text-navy-400">
      {items.map((item, i) => (
        <span key={i} className="flex items-center gap-1.5">
          {i > 0 ? <ChevronRight className="h-3 w-3 text-navy-300" /> : null}
          {item.to ? (
            <Link to={item.to} className="focus-ring rounded-sm transition-colors hover:text-navy-800">
              {item.label}
            </Link>
          ) : (
            <span className="text-navy-700">{item.label}</span>
          )}
        </span>
      ))}
    </nav>
  );
}
