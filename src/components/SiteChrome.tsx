import { useEffect, useState } from "react";

/** Thin gradient progress bar at the top while scrolling. */
export function ScrollProgress() {
  const [p, setP] = useState(0);
  useEffect(() => {
    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setP(max > 0 ? document.documentElement.scrollTop / max : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <div className="pointer-events-none fixed left-0 right-0 top-0 z-[60] h-[2px]" aria-hidden>
      <div
        className="h-full origin-left rounded-full opacity-95 transition-[transform] duration-150 ease-out"
        style={{
          transform: `scaleX(${Math.min(1, Math.max(0, p))})`,
          background:
            "linear-gradient(90deg, oklch(0.72 0.14 305), oklch(0.88 0.12 85), oklch(0.75 0.12 195))",
        }}
      />
    </div>
  );
}
