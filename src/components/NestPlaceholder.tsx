export function NestPlaceholder({ className = "h-16 w-16" }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" className={className} aria-hidden="true">
      <path
        d="M10 32c4 12 13 19 22 19s18-7 22-19"
        stroke="#C4D2EE"
        strokeWidth="4"
        fill="none"
        strokeLinecap="round"
      />
      <path
        d="M16 34c2 8 8 13 16 13s14-5 16-13"
        stroke="#93AEDE"
        strokeWidth="3.4"
        fill="none"
        strokeLinecap="round"
      />
      <circle cx="32" cy="26" r="9.5" fill="#EFF3FB" stroke="#C4D2EE" strokeWidth="2" />
      <path d="M27 19.5c3-3 7.5-2.8 10.4.4" stroke="#93AEDE" strokeWidth="2.2" fill="none" strokeLinecap="round" />
    </svg>
  );
}
