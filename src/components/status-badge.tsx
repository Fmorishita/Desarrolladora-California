import { Badge } from "@/components/ui/badge";

const LEAD_STATUS: Record<string, { label: string; variant: "default" | "neutral" | "copper" | "success" | "warning" | "danger" }> = {
  new: { label: "Nuevo", variant: "copper" },
  contacted: { label: "Contactado", variant: "warning" },
  qualified: { label: "Calificado", variant: "default" },
  won: { label: "Ganado", variant: "success" },
  lost: { label: "Perdido", variant: "neutral" },
};

const LOT_STATUS: Record<string, { label: string; variant: "default" | "neutral" | "success" | "warning" }> = {
  available: { label: "Disponible", variant: "success" },
  reserved: { label: "Apartado", variant: "warning" },
  sold: { label: "Vendido", variant: "neutral" },
};

export function StatusBadge({
  status,
  kind = "lead",
}: {
  status: string;
  kind?: "lead" | "lot";
}) {
  const map = kind === "lot" ? LOT_STATUS : LEAD_STATUS;
  const entry = map[status] ?? { label: status, variant: "neutral" as const };
  return <Badge variant={entry.variant}>{entry.label}</Badge>;
}
