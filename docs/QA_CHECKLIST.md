# QA CHECKLIST (quality gates)

## Build / código
- [ ] `pnpm build` (o `npm run build`) sin errores
- [ ] `tsc --noEmit` sin errores
- [ ] `lint` sin errores críticos
- [ ] Sin `any` innecesarios ni imports muertos

## Rutas
- [ ] `/`, `/terratenientes`, `/proyectos`, `/proyectos/mirador-del-valle`, `/servicios`, `/nosotros`, `/contacto`, `/admin` responden
- [ ] 404 personalizado

## Formularios
- [ ] Validación Zod + RHF (loading/success/error)
- [ ] Persisten en Supabase (o modo degradado documentado)
- [ ] Honeypot/anti-spam activo
- [ ] Mensajes de confirmación correctos por tipo

## Seguridad
- [ ] Datos privados NO expuestos en frontend
- [ ] RLS habilitada; `anon` sin SELECT en leads
- [ ] `SUPABASE_SERVICE_ROLE_KEY` solo server (`server-only`)
- [ ] Sin secretos hardcodeados; `.env.local` git-ignored; `.env.example` sin valores

## SEO
- [ ] Metadata (title/description/OG/Twitter/canonical) por página
- [ ] `sitemap.xml` + `robots.txt`
- [ ] Textos SEO del brief aplicados

## UX / Responsive / A11y
- [ ] Mobile / tablet / desktop impecables
- [ ] Contraste AA, focus visible, navegación teclado
- [ ] `prefers-reduced-motion` respetado
- [ ] Estados loading/empty/error presentes

## WhatsApp / integraciones
- [ ] Botón WhatsApp usa env; mensajes precargados por contexto
- [ ] Placeholders claramente marcados para reemplazo

## Docs
- [ ] `.md` actualizados; `TASKS.md` refleja estado real; `KEY_ROTATION.md` completo
