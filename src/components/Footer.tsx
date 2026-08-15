"use client";

import { profile } from "@/content/profile";
import { ui } from "@/content/ui";
import { useLocale } from "@/lib/locale";

export function Footer() {
  const { locale } = useLocale();
  const t = ui[locale];

  return (
    <footer id="contact" className="border-t border-line/60">
      <div className="mx-auto max-w-6xl px-6 py-16 sm:px-8">
        <div className="flex flex-col gap-10 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="font-mono text-xs uppercase tracking-widest text-muted-dim">
              {t.footer.contact}
            </p>
            <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight sm:text-4xl">
              Rahma Soltani
            </h2>
            <p className="mt-2 text-sm text-muted">
              {profile.role[locale]} · {profile.location[locale]}
            </p>
          </div>
          <div className="flex flex-col gap-2 text-sm sm:items-end">
            <a
              href={`mailto:${profile.email}`}
              className="text-foreground underline decoration-line underline-offset-4 transition-colors hover:decoration-accent hover:text-accent"
            >
              {profile.email}
            </a>
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              className="text-muted transition-colors hover:text-foreground"
            >
              github.com/RahmaSoltani
            </a>
            <span className="text-muted">{profile.phone}</span>
          </div>
        </div>
        <div className="mt-16 flex flex-col gap-4 border-t border-line/60 pt-6 text-xs text-muted-dim sm:flex-row sm:items-center sm:justify-between">
          <span>
            &copy; {new Date().getFullYear()} {profile.name}. {profile.location[locale]}.
          </span>
          <div className="flex gap-4">
            <a href={profile.cv.fr} target="_blank" rel="noreferrer" className="hover:text-foreground">
              {t.footer.cvFr}
            </a>
            <a href={profile.cv.en} target="_blank" rel="noreferrer" className="hover:text-foreground">
              {t.footer.cvEn}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
