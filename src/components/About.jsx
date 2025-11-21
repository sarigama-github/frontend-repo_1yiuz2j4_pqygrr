import { motion } from 'framer-motion'

function About() {
  return (
    <section id="about" className="relative py-20 md:py-28 bg-slate-950">
      <div className="absolute inset-0 bg-[radial-gradient(60%_40%_at_50%_0%,rgba(59,130,246,0.12),transparent)]" />
      <div className="relative mx-auto max-w-6xl px-6 grid items-center gap-10 md:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5 }}
          className="aspect-video rounded-2xl overflow-hidden border border-white/10 bg-white/5"
        >
          <img
            src="https://images.unsplash.com/photo-1512688098550-6a2f0f1a02f4?q=80&w=1600&auto=format&fit=crop"
            alt="Studio"
            className="h-full w-full object-cover"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl md:text-4xl font-semibold text-white tracking-tight">About</h2>
          <p className="mt-3 text-slate-300/85">
            I’m a video editor focused on clarity and emotion. My style blends clean typography, modern motion, and sound design that carries weight. I love helping brands and artists communicate simply and beautifully.
          </p>
          <div className="mt-6 grid grid-cols-2 gap-3">
            <div className="rounded-xl border border-white/10 bg-white/5 p-4">
              <p className="text-3xl font-semibold text-white">7+</p>
              <p className="text-xs text-slate-300/70">Years experience</p>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/5 p-4">
              <p className="text-3xl font-semibold text-white">120+</p>
              <p className="text-xs text-slate-300/70">Projects delivered</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About
