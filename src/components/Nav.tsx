"use client";

import Link from "next/link";
import { profile } from "@/content/profile";
import { ui } from "@/content/ui";
import { useLocale } from "@/lib/locale";

export function Nav() {
  const { locale, setLocale } = useLocale();
  const t = ui[locale];

  return (
    <header className="sticky top-0 z-50 border-b border-line/60 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 sm:px-8">
        <Link href="/" className="font-display text-sm font-semibold tracking-tight">
          Rahma Soltani
        </Link>
        <nav className="flex items-center gap-6 text-sm text-muted">
          <Link href="/#about" className="transition-colors hover:text-foreground">
            {t.nav.about}
          </Link>
          <Link href="/#work" className="transition-colors hover:text-foreground">
            {t.nav.work}
          </Link>
          <Link href="/#contact" className="transition-colors hover:text-foreground">
            {t.nav.contact}
          </Link>
          <a
            href={profile.cv[locale]}
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-line px-4 py-1.5 text-foreground transition-colors hover:border-accent hover:text-accent"
          >
            {t.nav.resume}
          </a>
          <div className="flex items-center gap-1 font-mono text-xs">
            <button
              onClick={() => setLocale("en")}
              className={`transition-colors ${locale === "en" ? "text-accent" : "text-muted-dim hover:text-foreground"}`}
              aria-label="English"
            >
              EN
            </button>
            <span className="text-muted-dim">/</span>
            <button
              onClick={() => setLocale("fr")}
              className={`transition-colors ${locale === "fr" ? "text-accent" : "text-muted-dim hover:text-foreground"}`}
              aria-label="Français"
            >
              FR
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
}
