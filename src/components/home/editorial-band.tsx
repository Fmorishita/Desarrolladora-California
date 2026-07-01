import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/motion/reveal";

/**
 * Banda editorial de aire: imagen a sangre completa con declaración serif.
 * Imagen placeholder — reemplazar por fotografía real del proyecto.
 */
export function EditorialBand() {
  return (
    <section className="relative min-h-[64vh] overflow-hidden bg-carbon">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=1920&q=70"
        alt="Paisaje de valle con relieve, representativo del entorno de los proyectos"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-carbon/85 via-carbon/55 to-carbon/25" />
      <div className="container-tight relative flex min-h-[64vh] items-center py-20">
        <div className="max-w-xl">
          <Reveal>
            <span className="eyebrow">
              <span className="h-px w-6 bg-copper" />
              Criterio
            </span>
          </Reveal>
          <Reveal index={1}>
            <p className="mt-6 font-display text-3xl leading-[1.2] text-bone sm:text-4xl lg:text-[2.9rem]">
              Cada terreno tiene una{" "}
              <span className="accent-italic text-copper">lectura distinta</span>.
              Nuestro trabajo es encontrarla y convertirla en proyecto.
            </p>
          </Reveal>
          <Reveal index={2}>
            <Link
              href="/nosotros"
              className="link-underline mt-8 inline-flex items-center gap-2 text-sm font-medium text-bone/85 hover:text-bone"
            >
              Conocer nuestro enfoque
              <ArrowRight className="size-4 text-copper" />
            </Link>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
