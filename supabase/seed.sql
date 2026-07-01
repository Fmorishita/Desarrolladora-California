-- ============================================================================
-- Seed inicial — Mirador del Valle
-- Datos numéricos confirmados en docs/PROJECT_BRIEF.md
-- ============================================================================

insert into public.projects
  (name, slug, location, project_type, status, short_description, long_description, price_from, hero_image_url, featured)
values
  (
    'Mirador del Valle',
    'mirador-del-valle',
    'Cerca de Valle de Guadalupe, Baja California',
    'Proyecto de lotificación',
    'Activo',
    'Terrenos amplios cerca de Valle de Guadalupe, diseñados para inversión patrimonial, descanso y desarrollo futuro.',
    'Mirador del Valle es un proyecto de lotificación con terrenos amplios en una de las zonas con mayor proyección de Baja California. Precio desde US$40/m², terrenos promedio de aproximadamente 1,000 m², enganche del 10% al 20% y financiamiento flexible (hasta 5 años a US$40/m² o hasta 8 años a US$45/m²). 91 terrenos totales, 21 comercializados en 18 meses, aproximadamente 70 disponibles. A unos 4 minutos de Arena Valle de Guadalupe.',
    'US$40/m²',
    'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1920&q=70',
    true
  )
on conflict (slug) do nothing;

-- ----------------------------------------------------------------------------
-- Lotes de ejemplo (PLACEHOLDER) — reemplazar por disponibilidad real.
-- Descomentar para poblar una muestra de disponibilidad:
-- ----------------------------------------------------------------------------
-- with p as (select id from public.projects where slug = 'mirador-del-valle')
-- insert into public.lots (project_id, lot_number, block, area_m2, price_per_m2, status)
-- select p.id, v.lot_number, v.block, v.area_m2, 40, v.status
-- from p, (values
--   ('A-01','A',1000,'available'),
--   ('A-02','A',1050,'available'),
--   ('A-03','A', 980,'reserved'),
--   ('B-01','B',1120,'available'),
--   ('B-02','B',1000,'sold')
-- ) as v(lot_number, block, area_m2, status);
