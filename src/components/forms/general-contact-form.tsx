"use client";

import * as React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2, Send } from "lucide-react";
import { generalLeadSchema, type GeneralLeadInput } from "@/lib/schemas";
import { submitGeneralLead } from "@/app/actions/leads";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select } from "@/components/ui/select";
import { Field, Honeypot, FormAlert } from "@/components/forms/form-parts";
import { toFormData } from "@/lib/to-form-data";

const LEAD_TYPES = [
  { value: "tengo_tierra", label: "Tengo tierra" },
  { value: "comprar_lote", label: "Quiero comprar un lote" },
  { value: "desarrollar_proyecto", label: "Quiero desarrollar un proyecto" },
  { value: "informacion_general", label: "Información general" },
];

export function GeneralContactForm({ defaultType }: { defaultType?: string }) {
  const [result, setResult] = React.useState<{ status: "success" | "error"; message: string } | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<GeneralLeadInput>({
    resolver: zodResolver(generalLeadSchema),
    defaultValues: {
      lead_type: (defaultType as GeneralLeadInput["lead_type"]) ?? undefined,
      source: "contacto",
    },
  });

  async function onSubmit(values: GeneralLeadInput) {
    const res = await submitGeneralLead({ status: "idle" }, toFormData(values));
    setResult({ status: res.status === "success" ? "success" : "error", message: res.message ?? "" });
    if (res.status === "success") reset();
  }

  if (result?.status === "success") {
    return <FormAlert status="success" message={result.message} />;
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="relative space-y-5">
      <Honeypot register={register} />
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
        <Field label="Motivo de contacto" htmlFor="lead_type" required error={errors.lead_type?.message}>
          <Select id="lead_type" defaultValue={defaultType ?? ""} {...register("lead_type")}>
            <option value="" disabled>
              Selecciona una opción
            </option>
            {LEAD_TYPES.map((t) => (
              <option key={t.value} value={t.value}>
                {t.label}
              </option>
            ))}
          </Select>
        </Field>
      </div>

      <Field label="Mensaje" htmlFor="message" error={errors.message?.message}>
        <Textarea id="message" placeholder="Cuéntanos brevemente en qué podemos ayudarte." {...register("message")} />
      </Field>

      <Button type="submit" size="lg" disabled={isSubmitting} className="w-full sm:w-auto">
        {isSubmitting ? <Loader2 className="size-4 animate-spin" /> : <Send className="size-4" />}
        {isSubmitting ? "Enviando…" : "Enviar mensaje"}
      </Button>
    </form>
  );
}
