import { Reveal } from "@/components/motion/reveal";

export interface ProcessStep {
  title: string;
  description: string;
}

export function ProcessTimeline({ steps }: { steps: ProcessStep[] }) {
  return (
    <ol className="relative grid gap-8 md:grid-cols-2 lg:grid-cols-4 lg:gap-6">
      {steps.map((step, i) => (
        <Reveal as="li" index={i} key={i} className="relative">
          <div className="flex items-center gap-4">
            <span className="flex size-11 shrink-0 items-center justify-center rounded-full border border-copper/40 font-display text-lg text-copper">
              {String(i + 1).padStart(2, "0")}
            </span>
            <span className="hidden h-px flex-1 bg-gradient-to-r from-copper/40 to-transparent lg:block" />
          </div>
          <h3 className="mt-5 font-display text-xl text-ink">{step.title}</h3>
          <p className="mt-2.5 text-sm leading-relaxed text-ink/65">
            {step.description}
          </p>
        </Reveal>
      ))}
    </ol>
  );
}
