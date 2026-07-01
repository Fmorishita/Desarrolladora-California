import { MapPin } from "lucide-react";
import { siteConfig } from "@/lib/site";

/**
 * Mapa embebido. Si no hay URL configurada, muestra un placeholder elegante
 * preparado para conectar Google Maps más adelante.
 */
export function MapEmbed({ label }: { label?: string }) {
  const url = siteConfig.mapsEmbedUrl;

  if (!url) {
    return (
      <div className="flex aspect-[16/9] w-full flex-col items-center justify-center gap-3 rounded-lg border border-dashed border-stone/40 bg-sand/40 text-center">
        <MapPin className="size-7 text-copper" />
        <div>
          <p className="font-display text-lg text-ink">{label ?? "Ubicación"}</p>
          <p className="mt-1 text-sm text-ink/55">
            [PLACEHOLDER: mapa pendiente de configurar]
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="aspect-[16/9] w-full overflow-hidden rounded-lg border border-border">
      <iframe
        src={url}
        title={label ?? "Mapa de ubicación"}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="h-full w-full border-0"
        allowFullScreen
      />
    </div>
  );
}
