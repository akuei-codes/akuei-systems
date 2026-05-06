import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const projects = [
  {
    n: "01",
    name: "Icon",
    tag: "REAL-TIME ARENA",
    desc: "A competitive coding platform with live matches, collaborative sessions, and AI-detection guarding the integrity of every keystroke.",
    stack: ["WebSockets", "Rust", "Postgres", "ML detectors"],
    accent: "from-white/10 via-white/5 to-transparent",
  },
  {
    n: "02",
    name: "FlexiGo",
    tag: "MOBILITY LAYER",
    desc: "Ride-sharing and delivery with sub-second tracking, scalable backend services, and a routing core tuned for messy, real-world cities.",
    stack: ["Microservices", "Geo-indexing", "Swift", "Node"],
    accent: "from-white/10 via-white/5 to-transparent",
  },
];

export function Projects() {
  useScrollReveal();
  return (
    <section id="projects" className="relative px-8 py-32 md:px-16 md:py-48">
      <div className="mx-auto max-w-6xl">
        <div className="scroll-reveal mb-16 flex items-center gap-4 font-mono text-[10px] tracking-[0.3em] text-muted-foreground">
          <span className="h-px w-12 bg-foreground/40" />
          02 — PROJECTS / ENVIRONMENTS
        </div>

        <div className="space-y-32 md:space-y-48">
          {projects.map((p, i) => (
            <article key={p.name} className={`scroll-reveal grid grid-cols-12 gap-8 ${i % 2 ? "md:[&>*:first-child]:order-2" : ""}`}>
              <div className="col-span-12 md:col-span-5">
                <div className={`relative aspect-[4/5] overflow-hidden rounded-2xl border border-border bg-gradient-to-br ${p.accent}`}>
                  <div className="absolute inset-0 grain" />
                  <div className="absolute inset-0 flex flex-col justify-between p-8">
                    <div className="font-mono text-[10px] tracking-[0.3em] text-muted-foreground">{p.tag}</div>
                    <ProjectVisual name={p.name} />
                    <div className="font-mono text-[10px] tracking-[0.3em] text-muted-foreground text-right">{p.n}</div>
                  </div>
                </div>
              </div>
              <div className="col-span-12 flex flex-col justify-center md:col-span-7 md:pl-12">
                <h3 className="font-display text-6xl md:text-8xl tracking-tight mb-6">{p.name}</h3>
                <p className="text-lg text-muted-foreground leading-relaxed mb-8 max-w-xl">{p.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {p.stack.map((s) => (
                    <span key={s} className="glass rounded-full px-3 py-1 font-mono text-[10px] tracking-wider text-muted-foreground">{s}</span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectVisual({ name }: { name: string }) {
  if (name === "Icon") {
    return (
      <div className="relative h-40 w-full">
        <div className="absolute inset-0 flex items-end gap-1">
          {Array.from({ length: 32 }).map((_, i) => (
            <div key={i} className="flex-1 bg-gradient-to-t from-foreground/60 to-foreground/10 rounded-sm" style={{ height: `${20 + Math.sin(i * 0.6) * 35 + 40}%`, animation: `wave ${1 + (i % 5) * 0.2}s ease-in-out infinite`, animationDelay: `${i * 0.05}s` }} />
          ))}
        </div>
      </div>
    );
  }
  return (
    <div className="relative h-40 w-full">
      <svg viewBox="0 0 200 100" className="h-full w-full">
        <path d="M10,80 Q50,20 90,60 T180,30" fill="none" stroke="currentColor" strokeWidth="0.6" className="text-foreground/60" strokeDasharray="2 3">
          <animate attributeName="stroke-dashoffset" from="0" to="-50" dur="3s" repeatCount="indefinite" />
        </path>
        <circle cx="10" cy="80" r="3" className="fill-foreground" />
        <circle cx="180" cy="30" r="3" className="fill-foreground" />
        <circle r="2" className="fill-foreground/80">
          <animateMotion dur="3s" repeatCount="indefinite" path="M10,80 Q50,20 90,60 T180,30" />
        </circle>
      </svg>
    </div>
  );
}
