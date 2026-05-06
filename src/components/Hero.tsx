import { useEffect, useRef } from "react";

export function Hero() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const onMove = (e: MouseEvent) => {
      const r = el.getBoundingClientRect();
      const x = (e.clientX - r.left) / r.width - 0.5;
      const y = (e.clientY - r.top) / r.height - 0.5;
      el.style.setProperty("--mx", `${x * 30}px`);
      el.style.setProperty("--my", `${y * 30}px`);
    };
    el.addEventListener("mousemove", onMove);
    return () => el.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <section id="identity" ref={ref} className="relative min-h-screen w-full overflow-hidden grain">
      {/* ambient orbs */}
      <div className="glow-orb left-[10%] top-[20%] h-[420px] w-[420px] bg-white/5" style={{ animation: "float-slow 14s ease-in-out infinite" }} />
      <div className="glow-orb right-[5%] bottom-[10%] h-[520px] w-[520px] bg-white/5" style={{ animation: "float-slow 18s ease-in-out infinite reverse" }} />

      {/* grid */}
      <div className="absolute inset-0 opacity-[0.07]" style={{
        backgroundImage: "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)",
        backgroundSize: "80px 80px",
        maskImage: "radial-gradient(ellipse at center, black 30%, transparent 75%)",
      }} />

      <div className="relative z-10 flex min-h-screen flex-col justify-between px-8 pt-32 pb-12 md:px-16">
        <div className="flex flex-col gap-8" style={{ transform: "translate(var(--mx,0), var(--my,0))", transition: "transform 0.4s ease-out" }}>
          <div className="reveal flex items-center gap-3 font-mono text-[10px] tracking-[0.3em] text-muted-foreground">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-foreground opacity-60" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-foreground" />
            </span>
            SYSTEM ONLINE — v2026.5
          </div>

          <h1 className="reveal reveal-delay-1 font-display text-[clamp(3.5rem,11vw,11rem)] leading-[0.88] tracking-tight">
            <span className="block text-metal">Akuei Johnson</span>
            <span className="block italic text-foreground/90">Ateny Akuei.</span>
          </h1>

          <div className="reveal reveal-delay-2 grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-3">
            <p className="text-base leading-relaxed text-muted-foreground md:col-span-2">
              Engineer at <span className="text-foreground">Princeton</span>, working at the seam where
              <span className="text-foreground"> machine learning</span>, <span className="text-foreground">distributed systems</span>,
              and <span className="text-foreground">human behavior</span> meet. I build products people actually use —
              and startups that change the way they meet, move, and trust software.
            </p>
            <div className="font-mono text-xs leading-relaxed text-muted-foreground space-y-1">
              <div><span className="text-foreground/60">→</span> Computer Science · Princeton</div>
              <div><span className="text-foreground/60">→</span> Founder · Crush, Veto</div>
              <div><span className="text-foreground/60">→</span> Builder · Icon, FlexiGo</div>
              <div><span className="text-foreground/60">→</span> Currently: shipping</div>
            </div>
          </div>
        </div>

        <div className="reveal reveal-delay-4 flex items-end justify-between font-mono text-[10px] tracking-[0.3em] text-muted-foreground">
          <div className="flex flex-col gap-1">
            <span>SCROLL</span>
            <span className="text-foreground/40">↓</span>
          </div>
          <div className="hidden md:block max-w-xs text-right leading-relaxed">
            "BUILD THE SYSTEM<br />THAT BUILDS THE THING."
          </div>
        </div>
      </div>
    </section>
  );
}
