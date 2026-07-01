-- ============================================================================
-- Urbanizadora y Desarrolladora California — Esquema inicial
-- Ver docs/DATABASE_SCHEMA.md
-- ============================================================================

create extension if not exists "pgcrypto";

-- ---------------------------------------------------------------------------
-- Trigger genérico para updated_at
-- ---------------------------------------------------------------------------
create or replace function public.set_updated_at()
returns trigger
language plpgsql
as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

-- ---------------------------------------------------------------------------
-- Tabla: projects (contenido público)
-- ---------------------------------------------------------------------------
create table if not exists public.projects (
  id                uuid primary key default gen_random_uuid(),
  name              text not null,
  slug              text not null unique,
  location          text,
  project_type      text,
  status            text not null default 'Activo',
  short_description text,
  long_description  text,
  price_from        text,
  hero_image_url    text,
  featured          boolean not null default false,
  created_at        timestamptz not null default now(),
  updated_at        timestamptz not null default now()
);
create index if not exists projects_slug_idx on public.projects (slug);
create index if not exists projects_featured_idx on public.projects (featured);

drop trigger if exists projects_set_updated_at on public.projects;
create trigger projects_set_updated_at
  before update on public.projects
  for each row execute function public.set_updated_at();

-- ---------------------------------------------------------------------------
-- Tabla: lots (contenido público)
-- ---------------------------------------------------------------------------
create table if not exists public.lots (
  id                  uuid primary key default gen_random_uuid(),
  project_id          uuid references public.projects (id) on delete cascade,
  lot_number          text,
  block               text,
  area_m2             numeric,
  price_per_m2        numeric,
  total_price         numeric,
  status              text not null default 'available'
                        check (status in ('available', 'reserved', 'sold')),
  financing_available boolean not null default true,
  notes               text,
  created_at          timestamptz not null default now(),
  updated_at          timestamptz not null default now()
);
create index if not exists lots_project_idx on public.lots (project_id);
create index if not exists lots_status_idx on public.lots (status);

drop trigger if exists lots_set_updated_at on public.lots;
create trigger lots_set_updated_at
  before update on public.lots
  for each row execute function public.set_updated_at();

-- ---------------------------------------------------------------------------
-- Tabla: general_leads (privada)
-- ---------------------------------------------------------------------------
create table if not exists public.general_leads (
  id         uuid primary key default gen_random_uuid(),
  full_name  text not null,
  phone      text,
  email      text,
  lead_type  text check (lead_type in
               ('tengo_tierra','comprar_lote','desarrollar_proyecto','informacion_general')),
  source     text,
  message    text,
  status     text not null default 'new'
               check (status in ('new','contacted','qualified','won','lost')),
  notes      text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);
create index if not exists general_leads_created_idx on public.general_leads (created_at desc);

drop trigger if exists general_leads_set_updated_at on public.general_leads;
create trigger general_leads_set_updated_at
  before update on public.general_leads
  for each row execute function public.set_updated_at();

-- ---------------------------------------------------------------------------
-- Tabla: landowner_requests (privada)
-- ---------------------------------------------------------------------------
create table if not exists public.landowner_requests (
  id                   uuid primary key default gen_random_uuid(),
  full_name            text not null,
  phone                text,
  email                text,
  land_location        text,
  approximate_hectares numeric,
  legal_status         text,
  nearby_services      text,
  objective            text,
  collaboration_type   text,
  status               text not null default 'new'
                         check (status in ('new','contacted','qualified','won','lost')),
  message              text,
  created_at           timestamptz not null default now(),
  updated_at           timestamptz not null default now()
);
create index if not exists landowner_requests_created_idx on public.landowner_requests (created_at desc);

drop trigger if exists landowner_requests_set_updated_at on public.landowner_requests;
create trigger landowner_requests_set_updated_at
  before update on public.landowner_requests
  for each row execute function public.set_updated_at();

-- ---------------------------------------------------------------------------
-- Tabla: project_interests (privada)
-- ---------------------------------------------------------------------------
create table if not exists public.project_interests (
  id                     uuid primary key default gen_random_uuid(),
  project_id             uuid references public.projects (id) on delete set null,
  project_name           text,
  full_name              text not null,
  phone                  text,
  email                  text,
  approximate_budget     text,
  available_down_payment text,
  intended_use           text,
  desired_term           text,
  wants_tour             boolean not null default false,
  status                 text not null default 'new'
                           check (status in ('new','contacted','qualified','won','lost')),
  message                text,
  created_at             timestamptz not null default now(),
  updated_at             timestamptz not null default now()
);
create index if not exists project_interests_created_idx on public.project_interests (created_at desc);

drop trigger if exists project_interests_set_updated_at on public.project_interests;
create trigger project_interests_set_updated_at
  before update on public.project_interests
  for each row execute function public.set_updated_at();

-- ============================================================================
-- Row Level Security
-- ============================================================================
alter table public.projects          enable row level security;
alter table public.lots              enable row level security;
alter table public.general_leads     enable row level security;
alter table public.landowner_requests enable row level security;
alter table public.project_interests  enable row level security;

-- Contenido público: lectura para anon/authenticated ---------------------------
drop policy if exists "projects_public_read" on public.projects;
create policy "projects_public_read"
  on public.projects for select
  to anon, authenticated
  using (true);

drop policy if exists "lots_public_read" on public.lots;
create policy "lots_public_read"
  on public.lots for select
  to anon, authenticated
  using (true);

-- Leads: solo INSERT público, sin SELECT/UPDATE/DELETE para anon ---------------
drop policy if exists "general_leads_public_insert" on public.general_leads;
create policy "general_leads_public_insert"
  on public.general_leads for insert
  to anon, authenticated
  with check (true);

drop policy if exists "landowner_requests_public_insert" on public.landowner_requests;
create policy "landowner_requests_public_insert"
  on public.landowner_requests for insert
  to anon, authenticated
  with check (true);

drop policy if exists "project_interests_public_insert" on public.project_interests;
create policy "project_interests_public_insert"
  on public.project_interests for insert
  to anon, authenticated
  with check (true);

-- NOTA: No se crean policies de SELECT/UPDATE/DELETE sobre las tablas de leads.
-- Con RLS habilitada y sin policy, anon/authenticated NO pueden leerlas.
-- El acceso de lectura/gestión se hace exclusivamente con la service role
-- (server actions / panel admin), que ignora RLS por diseño.
-- Para habilitar el panel con usuarios autenticados, agregar en una migración
-- posterior policies de SELECT/UPDATE restringidas por email/rol admin.
