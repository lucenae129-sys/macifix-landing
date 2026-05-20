import Navbar from './components/Navbar'
import BackgroundGraphics from './components/BackgroundGraphics'
import TrustTicker from './components/TrustTicker'
import FloatingCTA from './components/FloatingCTA'
import Hero from './components/Hero'
import Services from './components/Services'
import Process from './components/Process'
import ProofOfQuality from './components/ProofOfQuality'
import Pricing from './components/Pricing'
import Testimonials from './components/Testimonials'
import FAQ from './components/FAQ'
import Blog from './components/Blog'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Stats from './components/Stats'

export default function App() {
  return (
    <div className="bg-[#020408] min-h-screen text-white font-sans selection:bg-blue-500/30 overflow-x-hidden">
      <Navbar />
      <BackgroundGraphics />
      <FloatingCTA />
      <main className="relative">
        <Hero />
        <Stats />
        <div className="space-y-32 md:space-y-48 pb-32">
          <Services />
          <Process />
          <ProofOfQuality />
          <Pricing />
          <Testimonials />
          <FAQ />
          <Blog />
          <Contact />
        </div>
      </main>
      <Footer />
    </div>
  )
}
