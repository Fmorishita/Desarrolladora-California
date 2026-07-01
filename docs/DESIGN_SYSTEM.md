# DESIGN SYSTEM

Dirección: institucional inmobiliario premium (desarrolladoras líderes, fondos de inversión en tierra, estudios de arquitectura, firmas de urbanismo). Sobrio, editorial, patrimonial. Mobile-first.

## Paleta (tokens)
| Token | Uso | Hex |
|-------|-----|-----|
| `carbon` | Fondo oscuro / texto principal | `#1A1917` |
| `ink` | Texto sobre claro | `#211F1B` |
| `bone` | Blanco cálido / fondo claro | `#F6F2EA` |
| `sand` | Arena / superficies | `#E7DECB` |
| `olive` | Verde olivo profundo (marca) | `#3E4B3A` |
| `olive-deep` | Hover / acento oscuro | `#2C3629` |
| `copper` | Cobre/dorado discreto (acento) | `#B08A54` |
| `stone` | Gris piedra (bordes/muted) | `#8A857B` |
| `line` | Líneas topográficas sutiles | `rgba(176,138,84,.14)` |

Uso: fondos cálidos (bone/sand) para secciones claras; carbon para hero/CTA/footer; olive como color de marca en énfasis; copper solo para detalles (líneas, subrayados, iconos activos). Sin gradientes agresivos.

## Tipografía
- **Display / titulares:** serif editorial — `Fraunces` (variable) o fallback `Playfair Display`. Peso 400–600, tracking ajustado.
- **Texto / UI:** sans humanista — `Inter`. Cuerpo 16–18px, line-height 1.6.
- Escala fluida: `clamp()` para h1–h3. Titulares con balance/pretty wrapping.

## Espaciado y layout
- Contenedor máx. `max-w-7xl`, padding lateral generoso (mín. 24px mobile).
- Secciones con `py-24/28` desktop, `py-16` mobile. Aire amplio.
- Grid editorial 12 col; composiciones asimétricas para sensación arquitectónica.
- Radios sutiles (`rounded-lg`), sombras muy suaves, bordes `1px` stone/line.

## Componentes visuales
- Cards limpias (ServiceCard, ProjectCard) con hover elevación mínima + reveal de línea copper.
- StatsBlock con números display grandes + label muted.
- ProcessTimeline vertical (mobile) / horizontal (desktop) con línea topográfica.
- FAQAccordion sobrio.
- Botones: primario olive/carbon sólido, secundario outline stone, ghost para terciarios. CTAs visibles pero no agresivos.
- StatusBadge por estado (new/contacted/qualified/won/lost).

## Motivos gráficos
- **TopographicBackground**: SVG de curvas de nivel (líneas copper a baja opacidad) como textura de fondo en hero y CTA.
- Texturas de tierra muy finas (grain overlay sutil, opcional).
- Planos urbanos / mapas discretos como acento, no protagonismo.

## Animaciones (Framer Motion)
- Reveal on-scroll: fade + translateY 12–16px, `easeOut`, stagger 60–90ms.
- Hover microinteracciones (línea que crece, icono que se desplaza 2px).
- Respetar `prefers-reduced-motion`. Nada llamativo; todo sutil.

## Accesibilidad
- Contraste AA mínimo (texto sobre bone/carbon verificado).
- Focus visible (ring copper/olive). Navegación por teclado en menú, acordeones y formularios.
- `alt` en imágenes, labels asociados, `aria-*` en accordions/menús.

## Evitar
Colores brillantes, gradientes exagerados, íconos genéricos saturados, stock evidente, estética de landing improvisada o constructora económica.
