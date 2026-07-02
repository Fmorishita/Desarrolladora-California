import { SitePhoto } from "@/components/site-photo";
import { Reveal } from "@/components/motion/reveal";
import type { SiteImageId } from "@/lib/images";

export interface MosaicItem {
  id: SiteImageId;
  label?: string;
}

/**
 * Mosaico editorial de 4 imágenes: pieza dominante, dos de apoyo y una
 * franja cinemática. En móvil, carrusel horizontal con scroll-snap.
 */
export function PhotoMosaic({ items }: { items: MosaicItem[] }) {
  const [main, second, third, wide] = items;
  if (!main) return null;

  return (
    <>
      {/* Móvil: carrusel snap */}
      <div className="-mx-6 flex snap-x snap-mandatory gap-3 overflow-x-auto px-6 pb-2 lg:hidden">
        {items.map((item, i) => (
          <div key={i} className="w-[78%] shrink-0 snap-center">
            <SitePhoto id={item.id} label={item.label} aspect="aspect-[4/3]" width={800} />
          </div>
        ))}
      </div>

      {/* Desktop: mosaico asimétrico */}
      <div className="hidden gap-4 lg:grid lg:grid-cols-12 lg:grid-rows-2">
        <Reveal className="col-span-7 row-span-2 h-full">
          <SitePhoto
            id={main.id}
            label={main.label}
            aspect=""
            className="h-full"
            width={1400}
          />
        </Reveal>
        {second && (
          <Reveal index={1} className="col-span-5">
            <SitePhoto id={second.id} label={second.label} aspect="aspect-[16/9]" width={800} />
          </Reveal>
        )}
        {third && (
          <Reveal index={2} className="col-span-5">
            <SitePhoto id={third.id} label={third.label} aspect="aspect-[16/9]" width={800} />
          </Reveal>
        )}
        {wide && (
          <Reveal index={3} className="col-span-12">
            <SitePhoto id={wide.id} label={wide.label} aspect="aspect-[21/7]" width={1600} />
          </Reveal>
        )}
      </div>
    </>
  );
}
