import { getImage, imageUrl, type SiteImageId } from "@/lib/images";
import { cn } from "@/lib/utils";

interface SitePhotoProps {
  id: SiteImageId;
  /** Clase de proporción, p. ej. "aspect-[4/3]". */
  aspect?: string;
  className?: string;
  imgClassName?: string;
  width?: number;
  /** Etiqueta pequeña sobre la imagen (p. ej. "Vista 01 — Entorno"). */
  label?: string;
  /** Muestra el sello "Imagen ilustrativa". Quitar al cargar fotos reales. */
  provisional?: boolean;
  /** Zoom sutil al hover del grupo padre (para cards clicables). */
  groupHover?: boolean;
}

/**
 * Imagen del sitio ligada al manifiesto central (src/lib/images.ts).
 * Para reemplazar por fotografía real: cambiar el src del slot en el
 * manifiesto y pasar provisional={false}.
 */
export function SitePhoto({
  id,
  aspect = "aspect-[4/3]",
  className,
  imgClassName,
  width = 1200,
  label,
  provisional = true,
  groupHover = false,
}: SitePhotoProps) {
  const image = getImage(id);
  return (
    <figure className={cn("relative overflow-hidden bg-sand", aspect, className)}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={imageUrl(id, width)}
        alt={image.alt}
        loading="lazy"
        decoding="async"
        className={cn(
          "h-full w-full object-cover",
          groupHover && "transition-transform duration-700 group-hover:scale-105",
          imgClassName,
        )}
      />
      {label && (
        <figcaption className="absolute left-3 top-3 bg-carbon/70 px-2.5 py-1 text-[0.62rem] font-medium uppercase tracking-[0.18em] text-bone/90 backdrop-blur-sm">
          {label}
        </figcaption>
      )}
      {provisional && (
        <span className="absolute bottom-3 right-3 bg-carbon/60 px-2 py-0.5 text-[0.58rem] uppercase tracking-[0.14em] text-bone/70 backdrop-blur-sm">
          Imagen ilustrativa
        </span>
      )}
    </figure>
  );
}
