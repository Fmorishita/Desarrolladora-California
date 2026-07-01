import { Reveal } from "@/components/motion/reveal";
import { cn } from "@/lib/utils";

export interface EditorialStat {
  value: string;
  label: string;
  hint?: string;
}

/**
 * Cifras en formato editorial: numeral display grande sobre regla superior
 * de cobre, sin cajas. Usar solo con datos confirmados.
 */
export function EditorialStats({
  stats,
  tone = "light",
  className,
}: {
  stats: EditorialStat[];
  tone?: "light" | "dark";
  className?: string;
}) {
  return (
    <dl className={cn("grid grid-cols-2 gap-x-8 gap-y-10 lg:grid-cols-4", className)}>
      {stats.map((stat, i) => (
        <Reveal key={i} index={i}>
          <div
            className={cn(
              "border-t pt-5",
              tone === "dark" ? "border-copper/50" : "border-copper/45",
            )}
          >
            <dt
              className={cn(
                "font-display text-4xl leading-none tracking-tightest sm:text-5xl lg:text-[3.4rem]",
                tone === "dark" ? "text-bone" : "text-ink",
              )}
            >
              {stat.value}
            </dt>
            <dd
              className={cn(
                "mt-3 text-xs font-medium uppercase tracking-[0.16em]",
                tone === "dark" ? "text-bone/60" : "text-ink/55",
              )}
            >
              {stat.label}
            </dd>
            {stat.hint && (
              <dd
                className={cn(
                  "mt-1 text-xs",
                  tone === "dark" ? "text-bone/45" : "text-ink/45",
                )}
              >
                {stat.hint}
              </dd>
            )}
          </div>
        </Reveal>
      ))}
    </dl>
  );
}
