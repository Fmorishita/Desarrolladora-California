import { z } from "zod";

/** Formulario de interés → tabla project_interests (Supabase compartido). */
export const interestSchema = z.object({
  full_name: z.string().trim().min(2, "Ingresa tu nombre completo").max(120),
  phone: z
    .string()
    .trim()
    .min(7, "Teléfono inválido")
    .max(25)
    .regex(/^[0-9+()\-\s]+$/, "Teléfono inválido"),
  email: z.string().trim().email("Correo inválido").max(160),
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
  website: z.string().max(0, "spam").optional().or(z.literal("")), // honeypot
});

export type InterestInput = z.infer<typeof interestSchema>;

export type FormResult = {
  status: "success" | "error";
  message: string;
  fieldErrors?: Record<string, string[]>;
};
