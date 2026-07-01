# KEY ROTATION

Claves/accesos a **rotar al terminar el demo** (o si se compartieron en canal inseguro).

| Clave / acceso | Dónde se usa | Acción de rotación | Rotar tras demo |
|----------------|--------------|--------------------|-----------------|
| `SUPABASE_SERVICE_ROLE_KEY` | Server actions / admin | Regenerar en Supabase → Settings → API | Sí (crítico) |
| `SUPABASE_ACCESS_TOKEN` | CLI migraciones | Revocar/regenerar en Supabase account tokens | Sí |
| `SUPABASE_DB_PASSWORD` | CLI push | Reset password de DB | Si se usó |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | Cliente | Rotar solo si hubo exposición indebida (es pública por diseño) | Opcional |
| `RESEND_API_KEY` | Email | Regenerar en Resend | Si se usó |
| `VERCEL_TOKEN` | Deploy | Revocar en Vercel → Account → Tokens | Sí |
| `NEXT_PUBLIC_GOOGLE_MAPS_API_KEY` | Mapa | Restringir por dominio; rotar si expuesta sin restricción | Recomendado |
| `GA_MEASUREMENT_ID` / `META_PIXEL_ID` | Analytics | No secreto; sin rotación | No |

## ⚠️ ACCIÓN REQUERIDA — claves compartidas en chat (2026-07-01)
Estas credenciales se enviaron por chat en texto plano y **deben rotarse tras validar el demo**:
- `SUPABASE_SERVICE_ROLE_KEY` (proyecto `wvmeclsjamlmevlzzkdq`) → Supabase → Settings → API → *Reset service_role*. Luego actualizar en Vercel.
- `SUPABASE_ACCESS_TOKEN` (`sbp_…`) → https://supabase.com/dashboard/account/tokens → revocar y regenerar.
- `VERCEL_TOKEN` (`vcp_…`) → https://vercel.com/account/tokens → revocar.
- `NEXT_PUBLIC_SUPABASE_ANON_KEY` → pública por diseño; rotar solo si se desea (opcional).

Tras rotar: actualizar `.env.local` y las variables en Vercel (Production), luego `vercel deploy --prod`.

## Notas
- Las `NEXT_PUBLIC_*` son visibles en el cliente por diseño; no son secretas salvo la API key de Maps (restringir por dominio).
- Tras rotar, actualizar valores en `.env.local` y en Vercel.
- Este archivo se completa con las claves realmente entregadas al cierre.
