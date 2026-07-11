"use server";

import { headers } from "next/headers";
import { interestSchema, type FormResult } from "@/lib/schema";
import { serviceClient } from "@/lib/supabase";

/* Rate limit best-effort en memoria (por instancia). */
const hits = new Map<string, { count: number; resetAt: number }>();
function allow(key: string): boolean {
  const now = Date.now();
  const e = hits.get(key);
  if (!e || e.resetAt < now) {
    hits.set(key, { count: 1, resetAt: now + 60_000 });
    return true;
  }
  if (e.count >= 5) return false;
  e.count += 1;
  return true;
}

export async function submitInterest(formData: FormData): Promise<FormResult> {
  const raw = Object.fromEntries(formData);
  const parsed = interestSchema.safeParse({
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
  const { website, ...data } = parsed.data;
  if (website) return { status: "success", message: "Gracias." }; // honeypot

  const ip =
    headers().get("x-forwarded-for")?.split(",")[0]?.trim() ?? "unknown";
  if (!allow(`mirador:${ip}`)) {
    return {
      status: "error",
      message:
        "Recibimos varias solicitudes en poco tiempo. Espera un momento antes de volver a intentar.",
    };
  }

  const supabase = serviceClient();
  if (!supabase) {
    console.warn("[mirador] Supabase no configurado — lead no persistido.");
  } else {
    const { error } = await supabase.from("project_interests").insert({
      ...data,
      project_name: "Mirador del Valle",
      status: "new",
    });
    if (error) {
      console.error("[mirador] Error insertando lead:", error.message);
      return {
        status: "error",
        message:
          "No pudimos procesar tu solicitud. Intenta de nuevo o escríbenos por WhatsApp.",
      };
    }
  }

  return {
    status: "success",
    message:
      "Gracias. Recibimos tu solicitud de información. Te contactaremos para compartir detalles del proyecto, disponibilidad y opciones de financiamiento.",
  };
}
