import Spline from '@splinetool/react-spline'

function Hero() {
  return (
    <section id="home" className="relative min-h-[90vh] w-full overflow-hidden">
      {/* Spline full-bleed background */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/xzUirwcZB9SOxUWt/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Gradient overlays for readability */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-950/60 via-slate-950/30 to-slate-950/80" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(80%_60%_at_50%_20%,rgba(59,130,246,0.35),transparent)]" />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-6xl px-6 py-28 md:py-40">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs text-slate-200">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400"></span>
            Available for freelance projects
          </div>
          <h1 className="mt-6 text-4xl md:text-6xl font-semibold tracking-tight text-white">
            Video Editor & Filmmaker crafting modern, minimalist visuals
          </h1>
          <p className="mt-4 md:mt-6 text-slate-200/85 text-lg">
            I design, edit, and color grade cinematic stories for brands, creators, and music artists. Smooth cuts, tasteful motion, and sound you can feel.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#work"
              className="rounded-xl bg-white text-slate-900 px-5 py-3 text-sm font-medium shadow-xl shadow-white/10 hover:shadow-white/20 transition"
            >
              See my work
            </a>
            <a
              href="#contact"
              className="rounded-xl border border-white/20 bg-white/5 text-white px-5 py-3 text-sm font-medium hover:bg-white/10 transition"
            >
              Get in touch
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
