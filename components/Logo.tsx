import Link from "next/link";

/**
 * GrillMarX wordmark — a recreation of the client's logo: a heavy slab-serif
 * "GrillMar" with the signature brand-red, hand-circled "x", and the
 * "Steakhouse & Raw Bar" tagline beneath. Rendered as live text + an inline
 * SVG ring so it stays crisp at any size and recolors for the dark UI.
 *
 * Drop-in note: if the client supplies the official vector (.svg/.ai), replace
 * the markup below with their file — the letterforms here approximate it.
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
      aria-label="GrillMarX Steakhouse & Raw Bar — home"
      className={`group inline-flex select-none flex-col leading-none ${className}`}
    >
      <span className="flex items-baseline font-slab text-[1.45rem] font-extrabold tracking-[-0.01em] text-bone transition-colors duration-300 group-hover:text-white">
        GrillMar
        <span className="relative inline-block px-[0.04em] text-marx">
          x
          {/* hand-drawn ring around the x */}
          <svg
            viewBox="0 0 40 34"
            aria-hidden
            className="pointer-events-none absolute left-1/2 top-1/2 h-[1.55em] w-[1.85em] -translate-x-1/2 -translate-y-[54%] -rotate-6"
          >
            <path
              d="M20 3.2c8.4-.4 16.2 2.3 16.6 7.6.5 6.2-9.1 11.4-18.8 11.7C8.7 22.7 2.3 19 2.6 12.9 2.9 7 11 3.9 20 3.2Z"
              fill="none"
              stroke="#b5242b"
              strokeWidth="2.1"
              strokeLinecap="round"
            />
          </svg>
        </span>
      </span>
      {!compact && (
        <span className="mt-[3px] font-sans text-[0.5rem] font-medium uppercase tracking-[0.34em] text-bone/70">
          Steakhouse &amp; Raw Bar
        </span>
      )}
    </Link>
  );
}
