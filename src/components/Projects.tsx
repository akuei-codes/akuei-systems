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

        {/* Icon */}
        <article className="scroll-reveal mb-32 grid grid-cols-12 gap-8">
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

        {/* Me&Union */}
        <article className="scroll-reveal mb-32 grid grid-cols-12 gap-8">
          <div className="col-span-12 md:col-span-7 md:pr-12 order-2 md:order-1 flex flex-col justify-center">
            <div className="font-mono text-[10px] tracking-[0.3em] text-muted-foreground mb-4">MAY 2024 — PRESENT</div>
            <h3 className="font-display text-6xl md:text-8xl tracking-tight mb-3">Me&amp;Union</h3>
            <div className="text-sm text-foreground/60 mb-6 font-mono tracking-wider">PRINCETON ALUMNI × STUDENT · REUNIONS</div>
            <p className="text-lg text-muted-foreground leading-relaxed mb-3 max-w-xl">
              A social app for Princeton students and alumni to find people to attend
              Reunions events with — built around the actual Reunions schedule.
            </p>
            <p className="text-base text-muted-foreground leading-relaxed mb-8 max-w-xl">
              Real-time matching and messaging based on shared plans, plus location features
              so people can find each other on the ground during events.
            </p>
            <div className="flex flex-wrap gap-2">
              {["React Native", "Node.js", "MongoDB", "WebSockets"].map((s) => (
                <span key={s} className="glass rounded-full px-3 py-1 font-mono text-[10px] tracking-wider text-muted-foreground">{s}</span>
              ))}
            </div>
          </div>
          <div className="col-span-12 md:col-span-5 order-1 md:order-2">
            <div className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-border bg-gradient-to-br from-white/10 via-white/5 to-transparent">
              <div className="absolute inset-0 grain" />
              <div className="absolute inset-0 flex flex-col justify-between p-8">
                <div className="font-mono text-[10px] tracking-[0.3em] text-muted-foreground">SCHEDULE · PEOPLE · LIVE</div>
                <svg viewBox="0 0 200 200" className="mx-auto h-44 w-full">
                  {[0, 1, 2, 3, 4].map((i) => (
                    <g key={i}>
                      <line x1="20" y1={30 + i * 32} x2="180" y2={30 + i * 32} stroke="white" strokeOpacity="0.08" />
                      <rect x="30" y={22 + i * 32} width={40 + i * 18} height="14" fill="white" fillOpacity="0.12" rx="2">
                        <animate attributeName="fill-opacity" values="0.08;0.3;0.08" dur="3s" begin={`${i * 0.4}s`} repeatCount="indefinite" />
                      </rect>
                      <circle cx={150 + (i % 2) * 14} cy={29 + i * 32} r="3" fill="white" fillOpacity="0.7" />
                    </g>
                  ))}
                </svg>
                <div className="font-mono text-[10px] tracking-[0.3em] text-muted-foreground text-right">02</div>
              </div>
            </div>
          </div>
        </article>

        {/* Ivy League Video Chat */}
        <article className="scroll-reveal grid grid-cols-12 gap-8">
          <div className="col-span-12 md:col-span-5">
            <div className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-border bg-gradient-to-br from-white/10 via-white/5 to-transparent">
              <div className="absolute inset-0 grain" />
              <div className="absolute inset-0 flex flex-col justify-between p-8">
                <div className="font-mono text-[10px] tracking-[0.3em] text-muted-foreground">PEER · TO · PEER</div>
                <svg viewBox="0 0 200 200" className="mx-auto h-44 w-full">
                  <rect x="20" y="50" width="70" height="50" rx="4" fill="white" fillOpacity="0.1" stroke="white" strokeOpacity="0.4" />
                  <rect x="110" y="100" width="70" height="50" rx="4" fill="white" fillOpacity="0.1" stroke="white" strokeOpacity="0.4" />
                  <circle cx="55" cy="68" r="6" fill="white" fillOpacity="0.6" />
                  <circle cx="145" cy="118" r="6" fill="white" fillOpacity="0.6" />
                  <line x1="90" y1="75" x2="110" y2="125" stroke="white" strokeOpacity="0.5" strokeDasharray="3 3">
                    <animate attributeName="stroke-dashoffset" from="0" to="-12" dur="1.5s" repeatCount="indefinite" />
                  </line>
                  <text x="100" y="180" textAnchor="middle" fill="white" fillOpacity="0.5" fontSize="6" fontFamily="monospace" letterSpacing="2">VERIFIED .EDU</text>
                </svg>
                <div className="font-mono text-[10px] tracking-[0.3em] text-muted-foreground text-right">03</div>
              </div>
            </div>
          </div>
          <div className="col-span-12 flex flex-col justify-center md:col-span-7 md:pl-12">
            <div className="font-mono text-[10px] tracking-[0.3em] text-muted-foreground mb-4">JAN 2024 — APR 2024</div>
            <h3 className="font-display text-6xl md:text-8xl tracking-tight mb-3">Ivy Video</h3>
            <div className="text-sm text-foreground/60 mb-6 font-mono tracking-wider">IVY LEAGUE — ONLY VIDEO CHAT</div>
            <p className="text-lg text-muted-foreground leading-relaxed mb-3 max-w-xl">
              A video chat platform exclusively for Ivy League students. Peer-to-peer video
              with matching based on schools and interests.
            </p>
            <p className="text-base text-muted-foreground leading-relaxed mb-8 max-w-xl">
              .edu verification gates access; lightweight moderation keeps the space trusted.
            </p>
            <div className="flex flex-wrap gap-2">
              {["React", "WebRTC", "Node.js", "Socket.io"].map((s) => (
                <span key={s} className="glass rounded-full px-3 py-1 font-mono text-[10px] tracking-wider text-muted-foreground">{s}</span>
              ))}
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}
