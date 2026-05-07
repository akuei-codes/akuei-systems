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
    org: "MTN South Sudan",
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
  return (
    <section id="experience" className="relative px-8 py-32 md:px-16 md:py-48">
      <div className="mx-auto max-w-5xl">
        <div className="scroll-reveal mb-16 flex items-center gap-4 font-mono text-[10px] tracking-[0.3em] text-muted-foreground">
          <span className="h-px w-12 bg-foreground/40" />
          05 — EXPERIENCE
        </div>
        <h2 className="scroll-reveal font-display text-5xl md:text-7xl tracking-tight mb-20 max-w-3xl">
          Where I've <em className="text-metal not-italic">worked</em>.
        </h2>

        <ol className="relative border-l border-border pl-8 md:pl-12">
          {jobs.map((j, i) => (
            <li key={i} className="scroll-reveal relative mb-16 last:mb-0">
              <span className="absolute -left-[37px] md:-left-[49px] top-2 flex h-3 w-3 items-center justify-center">
                <span className="h-2 w-2 rounded-full bg-foreground" />
                <span className="absolute h-3 w-3 rounded-full border border-foreground/30" />
              </span>
              <div className="flex flex-wrap items-baseline justify-between gap-2 mb-2">
                <h3 className="font-display text-3xl md:text-4xl tracking-tight">{j.org}</h3>
                <div className="font-mono text-[10px] tracking-[0.25em] text-muted-foreground">
                  {j.when.toUpperCase()} · {j.where.toUpperCase()}
                </div>
              </div>
              <div className="text-sm text-foreground/70 mb-4">{j.role}</div>
              <ul className="space-y-3 max-w-3xl">
                {j.bullets.map((b, k) => (
                  <li key={k} className="flex gap-3 text-base text-muted-foreground leading-relaxed">
                    <span className="mt-2 h-px w-4 shrink-0 bg-foreground/30" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
