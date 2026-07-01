import { services } from "@/lib/content";

/**
 * Franja editorial de disciplinas con desplazamiento lento.
 * Con prefers-reduced-motion la animación se detiene y queda legible.
 */
export function DisciplinesMarquee() {
  const items = services.map((s) => s.title);

  const row = (ariaHidden: boolean) => (
    <div
      aria-hidden={ariaHidden || undefined}
      className="flex shrink-0 items-center"
    >
      {items.map((item) => (
        <span key={item} className="flex items-center">
          <span className="whitespace-nowrap px-8 font-display text-lg text-ink/70 sm:text-xl">
            {item}
          </span>
          <span aria-hidden className="text-copper">
            ·
          </span>
        </span>
      ))}
    </div>
  );

  return (
    <section
      aria-label="Disciplinas de la desarrolladora"
      className="overflow-hidden border-y border-border/70 bg-bone py-5"
    >
      <div className="flex w-max animate-marquee">
        {row(false)}
        {row(true)}
      </div>
    </section>
  );
}
