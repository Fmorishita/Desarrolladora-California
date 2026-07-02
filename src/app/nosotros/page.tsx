import type { Metadata } from "next";
import { Compass, Layers, ShieldCheck, TrendingUp } from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { SectionHeading } from "@/components/section-heading";
import { Reveal } from "@/components/motion/reveal";
import { CTASection } from "@/components/cta-section";
import { SitePhoto } from "@/components/site-photo";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Nosotros",
  description:
    "Urbanizadora y Desarrolladora California: planeación, viabilidad, urbanización y comercialización de proyectos inmobiliarios de tierra con visión patrimonial.",
  path: "/nosotros",
});

const values = [
  {
    icon: Compass,
    title: "Visión estratégica",
    description:
      "Leemos el potencial de cada terreno antes de actuar: ubicación, acceso, servicios, viabilidad y mercado.",
  },
  {
    icon: Layers,
    title: "Estructura operativa",
    description:
      "Integramos planeación, urbanización, lotificación y comercialización en un proceso ordenado.",
  },
  {
    icon: ShieldCheck,
    title: "Confianza patrimonial",
    description:
      "Tratamos la tierra como un activo de largo plazo y a los propietarios como socios.",
  },
  {
    icon: TrendingUp,
    title: "Orientación a resultados",
    description:
      "Desarrollamos proyectos pensados para convertirse en activos comercializables.",
  },
];

export default function NosotrosPage() {
  return (
    <>
      <PageHero
        eyebrow="Quiénes somos"
        title="Una desarrolladora enfocada en transformar tierra en valor"
        description="Urbanizadora y Desarrolladora California, S.A. de C.V. participa en el desarrollo de proyectos inmobiliarios de tierra: planeación, urbanización, lotificación, comercialización y asociación con propietarios."
      />

      <section className="py-20 lg:py-28">
        <div className="container-tight grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <SectionHeading
              eyebrow="Filosofía"
              title="Transformamos tierra con potencial en proyectos estructurados"
            />
            <div className="mt-6 space-y-4 text-ink/70">
              <p className="leading-relaxed">
                No solo urbanizamos. Estructuramos oportunidades. Acompañamos a
                propietarios, inversionistas y socios en el proceso de convertir
                tierra con potencial en activos con valor patrimonial.
              </p>
              <p className="leading-relaxed">
                Cada terreno requiere una lectura distinta. Antes de proponer un
                camino evaluamos seis variables: ubicación, acceso, servicios,
                situación legal, viabilidad y mercado. De esa lectura depende el
                modelo —asociación, desarrollo, urbanización o comercialización—
                y no al revés.
              </p>
            </div>
          </div>

          <div>
            <SectionHeading
              eyebrow="Modelo de trabajo"
              title="Planeación, viabilidad, urbanización y comercialización"
            />
            <div className="mt-6 space-y-4 text-ink/70">
              <p className="leading-relaxed">
                Operamos en dos frentes. En el primero desarrollamos proyectos
                propios o asociados: estructuramos, urbanizamos, lotificamos y
                comercializamos. En el segundo trabajamos con propietarios de
                tierra que buscan convertir un predio en un proyecto rentable sin
                asumir por su cuenta la planeación, los permisos ni la venta.
              </p>
              <p className="leading-relaxed">
                En ambos casos el método es el mismo: evaluar el potencial,
                estructurar un proyecto viable y acompañar su desarrollo hasta
                convertirlo en un activo comercializable.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Franja visual */}
      <section className="container-tight pb-20 lg:pb-28">
        <div className="grid gap-4 sm:grid-cols-2">
          <Reveal>
            <SitePhoto
              id="nosotros-1"
              aspect="aspect-[16/10]"
              width={900}
              label="Planeación"
            />
          </Reveal>
          <Reveal index={1}>
            <SitePhoto
              id="nosotros-2"
              aspect="aspect-[16/10]"
              width={900}
              label="Ejecución"
            />
          </Reveal>
        </div>
      </section>

      <section className="bg-sand/40 py-20 lg:py-28">
        <div className="container-tight">
          <SectionHeading
            eyebrow="Valores"
            title="Los principios que guían cada proyecto"
          />
          <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v, i) => (
              <Reveal as="article" index={i} key={v.title} className="h-full">
                <div className="flex h-full flex-col rounded-lg border border-border/70 bg-card p-7">
                  <span className="flex size-11 items-center justify-center rounded-md bg-olive/10 text-olive">
                    <v.icon className="size-5" />
                  </span>
                  <h3 className="mt-6 font-display text-lg text-ink">{v.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-ink/65">
                    {v.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Conversemos sobre tu tierra o tu proyecto"
        description="Ya sea que tengas un terreno con potencial o busques asociarte, podemos ayudarte a estructurar la oportunidad."
        primaryLabel="Solicitar diagnóstico"
        primaryHref="/terratenientes"
        secondaryLabel="Contactar"
        secondaryHref="/contacto"
      />
    </>
  );
}
