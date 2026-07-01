# DEPLOYMENT GUIDE

## Local
```bash
pnpm install           # o npm install
cp .env.example .env.local   # completar valores reales
pnpm dev               # http://localhost:3000
pnpm build && pnpm start     # validar producción
```

## Supabase (setup DB)
```bash
# requiere SUPABASE_ACCESS_TOKEN
npx supabase link --project-ref <SUPABASE_PROJECT_REF>
npx supabase db push          # aplica supabase/migrations/*
# seed:
psql "<connection-string>" -f supabase/seed.sql   # o vía SQL editor
```
Alternativa sin CLI: pegar el contenido de `supabase/migrations/*.sql` y `supabase/seed.sql` en el SQL Editor del dashboard, en orden.

## Vercel
1. Importar el repo en Vercel (framework: Next.js, autodetectado).
2. Configurar variables de entorno (ver `ENVIRONMENT_VARIABLES.md`): todas las `NEXT_PUBLIC_*` + privadas.
3. Deploy. Build command `next build` (default).

### Deploy por CLI (si hay `VERCEL_TOKEN`)
```bash
npm i -g vercel
vercel link        # o usar VERCEL_ORG_ID / VERCEL_PROJECT_ID
vercel pull --environment=production
vercel deploy --prod --token=$VERCEL_TOKEN
```

## Checklist pre-producción
- [ ] Build local verde
- [ ] TS/lint limpios
- [ ] Rutas y formularios validados
- [ ] Conexión Supabase probada
- [ ] Sin claves sensibles en el bundle cliente
- [ ] Dominio configurado (si aplica)

## Estado de producción (2026-07-01)
- **URL en vivo:** https://desarrolladora-california.vercel.app
- **Proyecto Vercel:** `desarrolladora-california` (scope `fmorishitas-projects`, `prj_NIrGzWukUPgH51j2noM6KGbShpmR`).
- **Variables en Producción:** `NEXT_PUBLIC_SUPABASE_URL`, `NEXT_PUBLIC_SUPABASE_ANON_KEY`, `SUPABASE_SERVICE_ROLE_KEY`, `NEXT_PUBLIC_SITE_URL`.
- **Supabase:** proyecto `wvmeclsjamlmevlzzkdq`. Migración `0001_init` y seed aplicados vía Management API. RLS verificada (anon: INSERT en leads + SELECT en contenido público; sin SELECT de leads).
- **Verificado:** rutas 200 en vivo; ruta de service_role (INSERT/SELECT/DELETE) OK → formularios persisten leads.

### Redeploy tras cambios
```bash
vercel deploy --prod --yes --token=$VERCEL_TOKEN --scope=fmorishitas-projects
```
El repo también está enlazado; conectar Git en el dashboard de Vercel habilita deploys automáticos por push.

### Pendiente opcional (mejora la funcionalidad)
- `NEXT_PUBLIC_WHATSAPP_NUMBER`, `NEXT_PUBLIC_CONTACT_EMAIL` → activan botón WhatsApp y correo en footer/contacto.
- `RESEND_API_KEY` + `LEADS_NOTIFICATION_EMAIL` → notificación por email de cada lead.
- `ADMIN_ALLOWED_EMAILS` + Supabase Auth → habilitar `/admin`.

## Errores resueltos / notas
- Hidratación React #423 en pruebas locales: causada por servidores `next start` duplicados/inestables sirviendo chunks a medias, no por el código. Con un build+start limpio, hidratación sin errores.
