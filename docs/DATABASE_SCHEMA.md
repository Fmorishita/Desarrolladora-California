# DATABASE SCHEMA (Supabase / Postgres)

Migraciones en `supabase/migrations/`. Seed en `supabase/seed.sql`.

## Convenciones
- `id uuid default gen_random_uuid() primary key`.
- `created_at timestamptz default now()`, `updated_at timestamptz default now()` con trigger `set_updated_at`.
- Enums de estado como `text` con `check` (evita migraciones de tipo).
- Timestamps y status en todas las tablas de leads para seguimiento comercial.

## Tablas de leads (privadas)
### general_leads
`id, full_name, phone, email, lead_type, source, message, status, notes, created_at, updated_at`
- `lead_type` check: `tengo_tierra | comprar_lote | desarrollar_proyecto | informacion_general`.
- `status` check: `new | contacted | qualified | won | lost`.

### landowner_requests
`id, full_name, phone, email, land_location, approximate_hectares (numeric), legal_status, nearby_services, objective, collaboration_type, status, message, created_at, updated_at`
- `collaboration_type` sugerido: `asociacion | desarrollo_operacion | urbanizacion_lotificacion | comercializacion | construccion | por_definir`.
- `status` = mismo enum de leads.

### project_interests
`id, project_id (fk projects null), project_name, full_name, phone, email, approximate_budget, available_down_payment, intended_use, desired_term, wants_tour (bool), status, message, created_at, updated_at`.

## Tablas públicas (contenido)
### projects
`id, name, slug (unique), location, project_type, status, short_description, long_description, price_from, hero_image_url, featured (bool), created_at, updated_at`.

### lots
`id, project_id (fk projects), lot_number, block, area_m2 (numeric), price_per_m2 (numeric), total_price (numeric), status, financing_available (bool), notes, created_at, updated_at`.
- `status` check: `available | reserved | sold`.

## RLS (Row Level Security)
- **Habilitada en todas las tablas.**
- Leads (`general_leads`, `landowner_requests`, `project_interests`):
  - `INSERT`: permitido a rol `anon` (formularios públicos) con policy `WITH CHECK (true)`.
  - `SELECT / UPDATE / DELETE`: **denegado** a `anon`/`authenticated` por defecto. Solo `service_role` (server) o, más adelante, usuarios admin autenticados vía policy dedicada.
- Contenido público (`projects`, `lots`):
  - `SELECT`: permitido a `anon` (solo lectura). Para `lots` opcionalmente limitar a `status='available'` en la capa de query.
  - `INSERT/UPDATE/DELETE`: solo `service_role`/admin.
- **Nunca** exponer leads al frontend. Inserciones desde server action con service role o anon-insert-only.

## Seed inicial
- Proyecto **Mirador del Valle**: slug `mirador-del-valle`, tipo `Proyecto de lotificación`, ubicación `Cerca de Valle de Guadalupe`, `price_from = 'US$40/m²'`, `status='Activo'`, `featured=true`, descripciones desde brief.
- (Opcional) Lotes de ejemplo marcados como placeholder para probar disponibilidad.

## Escalabilidad futura
Índices en `slug`, `project_id`, `status`, `created_at`. Preparado para carga de lotes reales, disponibilidad en vivo y panel admin.
