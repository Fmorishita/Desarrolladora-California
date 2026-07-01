# API & TOKENS CHECKLIST

Estado: ⛔ pendiente · ✅ recibido · ➖ opcional/no-crítico

## Requerido para desarrollo (formularios + DB)
- ⛔ `NEXT_PUBLIC_SUPABASE_URL`
- ⛔ `NEXT_PUBLIC_SUPABASE_ANON_KEY`
- ⛔ `SUPABASE_SERVICE_ROLE_KEY` (server-only)

## Requerido para migraciones / setup de DB (CLI)
- ⛔ `SUPABASE_ACCESS_TOKEN`
- ⛔ `SUPABASE_PROJECT_REF`
- ➖ `SUPABASE_DB_PASSWORD` (solo si push directo)
- Región preferida si se crea proyecto nuevo (default sugerido: `us-west-1`)

## Requerido para formularios (notificación email)
- ➖ `RESEND_API_KEY`
- ⛔ `LEADS_NOTIFICATION_EMAIL` (correo receptor de leads)
- ➖ `RESEND_FROM_EMAIL` (remitente verificado)
- ➖ `RESEND_FROM_NAME`

## Requerido para WhatsApp
- ⛔ `NEXT_PUBLIC_WHATSAPP_NUMBER` (E.164, solo dígitos)
- ➖ Mensajes precargados: general / propietarios / Mirador del Valle

## Requerido para mapas
- ➖ `NEXT_PUBLIC_GOOGLE_MAPS_EMBED_URL` **o** link/coordenadas de Google Maps
- ➖ `NEXT_PUBLIC_GOOGLE_MAPS_API_KEY` (solo si mapa dinámico)

## Requerido para analytics
- ➖ `NEXT_PUBLIC_GA_MEASUREMENT_ID`
- ➖ `NEXT_PUBLIC_META_PIXEL_ID`
- ➖ `GOOGLE_SITE_VERIFICATION`

## Requerido para deploy (Vercel)
- ➖ `VERCEL_TOKEN`
- ➖ `VERCEL_ORG_ID`
- ➖ `VERCEL_PROJECT_ID` (si ya existe) / nombre deseado del proyecto
- ➖ Dominio o subdominio de publicación

## Assets
- ➖ Logo (si no, se usa wordmark tipográfico provisional)
- ➖ Imágenes reales de terrenos/proyectos (si no, placeholders premium)
- ➖ Plano de Mirador del Valle (si no, placeholder)
- ➖ PDFs/renders/documentos

## Contacto / negocio
- ⛔ `NEXT_PUBLIC_CONTACT_EMAIL` (email público)
- ➖ Correo remitente verificado
- ➖ Ubicación general del proyecto (para mapa)

## Notas
- Sin credenciales, el build se completa; los formularios quedan en modo degradado y los placeholders quedan preparados para reemplazo.
