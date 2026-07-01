# EXECUTION PLAN

## Fase 0 — Preparación (en curso)
- [x] Auditar entorno (repo vacío + README, rama correcta).
- [x] Crear `/docs` y archivos base `.md`.
- [x] Crear `.env.example` y `.gitignore`.
- [ ] Recibir accesos/tokens (ver `API_AND_TOKENS_CHECKLIST.md`).

## Fase 1 — Scaffolding técnico
- Next.js (App Router) + TypeScript + Tailwind + ESLint.
- shadcn/ui, Framer Motion, Lucide, React Hook Form, Zod, Supabase clients.
- Estructura de carpetas (`src/app`, `src/components`, `src/lib`, `supabase/`).
- Design tokens en Tailwind config + globals.css.

## Fase 2 — Sistema de diseño y layout
- Tokens (paleta, tipografía, spacing), primitivos UI, Navbar, Footer.
- Componentes base: SectionHeading, CTASection, TopographicBackground, WhatsAppFloatingButton.

## Fase 3 — Contenido público (páginas)
Orden por impacto comercial:
1. Home
2. Terratenientes (segunda página más crítica; diagnóstico privado)
3. Proyectos + `/proyectos/mirador-del-valle`
4. Servicios
5. Nosotros
6. Contacto

## Fase 4 — Backend / datos
- Migraciones SQL (5 tablas) + RLS + seed Mirador del Valle.
- Server actions con validación Zod, inserción segura (service role server-only).
- Notificación email opcional (Resend) protegida por env.
- Anti-spam (honeypot + validación).

## Fase 5 — Panel admin (base)
- `/admin` protegido (Supabase Auth recomendado). Tablas de leads/proyectos/lotes read + status/notes.
- Si Auth no queda: arquitectura + componentes + pendientes documentados.

## Fase 6 — QA / SEO / Performance
- `tsc`, lint, build de producción. Metadata por página, OG, sitemap, robots.
- Responsive, accesibilidad, estados loading/empty/error.

## Fase 7 — Deploy
- `.env` en Vercel, build, dominio. Si hay tokens: preparar/ejecutar. Si no: instrucciones mínimas.

## Milestones
- M1: scaffolding + design system compilando.
- M2: Home + Terratenientes + Mirador del Valle navegables.
- M3: formularios conectados a Supabase.
- M4: build verde + deploy preparado.
