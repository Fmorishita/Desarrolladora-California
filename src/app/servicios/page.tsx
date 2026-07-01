import Link from "next/link";
import type { Metadata } from "next";
import { ArrowRight } from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/motion/reveal";
import { Button } from "@/components/ui/button";
import { CTASection } from "@/components/cta-section";
import { buildMetadata } from "@/lib/seo";
import { services } from "@/lib/content";

export const metadata: Metadata = buildMetadata({
  title: "Servicios de Urbanización y Lotificación",
  description:
    "Planeación, urbanización, lotificación, comercialización y asociación con propietarios para proyectos inmobiliarios de tierra.",
  path: "/servicios",
});

export default function ServiciosPage() {
  return (
    <>
      <PageHero
        eyebrow="Servicios"
        title="Capacidades para desarrollar tierra de principio a fin"
        description="Desde la planeación inicial hasta la lotificación y comercialización, desarrollamos proyectos con visión estratégica y estructura operativa."
      />

      <section className="py-20 lg:py-28">
        <div className="container-tight space-y-6">
          {services.map((s, i) => (
            <Reveal as="article" index={i % 3} key={s.slug} className="scroll-mt-24">
              <div
                id={s.slug}
                className="grid gap-8 rounded-xl border border-border/70 bg-card p-7 scroll-mt-24 sm:p-9 lg:grid-cols-[0.9fr_1.1fr]"
              >
                <div>
                  <span className="flex size-12 items-center justify-center rounded-md bg-olive/10 text-olive">
                    <s.icon className="size-6" />
                  </span>
                  <h2 className="mt-6 font-display text-2xl text-ink sm:text-3xl">
                    {s.title}
                  </h2>
                  <p className="mt-3 leading-relaxed text-ink/70">{s.what}</p>
                  <div className="mt-6">
                    <Button asChild variant="outline" size="sm">
                      <Link href={s.nextStep.href}>
                        {s.nextStep.label}
                        <ArrowRight className="size-4" />
                      </Link>
                    </Button>
                  </div>
                </div>

                <div className="grid gap-6 sm:grid-cols-2 lg:border-l lg:border-border/70 lg:pl-8">
                  <div>
                    <h3 className="text-xs font-medium uppercase tracking-[0.16em] text-copper">
                      Qué problema resuelve
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-ink/70">
                      {s.solves}
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xs font-medium uppercase tracking-[0.16em] text-copper">
                      Para quién es
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-ink/70">
                      {s.forWho}
                    </p>
                  </div>
                  <div className="sm:col-span-2">
                    <h3 className="text-xs font-medium uppercase tracking-[0.16em] text-copper">
                      Qué incluye
                    </h3>
                    <ul className="mt-3 grid gap-2 sm:grid-cols-2">
                      {s.includes.map((item) => (
                        <li
                          key={item}
                          className="flex items-start gap-2 text-sm text-ink/70"
                        >
                          <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-copper" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <CTASection
        title="¿Tienes un proyecto o un terreno en mente?"
        description="Conversemos sobre cómo estructurarlo. Cada terreno requiere una lectura distinta."
        primaryLabel="Solicitar diagnóstico"
        primaryHref="/terratenientes"
        secondaryLabel="Contactar"
        secondaryHref="/contacto"
      />
    </>
  );
}
