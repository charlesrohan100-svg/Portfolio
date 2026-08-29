// src/components/project-card.tsx
import Image from "next/image";
import type { Project } from "@/db/schema";
import { cn } from "@/lib/helper/utils";

export function ProjectCard({
  project,
  className,
}: {
  project: Project;
  className?: string;
}) {
  return (
    <article className={cn("h-full", className)}>
      <a
        href={project.liveUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="block h-full overflow-hidden rounded-xl border border-border bg-surface"
      >
        <div className="relative aspect-video overflow-hidden">
          <Image
            src={project.imageUrl}
            alt={project.title}
            fill
            sizes="(max-width: 768px) 100vw, 33vw"
            className="object-cover"
          />
        </div>
        <div className="p-4">
          <h3 className="text-lg font-medium text-text">{project.title}</h3>
          <p className="mt-2 text-sm text-text-muted">{project.description}</p>
        </div>
      </a>
    </article>
  );
}
