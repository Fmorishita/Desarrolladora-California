import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { HomeHero } from "@/components/home/home-hero";
import { ThreePaths } from "@/components/home/three-paths";
import { EditorialBand } from "@/components/home/editorial-band";
import { DisciplinesMarquee } from "@/components/marquee";
import { SectionHeading } from "@/components/section-heading";
import { ServiceCard } from "@/components/service-card";
import { ProcessTimeline } from "@/components/process-timeline";
import { ProjectCard } from "@/components/project-card";
import { FAQAccordion } from "@/components/faq-accordion";
import { CTASection } from "@/components/cta-section";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/motion/reveal";
import { TopographicBackground } from "@/components/topographic-background";
import { FaqJsonLd } from "@/components/seo/json-ld";
import { SitePhoto } from "@/components/site-photo";
import { PhotoMosaic } from "@/components/photo-mosaic";
import { services, processSteps, differentiators, homeFaqs } from "@/lib/content";
import { getFeaturedProjects } from "@/lib/projects";

export default function HomePage() {
  const featured = getFeaturedProjects();

  return (
    <>
      <FaqJsonLd items={homeFaqs} />
      <HomeHero />
      <ThreePaths />
      <div className="mt-20 lg:mt-24">
        <DisciplinesMarquee />
      </div>

      {/* Servicios */}
      <section className="topo-lines py-20 lg:py-28">
        <div className="container-tight">
          <div className="grid items-end gap-10 lg:grid-cols-[1.4fr_1fr]">
            <SectionHeading
              number="01"
              eyebrow="Qué hacemos"
              title="Del potencial de la tierra al proyecto comercializable"
              description="Integramos planeación, urbanización, lotificación y comercialización para transformar tierra con potencial en activos urbanizados y comercializables."
            />
            <Reveal index={2} className="hidden lg:block">
              <SitePhoto
                id="services-side"
                aspect="aspect-[4/3]"
                width={800}
                label="Planeación"
              />
            </Reveal>
          </div>
          <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {services.slice(0, 6).map((s, i) => (
              <ServiceCard
                key={s.slug}
                icon={s.icon}
                title={s.title}
                description={s.short}
                href={`/servicios#${s.slug}`}
                index={i}
              />
            ))}
          </div>
          <Reveal index={2}>
            <div className="mt-10">
              <Button asChild variant="outline">
                <Link href="/servicios">
                  Ver todos los servicios
                  <ArrowRight className="size-4" />
                </Link>
              </Button>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Proceso */}
      <section className="bg-sand/40 py-20 lg:py-28">
        <div className="container-tight">
          <SectionHeading
            number="02"
            eyebrow="Cómo trabajamos"
            title="Un proceso ordenado para desarrollar tierra"
            description="Cada terreno requiere una lectura distinta. Nuestro enfoque combina planeación, estructura operativa y visión de largo plazo."
          />
          <div className="mt-14">
            <ProcessTimeline steps={processSteps} />
          </div>
        </div>
      </section>

      {/* Bloque propietarios */}
      <section className="grain relative overflow-hidden bg-olive text-bone">
        <TopographicBackground variant="dark" />
        <div className="container-tight relative z-[2] grid items-center gap-12 py-20 lg:grid-cols-2 lg:py-28">
          <div>
            <Reveal>
              <span className="eyebrow">
                <span className="h-px w-6 bg-copper" />
                Para propietarios de tierra
              </span>
            </Reveal>
            <Reveal index={1}>
              <h2 className="mt-5 text-balance text-3xl leading-tight sm:text-4xl lg:text-[2.75rem]">
                Si tienes tierra con potencial, podemos ayudarte a convertirla en
                un proyecto rentable.
              </h2>
            </Reveal>
            <Reveal index={2}>
              <p className="mt-6 max-w-xl leading-relaxed text-bone/75">
                Evaluamos tu terreno de forma privada y profesional, sin que
                pierdas el control de tu propiedad. Te ayudamos a entender qué
                modelo te conviene: asociarte, desarrollar, urbanizar o
                comercializar.
              </p>
            </Reveal>
            <Reveal index={3}>
              <div className="mt-9">
                <Button asChild variant="copper" size="lg">
                  <Link href="/terratenientes">
                    Solicitar diagnóstico privado de mi terreno
                    <ArrowRight className="size-4" />
                  </Link>
                </Button>
              </div>
            </Reveal>
          </div>
          <div className="space-y-4">
            {[
              "No sabes si tu terreno tiene potencial: lo evaluamos.",
              "No quieres perder control de tu propiedad: definimos modelos que lo respetan.",
              "No quieres encargarte de permisos, planeación o ventas: nosotros lo estructuramos.",
              "No sabes qué modelo te conviene: analizamos las opciones contigo.",
            ].map((item, i) => (
              <Reveal as="div" index={i} key={i}>
                <div className="flex items-start gap-3 rounded-lg border border-bone/15 bg-bone/5 p-5">
                  <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-copper" />
                  <p className="text-sm leading-relaxed text-bone/85">{item}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* El territorio */}
      <section className="py-20 lg:py-28">
        <div className="container-tight">
          <SectionHeading
            number="03"
            eyebrow="El territorio"
            title="Tierra, obra y resultado"
            description="Del terreno en evaluación a la obra de urbanización y el proyecto terminado. Estas imágenes se reemplazarán por fotografía propia de la desarrolladora."
          />
          <div className="mt-12">
            <PhotoMosaic
              items={[
                { id: "territory-1", label: "Terreno" },
                { id: "territory-2", label: "Vistas" },
                { id: "territory-3", label: "Urbanización" },
                { id: "territory-4", label: "Resultado" },
              ]}
            />
          </div>
        </div>
      </section>

      {/* Proyectos destacados */}
      <section className="bg-sand/40 py-20 lg:py-28">
        <div className="container-tight">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <SectionHeading
              number="04"
              eyebrow="Proyectos"
              title="Oportunidades activas"
              description="Proyectos estructurados de inversión patrimonial, descanso y desarrollo futuro."
            />
            <Reveal index={2}>
              <Button asChild variant="outline">
                <Link href="/proyectos">Ver todos</Link>
              </Button>
            </Reveal>
          </div>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {featured.map((project, i) => (
              <ProjectCard key={project.slug} project={project} index={i} />
            ))}
          </div>
        </div>
      </section>

      <EditorialBand />

      {/* Por qué */}
      <section className="grain relative bg-carbon py-20 text-bone lg:py-28">
        <div className="container-tight relative z-[2]">
          <SectionHeading
            tone="dark"
            number="05"
            eyebrow="Por qué California"
            title="Estructura, visión y capacidad de ejecución"
            description="No solo urbanizamos. Estructuramos oportunidades y acompañamos su desarrollo hasta convertirlas en activos comercializables."
          />
          <div className="mt-14 grid gap-px overflow-hidden rounded-lg border border-bone/12 bg-bone/12 sm:grid-cols-2 lg:grid-cols-4">
            {differentiators.map((d, i) => (
              <Reveal index={i} key={i} className="bg-carbon p-7">
                <span className="font-display text-2xl text-copper">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-4 font-display text-xl text-bone">{d.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-bone/65">
                  {d.description}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 lg:py-28">
        <div className="container-tight grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <SectionHeading
            number="06"
            eyebrow="Preguntas frecuentes"
            title="Lo esencial, claro y directo"
          />
          <div>
            <FAQAccordion items={homeFaqs} />
          </div>
        </div>
      </section>

      <CTASection
        eyebrow="Siguiente paso"
        title="Convierte tu tierra en un proyecto estructurado y rentable"
        description="Solicita un diagnóstico privado o conversemos sobre tu proyecto. Sin compromiso y con total confidencialidad."
        primaryLabel="Solicitar diagnóstico privado"
        primaryHref="/terratenientes"
        secondaryLabel="Contactar al equipo"
        secondaryHref="/contacto"
      />
    </>
  );
}
