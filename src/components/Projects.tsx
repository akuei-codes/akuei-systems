import { useScrollReveal } from "@/hooks/use-scroll-reveal";

export function Projects() {
  useScrollReveal();
  return (
    <section id="projects" className="relative px-8 py-32 md:px-16 md:py-48">
      <div className="mx-auto max-w-6xl">
        <div className="scroll-reveal mb-16 flex items-center gap-4 font-mono text-[10px] tracking-[0.3em] text-muted-foreground">
          <span className="h-px w-12 bg-foreground/40" />
          02 — OTHER WORK
        </div>

        <article className="scroll-reveal grid grid-cols-12 gap-8">
          <div className="col-span-12 md:col-span-5">
            <div className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-border bg-gradient-to-br from-white/10 via-white/5 to-transparent">
              <div className="absolute inset-0 grain" />
              <div className="absolute inset-0 flex flex-col justify-between p-8">
                <div className="font-mono text-[10px] tracking-[0.3em] text-muted-foreground">REAL-TIME ARENA</div>
                <div className="relative h-40 w-full">
                  <div className="absolute inset-0 flex items-end gap-1">
                    {Array.from({ length: 32 }).map((_, i) => (
                      <div key={i} className="flex-1 bg-gradient-to-t from-foreground/60 to-foreground/10 rounded-sm" style={{ height: `${20 + Math.sin(i * 0.6) * 35 + 40}%`, animation: `wave ${1 + (i % 5) * 0.2}s ease-in-out infinite`, animationDelay: `${i * 0.05}s` }} />
                    ))}
                  </div>
                </div>
                <div className="font-mono text-[10px] tracking-[0.3em] text-muted-foreground text-right">01</div>
              </div>
            </div>
          </div>
          <div className="col-span-12 flex flex-col justify-center md:col-span-7 md:pl-12">
            <h3 className="font-display text-6xl md:text-8xl tracking-tight mb-6">Icon</h3>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8 max-w-xl">
              A real-time competitive coding platform. Live matches, shared sessions,
              and detection that catches AI-generated code while you type.
            </p>
            <div className="flex flex-wrap gap-2">
              {["WebSockets", "Rust", "Postgres", "ML detectors"].map((s) => (
                <span key={s} className="glass rounded-full px-3 py-1 font-mono text-[10px] tracking-wider text-muted-foreground">{s}</span>
              ))}
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}
