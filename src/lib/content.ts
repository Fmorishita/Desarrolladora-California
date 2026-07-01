import {
  Ruler,
  Grid3x3,
  Building2,
  LineChart,
  Handshake,
  ClipboardCheck,
  HardHat,
  type LucideIcon,
} from "lucide-react";

export interface ServiceDetail {
  slug: string;
  icon: LucideIcon;
  title: string;
  short: string;
  what: string;
  solves: string;
  forWho: string;
  includes: string[];
  nextStep: { label: string; href: string };
}

export const services: ServiceDetail[] = [
  {
    slug: "urbanizacion",
    icon: Ruler,
    title: "Urbanización",
    short:
      "Dotamos a la tierra de la infraestructura que la habilita como suelo desarrollable.",
    what: "Ejecución de la infraestructura urbana que convierte un predio en suelo apto para desarrollo: trazo, accesos, redes y obras primarias.",
    solves:
      "Un terreno sin infraestructura difícilmente se comercializa o desarrolla. La urbanización habilita su uso y detona su valor.",
    forWho: "Propietarios, inversionistas y proyectos que requieren preparar la tierra para su desarrollo o venta.",
    includes: [
      "Planeación y trazo urbano",
      "Vialidades y accesos",
      "Introducción de servicios primarios",
      "Coordinación de obra de infraestructura",
    ],
    nextStep: { label: "Evaluar mi terreno", href: "/terratenientes" },
  },
  {
    slug: "lotificacion",
    icon: Grid3x3,
    title: "Lotificación",
    short:
      "Dividimos la tierra en lotes comercializables con una lectura de mercado clara.",
    what: "Diseño y estructuración de la subdivisión de un predio en lotes con dimensiones, distribución y mezcla orientadas a su comercialización.",
    solves:
      "Una lotificación bien planeada maximiza el aprovechamiento del terreno y su absorción comercial.",
    forWho: "Propietarios de hectáreas y proyectos que buscan convertir superficie en producto vendible.",
    includes: [
      "Diseño de traza y lotes",
      "Mezcla y dimensionamiento de producto",
      "Estrategia de etapas",
      "Preparación para comercialización",
    ],
    nextStep: { label: "Solicitar diagnóstico", href: "/terratenientes" },
  },
  {
    slug: "desarrollo",
    icon: Building2,
    title: "Desarrollo de proyectos de tierra",
    short:
      "Estructuramos y desarrollamos proyectos completos, de la planeación a la operación.",
    what: "Desarrollo integral de proyectos inmobiliarios de tierra: viabilidad, estructuración, ejecución y puesta en marcha.",
    solves:
      "Desarrollar tierra requiere estructura operativa, capital y experiencia. Integramos las piezas en un proyecto ejecutable.",
    forWho: "Propietarios que buscan un socio operador e inversionistas que buscan proyectos estructurados.",
    includes: [
      "Estudio de viabilidad",
      "Estructuración del proyecto",
      "Dirección de desarrollo",
      "Coordinación integral",
    ],
    nextStep: { label: "Hablar de mi proyecto", href: "/contacto" },
  },
  {
    slug: "comercializacion",
    icon: LineChart,
    title: "Comercialización de lotes",
    short:
      "Llevamos el producto al mercado con una estrategia comercial estructurada.",
    what: "Estrategia y ejecución de venta de lotes: posicionamiento, esquemas de financiamiento, seguimiento comercial y cierre.",
    solves:
      "Un buen proyecto necesita una comercialización profesional para convertirse en resultados.",
    forWho: "Proyectos propios o asociados que requieren estructura y capacidad comercial.",
    includes: [
      "Estrategia y posicionamiento",
      "Esquemas de financiamiento",
      "Gestión de prospectos y seguimiento",
      "Cierre y documentación",
    ],
    nextStep: { label: "Conocer proyectos", href: "/proyectos" },
  },
  {
    slug: "asociacion",
    icon: Handshake,
    title: "Asociación con propietarios",
    short:
      "Diseñamos modelos de colaboración a la medida del propietario y su tierra.",
    what: "Esquemas de asociación que permiten al propietario participar del desarrollo de su tierra sin necesariamente venderla ni operar el proyecto.",
    solves:
      "Muchos propietarios tienen tierra con potencial pero no la estructura para desarrollarla. La asociación alinea intereses.",
    forWho: "Propietarios de terrenos o hectáreas con potencial de desarrollo.",
    includes: [
      "Evaluación del potencial",
      "Modelos de colaboración",
      "Estructura y acuerdos claros",
      "Acompañamiento en el desarrollo",
    ],
    nextStep: { label: "Explorar asociación", href: "/terratenientes" },
  },
  {
    slug: "planeacion",
    icon: ClipboardCheck,
    title: "Planeación y estructuración",
    short:
      "Leemos el potencial de la tierra y definimos el proyecto viable antes de ejecutar.",
    what: "Análisis de viabilidad y estructuración conceptual, comercial y operativa del proyecto, previo a la inversión de ejecución.",
    solves:
      "Cada terreno requiere una lectura distinta: ubicación, acceso, servicios, viabilidad, mercado y modelo comercial.",
    forWho: "Propietarios e inversionistas que buscan decidir con información y estructura.",
    includes: [
      "Lectura de potencial y mercado",
      "Modelo comercial",
      "Estructura del proyecto",
      "Ruta de desarrollo",
    ],
    nextStep: { label: "Solicitar diagnóstico", href: "/terratenientes" },
  },
  {
    slug: "construccion",
    icon: HardHat,
    title: "Construcción y obra",
    short:
      "Ejecución de obra como servicio complementario dentro de los proyectos.",
    what: "Servicio complementario de construcción y ejecución de obra para proyectos propios, asociados o de terceros.",
    solves:
      "Complementa el desarrollo con capacidad de ejecución cuando el proyecto lo requiere.",
    forWho: "Proyectos y clientes que requieren ejecución de obra.",
    includes: [
      "Ejecución de obra",
      "Coordinación de contratistas",
      "Supervisión",
      "Entrega",
    ],
    nextStep: { label: "Solicitar información", href: "/contacto" },
  },
];

export const processSteps = [
  {
    title: "Diagnóstico",
    description:
      "Evaluamos ubicación, acceso, servicios, situación legal y potencial de mercado de la tierra.",
  },
  {
    title: "Estructuración",
    description:
      "Definimos el proyecto viable, el modelo comercial y el esquema de colaboración adecuado.",
  },
  {
    title: "Urbanización y lotificación",
    description:
      "Habilitamos la tierra y diseñamos el producto comercializable por etapas.",
  },
  {
    title: "Comercialización",
    description:
      "Llevamos el proyecto al mercado con estrategia comercial y seguimiento estructurado.",
  },
];

export const differentiators = [
  {
    title: "Lectura estratégica de la tierra",
    description:
      "Cada predio se evalúa por su potencial real: ubicación, acceso, servicios, viabilidad y mercado.",
  },
  {
    title: "Estructura operativa",
    description:
      "Integramos planeación, urbanización, lotificación y comercialización en un proceso ordenado.",
  },
  {
    title: "Modelos flexibles",
    description:
      "Asociación, desarrollo, urbanización o comercialización: el modelo se ajusta al propietario y al proyecto.",
  },
  {
    title: "Visión patrimonial",
    description:
      "Desarrollamos proyectos pensados como activos de largo plazo, no como transacciones aisladas.",
  },
];

export const homeFaqs = [
  {
    q: "¿Qué hace Urbanizadora y Desarrolladora California?",
    a: "Desarrollamos proyectos inmobiliarios de tierra: planeación, urbanización, lotificación, comercialización y asociación con propietarios de terrenos o hectáreas.",
  },
  {
    q: "Tengo un terreno grande, ¿pueden ayudarme?",
    a: "Sí. Evaluamos el potencial de tu tierra y proponemos el modelo de colaboración más adecuado, desde asociación hasta urbanización y comercialización. Puedes solicitar un diagnóstico privado.",
  },
  {
    q: "¿Venden terrenos?",
    a: "Comercializamos lotes en nuestros proyectos, como Mirador del Valle. También estructuramos y desarrollamos proyectos junto a propietarios e inversionistas.",
  },
  {
    q: "¿Cómo empiezo?",
    a: "Si tienes tierra, solicita un diagnóstico privado. Si buscas invertir, conoce nuestros proyectos. Si quieres asociarte o desarrollar, contáctanos.",
  },
];
