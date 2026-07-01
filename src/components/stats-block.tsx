import { Reveal } from "@/components/motion/reveal";
import { cn } from "@/lib/utils";

export interface Stat {
  value: string;
  label: string;
}

const COLS: Record<2 | 3 | 4, string> = {
  2: "grid-cols-2",
  3: "grid-cols-2 sm:grid-cols-3",
  4: "grid-cols-2 lg:grid-cols-4",
};

/** Bloque de cifras. Usar solo con datos confirmados. */
export function StatsBlock({
  stats,
  tone = "light",
  columns = 4,
  className,
}: {
  stats: Stat[];
  tone?: "light" | "dark";
  columns?: 2 | 3 | 4;
  className?: string;
}) {
  return (
    <dl
      className={cn(
        "grid gap-px overflow-hidden rounded-lg border",
        tone === "dark" ? "border-bone/12 bg-bone/12" : "border-border bg-border",
        COLS[columns],
        className,
      )}
    >
      {stats.map((stat, i) => (
        <Reveal
          key={i}
          index={i}
          className={cn(
            "flex flex-col gap-1 p-6 sm:p-7",
            tone === "dark" ? "bg-carbon" : "bg-card",
          )}
        >
          <dt
            className={cn(
              "font-display text-3xl sm:text-4xl",
              tone === "dark" ? "text-bone" : "text-olive",
            )}
          >
            {stat.value}
          </dt>
          <dd
            className={cn(
              "text-xs uppercase tracking-[0.14em]",
              tone === "dark" ? "text-bone/55" : "text-ink/55",
            )}
          >
            {stat.label}
          </dd>
        </Reveal>
      ))}
    </dl>
  );
}
