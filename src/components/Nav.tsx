import { useEffect, useState } from "react";

const links = [
  { id: "identity", label: "About" },
  { id: "startups", label: "Startups" },
  { id: "projects", label: "Work" },
  { id: "experience", label: "Experience" },
  { id: "capabilities", label: "Stack" },
  { id: "contact", label: "Talk" },
];

function linkClass(active: boolean) {
  return `shrink-0 snap-center whitespace-nowrap rounded-full px-4 py-2 text-[11px] font-medium tracking-[0.2em] transition-all duration-300 ${
    active
      ? "bg-foreground text-primary-foreground shadow-[0_8px_32px_-12px_oklch(1_0_0/0.35)]"
      : "text-muted-foreground hover:bg-white/[0.06] hover:text-foreground"
  }`;
}

export function Nav() {
  const [active, setActive] = useState("identity");
  const [time, setTime] = useState("");
  const [dense, setDense] = useState(false);

  useEffect(() => {
    const update = () => {
      const d = new Date();
      setTime(
        d.toLocaleTimeString("en-US", {
          timeZone: "America/New_York",
          hour: "2-digit",
          minute: "2-digit",
          hour12: false,
        }) + " EST",
      );
    };
    update();
    const i = setInterval(update, 30_000);

    const onScroll = () => setDense(window.scrollY > 24);
    onScroll();

    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: "-40% 0px -55% 0px" },
    );
    links.forEach((l) => {
      const el = document.getElementById(l.id);
      if (el) obs.observe(el);
    });

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      clearInterval(i);
      obs.disconnect();
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-[125] flex items-center justify-between px-6 py-5 transition-[padding,background,border-color,backdrop-filter] duration-500 md:px-10 ${
          dense ? "glass-strong border-b border-border/60 py-3 backdrop-blur-2xl" : ""
        }`}
      >
        <a
          href="#top"
          data-cursor
          className="group flex flex-col gap-1 font-mono text-[10px] leading-tight tracking-[0.28em] md:flex-row md:items-baseline md:gap-3"
        >
          <span>
            <span className="text-[oklch(0.9_0.06_250)] transition group-hover:text-[oklch(0.95_0.1_235)]">
              AKUEI
            </span>
            <span className="text-muted-foreground"> · </span>
            <span className="text-[oklch(0.9_0.1_70)] transition group-hover:text-[oklch(0.95_0.14_55)]">
              JOHNSON
            </span>
          </span>
          <span className="hidden md:inline md:text-muted-foreground">·</span>
          <span>
            <span className="text-[oklch(0.78_0.18_310)] transition group-hover:text-[oklch(0.86_0.2_300)]">
              ATENY
            </span>
            <span className="text-muted-foreground"> · </span>
            <span className="text-[oklch(0.82_0.1_200)] transition group-hover:text-[oklch(0.9_0.12_195)]">
              AKUEI
            </span>
          </span>
        </a>

        <nav className="hidden rounded-full border border-white/[0.08] bg-white/[0.03] px-1.5 py-1 backdrop-blur-2xl md:flex">
          {links.map((l) => (
            <a key={l.id} href={`#${l.id}`} data-cursor className={linkClass(active === l.id)}>
              {l.label.toUpperCase()}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-4 md:flex">
          <a
            href="/akuei-resume.pdf"
            download="Akuei_Johnson_Ateny_Akuei_Resume.pdf"
            data-cursor
            className="rounded-full border border-border bg-white/[0.02] px-3 py-1.5 font-mono text-[10px] tracking-[0.2em] text-foreground/80 transition hover:border-foreground/25 hover:bg-white/[0.05] hover:text-foreground"
          >
            RESUME ↓
          </a>
          <span className="font-mono text-[10px] tracking-[0.22em] text-muted-foreground">
            PRINCETON · {time}
          </span>
        </div>
      </header>

      {/* Mobile: floating dock */}
      <nav
        aria-label="Section navigation"
        className="fixed bottom-6 left-1/2 z-[125] flex max-w-[calc(100vw-1.5rem)] -translate-x-1/2 rounded-full border border-white/10 bg-[oklch(0.08_0.02_280/0.88)] px-2 py-1.5 shadow-[0_24px_64px_-20px_oklch(0_0_0/0.75)] backdrop-blur-2xl md:hidden"
      >
        <div className="scrollbar-none flex gap-1 overflow-x-auto scroll-smooth pb-px [scrollbar-width:none] [&::-webkit-scrollbar]:hidden [-webkit-mask-image:linear-gradient(90deg,transparent,black_16px,black_calc(100%-16px),transparent)]">
          {links.map((l) => (
            <a key={l.id} href={`#${l.id}`} data-cursor className={linkClass(active === l.id)}>
              {l.label.toUpperCase()}
            </a>
          ))}
        </div>
      </nav>
    </>
  );
}
