import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const groups = [
  { label: "Languages", items: ["Java", "Python", "TypeScript", "Swift", "SQL"] },
  { label: "Frameworks", items: ["React", "Next.js", "PyTorch", "Docker"] },
  { label: "Domains", items: ["Distributed Systems", "API Design", "ML Engineering", "Reinforcement Learning", "System Design"] },
  { label: "Practice", items: ["Neural Networks", "Simulation", "Microservices", "Real-time Infra", "Product Engineering"] },
];

export function Capabilities() {
  useScrollReveal();
  return (
    <section id="capabilities" className="relative px-8 py-32 md:px-16 md:py-48">
      <div className="mx-auto max-w-6xl">
        <div className="scroll-reveal mb-16 flex items-center gap-4 font-mono text-[10px] tracking-[0.3em] text-muted-foreground">
          <span className="h-px w-12 bg-foreground/40" />
          04 — CAPABILITY SYSTEM
        </div>
        <h2 className="scroll-reveal font-display text-5xl md:text-7xl tracking-tight mb-20 max-w-3xl">
          A toolkit shaped by <em className="text-metal not-italic">research</em>, sharpened in <em className="italic">production</em>.
        </h2>
        <div className="grid gap-px overflow-hidden rounded-2xl border border-border bg-border md:grid-cols-2">
          {groups.map((g) => (
            <div key={g.label} className="scroll-reveal bg-background p-8 md:p-10">
              <div className="font-mono text-[10px] tracking-[0.3em] text-muted-foreground mb-6">{g.label.toUpperCase()}</div>
              <div className="flex flex-wrap gap-x-6 gap-y-3">
                {g.items.map((it) => (
                  <span key={it} className="font-display text-2xl md:text-3xl text-foreground/90 hover:text-metal transition-colors" data-cursor>
                    {it}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="scroll-reveal mt-16 overflow-hidden border-y border-border py-6">
          <div className="marquee flex gap-16 whitespace-nowrap font-display text-3xl md:text-5xl text-foreground/30">
            {Array.from({ length: 2 }).map((_, k) => (
              <div key={k} className="flex gap-16">
                {["RESEARCH", "·", "STARTUPS", "·", "INDUSTRY", "·", "PRINCETON", "·", "ML", "·", "SYSTEMS", "·", "PRODUCT", "·"].map((w, i) => (
                  <span key={i}>{w}</span>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
