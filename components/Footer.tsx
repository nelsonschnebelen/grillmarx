import Link from "next/link";
import { nav, site } from "@/data/site";
import { locations } from "@/data/locations";
import Logo from "./Logo";

export default function Footer() {
  return (
    <footer className="relative border-t border-char-700 bg-char-900">
      <div className="container-rail py-20">
        <div className="grid gap-14 md:grid-cols-12">
          {/* Brand */}
          <div className="md:col-span-4">
            <Logo />
            <p className="mt-6 max-w-xs font-display text-2xl font-light leading-snug text-bone/90">
              {site.tagline}
            </p>
            <p className="mt-6 max-w-xs text-sm leading-relaxed text-bone/55">
              {site.description}
            </p>
          </div>

          {/* Explore */}
          <div className="md:col-span-2">
            <h3 className="eyebrow mb-5">Explore</h3>
            <ul className="space-y-3">
              {nav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-bone/65 transition-colors hover:text-ember-300"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/reservations"
                  className="text-sm text-bone/65 transition-colors hover:text-ember-300"
                >
                  Reservations
                </Link>
              </li>
            </ul>
          </div>

          {/* Houses */}
          <div className="md:col-span-3">
            <h3 className="eyebrow mb-5">The Houses</h3>
            <ul className="space-y-3">
              {locations.map((loc) => (
                <li key={loc.slug}>
                  <Link
                    href={`/locations/${loc.slug}`}
                    className="group flex items-baseline gap-2 text-sm text-bone/65 transition-colors hover:text-ember-300"
                  >
                    <span>{loc.city}</span>
                    <span className="text-xs text-bone/35">{loc.state}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="md:col-span-3">
            <h3 className="eyebrow mb-5">Stay Close</h3>
            <a
              href={`mailto:${site.email}`}
              className="link-underline text-sm text-bone/80"
            >
              {site.email}
            </a>
            <div className="mt-6 flex gap-5">
              <a
                href={site.social.instagram}
                target="_blank"
                rel="noreferrer"
                className="text-xs uppercase tracking-mega text-bone/55 transition-colors hover:text-brass"
              >
                Instagram
              </a>
              <a
                href={site.social.facebook}
                target="_blank"
                rel="noreferrer"
                className="text-xs uppercase tracking-mega text-bone/55 transition-colors hover:text-brass"
              >
                Facebook
              </a>
              <a
                href={site.social.tiktok}
                target="_blank"
                rel="noreferrer"
                className="text-xs uppercase tracking-mega text-bone/55 transition-colors hover:text-brass"
              >
                TikTok
              </a>
            </div>
          </div>
        </div>

        <div className="hairline my-12" />

        <div className="flex flex-col items-center justify-between gap-4 text-xs text-bone/40 md:flex-row">
          <p>
            © {new Date().getFullYear()} {site.legalName}. All rights reserved.
          </p>
          <p className="flex items-center gap-2">
            <span className="inline-block h-1.5 w-1.5 animate-flicker rounded-full bg-ember" />
            Tended by live fire since {site.founded}.
          </p>
        </div>
      </div>
    </footer>
  );
}
