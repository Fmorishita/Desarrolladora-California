"use client";

import * as React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2, ShieldCheck } from "lucide-react";
import { landownerSchema, type LandownerInput } from "@/lib/schemas";
import { submitLandownerRequest } from "@/app/actions/leads";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select } from "@/components/ui/select";
import { Field, Honeypot, FormAlert } from "@/components/forms/form-parts";
import { toFormData } from "@/lib/to-form-data";

const LEGAL = [
  { value: "escriturado", label: "Escriturado" },
  { value: "ejidal", label: "Ejidal" },
  { value: "posesion", label: "En posesión" },
  { value: "en_proceso", label: "En proceso" },
  { value: "otro", label: "Otro" },
  { value: "no_seguro", label: "No estoy seguro" },
];

const COLLAB = [
  { value: "asociacion", label: "Asociación estratégica" },
  { value: "desarrollo_operacion", label: "Desarrollo y operación del proyecto" },
  { value: "urbanizacion_lotificacion", label: "Urbanización y lotificación" },
  { value: "comercializacion", label: "Comercialización" },
  { value: "construccion", label: "Ejecución como constructora" },
  { value: "por_definir", label: "Aún no lo defino" },
];

export function LandownerForm() {
  const [result, setResult] = React.useState<{ status: "success" | "error"; message: string } | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<LandownerInput>({
    resolver: zodResolver(landownerSchema),
  });

  async function onSubmit(values: LandownerInput) {
    const res = await submitLandownerRequest({ status: "idle" }, toFormData(values));
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
        <Field label="Ubicación del terreno" htmlFor="land_location" required error={errors.land_location?.message}>
          <Input id="land_location" placeholder="Municipio, zona o referencia" {...register("land_location")} />
        </Field>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Tamaño aproximado (hectáreas)" htmlFor="approximate_hectares" error={errors.approximate_hectares?.message}>
          <Input id="approximate_hectares" inputMode="decimal" placeholder="Ej. 5" {...register("approximate_hectares")} />
        </Field>
        <Field label="Situación legal" htmlFor="legal_status" error={errors.legal_status?.message}>
          <Select id="legal_status" defaultValue="" {...register("legal_status")}>
            <option value="" disabled>
              Selecciona una opción
            </option>
            {LEGAL.map((o) => (
              <option key={o.value} value={o.value}>
                {o.label}
              </option>
            ))}
          </Select>
        </Field>
      </div>

      <Field label="Servicios cercanos" htmlFor="nearby_services" error={errors.nearby_services?.message}>
        <Input id="nearby_services" placeholder="Agua, electricidad, camino, carretera…" {...register("nearby_services")} />
      </Field>

      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="¿Qué buscas hacer con el terreno?" htmlFor="objective" error={errors.objective?.message}>
          <Input id="objective" placeholder="Desarrollar, vender, asociarme…" {...register("objective")} />
        </Field>
        <Field label="Tipo de colaboración deseada" htmlFor="collaboration_type" error={errors.collaboration_type?.message}>
          <Select id="collaboration_type" defaultValue="" {...register("collaboration_type")}>
            <option value="" disabled>
              Selecciona una opción
            </option>
            {COLLAB.map((o) => (
              <option key={o.value} value={o.value}>
                {o.label}
              </option>
            ))}
          </Select>
        </Field>
      </div>

      <Field label="Mensaje adicional" htmlFor="message" error={errors.message?.message}>
        <Textarea id="message" placeholder="Cualquier detalle relevante sobre tu propiedad." {...register("message")} />
      </Field>

      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="inline-flex items-center gap-2 text-xs text-ink/55">
          <ShieldCheck className="size-4 text-olive" />
          Tu información se trata de forma privada y confidencial.
        </p>
        <Button type="submit" size="lg" disabled={isSubmitting}>
          {isSubmitting ? <Loader2 className="size-4 animate-spin" /> : null}
          {isSubmitting ? "Enviando…" : "Solicitar diagnóstico privado"}
        </Button>
      </div>
    </form>
  );
}
