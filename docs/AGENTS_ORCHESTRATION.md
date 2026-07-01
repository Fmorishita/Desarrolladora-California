# AGENTS ORCHESTRATION

Orquestación interna por roles (simulados dentro de una misma sesión UltraCode).

| # | Agente | Responsabilidad | Entregable clave |
|---|--------|-----------------|------------------|
| 1 | Product Strategist | Arquitectura de conversión, prioridad propietarios | `INFORMATION_ARCHITECTURE.md`, flujos CTA |
| 2 | UX/UI Premium Designer | Dirección visual, mobile-first, microinteracciones | `DESIGN_SYSTEM.md`, layouts |
| 3 | Copywriter Institucional | Copy sobrio, mensajes por perfil | `CONTENT_GUIDELINES.md`, textos in-page |
| 4 | Software Architect | Estructura Next.js, componentes, escalabilidad | scaffolding, `src/` |
| 5 | Supabase Architect | Esquema, migraciones, RLS, seeds | `DATABASE_SCHEMA.md`, `supabase/` |
| 6 | Frontend Engineer | Next+TS+Tailwind+shadcn+Framer | componentes y páginas |
| 7 | Backend/API Engineer | Server actions, Zod, inserción segura, email, anti-spam | `src/app/actions`, `src/lib` |
| 8 | DevOps/Vercel | Env, build, deploy, secretos | `.env.example`, `DEPLOYMENT_GUIDE.md` |
| 9 | QA/SEO/Performance | Build, TS, lint, SEO, a11y, responsive | `QA_CHECKLIST.md` |
| 10 | Documentation Manager | Mantiene `.md` como memoria/ahorro de tokens | `/docs/*` |

## Reglas de coordinación
- Documentación primero: cada decisión relevante → `DECISIONS_LOG.md`.
- Tareas completadas → `TASKS.md`.
- Cambios de arquitectura/variables/datos → actualizar el `.md` correspondiente.
- Antes de pedir algo al usuario, revisar los `.md`.
