import { Reveal } from "@/components/reveal";
import { testimonials } from "@/lib/testimonials";

export function Testimonials() {
  return (
    <div className="grid gap-4 lg:grid-cols-3">
      {testimonials.map((t, i) => (
        <Reveal key={i} index={i}>
          <figure className="flex h-full flex-col rounded-2xl border border-cocoa/20 bg-white/60 p-7">
            <span aria-hidden className="font-display text-5xl leading-none text-gold">
              &ldquo;
            </span>
            <blockquote className="mt-3 flex-1">
              <p className="font-display text-lg leading-relaxed text-dusk/90">{t.quote}</p>
            </blockquote>
            <figcaption className="mt-6 border-t border-gold/40 pt-4">
              <p className="text-sm font-semibold text-dusk">{t.name}</p>
              <p className="mt-0.5 text-xs uppercase tracking-[0.14em] text-clay">{t.role}</p>
              {t.provisional && (
                <p className="mt-3 text-[0.6rem] uppercase tracking-[0.14em] text-cocoa/50">
                  Testimonio ilustrativo — se reemplazará por uno real
                </p>
              )}
            </figcaption>
          </figure>
        </Reveal>
      ))}
    </div>
  );
}
