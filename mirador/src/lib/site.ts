/** Configuración del sitio Mirador del Valle. Ver .env.example. */

export const site = {
  name: "Mirador del Valle",
  legalBacker: "Urbanizadora y Desarrolladora California, S.A. de C.V.",
  tagline:
    "Terrenos amplios cerca de Valle de Guadalupe, diseñados para inversión patrimonial, descanso y desarrollo futuro.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://mirador-del-valle.vercel.app",
  whatsapp: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "",
  whatsappMsg:
    process.env.NEXT_PUBLIC_WHATSAPP_MSG ??
    "Hola, me interesa el proyecto Mirador del Valle.",
  mapsEmbedUrl: process.env.NEXT_PUBLIC_GOOGLE_MAPS_EMBED_URL ?? "",
} as const;

export function whatsappUrl(text?: string): string | null {
  if (!site.whatsapp) return null;
  return `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(text ?? site.whatsappMsg)}`;
}

/** Datos confirmados del proyecto (fuente: brief comercial). */
export const project = {
  totalLots: 91,
  soldLots: 21,
  soldMonths: 18,
  availableLots: 70,
  avgArea: 1000,
  pricePerM2: 40,
  pricePerM2Extended: 45,
  downPaymentMin: 10,
  downPaymentMax: 20,
  maxYearsBase: 5,
  maxYearsExtended: 8,
  minutesToArena: 4,
} as const;
