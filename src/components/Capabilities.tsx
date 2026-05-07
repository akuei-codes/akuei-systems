import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { useState } from "react";

type Item = { name: string; w?: 1 | 2 | 3 }; // w = visual weight (confidence)

type Group = {
  label: string;
  hint: string;
  items: Item[];
};

const groups: Group[] = [
  {
    label: "Languages",
    hint: "day-to-day",
    items: [
      { name: "Python", w: 3 },
      { name: "TypeScript", w: 3 },
      { name: "Java", w: 3 },
      { name: "SQL", w: 2 },
      { name: "C", w: 2 },
      { name: "C++", w: 2 },
      { name: "Swift", w: 1 },
    ],
  },
  {
    label: "Frontend",
    hint: "what users see",
    items: [
      { name: "React", w: 3 },
      { name: "Next.js", w: 3 },
      { name: "Tailwind CSS", w: 3 },
      { name: "TanStack", w: 2 },
      { name: "Framer Motion", w: 1 },
    ],
  },
  {
    label: "Backend",
    hint: "the engine",
    items: [
      { name: "Node.js", w: 3 },
      { name: "Express", w: 3 },
      { name: "Spring Boot", w: 2 },
      { name: "FastAPI", w: 2 },
      { name: "REST", w: 3 },
      { name: "GraphQL", w: 1 },
    ],
  },
  {
    label: "AI / ML",
    hint: "models & training",
    items: [
      { name: "PyTorch", w: 3 },
      { name: "TensorFlow", w: 2 },
      { name: "OpenAI API", w: 3 },
      { name: "HuggingFace", w: 2 },
      { name: "scikit-learn", w: 2 },
      { name: "RL", w: 1 },
    ],
  },
  {
    label: "Databases",
    hint: "where state lives",
    items: [
      { name: "PostgreSQL", w: 3 },
      { name: "MongoDB", w: 2 },
      { name: "Firebase", w: 2 },
      { name: "Redis", w: 2 },
      { name: "Supabase", w: 2 },
    ],
  },
  {
    label: "Infra / DevOps",
    hint: "ship & run",
    items: [
      { name: "Docker", w: 3 },
      { name: "GitHub Actions", w: 3 },
      { name: "Vercel", w: 3 },
      { name: "Azure", w: 2 },
      { name: "AWS", w: 2 },
      { name: "Cloudflare", w: 2 },
      { name: "Linux", w: 2 },
    ],
  },
  {
    label: "Real-time / Networking",
    hint: "low latency",
    items: [
      { name: "WebSockets", w: 3 },
      { name: "WebRTC", w: 2 },
      { name: "gRPC", w: 1 },
      { name: "Server-Sent Events", w: 2 },
    ],
  },
  {
    label: "Systems",
    hint: "how it scales",
    items: [
      { name: "Distributed Systems", w: 2 },
      { name: "System Design", w: 3 },
      { name: "Microservices", w: 2 },
      { name: "Concurrency", w: 2 },
      { name: "Caching", w: 2 },
    ],
  },
];

export function Capabilities() {
  useScrollReveal();
  const [hover, setHover] = useState<string | null>(null);

  return (
    <section id="capabilities" className="relative px-8 py-32 md:px-16 md:py-48">
      <div className="mx-auto max-w-6xl">
        <div className="scroll-reveal mb-16 flex items-center gap-4 font-mono text-[10px] tracking-[0.3em] text-muted-foreground">
          <span className="h-px w-12 bg-foreground/40" />
          04 — STACK
        </div>
        <h2 className="scroll-reveal font-display text-5xl md:text-7xl tracking-tight mb-6 max-w-3xl">
          What I actually <em className="text-metal not-italic">use</em>.
        </h2>
        <p className="scroll-reveal max-w-xl text-muted-foreground mb-16 text-base leading-relaxed">
          Tools I reach for when shipping. Bigger means I lean on it more.
          Hover anything to see where it fits.
        </p>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {groups.map((g, gi) => (
            <div
              key={g.label}
              className="scroll-reveal group relative overflow-hidden rounded-2xl border border-border bg-card/40 p-6 backdrop-blur transition-all duration-500 hover:border-foreground/20 hover:bg-card/70"
              style={{ transitionDelay: `${gi * 30}ms` }}
            >
              <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                style={{
                  background: "radial-gradient(400px circle at var(--gx,50%) var(--gy,50%), oklch(1 0 0 / 0.06), transparent 60%)",
                }}
              />
              <div
                className="relative"
                onMouseMove={(e) => {
                  const r = e.currentTarget.parentElement!.getBoundingClientRect();
                  e.currentTarget.parentElement!.style.setProperty("--gx", `${e.clientX - r.left}px`);
                  e.currentTarget.parentElement!.style.setProperty("--gy", `${e.clientY - r.top}px`);
                }}
              >
                <div className="mb-5 flex items-baseline justify-between">
                  <div className="font-mono text-[10px] tracking-[0.3em] text-foreground/80">
                    {g.label.toUpperCase()}
                  </div>
                  <div className="font-mono text-[9px] tracking-[0.2em] text-muted-foreground">
                    {g.hint}
                  </div>
                </div>

                <div className="flex flex-wrap gap-x-2 gap-y-2">
                  {g.items.map((it) => {
                    const size =
                      it.w === 3 ? "text-[15px] text-foreground" :
                      it.w === 2 ? "text-[13px] text-foreground/80" :
                                   "text-[11px] text-muted-foreground";
                    const dim = hover && hover !== it.name ? "opacity-40" : "opacity-100";
                    return (
                      <span
                        key={it.name}
                        data-cursor
                        onMouseEnter={() => setHover(it.name)}
                        onMouseLeave={() => setHover(null)}
                        className={`inline-flex items-center rounded-full border border-border/60 bg-background/40 px-3 py-1 font-mono tracking-wide transition-all duration-300 hover:-translate-y-0.5 hover:border-foreground/40 hover:bg-foreground hover:text-primary-foreground hover:shadow-[0_8px_24px_-8px_oklch(1_0_0/0.25)] ${size} ${dim}`}
                      >
                        {it.name}
                      </span>
                    );
                  })}
                </div>
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
