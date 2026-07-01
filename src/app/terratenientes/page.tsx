import Link from "next/link";
import type { Metadata } from "next";
import {
  CheckCircle2,
  Handshake,
  Building2,
  Ruler,
  LineChart,
  HardHat,
  ShieldCheck,
} from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { SectionHeading } from "@/components/section-heading";
import { ProcessTimeline } from "@/components/process-timeline";
import { FAQAccordion } from "@/components/faq-accordion";
import { LandownerForm } from "@/components/forms/landowner-form";
import { Reveal } from "@/components/motion/reveal";
import { Button } from "@/components/ui/button";
import { buildMetadata } from "@/lib/seo";
import { whatsappUrl } from "@/lib/site";

export const metadata: Metadata = buildMetadata({
  title: "Desarrolla tus Hectáreas",
  description:
    "Evalúa el potencial de tu terreno o hectáreas. Te ayudamos a estructurar, urbanizar, lotificar y comercializar proyectos de tierra.",
  path: "/terratenientes",
});

const collaborationModels = [
  {
    icon: Handshake,
    title: "Asociación estratégica",
    description:
      "Participas del desarrollo de tu tierra sin necesariamente venderla, con acuerdos claros y alineados.",
  },
  {
    icon: Building2,
    title: "Desarrollo y operación",
    description:
      "Estructuramos y operamos el proyecto de principio a fin sobre tu propiedad.",
  },
  {
    icon: Ruler,
    title: "Urbanización y lotificación",
    description:
      "Habilitamos la tierra y diseñamos el producto comercializable por etapas.",
  },
  {
    icon: LineChart,
    title: "Comercialización",
    description:
      "Llevamos tu proyecto al mercado con estrategia comercial y seguimiento estructurado.",
  },
  {
    icon: HardHat,
    title: "Ejecución como constructora",
    description:
      "Ejecutamos la obra e infraestructura que el proyecto requiere.",
  },
];

const evaluableLand = [
  "Hectáreas o parcelas con potencial de desarrollo",
  "Ranchos o predios cercanos a zonas en crecimiento",
  "Terrenos con acceso o cerca de vías y servicios",
  "Propiedades con vocación turística, patrimonial o residencial",
];

const objections = [
  {
    q: "No sé si mi terreno tiene potencial.",
    a: "Realizamos una lectura del predio —ubicación, acceso, servicios, viabilidad y mercado— para determinar objetivamente su potencial de desarrollo.",
  },
  {
    q: "No quiero perder el control de mi propiedad.",
    a: "Existen modelos de colaboración que respetan tu propiedad. La asociación estratégica te permite participar del desarrollo sin necesariamente vender.",
  },
  {
    q: "No quiero encargarme de permisos, planeación o ventas.",
    a: "Nos encargamos de estructurar el proyecto: planeación, urbanización, lotificación y comercialización. Tú participas en las decisiones clave.",
  },
  {
    q: "No sé qué modelo me conviene.",
    a: "Precisamente eso resolvemos en el diagnóstico: analizamos contigo las opciones —asociación, desarrollo, urbanización o comercialización— y su implicación.",
  },
  {
    q: "Quiero evaluar opciones de forma privada.",
    a: "El diagnóstico es privado y confidencial. La información de tu terreno se trata con discreción profesional.",
  },
];

const diagnosisSteps = [
  {
    title: "Compartes tu terreno",
    description:
      "Nos envías los datos básicos de tu propiedad mediante el formulario privado.",
  },
  {
    title: "Evaluación",
    description:
      "Analizamos ubicación, acceso, servicios, situación legal y potencial de mercado.",
  },
  {
    title: "Propuesta de modelo",
    description:
      "Te presentamos el o los modelos de colaboración más adecuados para tu caso.",
  },
  {
    title: "Siguiente paso",
    description:
      "Definimos juntos la ruta: estructuración, desarrollo o comercialización.",
  },
];

export default function TerratenientesPage() {
  const wa = whatsappUrl("landowner");

  return (
    <>
      <PageHero
        eyebrow="Para propietarios de tierra"
        title={
          <>
            Convierte tus hectáreas en un{" "}
            <span className="text-copper">proyecto rentable</span>.
          </>
        }
        description="Si tienes tierra con potencial, podemos ayudarte a estructurarla, urbanizarla, lotificarla y comercializarla. Evalúa su potencial de forma privada y profesional."
      >
        <div className="flex flex-col gap-3 sm:flex-row">
          <Button asChild variant="copper" size="lg">
            <Link href="#diagnostico">Solicitar diagnóstico privado</Link>
          </Button>
          {wa && (
            <Button
              asChild
              size="lg"
              className="border border-bone/25 bg-transparent text-bone hover:bg-bone/10"
            >
              <a href={wa} target="_blank" rel="noopener noreferrer">
                Escribir por WhatsApp
              </a>
            </Button>
          )}
        </div>
      </PageHero>

      {/* Para quién / qué evaluamos */}
      <section className="py-20 lg:py-28">
        <div className="container-tight grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <SectionHeading
              eyebrow="Para quién es"
              title="Propietarios de terrenos o hectáreas con potencial"
              description="Pensado para quien tiene tierra pero no necesariamente la estructura, el capital o la experiencia para desarrollarla."
            />
          </div>
          <div className="space-y-3 lg:pt-4">
            {evaluableLand.map((item, i) => (
              <Reveal as="div" index={i} key={i}>
                <div className="flex items-start gap-3 rounded-lg border border-border/70 bg-card p-5">
                  <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-olive" />
                  <p className="text-sm leading-relaxed text-ink/75">{item}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Cómo funciona el diagnóstico */}
      <section className="bg-sand/40 py-20 lg:py-28">
        <div className="container-tight">
          <SectionHeading
            eyebrow="Cómo funciona"
            title="Un diagnóstico privado, en cuatro pasos"
            description="Sin costo y sin compromiso. El objetivo es darte claridad sobre el potencial de tu tierra y las opciones disponibles."
          />
          <div className="mt-14">
            <ProcessTimeline steps={diagnosisSteps} />
          </div>
        </div>
      </section>

      {/* Modelos de colaboración */}
      <section className="py-20 lg:py-28">
        <div className="container-tight">
          <SectionHeading
            eyebrow="Modelos de colaboración"
            title="Distintas formas de desarrollar tu tierra"
            description="El modelo se ajusta a tu propiedad y a tus objetivos. Estas son las principales vías de colaboración."
          />
          <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {collaborationModels.map((m, i) => (
              <Reveal as="article" index={i} key={m.title} className="h-full">
                <div className="flex h-full flex-col rounded-lg border border-border/70 bg-card p-7">
                  <span className="flex size-11 items-center justify-center rounded-md bg-olive/10 text-olive">
                    <m.icon className="size-5" />
                  </span>
                  <h3 className="mt-6 font-display text-xl text-ink">{m.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-ink/65">
                    {m.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Objeciones */}
      <section className="bg-carbon py-20 text-bone lg:py-28">
        <div className="container-tight grid gap-12 lg:grid-cols-[0.85fr_1.15fr]">
          <SectionHeading
            tone="dark"
            eyebrow="Resolvemos tus dudas"
            title="Lo que probablemente te estás preguntando"
            description="Las inquietudes más comunes de un propietario, respondidas con claridad."
          />
          <div>
            <FAQAccordion items={objections} tone="dark" />
          </div>
        </div>
      </section>

      {/* Formulario */}
      <section id="diagnostico" className="scroll-mt-24 py-20 lg:py-28">
        <div className="container-tight">
          <div className="mx-auto max-w-3xl">
            <SectionHeading
              align="center"
              eyebrow="Diagnóstico privado"
              title="Solicita la evaluación de tu terreno"
              description="Completa la información de tu propiedad. El equipo la revisará para evaluar el tipo de oportunidad y el siguiente paso más adecuado."
              className="mx-auto"
            />
            <div className="mt-12 rounded-xl border border-border/70 bg-card p-6 shadow-sm sm:p-9">
              <LandownerForm />
            </div>
            <p className="mt-6 flex items-center justify-center gap-2 text-center text-xs text-ink/55">
              <ShieldCheck className="size-4 text-olive" />
              Información tratada de forma privada y confidencial.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
