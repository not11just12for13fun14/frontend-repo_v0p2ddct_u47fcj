import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Gallery from './components/Gallery'
import About from './components/About'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-200">
      <div className="fixed inset-0 bg-gradient-to-b from-slate-900 via-slate-900/70 to-slate-950" />
      <div className="absolute inset-0 bg-[radial-gradient(60%_60%_at_0%_0%,rgba(34,211,238,0.08),transparent_60%)]" />

      <Navbar />
      <main className="relative">
        <Hero />
        <Gallery />
        <About />
        <Contact />
        <footer className="py-12 text-center text-sm text-slate-400/80">© {new Date().getFullYear()} Merch Portfolio. All rights reserved.</footer>
      </main>
    </div>
  )
}

export default App
