"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { profile } from "@/content/profile";
import { ui } from "@/content/ui";
import { useLocale } from "@/lib/locale";

export function Nav() {
  const { locale, setLocale } = useLocale();
  const t = ui[locale];
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header className="sticky top-0 z-50 border-b border-line/60 bg-background/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 sm:px-8">
          <Link href="/" className="font-display text-sm font-semibold tracking-tight">
            Rahma Soltani
          </Link>

          <nav className="hidden items-center gap-6 text-sm text-muted md:flex">
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

          <button
            onClick={() => setOpen(true)}
            className="inline-flex items-center justify-center rounded-full border border-line p-2 text-foreground transition-colors hover:border-accent hover:text-accent md:hidden"
            aria-label="Open menu"
          >
            <Menu size={18} />
          </button>
        </div>
      </header>

      {/* Rendered outside <header> on purpose: header's backdrop-blur creates a
          containing block for position:fixed descendants and corrupts their
          viewport-relative positioning. */}
      <AnimatePresence>
        {open && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-40 bg-background/70 backdrop-blur-sm md:hidden"
              onClick={() => setOpen(false)}
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.25, ease: "easeOut" }}
              className="fixed inset-y-0 right-0 z-50 flex w-72 max-w-[85vw] flex-col gap-1 border-l border-line bg-background-raised px-6 py-6 md:hidden"
            >
              <div className="mb-6 flex items-center justify-between">
                <span className="font-display text-sm font-semibold tracking-tight">Menu</span>
                <button
                  onClick={() => setOpen(false)}
                  className="inline-flex items-center justify-center rounded-full border border-line p-2 text-foreground transition-colors hover:border-accent hover:text-accent"
                  aria-label="Close menu"
                >
                  <X size={18} />
                </button>
              </div>

              <Link
                href="/#about"
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-3 text-base text-foreground transition-colors hover:bg-line/40"
              >
                {t.nav.about}
              </Link>
              <Link
                href="/#work"
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-3 text-base text-foreground transition-colors hover:bg-line/40"
              >
                {t.nav.work}
              </Link>
              <Link
                href="/#contact"
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-3 text-base text-foreground transition-colors hover:bg-line/40"
              >
                {t.nav.contact}
              </Link>

              <a
                href={profile.cv[locale]}
                target="_blank"
                rel="noreferrer"
                onClick={() => setOpen(false)}
                className="mt-4 inline-flex items-center justify-center rounded-full border border-line px-4 py-2.5 text-sm font-medium text-foreground transition-colors hover:border-accent hover:text-accent"
              >
                {t.nav.resume}
              </a>

              <div className="mt-auto flex items-center gap-2 border-t border-line/60 pt-4 font-mono text-sm">
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
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
