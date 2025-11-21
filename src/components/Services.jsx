import { motion } from 'framer-motion'
import { Scissors, ColorSwatch, Waves, Vimeo } from 'lucide-react'

const items = [
  { icon: Scissors, title: 'Editing', desc: 'Rhythmic cuts, story-first pacing, and tasteful transitions.' },
  { icon: ColorSwatch, title: 'Color', desc: 'Clean, modern grades. Filmic contrast and true-to-tone skin.' },
  { icon: Waves, title: 'Sound', desc: 'Crisp dialogue, punchy SFX, and musical cohesion.' },
  { icon: Vimeo, title: 'Social', desc: 'Short-form cuts optimized for IG, TikTok, and YouTube.' },
]

function Services() {
  return (
    <section id="services" className="relative py-20 md:py-28 bg-slate-950">
      <div className="absolute inset-0 bg-[radial-gradient(60%_40%_at_50%_0%,rgba(59,130,246,0.12),transparent)]" />
      <div className="relative mx-auto max-w-6xl px-6">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-2xl md:text-4xl font-semibold text-white tracking-tight">Services</h2>
          <p className="mt-2 text-slate-300/80">Clean, modern deliverables for brands and creators. Built on clarity and simplicity.</p>
        </div>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((Item, i) => {
            const Icon = Item.icon
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.45, delay: i * 0.05 }}
                className="relative rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm hover:bg-white/10 transition"
              >
                <div className="inline-flex items-center justify-center rounded-xl bg-gradient-to-tr from-blue-600 to-indigo-500 p-3 text-white shadow-lg shadow-blue-500/20">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-4 text-white font-medium">{Item.title}</h3>
                <p className="mt-1 text-sm text-slate-300/80">{Item.desc}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Services
