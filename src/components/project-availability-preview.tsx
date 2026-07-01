import { createServerSupabase } from "@/lib/supabase/server";
import { StatusBadge } from "@/components/status-badge";
import { EmptyState } from "@/components/states";

interface LotRow {
  id: string;
  lot_number: string | null;
  block: string | null;
  area_m2: number | null;
  price_per_m2: number | null;
  status: string;
}

/**
 * Vista previa de disponibilidad de lotes. Lee de la tabla `lots` cuando
 * Supabase está configurado; de lo contrario muestra un placeholder
 * preparado para conectarse a la base de datos.
 */
export async function ProjectAvailabilityPreview({
  projectSlug,
}: {
  projectSlug: string;
}) {
  const supabase = createServerSupabase();

  let lots: LotRow[] | null = null;
  if (supabase) {
    const { data } = await supabase
      .from("projects")
      .select("id, lots(id, lot_number, block, area_m2, price_per_m2, status)")
      .eq("slug", projectSlug)
      .maybeSingle();
    lots = (data?.lots as LotRow[] | undefined) ?? [];
  }

  if (!lots || lots.length === 0) {
    return (
      <div className="rounded-xl border border-dashed border-stone/40 bg-sand/30 p-8">
        <p className="text-xs font-medium uppercase tracking-[0.16em] text-copper">
          Disponibilidad
        </p>
        <p className="mt-3 max-w-xl text-sm leading-relaxed text-ink/70">
          El detalle de lotes disponibles se comparte de forma personalizada al
          solicitar información. La plataforma está preparada para mostrar
          disponibilidad en vivo conectada a la base de datos.
        </p>
        {!supabase && (
          <p className="mt-2 text-xs text-ink/45">
            [PLACEHOLDER: conectar tabla <code>lots</code> en Supabase]
          </p>
        )}
      </div>
    );
  }

  return (
    <div className="overflow-hidden rounded-xl border border-border/70">
      <table className="w-full text-sm">
        <thead className="bg-sand/50 text-left text-xs uppercase tracking-wider text-ink/60">
          <tr>
            <th className="px-4 py-3 font-medium">Lote</th>
            <th className="px-4 py-3 font-medium">Manzana</th>
            <th className="px-4 py-3 font-medium">Superficie</th>
            <th className="px-4 py-3 font-medium">Estado</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-border/70">
          {lots.map((lot) => (
            <tr key={lot.id} className="bg-card">
              <td className="px-4 py-3 font-medium text-ink">{lot.lot_number ?? "—"}</td>
              <td className="px-4 py-3 text-ink/70">{lot.block ?? "—"}</td>
              <td className="px-4 py-3 text-ink/70">
                {lot.area_m2 ? `${lot.area_m2} m²` : "—"}
              </td>
              <td className="px-4 py-3">
                <StatusBadge status={lot.status} kind="lot" />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
