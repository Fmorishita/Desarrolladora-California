/**
 * Motivo de marca de Mirador del Valle: arcos concéntricos de horizonte
 * (un "mirador" = punto de observación sobre el valle). Decorativo.
 */
export function HorizonArcs({
  tone = "dark",
  className = "",
}: {
  tone?: "dark" | "light";
  className?: string;
}) {
  const stroke = tone === "dark" ? "#D9A441" : "#C2603D";
  const opacity = tone === "dark" ? 0.18 : 0.12;
  return (
    <div aria-hidden className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}>
      <svg
        className="h-full w-full"
        viewBox="0 0 1200 700"
        preserveAspectRatio="xMidYMax slice"
        fill="none"
      >
        <g stroke={stroke} strokeWidth="1" style={{ opacity }}>
          {[240, 330, 420, 510, 600].map((r) => (
            <path
              key={r}
              d={`M ${600 - r} 700 A ${r} ${r} 0 0 1 ${600 + r} 700`}
            />
          ))}
          <line x1="0" y1="700" x2="1200" y2="700" />
          {/* sol poniente */}
          <circle cx="600" cy="700" r="60" fill={stroke} fillOpacity="0.12" stroke="none" />
        </g>
      </svg>
    </div>
  );
}
