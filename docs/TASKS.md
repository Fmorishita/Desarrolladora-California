# TASKS

## Fase 0 — Preparación
- [x] Auditar entorno
- [x] Crear `/docs` + archivos `.md` base
- [x] `.env.example`
- [x] `.gitignore`
- [ ] Recibir accesos/tokens

## Fase 1 — Scaffolding
- [ ] Init Next.js (App Router, TS, Tailwind, ESLint, src/, alias @)
- [ ] Instalar deps (shadcn/ui, framer-motion, lucide, RHF, zod, supabase)
- [ ] Design tokens (tailwind + globals + fuentes)
- [ ] Estructura de carpetas

## Fase 2 — Design system / layout
- [ ] Navbar
- [ ] Footer
- [ ] WhatsAppFloatingButton
- [ ] SectionHeading / CTASection / TopographicBackground
- [ ] Primitivos UI (Button, Input, Textarea, Select, Accordion, Badge, Card)

## Fase 3 — Páginas
- [ ] Home
- [ ] Terratenientes
- [ ] Proyectos (listado)
- [ ] Mirador del Valle
- [ ] Servicios
- [ ] Nosotros
- [ ] Contacto
- [ ] Metadata SEO por página + sitemap + robots + OG

## Fase 4 — Backend / datos
- [ ] Migraciones SQL (5 tablas) + RLS
- [ ] Seed Mirador del Valle
- [ ] Clientes Supabase (browser/server/admin)
- [ ] Server actions + Zod (3 formularios)
- [ ] Anti-spam (honeypot + timing)
- [ ] Notificación email opcional (Resend)

## Fase 5 — Admin
- [ ] `/admin` base + guard
- [ ] AdminLeadTable / AdminProjectTable / StatusBadge
- [ ] Documentar activación de Supabase Auth

## Fase 6 — QA / SEO / Perf
- [ ] `tsc` sin errores
- [ ] lint sin errores críticos
- [ ] `build` de producción verde
- [ ] Responsive mobile/tablet/desktop
- [ ] A11y básica

## Fase 7 — Deploy
- [ ] `.env` en Vercel
- [ ] Deploy preparado/ejecutado
- [ ] Actualizar `DEPLOYMENT_GUIDE.md` y `KEY_ROTATION.md`
