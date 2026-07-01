import Link from "next/link";
import { Mail, MessageCircle } from "lucide-react";
import { siteConfig, navLinks, whatsappUrl } from "@/lib/site";
import { Logo } from "@/components/layout/logo";
import { TopographicBackground } from "@/components/topographic-background";

export function Footer() {
  const wa = whatsappUrl("general");
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden bg-carbon text-bone">
      <TopographicBackground variant="dark" />
      <div className="container-tight relative py-16 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr]">
          <div className="max-w-sm">
            <Logo tone="dark" />
            <p className="mt-5 text-sm leading-relaxed text-bone/65">
              {siteConfig.tagline} Planeación, urbanización, lotificación y
              comercialización de proyectos de tierra con visión estratégica.
            </p>
          </div>

          <div>
            <h3 className="text-xs font-medium uppercase tracking-[0.22em] text-copper">
              Navegación
            </h3>
            <ul className="mt-5 space-y-3 text-sm">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-bone/70 transition-colors hover:text-bone"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-medium uppercase tracking-[0.22em] text-copper">
              Contacto
            </h3>
            <ul className="mt-5 space-y-3 text-sm">
              {siteConfig.contactEmail && (
                <li>
                  <a
                    href={`mailto:${siteConfig.contactEmail}`}
                    className="inline-flex items-center gap-2 text-bone/70 transition-colors hover:text-bone"
                  >
                    <Mail className="size-4 text-copper" />
                    {siteConfig.contactEmail}
                  </a>
                </li>
              )}
              {wa && (
                <li>
                  <a
                    href={wa}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-bone/70 transition-colors hover:text-bone"
                  >
                    <MessageCircle className="size-4 text-copper" />
                    WhatsApp
                  </a>
                </li>
              )}
              <li>
                <Link
                  href="/contacto"
                  className="text-bone/70 transition-colors hover:text-bone"
                >
                  Formulario de contacto
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-bone/12 pt-8 text-xs text-bone/50 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {siteConfig.legalName}. Todos los derechos reservados.
          </p>
          <p className="text-bone/40">
            Los datos y esquemas comerciales están sujetos a confirmación.
          </p>
        </div>
      </div>
    </footer>
  );
}
