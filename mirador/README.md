# Mirador del Valle — sitio del proyecto

Landing de conversión independiente para el proyecto **Mirador del Valle**
(terrenos cerca de Valle de Guadalupe). Vive como sub-app del monorepo pero es
un **proyecto Vercel separado** del sitio corporativo.

- **Producción:** https://mirador-del-valle.vercel.app
- **Proyecto Vercel:** `mirador-del-valle` (scope `fmorishitas-projects`)
- **Supabase:** compartido con la desarrolladora — los leads caen en
  `project_interests` (misma base comercial / CRM).

## Identidad
"Atardecer en el valle": crema/arena cálida, terracota (`clay`) como acento,
verde vid, dorado atardecer, motivo de **arcos de horizonte**. Distinta del
lenguaje "plan maestro" del sitio corporativo.

## Secciones
Hero cinemático → banner de disponibilidad (91/21/≈70) → El entorno (Valle de
Guadalupe) → Financiamiento + **cotizador** (#cotizador) → Galería → Plano y
mapa (placeholders) → Proceso de compra → FAQ (+JSON-LD) → Formulario de interés
(#contacto) → Footer. CTA sticky en móvil + WhatsApp flotante (por env).

## Desarrollo
```bash
cd mirador
pnpm install
cp .env.example .env.local   # completar valores
pnpm dev
pnpm build && pnpm lint && pnpm typecheck
```

## Deploy
```bash
cd mirador
vercel deploy --prod --token=$VERCEL_TOKEN --scope=fmorishitas-projects
```
Variables de producción requeridas: `NEXT_PUBLIC_SUPABASE_URL`,
`SUPABASE_SERVICE_ROLE_KEY`, `NEXT_PUBLIC_SITE_URL`; opcionales:
`NEXT_PUBLIC_WHATSAPP_NUMBER`, `NEXT_PUBLIC_WHATSAPP_MSG`,
`NEXT_PUBLIC_GOOGLE_MAPS_EMBED_URL`.

## Pendientes
- Fotos reales del proyecto (hoy placeholders marcados "Imagen ilustrativa").
- Plano de lotificación y URL de mapa.
- Número de WhatsApp (activa botón flotante, barra móvil y envío del cotizador).
