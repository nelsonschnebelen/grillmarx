import Link from "next/link";

export default function NotFound() {
  return (
    <section className="flex min-h-[80svh] flex-col items-center justify-center px-6 text-center">
      <p className="eyebrow mb-6">86'd</p>
      <h1 className="display-line text-6xl text-bone md:text-8xl">
        That table's
        <br />
        <span className="italic text-ember">not here</span>
      </h1>
      <p className="mt-6 max-w-sm text-bone/60">
        The page you're after is off the menu. Let's get you back to the fire.
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <Link href="/" className="btn-ember">
          Back Home
        </Link>
        <Link href="/reservations" className="btn-ghost">
          Reserve a Table
        </Link>
      </div>
    </section>
  );
}
