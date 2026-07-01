import * as React from "react";
import { CheckCircle2, AlertCircle } from "lucide-react";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";

export function Field({
  label,
  htmlFor,
  error,
  required,
  className,
  children,
}: {
  label: string;
  htmlFor: string;
  error?: string;
  required?: boolean;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div className={cn("flex flex-col gap-1.5", className)}>
      <Label htmlFor={htmlFor}>
        {label}
        {required && <span className="ml-0.5 text-copper">*</span>}
      </Label>
      {children}
      {error && <p className="text-xs text-destructive">{error}</p>}
    </div>
  );
}

/** Campo honeypot invisible para bots. */
export function Honeypot({ register }: { register: (name: "website") => object }) {
  return (
    <div aria-hidden className="absolute left-[-9999px] top-[-9999px] h-0 w-0 overflow-hidden">
      <label htmlFor="website">No llenar</label>
      <input
        id="website"
        type="text"
        tabIndex={-1}
        autoComplete="off"
        {...register("website")}
      />
    </div>
  );
}

export function FormAlert({
  status,
  message,
}: {
  status: "success" | "error";
  message: string;
}) {
  const success = status === "success";
  return (
    <div
      role="status"
      className={cn(
        "flex items-start gap-3 rounded-md border p-4 text-sm",
        success
          ? "border-emerald-600/25 bg-emerald-600/8 text-emerald-800"
          : "border-destructive/25 bg-destructive/8 text-destructive",
      )}
    >
      {success ? (
        <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-emerald-600" />
      ) : (
        <AlertCircle className="mt-0.5 size-5 shrink-0" />
      )}
      <p className="leading-relaxed">{message}</p>
    </div>
  );
}
