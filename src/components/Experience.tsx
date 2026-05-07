import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const jobs = [
  {
    role: "Software Engineering Intern, Machine Learning",
    org: "NJ AI Hub",
    when: "Jun 2025 — Aug 2025",
    where: "Princeton, NJ",
    bullets: [
      "Worked on machine learning systems for fusion research, building neural network pipelines to model plasma stability and improve simulation throughput.",
      "Developed experimentation tooling using PyTorch and reinforcement learning to evaluate material configurations across simulation runs.",
    ],
  },
  {
    role: "Software Engineering Intern",
    org: "Zahara Software",
    when: "Jun 2024 — Aug 2024",
    where: "Seattle, WA",
    bullets: [
      "Worked on a microservices-based payment system using Java and Spring Boot, improving transaction speed and reliability for over 10K daily transactions.",
      "Built automated testing infrastructure with JUnit and Mockito, increasing coverage and significantly reducing regression bugs.",
    ],
  },
  {
    role: "Machine Learning Research Assistant",
    org: "Princeton University",
    when: "Sept 2023 — Dec 2023",
    where: "Princeton, NJ",
    bullets: [
      "Built CNN-based image classification models in PyTorch for medical datasets, achieving high accuracy while improving training efficiency through optimization techniques.",
    ],
  },
  {
    role: "Software Engineering Intern",
    org: "Melville Family Foundation",
    when: "Jun 2023 — Aug 2023",
    where: "Dallas, TX",
    bullets: [
      "Developed a full-stack educational platform using React and Node.js, serving hundreds of students through interactive learning tools.",
      "Integrated AI-powered assistance to personalize learning, which improved engagement and outcomes.",
    ],
  },
  {
    role: "Software Engineering Intern",
    org: "MTN Group",
    when: "Jun 2022 — Aug 2022",
    where: "Juba, South Sudan",
    bullets: [
      "Worked on backend systems for a mobile money platform using Java and Spring Boot, supporting high-volume financial transactions.",
      "Improved system reliability by implementing logging and monitoring tools.",
    ],
  },
];

export function Experience() {
  useScrollReveal();
  const [collapsed, setCollapsed] = useState<Set<number>>(new Set());

  return (
    <section id="experience" className="relative px-6 py-28 md:px-12 md:py-44 lg:px-20">
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 h-[520px] w-[min(90vw,640px)] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[oklch(0.42_0.1_285/0.08)] blur-[120px]"
        aria-hidden
      />

      <div className="relative mx-auto max-w-5xl">
        <div className="scroll-reveal mb-14 flex items-center gap-4 font-mono text-[10px] tracking-[0.3em] text-muted-foreground">
          <span className="h-px w-14 bg-gradient-to-r from-transparent via-foreground/50 to-foreground/20" />
          04 — EXPERIENCE
        </div>
        <h2 className="scroll-reveal mb-16 max-w-3xl font-display text-5xl tracking-tight md:text-7xl">
          Where I&apos;ve <em className="text-metal not-italic">worked</em>.
        </h2>

        <div className="flex flex-col gap-4">
          {jobs.map((j, i) => {
            const isOpen = !collapsed.has(i);
            return (
              <article
                key={j.org}
                className={`exp-card scroll-reveal overflow-hidden rounded-2xl border border-border bg-[oklch(0.08_0.015_280/0.4)]`}
                data-open={isOpen}
              >
                <button
                  type="button"
                  data-cursor
                  aria-expanded={isOpen}
                  className="flex w-full items-start gap-4 px-6 py-6 text-left transition hover:bg-white/[0.03] md:items-center md:gap-6 md:px-8 md:py-7"
                  onClick={() =>
                    setCollapsed((prev) => {
                      const next = new Set(prev);
                      if (next.has(i)) next.delete(i);
                      else next.add(i);
                      return next;
                    })
                  }
                >
                  <span className="mt-1 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] md:mt-0">
                    <span className="h-2 w-2 rounded-full bg-gradient-to-br from-[oklch(0.85_0.12_95)] to-[oklch(0.72_0.16_305)]" />
                  </span>
                  <div className="min-w-0 flex-1">
                    <div className="flex flex-col gap-1 md:flex-row md:items-baseline md:justify-between md:gap-6">
                      <h3 className="font-display text-3xl tracking-tight md:text-4xl">{j.org}</h3>
                      <div className="shrink-0 font-mono text-[10px] tracking-[0.22em] text-muted-foreground">
                        {j.when.toUpperCase()} · {j.where.toUpperCase()}
                      </div>
                    </div>
                    <div className="mt-2 font-mono text-xs tracking-wide text-foreground/65">
                      {j.role}
                    </div>
                  </div>
                  <ChevronDown className="exp-chevron mt-1 size-5 shrink-0 text-muted-foreground md:mt-0" />
                </button>
                <div
                  className={`grid transition-[grid-template-rows] duration-500 ease-[cubic-bezier(0.2,0.8,0.2,1)] ${
                    isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                  }`}
                >
                  <div className="overflow-hidden border-t border-border/60">
                    <ul className="space-y-3 px-6 py-6 md:max-w-3xl md:px-[4.75rem] md:pb-8">
                      {j.bullets.map((b, k) => (
                        <li
                          key={k}
                          className="flex gap-4 text-base leading-relaxed text-muted-foreground"
                        >
                          <span className="mt-2 h-px w-6 shrink-0 bg-gradient-to-r from-[oklch(0.7_0.14_300)] to-transparent" />
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
