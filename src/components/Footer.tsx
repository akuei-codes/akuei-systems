export function Footer() {
  return (
    <footer className="border-t border-border px-8 py-10 md:px-16">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 font-mono text-[10px] tracking-[0.3em] text-muted-foreground md:flex-row md:items-center">
        <div>© {new Date().getFullYear()} AKUEI JOHNSON ATENY AKUEI</div>
        <div className="flex gap-6">
          <a href="#identity" className="hover:text-foreground" data-cursor>RETURN TO TOP ↑</a>
          <a href="mailto:akuei@princeton.edu" className="hover:text-foreground" data-cursor>EMAIL</a>
        </div>
        <div>BUILT IN PRINCETON · NJ</div>
      </div>
    </footer>
  );
}
