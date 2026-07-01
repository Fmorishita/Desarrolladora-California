import Link from "next/link";
import { cn } from "@/lib/utils";

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
      className={cn("group inline-flex flex-col leading-none", className)}
      aria-label="Urbanizadora y Desarrolladora California — inicio"
    >
      <span
        className={cn(
          "font-display text-lg tracking-tight transition-colors",
          tone === "dark" ? "text-bone" : "text-ink",
        )}
      >
        California
      </span>
      <span
        className={cn(
          "text-[0.6rem] font-medium uppercase tracking-[0.28em]",
          tone === "dark" ? "text-copper" : "text-copper",
        )}
      >
        Urbanizadora · Desarrolladora
      </span>
    </Link>
  );
}
