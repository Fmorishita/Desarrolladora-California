import { Reveal } from "@/components/motion/reveal";

/**
 * Prueba de absorción comercial como pieza destacada.
 * Cifras confirmadas del brief: 21 de 91 en 18 meses, ≈70 disponibles.
 */
export function AbsorptionBand() {
  return (
    <Reveal>
      <div className="grain relative overflow-hidden bg-olive p-8 text-bone sm:p-10">
        <div className="relative z-[2] flex flex-col items-start gap-8 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex items-baseline gap-4">
            <p className="font-display text-6xl leading-none tracking-tightest sm:text-7xl">
              21<span className="text-copper">/</span>91
            </p>
            <p className="max-w-[12rem] text-sm leading-snug text-bone/75">
              terrenos comercializados en 18 meses
            </p>
          </div>
          <div className="max-w-md">
            <p className="text-[0.65rem] font-medium uppercase tracking-[0.24em] text-copper">
              Absorción comprobada
            </p>
            <p className="mt-2 text-sm leading-relaxed text-bone/80">
              La demanda del proyecto no es una promesa: es un ritmo de venta
              medido. Quedan aproximadamente 70 terrenos disponibles; la
              disponibilidad puntual se confirma al solicitar información.
            </p>
          </div>
        </div>
      </div>
    </Reveal>
  );
}
