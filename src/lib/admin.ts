import "server-only";
import { createServerSupabase } from "@/lib/supabase/server";

export interface AdminGate {
  state: "ok" | "not_configured" | "unauthenticated" | "forbidden";
  email?: string;
}

/**
 * Verifica acceso al panel admin.
 * - `not_configured`: falta Supabase o ADMIN_ALLOWED_EMAILS → mostrar guía de setup.
 * - `unauthenticated`: no hay sesión de Supabase Auth.
 * - `forbidden`: sesión válida pero email no está en la allowlist.
 * - `ok`: acceso permitido.
 */
export async function checkAdminAccess(): Promise<AdminGate> {
  const supabase = createServerSupabase();
  const allowlist = (process.env.ADMIN_ALLOWED_EMAILS ?? "")
    .split(",")
    .map((e) => e.trim().toLowerCase())
    .filter(Boolean);

  if (!supabase || allowlist.length === 0) {
    return { state: "not_configured" };
  }

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user?.email) return { state: "unauthenticated" };
  if (!allowlist.includes(user.email.toLowerCase())) {
    return { state: "forbidden", email: user.email };
  }
  return { state: "ok", email: user.email };
}
