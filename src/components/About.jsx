export default function About() {
  return (
    <section id="about" className="relative py-20">
      <div className="absolute inset-0 bg-[radial-gradient(60%_60%_at_20%_0%,rgba(59,130,246,0.12),transparent_60%)]" />
      <div className="relative max-w-5xl mx-auto px-6">
        <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur p-8">
          <h2 className="text-3xl font-bold text-white">About Me</h2>
          <p className="mt-3 text-slate-300/85">
            I design high-converting, on-trend graphics crafted specifically for Merch by Amazon. My style blends playful color palettes, clean composition, and thoughtful typography to make your shirts stand out.
          </p>
          <ul className="mt-6 grid sm:grid-cols-3 gap-4 text-slate-200/90">
            <li className="p-4 rounded-xl bg-white/5 border border-white/10">Trend Research</li>
            <li className="p-4 rounded-xl bg-white/5 border border-white/10">Brand-safe Designs</li>
            <li className="p-4 rounded-xl bg-white/5 border border-white/10">Colorway Variations</li>
          </ul>
        </div>
      </div>
    </section>
  )
}
