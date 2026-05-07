import { useCallback, useEffect, useLayoutEffect, useRef, useState } from "react";

type Quanta = {
  id: string;
  title: string;
  subtitle: string;
  color: string;
  glow: string;
};

const QUANTA: Quanta[] = [
  {
    id: "crush",
    title: "Crush",
    subtitle:
      "Anonymous campus matching — mutual picks reveal. Thousands of students, one honest loop.",
    color: "oklch(0.72 0.2 355)",
    glow: "oklch(0.75 0.22 350 / 0.55)",
  },
  {
    id: "veto",
    title: "Veto",
    subtitle: "A safety membrane for AI agents: intercept risky actions before execution.",
    color: "oklch(0.78 0.16 85)",
    glow: "oklch(0.82 0.18 90 / 0.5)",
  },
  {
    id: "flexigo",
    title: "FlexiGo",
    subtitle:
      "Rideshare and delivery imagined for East Africa — fewer middlemen, more street-level access.",
    color: "oklch(0.68 0.14 190)",
    glow: "oklch(0.65 0.16 195 / 0.5)",
  },
  {
    id: "princeton",
    title: "Princeton CS",
    subtitle: "Where theory meets shipping — systems, ML, and products in parallel.",
    color: "oklch(0.72 0.12 285)",
    glow: "oklch(0.7 0.14 300 / 0.45)",
  },
  {
    id: "ml",
    title: "ML that ships",
    subtitle:
      "PyTorch pipelines built for iteration — models judged by latency and human outcomes.",
    color: "oklch(0.74 0.14 295)",
    glow: "oklch(0.76 0.16 310 / 0.45)",
  },
  {
    id: "realtime",
    title: "Real-time ethos",
    subtitle: "WebSockets and live arenas — if it’s live, latency is UX.",
    color: "oklch(0.72 0.16 245)",
    glow: "oklch(0.68 0.18 250 / 0.45)",
  },
  {
    id: "ship",
    title: "Ship 24/7",
    subtitle: "Deployable increments over slide-deck theater — founders ship or learn.",
    color: "oklch(0.78 0.12 40)",
    glow: "oklch(0.8 0.14 60 / 0.45)",
  },
  {
    id: "users",
    title: "Real users",
    subtitle: "Tools in daily rhythms beat vanity metrics.",
    color: "oklch(0.7 0.18 150)",
    glow: "oklch(0.72 0.2 155 / 0.45)",
  },
  {
    id: "systems",
    title: "Systems lens",
    subtitle: "Failure budgets and concurrency — where code meets chaotic reality.",
    color: "oklch(0.68 0.12 275)",
    glow: "oklch(0.72 0.14 285 / 0.4)",
  },
];

type Phys = Quanta & { x: number; y: number; vx: number; vy: number; r: number };

function randFactory(seed: number) {
  let s = seed % 233280 || 92833;
  return () => {
    s = (s * 48271 + 49297) % 233280;
    return s / 233280;
  };
}

function allocate(w: number, h: number, list: Quanta[], reducedMotion: boolean): Phys[] {
  return list.map((q, i) => {
    const rnd = randFactory(i * 7919 + 104729);
    const r = 6 + rnd() * 9;
    const x = rnd() * Math.max(w - r * 2, r * 2) + r;
    const y = rnd() * Math.max(h - r * 2, r * 2) + r;
    const speed = reducedMotion ? 0 : 0.5 + rnd() * 1.15;
    const angle = rnd() * Math.PI * 2;
    return {
      ...q,
      x,
      y,
      r,
      vx: Math.cos(angle) * speed,
      vy: Math.sin(angle) * speed,
    };
  });
}

type ParticleBurst = {
  gid: string;
  px: number;
  py: number;
  color: string;
  items: { k: number; ang: number; dist: number; delay: number }[];
};

export function QuantumBalls() {
  const physRef = useRef<Phys[]>([]);
  const btnRef = useRef<Map<string, HTMLButtonElement>>(new Map());
  const poppedRef = useRef<Set<string>>(new Set());
  const reducedRef = useRef(false);

  const [mounted, setMounted] = useState(false);
  const [bursts, setBursts] = useState<ParticleBurst[]>([]);
  const [splash, setSplash] = useState<null | { q: Quanta }>(null);

  const aliveQuanta = () => QUANTA.filter((q) => !poppedRef.current.has(q.id));

  useLayoutEffect(() => {
    reducedRef.current = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const w = window.innerWidth;
    const h = window.innerHeight;
    physRef.current = allocate(w, h, aliveQuanta(), reducedRef.current);

    queueMicrotask(() => {
      for (const b of physRef.current) {
        const el = btnRef.current.get(b.id);
        if (el) el.style.transform = `translate3d(${b.x}px, ${b.y}px, 0) translate(-50%, -50%)`;
      }
      setMounted(true);
    });
  }, []);

  useEffect(() => {
    if (!mounted) return;
    let raf = 0;

    const step = () => {
      if (!reducedRef.current) {
        const W = window.innerWidth;
        const H = window.innerHeight;

        for (const b of physRef.current) {
          b.x += b.vx;
          b.y += b.vy;
          const pad = b.r;

          if (b.x < pad) {
            b.x = pad;
            b.vx *= -1;
          } else if (b.x > W - pad) {
            b.x = W - pad;
            b.vx *= -1;
          }
          if (b.y < pad) {
            b.y = pad;
            b.vy *= -1;
          } else if (b.y > H - pad) {
            b.y = H - pad;
            b.vy *= -1;
          }

          const el = btnRef.current.get(b.id);
          if (el) el.style.transform = `translate3d(${b.x}px, ${b.y}px, 0) translate(-50%, -50%)`;
        }
      }
      raf = requestAnimationFrame(step);
    };

    raf = requestAnimationFrame(step);

    const resize = () => {
      const W = window.innerWidth;
      const H = window.innerHeight;
      physRef.current = allocate(W, H, aliveQuanta(), reducedRef.current);
      for (const b of physRef.current) {
        const el = btnRef.current.get(b.id);
        if (el) el.style.transform = `translate3d(${b.x}px, ${b.y}px, 0) translate(-50%, -50%)`;
      }
    };

    window.addEventListener("resize", resize);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
    };
  }, [mounted]);

  const burst = useCallback((id: string, clientX: number, clientY: number) => {
    if (poppedRef.current.has(id)) return;
    poppedRef.current.add(id);

    const q = QUANTA.find((x) => x.id === id);
    if (!q) return;

    const rnd = randFactory(Date.now() % 9973);
    const n = 18;
    const items = Array.from({ length: n }).map((_, i) => ({
      k: i,
      ang: rnd() * Math.PI * 2,
      dist: 48 + rnd() * 100,
      delay: rnd() * 0.045,
    }));
    const gid = `${id}-${performance.now().toFixed(0)}`;

    if (!reducedRef.current) {
      setBursts((b) => [...b, { gid, px: clientX, py: clientY, color: q.color, items }]);
      window.setTimeout(() => setBursts((b) => b.filter((x) => x.gid !== gid)), 800);
    }

    physRef.current = allocate(
      window.innerWidth,
      window.innerHeight,
      aliveQuanta(),
      reducedRef.current,
    );
    queueMicrotask(() => {
      for (const b of physRef.current) {
        const el = btnRef.current.get(b.id);
        if (el) el.style.transform = `translate3d(${b.x}px, ${b.y}px, 0) translate(-50%, -50%)`;
      }
    });

    setSplash({ q });
  }, []);

  return (
    <>
      <div
        className="quantum-shell pointer-events-none fixed inset-0 z-[8] overflow-hidden bg-[var(--background)]"
        aria-hidden
      >
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage:
              "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)",
            backgroundSize: "64px 64px",
            maskImage: "radial-gradient(ellipse at center, black 50%, transparent 88%)",
          }}
        />

        {aliveQuanta().map((q) => {
          const rPx = `${6 + (q.id.charCodeAt(0) % 7) + 6}px`;

          return (
            <button
              key={q.id}
              ref={(el) => {
                if (el) btnRef.current.set(q.id, el);
                else btnRef.current.delete(q.id);
              }}
              type="button"
              data-quantum-ball={q.id}
              aria-label={`Quantum bit ${q.title}. Tap to burst and reveal.`}
              tabIndex={0}
              className="quantum-ball pointer-events-auto absolute left-0 top-0 rounded-full border border-white/25 outline-none ring-offset-2 ring-offset-[var(--background)] focus-visible:ring-2 focus-visible:ring-white/45"
              style={{
                width: rPx,
                height: rPx,
                backgroundColor: q.color,
                boxShadow: `0 0 16px ${q.glow}, inset 0 1px 0 oklch(1 0 0 / 0.38)`,
                willChange: "transform",
                visibility: mounted ? "visible" : "hidden",
              }}
              onPointerDown={(e) => {
                e.stopPropagation();
                burst(q.id, e.clientX, e.clientY);
              }}
            />
          );
        })}
      </div>

      <div className="pointer-events-none fixed inset-0 z-[118] overflow-hidden" aria-hidden>
        {bursts.flatMap((br) =>
          br.items.map((p) => (
            <span
              key={`${br.gid}-${p.k}`}
              className="quantum-shard pointer-events-none absolute h-2.5 w-2.5 rounded-full"
              style={{
                left: `${br.px}px`,
                top: `${br.py}px`,
                background: br.color,
                boxShadow: `0 0 10px ${br.color}`,
                animation: `quantum-shard-fly ${0.52 + (p.dist / 420).toFixed(3)}s cubic-bezier(0.2,0.85,0.2,1) forwards`,
                animationDelay: `${p.delay}s`,
                ["--shard-dx" as string]: `${Math.cos(p.ang) * p.dist}px`,
                ["--shard-dy" as string]: `${Math.sin(p.ang) * p.dist}px`,
              }}
            />
          )),
        )}
      </div>

      {splash && (
        <div
          className="pointer-events-auto fixed inset-0 z-[132] flex items-end justify-center bg-black/55 p-6 pb-[max(1.75rem,env(safe-area-inset-bottom))] backdrop-blur-[2px] md:items-center"
          role="dialog"
          aria-modal="true"
          aria-labelledby="quantum-splash-title"
        >
          <button
            type="button"
            className="absolute inset-0 cursor-default"
            aria-label="Dismiss"
            onClick={() => setSplash(null)}
          />
          <div
            data-cursor
            className="relative z-[1] w-full max-w-md rounded-2xl border border-white/14 bg-[oklch(0.096_0.02_280/0.98)] px-7 py-6 text-left shadow-[0_36px_100px_-40px_oklch(0_0_0/0.95)]"
          >
            <div
              id="quantum-splash-title"
              className="font-display text-3xl tracking-tight"
              style={{ color: splash.q.color }}
            >
              {splash.q.title}
            </div>
            <p className="mt-3 text-[15px] leading-relaxed text-muted-foreground">
              {splash.q.subtitle}
            </p>
            <button
              type="button"
              data-cursor
              className="mt-6 w-full rounded-full border border-border bg-foreground py-3 font-mono text-[11px] tracking-[0.22em] text-primary-foreground transition hover:bg-foreground/90 md:w-auto md:px-8"
              onClick={() => setSplash(null)}
            >
              CLOSE
            </button>
          </div>
        </div>
      )}
    </>
  );
}
