import Link from "next/link";

/**
 * Grillmarx wordmark — a flame-struck "G" monogram plus the name.
 * Pure SVG so it stays crisp and recolorable; no image dependency.
 */
export default function Logo({
  className = "",
  compact = false,
}: {
  className?: string;
  compact?: boolean;
}) {
  return (
    <Link
      href="/"
      aria-label="Grillmarx — home"
      className={`group inline-flex items-center gap-3 ${className}`}
    >
      <svg
        width="34"
        height="34"
        viewBox="0 0 48 48"
        fill="none"
        className="shrink-0"
        aria-hidden
      >
        <circle
          cx="24"
          cy="24"
          r="22.5"
          stroke="currentColor"
          strokeOpacity="0.35"
          strokeWidth="1"
        />
        {/* ember flame */}
        <path
          d="M24 11c2.6 4.2 6.4 6.2 6.4 11.2 0 2-.9 3.7-2.3 4.9.5-1.6.2-3.3-1-4.6.2 2.7-1.6 4.1-2.9 5.4-1.5 1.5-2.7 3-2.7 5.3 0 3.4 2.6 5.8 6 5.8-6.6 1.6-12-2.3-12-8.2 0-3.6 2-6.1 3.7-8.6C18.7 17 21.6 14.6 24 11Z"
          fill="#e1551f"
        />
      </svg>
      {!compact && (
        <span className="font-display text-[1.35rem] font-medium uppercase tracking-[0.2em] text-bone transition-colors group-hover:text-brass">
          Grillmarx
        </span>
      )}
    </Link>
  );
}
