import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { useState } from "react";
import {
  Code2, Layout, Server, Brain, Database, Cloud, Radio, Network, type LucideIcon,
} from "lucide-react";

type Item = { name: string; w?: 1 | 2 | 3; note?: string };

type Group = {
  label: string;
  hint: string;
  icon: LucideIcon;
  items: Item[];
};

const groups: Group[] = [
  {
    label: "Languages",
    hint: "day-to-day",
    icon: Code2,
    items: [
      { name: "Python", w: 3, note: "ML, scripting, glue" },
      { name: "TypeScript", w: 3, note: "everything frontend + node" },
      { name: "Java", w: 3, note: "Spring services" },
      { name: "SQL", w: 2, note: "Postgres mostly" },
      { name: "C", w: 2, note: "systems coursework" },
      { name: "C++", w: 2, note: "perf-sensitive paths" },
      { name: "Swift", w: 1, note: "iOS prototypes" },
    ],
  },
  {
    label: "Frontend",
    hint: "what users see",
    icon: Layout,
    items: [
      { name: "React", w: 3 },
      { name: "Next.js", w: 3 },
      { name: "Tailwind CSS", w: 3 },
      { name: "TanStack", w: 2 },
      { name: "Framer Motion", w: 2 },
      { name: "shadcn/ui", w: 2 },
    ],
  },
  {
    label: "Backend",
    hint: "the engine",
    icon: Server,
    items: [
      { name: "Node.js", w: 3 },
      { name: "Express", w: 3 },
      { name: "Spring Boot", w: 2 },
      { name: "FastAPI", w: 2 },
      { name: "REST", w: 3 },
      { name: "GraphQL", w: 1 },
      { name: "tRPC", w: 1 },
    ],
  },
  {
    label: "AI / ML",
    hint: "models & training",
    icon: Brain,
    items: [
      { name: "PyTorch", w: 3, note: "main ML lib" },
      { name: "TensorFlow", w: 2 },
      { name: "OpenAI API", w: 3 },
      { name: "HuggingFace", w: 2 },
      { name: "scikit-learn", w: 2 },
      { name: "RL", w: 1 },
      { name: "LangChain", w: 1 },
    ],
  },
  {
    label: "Databases",
    hint: "where state lives",
    icon: Database,
    items: [
      { name: "PostgreSQL", w: 3 },
      { name: "MongoDB", w: 2 },
      { name: "Firebase", w: 2 },
      { name: "Redis", w: 2 },
      { name: "Supabase", w: 2 },
      { name: "Prisma", w: 2 },
    ],
  },
  {
    label: "Infra / DevOps",
    hint: "ship & run",
    icon: Cloud,
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
    label: "Real-time",
    hint: "low latency",
    icon: Radio,
    items: [
      { name: "WebSockets", w: 3 },
      { name: "WebRTC", w: 2 },
      { name: "gRPC", w: 1 },
      { name: "SSE", w: 2 },
      { name: "Kafka", w: 1 },
    ],
  },
  {
    label: "Systems",
    hint: "how it scales",
    icon: Network,
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
  const [hover, setHover] = useState<Item | null>(null);

  return (
    <section id="capabilities" className="relative px-8 py-32 md:px-16 md:py-48">
      <div className="mx-auto max-w-6xl">
        <div className="scroll-reveal mb-16 flex items-center gap-4 font-mono text-[10px] tracking-[0.3em] text-muted-foreground">
          <span className="h-px w-12 bg-foreground/40" />
          04 — STACK
        </div>
        <div className="flex items-end justify-between gap-8 mb-16 flex-wrap">
          <div>
            <h2 className="scroll-reveal font-display text-5xl md:text-7xl tracking-tight mb-6 max-w-3xl">
              What I actually <em className="text-metal not-italic">use</em>.
            </h2>
            <p className="scroll-reveal max-w-xl text-muted-foreground text-base leading-relaxed">
              Tools I reach for when shipping. Bigger means I lean on it more.
              Hover anything to see how it fits.
            </p>
          </div>
          <div className="scroll-reveal min-h-[64px] min-w-[260px] rounded-xl border border-border bg-card/40 px-4 py-3 backdrop-blur">
            <div className="font-mono text-[9px] tracking-[0.3em] text-muted-foreground mb-1">
              {hover ? "FOCUS" : "IDLE"}
            </div>
            <div className="font-mono text-sm text-foreground">
              {hover ? hover.name : "// hover a tech"}
            </div>
            <div className="font-mono text-[10px] text-muted-foreground mt-0.5">
              {hover?.note ?? "tap, hover, explore"}
            </div>
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {groups.map((g, gi) => {
            const Icon = g.icon;
            return (
              <div
                key={g.label}
                className="scroll-reveal group relative overflow-hidden rounded-2xl border border-border bg-card/40 p-6 backdrop-blur transition-all duration-500 hover:border-foreground/25 hover:bg-card/70 hover:-translate-y-0.5"
                style={{ transitionDelay: `${gi * 30}ms` }}
                onMouseMove={(e) => {
                  const r = e.currentTarget.getBoundingClientRect();
                  e.currentTarget.style.setProperty("--gx", `${e.clientX - r.left}px`);
                  e.currentTarget.style.setProperty("--gy", `${e.clientY - r.top}px`);
                }}
              >
                <div
                  className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                  style={{
                    background:
                      "radial-gradient(380px circle at var(--gx,50%) var(--gy,50%), oklch(1 0 0 / 0.07), transparent 60%)",
                  }}
                />
                <div className="relative">
                  <div className="mb-5 flex items-center justify-between">
                    <div className="flex items-center gap-2.5">
                      <span className="flex h-7 w-7 items-center justify-center rounded-md border border-border bg-background/60">
                        <Icon className="h-3.5 w-3.5 text-foreground/80" />
                      </span>
                      <div className="font-mono text-[10px] tracking-[0.3em] text-foreground/80">
                        {g.label.toUpperCase()}
                      </div>
                    </div>
                    <div className="font-mono text-[9px] tracking-[0.2em] text-muted-foreground">
                      {g.hint}
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-x-2 gap-y-2">
                    {g.items.map((it, ii) => {
                      const size =
                        it.w === 3 ? "text-[15px] text-foreground" :
                        it.w === 2 ? "text-[13px] text-foreground/80" :
                                     "text-[11px] text-muted-foreground";
                      const dim =
                        hover && hover.name !== it.name ? "opacity-35" : "opacity-100";
                      const dot =
                        it.w === 3 ? "bg-foreground" :
                        it.w === 2 ? "bg-foreground/60" :
                                     "bg-foreground/30";
                      return (
                        <span
                          key={it.name}
                          data-cursor
                          onMouseEnter={() => setHover(it)}
                          onMouseLeave={() => setHover(null)}
                          style={{ transitionDelay: `${ii * 20}ms` }}
                          className={`group/pill inline-flex items-center gap-1.5 rounded-full border border-border/60 bg-background/40 px-3 py-1 font-mono tracking-wide transition-all duration-300 hover:-translate-y-0.5 hover:border-foreground/50 hover:bg-foreground hover:text-primary-foreground hover:shadow-[0_8px_24px_-8px_oklch(1_0_0/0.25)] ${size} ${dim}`}
                        >
                          <span className={`h-1 w-1 rounded-full ${dot} group-hover/pill:bg-primary-foreground/70`} />
                          {it.name}
                        </span>
                      );
                    })}
                  </div>
                </div>
              </div>
            );
          })}
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
