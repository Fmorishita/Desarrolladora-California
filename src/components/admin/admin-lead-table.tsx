import { StatusBadge } from "@/components/status-badge";
import { EmptyState } from "@/components/states";

export interface AdminLeadRow {
  id: string;
  full_name: string;
  phone: string | null;
  email: string | null;
  status: string;
  created_at: string;
  extra?: { label: string; value: string }[];
}

/**
 * Tabla de leads para el panel admin. Solo lectura + estado.
 * La edición de estado y notas se conecta en una fase posterior
 * (server actions protegidas por sesión admin).
 */
export function AdminLeadTable({
  rows,
  emptyLabel = "Sin registros por ahora.",
}: {
  rows: AdminLeadRow[];
  emptyLabel?: string;
}) {
  if (rows.length === 0) {
    return <EmptyState title="Sin registros" description={emptyLabel} />;
  }

  return (
    <div className="overflow-x-auto rounded-lg border border-border/70">
      <table className="w-full min-w-[640px] text-sm">
        <thead className="bg-sand/50 text-left text-xs uppercase tracking-wider text-ink/60">
          <tr>
            <th className="px-4 py-3 font-medium">Nombre</th>
            <th className="px-4 py-3 font-medium">Contacto</th>
            <th className="px-4 py-3 font-medium">Detalle</th>
            <th className="px-4 py-3 font-medium">Estado</th>
            <th className="px-4 py-3 font-medium">Fecha</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-border/70">
          {rows.map((row) => (
            <tr key={row.id} className="bg-card align-top">
              <td className="px-4 py-3 font-medium text-ink">{row.full_name}</td>
              <td className="px-4 py-3 text-ink/70">
                <div>{row.phone}</div>
                <div className="text-ink/50">{row.email}</div>
              </td>
              <td className="px-4 py-3 text-ink/70">
                {row.extra?.length ? (
                  <ul className="space-y-0.5">
                    {row.extra.map((e) => (
                      <li key={e.label}>
                        <span className="text-ink/45">{e.label}:</span> {e.value}
                      </li>
                    ))}
                  </ul>
                ) : (
                  "—"
                )}
              </td>
              <td className="px-4 py-3">
                <StatusBadge status={row.status} />
              </td>
              <td className="px-4 py-3 text-ink/60">
                {new Date(row.created_at).toLocaleDateString("es-MX")}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
