const Background = () => (
  <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-ink-950">
    {/* Aurora blobs */}
    <div className="absolute -top-40 -left-32 h-[38rem] w-[38rem] rounded-full bg-brand-500/25 blur-[130px] animate-drift" />
    <div
      className="absolute -top-24 right-[-10rem] h-[32rem] w-[32rem] rounded-full bg-violet-600/20 blur-[140px] animate-drift"
      style={{ animationDelay: '-7s' }}
    />
    <div
      className="absolute bottom-[-14rem] left-1/3 h-[34rem] w-[34rem] rounded-full bg-sky-500/15 blur-[150px] animate-drift"
      style={{ animationDelay: '-14s' }}
    />

    {/* Grid */}
    <div className="absolute inset-0 grid-lines [mask-image:radial-gradient(ellipse_at_top,#000_10%,transparent_72%)]" />

    {/* Vignette + film grain */}
    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,transparent_35%,#05070d_78%)]" />
    <div className="absolute inset-0 noise opacity-[0.035] mix-blend-overlay" />
  </div>
);

export default Background;
