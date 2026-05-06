import { useScrollReveal } from "@/hooks/use-scroll-reveal";

export function Identity() {
  useScrollReveal();
  return (
    <section className="relative px-8 py-32 md:px-16 md:py-48">
      <div className="mx-auto max-w-6xl">
        <div className="scroll-reveal mb-16 flex items-center gap-4 font-mono text-[10px] tracking-[0.3em] text-muted-foreground">
          <span className="h-px w-12 bg-foreground/40" />
          01 — ABOUT
        </div>
        <p className="scroll-reveal font-display text-[clamp(2rem,5vw,4.5rem)] leading-[1.05] tracking-tight">
          I like building <em className="text-metal not-italic">products</em> that solve real problems
          and end up in people's <em className="italic text-foreground/70">daily lives</em>.
          Sometimes that's an app, sometimes infrastructure, sometimes a startup.
          I just like making things that work.
        </p>
        <div className="scroll-reveal mt-20 grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-border md:grid-cols-3 bg-border">
          {[
            { k: "School", v: "Princeton CS" },
            { k: "Work", v: "ML · Systems · Product" },
            { k: "Reach", v: "Thousands of users" },
            { k: "Tools", v: "PyTorch · TS · Swift" },
            { k: "Role", v: "Founder & Builder" },
            { k: "Now", v: "Crush, Veto, FlexiGo" },
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
