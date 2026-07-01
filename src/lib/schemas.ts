import { z } from "zod";

/** Campo honeypot: debe llegar vacío. Anti-spam básico. */
const honeypot = z.string().max(0, "spam").optional().or(z.literal(""));

const phone = z
  .string()
  .trim()
  .min(7, "Teléfono inválido")
  .max(25, "Teléfono inválido")
  .regex(/^[0-9+()\-\s]+$/, "Teléfono inválido");

const email = z.string().trim().email("Correo inválido").max(160);
const name = z.string().trim().min(2, "Ingresa tu nombre completo").max(120);

/** Formulario general de contacto → general_leads */
export const generalLeadSchema = z.object({
  full_name: name,
  phone,
  email,
  lead_type: z.enum(
    ["tengo_tierra", "comprar_lote", "desarrollar_proyecto", "informacion_general"],
    { errorMap: () => ({ message: "Selecciona un motivo" }) },
  ),
  message: z.string().trim().max(2000).optional().or(z.literal("")),
  source: z.string().max(120).optional(),
  website: honeypot, // honeypot
});
export type GeneralLeadInput = z.infer<typeof generalLeadSchema>;

/** Formulario de propietarios de tierra → landowner_requests */
export const landownerSchema = z.object({
  full_name: name,
  phone,
  email,
  land_location: z.string().trim().min(3, "Indica la ubicación").max(200),
  approximate_hectares: z
    .string()
    .trim()
    .max(40)
    .optional()
    .or(z.literal("")),
  legal_status: z
    .enum([
      "escriturado",
      "ejidal",
      "posesion",
      "en_proceso",
      "otro",
      "no_seguro",
    ])
    .optional(),
  nearby_services: z.string().trim().max(300).optional().or(z.literal("")),
  objective: z.string().trim().max(600).optional().or(z.literal("")),
  collaboration_type: z
    .enum([
      "asociacion",
      "desarrollo_operacion",
      "urbanizacion_lotificacion",
      "comercializacion",
      "construccion",
      "por_definir",
    ])
    .optional(),
  message: z.string().trim().max(2000).optional().or(z.literal("")),
  website: honeypot,
});
export type LandownerInput = z.infer<typeof landownerSchema>;

/** Formulario de interés en proyecto → project_interests */
export const projectInterestSchema = z.object({
  project_name: z.string().trim().min(2).max(120),
  project_slug: z.string().trim().max(120).optional(),
  full_name: name,
  phone,
  email,
  approximate_budget: z.string().trim().max(60).optional().or(z.literal("")),
  available_down_payment: z.string().trim().max(60).optional().or(z.literal("")),
  intended_use: z
    .enum(["inversion", "descanso", "desarrollo", "mixto", "otro"])
    .optional(),
  desired_term: z
    .enum(["contado", "hasta_5_anios", "hasta_8_anios", "por_definir"])
    .optional(),
  wants_tour: z.boolean().optional().default(false),
  message: z.string().trim().max(2000).optional().or(z.literal("")),
  website: honeypot,
});
export type ProjectInterestInput = z.infer<typeof projectInterestSchema>;

/** Resultado estándar devuelto por las server actions de formularios. */
export type FormState = {
  status: "idle" | "success" | "error";
  message?: string;
  fieldErrors?: Record<string, string[]>;
};
