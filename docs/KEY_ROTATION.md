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

## Notas
- Las `NEXT_PUBLIC_*` son visibles en el cliente por diseño; no son secretas salvo la API key de Maps (restringir por dominio).
- Tras rotar, actualizar valores en `.env.local` y en Vercel.
- Este archivo se completa con las claves realmente entregadas al cierre.
