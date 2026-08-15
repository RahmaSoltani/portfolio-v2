"use client";

import Link from "next/link";
import { useRef } from "react";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/content/projects";
import { useLocale } from "@/lib/locale";

export function ProjectCard({ project, index }: { project: Project; index: number }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const { locale } = useLocale();

  return (
    <Link
      href={`/projects/${project.slug}`}
      className="group relative flex flex-col overflow-hidden rounded-2xl border border-line bg-background-raised/60 transition-colors hover:border-accent-dim"
      onMouseEnter={() => videoRef.current?.play()}
      onMouseLeave={() => {
        const el = videoRef.current;
        if (!el) return;
        el.pause();
        el.currentTime = 0;
      }}
    >
      <div className="relative aspect-video w-full overflow-hidden border-b border-line bg-black">
        <video
          ref={videoRef}
          src={project.videos[0]?.src}
          muted
          loop
          playsInline
          autoPlay
          preload="auto"
          onLoadedData={(e) => {
            const el = e.currentTarget;
            el.pause();
            el.currentTime = 0.1;
          }}
          className="h-full w-full object-cover opacity-90 transition-opacity duration-300 group-hover:opacity-100"
        />
        <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-background via-transparent to-transparent opacity-60" />
        <span className="absolute left-4 top-4 font-mono text-xs text-muted-dim">
          {String(index + 1).padStart(2, "0")}
        </span>
      </div>

      <div className="flex flex-1 flex-col gap-3 p-6">
        <div className="flex items-start justify-between gap-4">
          <h3 className="font-display text-xl font-semibold tracking-tight text-foreground">
            {project.shortTitle}
          </h3>
          <ArrowUpRight
            size={18}
            className="mt-1 shrink-0 text-muted-dim transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent"
          />
        </div>
        <p className="text-sm leading-relaxed text-muted">{project.tagline[locale]}</p>
        <p className="mt-auto pt-2 font-mono text-xs text-muted-dim">
          {project.tech.slice(0, 4).join(" · ")}
        </p>
      </div>
    </Link>
  );
}
