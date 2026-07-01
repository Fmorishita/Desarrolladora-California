# INFORMATION ARCHITECTURE

## Rutas
| Ruta | Página | Prioridad |
|------|--------|-----------|
| `/` | Home | Alta |
| `/terratenientes` | Propietarios de tierra (diagnóstico privado) | Crítica |
| `/proyectos` | Listado de proyectos | Alta |
| `/proyectos/mirador-del-valle` | Proyecto Mirador del Valle | Crítica |
| `/servicios` | Servicios | Media |
| `/nosotros` | Nosotros | Media |
| `/contacto` | Contacto | Alta |
| `/admin` | Panel administrativo (protegido) | Base |
| `/gracias` | Confirmación post-formulario (opcional) | Baja |

## Flujos de conversión
- **Propietario** → Home (camino "Tengo tierra") / Navbar → `/terratenientes` → Formulario diagnóstico privado (`landowner_requests`) → WhatsApp propietarios.
- **Comprador** → Home (camino "Conocer proyectos") → `/proyectos` → `/proyectos/mirador-del-valle` → Formulario interés (`project_interests`) → WhatsApp Mirador.
- **Inversionista/socio** → Home / `/servicios` / `/nosotros` → `/contacto` (motivo: desarrollar/asociarse) → `general_leads`.
- **General** → `/contacto` → `general_leads`.

## Home — secciones (orden)
1. Hero institucional (mensaje central + CTA doble).
2. Tres caminos (Tengo tierra / Conocer proyectos / Contactar).
3. Servicios principales (grid).
4. Proceso de desarrollo (timeline).
5. Bloque fuerte propietarios de tierra → CTA diagnóstico.
6. Proyectos destacados (Mirador del Valle).
7. Por qué trabajar con la desarrolladora (diferenciadores).
8. FAQ breve.
9. CTA final a diagnóstico privado.
10. Footer premium.

## Terratenientes — secciones
Hero → Para quién es → Terrenos evaluables → Cómo funciona el diagnóstico → Modelos de colaboración → Beneficios propietario → Objeciones resueltas → FAQ → Formulario preevaluación → CTA WhatsApp/llamada.

## Mirador del Valle — secciones
Hero proyecto → Descripción → Ubicación (mapa/embed) → Datos clave (StatsBlock: 91/21/~70, US$40/m², ~1,000 m², enganche 10–20%, financiamiento 5/8 años, ~4 min Arena) → Beneficios → Plano (placeholder) → Disponibilidad (ProjectAvailabilityPreview, lista para DB) → FAQ → Formulario interés → WhatsApp → CTA recorrido.

## Servicios — 7 bloques
Cada uno: Qué es · Qué problema resuelve · Para quién · Qué incluye · Siguiente paso.

## Navbar
Logo · Nosotros · Servicios · Proyectos · Terratenientes · Contacto · CTA "Diagnóstico privado".

## Footer
Marca + tagline · navegación · contacto (email/WhatsApp env) · aviso legal placeholder · © año.
