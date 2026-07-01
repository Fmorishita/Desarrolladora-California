import Link from "next/link";
import { ArrowUpRight, type LucideIcon } from "lucide-react";
import { Reveal } from "@/components/motion/reveal";

export interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  href?: string;
  index?: number;
}

export function ServiceCard({
  icon: Icon,
  title,
  description,
  href = "/servicios",
  index = 0,
}: ServiceCardProps) {
  return (
    <Reveal as="article" index={index} className="h-full">
      <Link
        href={href}
        className="group flex h-full flex-col rounded-lg border border-border/70 bg-card p-7 transition-all duration-300 hover:-translate-y-1 hover:border-copper/40 hover:shadow-md"
      >
        <div className="flex items-center justify-between">
          <span className="flex size-11 items-center justify-center rounded-md bg-olive/10 text-olive transition-colors group-hover:bg-olive group-hover:text-bone">
            <Icon className="size-5" />
          </span>
          <ArrowUpRight className="size-5 text-stone/50 transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-copper" />
        </div>
        <h3 className="mt-6 font-display text-xl text-ink">{title}</h3>
        <p className="mt-3 text-sm leading-relaxed text-ink/65">{description}</p>
      </Link>
    </Reveal>
  );
}
