import { Check } from "lucide-react";
import { Reveal } from "@/components/motion/reveal";
import { CornerMarks } from "@/components/corner-marks";

const plans = [
  {
    code: "Esquema A",
    term: "Hasta 5 años",
    price: "US$40/m²",
    highlight: "Mantiene el precio de lista",
    points: [
      "Enganche del 10% al 20%",
      "Precio de lista sin incremento",
      "Mensualidades fijas durante el plazo",
    ],
    featured: true,
  },
  {
    code: "Esquema B",
    term: "Hasta 8 años",
    price: "US$45/m²",
    highlight: "Plazo extendido",
    points: [
      "Enganche del 10% al 20%",
      "Mayor plazo con mensualidad más baja",
      "Mensualidades fijas durante el plazo",
    ],
    featured: false,
  },
];

/** Comparador de esquemas de financiamiento (datos confirmados del brief). */
export function FinancingOptions() {
  return (
    <div className="grid gap-4 lg:grid-cols-2">
      {plans.map((plan, i) => (
        <Reveal key={plan.code} index={i}>
          <article
            className={
              plan.featured
                ? "relative h-full border border-copper/50 bg-card p-8 sm:p-9"
                : "relative h-full border border-stone/30 bg-card p-8 sm:p-9"
            }
          >
            <CornerMarks />
            <div className="flex items-baseline justify-between gap-4">
              <p className="text-[0.65rem] font-medium uppercase tracking-[0.24em] text-copper">
                {plan.code}
              </p>
              {plan.featured && (
                <p className="text-[0.65rem] font-medium uppercase tracking-[0.18em] text-olive">
                  {plan.highlight}
                </p>
              )}
            </div>
            <p className="mt-4 font-display text-3xl text-ink">{plan.term}</p>
            <p className="mt-1 font-display text-xl text-olive">
              {plan.price}
            </p>
            <ul className="mt-6 space-y-2.5 border-t border-stone/20 pt-6">
              {plan.points.map((point) => (
                <li key={point} className="flex items-start gap-2.5 text-sm text-ink/70">
                  <Check className="mt-0.5 size-4 shrink-0 text-copper" />
                  {point}
                </li>
              ))}
            </ul>
          </article>
        </Reveal>
      ))}
      <p className="text-xs leading-relaxed text-ink/50 lg:col-span-2">
        El monto final depende del lote elegido y del esquema de pago. Condiciones
        sujetas a confirmación al momento de la solicitud.
      </p>
    </div>
  );
}
