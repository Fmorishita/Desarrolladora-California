import { CornerMarks } from "@/components/corner-marks";
import { Reveal } from "@/components/motion/reveal";

export interface TechSheetRow {
  label: string;
  value: string;
}

/**
 * Ficha técnica con estética de hoja de plano: filas con guías punteadas
 * y marcas de registro. Usar solo con datos confirmados.
 */
export function TechSheet({
  rows,
  sheetCode,
  title = "Ficha técnica",
}: {
  rows: TechSheetRow[];
  sheetCode?: string;
  title?: string;
}) {
  return (
    <Reveal>
      <div className="relative border border-stone/35 bg-card p-8 sm:p-10">
        <CornerMarks />
        <div className="flex items-baseline justify-between gap-4 border-b border-stone/25 pb-4">
          <h3 className="font-display text-2xl text-ink">{title}</h3>
          {sheetCode && (
            <span className="text-[0.65rem] font-medium uppercase tracking-[0.24em] text-copper">
              {sheetCode}
            </span>
          )}
        </div>
        <dl className="mt-6 space-y-3.5">
          {rows.map((row) => (
            <div key={row.label} className="flex items-baseline gap-3 text-sm">
              <dt className="shrink-0 text-ink/55">{row.label}</dt>
              <span
                aria-hidden
                className="flex-1 -translate-y-1 border-b border-dotted border-stone/45"
              />
              <dd className="shrink-0 text-right font-medium text-ink">
                {row.value}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </Reveal>
  );
}
