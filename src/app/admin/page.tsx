import type { Metadata } from "next";
import { Users, Landmark, Map, Building2 } from "lucide-react";
import { checkAdminAccess } from "@/lib/admin";
import { createServiceRoleClient } from "@/lib/supabase/server";
import { AdminLeadTable, type AdminLeadRow } from "@/components/admin/admin-lead-table";
import { AdminSetupNotice } from "@/components/admin/admin-setup-notice";

export const metadata: Metadata = {
  title: "Panel administrativo",
  robots: { index: false, follow: false },
};

export const dynamic = "force-dynamic";

async function fetchLeads() {
  const supabase = createServiceRoleClient();
  if (!supabase) return null;

  const [general, landowners, interests] = await Promise.all([
    supabase.from("general_leads").select("*").order("created_at", { ascending: false }).limit(50),
    supabase.from("landowner_requests").select("*").order("created_at", { ascending: false }).limit(50),
    supabase.from("project_interests").select("*").order("created_at", { ascending: false }).limit(50),
  ]);

  return {
    general: (general.data ?? []) as Record<string, unknown>[],
    landowners: (landowners.data ?? []) as Record<string, unknown>[],
    interests: (interests.data ?? []) as Record<string, unknown>[],
  };
}

export default async function AdminPage() {
  const gate = await checkAdminAccess();

  if (gate.state !== "ok") {
    return (
      <div className="container-tight py-20 lg:py-28">
        <p className="eyebrow mb-6">
          <span className="h-px w-6 bg-copper" />
          Panel administrativo
        </p>
        <AdminSetupNotice gate={gate} />
      </div>
    );
  }

  const data = await fetchLeads();

  const landownerRows: AdminLeadRow[] = (data?.landowners ?? []).map((r) => ({
    id: String(r.id),
    full_name: String(r.full_name ?? "—"),
    phone: (r.phone as string) ?? null,
    email: (r.email as string) ?? null,
    status: String(r.status ?? "new"),
    created_at: String(r.created_at),
    extra: [
      { label: "Ubicación", value: String(r.land_location ?? "—") },
      { label: "Hectáreas", value: String(r.approximate_hectares ?? "—") },
    ],
  }));

  const interestRows: AdminLeadRow[] = (data?.interests ?? []).map((r) => ({
    id: String(r.id),
    full_name: String(r.full_name ?? "—"),
    phone: (r.phone as string) ?? null,
    email: (r.email as string) ?? null,
    status: String(r.status ?? "new"),
    created_at: String(r.created_at),
    extra: [
      { label: "Proyecto", value: String(r.project_name ?? "—") },
      { label: "Recorrido", value: r.wants_tour ? "Sí" : "No" },
    ],
  }));

  const generalRows: AdminLeadRow[] = (data?.general ?? []).map((r) => ({
    id: String(r.id),
    full_name: String(r.full_name ?? "—"),
    phone: (r.phone as string) ?? null,
    email: (r.email as string) ?? null,
    status: String(r.status ?? "new"),
    created_at: String(r.created_at),
    extra: [{ label: "Motivo", value: String(r.lead_type ?? "—") }],
  }));

  const stats = [
    { icon: Landmark, label: "Propietarios", value: landownerRows.length },
    { icon: Map, label: "Interés proyectos", value: interestRows.length },
    { icon: Users, label: "Contactos generales", value: generalRows.length },
    { icon: Building2, label: "Proyectos", value: 1 },
  ];

  return (
    <div className="container-tight py-16 lg:py-20">
      <div className="flex items-center justify-between gap-4">
        <div>
          <p className="eyebrow">
            <span className="h-px w-6 bg-copper" />
            Panel administrativo
          </p>
          <h1 className="mt-3 font-display text-3xl text-ink">Leads y proyectos</h1>
        </div>
        <p className="text-sm text-ink/55">{gate.email}</p>
      </div>

      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((s) => (
          <div key={s.label} className="rounded-lg border border-border/70 bg-card p-5">
            <s.icon className="size-5 text-olive" />
            <p className="mt-4 font-display text-3xl text-ink">{s.value}</p>
            <p className="text-xs uppercase tracking-wider text-ink/55">{s.label}</p>
          </div>
        ))}
      </div>

      <div className="mt-14 space-y-12">
        <section>
          <h2 className="mb-4 font-display text-xl text-ink">
            Solicitudes de propietarios
          </h2>
          <AdminLeadTable rows={landownerRows} />
        </section>
        <section>
          <h2 className="mb-4 font-display text-xl text-ink">Interés en proyectos</h2>
          <AdminLeadTable rows={interestRows} />
        </section>
        <section>
          <h2 className="mb-4 font-display text-xl text-ink">Contactos generales</h2>
          <AdminLeadTable rows={generalRows} />
        </section>
      </div>

      <p className="mt-12 rounded-lg border border-dashed border-stone/40 bg-sand/30 p-5 text-sm text-ink/60">
        Pendiente (siguiente fase): edición de estado, notas internas y carga de
        disponibilidad de lotes mediante server actions protegidas por sesión
        admin. Ver <code>docs/TASKS.md</code>.
      </p>
    </div>
  );
}
