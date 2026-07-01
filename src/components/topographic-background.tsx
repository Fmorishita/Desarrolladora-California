import { cn } from "@/lib/utils";

/**
 * Fondo de líneas topográficas sutiles (curvas de nivel).
 * SVG decorativo, no interactivo. Usar en hero y secciones CTA.
 */
export function TopographicBackground({
  className,
  variant = "light",
}: {
  className?: string;
  variant?: "light" | "dark";
}) {
  const stroke = variant === "dark" ? "#B08A54" : "#3E4B3A";
  const opacity = variant === "dark" ? 0.14 : 0.08;
  return (
    <div
      aria-hidden
      className={cn("pointer-events-none absolute inset-0 overflow-hidden", className)}
    >
      <svg
        className="h-full w-full"
        viewBox="0 0 1200 700"
        fill="none"
        preserveAspectRatio="xMidYMid slice"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g stroke={stroke} strokeWidth="1" style={{ opacity }}>
          {Array.from({ length: 9 }).map((_, i) => {
            const offset = i * 46;
            return (
              <path
                key={i}
                d={`M-40 ${120 + offset} C 220 ${40 + offset}, 420 ${220 + offset}, 640 ${150 + offset} S 1040 ${30 + offset}, 1260 ${140 + offset}`}
                fill="none"
              />
            );
          })}
          {Array.from({ length: 5 }).map((_, i) => {
            const r = 60 + i * 52;
            return (
              <ellipse
                key={`e-${i}`}
                cx="920"
                cy="470"
                rx={r}
                ry={r * 0.62}
                fill="none"
              />
            );
          })}
        </g>
      </svg>
    </div>
  );
}
