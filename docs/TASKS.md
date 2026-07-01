# TASKS

## Fase 0 — Preparación
- [x] Auditar entorno
- [x] Crear `/docs` + archivos `.md` base
- [x] `.env.example`
- [x] `.gitignore`
- [ ] Recibir accesos/tokens (ver `API_AND_TOKENS_CHECKLIST.md`)

## Fase 1 — Scaffolding
- [x] Init Next.js 14 (App Router, TS, Tailwind, ESLint, src/, alias @)
- [x] Instalar deps (framer-motion, lucide, RHF, zod, supabase/ssr)
- [x] Design tokens (tailwind + globals + fuentes Inter/Fraunces)
- [x] Estructura de carpetas

## Fase 2 — Design system / layout
- [x] Navbar (responsive + menú móvil)
- [x] Footer
- [x] WhatsAppFloatingButton (contextual por ruta)
- [x] SectionHeading / CTASection / TopographicBackground / PageHero
- [x] Primitivos UI (Button, Input, Textarea, Select, Checkbox, Label, Badge, Card, Slot)

## Fase 3 — Páginas
- [x] Home
- [x] Terratenientes
- [x] Proyectos (listado)
- [x] Mirador del Valle (`/proyectos/[slug]`)
- [x] Servicios
- [x] Nosotros
- [x] Contacto
- [x] Metadata SEO por página + sitemap + robots + OG (SVG)
- [x] 404 personalizado

## Fase 4 — Backend / datos
- [x] Migraciones SQL (5 tablas) + RLS (`supabase/migrations/0001_init.sql`)
- [x] Seed Mirador del Valle (`supabase/seed.sql`)
- [x] Clientes Supabase (browser/server/service-role)
- [x] Server actions + Zod (3 formularios)
- [x] Anti-spam (honeypot + rate-limit en memoria)
- [x] Notificación email opcional (Resend vía fetch)
- [x] Modo degradado sin secretos (build no depende de envs)

## Fase 5 — Admin
- [x] `/admin` base + guard (`checkAdminAccess`, allowlist de emails)
- [x] AdminLeadTable / StatusBadge / AdminSetupNotice
- [x] Lectura de leads con service role (server-only, noindex)
- [ ] Edición de estado / notas / carga de lotes (siguiente fase)
- [ ] Página de login `/admin/login` con Supabase Auth (siguiente fase)

## Fase 6 — QA / SEO / Perf
- [x] `tsc` sin errores
- [x] lint sin errores/warnings
- [x] `build` de producción verde (13 rutas)
- [x] Hidratación limpia verificada en prod (0 pageerrors, 0 chunk fails)
- [x] Responsive mobile/tablet/desktop (verificado con capturas)
- [x] A11y básica (focus, labels, aria en menú/acordeón, reduced-motion)

## Fase 7 — Deploy
- [x] `.env` en Vercel (4 variables de Producción)
- [x] Supabase: migración + seed aplicados; RLS verificada
- [x] Deploy ejecutado → https://desarrolladora-california.vercel.app
- [x] Verificación en vivo (rutas 200) + ruta service_role (persistencia de leads)
- [x] `DEPLOYMENT_GUIDE.md` con pasos y estado
- [x] `KEY_ROTATION.md` con claves a rotar
- [ ] Rotar claves compartidas en chat tras validar el demo (pendiente del cliente)
