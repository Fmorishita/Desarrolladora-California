import {
  MapPin,
  Grape,
  TrendingUp,
  Home,
  CalendarClock,
  ShieldCheck,
  ArrowDown,
  Tent,
  Ticket,
  KeyRound,
} from "lucide-react";
import { HorizonArcs } from "@/components/horizon-arcs";
import { Reveal } from "@/components/reveal";
import { Calculator } from "@/components/calculator";
import { InterestForm } from "@/components/interest-form";
import { FAQ } from "@/components/faq";
import { faqs } from "@/lib/faqs";
import { Testimonials } from "@/components/testimonials";
import { FloatingCTA } from "@/components/floating-cta";
import { site, project, whatsappUrl } from "@/lib/site";

const U = "https://images.unsplash.com/photo-";
const img = (id: string, w = 1600) => `${U}${id}?auto=format&fit=crop&w=${w}&q=70`;

/* Placeholders verificados — reemplazar por fotografía real del proyecto. */
const IMAGES = {
  hero: img("1500382017468-9049fed747ef", 2000),
  valle: img("1500534314209-a25ddb2bd429", 1000),
  g1: img("1472214103451-9374bd1c798e", 900),
  g2: img("1444927714506-8492d94b4e3d", 900),
  g3: img("1523217582562-09d0def993a6", 900),
  g4: img("1470071459604-3b5ec3a7fe05", 1400),
};

function Provisional() {
  return (
    <span className="absolute bottom-3 right-3 rounded-full bg-dusk/60 px-2.5 py-0.5 text-[0.58rem] uppercase tracking-[0.14em] text-cream/80 backdrop-blur-sm">
      Imagen ilustrativa
    </span>
  );
}

function SectionTitle({
  eyebrow,
  title,
  description,
  tone = "light",
  center,
}: {
  eyebrow: string;
  title: React.ReactNode;
  description?: string;
  tone?: "light" | "dark";
  center?: boolean;
}) {
  return (
    <div className={`max-w-2xl ${center ? "mx-auto text-center" : ""}`}>
      <Reveal>
        <span className={`eyebrow ${center ? "justify-center" : ""}`}>
          <span className="bar" />
          {eyebrow}
        </span>
      </Reveal>
      <Reveal index={1}>
        <h2 className={`mt-4 text-3xl leading-[1.12] sm:text-4xl ${tone === "dark" ? "text-cream" : "text-dusk"}`}>
          {title}
        </h2>
      </Reveal>
      {description && (
        <Reveal index={2}>
          <p className={`mt-5 leading-relaxed ${tone === "dark" ? "text-cream/70" : "text-cocoa"}`}>
            {description}
          </p>
        </Reveal>
      )}
    </div>
  );
}

export default function Page() {
  const wa = whatsappUrl();

  return (
    <main>
      <FloatingCTA />

      {/* ── HERO ─────────────────────────────────────────────── */}
      <section className="grain relative flex min-h-dvh flex-col overflow-hidden bg-dusk text-cream">
        <img
          src={IMAGES.hero}
          alt="Campo dorado al atardecer, representativo del entorno del proyecto"
          className="absolute inset-0 h-full w-full object-cover opacity-45"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-dusk/60 via-dusk/45 to-dusk" />
        <HorizonArcs tone="dark" className="z-[1]" />

        {/* Nav mínima */}
        <header className="container-site relative z-[2] flex items-center justify-between pt-7">
          <p className="font-display text-xl tracking-tight">
            Mirador <span className="accent-italic text-gold">del Valle</span>
          </p>
          <a href="#contacto" className="hidden h-10 items-center rounded-full border border-cream/30 px-5 text-sm font-medium transition-colors hover:bg-cream/10 sm:inline-flex">
            Solicitar información
          </a>
        </header>

        <div className="container-site relative z-[2] flex flex-1 flex-col justify-center py-20">
          <div className="max-w-3xl">
            <Reveal>
              <span className="eyebrow">
                <span className="bar" />
                Terrenos cerca de Valle de Guadalupe · Baja California
              </span>
            </Reveal>
            <Reveal index={1}>
              <h1 className="mt-6 text-[2.6rem] leading-[1.04] sm:text-6xl lg:text-[4.4rem]">
                Tu terreno frente al valle,{" "}
                <span className="accent-italic text-gold">desde US$45/m²</span>
              </h1>
            </Reveal>
            <Reveal index={2}>
              <p className="mt-7 max-w-xl text-lg leading-relaxed text-cream/80">
                {site.tagline} Enganche del 10% al 20% y financiamiento hasta 8 años,
                <strong className="text-gold"> sin intereses</strong>.
              </p>
            </Reveal>
            <Reveal index={3}>
              <div className="mt-10 flex flex-col gap-3 sm:flex-row">
                <a href="#cotizador" className="btn-primary">
                  Cotizar mi terreno
                </a>
                <a href="#contacto" className="btn-ghost-light">
                  Agendar recorrido
                </a>
              </div>
            </Reveal>
          </div>

          {/* Franja de datos */}
          <Reveal index={4}>
            <div className="mt-16 grid grid-cols-2 gap-6 border-t border-cream/15 pt-6 sm:grid-cols-4">
              {[
                { v: "≈1,000 m²", l: "por terreno" },
                { v: "10–20%", l: "de enganche" },
                { v: "8 años", l: "de financiamiento sin intereses" },
                { v: "4 min", l: "de Arena Valle de Guadalupe" },
              ].map((s) => (
                <div key={s.l}>
                  <p className="font-display text-2xl text-gold">{s.v}</p>
                  <p className="mt-0.5 text-xs uppercase tracking-[0.14em] text-cream/60">{s.l}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>

        <a
          href="#valle"
          aria-label="Bajar al contenido"
          className="absolute bottom-6 left-1/2 z-[2] hidden -translate-x-1/2 text-cream/50 transition-colors hover:text-cream lg:block"
        >
          <ArrowDown className="size-5 animate-bounce" />
        </a>
      </section>

      {/* ── DISPONIBILIDAD BANNER ────────────────────────────── */}
      <section className="border-b border-cocoa/15 bg-blush">
        <div className="container-site flex flex-wrap items-center justify-center gap-x-10 gap-y-3 py-5 text-center">
          <p className="text-sm text-cocoa">
            <strong className="font-display text-lg text-dusk">{project.totalLots}</strong> terrenos totales
          </p>
          <span className="hidden h-4 w-px bg-cocoa/25 sm:block" />
          <p className="text-sm text-cocoa">
            <strong className="font-display text-lg text-clay">{project.soldLots} vendidos</strong> en {project.soldMonths} meses
          </p>
          <span className="hidden h-4 w-px bg-cocoa/25 sm:block" />
          <p className="text-sm text-cocoa">
            <strong className="font-display text-lg text-vine">≈{project.availableLots} disponibles</strong> hoy
          </p>
        </div>
      </section>

      {/* ── ¿POR QUÉ EL VALLE? ───────────────────────────────── */}
      <section id="valle" className="scroll-mt-16 py-20 lg:py-28">
        <div className="container-site grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <SectionTitle
              eyebrow="El entorno"
              title={
                <>
                  A minutos de la región del <span className="accent-italic text-clay">vino</span>
                </>
              }
              description="Valle de Guadalupe es la principal región vitivinícola de México y un polo gastronómico y turístico en consolidación. Ese contexto — vino, gastronomía y visitantes en aumento — es el motor de demanda y plusvalía de la zona."
            />
            <div className="mt-9 grid gap-4 sm:grid-cols-3">
              {[
                { icon: Grape, t: "Vocación turística", d: "Vinícolas, gastronomía y hospitalidad" },
                { icon: TrendingUp, t: "Zona en crecimiento", d: "Demanda y visitantes en aumento" },
                { icon: MapPin, t: "Acceso inmediato", d: "≈4 min de Arena Valle de Guadalupe" },
              ].map((c, i) => (
                <Reveal key={c.t} index={i}>
                  <div className="rounded-xl border border-cocoa/15 bg-white/50 p-5">
                    <c.icon className="size-5 text-clay" />
                    <p className="mt-3 font-display text-base text-dusk">{c.t}</p>
                    <p className="mt-1 text-xs leading-relaxed text-cocoa">{c.d}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
          <Reveal index={2}>
            <figure className="relative overflow-hidden rounded-2xl">
              <img src={IMAGES.valle} alt="Colinas del valle al atardecer" className="aspect-[4/3] w-full object-cover" loading="lazy" />
              <Provisional />
            </figure>
          </Reveal>
        </div>
      </section>

      {/* ── ARENA VALLE DE GUADALUPE ─────────────────────────── */}
      <section className="grain relative overflow-hidden bg-vine py-20 text-cream lg:py-28">
        <HorizonArcs tone="dark" />
        <div className="container-site relative z-[2]">
          <div className="max-w-3xl">
            <Reveal>
              <span className="eyebrow">
                <span className="bar" />A 4 minutos de Arena Valle de Guadalupe
              </span>
            </Reveal>
            <Reveal index={1}>
              <h2 className="mt-4 text-3xl leading-[1.12] text-cream sm:text-4xl">
                Junto al epicentro de{" "}
                <span className="accent-italic text-gold">los grandes eventos</span> del valle
              </h2>
            </Reveal>
            <Reveal index={2}>
              <p className="mt-5 max-w-2xl leading-relaxed text-cream/75">
                Arena Valle de Guadalupe recibe conciertos y eventos que atraen a miles de
                visitantes. Estar a solo 4 minutos convierte a Mirador del Valle en un punto muy
                atractivo para quien quiere construir su cabaña de descanso — o invertir para rentar
                por Airbnb en cada temporada de eventos.
              </p>
            </Reveal>
          </div>
          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            {[
              { icon: Tent, t: "Construye tu cabaña", d: "Tu escape de fin de semana a minutos del valle y sus vinícolas." },
              { icon: KeyRound, t: "Renta por Airbnb", d: "Demanda de hospedaje impulsada por los eventos de la Arena." },
              { icon: Ticket, t: "Cerca de la acción", d: "Ubicación estratégica frente a uno de los polos de entretenimiento de la región." },
            ].map((c, i) => (
              <Reveal key={c.t} index={i}>
                <div className="h-full rounded-xl border border-cream/15 bg-cream/[0.06] p-6">
                  <c.icon className="size-5 text-gold" />
                  <p className="mt-4 font-display text-lg text-cream">{c.t}</p>
                  <p className="mt-2 text-sm leading-relaxed text-cream/70">{c.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── FINANCIAMIENTO + COTIZADOR ───────────────────────── */}
      <section id="cotizador" className="scroll-mt-16 bg-blush/60 py-20 lg:py-28">
        <div className="container-site">
          <SectionTitle
            eyebrow="Precio y financiamiento"
            title={
              <>
                Un precio claro, <span className="accent-italic text-clay">sin intereses</span>
              </>
            }
            description="Precio único de US$45/m². Enganche del 10% al 20% y financiamiento directo hasta 8 años, con mensualidades fijas y sin intereses."
          />
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { v: "US$45/m²", l: "Precio único" },
              { v: "10–20%", l: "De enganche" },
              { v: "Hasta 8 años", l: "De financiamiento" },
              { v: "Sin intereses", l: "Mensualidades fijas" },
            ].map((p, i) => (
              <Reveal key={p.l} index={i}>
                <div className="h-full rounded-xl border border-cocoa/20 bg-white/60 p-6">
                  <p className="font-display text-2xl text-vine">{p.v}</p>
                  <p className="mt-2 text-xs uppercase tracking-[0.12em] text-cocoa">{p.l}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <div className="mt-10">
            <Reveal>
              <Calculator />
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── GALERÍA ──────────────────────────────────────────── */}
      <section className="py-20 lg:py-28">
        <div className="container-site">
          <SectionTitle
            eyebrow="El proyecto"
            title="Un terreno para imaginar lo que sigue"
            description="Inversión patrimonial, casa de descanso, proyecto turístico o desarrollo futuro. Imágenes ilustrativas — se reemplazarán por fotografía real del proyecto."
          />
          <div className="mt-12 grid gap-4 lg:grid-cols-12 lg:grid-rows-2">
            <Reveal className="lg:col-span-7 lg:row-span-2">
              <figure className="relative h-full overflow-hidden rounded-2xl">
                <img src={IMAGES.g4} alt="Vista amplia del valle" className="h-full min-h-[260px] w-full object-cover" loading="lazy" />
                <Provisional />
              </figure>
            </Reveal>
            {[
              { src: IMAGES.g1, alt: "Terreno con vegetación al amanecer" },
              { src: IMAGES.g2, alt: "Vistas hacia las montañas del valle" },
            ].map((g, i) => (
              <Reveal key={g.alt} index={i + 1} className="lg:col-span-5">
                <figure className="relative overflow-hidden rounded-2xl">
                  <img src={g.src} alt={g.alt} className="aspect-[16/9] w-full object-cover" loading="lazy" />
                  <Provisional />
                </figure>
              </Reveal>
            ))}
          </div>
          <div className="mt-4 grid gap-4 sm:grid-cols-3">
            {[
              { icon: TrendingUp, t: "Inversión patrimonial" },
              { icon: Home, t: "Casa de descanso" },
              { icon: Grape, t: "Proyecto turístico" },
            ].map((u, i) => (
              <Reveal key={u.t} index={i}>
                <div className="flex items-center gap-3 rounded-xl bg-blush/70 px-5 py-4">
                  <u.icon className="size-5 text-clay" />
                  <p className="text-sm font-medium text-dusk">{u.t}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── PLANO Y DISPONIBILIDAD ───────────────────────────── */}
      <section className="bg-blush/60 py-20 lg:py-24">
        <div className="container-site grid gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <SectionTitle
              eyebrow="Plano y disponibilidad"
              title="Elige tu lote con información clara"
              description="La disponibilidad puntual se confirma al solicitar información; el plano de lotificación se comparte en el recorrido."
            />
            <Reveal index={2}>
              <div className="mt-8 rounded-2xl border border-dashed border-cocoa/35 bg-white/50 p-7">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-clay">Plano de lotificación</p>
                <p className="mt-2 text-sm leading-relaxed text-cocoa">
                  [PLACEHOLDER: plano del proyecto pendiente de cargar. La plataforma está preparada
                  para mostrar el plano y la disponibilidad por lote.]
                </p>
              </div>
            </Reveal>
          </div>
          <div>
            <Reveal>
              {site.mapsEmbedUrl ? (
                <div className="aspect-[4/3] overflow-hidden rounded-2xl border border-cocoa/20">
                  <iframe
                    src={site.mapsEmbedUrl}
                    title="Mapa de ubicación de Mirador del Valle"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="h-full w-full border-0"
                    allowFullScreen
                  />
                </div>
              ) : (
                <div className="flex aspect-[4/3] flex-col items-center justify-center gap-3 rounded-2xl border border-dashed border-cocoa/35 bg-white/50 text-center">
                  <MapPin className="size-7 text-clay" />
                  <div>
                    <p className="font-display text-lg text-dusk">Cerca de Valle de Guadalupe, B.C.</p>
                    <p className="mt-1 text-sm text-cocoa">[PLACEHOLDER: mapa pendiente de configurar]</p>
                  </div>
                </div>
              )}
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── PROCESO ──────────────────────────────────────────── */}
      <section className="py-20 lg:py-24">
        <div className="container-site">
          <SectionTitle
            eyebrow="Proceso de compra"
            title="Cuatro pasos, sin letras pequeñas"
          />
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { t: "Solicita información", d: "Por el formulario o WhatsApp. Te compartimos detalles, disponibilidad y esquemas de pago." },
              { t: "Recorre el proyecto", d: "Agenda una visita para conocer el terreno y el entorno del valle." },
              { t: "Elige y aparta tu lote", d: "Seleccionas el lote y el esquema de financiamiento que mejor se ajuste." },
              { t: "Formaliza tu compra", d: "Acompañamos la contratación con claridad y documentación ordenada." },
            ].map((s, i) => (
              <Reveal key={s.t} index={i}>
                <div className="border-t-2 border-clay pt-5">
                  <span className="font-display text-2xl text-clay">{String(i + 1).padStart(2, "0")}</span>
                  <h3 className="mt-2 font-display text-lg text-dusk">{s.t}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-cocoa">{s.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIOS ──────────────────────────────────────── */}
      <section className="bg-blush/60 py-20 lg:py-28">
        <div className="container-site">
          <SectionTitle
            eyebrow="Clientes"
            title="Quienes ya eligieron el valle"
            description="Tres motivos, un mismo proyecto: descanso, inversión y confianza."
          />
          <div className="mt-12">
            <Testimonials />
          </div>
        </div>
      </section>

      {/* ── FAQ (oscuro) ─────────────────────────────────────── */}
      <section className="grain relative overflow-hidden bg-dusk py-20 text-cream lg:py-28">
        <HorizonArcs tone="dark" />
        <div className="container-site relative z-[2] grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <SectionTitle
            tone="dark"
            eyebrow="Preguntas frecuentes"
            title="Todo lo que necesitas saber"
          />
          <FAQ />
        </div>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: faqs.map((f) => ({
                "@type": "Question",
                name: f.q,
                acceptedAnswer: { "@type": "Answer", text: f.a },
              })),
            }),
          }}
        />
      </section>

      {/* ── FORMULARIO ───────────────────────────────────────── */}
      <section id="contacto" className="scroll-mt-16 py-20 lg:py-28">
        <div className="container-site grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          <div>
            <SectionTitle
              eyebrow="Solicita información"
              title="Recibe detalles, disponibilidad y financiamiento"
              description="Déjanos tus datos y te contactaremos para compartir la información del proyecto y resolver tus dudas."
            />
            <Reveal index={2}>
              <div className="mt-8 flex items-start gap-3 rounded-xl border border-gold/40 bg-gold/10 p-5">
                <CalendarClock className="mt-0.5 size-5 shrink-0 text-clay" />
                <p className="text-sm leading-relaxed text-dusk/85">
                  ¿Prefieres conocerlo en persona? Marca la casilla de recorrido en el formulario y coordinamos tu visita.
                </p>
              </div>
            </Reveal>
            <Reveal index={3}>
              <div className="mt-4 flex items-start gap-3 rounded-xl bg-blush/70 p-5">
                <ShieldCheck className="mt-0.5 size-5 shrink-0 text-vine" />
                <p className="text-sm leading-relaxed text-dusk/85">
                  Proyecto desarrollado por <strong>{site.developer}</strong>, con respaldo de {site.legalBacker}
                </p>
              </div>
            </Reveal>
          </div>
          <Reveal>
            <div className="rounded-2xl border border-cocoa/20 bg-white/60 p-6 shadow-sm sm:p-9">
              <InterestForm />
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── FOOTER ───────────────────────────────────────────── */}
      <footer className="grain relative overflow-hidden bg-dusk pt-14 text-cream">
        <HorizonArcs tone="dark" />
        <div className="container-site relative z-[2]">
          <div className="flex flex-col items-start justify-between gap-8 sm:flex-row sm:items-center">
            <div>
              <p className="font-display text-2xl">
                Mirador <span className="accent-italic text-gold">del Valle</span>
              </p>
              <p className="mt-2 max-w-sm text-sm text-cream/60">{site.tagline}</p>
            </div>
            <div className="flex gap-3">
              <a href="#cotizador" className="btn-ghost-light !h-10 !px-5 text-xs">Cotizador</a>
              {wa && (
                <a href={wa} target="_blank" rel="noopener noreferrer" className="btn-primary !h-10 !px-5 text-xs">
                  WhatsApp
                </a>
              )}
            </div>
          </div>
          <div className="mt-10 flex flex-col items-center gap-1 border-t border-cream/12 pt-8 text-center">
            <p className="text-xs uppercase tracking-[0.2em] text-cream/45">Desarrollado por</p>
            <p className="font-display text-2xl text-gold">{site.developer}</p>
          </div>
          <div className="mt-6 flex flex-col gap-2 border-t border-cream/10 py-6 text-xs text-cream/45 sm:flex-row sm:items-center sm:justify-between">
            <p>
              © {new Date().getFullYear()} Mirador del Valle · Proyecto de {site.developer}. Con
              respaldo de {site.legalBacker}
            </p>
            <p>Precios y disponibilidad sujetos a confirmación.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
