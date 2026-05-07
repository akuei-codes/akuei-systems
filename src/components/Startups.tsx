import { useScrollReveal } from "@/hooks/use-scroll-reveal";

export function Startups() {
  useScrollReveal();
  return (
    <section
      id="startups"
      className="relative overflow-hidden px-6 py-28 md:px-12 md:py-44 lg:px-20"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[oklch(0.72_0.12_300/0.04)] to-transparent" />
      <div className="relative mx-auto max-w-6xl">
        <div className="scroll-reveal mb-14 flex items-center gap-4 font-mono text-[10px] tracking-[0.3em] text-muted-foreground">
          <span className="h-px w-14 bg-gradient-to-r from-transparent via-foreground/50 to-foreground/20" />
          02 — STARTUPS
        </div>

        {/* Crush */}
        <div className="scroll-reveal relative mb-28 overflow-hidden rounded-[1.75rem] border border-border/80 bg-[oklch(0.09_0.02_15/0.55)] p-10 backdrop-blur-md md:p-16 panel-accent-rose">
          <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-white/5 blur-3xl" />
          <div className="relative grid grid-cols-12 gap-8">
            <div className="col-span-12 md:col-span-7">
              <div className="font-mono text-[10px] tracking-[0.3em] text-muted-foreground mb-4">
                LIVE · USED BY THOUSANDS OF STUDENTS
              </div>
              <h3 className="font-display text-7xl md:text-9xl tracking-tight mb-6 text-metal">
                Crush
              </h3>
              <p className="text-xl leading-relaxed text-foreground/80 max-w-xl mb-4">
                Add people you like, anonymously, using your school email. If they pick you back,
                it's a match.
              </p>
              <p className="text-base leading-relaxed text-muted-foreground max-w-xl mb-8">
                That's it. Already running on campuses across the country.
              </p>
              <a
                href="https://try-crush.com"
                target="_blank"
                rel="noopener noreferrer"
                data-cursor
                className="inline-flex items-center gap-2 font-mono text-xs tracking-[0.2em] text-foreground hover:text-metal transition"
              >
                TRY-CRUSH.COM <span aria-hidden>↗</span>
              </a>
            </div>
            <div className="col-span-12 md:col-span-5">
              <CrushVisual />
            </div>
          </div>
        </div>

        {/* Veto */}
        <div className="scroll-reveal relative mb-28 overflow-hidden rounded-[1.75rem] border border-border/80 bg-[oklch(0.09_0.025_85/0.5)] p-10 backdrop-blur-md md:p-16 panel-accent-amber">
          <div className="absolute -left-32 -bottom-32 h-96 w-96 rounded-full bg-white/5 blur-3xl" />
          <div className="relative grid grid-cols-12 gap-8">
            <div className="col-span-12 md:col-span-5 order-2 md:order-1">
              <VetoVisual />
            </div>
            <div className="col-span-12 md:col-span-7 order-1 md:order-2">
              <div className="font-mono text-[10px] tracking-[0.3em] text-muted-foreground mb-4">
                SAFETY LAYER FOR AI AGENTS
              </div>
              <h3 className="font-display text-7xl md:text-9xl tracking-tight mb-6 text-metal">
                Veto
              </h3>
              <p className="text-xl leading-relaxed text-foreground/80 max-w-xl mb-4">
                Veto sits between AI agents and the actions they want to take. Risky moves get
                stopped before they happen.
              </p>
              <p className="text-base leading-relaxed text-muted-foreground max-w-xl mb-8">
                Prevention, not a log file you read after the damage is done.
              </p>
              <a
                href="https://www.veto.ink"
                target="_blank"
                rel="noopener noreferrer"
                data-cursor
                className="inline-flex items-center gap-2 font-mono text-xs tracking-[0.2em] text-foreground hover:text-metal transition"
              >
                VETO.INK <span aria-hidden>↗</span>
              </a>
            </div>
          </div>
        </div>

        {/* FlexiGo */}
        <div className="scroll-reveal relative overflow-hidden rounded-[1.75rem] border border-border/80 bg-[oklch(0.088_0.02_200/0.5)] p-10 backdrop-blur-md md:p-16 panel-accent-teal">
          <div className="absolute -right-24 top-1/2 h-96 w-96 -translate-y-1/2 rounded-full bg-white/5 blur-3xl" />
          <div className="relative grid grid-cols-12 gap-8">
            <div className="col-span-12 md:col-span-7">
              <div className="font-mono text-[10px] tracking-[0.3em] text-muted-foreground mb-4">
                LAUNCHING SOON · EAST AFRICA
              </div>
              <h3 className="font-display text-7xl md:text-9xl tracking-tight mb-6 text-metal">
                FlexiGo
              </h3>
              <p className="text-xl leading-relaxed text-foreground/80 max-w-xl mb-4">
                A rideshare and delivery app built for East Africa. Designed for how people actually
                move and send things at home.
              </p>
              <p className="text-base leading-relaxed text-muted-foreground max-w-xl">
                Simpler logistics, more access, fewer middlemen.
              </p>
            </div>
            <div className="col-span-12 md:col-span-5">
              <FlexiGoVisual />
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
        <line
          x1="60"
          y1="80"
          x2="140"
          y2="120"
          stroke="white"
          strokeOpacity="0.6"
          strokeWidth="0.4"
        >
          <animate
            attributeName="stroke-opacity"
            values="0.2;0.9;0.2"
            dur="3s"
            repeatCount="indefinite"
          />
        </line>
        {nodes.map((_, i) => {
          const a = (i / nodes.length) * Math.PI * 2;
          const r = 70 + (i % 3) * 10;
          const cx = 100 + Math.cos(a) * r;
          const cy = 100 + Math.sin(a) * r;
          const matched = i === 2 || i === 8;
          return (
            <g key={i}>
              {matched && (
                <circle cx={cx} cy={cy} r="10" fill="url(#g1)">
                  <animate attributeName="r" values="6;14;6" dur="2s" repeatCount="indefinite" />
                </circle>
              )}
              <circle
                cx={cx}
                cy={cy}
                r={matched ? 3 : 1.6}
                fill="white"
                fillOpacity={matched ? 1 : 0.5}
              />
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
        <line
          x1="20"
          y1="100"
          x2="180"
          y2="100"
          stroke="white"
          strokeOpacity="0.15"
          strokeDasharray="2 3"
        />
        <rect
          x="90"
          y="40"
          width="20"
          height="120"
          fill="none"
          stroke="white"
          strokeOpacity="0.4"
        />
        <text
          x="100"
          y="35"
          textAnchor="middle"
          fill="white"
          fillOpacity="0.5"
          fontSize="6"
          fontFamily="monospace"
          letterSpacing="2"
        >
          VETO
        </text>
        {[0, 1, 2, 3].map((i) => (
          <circle key={i} cx="20" cy="100" r="3" fill="white">
            <animate
              attributeName="cx"
              from="20"
              to="100"
              dur="2.5s"
              begin={`${i * 0.6}s`}
              repeatCount="indefinite"
            />
            <animate
              attributeName="opacity"
              values="1;1;0"
              keyTimes="0;0.7;1"
              dur="2.5s"
              begin={`${i * 0.6}s`}
              repeatCount="indefinite"
            />
          </circle>
        ))}
        <circle cx="180" cy="100" r="2" fill="white" fillOpacity="0.3">
          <animate attributeName="opacity" values="0.3;1;0.3" dur="3s" repeatCount="indefinite" />
        </circle>
      </svg>
    </div>
  );
}

function FlexiGoVisual() {
  return (
    <div className="relative aspect-square w-full">
      <svg viewBox="0 0 200 200" className="h-full w-full">
        <defs>
          <path id="route" d="M30,160 Q60,120 90,130 T150,70 Q170,55 175,30" fill="none" />
        </defs>
        {/* faint road grid */}
        {[40, 80, 120, 160].map((y) => (
          <line key={y} x1="0" y1={y} x2="200" y2={y} stroke="white" strokeOpacity="0.05" />
        ))}
        {[40, 80, 120, 160].map((x) => (
          <line key={x} x1={x} y1="0" x2={x} y2="200" stroke="white" strokeOpacity="0.05" />
        ))}
        <use
          href="#route"
          stroke="white"
          strokeOpacity="0.5"
          strokeWidth="0.6"
          strokeDasharray="3 3"
        />
        <circle cx="30" cy="160" r="3" fill="white" />
        <circle cx="175" cy="30" r="3" fill="white" />
        <circle r="3.5" fill="white">
          <animateMotion dur="4s" repeatCount="indefinite">
            <mpath href="#route" />
          </animateMotion>
        </circle>
        <circle r="8" fill="white" fillOpacity="0.15">
          <animateMotion dur="4s" repeatCount="indefinite">
            <mpath href="#route" />
          </animateMotion>
        </circle>
        <text
          x="30"
          y="178"
          fill="white"
          fillOpacity="0.5"
          fontSize="6"
          fontFamily="monospace"
          letterSpacing="1"
        >
          PICKUP
        </text>
        <text
          x="175"
          y="22"
          textAnchor="end"
          fill="white"
          fillOpacity="0.5"
          fontSize="6"
          fontFamily="monospace"
          letterSpacing="1"
        >
          DROP
        </text>
      </svg>
    </div>
  );
}
