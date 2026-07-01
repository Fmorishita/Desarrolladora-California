/**
 * Datos estáticos de proyectos usados como fuente de contenido y como
 * fallback cuando Supabase no está configurado. Cuando la DB esté activa,
 * el listado real puede provenir de la tabla `projects` (ver getProjects()).
 * Los datos numéricos de Mirador del Valle están confirmados en el brief.
 */

export type ProjectStatus = "Activo" | "Próximamente" | "En desarrollo";

export interface ProjectFact {
  label: string;
  value: string;
}

export interface Project {
  slug: string;
  name: string;
  location: string;
  projectType: string;
  status: ProjectStatus;
  featured: boolean;
  priceFrom: string;
  shortDescription: string;
  longDescription: string;
  heroImageUrl: string;
  facts: ProjectFact[];
  benefits: string[];
  faqs: { q: string; a: string }[];
}

export const projects: Project[] = [
  {
    slug: "mirador-del-valle",
    name: "Mirador del Valle",
    location: "Cerca de Valle de Guadalupe, Baja California",
    projectType: "Proyecto de lotificación",
    status: "Activo",
    featured: true,
    priceFrom: "US$40/m²",
    shortDescription:
      "Terrenos amplios cerca de Valle de Guadalupe, diseñados para inversión patrimonial, descanso y desarrollo futuro.",
    longDescription:
      "Mirador del Valle es un proyecto de lotificación con terrenos amplios en el entorno de Valle de Guadalupe, la principal región vitivinícola de México y un polo gastronómico y turístico en consolidación. Ese contexto —vino, gastronomía y visitantes en aumento— es el motor de demanda y plusvalía de la zona. El proyecto combina ubicación estratégica, terrenos de dimensiones generosas y financiamiento flexible, pensado como un activo de largo plazo para inversión, descanso o desarrollo futuro.",
    heroImageUrl:
      "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1920&q=70",
    facts: [
      { label: "Precio desde", value: "US$40/m²" },
      { label: "Terreno promedio", value: "≈ 1,000 m²" },
      { label: "Enganche", value: "10% a 20%" },
      { label: "Financiamiento", value: "Hasta 5 años a US$40/m²" },
      { label: "Plazo extendido", value: "Hasta 8 años a US$45/m²" },
      { label: "Ubicación", value: "≈ 4 min de Arena Valle de Guadalupe" },
      { label: "Terrenos totales", value: "91" },
      { label: "Disponibles", value: "≈ 70" },
    ],
    benefits: [
      "Absorción comprobada: 21 de 91 terrenos comercializados en 18 meses.",
      "Terrenos amplios de aproximadamente 1,000 m² para proyectos de largo plazo.",
      "Ubicación estratégica a unos 4 minutos de Arena Valle de Guadalupe.",
      "Esquemas de financiamiento flexibles, con enganche del 10% al 20%.",
      "Precio de entrada competitivo desde US$40/m².",
      "En el entorno de Valle de Guadalupe: vino, gastronomía y turismo impulsan la plusvalía.",
      "Adecuado para inversión, casa de descanso o desarrollo futuro.",
    ],
    faqs: [
      {
        q: "¿Cuál es el precio y el tamaño de los terrenos?",
        a: "Los terrenos promedian aproximadamente 1,000 m² y el precio inicia desde US$40/m². El monto final depende del lote y del esquema de pago elegido.",
      },
      {
        q: "¿Qué opciones de financiamiento existen?",
        a: "Se maneja un enganche del 10% al 20% y financiamiento flexible: hasta 5 años manteniendo el precio de US$40/m², o hasta 8 años con un precio de US$45/m².",
      },
      {
        q: "¿Dónde se ubica el proyecto?",
        a: "Mirador del Valle se encuentra cerca de Valle de Guadalupe, a aproximadamente 4 minutos de Arena Valle de Guadalupe.",
      },
      {
        q: "¿Cuánta disponibilidad hay?",
        a: "El proyecto contempla 91 terrenos en total. A la fecha se han comercializado 21 en 18 meses, quedando aproximadamente 70 disponibles. La disponibilidad puntual se confirma al solicitar información.",
      },
      {
        q: "¿Para qué tipo de comprador es ideal?",
        a: "Para quien busca una inversión patrimonial, un terreno amplio para casa de descanso o una oportunidad de desarrollo futuro cerca de Valle de Guadalupe.",
      },
    ],
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getFeaturedProjects(): Project[] {
  return projects.filter((p) => p.featured);
}
