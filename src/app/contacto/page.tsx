import type { Metadata } from "next";
import { Mail, MessageCircle, MapPin, Landmark, ShoppingBag, Building2, Info } from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { GeneralContactForm } from "@/components/forms/general-contact-form";
import { MapEmbed } from "@/components/map-embed";
import { buildMetadata } from "@/lib/seo";
import { siteConfig, whatsappUrl } from "@/lib/site";

export const metadata: Metadata = buildMetadata({
  title: "Contacto",
  description:
    "Contacta a Urbanizadora y Desarrolladora California para desarrollar tierra, conocer proyectos o solicitar información inmobiliaria.",
  path: "/contacto",
});

const reasons = [
  { icon: Landmark, label: "Tengo tierra" },
  { icon: ShoppingBag, label: "Quiero comprar un lote" },
  { icon: Building2, label: "Quiero desarrollar un proyecto" },
  { icon: Info, label: "Información general" },
];

export default function ContactoPage() {
  const wa = whatsappUrl("general");

  return (
    <>
      <PageHero
        eyebrow="Contacto"
        title="Hablemos de tu tierra, tu proyecto o tu inversión"
        description="Elige el motivo que mejor te describa y déjanos tus datos. Te contactaremos para dar el siguiente paso."
      />

      <section className="py-20 lg:py-28">
        <div className="container-tight grid gap-12 lg:grid-cols-[1fr_1.4fr] lg:gap-16">
          {/* Info lateral */}
          <div>
            <h2 className="font-display text-2xl text-ink">Otras formas de contacto</h2>
            <p className="mt-3 text-sm leading-relaxed text-ink/65">
              Estamos disponibles para propietarios, compradores, inversionistas y socios.
            </p>

            <ul className="mt-8 space-y-4">
              {siteConfig.contactEmail && (
                <li>
                  <a
                    href={`mailto:${siteConfig.contactEmail}`}
                    className="group flex items-center gap-4 rounded-lg border border-border/70 bg-card p-4 transition-colors hover:border-copper/40"
                  >
                    <span className="flex size-10 items-center justify-center rounded-md bg-olive/10 text-olive">
                      <Mail className="size-5" />
                    </span>
                    <span>
                      <span className="block text-xs uppercase tracking-wider text-stone">
                        Correo
                      </span>
                      <span className="text-sm text-ink">{siteConfig.contactEmail}</span>
                    </span>
                  </a>
                </li>
              )}
              {wa && (
                <li>
                  <a
                    href={wa}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-4 rounded-lg border border-border/70 bg-card p-4 transition-colors hover:border-copper/40"
                  >
                    <span className="flex size-10 items-center justify-center rounded-md bg-[#25D366]/12 text-[#128C4B]">
                      <MessageCircle className="size-5" />
                    </span>
                    <span>
                      <span className="block text-xs uppercase tracking-wider text-stone">
                        WhatsApp
                      </span>
                      <span className="text-sm text-ink">Escríbenos directamente</span>
                    </span>
                  </a>
                </li>
              )}
              <li className="flex items-center gap-4 rounded-lg border border-border/70 bg-card p-4">
                <span className="flex size-10 items-center justify-center rounded-md bg-olive/10 text-olive">
                  <MapPin className="size-5" />
                </span>
                <span>
                  <span className="block text-xs uppercase tracking-wider text-stone">
                    Ubicación
                  </span>
                  <span className="text-sm text-ink">
                    Baja California, México
                  </span>
                </span>
              </li>
            </ul>

            <div className="mt-8">
              <p className="mb-3 text-xs font-medium uppercase tracking-[0.16em] text-copper">
                Motivos de contacto
              </p>
              <div className="grid grid-cols-2 gap-2">
                {reasons.map((r) => (
                  <div
                    key={r.label}
                    className="flex items-center gap-2 rounded-md border border-border/60 bg-sand/30 px-3 py-2.5 text-xs text-ink/75"
                  >
                    <r.icon className="size-4 text-olive" />
                    {r.label}
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8">
              <MapEmbed label="Baja California" />
            </div>
          </div>

          {/* Formulario */}
          <div>
            <div className="rounded-xl border border-border/70 bg-card p-6 shadow-sm sm:p-9">
              <h2 className="font-display text-2xl text-ink">Envíanos un mensaje</h2>
              <p className="mt-2 text-sm text-ink/60">
                Completa el formulario y te responderemos a la brevedad.
              </p>
              <div className="mt-7">
                <GeneralContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
