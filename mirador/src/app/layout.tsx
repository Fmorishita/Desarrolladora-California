import type { Metadata } from "next";
import { Inter, Fraunces } from "next/font/google";
import "./globals.css";
import { site } from "@/lib/site";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans", display: "swap" });
const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
  style: ["normal", "italic"],
  axes: ["opsz"],
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: "Mirador del Valle | Terrenos cerca de Valle de Guadalupe desde US$45/m²",
  description:
    "Terrenos amplios de ≈1,000 m² a 4 minutos de Arena Valle de Guadalupe. Desde US$45/m², enganche del 10% al 20% y financiamiento hasta 8 años sin intereses.",
  alternates: { canonical: site.url },
  openGraph: {
    title: "Mirador del Valle | Terrenos cerca de Valle de Guadalupe",
    description:
      "Terrenos amplios desde US$45/m² con enganche flexible y financiamiento sin intereses. ≈60 terrenos disponibles.",
    url: site.url,
    siteName: site.name,
    locale: "es_MX",
    type: "website",
    images: [{ url: "/og-image.svg", width: 1200, height: 630, alt: site.name }],
  },
  twitter: { card: "summary_large_image" },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es" className={`${inter.variable} ${fraunces.variable}`}>
      <body>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Place",
              name: "Mirador del Valle",
              description:
                "Proyecto de lotificación con terrenos amplios cerca de Valle de Guadalupe, Baja California.",
              url: site.url,
              address: {
                "@type": "PostalAddress",
                addressRegion: "Baja California",
                addressCountry: "MX",
              },
            }),
          }}
        />
      </body>
    </html>
  );
}
