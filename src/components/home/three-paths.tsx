import Link from "next/link";
import { Landmark, Map, MessageSquare, ArrowRight } from "lucide-react";
import { Reveal } from "@/components/motion/reveal";

const paths = [
  {
    icon: Landmark,
    title: "Tengo tierra y quiero desarrollarla",
    description:
      "Solicita un diagnóstico privado del potencial de tu terreno o hectáreas.",
    href: "/terratenientes",
    cta: "Solicitar diagnóstico",
  },
  {
    icon: Map,
    title: "Quiero conocer proyectos",
    description:
      "Explora oportunidades activas de inversión y descanso, como Mirador del Valle.",
    href: "/proyectos",
    cta: "Ver proyectos",
  },
  {
    icon: MessageSquare,
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
                className="group flex h-full flex-col rounded-lg border border-border/70 bg-card p-7 shadow-md transition-all duration-300 hover:-translate-y-1 hover:border-copper/40"
              >
                <span className="flex size-12 items-center justify-center rounded-md bg-olive/10 text-olive transition-colors group-hover:bg-olive group-hover:text-bone">
                  <p.icon className="size-6" />
                </span>
                <h3 className="mt-6 font-display text-xl leading-snug text-ink">
                  {p.title}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-ink/65">
                  {p.description}
                </p>
                <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-olive transition-colors group-hover:text-copper">
                  {p.cta}
                  <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
