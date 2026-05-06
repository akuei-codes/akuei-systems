import { useEffect, useState } from "react";

const links = [
  { id: "identity", label: "About" },
  { id: "startups", label: "Startups" },
  { id: "projects", label: "Work" },
  { id: "capabilities", label: "Stack" },
  { id: "contact", label: "Talk" },
];

export function Nav() {
  const [active, setActive] = useState("identity");
  const [time, setTime] = useState("");

  useEffect(() => {
    const update = () => {
      const d = new Date();
      setTime(d.toLocaleTimeString("en-US", { timeZone: "America/New_York", hour: "2-digit", minute: "2-digit", hour12: false }) + " EST");
    };
    update();
    const i = setInterval(update, 30_000);

    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => { if (e.isIntersecting) setActive(e.target.id); });
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );
    links.forEach((l) => { const el = document.getElementById(l.id); if (el) obs.observe(el); });
    return () => { clearInterval(i); obs.disconnect(); };
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 flex items-center justify-between px-8 py-5">
      <a href="#top" className="font-mono text-xs tracking-[0.3em] text-foreground/80 hover:text-foreground transition">
        AKUEI<span className="text-muted-foreground">/</span>AKUEI
      </a>
      <nav className="hidden md:flex glass rounded-full px-2 py-1.5 text-xs font-mono tracking-wider">
        {links.map((l) => (
          <a
            key={l.id}
            href={`#${l.id}`}
            className={`px-4 py-1.5 rounded-full transition-colors ${active === l.id ? "bg-foreground text-primary-foreground" : "text-muted-foreground hover:text-foreground"}`}
          >
            {l.label.toUpperCase()}
          </a>
        ))}
      </nav>
      <div className="hidden md:block font-mono text-[10px] tracking-[0.25em] text-muted-foreground">
        PRINCETON · {time}
      </div>
    </header>
  );
}
