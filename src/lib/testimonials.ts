/**
 * Testimonios del sitio.
 *
 * IMPORTANTE: los testimonios actuales son ILUSTRATIVOS (placeholder) y se
 * muestran con un sello que lo indica. Para publicar testimonios reales:
 * 1. Reemplaza `quote`, `name` y `role` por el testimonio real autorizado.
 * 2. Cambia `provisional` a false (quita el sello).
 * Nunca publicar como real un testimonio no confirmado por el cliente.
 */

export interface Testimonial {
  quote: string;
  name: string;
  role: string;
  /** true = ilustrativo (muestra el sello). false = testimonio real. */
  provisional: boolean;
}

export const testimonials: Testimonial[] = [
  {
    quote:
      "Tenía las hectáreas pero no sabía por dónde empezar. El diagnóstico me dio claridad sobre el potencial real del terreno y el modelo que más me convenía sin perder el control de mi propiedad.",
    name: "[Nombre del propietario]",
    role: "Propietario de tierra",
    provisional: true,
  },
  {
    quote:
      "Buscaba un terreno amplio cerca de Valle de Guadalupe como inversión de largo plazo. El proceso fue claro: precio, enganche, plazos y documentación sin sorpresas.",
    name: "[Nombre del comprador]",
    role: "Comprador en Mirador del Valle",
    provisional: true,
  },
  {
    quote:
      "Lo que me dio confianza fue la estructura: viabilidad, plan comercial y seguimiento. Se nota que no improvisan; cada etapa del proyecto está pensada.",
    name: "[Nombre del socio]",
    role: "Socio inversionista",
    provisional: true,
  },
];
