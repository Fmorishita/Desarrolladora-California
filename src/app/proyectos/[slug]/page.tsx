import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { MapPin, CheckCircle2, ArrowRight, CalendarClock } from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { SectionHeading } from "@/components/section-heading";
import { EditorialStats } from "@/components/editorial-stats";
import { FAQAccordion } from "@/components/faq-accordion";
import { MapEmbed } from "@/components/map-embed";
import { ProjectAvailabilityPreview } from "@/components/project-availability-preview";
import { ProjectInterestForm } from "@/components/forms/project-interest-form";
import { ProcessTimeline } from "@/components/process-timeline";
import { TechSheet } from "@/components/project/tech-sheet";
import { AbsorptionBand } from "@/components/project/absorption-band";
import { FinancingOptions } from "@/components/project/financing-options";
import { StickyCTA } from "@/components/project/sticky-cta";
import { CornerMarks } from "@/components/corner-marks";
import { FaqJsonLd, BreadcrumbsJsonLd } from "@/components/seo/json-ld";
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

const headlineStats = [
  { value: "US$40", label: "por m², precio desde" },
  { value: "≈1,000", label: "m² por terreno, promedio" },
  { value: "10–20%", label: "de enganche" },
  { value: "≈4 min", label: "de Arena Valle de Guadalupe" },
];

const techSheetRows = [
  { label: "Proyecto", value: "Mirador del Valle" },
  { label: "Tipo", value: "Lotificación" },
  { label: "Ubicación", value: "Cerca de Valle de Guadalupe, B.C." },
  { label: "Terreno promedio", value: "≈1,000 m²" },
  { label: "Precio", value: "desde US$40/m²" },
  { label: "Enganche", value: "10% a 20%" },
  { label: "Financiamiento", value: "hasta 5 años · US$40/m²" },
  { label: "Plazo extendido", value: "hasta 8 años · US$45/m²" },
  { label: "Terrenos totales", value: "91" },
  { label: "Disponibles", value: "≈70 (por confirmar)" },
];

const purchaseSteps = [
  {
    title: "Solicita información",
    description:
      "Déjanos tus datos en el formulario o por WhatsApp. Te compartimos detalles, disponibilidad y esquemas de pago.",
  },
  {
    title: "Recorre el proyecto",
    description:
      "Agenda una visita para conocer el terreno, la zona y el entorno de Valle de Guadalupe.",
  },
  {
    title: "Elige y aparta tu lote",
    description:
      "Seleccionas el lote y el esquema de financiamiento que mejor se ajuste a tu plan.",
  },
  {
    title: "Formaliza tu compra",
    description:
      "Acompañamos el proceso de contratación con claridad en cada paso y documentación ordenada.",
  },
];

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const project = getProjectBySlug(params.slug);
  if (!project) notFound();

  const wa = whatsappUrl("mirador");

  return (
    <>
      <FaqJsonLd items={project.faqs} />
      <BreadcrumbsJsonLd
        items={[
          { name: "Inicio", path: "/" },
          { name: "Proyectos", path: "/proyectos" },
          { name: project.name, path: `/proyectos/${project.slug}` },
        ]}
      />
      <StickyCTA priceLabel={`Desde ${project.priceFrom}`} />

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

      {/* Datos clave editoriales + absorción */}
      <section className="py-20 lg:py-24">
        <div className="container-tight">
          <SectionHeading
            number="01"
            eyebrow="Datos clave"
            title="Una oportunidad con números claros y demanda comprobada"
            description={project.longDescription}
          />
          <div className="mt-14">
            <EditorialStats stats={headlineStats} />
          </div>
          <div className="mt-12">
            <AbsorptionBand />
          </div>
        </div>
      </section>

      {/* Financiamiento */}
      <section className="bg-sand/40 py-20 lg:py-24">
        <div className="container-tight">
          <SectionHeading
            number="02"
            eyebrow="Financiamiento"
            title="Dos esquemas, un mismo terreno"
            description="Elige entre mantener el precio de lista hasta 5 años o extender el plazo hasta 8. En ambos casos, el enganche va del 10% al 20%."
          />
          <div className="mt-12">
            <FinancingOptions />
          </div>
        </div>
      </section>

      {/* Beneficios + ubicación */}
      <section className="py-20 lg:py-28">
        <div className="container-tight grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <SectionHeading
              number="03"
              eyebrow="Beneficios"
              title="Por qué Mirador del Valle"
            />
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
            <SectionHeading
              number="04"
              eyebrow="Ubicación"
              title="Cerca de Valle de Guadalupe"
            />
            <div className="mt-8 space-y-4">
              <MapEmbed label={project.location} />
              <p className="text-sm leading-relaxed text-ink/60">
                En el entorno de la principal región vitivinícola de México:
                vino, gastronomía y turismo en consolidación como motor de
                plusvalía de la zona.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Ficha técnica + plano */}
      <section className="bg-sand/40 py-20 lg:py-28">
        <div className="container-tight grid gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <SectionHeading
              number="05"
              eyebrow="Hoja de proyecto"
              title="La información, como en un plano"
            />
            <div className="mt-10">
              <TechSheet rows={techSheetRows} sheetCode="Hoja MDV·01" />
            </div>
          </div>
          <div className="flex flex-col">
            <SectionHeading eyebrow="Plano" title="Trazo del proyecto" />
            <div className="relative mt-10 flex flex-1 flex-col justify-center border border-dashed border-stone/40 bg-card p-8">
              <CornerMarks />
              <p className="text-xs font-medium uppercase tracking-[0.16em] text-copper">
                Plano de lotificación
              </p>
              <p className="mt-3 max-w-md text-sm leading-relaxed text-ink/65">
                [PLACEHOLDER: plano de lotificación de Mirador del Valle
                pendiente de cargar. La plataforma está preparada para mostrar el
                plano y la disponibilidad por lote.]
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Disponibilidad */}
      <section className="py-20 lg:py-24">
        <div className="container-tight">
          <SectionHeading
            number="06"
            eyebrow="Disponibilidad"
            title="Lotes del proyecto"
            description="La disponibilidad puntual se confirma al solicitar información. Preparado para mostrar lotes en vivo desde la base de datos."
          />
          <div className="mt-10">
            <ProjectAvailabilityPreview projectSlug={project.slug} />
          </div>
        </div>
      </section>

      {/* Proceso de compra */}
      <section className="bg-sand/40 py-20 lg:py-24">
        <div className="container-tight">
          <SectionHeading
            number="07"
            eyebrow="Proceso de compra"
            title="Cuatro pasos, sin letras pequeñas"
            description="Un proceso claro y acompañado, de la primera llamada a la formalización."
          />
          <div className="mt-14">
            <ProcessTimeline steps={purchaseSteps} phaseLabel="Paso" />
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="grain relative bg-carbon py-20 text-bone lg:py-28">
        <div className="container-tight relative z-[2] grid gap-12 lg:grid-cols-[0.85fr_1.15fr]">
          <SectionHeading
            tone="dark"
            number="08"
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
      <section className="grain relative overflow-hidden bg-olive py-16 text-bone">
        <div className="container-tight relative z-[2] flex flex-col items-center gap-6 text-center">
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
