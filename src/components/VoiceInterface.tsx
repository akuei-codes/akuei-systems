import { useEffect, useRef, useState } from "react";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

type State = "idle" | "listening" | "thinking" | "speaking";

const transcripts: Record<Exclude<State, "idle">, string> = {
  listening: "Listening…",
  thinking: "Thinking…",
  speaking: "Hey, I'm Akuei. Ask me anything — about Crush, Veto, FlexiGo, or what I'm working on next.",
};

export function VoiceInterface() {
  useScrollReveal();
  const [state, setState] = useState<State>("idle");
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => () => { if (timer.current) clearTimeout(timer.current); }, []);

  const trigger = () => {
    if (state !== "idle") {
      setState("idle");
      if (timer.current) clearTimeout(timer.current);
      return;
    }
    setState("listening");
    timer.current = setTimeout(() => {
      setState("thinking");
      timer.current = setTimeout(() => {
        setState("speaking");
        timer.current = setTimeout(() => setState("idle"), 4500);
      }, 1400);
    }, 2200);
  };

  return (
    <section id="contact" className="relative px-8 py-32 md:px-16 md:py-48">
      <div className="mx-auto max-w-5xl text-center">
        <div className="scroll-reveal mb-12 flex items-center justify-center gap-4 font-mono text-[10px] tracking-[0.3em] text-muted-foreground">
          <span className="h-px w-12 bg-foreground/40" />
          05 — VOICE INTERFACE
          <span className="h-px w-12 bg-foreground/40" />
        </div>
        <h2 className="scroll-reveal font-display text-5xl md:text-8xl tracking-tight mb-6">
          Just <em className="text-metal not-italic">talk</em> to me.
        </h2>
        <p className="scroll-reveal text-lg text-muted-foreground max-w-xl mx-auto mb-16">
          Tap the orb and ask whatever you want. It's me, in voice.
        </p>

        <div className="scroll-reveal flex flex-col items-center gap-10">
          <button
            onClick={trigger}
            className="group relative h-64 w-64 rounded-full"
            aria-label="Toggle voice interface"
          >
            {/* halos */}
            <span className={`absolute inset-0 rounded-full border border-foreground/20 transition-opacity ${state !== "idle" ? "opacity-100" : "opacity-40"}`} />
            {state !== "idle" && (
              <>
                <span className="absolute inset-0 rounded-full border border-foreground/30" style={{ animation: "pulse-ring 2.4s ease-out infinite" }} />
                <span className="absolute inset-0 rounded-full border border-foreground/20" style={{ animation: "pulse-ring 2.4s ease-out infinite 0.8s" }} />
              </>
            )}

            {/* metallic core */}
            <span className="absolute inset-4 rounded-full" style={{ background: "var(--gradient-metal)", backgroundSize: "200% 200%", animation: "shimmer 6s ease-in-out infinite", filter: state === "thinking" ? "blur(2px)" : "none", transition: "filter .4s" }} />

            {/* inner glass */}
            <span className="absolute inset-8 rounded-full glass flex items-center justify-center">
              {state === "speaking" || state === "listening" ? (
                <Waveform active={state === "speaking"} />
              ) : state === "thinking" ? (
                <Spinner />
              ) : (
                <MicIcon />
              )}
            </span>
          </button>

          <div className="h-12 flex flex-col items-center gap-2">
            <div className="font-mono text-[10px] tracking-[0.3em] text-foreground/70">
              {state === "idle" ? "TAP TO BEGIN" : state.toUpperCase()}
            </div>
            <div className="text-sm text-muted-foreground max-w-md min-h-[20px]">
              {state !== "idle" && transcripts[state]}
            </div>
          </div>

          <div className="scroll-reveal mt-12 flex flex-col items-center gap-3 font-mono text-[10px] tracking-[0.3em] text-muted-foreground">
            <span>OR REACH DIRECTLY</span>
            <a href="mailto:akuei@princeton.edu" className="text-foreground hover:text-metal transition text-base font-display tracking-normal" data-cursor>
              akuei@princeton.edu
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function Waveform({ active }: { active: boolean }) {
  return (
    <div className="flex h-12 items-center gap-1">
      {Array.from({ length: 13 }).map((_, i) => (
        <span
          key={i}
          className="w-[3px] rounded-full bg-foreground"
          style={{
            height: "100%",
            transformOrigin: "center",
            animation: active ? `wave ${0.6 + (i % 4) * 0.15}s ease-in-out infinite` : `wave ${1.4 + (i % 3) * 0.2}s ease-in-out infinite`,
            animationDelay: `${i * 0.06}s`,
            opacity: active ? 1 : 0.5,
          }}
        />
      ))}
    </div>
  );
}

function Spinner() {
  return (
    <svg className="h-10 w-10 animate-spin text-foreground/80" viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeOpacity="0.2" strokeWidth="2" />
      <path d="M22 12a10 10 0 0 1-10 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

function MicIcon() {
  return (
    <svg className="h-12 w-12 text-foreground/90" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <rect x="9" y="3" width="6" height="12" rx="3" />
      <path d="M5 11a7 7 0 0 0 14 0M12 18v3" strokeLinecap="round" />
    </svg>
  );
}
