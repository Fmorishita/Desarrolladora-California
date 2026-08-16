# Remotion — videos con código

Proyecto de [Remotion](https://www.remotion.dev) para crear y editar videos (intros de marca,
reels de proyectos, promocionales para Mirador del Valle, etc.) escribiendo componentes de
React en lugar de usar un editor de timeline tradicional. Es un proyecto independiente dentro
del monorepo (igual que `mirador/`), con su propio `package.json` y `pnpm-lock.yaml`.

Se generó con `npx create-video@latest --yes --blank remotion` y ya incluye Tailwind CSS v4.

## Comandos

```bash
cd remotion
pnpm install              # instalar dependencias (ya hecho en este commit)
pnpm dev                  # abre Remotion Studio (preview interactivo en el navegador)
pnpm run build             # genera el bundle (equivalente a "compilar" el proyecto)
npx remotion render src/index.ts MyComp out/video.mp4   # renderizar a MP4
npx remotion still src/index.ts MyComp out/frame.png    # exportar un solo frame (PNG)
npx remotion upgrade        # actualizar Remotion a la última versión
```

`pnpm dev` es el comando que más vas a usar: abre un preview en vivo donde ves el video
fotograma a fotograma, puedes arrastrar el timeline, y el navegador se recarga solo cuando
guardas cambios en el código (hot reload).

## Estructura

```
remotion/
  src/
    index.ts          # punto de entrada, registra el "Root"
    Root.tsx           # lista todas las composiciones (videos) del proyecto
    Composition.tsx     # composición de ejemplo: intro de marca animada
    index.css           # @import "tailwindcss"
  public/               # assets estáticos (imágenes, audio, video) para usar en tus videos
  remotion.config.ts     # configuración del bundler/CLI (Tailwind, formato de imagen, etc.)
```

### La composición de ejemplo

`src/Composition.tsx` incluye un intro de marca ya renderizado y probado: el nombre
"Urbanizadora y Desarrolladora California" con fade-in, una línea acento en color cobre
(`#B08A54`) que se anima, y el tagline "Transformamos tierra en proyectos con valor
patrimonial." Usa los colores de marca del sitio (`carbon` `#1A1917`, `bone` `#F6F2EA`,
`sand` `#E7DECB`) definidos en `tailwind.config.ts` del proyecto raíz. Es un punto de
partida: cámbiale el texto, los tiempos o los colores, o bórralo y empieza desde cero.

## Conceptos clave de Remotion

- **Cada video es un componente de React.** `useCurrentFrame()` te da el fotograma actual;
  animas interpolando valores (posición, opacidad, escala) en función de ese número.
- **`<Composition>`** define un video: id, componente, duración en frames, fps y resolución.
  Un mismo proyecto puede tener muchas composiciones (`Root.tsx` las lista todas) — por
  ejemplo, una por cada tipo de video que necesites (intro, reel de proyecto, story vertical).
- **`interpolate(frame, [inicio, fin], [valorInicial, valorFinal])`** mapea el frame actual a
  un valor (opacidad, posición Y, ancho, etc.) — es la base de casi toda animación.
- **`spring({ frame, fps })`** da animaciones con rebote/easing natural, en vez de lineales.
- **`<Sequence from={frame}>`** retrasa la aparición de un elemento hasta cierto frame, útil
  para encadenar textos o escenas una tras otra.
- **`<AbsoluteFill>`** es un `div` que ocupa todo el frame — la base para componer capas
  (fondo, texto, overlays).
- **Props dinámicas:** una composición puede recibir `props` (y `defaultProps`), permitiendo
  generar variantes del mismo video (por ejemplo, un mismo template de "ficha de proyecto"
  con distinto nombre/precio/fotos por lote) pasando `--props='{"nombre":"Mirador del Valle"}'`
  al renderizar.
- **Assets:** imágenes, audio y video van en `public/` y se referencian con
  `staticFile("nombre.png")`. Componentes como `<Img>`, `<Video>`, `<Audio>` y `<OffthreadVideo>`
  los reproducen sincronizados con el timeline del video.
- **Render:** `npx remotion render` exporta a MP4/WebM/GIF (o PNGs con `still`). Se puede
  paralelizar (`--concurrency`), acelerar con GPU y renderizar en la nube con
  [Remotion Lambda](https://www.remotion.dev/docs/lambda) si necesitas velocidad o escala.

## Licencia

Remotion es gratis para individuos y equipos de hasta 3 personas. Para empresas más grandes
se necesita una licencia — ver [remotion.pro/license](https://www.remotion.pro/license).

## Documentación

- [Fundamentals](https://www.remotion.dev/docs/the-fundamentals) — punto de partida oficial.
- [remotion.dev/docs](https://www.remotion.dev/docs) — referencia completa de la API.
