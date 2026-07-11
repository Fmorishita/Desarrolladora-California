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
| 2026-07-01 | Rediseño v2 en rama `claude/california-redesign-v2` con lenguaje "plan maestro/prospecto" | Identidad única en el nicho: agrimensura, fichas técnicas, numeración de plano (autorizado por el cliente) |
| 2026-07-01 | JSON-LD (Organization, FAQPage, BreadcrumbList) | SEO estructurado sin riesgo: solo datos confirmados |
| 2026-07-01 | Financiamiento como comparador A/B (5 años US$40 vs 8 años US$45) | Hace tangible la decisión de compra con datos confirmados |
| 2026-07-01 | Absorción 21/91 como pieza destacada (`AbsorptionBand`) | La prueba social más fuerte del proyecto merece jerarquía propia |
| 2026-07-02 | v3 visual en rama `claude/california-v3-visual` (desde v2): manifiesto central de imágenes (`src/lib/images.ts`) + `SitePhoto`/`PhotoMosaic` | El cliente cargará fotos reales; cada slot se reemplaza en una línea (ver `IMAGES_GUIDE.md`) |
| 2026-07-02 | Sello "Imagen ilustrativa" en placeholders (`provisional`) | Honestidad visual mientras llegan las fotos reales; se quita por prop |
| 2026-07-02 | Placeholders Unsplash verificados visualmente (contact sheet) antes de asignar | Evitar imágenes rotas o de tema equivocado |
| 2026-07-02 | Cotizador Mirador: ≤5 años → US$40/m²; 6–8 años → US$45/m²; enganche 10–20%; mensualidad = saldo/meses (directo, redondeo hacia arriba) | Reglas de precio confirmadas por el cliente; sin intereses ocultos |
| 2026-07-02 | Cotizador envía desglose por WhatsApp; sin número configurado, fallback al formulario + copiar desglose | El canal principal aún no tiene número; UX no se rompe |
| 2026-07-11 | Sitio Mirador como sub-app `mirador/` del monorepo + proyecto Vercel separado | Acceso GitHub limitado a este repo; patrón monorepo estándar con deploys independientes |
| 2026-07-11 | Mirador comparte el Supabase de la desarrolladora (leads en `project_interests`) | Una sola base comercial/CRM; separar la DB fragmentaría los leads |
| 2026-07-11 | Identidad propia "atardecer en el valle" (terracota/dorado/arcos de horizonte) | Diferenciar la marca del proyecto de la marca corporativa |
