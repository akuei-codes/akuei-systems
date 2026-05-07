export function Footer() {
  return (
    <footer className="relative z-[20] border-t border-border/80 bg-[oklch(0.055_0.02_280/0.35)] px-6 py-12 pb-28 backdrop-blur-md md:px-12 md:pb-12 lg:px-20">
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"
        aria-hidden
      />
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-8 font-mono text-[10px] tracking-[0.28em] text-muted-foreground md:flex-row md:items-center">
        <div className="max-w-md leading-relaxed">
          © {new Date().getFullYear()}{" "}
          <span className="bg-gradient-to-r from-[oklch(0.88_0.08_250)] via-[oklch(0.82_0.12_85)] to-[oklch(0.78_0.14_310)] bg-clip-text text-transparent">
            AKUEI JOHNSON ATENY AKUEI
          </span>
        </div>
        <div className="flex flex-wrap gap-x-8 gap-y-3">
          <a
            href="#top"
            className="footer-link text-foreground/80 transition hover:text-foreground"
            data-cursor
          >
            RETURN TO TOP ↑
          </a>
          <a
            href="mailto:akuei@princeton.edu"
            className="footer-link text-foreground/80 transition hover:text-foreground"
            data-cursor
          >
            EMAIL
          </a>
        </div>
        <div className="text-right md:text-left">BUILT IN PRINCETON · NJ</div>
      </div>
    </footer>
  );
}
