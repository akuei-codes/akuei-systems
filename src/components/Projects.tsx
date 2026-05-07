import { useRef, type ReactNode } from "react";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

function TiltVisual({ children }: { children: ReactNode }) {
  const wrap = useRef<HTMLDivElement>(null);

  return (
    <div
      ref={wrap}
      className="tilt-card relative"
      onMouseMove={(e) => {
        const el = wrap.current;
        if (!el) return;
        const inner = el.querySelector(".tilt-card-inner") as HTMLElement | null;
        if (!inner) return;
        const r = el.getBoundingClientRect();
        const x = (e.clientX - r.left) / r.width - 0.5;
        const y = (e.clientY - r.top) / r.height - 0.5;
        inner.style.transform = `perspective(1000px) rotateY(${x * 12}deg) rotateX(${-y * 12}deg) translateZ(14px)`;
      }}
      onMouseLeave={() => {
        const inner = wrap.current?.querySelector(".tilt-card-inner") as HTMLElement | null;
        if (inner) inner.style.transform = "";
      }}
    >
      <div className="tilt-card-inner relative h-full w-full will-change-transform">{children}</div>
    </div>
  );
}

export function Projects() {
  useScrollReveal();
  return (
    <section id="projects" className="relative px-6 py-28 md:px-12 md:py-44 lg:px-20">
      <div className="relative mx-auto max-w-6xl">
        <div className="scroll-reveal mb-14 flex items-center gap-4 font-mono text-[10px] tracking-[0.3em] text-muted-foreground">
          <span className="h-px w-14 bg-gradient-to-r from-transparent via-foreground/50 to-foreground/20" />
          03 — OTHER WORK
        </div>

        <article className="scroll-reveal mb-28 grid grid-cols-12 items-stretch gap-10 lg:gap-12">
          <div className="col-span-12 lg:col-span-5">
            <TiltVisual>
              <div className="relative aspect-[4/5] overflow-hidden rounded-[1.35rem] border border-border/90 bg-gradient-to-br from-white/[0.12] via-white/[0.04] to-transparent shadow-[0_40px_100px_-48px_oklch(0_0_0/0.85)]">
                <div className="absolute inset-0 grain" />
                <div className="absolute inset-0 bg-gradient-to-t from-[oklch(0.06_0.02_280/0.9)] via-transparent to-transparent" />
                <div className="absolute inset-0 flex flex-col justify-between p-8">
                  <div className="font-mono text-[10px] tracking-[0.3em] text-muted-foreground">
                    REAL-TIME ARENA
                  </div>
                  <div className="relative h-40 w-full">
                    <div className="absolute inset-0 flex items-end gap-1">
                      {Array.from({ length: 32 }).map((_, i) => (
                        <div
                          key={i}
                          className="flex-1 rounded-sm bg-gradient-to-t from-[oklch(0.75_0.12_305)] via-foreground/30 to-white/10"
                          style={{
                            height: `${20 + Math.sin(i * 0.6) * 35 + 40}%`,
                            animation: `wave ${1 + (i % 5) * 0.2}s ease-in-out infinite`,
                            animationDelay: `${i * 0.05}s`,
                          }}
                        />
                      ))}
                    </div>
                  </div>
                  <div className="text-right font-mono text-[10px] tracking-[0.3em] text-muted-foreground">
                    01
                  </div>
                </div>
              </div>
            </TiltVisual>
          </div>
          <div className="col-span-12 flex flex-col justify-center lg:col-span-7 lg:pl-6">
            <h3 className="mb-6 font-display text-6xl tracking-tight md:text-7xl lg:text-8xl">
              Icon
            </h3>
            <p className="mb-8 max-w-xl text-lg leading-relaxed text-muted-foreground">
              A real-time competitive coding platform. Live matches, shared sessions, and detection
              that catches AI-generated code while you type.
            </p>
            <div className="flex flex-wrap gap-2">
              {["WebSockets", "Rust", "Postgres", "ML detectors"].map((s) => (
                <span
                  key={s}
                  className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 font-mono text-[10px] tracking-wider text-muted-foreground backdrop-blur transition hover:border-white/25 hover:bg-white/[0.07]"
                >
                  {s}
                </span>
              ))}
            </div>
          </div>
        </article>

        <article className="scroll-reveal mb-28 grid grid-cols-12 items-stretch gap-10 lg:gap-12">
          <div className="order-2 col-span-12 flex flex-col justify-center lg:order-1 lg:col-span-7 lg:pr-6">
            <div className="mb-4 font-mono text-[10px] tracking-[0.3em] text-muted-foreground">
              MAY 2024 — PRESENT
            </div>
            <h3 className="mb-3 font-display text-6xl tracking-tight md:text-7xl lg:text-8xl">
              Me&amp;Union
            </h3>
            <div className="mb-6 font-mono text-sm tracking-wider text-foreground/60">
              PRINCETON ALUMNI × STUDENT · REUNIONS
            </div>
            <p className="mb-3 max-w-xl text-lg leading-relaxed text-muted-foreground">
              A social app for Princeton students and alumni to coordinate Reunions plans—anchored
              to the official schedule so the weekend tracks what&apos;s actually happening on
              campus.
            </p>
            <p className="mb-8 max-w-xl text-base leading-relaxed text-muted-foreground">
              Real-time matching and messaging from shared plans, plus light location so you can
              link up on the ground during events.
            </p>
            <div className="flex flex-wrap gap-2">
              {["React Native", "Node.js", "MongoDB", "WebSockets"].map((s) => (
                <span
                  key={s}
                  className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 font-mono text-[10px] tracking-wider text-muted-foreground backdrop-blur transition hover:border-white/25 hover:bg-white/[0.07]"
                >
                  {s}
                </span>
              ))}
            </div>
          </div>
          <div className="order-1 col-span-12 lg:order-2 lg:col-span-5">
            <TiltVisual>
              <div className="relative aspect-[4/5] overflow-hidden rounded-[1.35rem] border border-border/90 bg-gradient-to-bl from-[oklch(0.52_0.12_200/0.15)] via-white/[0.04] to-transparent shadow-[0_40px_100px_-48px_oklch(0_0_0/0.85)]">
                <div className="absolute inset-0 grain" />
                <div className="absolute inset-0 flex flex-col justify-between p-8">
                  <div className="font-mono text-[10px] tracking-[0.3em] text-muted-foreground">
                    SCHEDULE · PEOPLE · LIVE
                  </div>
                  <svg viewBox="0 0 200 200" className="mx-auto h-44 w-full">
                    {[0, 1, 2, 3, 4].map((i) => (
                      <g key={i}>
                        <line
                          x1="20"
                          y1={30 + i * 32}
                          x2="180"
                          y2={30 + i * 32}
                          stroke="white"
                          strokeOpacity="0.08"
                        />
                        <rect
                          x="30"
                          y={22 + i * 32}
                          width={40 + i * 18}
                          height="14"
                          fill="white"
                          fillOpacity="0.12"
                          rx="2"
                        >
                          <animate
                            attributeName="fill-opacity"
                            values="0.08;0.32;0.08"
                            dur="3s"
                            begin={`${i * 0.4}s`}
                            repeatCount="indefinite"
                          />
                        </rect>
                        <circle
                          cx={150 + (i % 2) * 14}
                          cy={29 + i * 32}
                          r="3"
                          fill="white"
                          fillOpacity="0.72"
                        />
                      </g>
                    ))}
                  </svg>
                  <div className="text-right font-mono text-[10px] tracking-[0.3em] text-muted-foreground">
                    02
                  </div>
                </div>
              </div>
            </TiltVisual>
          </div>
        </article>

        <article className="scroll-reveal grid grid-cols-12 items-stretch gap-10 lg:gap-12">
          <div className="col-span-12 lg:col-span-5">
            <TiltVisual>
              <div className="relative aspect-[4/5] overflow-hidden rounded-[1.35rem] border border-border/90 bg-gradient-to-br from-[oklch(0.48_0.14_300/0.12)] via-white/[0.04] to-transparent shadow-[0_40px_100px_-48px_oklch(0_0_0/0.85)]">
                <div className="absolute inset-0 grain" />
                <div className="absolute inset-0 flex flex-col justify-between p-8">
                  <div className="font-mono text-[10px] tracking-[0.3em] text-muted-foreground">
                    PEER · TO · PEER
                  </div>
                  <svg viewBox="0 0 200 200" className="mx-auto h-44 w-full">
                    <rect
                      x="20"
                      y="50"
                      width="70"
                      height="50"
                      rx="4"
                      fill="white"
                      fillOpacity="0.1"
                      stroke="white"
                      strokeOpacity="0.4"
                    />
                    <rect
                      x="110"
                      y="100"
                      width="70"
                      height="50"
                      rx="4"
                      fill="white"
                      fillOpacity="0.1"
                      stroke="white"
                      strokeOpacity="0.4"
                    />
                    <circle cx="55" cy="68" r="6" fill="white" fillOpacity="0.65" />
                    <circle cx="145" cy="118" r="6" fill="white" fillOpacity="0.65" />
                    <line
                      x1="90"
                      y1="75"
                      x2="110"
                      y2="125"
                      stroke="white"
                      strokeOpacity="0.5"
                      strokeDasharray="3 3"
                    >
                      <animate
                        attributeName="stroke-dashoffset"
                        from="0"
                        to="-12"
                        dur="1.5s"
                        repeatCount="indefinite"
                      />
                    </line>
                    <text
                      x="100"
                      y="180"
                      textAnchor="middle"
                      fill="white"
                      fillOpacity="0.5"
                      fontSize="6"
                      fontFamily="monospace"
                      letterSpacing="2"
                    >
                      VERIFIED .EDU
                    </text>
                  </svg>
                  <div className="text-right font-mono text-[10px] tracking-[0.3em] text-muted-foreground">
                    03
                  </div>
                </div>
              </div>
            </TiltVisual>
          </div>
          <div className="col-span-12 flex flex-col justify-center lg:col-span-7 lg:pl-6">
            <div className="mb-4 font-mono text-[10px] tracking-[0.3em] text-muted-foreground">
              JAN 2024 — APR 2024
            </div>
            <h3 className="mb-3 font-display text-6xl tracking-tight md:text-7xl lg:text-8xl">
              Ivy Video
            </h3>
            <div className="mb-6 font-mono text-sm tracking-wider text-foreground/60">
              IVY LEAGUE — ONLY VIDEO CHAT
            </div>
            <p className="mb-3 max-w-xl text-lg leading-relaxed text-muted-foreground">
              A video chat platform exclusively for Ivy League students. Peer-to-peer video with
              matching based on schools and interests.
            </p>
            <p className="mb-8 max-w-xl text-base leading-relaxed text-muted-foreground">
              .edu verification gates access; lightweight moderation keeps the space trusted.
            </p>
            <div className="flex flex-wrap gap-2">
              {["React", "WebRTC", "Node.js", "Socket.io"].map((s) => (
                <span
                  key={s}
                  className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 font-mono text-[10px] tracking-wider text-muted-foreground backdrop-blur transition hover:border-white/25 hover:bg-white/[0.07]"
                >
                  {s}
                </span>
              ))}
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}
