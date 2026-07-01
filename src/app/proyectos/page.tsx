import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { ProjectCard } from "@/components/project-card";
import { EmptyState } from "@/components/states";
import { CTASection } from "@/components/cta-section";
import { buildMetadata } from "@/lib/seo";
import { projects } from "@/lib/projects";

export const metadata: Metadata = buildMetadata({
  title: "Proyectos",
  description:
    "Proyectos inmobiliarios de tierra estructurados para inversión patrimonial, descanso y desarrollo futuro. Conoce Mirador del Valle.",
  path: "/proyectos",
});

export default function ProyectosPage() {
  return (
    <>
      <PageHero
        eyebrow="Proyectos"
        title="Oportunidades estructuradas de inversión en tierra"
        description="Cada proyecto está pensado como un activo de largo plazo: ubicación estratégica, producto claro y esquemas de financiamiento definidos."
      />

      <section className="py-20 lg:py-28">
        <div className="container-tight">
          {projects.length === 0 ? (
            <EmptyState
              title="Próximamente"
              description="Estamos preparando nuevos proyectos. Déjanos tus datos para ser de los primeros en conocerlos."
            />
          ) : (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {projects.map((project, i) => (
                <ProjectCard key={project.slug} project={project} index={i} />
              ))}
            </div>
          )}

          <p className="mt-12 max-w-2xl text-sm leading-relaxed text-ink/60">
            La plataforma está preparada para incorporar nuevos proyectos y
            etapas de lotificación conforme se desarrollen.
          </p>
        </div>
      </section>

      <CTASection
        title="¿Buscas invertir o desarrollar tierra?"
        description="Conoce las oportunidades activas o conversemos sobre tu proyecto."
        primaryLabel="Solicitar información"
        primaryHref="/contacto"
        secondaryLabel="Tengo tierra"
        secondaryHref="/terratenientes"
      />
    </>
  );
}
