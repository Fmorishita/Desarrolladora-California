# DECISIONS LOG

| Fecha | Decisión | Razón |
|-------|----------|-------|
| 2026-07-01 | Stack: Next.js App Router + TS + Tailwind + shadcn/ui + Framer Motion + Supabase | Requerido por el brief; escalable a admin/CRM |
| 2026-07-01 | Documentación `/docs` como fuente de verdad antes de codear | Ahorro de tokens y trazabilidad (UltraCode) |
| 2026-07-01 | Formularios vía **Server Actions** (no API routes) | App Router idiomático; service role queda server-only |
| 2026-07-01 | Enums de estado como `text + check` en Postgres | Evita migraciones de tipo; más flexible |
| 2026-07-01 | RLS: `anon` solo INSERT en leads y SELECT en contenido público | Nunca exponer leads; lectura pública solo de proyectos/lotes |
| 2026-07-01 | Modo degradado si faltan claves Supabase | El build no depende de secretos; permite avanzar sin bloqueo |
| 2026-07-01 | Tipografía: serif editorial (Fraunces) + Inter | Sensación editorial/patrimonial premium |
| 2026-07-01 | Anti-spam: honeypot + timing check (sin dependencia externa) | Simple, sin costo, sin captcha intrusivo |
| 2026-07-01 | Admin v1 protegido por Supabase Auth + allowlist de emails; si no hay Auth, base documentada | Alcance realista sin exponer datos privados |
| 2026-07-01 | Next.js 14.2 + React 18 (no 15/19) | Combinación estable y probada con framer-motion y supabase/ssr |
| 2026-07-01 | Primitivos UI hechos a mano (sin CLI shadcn ni Radix) | Menos dependencias; control total; evita prompts de red |
| 2026-07-01 | Reveal on-scroll con `viewport={{ once, amount: 0.15 }}` | Más robusto que margin negativo; evita secciones que no revelan |
| 2026-07-01 | Imágenes vía Unsplash como placeholder + `next.config` remotePatterns | Preparado para reemplazo por assets reales de Supabase Storage |
