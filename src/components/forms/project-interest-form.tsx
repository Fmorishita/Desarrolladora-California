"use client";

import * as React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2 } from "lucide-react";
import { projectInterestSchema, type ProjectInterestInput } from "@/lib/schemas";
import { submitProjectInterest } from "@/app/actions/leads";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Field, Honeypot, FormAlert } from "@/components/forms/form-parts";
import { toFormData } from "@/lib/to-form-data";

const USE = [
  { value: "inversion", label: "Inversión patrimonial" },
  { value: "descanso", label: "Casa de descanso" },
  { value: "desarrollo", label: "Desarrollo futuro" },
  { value: "mixto", label: "Mixto" },
  { value: "otro", label: "Otro" },
];

const TERM = [
  { value: "contado", label: "Contado" },
  { value: "hasta_5_anios", label: "Hasta 5 años (US$40/m²)" },
  { value: "hasta_8_anios", label: "Hasta 8 años (US$45/m²)" },
  { value: "por_definir", label: "Por definir" },
];

export function ProjectInterestForm({
  projectName,
  projectSlug,
}: {
  projectName: string;
  projectSlug: string;
}) {
  const [result, setResult] = React.useState<{ status: "success" | "error"; message: string } | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ProjectInterestInput>({
    resolver: zodResolver(projectInterestSchema),
    defaultValues: {
      project_name: projectName,
      project_slug: projectSlug,
      wants_tour: false,
    },
  });

  async function onSubmit(values: ProjectInterestInput) {
    const res = await submitProjectInterest({ status: "idle" }, toFormData(values));
    setResult({ status: res.status === "success" ? "success" : "error", message: res.message ?? "" });
    if (res.status === "success") reset();
  }

  if (result?.status === "success") {
    return <FormAlert status="success" message={result.message} />;
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="relative space-y-5">
      <Honeypot register={register} />
      <input type="hidden" {...register("project_name")} />
      <input type="hidden" {...register("project_slug")} />
      {result?.status === "error" && <FormAlert status="error" message={result.message} />}

      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Nombre completo" htmlFor="full_name" required error={errors.full_name?.message}>
          <Input id="full_name" autoComplete="name" {...register("full_name")} />
        </Field>
        <Field label="Teléfono" htmlFor="phone" required error={errors.phone?.message}>
          <Input id="phone" inputMode="tel" autoComplete="tel" {...register("phone")} />
        </Field>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Correo" htmlFor="email" required error={errors.email?.message}>
          <Input id="email" type="email" autoComplete="email" {...register("email")} />
        </Field>
        <Field label="Uso previsto" htmlFor="intended_use" error={errors.intended_use?.message}>
          <Select id="intended_use" defaultValue="" {...register("intended_use")}>
            <option value="" disabled>
              Selecciona una opción
            </option>
            {USE.map((o) => (
              <option key={o.value} value={o.value}>
                {o.label}
              </option>
            ))}
          </Select>
        </Field>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Presupuesto aproximado" htmlFor="approximate_budget" error={errors.approximate_budget?.message}>
          <Input id="approximate_budget" placeholder="Ej. US$40,000" {...register("approximate_budget")} />
        </Field>
        <Field label="Enganche disponible" htmlFor="available_down_payment" error={errors.available_down_payment?.message}>
          <Input id="available_down_payment" placeholder="Ej. US$8,000" {...register("available_down_payment")} />
        </Field>
      </div>

      <Field label="Plazo deseado" htmlFor="desired_term" error={errors.desired_term?.message}>
        <Select id="desired_term" defaultValue="" {...register("desired_term")}>
          <option value="" disabled>
            Selecciona una opción
          </option>
          {TERM.map((o) => (
            <option key={o.value} value={o.value}>
              {o.label}
            </option>
          ))}
        </Select>
      </Field>

      <Field label="Mensaje adicional" htmlFor="message" error={errors.message?.message}>
        <Textarea id="message" placeholder="¿Algo específico que quieras saber del proyecto?" {...register("message")} />
      </Field>

      <label className="flex items-center gap-2.5 text-sm text-ink/80">
        <Checkbox {...register("wants_tour")} />
        Me interesa agendar un recorrido por el proyecto.
      </label>

      <Button type="submit" size="lg" disabled={isSubmitting} className="w-full sm:w-auto">
        {isSubmitting ? <Loader2 className="size-4 animate-spin" /> : null}
        {isSubmitting ? "Enviando…" : "Solicitar información del proyecto"}
      </Button>
    </form>
  );
}
