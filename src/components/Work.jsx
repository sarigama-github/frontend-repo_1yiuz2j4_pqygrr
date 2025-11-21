import { motion } from 'framer-motion'

const projects = [
  {
    title: 'City Nights — Music Video',
    roles: ['Edit', 'Color', 'Motion'],
    thumb: 'https://images.unsplash.com/photo-1517940310602-4852b51a2be3?q=80&w=1600&auto=format&fit=crop',
  },
  {
    title: 'Aerials for Outdoor Brand',
    roles: ['Edit', 'Sound'],
    thumb: 'https://images.unsplash.com/photo-1503777119540-ce54b422baff?q=80&w=1600&auto=format&fit=crop',
  },
  {
    title: 'Product Launch Teaser',
    roles: ['Edit', 'Motion'],
    thumb: 'https://images.unsplash.com/photo-1575320192546-68bc1ae831ee?q=80&w=1600&auto=format&fit=crop',
  },
  {
    title: 'Travel Reel 2024',
    roles: ['Edit', 'Color', 'Sound'],
    thumb: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1600&auto=format&fit=crop',
  },
  {
    title: 'Short Doc — Makers',
    roles: ['Edit', 'Color'],
    thumb: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1600&auto=format&fit=crop',
  },
  {
    title: 'Brand Social Cuts',
    roles: ['Edit'],
    thumb: 'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?q=80&w=1600&auto=format&fit=crop',
  },
]

function Work() {
  return (
    <section id="work" className="relative py-20 md:py-28 bg-slate-950">
      <div className="absolute inset-0 bg-[radial-gradient(60%_40%_at_50%_0%,rgba(59,130,246,0.15),transparent)]" />
      <div className="relative mx-auto max-w-6xl px-6">
        <div className="flex items-end justify-between gap-6">
          <div>
            <h2 className="text-2xl md:text-4xl font-semibold text-white tracking-tight">Selected Work</h2>
            <p className="mt-2 text-slate-300/80 max-w-xl">A few edits I loved crafting — crisp pacing, tasteful transitions, and clean sound design.</p>
          </div>
          <a href="#contact" className="hidden md:inline-flex items-center rounded-lg border border-white/15 bg-white/5 px-4 py-2 text-sm text-white hover:bg-white/10">Request a quote</a>
        </div>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <motion.a
              key={i}
              href="#contact"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 transition"
            >
              <div className="aspect-video overflow-hidden">
                <img src={p.thumb} alt={p.title} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-950/10 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <h3 className="text-white font-medium">{p.title}</h3>
                <p className="text-xs text-slate-300/80">{p.roles.join(' • ')}</p>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Work
