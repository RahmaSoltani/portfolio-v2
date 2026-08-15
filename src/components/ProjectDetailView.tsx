"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { ProjectVideoPlayer } from "@/components/ProjectVideo";
import { projects, type Project } from "@/content/projects";
import { ui } from "@/content/ui";
import { useLocale } from "@/lib/locale";

export function ProjectDetailView({ project }: { project: Project }) {
  const { locale } = useLocale();
  const t = ui[locale];

  return (
    <div className="flex flex-1 flex-col">
      <Nav />

      <main className="flex-1">
        <section className="mx-auto max-w-6xl px-6 pb-12 pt-14 sm:px-8 sm:pt-20">
          <Link
            href="/#work"
            className="inline-flex items-center gap-2 font-mono text-xs text-muted-dim transition-colors hover:text-foreground"
          >
            <ArrowLeft size={14} />
            {t.project.allWork}
          </Link>

          <div className="mt-8 flex flex-col gap-6 border-b border-line/60 pb-10">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent">
                {project.role[locale]} · {project.year}
              </p>
              <h1 className="mt-4 max-w-3xl font-display text-3xl font-semibold leading-tight tracking-tight text-balance sm:text-5xl">
                {project.title[locale]}
              </h1>
              <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted">
                {project.tagline[locale]}
              </p>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6 sm:px-8">
          <div className="grid grid-cols-1 gap-16 py-14 lg:grid-cols-[1fr_18rem]">
            <div className="flex flex-col gap-16">
              <div>
                <p className="font-mono text-xs uppercase tracking-widest text-muted-dim">
                  {t.project.overview}
                </p>
                <div className="mt-4 flex flex-col gap-4">
                  {project.summary[locale].map((p, i) => (
                    <p key={i} className="text-base leading-relaxed text-muted">
                      {p}
                    </p>
                  ))}
                </div>
              </div>

              <div>
                <div className="flex items-baseline justify-between gap-4">
                  <p className="font-mono text-xs uppercase tracking-widest text-muted-dim">
                    {t.project.whatIDid}
                  </p>
                  <p className="font-mono text-xs text-accent">{project.role[locale]}</p>
                </div>
                <p className="mt-4 border-l border-line pl-6 text-base leading-relaxed text-foreground/90">
                  {project.whatIDid[locale]}
                </p>
              </div>

              <div>
                <p className="font-mono text-xs uppercase tracking-widest text-muted-dim">
                  {t.project.inAction}
                </p>
                <div className="mt-4 grid grid-cols-1 gap-6 md:grid-cols-2">
                  {project.videos.map((v) => (
                    <ProjectVideoPlayer key={v.src} video={v} />
                  ))}
                </div>
              </div>

              {project.images && project.images.length > 0 && (
                <div>
                  <p className="font-mono text-xs uppercase tracking-widest text-muted-dim">
                    {t.project.theBuild}
                  </p>
                  <div className="mt-4 grid grid-cols-1 gap-6 md:grid-cols-2">
                    {project.images.map((img) => (
                      <figure
                        key={img.src}
                        className="overflow-hidden rounded-xl border border-line bg-black"
                      >
                        <div className="relative aspect-video w-full">
                          <Image
                            src={img.src}
                            alt={img.label[locale]}
                            fill
                            sizes="(min-width: 768px) 50vw, 100vw"
                            className="object-contain"
                          />
                        </div>
                        <figcaption className="border-t border-line px-4 py-3 font-mono text-xs text-muted">
                          {img.label[locale]}
                        </figcaption>
                      </figure>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <aside className="flex flex-col gap-8 lg:sticky lg:top-24 lg:self-start">
              <div>
                <p className="font-mono text-xs uppercase tracking-widest text-muted-dim">
                  {t.project.stack}
                </p>
                <div className="mt-3 flex flex-wrap gap-x-2 gap-y-1.5 text-sm text-foreground">
                  {project.tech.map((tech, i) => (
                    <span key={tech}>
                      {tech}
                      {i < project.tech.length - 1 && <span className="text-muted-dim">,</span>}
                    </span>
                  ))}
                </div>
              </div>
            </aside>
          </div>
        </section>

        <section className="border-t border-line/60">
          <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-10 sm:px-8">
            <NextProjectLink current={project.slug} label={t.project.nextProject} />
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

function NextProjectLink({ current, label }: { current: string; label: string }) {
  const index = projects.findIndex((p) => p.slug === current);
  const next = projects[(index + 1) % projects.length];
  return (
    <Link
      href={`/projects/${next.slug}`}
      className="group flex items-center gap-3 font-display text-lg font-semibold tracking-tight text-foreground"
    >
      {label} {next.shortTitle}
      <ArrowUpRight
        size={18}
        className="text-muted-dim transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent"
      />
    </Link>
  );
}
