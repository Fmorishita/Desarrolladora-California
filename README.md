# Urbanizadora y Desarrolladora California

Plataforma corporativa premium para **Urbanizadora y Desarrolladora California, S.A. de C.V.** — desarrollo de tierra, urbanización, lotificación, comercialización y asociación con propietarios de hectáreas.

> Mensaje central: **Transformamos tierra en proyectos con valor patrimonial.**

## Stack
Next.js 14 (App Router) · TypeScript · Tailwind CSS · Framer Motion · Lucide · React Hook Form · Zod · Supabase (`@supabase/ssr`).

## Desarrollo
```bash
pnpm install            # o npm install
cp .env.example .env.local   # completar valores
pnpm dev                # http://localhost:3000
pnpm build              # build de producción
pnpm lint && pnpm typecheck
```

El sitio **compila y funciona sin secretos** (modo degradado): los formularios validan y los placeholders quedan listos para reemplazo. Con Supabase configurado, los formularios persisten leads.

## Estructura
```
src/
  app/            # rutas (App Router), server actions, sitemap, robots
  components/     # UI, layout, formularios, secciones, admin, motion
  lib/            # supabase clients, schemas Zod, seo, site config, contenido
supabase/
  migrations/     # esquema SQL + RLS
  seed.sql        # seed Mirador del Valle
docs/             # fuente de verdad del proyecto (brief, plan, decisiones…)
```

## Documentación
Toda la planeación, arquitectura, esquema de datos, variables y checklist viven en [`/docs`](./docs). Empezar por [`docs/PROJECT_BRIEF.md`](./docs/PROJECT_BRIEF.md) y [`docs/TASKS.md`](./docs/TASKS.md).

## Variables de entorno
Ver [`docs/ENVIRONMENT_VARIABLES.md`](./docs/ENVIRONMENT_VARIABLES.md) y [`.env.example`](./.env.example). Ninguna clave se hardcodea; `.env.local` está en `.gitignore`.

## Deploy
Ver [`docs/DEPLOYMENT_GUIDE.md`](./docs/DEPLOYMENT_GUIDE.md).
