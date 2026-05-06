import { useScrollReveal } from "@/hooks/use-scroll-reveal";

export function Identity() {
  useScrollReveal();
  return (
    <section className="relative px-8 py-32 md:px-16 md:py-48">
      <div className="mx-auto max-w-6xl">
        <div className="scroll-reveal mb-16 flex items-center gap-4 font-mono text-[10px] tracking-[0.3em] text-muted-foreground">
          <span className="h-px w-12 bg-foreground/40" />
          01 — IDENTITY
        </div>
        <p className="scroll-reveal font-display text-[clamp(2rem,5vw,4.5rem)] leading-[1.05] tracking-tight">
          I think in <em className="text-metal not-italic">systems</em>. I build with
          <em className="italic text-foreground/70"> intention</em>. I ship things that <span className="text-metal">touch real people</span> —
          a campus of students discovering each other, riders moving through cities,
          coders racing in real-time, AI agents kept on a leash.
        </p>
        <div className="scroll-reveal mt-20 grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-border md:grid-cols-3 bg-border">
          {[
            { k: "Edu", v: "Princeton CS" },
            { k: "Domain", v: "ML · Systems · Product" },
            { k: "Scale", v: "Thousands of users" },
            { k: "Stack", v: "PyTorch · TS · Swift" },
            { k: "Mode", v: "Founder & Builder" },
            { k: "Now", v: "Shipping Crush & Veto" },
          ].map((c) => (
            <div key={c.k} className="bg-background p-8 hairline">
              <div className="font-mono text-[10px] tracking-[0.25em] text-muted-foreground mb-3">{c.k.toUpperCase()}</div>
              <div className="font-display text-2xl">{c.v}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
