/**
 * Infinite horizontal marquee of phrases, divided by ember dots. Used as a
 * tactile band between sections. Pure CSS animation (see tailwind keyframes).
 */
export default function Marquee({ items }: { items: string[] }) {
  const row = [...items, ...items];
  return (
    <div className="relative overflow-hidden border-y border-char-700 bg-char-900 py-5">
      <div className="flex w-max animate-marquee gap-10 whitespace-nowrap will-change-transform">
        {row.map((item, i) => (
          <span
            key={i}
            className="flex items-center gap-10 font-display text-xl font-light uppercase tracking-[0.18em] text-bone/70"
          >
            {item}
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-ember" />
          </span>
        ))}
      </div>
    </div>
  );
}
