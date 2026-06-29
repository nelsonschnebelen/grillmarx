import Reveal from "./Reveal";

/**
 * Consistent interior-page header: eyebrow, large display title, lede.
 * Sits below the fixed navbar (note top padding) on a charcoal field.
 */
export default function PageHeader({
  eyebrow,
  title,
  lede,
}: {
  eyebrow: string;
  title: React.ReactNode;
  lede?: string;
}) {
  return (
    <header className="relative overflow-hidden border-b border-char-700 bg-char-900 pb-16 pt-36 md:pb-24 md:pt-44">
      <div
        className="pointer-events-none absolute -right-40 -top-40 h-96 w-96 rounded-full opacity-30 blur-3xl"
        style={{
          background:
            "radial-gradient(circle, rgba(225,85,31,0.5) 0%, transparent 70%)",
        }}
      />
      <div className="container-rail relative">
        <Reveal>
          <p className="eyebrow mb-6">{eyebrow}</p>
          <h1 className="display-line max-w-4xl text-5xl text-bone md:text-7xl">
            {title}
          </h1>
          {lede && (
            <p className="mt-7 max-w-xl text-lg leading-relaxed text-bone/65">
              {lede}
            </p>
          )}
        </Reveal>
      </div>
    </header>
  );
}
