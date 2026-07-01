"use server";

import { headers } from "next/headers";
import {
  generalLeadSchema,
  landownerSchema,
  projectInterestSchema,
  type FormState,
} from "@/lib/schemas";
import { createServiceRoleClient } from "@/lib/supabase/server";
import { sendLeadNotification } from "@/lib/notify";
import { checkRateLimit } from "@/lib/rate-limit";

function clientKey(prefix: string): string {
  const h = headers();
  const ip =
    h.get("x-forwarded-for")?.split(",")[0]?.trim() ??
    h.get("x-real-ip") ??
    "unknown";
  return `${prefix}:${ip}`;
}

const RATE_LIMIT_MSG =
  "Recibimos varias solicitudes en poco tiempo. Espera un momento antes de volver a intentar.";
const GENERIC_ERROR =
  "No pudimos procesar tu solicitud en este momento. Intenta de nuevo o escríbenos por WhatsApp.";

/**
 * Persiste un registro usando la service role (server-only). Si Supabase no
 * está configurado, devuelve un modo degradado exitoso a nivel UX pero
 * registra un warning para no perder el lead silenciosamente en producción.
 */
async function persist(
  table: string,
  payload: Record<string, unknown>,
): Promise<{ ok: boolean; degraded: boolean }> {
  const supabase = createServiceRoleClient();
  if (!supabase) {
    console.warn(
      `[leads] Supabase no configurado — registro no persistido (${table}). Payload keys: ${Object.keys(payload).join(", ")}`,
    );
    return { ok: true, degraded: true };
  }
  const { error } = await supabase.from(table).insert(payload);
  if (error) {
    console.error(`[leads] Error insertando en ${table}:`, error.message);
    return { ok: false, degraded: false };
  }
  return { ok: true, degraded: false };
}

export async function submitGeneralLead(
  _prev: FormState,
  formData: FormData,
): Promise<FormState> {
  const parsed = generalLeadSchema.safeParse(Object.fromEntries(formData));
  if (!parsed.success) {
    return {
      status: "error",
      message: "Revisa los campos marcados.",
      fieldErrors: parsed.error.flatten().fieldErrors,
    };
  }
  const { website, ...data } = parsed.data;
  if (website) return { status: "success", message: "Gracias por tu mensaje." }; // honeypot
  if (!checkRateLimit(clientKey("general")))
    return { status: "error", message: RATE_LIMIT_MSG };

  const res = await persist("general_leads", { ...data, status: "new" });
  if (!res.ok) return { status: "error", message: GENERIC_ERROR };

  await sendLeadNotification({
    subject: `Nuevo contacto general — ${data.full_name}`,
    rows: data,
  });

  return {
    status: "success",
    message:
      "Gracias. Recibimos tu mensaje. Te contactaremos a la brevedad para dar seguimiento.",
  };
}

export async function submitLandownerRequest(
  _prev: FormState,
  formData: FormData,
): Promise<FormState> {
  const parsed = landownerSchema.safeParse(Object.fromEntries(formData));
  if (!parsed.success) {
    return {
      status: "error",
      message: "Revisa los campos marcados.",
      fieldErrors: parsed.error.flatten().fieldErrors,
    };
  }
  const { website, approximate_hectares, ...rest } = parsed.data;
  if (website) return { status: "success", message: "Gracias." }; // honeypot
  if (!checkRateLimit(clientKey("landowner")))
    return { status: "error", message: RATE_LIMIT_MSG };

  const payload = {
    ...rest,
    approximate_hectares: approximate_hectares
      ? Number(String(approximate_hectares).replace(/[^0-9.]/g, "")) || null
      : null,
    status: "new",
  };

  const res = await persist("landowner_requests", payload);
  if (!res.ok) return { status: "error", message: GENERIC_ERROR };

  await sendLeadNotification({
    subject: `Diagnóstico de terreno — ${rest.full_name}`,
    rows: { ...rest, approximate_hectares },
  });

  return {
    status: "success",
    message:
      "Gracias. Recibimos la información de tu terreno. El equipo revisará los datos para evaluar el tipo de oportunidad y el siguiente paso más adecuado.",
  };
}

export async function submitProjectInterest(
  _prev: FormState,
  formData: FormData,
): Promise<FormState> {
  const raw = Object.fromEntries(formData);
  const parsed = projectInterestSchema.safeParse({
    ...raw,
    wants_tour: raw.wants_tour === "on" || raw.wants_tour === "true",
  });
  if (!parsed.success) {
    return {
      status: "error",
      message: "Revisa los campos marcados.",
      fieldErrors: parsed.error.flatten().fieldErrors,
    };
  }
  const { website, project_slug, ...data } = parsed.data;
  if (website) return { status: "success", message: "Gracias." }; // honeypot
  if (!checkRateLimit(clientKey("project")))
    return { status: "error", message: RATE_LIMIT_MSG };

  const res = await persist("project_interests", { ...data, status: "new" });
  if (!res.ok) return { status: "error", message: GENERIC_ERROR };

  await sendLeadNotification({
    subject: `Interés en ${data.project_name} — ${data.full_name}`,
    rows: { ...data, project_slug },
  });

  return {
    status: "success",
    message:
      "Gracias. Recibimos tu solicitud de información. Te contactaremos para compartir detalles del proyecto, disponibilidad y opciones de financiamiento.",
  };
}
