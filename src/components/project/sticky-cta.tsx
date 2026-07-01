"use client";

import * as React from "react";
import { MessageCircle } from "lucide-react";
import { whatsappUrl } from "@/lib/site";

/**
 * Barra CTA fija inferior para móvil en la página de proyecto.
 * Aparece tras el primer scroll; en desktop no se muestra.
 */
export function StickyCTA({
  priceLabel,
  targetId = "interes",
}: {
  priceLabel: string;
  targetId?: string;
}) {
  const [visible, setVisible] = React.useState(false);
  const wa = whatsappUrl("mirador");

  React.useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 480);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={`fixed inset-x-0 bottom-0 z-40 border-t border-bone/15 bg-carbon/95 px-4 py-3 backdrop-blur transition-transform duration-300 lg:hidden ${
        visible ? "translate-y-0" : "translate-y-full"
      }`}
    >
      <div className="flex items-center justify-between gap-3">
        <p className="min-w-0 text-sm text-bone/85">
          <span className="block truncate font-display">{priceLabel}</span>
        </p>
        <div className="flex shrink-0 items-center gap-2">
          {wa && (
            <a
              href={wa}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="inline-flex size-10 items-center justify-center rounded-md border border-bone/25 text-bone"
            >
              <MessageCircle className="size-5" />
            </a>
          )}
          <a
            href={`#${targetId}`}
            className="inline-flex h-10 items-center rounded-md bg-copper px-5 text-sm font-medium text-carbon"
          >
            Solicitar información
          </a>
        </div>
      </div>
    </div>
  );
}
