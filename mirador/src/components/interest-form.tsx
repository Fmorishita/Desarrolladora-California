"use client";

import * as React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2, CheckCircle2, AlertCircle } from "lucide-react";
import { interestSchema, type InterestInput } from "@/lib/schema";
import { submitInterest } from "@/app/actions";

const USE = [
  { value: "inversion", label: "Inversión patrimonial" },
  { value: "descanso", label: "Casa de descanso" },
  { value: "desarrollo", label: "Desarrollo futuro" },
  { value: "mixto", label: "Mixto" },
  { value: "otro", label: "Otro" },
];
const TERM = [
  { value: "contado", label: "Contado" },
  { value: "hasta_5_anios", label: "Hasta 5 años (sin intereses)" },
  { value: "hasta_8_anios", label: "Hasta 8 años (sin intereses)" },
  { value: "por_definir", label: "Por definir" },
];

function Field({
  label,
  htmlFor,
  error,
  required,
  children,
}: {
  label: string;
  htmlFor: string;
  error?: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={htmlFor} className="text-sm font-medium text-dusk/90">
        {label}
        {required && <span className="ml-0.5 text-clay">*</span>}
      </label>
      {children}
      {error && <p className="text-xs text-red-700">{error}</p>}
    </div>
  );
}

export function InterestForm() {
  const [result, setResult] = React.useState<{ ok: boolean; message: string } | null>(null);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<InterestInput>({
    resolver: zodResolver(interestSchema),
    defaultValues: { wants_tour: false },
  });

  async function onSubmit(values: InterestInput) {
    const fd = new FormData();
    Object.entries(values).forEach(([k, v]) => {
      if (v === undefined || v === null) return;
      fd.append(k, typeof v === "boolean" ? (v ? "true" : "false") : String(v));
    });
    const res = await submitInterest(fd);
    setResult({ ok: res.status === "success", message: res.message });
    if (res.status === "success") reset();
  }

  if (result?.ok) {
    return (
      <div role="status" className="flex items-start gap-3 rounded-xl border border-vine/40 bg-vine/10 p-5 text-sm">
        <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-vine" />
        <p className="leading-relaxed text-dusk">{result.message}</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="relative space-y-5">
      {/* honeypot */}
      <div aria-hidden className="absolute left-[-9999px] top-[-9999px] h-0 w-0 overflow-hidden">
        <label htmlFor="website">No llenar</label>
        <input id="website" type="text" tabIndex={-1} autoComplete="off" {...register("website")} />
      </div>

      {result && !result.ok && (
        <div role="status" className="flex items-start gap-3 rounded-xl border border-red-300 bg-red-50 p-4 text-sm text-red-800">
          <AlertCircle className="mt-0.5 size-5 shrink-0" />
          <p>{result.message}</p>
        </div>
      )}

      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Nombre completo" htmlFor="full_name" required error={errors.full_name?.message}>
          <input id="full_name" autoComplete="name" className="field" {...register("full_name")} />
        </Field>
        <Field label="Teléfono" htmlFor="phone" required error={errors.phone?.message}>
          <input id="phone" inputMode="tel" autoComplete="tel" className="field" {...register("phone")} />
        </Field>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Correo" htmlFor="email" required error={errors.email?.message}>
          <input id="email" type="email" autoComplete="email" className="field" {...register("email")} />
        </Field>
        <Field label="Uso previsto" htmlFor="intended_use" error={errors.intended_use?.message}>
          <select id="intended_use" defaultValue="" className="field" {...register("intended_use")}>
            <option value="" disabled>Selecciona una opción</option>
            {USE.map((o) => (
              <option key={o.value} value={o.value}>{o.label}</option>
            ))}
          </select>
        </Field>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Presupuesto aproximado" htmlFor="approximate_budget" error={errors.approximate_budget?.message}>
          <input id="approximate_budget" placeholder="Ej. US$45,000" className="field" {...register("approximate_budget")} />
        </Field>
        <Field label="Plazo deseado" htmlFor="desired_term" error={errors.desired_term?.message}>
          <select id="desired_term" defaultValue="" className="field" {...register("desired_term")}>
            <option value="" disabled>Selecciona una opción</option>
            {TERM.map((o) => (
              <option key={o.value} value={o.value}>{o.label}</option>
            ))}
          </select>
        </Field>
      </div>

      <Field label="Mensaje adicional" htmlFor="message" error={errors.message?.message}>
        <textarea id="message" rows={4} placeholder="¿Algo específico que quieras saber del proyecto?" className="field h-auto py-2.5" {...register("message")} />
      </Field>

      <label className="flex items-center gap-2.5 text-sm text-dusk/85">
        <input type="checkbox" className="size-4 rounded accent-clay" {...register("wants_tour")} />
        Me interesa agendar un recorrido por el proyecto.
      </label>

      <button type="submit" disabled={isSubmitting} className="btn-primary w-full disabled:opacity-60 sm:w-auto">
        {isSubmitting && <Loader2 className="size-4 animate-spin" />}
        {isSubmitting ? "Enviando…" : "Solicitar información del proyecto"}
      </button>
    </form>
  );
}
