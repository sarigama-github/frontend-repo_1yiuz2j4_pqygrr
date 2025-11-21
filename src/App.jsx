import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Work from './components/Work'
import Services from './components/Services'
import About from './components/About'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Navbar />
      <main>
        <Hero />
        <Work />
        <Services />
        <About />
        <Contact />
      </main>
      <footer className="border-t border-white/10 bg-slate-950">
        <div className="mx-auto max-w-6xl px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-slate-400 text-sm">© {new Date().getFullYear()} Your Name — Video Editing Portfolio</p>
          <div className="text-slate-400 text-sm">Built with clean cuts and smooth motion</div>
        </div>
      </footer>
    </div>
  )
}

export default App
