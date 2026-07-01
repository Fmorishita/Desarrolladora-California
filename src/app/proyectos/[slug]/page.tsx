import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { MapPin, CheckCircle2, ArrowRight, CalendarClock } from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { SectionHeading } from "@/components/section-heading";
import { StatsBlock } from "@/components/stats-block";
import { FAQAccordion } from "@/components/faq-accordion";
import { MapEmbed } from "@/components/map-embed";
import { ProjectAvailabilityPreview } from "@/components/project-availability-preview";
import { ProjectInterestForm } from "@/components/forms/project-interest-form";
import { Reveal } from "@/components/motion/reveal";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { buildMetadata } from "@/lib/seo";
import { getProjectBySlug, projects } from "@/lib/projects";
import { whatsappUrl } from "@/lib/site";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const project = getProjectBySlug(params.slug);
  if (!project) return {};
  return buildMetadata({
    title: `${project.name} | Terrenos cerca de Valle de Guadalupe`,
    description:
      "Terrenos amplios cerca de Valle de Guadalupe desde US$40/m², con enganche flexible y financiamiento disponible.",
    path: `/proyectos/${project.slug}`,
  });
}

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const project = getProjectBySlug(params.slug);
  if (!project) notFound();

  const wa = whatsappUrl("mirador");
  const primaryStats = project.facts.slice(0, 4);
  const secondaryStats = project.facts.slice(4, 8);

  return (
    <>
      <PageHero
        eyebrow={project.projectType}
        title={
          <>
            {project.name}
            <span className="mt-4 block text-lg font-normal tracking-normal text-copper sm:text-xl">
              {project.shortDescription}
            </span>
          </>
        }
      >
        <div className="flex flex-wrap items-center gap-3">
          <Badge variant="copper">{project.status}</Badge>
          <span className="inline-flex items-center gap-1.5 text-sm text-bone/70">
            <MapPin className="size-4 text-copper" />
            {project.location}
          </span>
        </div>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Button asChild variant="copper" size="lg">
            <Link href="#interes">Solicitar información</Link>
          </Button>
          {wa && (
            <Button
              asChild
              size="lg"
              className="border border-bone/25 bg-transparent text-bone hover:bg-bone/10"
            >
              <a href={wa} target="_blank" rel="noopener noreferrer">
                WhatsApp
              </a>
            </Button>
          )}
        </div>
      </PageHero>

      {/* Imagen hero */}
      <div className="relative aspect-[21/9] w-full overflow-hidden bg-sand">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={project.heroImageUrl}
          alt={`Vista panorámica de ${project.name}`}
          className="h-full w-full object-cover"
        />
      </div>

      {/* Datos clave */}
      <section className="py-20 lg:py-24">
        <div className="container-tight">
          <SectionHeading
            eyebrow="Datos clave"
            title="Una oportunidad patrimonial con números claros"
            description={project.longDescription}
          />
          <div className="mt-12 space-y-4">
            <StatsBlock stats={primaryStats} columns={4} />
            <StatsBlock stats={secondaryStats} columns={4} />
          </div>
        </div>
      </section>

      {/* Beneficios + plano */}
      <section className="bg-sand/40 py-20 lg:py-28">
        <div className="container-tight grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <SectionHeading eyebrow="Beneficios" title="Por qué Mirador del Valle" />
            <ul className="mt-8 space-y-3">
              {project.benefits.map((b, i) => (
                <Reveal as="li" index={i} key={i}>
                  <div className="flex items-start gap-3 rounded-lg border border-border/70 bg-card p-4">
                    <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-olive" />
                    <p className="text-sm leading-relaxed text-ink/75">{b}</p>
                  </div>
                </Reveal>
              ))}
            </ul>
          </div>
          <div>
            <SectionHeading eyebrow="Ubicación" title="Cerca de Valle de Guadalupe" />
            <div className="mt-8 space-y-4">
              <MapEmbed label={project.location} />
              <div className="rounded-lg border border-dashed border-stone/40 bg-card p-6">
                <p className="text-xs font-medium uppercase tracking-[0.16em] text-copper">
                  Plano del proyecto
                </p>
                <p className="mt-2 text-sm leading-relaxed text-ink/65">
                  [PLACEHOLDER: plano de lotificación de Mirador del Valle
                  pendiente de cargar. La plataforma está preparada para mostrar
                  el plano y la disponibilidad.]
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Disponibilidad */}
      <section className="py-20 lg:py-24">
        <div className="container-tight">
          <SectionHeading
            eyebrow="Disponibilidad"
            title="Lotes del proyecto"
            description="La disponibilidad puntual se confirma al solicitar información. Preparado para mostrar lotes en vivo desde la base de datos."
          />
          <div className="mt-10">
            <ProjectAvailabilityPreview projectSlug={project.slug} />
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-carbon py-20 text-bone lg:py-28">
        <div className="container-tight grid gap-12 lg:grid-cols-[0.85fr_1.15fr]">
          <SectionHeading
            tone="dark"
            eyebrow="Preguntas frecuentes"
            title="Todo lo que necesitas saber"
          />
          <FAQAccordion items={project.faqs} tone="dark" />
        </div>
      </section>

      {/* Formulario de interés */}
      <section id="interes" className="scroll-mt-24 py-20 lg:py-28">
        <div className="container-tight grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          <div>
            <SectionHeading
              eyebrow="Solicita información"
              title="Recibe detalles, disponibilidad y financiamiento"
              description="Déjanos tus datos y te contactaremos para compartir la información del proyecto y resolver tus dudas."
            />
            <div className="mt-8 flex items-start gap-3 rounded-lg border border-copper/25 bg-copper/8 p-5">
              <CalendarClock className="mt-0.5 size-5 shrink-0 text-copper" />
              <p className="text-sm leading-relaxed text-ink/75">
                ¿Prefieres conocerlo en persona? Puedes solicitar un recorrido por
                el proyecto directamente en el formulario.
              </p>
            </div>
          </div>
          <div className="rounded-xl border border-border/70 bg-card p-6 shadow-sm sm:p-9">
            <ProjectInterestForm
              projectName={project.name}
              projectSlug={project.slug}
            />
          </div>
        </div>
      </section>

      {/* CTA recorrido */}
      <section className="relative overflow-hidden bg-olive py-16 text-bone">
        <div className="container-tight relative flex flex-col items-center gap-6 text-center">
          <h2 className="max-w-2xl text-balance text-2xl leading-tight sm:text-3xl">
            Agenda un recorrido por Mirador del Valle
          </h2>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Button asChild variant="copper" size="lg">
              <Link href="#interes">
                Agendar recorrido
                <ArrowRight className="size-4" />
              </Link>
            </Button>
            {wa && (
              <Button
                asChild
                size="lg"
                className="border border-bone/30 bg-transparent text-bone hover:bg-bone/10"
              >
                <a href={wa} target="_blank" rel="noopener noreferrer">
                  Escribir por WhatsApp
                </a>
              </Button>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
