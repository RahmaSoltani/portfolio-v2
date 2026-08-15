"use client";

import { ArrowUpRight, ArrowDown } from "lucide-react";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { ProjectCard } from "@/components/ProjectCard";
import { profile } from "@/content/profile";
import { projects } from "@/content/projects";
import { ui } from "@/content/ui";
import { useLocale } from "@/lib/locale";

export default function Home() {
  const { locale } = useLocale();
  const t = ui[locale];

  return (
    <div className="flex flex-1 flex-col">
      <Nav />

      <main className="flex-1">
        {/* Hero */}
        <section className="mx-auto flex max-w-6xl flex-col justify-center px-6 pb-20 pt-20 sm:px-8 sm:pb-28 sm:pt-28">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent">
            {profile.role[locale]} · {profile.location[locale]}
          </p>
          <h1 className="mt-6 max-w-4xl font-display text-3xl font-semibold leading-tight tracking-tight text-balance sm:text-5xl">
            {profile.name}
          </h1>
          <div className="mt-6 flex max-w-xl flex-col gap-4">
            {profile.bio[locale].map((p, i) =>
              i === 0 ? (
                <p key={i} className="text-lg font-semibold leading-relaxed text-foreground sm:text-xl">
                  {p}
                </p>
              ) : (
                <p key={i} className="text-base leading-relaxed text-muted sm:text-lg">
                  {p}
                </p>
              )
            )}
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#work"
              className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-medium text-background transition-colors hover:bg-accent-dim"
            >
              {t.hero.viewWork}
              <ArrowDown size={16} />
            </a>
            <a
              href={`mailto:${profile.email}`}
              className="inline-flex items-center gap-2 rounded-full border border-line px-6 py-3 text-sm font-medium text-foreground transition-colors hover:border-accent hover:text-accent"
            >
              {t.hero.getInTouch}
              <ArrowUpRight size={16} />
            </a>
          </div>
        </section>

        {/* Work */}
        <section id="work" className="border-t border-line/60">
          <div className="mx-auto max-w-6xl px-6 py-20 sm:px-8">
            <div className="flex items-baseline justify-between gap-4">
              <h2 className="font-display text-2xl font-semibold tracking-tight sm:text-3xl">
                {t.work.heading}
              </h2>
              <span className="font-mono text-xs text-muted-dim">
                {t.work.count(projects.length)}
              </span>
            </div>
            <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2">
              {projects.map((project, i) => (
                <ProjectCard key={project.slug} project={project} index={i} />
              ))}
            </div>
          </div>
        </section>

        {/* About */}
        <section id="about" className="border-t border-line/60">
          <div className="mx-auto max-w-6xl px-6 py-20 sm:px-8">
            <div className="grid grid-cols-1 gap-16 lg:grid-cols-[1.1fr_1fr]">
              <div className="flex flex-col gap-5">
                <div>
                  <p className="font-mono text-xs uppercase tracking-widest text-muted-dim">
                    {t.about.experience}
                  </p>
                  <ol className="mt-4 flex flex-col gap-8 border-l border-line pl-6">
                    {profile.experience.map((job) => (
                      <li key={job.role.en} className="relative">
                        <span className="absolute -left-[27px] top-1.5 h-2 w-2 rounded-full bg-accent" />
                        <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                          <h3 className="font-display text-base font-semibold text-foreground">
                            {job.role[locale]}
                          </h3>
                          <span className="font-mono text-xs text-muted-dim">
                            {job.period[locale]}
                          </span>
                        </div>
                        <p className="mt-1 text-sm text-muted">{job.org[locale]}</p>
                        <ul className="mt-3 flex flex-col gap-2">
                          {job.points[locale].map((point, i) => (
                            <li key={i} className="text-sm leading-relaxed text-muted">
                              <span className="text-muted-dim">· </span>
                              {point}
                            </li>
                          ))}
                        </ul>
                      </li>
                    ))}
                  </ol>
                </div>

                <div>
                  <p className="font-mono text-xs uppercase tracking-widest text-muted-dim">
                    {t.about.alsoBuilt}
                  </p>
                  <div className="mt-4 flex flex-col gap-4">
                    {profile.otherProjects.map((p) => (
                      <div key={p.name.en} className="text-sm">
                        <p className="text-foreground">{p.name[locale]}</p>
                        <p className="mt-0.5 text-muted">{p.description[locale]}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-10">
                <div>
                  <p className="font-mono text-xs uppercase tracking-widest text-muted-dim">
                    {t.about.skills}
                  </p>
                  <dl className="mt-4 flex flex-col divide-y divide-line/60 border-t border-line/60">
                    {profile.skills.map((group) => (
                      <div
                        key={group.category.en}
                        className="grid grid-cols-[7rem_1fr] gap-4 py-3 text-sm sm:grid-cols-[9rem_1fr]"
                      >
                        <dt className="text-muted-dim">{group.category[locale]}</dt>
                        <dd className="text-foreground">{group.items.join(", ")}</dd>
                      </div>
                    ))}
                  </dl>
                </div>

                <div>
                  <p className="font-mono text-xs uppercase tracking-widest text-muted-dim">
                    {t.about.education}
                  </p>
                  <div className="mt-4 flex flex-col gap-4">
                    {profile.education.map((e) => (
                      <div key={e.degree.en} className="text-sm">
                        <p className="text-foreground">{e.degree[locale]}</p>
                        <p className="mt-0.5 text-muted">
                          {e.school[locale]} · {e.period}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <p className="font-mono text-xs uppercase tracking-widest text-muted-dim">
                    {t.about.languages}
                  </p>
                  <div className="mt-4 flex flex-col gap-2 text-sm">
                    {profile.languages.map((l) => (
                      <div key={l.name.en} className="flex justify-between">
                        <span className="text-foreground">{l.name[locale]}</span>
                        <span className="text-muted">{l.level[locale]}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
