# ENVIRONMENT VARIABLES

Sin valores reales aquí. Valores reales solo en `.env.local` (git-ignored) y en Vercel. Ver `.env.example`.

## Públicas (`NEXT_PUBLIC_*` — expuestas al browser)
| Variable | Uso | Requerida |
|----------|-----|-----------|
| `NEXT_PUBLIC_SUPABASE_URL` | Cliente Supabase (browser/server) | Sí (formularios/DB) |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | Cliente Supabase anon | Sí |
| `NEXT_PUBLIC_SITE_URL` | Canonical, OG, metadata | Sí (SEO/deploy) |
| `NEXT_PUBLIC_WHATSAPP_NUMBER` | Botón WhatsApp (formato E.164, solo dígitos) | Sí |
| `NEXT_PUBLIC_WHATSAPP_MSG_GENERAL` | Mensaje precargado leads generales | Opcional |
| `NEXT_PUBLIC_WHATSAPP_MSG_LANDOWNER` | Mensaje precargado propietarios | Opcional |
| `NEXT_PUBLIC_WHATSAPP_MSG_MIRADOR` | Mensaje precargado Mirador del Valle | Opcional |
| `NEXT_PUBLIC_CONTACT_EMAIL` | Email público de contacto (footer/contacto) | Opcional |
| `NEXT_PUBLIC_GOOGLE_MAPS_EMBED_URL` | Iframe de mapa (sin API key) | Opcional |
| `NEXT_PUBLIC_GA_MEASUREMENT_ID` | Google Analytics 4 | Opcional |
| `NEXT_PUBLIC_META_PIXEL_ID` | Meta Pixel | Opcional |
| `NEXT_PUBLIC_GOOGLE_MAPS_API_KEY` | Mapa dinámico (si se usa JS API) | Opcional |

## Privadas (solo servidor)
| Variable | Uso | Requerida |
|----------|-----|-----------|
| `SUPABASE_SERVICE_ROLE_KEY` | Inserción/lectura server-side, admin. **Nunca** al cliente | Recomendada |
| `SUPABASE_ACCESS_TOKEN` | CLI Supabase (migraciones/link) | Deploy/DB |
| `SUPABASE_PROJECT_REF` | CLI Supabase link | Deploy/DB |
| `SUPABASE_DB_PASSWORD` | CLI push migraciones | Solo si aplica |
| `LEADS_NOTIFICATION_EMAIL` | Correo receptor de leads | Formularios (email) |
| `RESEND_API_KEY` | Envío de notificaciones email | Opcional |
| `RESEND_FROM_EMAIL` | Remitente verificado | Opcional |
| `RESEND_FROM_NAME` | Nombre del remitente | Opcional |
| `GOOGLE_SITE_VERIFICATION` | Verificación Search Console | Opcional |
| `ADMIN_ALLOWED_EMAILS` | Lista blanca de admins (coma-separada) | Panel admin |
| `VERCEL_TOKEN` | Deploy CLI | Deploy |
| `VERCEL_ORG_ID` / `VERCEL_PROJECT_ID` | Vinculación Vercel | Deploy |

## Notas
- Falta cualquier `NEXT_PUBLIC_SUPABASE_*` → los formularios operan en modo degradado (validan pero no persisten) y se registra warning. El sitio compila igual.
- `SUPABASE_SERVICE_ROLE_KEY` solo se importa en código server (`server-only`).
