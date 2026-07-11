import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // "Atardecer en el valle" — identidad propia de Mirador del Valle
        dusk: "#2B1F1A", // espresso profundo (fondos oscuros)
        cream: "#FAF5EC", // base clara cálida
        blush: "#EFE3D0", // arena rosada (superficies)
        clay: {
          DEFAULT: "#C2603D", // terracota (acento primario / CTA)
          deep: "#A34E30",
        },
        vine: {
          DEFAULT: "#5A6B4D", // verde vid (secundario)
          deep: "#46543C",
        },
        gold: "#D9A441", // dorado atardecer (detalles)
        cocoa: "#5C4B3F", // texto secundario cálido
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "Georgia", "serif"],
      },
      letterSpacing: { tightest: "-0.03em" },
    },
  },
  plugins: [],
};

export default config;
