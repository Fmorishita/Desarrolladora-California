/**
 * Configuración central del sitio. Lee de variables de entorno con
 * fallbacks seguros para que el build no dependa de secretos.
 * Ver docs/ENVIRONMENT_VARIABLES.md
 */

export const siteConfig = {
  name: "Urbanizadora y Desarrolladora California",
  shortName: "Desarrolladora California",
  legalName: "Urbanizadora y Desarrolladora California, S.A. de C.V.",
  tagline: "Transformamos tierra en proyectos con valor patrimonial.",
  description:
    "Urbanización, lotificación, estructuración y comercialización de proyectos inmobiliarios de tierra. Acompañamos a propietarios, inversionistas y socios en el desarrollo de proyectos con valor patrimonial.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.desarrolladoracalifornia.com",
  contactEmail: process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? "",
  mapsEmbedUrl: process.env.NEXT_PUBLIC_GOOGLE_MAPS_EMBED_URL ?? "",
  whatsapp: {
    number: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "",
    msgGeneral:
      process.env.NEXT_PUBLIC_WHATSAPP_MSG_GENERAL ??
      "Hola, me gustaría recibir información.",
    msgLandowner:
      process.env.NEXT_PUBLIC_WHATSAPP_MSG_LANDOWNER ??
      "Hola, tengo un terreno y me gustaría una evaluación.",
    msgMirador:
      process.env.NEXT_PUBLIC_WHATSAPP_MSG_MIRADOR ??
      "Hola, me interesa el proyecto Mirador del Valle.",
  },
} as const;

export type WhatsAppContext = "general" | "landowner" | "mirador";

/** Construye una URL de WhatsApp con mensaje precargado según el contexto. */
export function whatsappUrl(context: WhatsAppContext = "general"): string | null {
  const { number, msgGeneral, msgLandowner, msgMirador } = siteConfig.whatsapp;
  if (!number) return null;
  const message =
    context === "landowner"
      ? msgLandowner
      : context === "mirador"
        ? msgMirador
        : msgGeneral;
  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
}

export const navLinks = [
  { href: "/nosotros", label: "Nosotros" },
  { href: "/servicios", label: "Servicios" },
  { href: "/proyectos", label: "Proyectos" },
  { href: "/terratenientes", label: "Terratenientes" },
  { href: "/contacto", label: "Contacto" },
] as const;
