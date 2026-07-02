/**
 * Manifiesto central de imágenes del sitio.
 *
 * Cada slot tiene un ID estable. Para reemplazar un placeholder por una
 * fotografía real basta cambiar el `src` de ese slot (o apuntar a Supabase
 * Storage). `replace` describe qué fotografía real debe ir en cada lugar.
 * Ver docs/IMAGES_GUIDE.md para la guía completa de reemplazo.
 */

export interface SiteImage {
  /** URL base sin parámetros; SitePhoto agrega tamaño/calidad. */
  src: string;
  alt: string;
  /** Qué fotografía real debe reemplazar este placeholder. */
  replace: string;
}

const U = "https://images.unsplash.com/photo-";

export const siteImages = {
  /* ── Home ─────────────────────────────────────────────── */
  "home-hero": {
    src: `${U}1470071459604-3b5ec3a7fe05`,
    alt: "Valle con relieve al atardecer",
    replace: "Foto aérea (dron) del terreno insignia o del valle del proyecto",
  },
  "path-landowner": {
    src: `${U}1500534314209-a25ddb2bd429`,
    alt: "Colinas en capas al atardecer",
    replace: "Hectáreas o rancho representativo de un propietario",
  },
  "path-projects": {
    src: `${U}1500382017468-9049fed747ef`,
    alt: "Campo dorado al atardecer",
    replace: "Vista general de Mirador del Valle",
  },
  "path-contact": {
    src: `${U}1450101499163-c8848c66ca85`,
    alt: "Persona firmando un documento",
    replace: "Equipo de la desarrolladora en reunión o firma",
  },
  "services-side": {
    src: `${U}1503387762-592deb58ef4e`,
    alt: "Manos trazando sobre un plano",
    replace: "Plano real de lotificación o sesión de planeación del equipo",
  },
  "territory-1": {
    src: `${U}1472214103451-9374bd1c798e`,
    alt: "Colinas verdes con luz de amanecer",
    replace: "Terreno en evaluación (vista amplia)",
  },
  "territory-2": {
    src: `${U}1444927714506-8492d94b4e3d`,
    alt: "Montañas en capas azules",
    replace: "Vistas desde un terreno del portafolio",
  },
  "territory-3": {
    src: `${U}1541888946425-d81bb19240f5`,
    alt: "Obra de urbanización vista desde arriba",
    replace: "Obra de urbanización propia (foto aérea)",
  },
  "territory-4": {
    src: `${U}1523217582562-09d0def993a6`,
    alt: "Casa moderna de fachada blanca",
    replace: "Proyecto terminado o casa construida en un lote",
  },
  "editorial-band": {
    src: `${U}1470071459604-3b5ec3a7fe05`,
    alt: "Paisaje de valle con relieve",
    replace: "Panorámica del valle donde opera la desarrolladora",
  },

  /* ── Servicios ────────────────────────────────────────── */
  "service-urbanizacion": {
    src: `${U}1541888946425-d81bb19240f5`,
    alt: "Obra de infraestructura vista aérea",
    replace: "Obra de urbanización de la empresa",
  },
  "service-lotificacion": {
    src: `${U}1503387762-592deb58ef4e`,
    alt: "Trazo de plano con regla",
    replace: "Plano de lotificación real",
  },
  "service-desarrollo": {
    src: `${U}1487958449943-2429e8be8625`,
    alt: "Arquitectura moderna",
    replace: "Render o foto de un proyecto desarrollado",
  },
  "service-comercializacion": {
    src: `${U}1560518883-ce09059eeffa`,
    alt: "Llaves y casa en miniatura sobre mesa",
    replace: "Entrega de lote o cierre comercial",
  },
  "service-asociacion": {
    src: `${U}1450101499163-c8848c66ca85`,
    alt: "Firma de un acuerdo",
    replace: "Reunión o firma con propietario asociado",
  },
  "service-planeacion": {
    src: `${U}1454165804606-c3d57bc86b40`,
    alt: "Escritorio de planeación con notas y laptop",
    replace: "Equipo trabajando en viabilidad/estructuración",
  },
  "service-construccion": {
    src: `${U}1523217582562-09d0def993a6`,
    alt: "Casa terminada de fachada blanca",
    replace: "Obra o construcción ejecutada por la empresa",
  },

  /* ── Terratenientes ───────────────────────────────────── */
  "terra-quien": {
    src: `${U}1500534314209-a25ddb2bd429`,
    alt: "Colinas al atardecer en tonos cálidos",
    replace: "Hectáreas tipo de un propietario (vista amplia)",
  },
  "terra-band": {
    src: `${U}1500382017468-9049fed747ef`,
    alt: "Campo dorado extenso",
    replace: "Panorámica de tierra con potencial",
  },

  /* ── Mirador del Valle ────────────────────────────────── */
  "mirador-hero": {
    src: `${U}1500382017468-9049fed747ef`,
    alt: "Vista panorámica de Mirador del Valle",
    replace: "Foto aérea real de Mirador del Valle",
  },
  "mirador-g1": {
    src: `${U}1500534314209-a25ddb2bd429`,
    alt: "Entorno del valle al atardecer",
    replace: "Entorno del proyecto (Valle de Guadalupe)",
  },
  "mirador-g2": {
    src: `${U}1472214103451-9374bd1c798e`,
    alt: "Terreno con vegetación y luz cálida",
    replace: "Terreno tipo dentro del proyecto",
  },
  "mirador-g3": {
    src: `${U}1444927714506-8492d94b4e3d`,
    alt: "Vistas hacia las montañas",
    replace: "Vistas desde los lotes",
  },
  "mirador-g4": {
    src: `${U}1523217582562-09d0def993a6`,
    alt: "Casa de descanso moderna",
    replace: "Casa construida en el proyecto o render de referencia",
  },

  /* ── Nosotros ─────────────────────────────────────────── */
  "nosotros-1": {
    src: `${U}1454165804606-c3d57bc86b40`,
    alt: "Sesión de planeación de proyecto",
    replace: "Equipo de la desarrolladora trabajando",
  },
  "nosotros-2": {
    src: `${U}1541888946425-d81bb19240f5`,
    alt: "Ejecución de obra vista desde arriba",
    replace: "Obra o proyecto en ejecución de la empresa",
  },
} as const;

export type SiteImageId = keyof typeof siteImages;

export function getImage(id: SiteImageId): SiteImage {
  return siteImages[id];
}

/** URL final con parámetros de tamaño/calidad para <img>. */
export function imageUrl(id: SiteImageId, width = 1200): string {
  return `${siteImages[id].src}?auto=format&fit=crop&w=${width}&q=70`;
}
