import Link from "next/link";
import { cn } from "@/lib/utils";

/**
 * Monograma de marca: cuadro de registro con curvas de nivel.
 * Provisional hasta contar con logotipo oficial; funciona como
 * sello en navbar, footer y materiales.
 */
export function Monogram({
  className,
  tone = "light",
}: {
  className?: string;
  tone?: "light" | "dark";
}) {
  const frame = tone === "dark" ? "#B08A54" : "#3E4B3A";
  const lines = "#B08A54";
  return (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      aria-hidden
      className={cn("size-8 shrink-0", className)}
    >
      <rect x="1" y="1" width="30" height="30" stroke={frame} strokeWidth="1.5" />
      <path
        d="M5 21 C 10 15, 13 24, 18 19 S 25 12, 27 13"
        stroke={lines}
        strokeWidth="1.2"
        fill="none"
      />
      <path
        d="M5 25 C 10 20, 14 28, 19 23 S 26 17, 27 18"
        stroke={lines}
        strokeWidth="1.2"
        fill="none"
        opacity="0.7"
      />
      <path
        d="M5 17 C 9 11, 14 19, 19 14 S 25 8, 27 9"
        stroke={lines}
        strokeWidth="1.2"
        fill="none"
        opacity="0.45"
      />
    </svg>
  );
}

/**
 * Wordmark tipográfico provisional (sin logotipo real).
 * Reemplazar por el logo oficial cuando esté disponible.
 */
export function Logo({
  className,
  tone = "light",
}: {
  className?: string;
  tone?: "light" | "dark";
}) {
  return (
    <Link
      href="/"
      className={cn("group inline-flex items-center gap-3", className)}
      aria-label="Urbanizadora y Desarrolladora California — inicio"
    >
      <Monogram tone={tone} />
      <span className="flex flex-col leading-none">
        <span
          className={cn(
            "font-display text-lg tracking-tight transition-colors",
            tone === "dark" ? "text-bone" : "text-ink",
          )}
        >
          California
        </span>
        <span className="mt-1 text-[0.6rem] font-medium uppercase tracking-[0.28em] text-copper">
          Urbanizadora · Desarrolladora
        </span>
      </span>
    </Link>
  );
}
