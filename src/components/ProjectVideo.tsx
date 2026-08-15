"use client";

import type { ProjectVideo } from "@/content/projects";
import { useLocale } from "@/lib/locale";

export function ProjectVideoPlayer({ video }: { video: ProjectVideo }) {
  const { locale } = useLocale();
  return (
    <div className="overflow-hidden rounded-xl border border-line bg-black">
      <video
        src={video.src}
        controls
        preload="metadata"
        className="aspect-video w-full bg-black"
      />
      <div className="border-t border-line px-4 py-3 font-mono text-xs text-muted">
        {video.label[locale]}
      </div>
    </div>
  );
}
