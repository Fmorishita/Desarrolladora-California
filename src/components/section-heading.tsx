import { cn } from "@/lib/utils";
import { Reveal } from "@/components/motion/reveal";

interface SectionHeadingProps {
  eyebrow?: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  align?: "left" | "center";
  className?: string;
  tone?: "light" | "dark";
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  className,
  tone = "light",
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "max-w-2xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      {eyebrow && (
        <Reveal>
          <span className="eyebrow">
            <span className="h-px w-6 bg-copper" />
            {eyebrow}
          </span>
        </Reveal>
      )}
      <Reveal index={1}>
        <h2
          className={cn(
            "mt-4 text-balance text-3xl leading-[1.1] sm:text-4xl lg:text-[2.75rem]",
            tone === "dark" ? "text-bone" : "text-ink",
          )}
        >
          {title}
        </h2>
      </Reveal>
      {description && (
        <Reveal index={2}>
          <p
            className={cn(
              "mt-5 text-base leading-relaxed sm:text-lg",
              tone === "dark" ? "text-bone/70" : "text-ink/70",
            )}
          >
            {description}
          </p>
        </Reveal>
      )}
    </div>
  );
}
