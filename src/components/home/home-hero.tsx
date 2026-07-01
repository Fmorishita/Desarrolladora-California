import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/motion/reveal";
import { TopographicBackground } from "@/components/topographic-background";

export function HomeHero() {
  return (
    <section className="relative overflow-hidden bg-carbon text-bone">
      <TopographicBackground variant="dark" />
      {/* Imagen de fondo sutil */}
      <div className="absolute inset-0">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=1920&q=60"
          alt=""
          aria-hidden
          className="h-full w-full object-cover opacity-[0.18]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-carbon/80 via-carbon/85 to-carbon" />
      </div>

      <div className="container-tight relative flex min-h-[calc(100dvh-5rem)] flex-col justify-center py-24">
        <div className="max-w-3xl">
          <Reveal>
            <span className="eyebrow">
              <span className="h-px w-6 bg-copper" />
              Desarrollo de tierra · Urbanización · Lotificación
            </span>
          </Reveal>
          <Reveal index={1}>
            <h1 className="mt-6 text-balance text-4xl leading-[1.05] sm:text-6xl lg:text-[4.25rem]">
              Transformamos tierra en proyectos con{" "}
              <span className="text-copper">valor patrimonial</span>.
            </h1>
          </Reveal>
          <Reveal index={2}>
            <p className="mt-7 max-w-xl text-lg leading-relaxed text-bone/75">
              Evaluamos el potencial de la tierra, estructuramos proyectos viables
              y acompañamos su desarrollo hasta convertirlos en activos
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
      </div>
    </section>
  );
}
