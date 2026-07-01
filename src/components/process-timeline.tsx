import { Reveal } from "@/components/motion/reveal";

export interface ProcessStep {
  title: string;
  description: string;
}

/** Timeline con estética de plano: placas cuadradas numeradas y conector punteado. */
export function ProcessTimeline({
  steps,
  phaseLabel = "Fase",
}: {
  steps: ProcessStep[];
  phaseLabel?: string;
}) {
  return (
    <ol className="relative grid gap-10 md:grid-cols-2 lg:grid-cols-4 lg:gap-6">
      {steps.map((step, i) => (
        <Reveal as="li" index={i} key={i} className="relative">
          <div className="flex items-center gap-4">
            <span className="relative flex size-12 shrink-0 items-center justify-center border border-copper/45 font-display text-lg text-copper">
              <svg
                viewBox="0 0 8 8"
                aria-hidden
                className="absolute -left-1 -top-1 size-2 text-copper/70"
              >
                <path d="M4 0 V8 M0 4 H8" stroke="currentColor" strokeWidth="1" />
              </svg>
              {String(i + 1).padStart(2, "0")}
            </span>
            {i < steps.length - 1 && (
              <span
                aria-hidden
                className="hidden flex-1 border-t border-dashed border-copper/40 lg:block"
              />
            )}
          </div>
          <p className="mt-5 text-[0.65rem] font-medium uppercase tracking-[0.22em] text-copper/80">
            {phaseLabel} {String(i + 1).padStart(2, "0")}
          </p>
          <h3 className="mt-1.5 font-display text-xl text-ink">{step.title}</h3>
          <p className="mt-2.5 text-sm leading-relaxed text-ink/65">
            {step.description}
          </p>
        </Reveal>
      ))}
    </ol>
  );
}
