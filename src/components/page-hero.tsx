import { Reveal } from "@/components/motion/reveal";
import { TopographicBackground } from "@/components/topographic-background";
import { cn } from "@/lib/utils";

interface PageHeroProps {
  eyebrow?: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  children?: React.ReactNode;
  align?: "left" | "center";
}

/** Hero estándar para páginas interiores (fondo carbón, líneas topográficas). */
export function PageHero({
  eyebrow,
  title,
  description,
  children,
  align = "left",
}: PageHeroProps) {
  return (
    <section className="relative overflow-hidden bg-carbon text-bone">
      <TopographicBackground variant="dark" />
      <div className="container-tight relative pb-16 pt-20 lg:pb-24 lg:pt-28">
        <div className={cn("max-w-3xl", align === "center" && "mx-auto text-center")}>
          {eyebrow && (
            <Reveal>
              <span className={cn("eyebrow", align === "center" && "justify-center")}>
                <span className="h-px w-6 bg-copper" />
                {eyebrow}
              </span>
            </Reveal>
          )}
          <Reveal index={1}>
            <h1 className="mt-5 text-balance text-4xl leading-[1.08] sm:text-5xl lg:text-6xl">
              {title}
            </h1>
          </Reveal>
          {description && (
            <Reveal index={2}>
              <p
                className={cn(
                  "mt-6 max-w-2xl text-base leading-relaxed text-bone/70 sm:text-lg",
                  align === "center" && "mx-auto",
                )}
              >
                {description}
              </p>
            </Reveal>
          )}
          {children && (
            <Reveal index={3}>
              <div className="mt-9">{children}</div>
            </Reveal>
          )}
        </div>
      </div>
    </section>
  );
}
