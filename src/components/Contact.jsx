import { useState } from 'react'

function Contact() {
  const [status, setStatus] = useState('')

  const onSubmit = async (e) => {
    e.preventDefault()
    setStatus('Sending...')
    await new Promise((r) => setTimeout(r, 800))
    setStatus('Sent! I’ll get back to you shortly.')
  }

  return (
    <section id="contact" className="relative py-20 md:py-28 bg-slate-950">
      <div className="absolute inset-0 bg-[radial-gradient(60%_40%_at_50%_0%,rgba(59,130,246,0.12),transparent)]" />
      <div className="relative mx-auto max-w-3xl px-6">
        <div className="text-center">
          <h2 className="text-2xl md:text-4xl font-semibold text-white tracking-tight">Let’s collaborate</h2>
          <p className="mt-2 text-slate-300/80">Tell me about your project — scope, timeline, and goals.</p>
        </div>

        <form onSubmit={onSubmit} className="mt-8 grid gap-4">
          <div className="grid gap-2">
            <label className="text-sm text-slate-300/80">Name</label>
            <input required className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50" placeholder="Jane Doe" />
          </div>
          <div className="grid gap-2">
            <label className="text-sm text-slate-300/80">Email</label>
            <input type="email" required className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50" placeholder="you@email.com" />
          </div>
          <div className="grid gap-2">
            <label className="text-sm text-slate-300/80">Message</label>
            <textarea required rows="5" className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50" placeholder="Project details..." />
          </div>

          <div className="flex items-center gap-3">
            <button className="rounded-xl bg-white text-slate-900 px-5 py-3 text-sm font-medium shadow-xl shadow-white/10 hover:shadow-white/20 transition">Send inquiry</button>
            <p className="text-sm text-slate-300/70">{status}</p>
          </div>
        </form>

        <p className="mt-8 text-center text-xs text-slate-400">Prefer email? contact@yourname.com</p>
      </div>
    </section>
  )
}

export default Contact
