import Link from "next/link";
import { ArrowUpRight, MapPin } from "lucide-react";
import { Reveal } from "@/components/motion/reveal";
import { Badge } from "@/components/ui/badge";
import type { Project } from "@/lib/projects";

export function ProjectCard({ project, index = 0 }: { project: Project; index?: number }) {
  return (
    <Reveal as="article" index={index} className="h-full">
      <Link
        href={`/proyectos/${project.slug}`}
        className="group flex h-full flex-col overflow-hidden rounded-lg border border-border/70 bg-card transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
      >
        <div className="relative aspect-[16/10] overflow-hidden bg-sand">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={project.heroImageUrl}
            alt={`Vista de ${project.name}`}
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-carbon/40 to-transparent" />
          <div className="absolute left-4 top-4 flex gap-2">
            <Badge variant="copper">{project.status}</Badge>
          </div>
        </div>
        <div className="flex flex-1 flex-col p-6">
          <div className="flex items-start justify-between gap-3">
            <h3 className="font-display text-2xl text-ink">{project.name}</h3>
            <ArrowUpRight className="mt-1 size-5 shrink-0 text-stone/50 transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-copper" />
          </div>
          <p className="mt-2 inline-flex items-center gap-1.5 text-sm text-ink/60">
            <MapPin className="size-3.5 text-copper" />
            {project.location}
          </p>
          <p className="mt-4 flex-1 text-sm leading-relaxed text-ink/65">
            {project.shortDescription}
          </p>
          <div className="mt-6 flex items-center justify-between border-t border-border/70 pt-4">
            <span className="text-xs uppercase tracking-wider text-stone">
              {project.projectType}
            </span>
            <span className="font-display text-lg text-olive">
              Desde {project.priceFrom}
            </span>
          </div>
        </div>
      </Link>
    </Reveal>
  );
}
