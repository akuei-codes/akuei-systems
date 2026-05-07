import { useEffect, useRef } from "react";

export function Cursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const html = document.documentElement;
    const mq = window.matchMedia("(pointer: fine)");
    const enable = () => {
      if (mq.matches && window.innerWidth >= 768) html.classList.add("fancy-pointer");
      else html.classList.remove("fancy-pointer");
    };
    enable();
    mq.addEventListener("change", enable);
    window.addEventListener("resize", enable);

    let x = 0,
      y = 0,
      rx = 0,
      ry = 0;
    const onMove = (e: MouseEvent) => {
      x = e.clientX;
      y = e.clientY;
    };
    const onOver = (e: MouseEvent) => {
      const t = e.target as HTMLElement;
      const interactive = t.closest("a,button,input,textarea,[data-cursor]");
      if (ringRef.current) ringRef.current.dataset.hover = interactive ? "1" : "0";
    };

    let raf = 0;
    const tick = () => {
      rx += (x - rx) * 0.14;
      ry += (y - ry) * 0.14;
      if (dotRef.current) dotRef.current.style.transform = `translate(${x}px, ${y}px)`;
      if (ringRef.current) ringRef.current.style.transform = `translate(${rx}px, ${ry}px)`;
      if (glowRef.current) glowRef.current.style.transform = `translate(${rx}px, ${ry}px)`;
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);

    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseover", onOver);
    return () => {
      cancelAnimationFrame(raf);
      html.classList.remove("fancy-pointer");
      mq.removeEventListener("change", enable);
      window.removeEventListener("resize", enable);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseover", onOver);
    };
  }, []);

  return (
    <>
      <div
        ref={dotRef}
        className="pointer-events-none fixed left-0 top-0 z-[142] hidden h-1.5 w-1.5 -ml-[3px] -mt-[3px] rounded-full bg-white mix-blend-difference md:block"
      />
      <div
        ref={glowRef}
        className="pointer-events-none fixed left-0 top-0 z-[141] -ml-14 -mt-14 hidden h-28 w-28 rounded-full opacity-70 blur-2xl transition-opacity duration-500 md:block"
        style={{
          background:
            "radial-gradient(circle at center, oklch(0.78 0.16 300 / 0.35), transparent 68%)",
        }}
      />
      <div
        ref={ringRef}
        data-hover="0"
        className="pointer-events-none fixed left-0 top-0 z-[142] hidden h-11 w-11 -ml-[22px] -mt-[22px] rounded-full border border-white/50 mix-blend-difference md:block transition-[width,height,margin,opacity,border-radius] duration-300 ease-out data-[hover=1]:h-[4.5rem] data-[hover=1]:w-[4.5rem] data-[hover=1]:-ml-[2.25rem] data-[hover=1]:-mt-[2.25rem] data-[hover=1]:rounded-2xl data-[hover=1]:border-white/70 data-[hover=1]:opacity-90"
      />
    </>
  );
}
