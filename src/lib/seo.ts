import type { Metadata } from "next";
import { siteConfig } from "@/lib/site";

/** Genera metadata consistente por página con OG y Twitter cards. */
export function buildMetadata({
  title,
  description,
  path = "/",
  imagePath = "/og-image.svg",
}: {
  title: string;
  description: string;
  path?: string;
  imagePath?: string;
}): Metadata {
  const url = `${siteConfig.url}${path}`;
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      siteName: siteConfig.name,
      locale: "es_MX",
      type: "website",
      images: [{ url: imagePath, width: 1200, height: 630, alt: siteConfig.name }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [imagePath],
    },
  };
}
