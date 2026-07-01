import { KeyRound, Database, ShieldAlert } from "lucide-react";
import type { AdminGate } from "@/lib/admin";

/**
 * Estado del panel cuando el acceso no está disponible. Documenta cómo
 * activar el panel con Supabase Auth sin exponer datos privados.
 */
export function AdminSetupNotice({ gate }: { gate: AdminGate }) {
  if (gate.state === "forbidden") {
    return (
      <Wrapper icon={<ShieldAlert className="size-6 text-destructive" />} title="Acceso no autorizado">
        <p>
          La cuenta <strong>{gate.email}</strong> no está en la lista de
          administradores. Agrega el correo a{" "}
          <code>ADMIN_ALLOWED_EMAILS</code> para conceder acceso.
        </p>
      </Wrapper>
    );
  }

  if (gate.state === "unauthenticated") {
    return (
      <Wrapper icon={<KeyRound className="size-6 text-copper" />} title="Inicia sesión">
        <p>
          Necesitas iniciar sesión con Supabase Auth para acceder al panel.
          Esta pantalla está preparada para conectarse con el flujo de
          autenticación (magic link o email/contraseña).
        </p>
        <p className="mt-2 text-ink/55">
          Pendiente: implementar página de login <code>/admin/login</code> con
          Supabase Auth. Ver <code>docs/DATABASE_SCHEMA.md</code>.
        </p>
      </Wrapper>
    );
  }

  return (
    <Wrapper icon={<Database className="size-6 text-olive" />} title="Panel pendiente de configuración">
      <p>El panel administrativo está preparado pero requiere configuración:</p>
      <ol className="mt-3 list-decimal space-y-1.5 pl-5 text-ink/70">
        <li>
          Configurar <code>NEXT_PUBLIC_SUPABASE_URL</code>,{" "}
          <code>NEXT_PUBLIC_SUPABASE_ANON_KEY</code> y{" "}
          <code>SUPABASE_SERVICE_ROLE_KEY</code>.
        </li>
        <li>Aplicar las migraciones de <code>supabase/migrations</code>.</li>
        <li>
          Definir <code>ADMIN_ALLOWED_EMAILS</code> con los correos autorizados.
        </li>
        <li>Activar Supabase Auth y crear el usuario administrador.</li>
      </ol>
      <p className="mt-3 text-ink/55">
        Mientras tanto, el sitio público funciona con normalidad y ningún dato
        privado queda expuesto.
      </p>
    </Wrapper>
  );
}

function Wrapper({
  icon,
  title,
  children,
}: {
  icon: React.ReactNode;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="mx-auto max-w-2xl rounded-xl border border-border/70 bg-card p-8 shadow-sm">
      <div className="flex items-center gap-3">
        <span className="flex size-11 items-center justify-center rounded-md bg-sand/60">
          {icon}
        </span>
        <h2 className="font-display text-xl text-ink">{title}</h2>
      </div>
      <div className="mt-5 text-sm leading-relaxed text-ink/75">{children}</div>
    </div>
  );
}
