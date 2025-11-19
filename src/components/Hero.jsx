import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-slate-900/40 via-slate-900/30 to-slate-900 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto w-full px-6 pt-28 pb-20 grid lg:grid-cols-2 items-center gap-8">
        <div className="text-left">
          <p className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-cyan-300/80 bg-white/5 border border-white/10 rounded-full px-3 py-1">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
            Live 3D Hero • Interactive • Modern
          </p>
          <h1 className="mt-4 text-4xl sm:text-6xl font-extrabold leading-tight text-white">
            Standout Merch Designs
            <span className="block text-transparent bg-clip-text bg-gradient-to-tr from-cyan-300 via-sky-400 to-blue-500"> Built for Amazon</span>
          </h1>
          <p className="mt-4 text-slate-200/80 text-lg max-w-2xl">
            A curated portfolio of my best Merch by Amazon shirt designs. Explore animated previews, colorways, and direct links to listings.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href="#gallery" className="px-5 py-3 rounded-xl bg-gradient-to-tr from-blue-600 to-cyan-500 text-white font-medium shadow-lg shadow-cyan-500/30 hover:scale-[1.02] active:scale-95 transition">
              Browse Gallery
            </a>
            <a href="#contact" className="px-5 py-3 rounded-xl bg-white/10 text-white font-medium backdrop-blur border border-white/15 hover:bg-white/15 transition">
              Work Together
            </a>
          </div>
        </div>
        <div className="hidden lg:block" />
      </div>
    </section>
  );
}
