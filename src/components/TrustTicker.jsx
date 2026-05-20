import { motion, AnimatePresence } from 'framer-motion'
import { CheckCircle, Zap } from 'lucide-react'
import { useState, useEffect } from 'react'

const events = [
  "iPhone 15 Pro: Cambio de pantalla exitoso en Iguala",
  "Diagnóstico gratis solicitado por Juan G.",
  "MacBook Pro: Recuperación de datos completada",
  "Nuevo cliente en zona centro de Iguala",
  "Samsung S24: Reparación de puerto de carga lista",
  "iPad Pro: Restauración de software exitosa"
]

export default function TrustTicker() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % events.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="fixed top-24 left-1/2 -translate-x-1/2 z-[90] w-[90vw] md:w-auto pointer-events-none">
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          initial={{ opacity: 0, y: -20, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 10, scale: 0.95 }}
          transition={{ duration: 0.5, ease: "anticipate" }}
          className="liquid-card px-4 md:px-6 py-2 flex items-center justify-center md:justify-start gap-3 border border-blue-500/10 shadow-2xl"
        >
          <div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-green-500 shadow-[0_0_8px_#22c55e]" />
          <span className="text-[8px] md:text-[10px] font-bold text-[#86868b] uppercase tracking-[0.2em] flex items-center gap-2">
            <Zap size={8} className="text-blue-500 md:w-[10px]" />
            Live:
          </span>
          <span className="text-[10px] md:text-xs font-medium text-white/80 line-clamp-1">{events[index]}</span>
        </motion.div>
      </AnimatePresence>
    </div>
  )
}
