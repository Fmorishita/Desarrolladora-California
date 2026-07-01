import { Loader2, Inbox, AlertTriangle } from "lucide-react";
import { cn } from "@/lib/utils";

export function LoadingState({ label = "Cargando…", className }: { label?: string; className?: string }) {
  return (
    <div className={cn("flex items-center justify-center gap-2 py-10 text-sm text-ink/60", className)}>
      <Loader2 className="size-4 animate-spin text-copper" />
      {label}
    </div>
  );
}

export function EmptyState({
  title = "Sin resultados",
  description,
  className,
}: {
  title?: string;
  description?: string;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "flex flex-col items-center justify-center gap-3 rounded-lg border border-dashed border-stone/40 bg-sand/30 px-6 py-14 text-center",
        className,
      )}
    >
      <Inbox className="size-7 text-stone" />
      <p className="font-display text-lg text-ink">{title}</p>
      {description && <p className="max-w-sm text-sm text-ink/55">{description}</p>}
    </div>
  );
}

export function ErrorState({
  title = "Ocurrió un error",
  description = "Intenta de nuevo en unos momentos.",
  className,
}: {
  title?: string;
  description?: string;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "flex flex-col items-center justify-center gap-3 rounded-lg border border-destructive/25 bg-destructive/5 px-6 py-12 text-center",
        className,
      )}
    >
      <AlertTriangle className="size-7 text-destructive" />
      <p className="font-display text-lg text-ink">{title}</p>
      <p className="max-w-sm text-sm text-ink/60">{description}</p>
    </div>
  );
}
