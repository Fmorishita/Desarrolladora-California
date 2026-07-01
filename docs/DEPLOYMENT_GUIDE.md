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

## Errores resueltos / notas
- (registrar aquí incidencias de build y su solución conforme surjan)
