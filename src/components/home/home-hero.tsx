import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/motion/reveal";
import { TopographicBackground } from "@/components/topographic-background";
import { CornerMarks } from "@/components/corner-marks";

const heroMeta = [
  { label: "Enfoque", value: "Tierra · Urbanización · Lotificación" },
  { label: "Región", value: "Baja California, México" },
  { label: "Referencia", value: "32°N · 116°O" },
];

export function HomeHero() {
  return (
    <section className="grain relative overflow-hidden bg-carbon text-bone">
      <TopographicBackground variant="dark" />
      {/* Imagen de fondo sutil */}
      <div className="absolute inset-0">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=1920&q=60"
          alt=""
          aria-hidden
          className="h-full w-full object-cover opacity-[0.16]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-carbon/80 via-carbon/85 to-carbon" />
      </div>
      <CornerMarks tone="dark" className="z-[2] hidden lg:block" />

      <div className="container-tight relative z-[2] flex min-h-[calc(100dvh-5rem)] flex-col justify-center py-20">
        <div className="grid items-end gap-12 lg:grid-cols-[1.5fr_1fr]">
          <div>
            <Reveal>
              <span className="eyebrow">
                <span className="h-px w-6 bg-copper" />
                Desarrollo de tierra · Urbanización · Lotificación
              </span>
            </Reveal>
            <Reveal index={1}>
              <h1 className="mt-6 text-balance text-[2.7rem] leading-[1.02] sm:text-6xl lg:text-[4.6rem]">
                Transformamos tierra en proyectos con{" "}
                <span className="accent-italic text-copper">
                  valor patrimonial
                </span>
                .
              </h1>
            </Reveal>
            <Reveal index={2}>
              <p className="mt-7 max-w-xl text-lg leading-relaxed text-bone/75">
                Evaluamos el potencial de la tierra, estructuramos proyectos
                viables y acompañamos su desarrollo hasta convertirlos en activos
                urbanizados y comercializables.
              </p>
            </Reveal>
            <Reveal index={3}>
              <div className="mt-10 flex flex-col gap-3 sm:flex-row">
                <Button asChild variant="copper" size="lg">
                  <Link href="/terratenientes">
                    Tengo tierra por desarrollar
                    <ArrowRight className="size-4" />
                  </Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  className="border border-bone/25 bg-transparent text-bone hover:bg-bone/10"
                >
                  <Link href="/proyectos">Conocer proyectos</Link>
                </Button>
              </div>
            </Reveal>
          </div>

          {/* Leyenda de plano: proyecto activo */}
          <Reveal index={4}>
            <Link
              href="/proyectos/mirador-del-valle"
              className="group relative block border border-bone/20 bg-bone/[0.04] p-6 backdrop-blur-sm transition-colors hover:border-copper/50"
            >
              <CornerMarks tone="dark" />
              <p className="text-[0.65rem] font-medium uppercase tracking-[0.24em] text-copper">
                Proyecto activo
              </p>
              <p className="mt-3 flex items-start justify-between gap-3 font-display text-2xl text-bone">
                Mirador del Valle
                <ArrowUpRight className="mt-1 size-5 shrink-0 text-copper transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </p>
              <dl className="mt-4 space-y-1.5 text-sm text-bone/65">
                <div className="flex justify-between gap-4">
                  <dt>Ubicación</dt>
                  <dd className="text-right text-bone/85">
                    Cerca de Valle de Guadalupe
                  </dd>
                </div>
                <div className="flex justify-between gap-4">
                  <dt>Precio</dt>
                  <dd className="text-right text-bone/85">desde US$40/m²</dd>
                </div>
                <div className="flex justify-between gap-4">
                  <dt>Terrenos</dt>
                  <dd className="text-right text-bone/85">91 · ≈70 disponibles</dd>
                </div>
              </dl>
            </Link>
          </Reveal>
        </div>

        {/* Franja inferior de referencia */}
        <Reveal index={5}>
          <div className="mt-16 grid gap-6 border-t border-bone/12 pt-6 sm:grid-cols-3">
            {heroMeta.map((m) => (
              <div key={m.label}>
                <p className="text-[0.62rem] font-medium uppercase tracking-[0.24em] text-copper/80">
                  {m.label}
                </p>
                <p className="mt-1 text-sm text-bone/70">{m.value}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
