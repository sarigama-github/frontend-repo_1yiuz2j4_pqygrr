import { useEffect, useState } from 'react'
import { Camera, Menu } from 'lucide-react'

function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const navClasses = `fixed top-0 inset-x-0 z-50 transition-all ${
    scrolled ? 'bg-slate-900/70 backdrop-blur-xl border-b border-white/10' : 'bg-transparent'
  }`

  const LinkItem = ({ href, children }) => (
    <a href={href} className="text-slate-200 hover:text-white transition-colors px-3 py-2">
      {children}
    </a>
  )

  return (
    <header className={navClasses}>
      <nav className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="#home" className="flex items-center gap-2 text-white">
            <span className="p-2 rounded-xl bg-gradient-to-tr from-blue-600 to-indigo-500 shadow-lg shadow-blue-500/20">
              <Camera className="h-5 w-5" />
            </span>
            <span className="font-semibold tracking-tight">Your Name</span>
          </a>

          <div className="hidden md:flex items-center gap-1">
            <LinkItem href="#work">Work</LinkItem>
            <LinkItem href="#services">Services</LinkItem>
            <LinkItem href="#about">About</LinkItem>
            <LinkItem href="#contact">Contact</LinkItem>
          </div>

          <button
            className="md:hidden inline-flex items-center justify-center rounded-lg p-2 text-slate-200 hover:bg-white/5"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>
        {open && (
          <div className="md:hidden pb-4 animate-in">
            <div className="flex flex-col rounded-xl border border-white/10 bg-slate-900/80 backdrop-blur-lg">
              <LinkItem href="#work">Work</LinkItem>
              <LinkItem href="#services">Services</LinkItem>
              <LinkItem href="#about">About</LinkItem>
              <LinkItem href="#contact">Contact</LinkItem>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}

export default Navbar
