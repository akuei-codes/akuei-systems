import { useEffect, useRef } from "react";
import { SplitText } from "./SplitText";

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
      <div className="glow-orb left-[10%] top-[20%] h-[420px] w-[420px] bg-white/5" style={{ animation: "float-slow 14s ease-in-out infinite" }} />
      <div className="glow-orb right-[5%] bottom-[10%] h-[520px] w-[520px] bg-white/5" style={{ animation: "float-slow 18s ease-in-out infinite reverse" }} />

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
            ONLINE — PRINCETON, NJ
          </div>

          <h1 className="font-display text-[clamp(3.5rem,11vw,11rem)] leading-[0.88] tracking-tight">
            <SplitText
              as="span"
              text="Akuei Johnson"
              className="block text-metal"
              delay={0.1}
              step={0.04}
            />
            <SplitText
              as="span"
              text="Ateny Akuei."
              className="block italic text-foreground/90"
              delay={0.7}
              step={0.04}
            />
          </h1>

          <div className="grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-3">
            <p className="text-base leading-relaxed text-muted-foreground md:col-span-2">
              <SplitText
                text="I'm a CS student at Princeton. I build things people actually use — apps, infrastructure, and a few startups. Right now I'm working on Crush, Veto, and FlexiGo."
                delay={1.4}
                step={0.012}
              />
            </p>

            <CodeBlock />
          </div>

          <div className="reveal reveal-delay-4 flex flex-wrap items-center gap-3 pt-2">
            <a
              href="/akuei-resume.pdf"
              download="Akuei_Akuei_Resume.pdf"
              data-cursor
              className="inline-flex items-center gap-2 rounded-full bg-foreground px-5 py-2.5 font-mono text-[11px] tracking-[0.2em] text-primary-foreground hover:bg-foreground/90 transition"
            >
              DOWNLOAD RESUME <span aria-hidden>↓</span>
            </a>
            <a
              href="/akuei-resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              data-cursor
              className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-2.5 font-mono text-[11px] tracking-[0.2em] text-foreground/80 hover:text-foreground hover:border-foreground/30 transition"
            >
              VIEW INLINE <span aria-hidden>↗</span>
            </a>
          </div>
        </div>

        <div className="reveal reveal-delay-4 flex items-end justify-between font-mono text-[10px] tracking-[0.3em] text-muted-foreground">
          <div className="flex flex-col gap-1">
            <span>SCROLL</span>
            <span className="text-foreground/40">↓</span>
          </div>
          <div className="hidden md:block max-w-xs text-right leading-relaxed">
            JUST KEEP BUILDING.
          </div>
        </div>
      </div>
    </section>
  );
}

/* IDE-style "now.ts" — each line gets a small base delay */
function CodeBlock() {
  const base = 1.6;
  const per = 0.18;
  const line = (n: number) => ({ animationDelay: `${base + n * per}s` });

  return (
    <div className="ide reveal reveal-delay-3" aria-hidden>
      <div className="ide-bar">
        <span className="ide-dot" style={{ background: "#ff5f56" }} />
        <span className="ide-dot" style={{ background: "#ffbd2e" }} />
        <span className="ide-dot" style={{ background: "#27c93f" }} />
        <span className="ml-3 font-mono text-[10px] tracking-[0.2em] text-muted-foreground">now.ts</span>
      </div>
      <div className="ide-body">
        <Line n={1} style={line(0)}>
          <span className="tk-com">// what I'm doing</span>
        </Line>
        <Line n={2} style={line(1)}>
          <span className="tk-key">const </span>
          <span className="tk-var">now</span>
          <span className="tk-pun">: </span>
          <span className="tk-typ">Akuei </span>
          <span className="tk-pun">= </span>
          <span className="tk-pun">{"{"}</span>
        </Line>
        <Line n={3} style={line(2)}>
          {"  "}<span className="tk-var">school</span>
          <span className="tk-pun">: </span>
          <span className="tk-str">"CS @ Princeton"</span>
          <span className="tk-pun">,</span>
        </Line>
        <Line n={4} style={line(3)}>
          {"  "}<span className="tk-var">building</span>
          <span className="tk-pun">: [</span>
          <span className="tk-str">"Crush"</span>
          <span className="tk-pun">, </span>
          <span className="tk-str">"Veto"</span>
          <span className="tk-pun">, </span>
          <span className="tk-str">"FlexiGo"</span>
          <span className="tk-pun">],</span>
        </Line>
        <Line n={5} style={line(4)}>
          {"  "}<span className="tk-var">into</span>
          <span className="tk-pun">: [</span>
          <span className="tk-str">"ML"</span>
          <span className="tk-pun">, </span>
          <span className="tk-str">"systems"</span>
          <span className="tk-pun">, </span>
          <span className="tk-str">"product"</span>
          <span className="tk-pun">],</span>
        </Line>
        <Line n={6} style={line(5)}>
          {"  "}<span className="tk-var">status</span>
          <span className="tk-pun">: </span>
          <span className="tk-fn">ship</span>
          <span className="tk-pun">(</span>
          <span className="tk-num">24</span>
          <span className="tk-pun">/</span>
          <span className="tk-num">7</span>
          <span className="tk-pun">),</span>
        </Line>
        <Line n={7} style={line(6)}>
          <span className="tk-pun">{"};"}</span>
          <span className="caret" />
        </Line>
      </div>
    </div>
  );
}

function Line({ n, style, children }: { n: number; style?: React.CSSProperties; children: React.ReactNode }) {
  return (
    <div className="ide-line reveal" style={style}>
      <span className="ide-gutter">{n}</span>
      <span>{children}</span>
    </div>
  );
}
