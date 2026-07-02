import Link from "next/link";
import { Landmark, Map, MessageSquare, ArrowRight } from "lucide-react";
import { Reveal } from "@/components/motion/reveal";
import { SitePhoto } from "@/components/site-photo";
import type { SiteImageId } from "@/lib/images";

const paths: {
  icon: typeof Landmark;
  image: SiteImageId;
  title: string;
  description: string;
  href: string;
  cta: string;
}[] = [
  {
    icon: Landmark,
    image: "path-landowner",
    title: "Tengo tierra y quiero desarrollarla",
    description:
      "Solicita un diagnóstico privado del potencial de tu terreno o hectáreas.",
    href: "/terratenientes",
    cta: "Solicitar diagnóstico",
  },
  {
    icon: Map,
    image: "path-projects",
    title: "Quiero conocer proyectos",
    description:
      "Explora oportunidades activas de inversión y descanso, como Mirador del Valle.",
    href: "/proyectos",
    cta: "Ver proyectos",
  },
  {
    icon: MessageSquare,
    image: "path-contact",
    title: "Quiero contactar a la desarrolladora",
    description:
      "Escríbenos para asociaciones, inversión o información general.",
    href: "/contacto",
    cta: "Contactar",
  },
];

export function ThreePaths() {
  return (
    <section className="relative -mt-16 pb-4">
      <div className="container-tight">
        <div className="grid gap-4 lg:grid-cols-3">
          {paths.map((p, i) => (
            <Reveal as="article" index={i} key={p.href}>
              <Link
                href={p.href}
                className="group flex h-full flex-col overflow-hidden rounded-lg border border-border/70 bg-card shadow-md transition-all duration-300 hover:-translate-y-1 hover:border-copper/40"
              >
                <div className="relative">
                  <SitePhoto
                    id={p.image}
                    aspect="aspect-[16/9]"
                    width={800}
                    groupHover
                  />
                  <span className="absolute -bottom-5 left-6 flex size-11 items-center justify-center rounded-md bg-olive text-bone shadow-md transition-colors group-hover:bg-copper group-hover:text-carbon">
                    <p.icon className="size-5" />
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-6 pt-9">
                  <h3 className="font-display text-xl leading-snug text-ink">
                    {p.title}
                  </h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-ink/65">
                    {p.description}
                  </p>
                  <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-olive transition-colors group-hover:text-copper">
                    {p.cta}
                    <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
