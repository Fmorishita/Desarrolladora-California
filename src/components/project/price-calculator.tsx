"use client";

import * as React from "react";
import { MessageCircle, Copy, Check, ArrowDown } from "lucide-react";
import { CornerMarks } from "@/components/corner-marks";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { siteConfig } from "@/lib/site";
import { cn } from "@/lib/utils";

/**
 * Cotizador de terrenos de Mirador del Valle.
 * Reglas de precio (confirmadas en el brief):
 * - Contado o financiamiento hasta 5 años → US$40/m².
 * - Financiamiento de 6 a 8 años → US$45/m².
 * - Enganche del 10% al 20%.
 * Financiamiento directo: mensualidad = saldo / meses (sin intereses ocultos).
 */

const AREA_PRESETS = [1000, 1200, 1500, 1818];
const TERM_PRESETS = [
  { years: 0, label: "Contado" },
  { years: 3, label: "3 años" },
  { years: 5, label: "5 años" },
  { years: 8, label: "8 años" },
];
const DOWN_PRESETS = [10, 15, 20];

const usd = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  maximumFractionDigits: 0,
});
const num = new Intl.NumberFormat("en-US");

function pricePerM2(years: number): number {
  return years >= 6 ? 45 : 40;
}

function Chip({
  active,
  children,
  onClick,
}: {
  active: boolean;
  children: React.ReactNode;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      className={cn(
        "h-10 border px-4 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/50",
        active
          ? "border-olive bg-olive text-bone"
          : "border-stone/40 bg-transparent text-ink/70 hover:border-olive hover:text-olive",
      )}
    >
      {children}
    </button>
  );
}

function Row({ label, value, strong }: { label: string; value: string; strong?: boolean }) {
  return (
    <div className="flex items-baseline gap-3 text-sm">
      <dt className={cn("shrink-0", strong ? "font-medium text-ink" : "text-ink/55")}>
        {label}
      </dt>
      <span
        aria-hidden
        className="flex-1 -translate-y-1 border-b border-dotted border-stone/45"
      />
      <dd
        className={cn(
          "shrink-0 text-right",
          strong ? "font-display text-lg text-olive" : "font-medium text-ink",
        )}
      >
        {value}
      </dd>
    </div>
  );
}

export function PriceCalculator() {
  const [area, setArea] = React.useState<number>(1000);
  const [areaInput, setAreaInput] = React.useState<string>("1000");
  const [years, setYears] = React.useState<number>(5);
  const [yearsInput, setYearsInput] = React.useState<string>("5");
  const [downPct, setDownPct] = React.useState<number>(10);
  const [copied, setCopied] = React.useState(false);

  function applyArea(value: string) {
    setAreaInput(value);
    const n = Number(value.replace(/[^0-9.]/g, ""));
    if (Number.isFinite(n) && n >= 100 && n <= 100000) setArea(Math.round(n));
  }
  function applyYears(value: string) {
    setYearsInput(value);
    const n = Math.round(Number(value.replace(/[^0-9]/g, "")));
    if (Number.isFinite(n) && n >= 0 && n <= 8) setYears(n);
  }
  function applyDown(value: number) {
    setDownPct(Math.min(20, Math.max(10, Math.round(value))));
  }

  const ppm2 = pricePerM2(years);
  const total = area * ppm2;
  const down = Math.round(total * (downPct / 100));
  const balance = total - down;
  const months = years * 12;
  const monthly = months > 0 ? Math.ceil(balance / months) : 0;
  const isCash = years === 0;

  const summaryLines = [
    `• Superficie: ${num.format(area)} m²`,
    `• Precio: US$${ppm2}/m² → Total: ${usd.format(total)}`,
    `• Enganche (${downPct}%): ${usd.format(down)}`,
    isCash
      ? `• Pago restante: ${usd.format(balance)} (contado)`
      : `• Saldo a financiar: ${usd.format(balance)}`,
    ...(isCash
      ? []
      : [
          `• Plazo: ${years} años (${months} meses)`,
          `• Mensualidad estimada: ${usd.format(monthly)}`,
        ]),
  ];
  const summaryText = `Hola, me interesa un terreno en Mirador del Valle. Mi cotización estimada:\n${summaryLines.join(
    "\n",
  )}\n¿Me pueden confirmar disponibilidad y siguiente paso?`;

  const waNumber = siteConfig.whatsapp.number;
  const waHref = waNumber
    ? `https://wa.me/${waNumber}?text=${encodeURIComponent(summaryText)}`
    : null;

  async function copySummary() {
    try {
      await navigator.clipboard.writeText(summaryText);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      /* clipboard no disponible */
    }
  }

  return (
    <div className="relative border border-stone/35 bg-card">
      <CornerMarks />
      <div className="grid lg:grid-cols-[1.15fr_1fr]">
        {/* Controles */}
        <div className="border-b border-stone/25 p-7 sm:p-9 lg:border-b-0 lg:border-r">
          <div className="flex items-baseline justify-between gap-4">
            <h3 className="font-display text-2xl text-ink">Cotiza tu terreno</h3>
            <span className="text-[0.65rem] font-medium uppercase tracking-[0.24em] text-copper">
              Calc MDV·01
            </span>
          </div>

          {/* Superficie */}
          <fieldset className="mt-8">
            <legend className="text-xs font-medium uppercase tracking-[0.16em] text-ink/55">
              Superficie del terreno (m²)
            </legend>
            <div className="mt-3 flex flex-wrap gap-2">
              {AREA_PRESETS.map((a) => (
                <Chip
                  key={a}
                  active={area === a}
                  onClick={() => {
                    setArea(a);
                    setAreaInput(String(a));
                  }}
                >
                  {num.format(a)} m²
                </Chip>
              ))}
            </div>
            <div className="mt-3 flex items-center gap-3">
              <Input
                inputMode="numeric"
                aria-label="Superficie manual en metros cuadrados"
                value={areaInput}
                onChange={(e) => applyArea(e.target.value)}
                className="max-w-[10rem]"
              />
              <span className="text-xs text-ink/50">u otra superficie</span>
            </div>
          </fieldset>

          {/* Plazo */}
          <fieldset className="mt-8">
            <legend className="text-xs font-medium uppercase tracking-[0.16em] text-ink/55">
              Plazo de financiamiento
            </legend>
            <div className="mt-3 flex flex-wrap gap-2">
              {TERM_PRESETS.map((t) => (
                <Chip
                  key={t.years}
                  active={years === t.years}
                  onClick={() => {
                    setYears(t.years);
                    setYearsInput(String(t.years));
                  }}
                >
                  {t.label}
                </Chip>
              ))}
            </div>
            <div className="mt-3 flex items-center gap-3">
              <Input
                inputMode="numeric"
                aria-label="Plazo manual en años (0 a 8)"
                value={yearsInput}
                onChange={(e) => applyYears(e.target.value)}
                className="max-w-[10rem]"
              />
              <span className="text-xs text-ink/50">años (0 = contado, máx. 8)</span>
            </div>
            <p className="mt-3 text-xs leading-relaxed text-ink/50">
              Hasta 5 años el precio se mantiene en US$40/m². De 6 a 8 años, el
              precio es US$45/m².
            </p>
          </fieldset>

          {/* Enganche */}
          <fieldset className="mt-8">
            <legend className="text-xs font-medium uppercase tracking-[0.16em] text-ink/55">
              Enganche
            </legend>
            <div className="mt-3 flex flex-wrap items-center gap-2">
              {DOWN_PRESETS.map((d) => (
                <Chip key={d} active={downPct === d} onClick={() => applyDown(d)}>
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
                value={downPct}
                aria-label="Porcentaje de enganche (10 a 20)"
                onChange={(e) => applyDown(Number(e.target.value))}
                className="h-1.5 w-full max-w-[16rem] cursor-pointer appearance-none rounded-full bg-sand accent-olive"
              />
              <span className="font-display text-lg text-olive">{downPct}%</span>
            </div>
          </fieldset>
        </div>

        {/* Resultado */}
        <div className="flex flex-col p-7 sm:p-9">
          <p className="text-[0.65rem] font-medium uppercase tracking-[0.24em] text-copper">
            Cotización estimada
          </p>
          <p className="mt-4 font-display text-4xl tracking-tightest text-ink sm:text-5xl">
            {usd.format(total)}
          </p>
          <p className="mt-1 text-sm text-ink/55">
            {num.format(area)} m² × US${ppm2}/m²
            {years >= 6 && " (plazo extendido)"}
          </p>

          <dl className="mt-7 flex-1 space-y-3.5">
            <Row label={`Enganche (${downPct}%)`} value={usd.format(down)} />
            <Row
              label={isCash ? "Pago restante (contado)" : "Saldo a financiar"}
              value={usd.format(balance)}
            />
            {!isCash && (
              <>
                <Row label="Plazo" value={`${years} años · ${months} meses`} />
                <Row label="Mensualidad estimada" value={usd.format(monthly)} strong />
              </>
            )}
          </dl>

          <div className="mt-8 flex flex-col gap-2.5">
            {waHref ? (
              <Button asChild size="lg" variant="primary">
                <a href={waHref} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="size-4" />
                  Enviar cotización por WhatsApp
                </a>
              </Button>
            ) : (
              <Button asChild size="lg" variant="primary">
                <a href="#interes">
                  <ArrowDown className="size-4" />
                  Solicitar esta cotización
                </a>
              </Button>
            )}
            <Button type="button" variant="outline" onClick={copySummary}>
              {copied ? <Check className="size-4" /> : <Copy className="size-4" />}
              {copied ? "Desglose copiado" : "Copiar desglose"}
            </Button>
          </div>

          <p className="mt-5 text-[0.68rem] leading-relaxed text-ink/45">
            Cotización estimada con financiamiento directo (mensualidades fijas,
            sin intereses adicionales). El monto final depende del lote elegido;
            sujeta a disponibilidad y confirmación.
          </p>
        </div>
      </div>
    </div>
  );
}
