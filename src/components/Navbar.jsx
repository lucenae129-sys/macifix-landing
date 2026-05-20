import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'

const navLinks = [
  { label: 'Servicios', href: '#servicios' },
  { label: 'Protocolo', href: '#proceso' },
  { label: 'Precios', href: '#precios' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Contacto', href: '#contacto' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <nav 
        className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${scrolled ? 'py-4' : 'py-8'}`}
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className={`relative flex items-center justify-between px-4 md:px-8 py-2 md:py-3 rounded-full transition-all duration-500 ${scrolled ? 'bg-black/80 backdrop-blur-3xl border border-white/5' : 'bg-transparent'}`}>
            <a href="#" className="text-lg md:text-2xl font-bold tracking-tighter text-white">
              Macifix <span className="text-[#0071e3]">Solutions.</span>
            </a>

            {/* Desktop links */}
            <div className="hidden md:flex items-center gap-10">
              {navLinks.map(link => (
                <a 
                  key={link.href} 
                  href={link.href} 
                  className="text-xs font-semibold text-[#86868b] hover:text-white transition-colors uppercase tracking-[0.1em]"
                >
                  {link.label}
                </a>
              ))}
            </div>

            <div className="flex items-center gap-3">
              <a 
                href="https://wa.me/527331066757?text=Hola%20Macifix%2C%20quisiera%20una%20cotizaci%C3%B3n" 
                className="text-xs font-bold bg-white text-black px-6 py-2.5 rounded-full hover:bg-[#f5f5f7] transition-all"
              >
                Cotizar
              </a>
              {/* Hamburger — mobile only */}
              <button
                className="md:hidden w-10 h-10 flex items-center justify-center rounded-full bg-white/5 border border-white/10 text-white"
                onClick={() => setMenuOpen(v => !v)}
                aria-label="Menú"
              >
                {menuOpen ? <X size={18} /> : <Menu size={18} />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile menu drawer */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="fixed top-0 left-0 right-0 z-[99] bg-black/95 backdrop-blur-3xl border-b border-white/5 pt-28 pb-10 px-8 flex flex-col gap-6 md:hidden"
          >
            {navLinks.map((link, i) => (
              <motion.a
                key={link.href}
                href={link.href}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.05 }}
                onClick={() => setMenuOpen(false)}
                className="text-2xl font-bold text-white hover:text-[#0071e3] transition-colors py-2 border-b border-white/5"
              >
                {link.label}
              </motion.a>
            ))}
            <a
              href="https://wa.me/527331066757?text=Hola%20Macifix%2C%20quisiera%20una%20cotizaci%C3%B3n"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMenuOpen(false)}
              className="mt-4 text-center text-sm font-bold bg-[#0071e3] text-white px-8 py-4 rounded-full hover:bg-blue-500 transition-all"
            >
              📲 Cotizar por WhatsApp
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
