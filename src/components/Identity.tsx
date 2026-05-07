import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const cells = [
  { k: "School", v: "Princeton CS", glow: "from-[oklch(0.5_0.12_280)]" },
  { k: "Work", v: "ML · Systems · Product", glow: "from-[oklch(0.55_0.14_85)]" },
  { k: "Reach", v: "Thousands of users", glow: "from-[oklch(0.52_0.18_310)]" },
  { k: "Tools", v: "PyTorch · TS · Swift", glow: "from-[oklch(0.48_0.1_220)]" },
  { k: "Role", v: "Founder & Builder", glow: "from-[oklch(0.5_0.15_305)]" },
  { k: "Now", v: "Crush, Veto, FlexiGo", glow: "from-[oklch(0.48_0.13_190)]" },
];

export function Identity() {
  useScrollReveal();
  return (
    <section id="identity" className="relative px-6 py-28 md:px-12 md:py-44 lg:px-20">
      <div
        className="pointer-events-none absolute -left-24 top-24 h-72 w-72 rounded-full bg-[oklch(0.55_0.18_300/0.12)] blur-[100px]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -right-16 bottom-24 h-80 w-80 rounded-full bg-[oklch(0.52_0.12_200/0.12)] blur-[100px]"
        aria-hidden
      />

      <div className="relative mx-auto max-w-6xl">
        <div className="scroll-reveal mb-14 flex items-center gap-4 font-mono text-[10px] tracking-[0.3em] text-muted-foreground">
          <span className="h-px w-14 bg-gradient-to-r from-transparent via-foreground/50 to-foreground/20" />
          01 — ABOUT
        </div>

        <p className="scroll-reveal font-display text-[clamp(2rem,5.2vw,4.75rem)] leading-[1.04] tracking-tight">
          I like building <em className="text-metal not-italic">products</em> that solve real
          problems and end up in people&apos;s{" "}
          <em className="italic text-foreground/75">daily lives</em>. Sometimes that&apos;s an app,
          sometimes infrastructure, sometimes a startup. I just like making things that{" "}
          <span className="text-foreground/90">work</span>.
        </p>

        <div className="scroll-reveal mt-16 grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3">
          {cells.map((c) => (
            <div
              key={c.k}
              className="group relative overflow-hidden rounded-2xl border border-border/80 bg-[oklch(0.085_0.02_280/0.45)] p-8 section-glow-hairline transition-all duration-500 hover:border-foreground/22 hover:-translate-y-0.5"
              onMouseMove={(e) => {
                const r = e.currentTarget.getBoundingClientRect();
                e.currentTarget.style.setProperty("--bx", `${e.clientX - r.left}px`);
                e.currentTarget.style.setProperty("--by", `${e.clientY - r.top}px`);
              }}
            >
              <div
                className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                style={{
                  background:
                    "radial-gradient(420px circle at var(--bx, 40%) var(--by, 30%), oklch(1 0 0 / 0.08), transparent 55%)",
                }}
              />
              <div
                className={`pointer-events-none absolute -inset-px bg-gradient-to-br ${c.glow} via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-[0.35]`}
              />
              <div className="relative">
                <div className="mb-4 font-mono text-[10px] tracking-[0.28em] text-muted-foreground">
                  {c.k.toUpperCase()}
                </div>
                <div className="font-display text-2xl leading-snug tracking-tight text-foreground/95 lg:text-[1.65rem]">
                  {c.v}
                </div>
              </div>
              <span className="pointer-events-none absolute bottom-4 right-4 block h-px w-10 bg-gradient-to-r from-transparent to-foreground/35 opacity-30 transition-opacity group-hover:opacity-90" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
