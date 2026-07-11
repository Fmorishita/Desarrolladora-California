/**
 * Testimonios ILUSTRATIVOS (placeholder) — se muestran con un sello visible.
 * Para publicar reales: reemplaza quote/name/role por el testimonio autorizado
 * y pon provisional: false. Nunca publicar como real un testimonio no confirmado.
 */
export interface Testimonial {
  quote: string;
  name: string;
  role: string;
  provisional: boolean;
}

export const testimonials: Testimonial[] = [
  {
    quote:
      "Buscaba un terreno para construir nuestra cabaña de fin de semana cerca del Valle. El proceso fue claro y los pagos, sin intereses, hicieron la decisión mucho más fácil.",
    name: "[Nombre del cliente]",
    role: "Compró para casa de descanso",
    provisional: true,
  },
  {
    quote:
      "Lo vi como inversión: estar a minutos de Arena Valle de Guadalupe le da mucha salida para rentar por Airbnb en temporada de eventos. Los números me cerraron.",
    name: "[Nombre del cliente]",
    role: "Inversionista · renta vacacional",
    provisional: true,
  },
  {
    quote:
      "Me dieron confianza el respaldo del desarrollador y la transparencia en el enganche y las mensualidades. Todo quedó por escrito desde el inicio.",
    name: "[Nombre del cliente]",
    role: "Compró para inversión patrimonial",
    provisional: true,
  },
];
