import { useEffect, useRef, useState } from "react";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

type State = "idle" | "listening" | "thinking" | "speaking";

const transcripts: Record<Exclude<State, "idle">, string> = {
  listening: "Listening…",
  thinking: "Thinking…",
  speaking:
    "Hey, I'm Akuei. Ask me anything — about Crush, Veto, FlexiGo, or what I'm working on next.",
};

export function VoiceInterface() {
  useScrollReveal();
  const [state, setState] = useState<State>("idle");
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(
    () => () => {
      if (timer.current) clearTimeout(timer.current);
    },
    [],
  );

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
    <section id="contact" className="relative px-6 py-28 md:px-12 md:py-44 lg:px-20">
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-[oklch(0.14_0.06_300/0.12)] to-transparent"
        aria-hidden
      />

      <div className="relative mx-auto max-w-5xl text-center">
        <div className="scroll-reveal mb-12 flex items-center justify-center gap-4 font-mono text-[10px] tracking-[0.3em] text-muted-foreground">
          <span className="h-px w-14 bg-gradient-to-r from-transparent to-foreground/35" />
          06 — VOICE INTERFACE
          <span className="h-px w-14 bg-gradient-to-l from-transparent to-foreground/35" />
        </div>
        <h2 className="scroll-reveal mb-6 font-display text-5xl tracking-tight md:text-8xl">
          Just <em className="text-metal not-italic">talk</em> to me.
        </h2>
        <p className="scroll-reveal mx-auto mb-16 max-w-xl text-lg text-muted-foreground">
          Tap the orb and ask whatever you want. It&apos;s me, in voice.
        </p>

        <div className="scroll-reveal flex flex-col items-center gap-10">
          <div className="relative">
            <div
              className="pointer-events-none absolute left-1/2 top-1/2 h-[min(100vw,28rem)] w-[min(100vw,28rem)] -translate-x-1/2 -translate-y-1/2 rounded-full"
              aria-hidden
            >
              <div className="voice-orb-glow h-full w-full rounded-full" />
            </div>
            <button
              type="button"
              onClick={trigger}
              data-cursor
              className="group relative h-64 w-64 rounded-full"
              aria-label="Toggle voice interface"
            >
              <span
                className={`absolute inset-0 rounded-full border border-white/15 transition-opacity duration-500 ${
                  state !== "idle" ? "opacity-100" : "opacity-35"
                }`}
              />
              {state !== "idle" && (
                <>
                  <span
                    className="absolute inset-0 rounded-full border border-[oklch(0.75_0.14_300/0.45)]"
                    style={{ animation: "pulse-ring 2.4s ease-out infinite" }}
                  />
                  <span
                    className="absolute inset-0 rounded-full border border-[oklch(0.7_0.12_195/0.35)]"
                    style={{ animation: "pulse-ring 2.4s ease-out infinite 0.8s" }}
                  />
                </>
              )}

              <span
                className="absolute inset-4 rounded-full transition-[filter] duration-500"
                style={{
                  background:
                    "linear-gradient(135deg, oklch(0.78 0.14 300), oklch(0.55 0.12 235), oklch(0.72 0.1 190))",
                  backgroundSize: "200% 200%",
                  animation: "shimmer 6s ease-in-out infinite",
                  filter: state === "thinking" ? "blur(3px)" : "none",
                }}
              />

              <span className="absolute inset-8 flex items-center justify-center rounded-full border border-white/10 bg-black/35 shadow-[inset_0_1px_0_oklch(1_0_0/0.12)] backdrop-blur-md">
                {state === "speaking" || state === "listening" ? (
                  <Waveform active={state === "speaking"} />
                ) : state === "thinking" ? (
                  <Spinner />
                ) : (
                  <MicIcon />
                )}
              </span>
            </button>
          </div>

          <div className="flex h-14 flex-col items-center gap-2">
            <div className="font-mono text-[10px] tracking-[0.3em] text-foreground/75">
              {state === "idle" ? "TAP TO BEGIN" : state.toUpperCase()}
            </div>
            <div className="min-h-[24px] max-w-md text-sm text-muted-foreground">
              {state !== "idle" && transcripts[state]}
            </div>
          </div>

          <div className="scroll-reveal mt-10 flex flex-col items-center gap-3 font-mono text-[10px] tracking-[0.3em] text-muted-foreground">
            <span>OR REACH DIRECTLY</span>
            <a
              href="mailto:akuei@princeton.edu"
              className="font-display text-xl tracking-normal text-foreground transition hover:text-[oklch(0.85_0.1_290)] md:text-2xl"
              data-cursor
            >
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
          className="w-[3px] rounded-full bg-gradient-to-t from-[oklch(0.55_0.15_305)] via-white to-[oklch(0.7_0.1_200)]"
          style={{
            height: "100%",
            transformOrigin: "center",
            animation: active
              ? `wave ${0.55 + (i % 4) * 0.15}s ease-in-out infinite`
              : `wave ${1.35 + (i % 3) * 0.18}s ease-in-out infinite`,
            animationDelay: `${i * 0.06}s`,
            opacity: active ? 1 : 0.55,
          }}
        />
      ))}
    </div>
  );
}

function Spinner() {
  return (
    <svg className="h-10 w-10 animate-spin text-foreground/85" viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeOpacity="0.25" strokeWidth="2" />
      <path
        d="M22 12a10 10 0 0 1-10 10"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

function MicIcon() {
  return (
    <svg
      className="h-12 w-12 text-white/90"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
    >
      <rect x="9" y="3" width="6" height="12" rx="3" />
      <path d="M5 11a7 7 0 0 0 14 0M12 18v3" strokeLinecap="round" />
    </svg>
  );
}
