import { SectionHeading } from "@/components/section-heading";
import { CornerMarks } from "@/components/corner-marks";
import { Reveal } from "@/components/motion/reveal";
import { testimonials } from "@/lib/testimonials";

/**
 * Testimonios en estilo editorial "plan maestro": cita serif, regla de cobre
 * y marcas de registro. Los ilustrativos muestran un sello discreto hasta
 * ser reemplazados por testimonios reales (ver src/lib/testimonials.ts).
 */
export function TestimonialsSection({ number }: { number?: string }) {
  return (
    <section className="bg-sand/40 py-20 lg:py-28">
      <div className="container-tight">
        <SectionHeading
          number={number}
          eyebrow="Voces"
          title="Lo que valoran quienes trabajan con nosotros"
          description="Tres perfiles, una misma constante: claridad y estructura en cada etapa."
        />
        <div className="mt-14 grid gap-4 lg:grid-cols-3">
          {testimonials.map((t, i) => (
            <Reveal as="article" index={i} key={i} className="h-full">
              <figure className="relative flex h-full flex-col border border-stone/30 bg-card p-8">
                <CornerMarks />
                <span
                  aria-hidden
                  className="font-display text-5xl leading-none text-copper/70"
                >
                  &ldquo;
                </span>
                <blockquote className="mt-3 flex-1">
                  <p className="font-display text-lg leading-relaxed text-ink/85">
                    {t.quote}
                  </p>
                </blockquote>
                <figcaption className="mt-7 border-t border-copper/30 pt-4">
                  <p className="text-sm font-medium text-ink">{t.name}</p>
                  <p className="mt-0.5 text-xs uppercase tracking-[0.16em] text-copper">
                    {t.role}
                  </p>
                  {t.provisional && (
                    <p className="mt-3 text-[0.6rem] uppercase tracking-[0.14em] text-ink/40">
                      Testimonio ilustrativo — se reemplazará por uno real
                    </p>
                  )}
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
