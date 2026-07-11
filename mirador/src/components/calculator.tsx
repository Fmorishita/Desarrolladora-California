"use client";

import * as React from "react";
import { MessageCircle, Copy, Check, ArrowDown } from "lucide-react";
import { site, project } from "@/lib/site";

const AREAS = [1000, 1200, 1500, 1818];
const TERMS = [
  { years: 0, label: "Contado" },
  { years: 3, label: "3 años" },
  { years: 5, label: "5 años" },
  { years: 8, label: "8 años" },
];
const DOWNS = [10, 15, 20];

const usd = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  maximumFractionDigits: 0,
});
const num = new Intl.NumberFormat("en-US");

function Chip({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      className={`h-10 rounded-full border px-4 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-clay/40 ${
        active
          ? "border-clay bg-clay text-cream"
          : "border-cocoa/30 text-cocoa hover:border-clay hover:text-clay"
      }`}
    >
      {children}
    </button>
  );
}

function Row({ label, value, strong }: { label: string; value: string; strong?: boolean }) {
  return (
    <div className="flex items-baseline gap-3 text-sm">
      <dt className={strong ? "shrink-0 font-semibold text-dusk" : "shrink-0 text-cocoa"}>
        {label}
      </dt>
      <span aria-hidden className="flex-1 -translate-y-1 border-b border-dotted border-cocoa/35" />
      <dd className={strong ? "shrink-0 font-display text-xl text-clay" : "shrink-0 font-semibold text-dusk"}>
        {value}
      </dd>
    </div>
  );
}

export function Calculator() {
  const [area, setArea] = React.useState(1000);
  const [areaInput, setAreaInput] = React.useState("1000");
  const [years, setYears] = React.useState(5);
  const [yearsInput, setYearsInput] = React.useState("5");
  const [down, setDown] = React.useState(10);
  const [copied, setCopied] = React.useState(false);

  function applyArea(v: string) {
    setAreaInput(v);
    const n = Number(v.replace(/[^0-9.]/g, ""));
    if (Number.isFinite(n) && n >= 100 && n <= 100000) setArea(Math.round(n));
  }
  function applyYears(v: string) {
    setYearsInput(v);
    const n = Math.round(Number(v.replace(/[^0-9]/g, "")));
    if (Number.isFinite(n) && n >= 0 && n <= project.maxYearsExtended) setYears(n);
  }

  const ppm2 = years > project.maxYearsBase ? project.pricePerM2Extended : project.pricePerM2;
  const total = area * ppm2;
  const downAmt = Math.round(total * (down / 100));
  const balance = total - downAmt;
  const months = years * 12;
  const monthly = months > 0 ? Math.ceil(balance / months) : 0;
  const isCash = years === 0;

  const lines = [
    `• Superficie: ${num.format(area)} m²`,
    `• Precio: US$${ppm2}/m² → Total: ${usd.format(total)}`,
    `• Enganche (${down}%): ${usd.format(downAmt)}`,
    isCash
      ? `• Pago restante: ${usd.format(balance)} (contado)`
      : `• Saldo a financiar: ${usd.format(balance)}`,
    ...(isCash
      ? []
      : [`• Plazo: ${years} años (${months} meses)`, `• Mensualidad estimada: ${usd.format(monthly)}`]),
  ];
  const summary = `Hola, me interesa un terreno en Mirador del Valle. Mi cotización estimada:\n${lines.join("\n")}\n¿Me pueden confirmar disponibilidad y siguiente paso?`;
  const wa = site.whatsapp
    ? `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(summary)}`
    : null;

  async function copy() {
    try {
      await navigator.clipboard.writeText(summary);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      /* clipboard no disponible */
    }
  }

  return (
    <div className="overflow-hidden rounded-2xl border border-cocoa/20 bg-white/60 shadow-sm">
      <div className="grid lg:grid-cols-[1.15fr_1fr]">
        <div className="border-b border-cocoa/15 p-7 sm:p-9 lg:border-b-0 lg:border-r">
          <h3 className="font-display text-2xl">Cotiza tu terreno</h3>

          <fieldset className="mt-7">
            <legend className="text-xs font-semibold uppercase tracking-[0.16em] text-cocoa">
              Superficie (m²)
            </legend>
            <div className="mt-3 flex flex-wrap gap-2">
              {AREAS.map((a) => (
                <Chip key={a} active={area === a} onClick={() => { setArea(a); setAreaInput(String(a)); }}>
                  {num.format(a)} m²
                </Chip>
              ))}
            </div>
            <div className="mt-3 flex items-center gap-3">
              <input
                inputMode="numeric"
                aria-label="Superficie manual en m²"
                value={areaInput}
                onChange={(e) => applyArea(e.target.value)}
                className="field max-w-[9rem]"
              />
              <span className="text-xs text-cocoa/70">u otra superficie</span>
            </div>
          </fieldset>

          <fieldset className="mt-7">
            <legend className="text-xs font-semibold uppercase tracking-[0.16em] text-cocoa">
              Plazo de financiamiento
            </legend>
            <div className="mt-3 flex flex-wrap gap-2">
              {TERMS.map((t) => (
                <Chip key={t.years} active={years === t.years} onClick={() => { setYears(t.years); setYearsInput(String(t.years)); }}>
                  {t.label}
                </Chip>
              ))}
            </div>
            <div className="mt-3 flex items-center gap-3">
              <input
                inputMode="numeric"
                aria-label="Plazo manual en años (0 a 8)"
                value={yearsInput}
                onChange={(e) => applyYears(e.target.value)}
                className="field max-w-[9rem]"
              />
              <span className="text-xs text-cocoa/70">años (0 = contado, máx. 8)</span>
            </div>
            <p className="mt-3 text-xs leading-relaxed text-cocoa/70">
              Hasta 5 años el precio se mantiene en US$40/m². De 6 a 8 años, US$45/m².
            </p>
          </fieldset>

          <fieldset className="mt-7">
            <legend className="text-xs font-semibold uppercase tracking-[0.16em] text-cocoa">
              Enganche
            </legend>
            <div className="mt-3 flex flex-wrap items-center gap-2">
              {DOWNS.map((d) => (
                <Chip key={d} active={down === d} onClick={() => setDown(d)}>
                  {d}%
                </Chip>
              ))}
            </div>
            <div className="mt-4 flex items-center gap-4">
              <input
                type="range"
                min={10}
                max={20}
                step={1}
                value={down}
                aria-label="Porcentaje de enganche (10 a 20)"
                onChange={(e) => setDown(Number(e.target.value))}
                className="h-1.5 w-full max-w-[15rem] cursor-pointer appearance-none rounded-full bg-blush accent-clay"
              />
              <span className="font-display text-lg text-clay">{down}%</span>
            </div>
          </fieldset>
        </div>

        <div className="flex flex-col bg-blush/50 p-7 sm:p-9">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-clay">
            Cotización estimada
          </p>
          <p className="mt-3 font-display text-4xl tracking-tightest sm:text-5xl">
            {usd.format(total)}
          </p>
          <p className="mt-1 text-sm text-cocoa">
            {num.format(area)} m² × US${ppm2}/m²{years > project.maxYearsBase && " (plazo extendido)"}
          </p>

          <dl className="mt-6 flex-1 space-y-3">
            <Row label={`Enganche (${down}%)`} value={usd.format(downAmt)} />
            <Row label={isCash ? "Pago restante (contado)" : "Saldo a financiar"} value={usd.format(balance)} />
            {!isCash && (
              <>
                <Row label="Plazo" value={`${years} años · ${months} meses`} />
                <Row label="Mensualidad estimada" value={usd.format(monthly)} strong />
              </>
            )}
          </dl>

          <div className="mt-7 flex flex-col gap-2.5">
            {wa ? (
              <a href={wa} target="_blank" rel="noopener noreferrer" className="btn-primary">
                <MessageCircle className="size-4" />
                Enviar cotización por WhatsApp
              </a>
            ) : (
              <a href="#contacto" className="btn-primary">
                <ArrowDown className="size-4" />
                Solicitar esta cotización
              </a>
            )}
            <button type="button" onClick={copy} className="btn-outline">
              {copied ? <Check className="size-4" /> : <Copy className="size-4" />}
              {copied ? "Desglose copiado" : "Copiar desglose"}
            </button>
          </div>

          <p className="mt-4 text-[0.68rem] leading-relaxed text-cocoa/70">
            Cotización estimada con financiamiento directo (mensualidades fijas). El monto final
            depende del lote elegido; sujeta a disponibilidad y confirmación.
          </p>
        </div>
      </div>
    </div>
  );
}
