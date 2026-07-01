import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/motion/reveal";
import { TopographicBackground } from "@/components/topographic-background";

interface CTASectionProps {
  eyebrow?: string;
  title: React.ReactNode;
  description?: string;
  primaryLabel: string;
  primaryHref: string;
  secondaryLabel?: string;
  secondaryHref?: string;
}

export function CTASection({
  eyebrow,
  title,
  description,
  primaryLabel,
  primaryHref,
  secondaryLabel,
  secondaryHref,
}: CTASectionProps) {
  return (
    <section className="grain relative overflow-hidden bg-carbon text-bone">
      <TopographicBackground variant="dark" />
      <div className="container-tight relative z-[2] py-20 lg:py-28">
        <div className="mx-auto max-w-3xl text-center">
          {eyebrow && (
            <Reveal>
              <span className="eyebrow justify-center">
                <span className="h-px w-6 bg-copper" />
                {eyebrow}
              </span>
            </Reveal>
          )}
          <Reveal index={1}>
            <h2 className="mt-5 text-balance text-3xl leading-[1.12] sm:text-4xl lg:text-[3rem]">
              {title}
            </h2>
          </Reveal>
          {description && (
            <Reveal index={2}>
              <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-bone/70 sm:text-lg">
                {description}
              </p>
            </Reveal>
          )}
          <Reveal index={3}>
            <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Button asChild variant="copper" size="lg">
                <Link href={primaryHref}>
                  {primaryLabel}
                  <ArrowRight className="size-4" />
                </Link>
              </Button>
              {secondaryLabel && secondaryHref && (
                <Button
                  asChild
                  size="lg"
                  className="border border-bone/25 bg-transparent text-bone hover:bg-bone/10"
                >
                  <Link href={secondaryHref}>{secondaryLabel}</Link>
                </Button>
              )}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
