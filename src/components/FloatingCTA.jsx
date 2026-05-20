import { motion, AnimatePresence } from 'framer-motion'
import { MessageCircle, X } from 'lucide-react'
import { useState, useEffect } from 'react'

export default function FloatingCTA() {
  const [isVisible, setIsVisible] = useState(false)
  const [showTooltip, setShowTooltip] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 3000)
    const tooltipTimer = setTimeout(() => setShowTooltip(true), 6000)
    return () => { clearTimeout(timer); clearTimeout(tooltipTimer); }
  }, [])

  return (
    <div className="fixed bottom-6 right-6 md:bottom-8 md:right-8 z-[150] flex flex-col items-end gap-4">
      <AnimatePresence>
        {showTooltip && (
          <motion.div
            initial={{ opacity: 0, x: 20, scale: 0.8 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            className="bg-black/80 backdrop-blur-lg border border-white/10 rounded-2xl px-3 py-1.5 md:px-4 md:py-2 text-[10px] md:text-xs font-bold text-white whitespace-nowrap relative shadow-xl"
          >
            <span className="text-[#25D366]">✦</span> ¡Diagnóstico GRATIS hoy!
            <button 
              onClick={() => setShowTooltip(false)}
              className="absolute -top-2 -right-2 bg-black/50 rounded-full p-1 border border-white/10"
            >
              <X size={10} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isVisible && (
          <motion.a
            href="https://wa.me/527331066757"
            target="_blank"
            initial={{ scale: 0, rotate: -45 }}
            animate={{ scale: 1, rotate: 0 }}
            whileHover={{ scale: 1.1, rotate: 12 }}
            whileTap={{ scale: 0.9 }}
            className="w-12 h-12 md:w-16 md:h-16 bg-[#25D366] rounded-full flex items-center justify-center shadow-[0_10px_20px_rgba(37,211,102,0.2)] group"
          >
            <MessageCircle size={28} className="text-white md:hidden" />
            <MessageCircle size={32} className="text-white hidden md:block group-hover:scale-110 transition-transform" />
          </motion.a>
        )}
      </AnimatePresence>
    </div>
  )
}
