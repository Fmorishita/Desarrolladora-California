# IMAGES GUIDE — Guía de reemplazo de imágenes

Todas las imágenes del sitio viven en **un solo archivo**: `src/lib/images.ts`.
Cada imagen tiene un **ID de slot**. Para poner una foto real:

1. Sube la foto (a Supabase Storage, `/public`, o cualquier CDN).
2. En `src/lib/images.ts`, reemplaza el `src` del slot por la URL nueva.
3. (Opcional) Ajusta el `alt` con la descripción real.
4. Cuando una foto ya sea real, quita el sello "Imagen ilustrativa" pasando
   `provisional={false}` donde se usa ese slot (o pídele al desarrollador que
   lo haga global).

> Recomendación de formato: JPG/WebP horizontales, mínimo 1600px de ancho
> (2000px para las panorámicas), peso < 500KB.

## Inventario de slots

| Slot | Dónde aparece | Fotografía real sugerida |
|------|---------------|--------------------------|
| `home-hero` | Fondo del hero de Home | Aérea (dron) del terreno insignia o valle |
| `path-landowner` | Card "Tengo tierra" (Home) | Hectáreas o rancho de propietario |
| `path-projects` | Card "Conocer proyectos" (Home) | Vista general de Mirador del Valle |
| `path-contact` | Card "Contactar" (Home) | Equipo en reunión o firma |
| `services-side` | Junto al título de Servicios (Home) | Plano real o sesión de planeación |
| `territory-1..4` | Mosaico "El territorio" (Home) | Terreno → vistas → obra aérea → resultado |
| `editorial-band` | Banda editorial (Home) | Panorámica del valle |
| `service-urbanizacion` | Página Servicios | Obra de urbanización propia |
| `service-lotificacion` | Página Servicios | Plano de lotificación real |
| `service-desarrollo` | Página Servicios | Render o proyecto desarrollado |
| `service-comercializacion` | Página Servicios | Entrega de lote / cierre |
| `service-asociacion` | Página Servicios | Firma con propietario |
| `service-planeacion` | Página Servicios | Trabajo de viabilidad |
| `service-construccion` | Página Servicios | Obra ejecutada |
| `terra-quien` | Terratenientes, "Para quién es" | Hectáreas tipo (vista amplia) |
| `terra-band` | Terratenientes, franja panorámica | Tierra con potencial |
| `mirador-hero` * | Hero visual de Mirador | Aérea real del proyecto |
| `mirador-g1..g4` | Galería de Mirador | Entorno, terreno tipo, vistas, casa/render |
| `nosotros-1..2` | Franja visual de Nosotros | Equipo planeando / obra en ejecución |

\* El hero de Mirador se define en `src/lib/projects.ts` (`heroImageUrl`) porque
pertenece a los datos del proyecto (y a futuro, a la tabla `projects` en Supabase).

## Pendiente aparte (no son slots de imagen)
- **Plano de lotificación** de Mirador (sección "Trazo del proyecto"): hoy es un
  placeholder de texto; al tener el archivo se muestra como imagen/PDF.
- **Logo oficial**: hoy hay monograma + wordmark provisional (`src/components/layout/logo.tsx`).
- **Mapa**: configurar `NEXT_PUBLIC_GOOGLE_MAPS_EMBED_URL`.
