import { useScrollReveal } from "@/hooks/use-scroll-reveal";

export function Startups() {
  useScrollReveal();
  return (
    <section id="startups" className="relative overflow-hidden px-8 py-32 md:px-16 md:py-48">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/[0.02] to-transparent" />
      <div className="relative mx-auto max-w-6xl">
        <div className="scroll-reveal mb-16 flex items-center gap-4 font-mono text-[10px] tracking-[0.3em] text-muted-foreground">
          <span className="h-px w-12 bg-foreground/40" />
          03 — STARTUPS / IN MARKET
        </div>

        {/* Crush */}
        <div className="scroll-reveal relative mb-32 overflow-hidden rounded-3xl border border-border glass-strong p-10 md:p-16">
          <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-white/5 blur-3xl" />
          <div className="relative grid grid-cols-12 gap-8">
            <div className="col-span-12 md:col-span-7">
              <div className="font-mono text-[10px] tracking-[0.3em] text-muted-foreground mb-4">LIVE · THOUSANDS OF STUDENTS</div>
              <h3 className="font-display text-7xl md:text-9xl tracking-tight mb-6 text-metal">Crush</h3>
              <p className="text-xl leading-relaxed text-foreground/80 max-w-xl mb-6">
                A campus of <em className="text-metal not-italic">hidden signals</em>. People privately mark who they want.
                When two signals converge, a match emerges from the noise.
              </p>
              <p className="text-base leading-relaxed text-muted-foreground max-w-xl">
                A new geometry of social interaction — built around mutual discovery instead of public performance.
              </p>
            </div>
            <div className="col-span-12 md:col-span-5">
              <CrushVisual />
            </div>
          </div>
        </div>

        {/* Veto */}
        <div className="scroll-reveal relative overflow-hidden rounded-3xl border border-border glass-strong p-10 md:p-16">
          <div className="absolute -left-32 -bottom-32 h-96 w-96 rounded-full bg-white/5 blur-3xl" />
          <div className="relative grid grid-cols-12 gap-8">
            <div className="col-span-12 md:col-span-5 order-2 md:order-1">
              <VetoVisual />
            </div>
            <div className="col-span-12 md:col-span-7 order-1 md:order-2">
              <div className="font-mono text-[10px] tracking-[0.3em] text-muted-foreground mb-4">SAFETY LAYER · AGENT INFRASTRUCTURE</div>
              <h3 className="font-display text-7xl md:text-9xl tracking-tight mb-6 text-metal">Veto</h3>
              <p className="text-xl leading-relaxed text-foreground/80 max-w-xl mb-6">
                A <em className="text-metal not-italic">control plane</em> for AI. Veto sits between decision and execution,
                intercepting harmful actions before they reach the world.
              </p>
              <p className="text-base leading-relaxed text-muted-foreground max-w-xl">
                The thin, watchful membrane between what an agent <em>could</em> do and what it <em>should</em>.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function CrushVisual() {
  const nodes = Array.from({ length: 14 });
  return (
    <div className="relative aspect-square w-full">
      <svg viewBox="0 0 200 200" className="h-full w-full">
        <defs>
          <radialGradient id="g1">
            <stop offset="0%" stopColor="white" stopOpacity="0.8" />
            <stop offset="100%" stopColor="white" stopOpacity="0" />
          </radialGradient>
        </defs>
        <line x1="60" y1="80" x2="140" y2="120" stroke="white" strokeOpacity="0.6" strokeWidth="0.4">
          <animate attributeName="stroke-opacity" values="0.2;0.9;0.2" dur="3s" repeatCount="indefinite" />
        </line>
        {nodes.map((_, i) => {
          const a = (i / nodes.length) * Math.PI * 2;
          const r = 70 + (i % 3) * 10;
          const cx = 100 + Math.cos(a) * r;
          const cy = 100 + Math.sin(a) * r;
          const matched = i === 2 || i === 8;
          return (
            <g key={i}>
              {matched && <circle cx={cx} cy={cy} r="10" fill="url(#g1)"><animate attributeName="r" values="6;14;6" dur="2s" repeatCount="indefinite" /></circle>}
              <circle cx={cx} cy={cy} r={matched ? 3 : 1.6} fill="white" fillOpacity={matched ? 1 : 0.5} />
            </g>
          );
        })}
        <circle cx="100" cy="100" r="3" fill="white" />
      </svg>
    </div>
  );
}

function VetoVisual() {
  return (
    <div className="relative aspect-square w-full">
      <svg viewBox="0 0 200 200" className="h-full w-full">
        <line x1="20" y1="100" x2="180" y2="100" stroke="white" strokeOpacity="0.15" strokeDasharray="2 3" />
        <rect x="90" y="40" width="20" height="120" fill="none" stroke="white" strokeOpacity="0.4" />
        <text x="100" y="35" textAnchor="middle" fill="white" fillOpacity="0.5" fontSize="6" fontFamily="monospace" letterSpacing="2">VETO</text>
        {[0, 1, 2, 3].map((i) => (
          <circle key={i} cx="20" cy="100" r="3" fill="white">
            <animate attributeName="cx" from="20" to="100" dur="2.5s" begin={`${i * 0.6}s`} repeatCount="indefinite" />
            <animate attributeName="opacity" values="1;1;0" keyTimes="0;0.7;1" dur="2.5s" begin={`${i * 0.6}s`} repeatCount="indefinite" />
          </circle>
        ))}
        <circle cx="180" cy="100" r="2" fill="white" fillOpacity="0.3">
          <animate attributeName="opacity" values="0.3;1;0.3" dur="3s" repeatCount="indefinite" />
        </circle>
      </svg>
    </div>
  );
}
