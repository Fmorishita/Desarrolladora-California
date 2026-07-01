import { cn } from "@/lib/utils";

/**
 * Marcas de registro en las esquinas (estética de plano/hoja técnica).
 * Decorativas; el contenedor padre debe ser `relative`.
 */
export function CornerMarks({
  className,
  tone = "light",
}: {
  className?: string;
  tone?: "light" | "dark";
}) {
  const color = tone === "dark" ? "text-copper/60" : "text-copper/70";
  const mark = (pos: string) => (
    <svg
      key={pos}
      viewBox="0 0 12 12"
      aria-hidden
      className={cn("absolute size-3", color, pos)}
    >
      <path d="M6 0 V12 M0 6 H12" stroke="currentColor" strokeWidth="1" />
    </svg>
  );
  return (
    <div aria-hidden className={cn("pointer-events-none absolute inset-0", className)}>
      {mark("left-3 top-3")}
      {mark("right-3 top-3")}
      {mark("left-3 bottom-3")}
      {mark("right-3 bottom-3")}
    </div>
  );
}
