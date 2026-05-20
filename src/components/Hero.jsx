import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex flex-col items-center justify-center text-center px-6 pt-32 pb-16 overflow-hidden">
      {/* Central Motion Graphic Blob */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-4xl -z-10 opacity-30">
        <motion.svg
          viewBox="0 0 200 200"
          className="w-full h-full"
          animate={{
            rotate: 360
          }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        >
          <motion.path
            fill="#0071e3"
            animate={{
              d: [
                "M47.5,-57.2C59.1,-46.8,64.4,-29.4,63.1,-13.1C61.8,3.2,53.8,18.4,43.2,30.3C32.7,42.2,19.6,50.7,5.1,55.1C-9.5,59.4,-25.4,59.6,-38.7,52.4C-52,45.2,-62.7,30.6,-66.1,14.6C-69.5,-1.4,-65.7,-18.7,-56.3,-30.9C-47,-43.2,-32.1,-50.3,-17.5,-55C-2.9,-59.7,11.5,-61.9,47.5,-57.2Z",
                "M44.7,-59.1C56.6,-51.2,64.2,-36.1,66.1,-20.5C68,-4.9,64.3,11.3,56.7,25.6C49.1,40,37.7,52.5,23.5,59.1C9.3,65.8,-7.7,66.7,-22.7,61.4C-37.7,56.1,-50.7,44.7,-58.5,30.9C-66.2,17.1,-68.8,1,-66,-14.2C-63.3,-29.4,-55.1,-43.6,-43.3,-51.6C-31.5,-59.6,-15.7,-61.4,0.4,-62C16.5,-62.6,32.9,-67,44.7,-59.1Z",
                "M47.5,-57.2C59.1,-46.8,64.4,-29.4,63.1,-13.1C61.8,3.2,53.8,18.4,43.2,30.3C32.7,42.2,19.6,50.7,5.1,55.1C-9.5,59.4,-25.4,59.6,-38.7,52.4C-52,45.2,-62.7,30.6,-66.1,14.6C-69.5,-1.4,-65.7,-18.7,-56.3,-30.9C-47,-43.2,-32.1,-50.3,-17.5,-55C-2.9,-59.7,11.5,-61.9,47.5,-57.2Z"
              ]
            }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            transform="translate(100 100)"
          />
        </motion.svg>
      </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="flex flex-wrap items-center justify-center gap-4 mb-8">
            <span className="px-4 py-1.5 rounded-full bg-blue-600/10 border border-blue-600/20 text-[10px] font-bold text-blue-500 uppercase tracking-widest">
              Establecidos en 2004
            </span>
            <span className="px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-[10px] font-bold text-[#86868b] uppercase tracking-widest">
              20+ Años de Experiencia
            </span>
          </div>
          
          <h1 className="text-hero mb-8">
            El equipo que otros<br className="hidden md:block" />
            <span className="text-[#86868b]"> ya daban por muerto.</span>
          </h1>
          
          <p className="text-sub max-w-2xl mx-auto mb-12">
            Diagnóstico gratis, <span className="text-white font-bold">resultados en 24 hrs</span> y seguimiento por WhatsApp.
            Más de 20 años reparando en Iguala lo que nadie más puede.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <motion.a 
              href="https://wa.me/527331066757"
              whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(0, 210, 255, 0.4)" }}
              whileTap={{ scale: 0.95 }}
              className="btn-apple bg-blue-500 text-white border-none"
            >
              Solicitar Diagnóstico Gratis
            </motion.a>
            <a href="#proceso" className="text-[#0071e3] font-medium hover:underline flex items-center gap-2 text-lg">
              Conoce nuestro protocolo <span>→</span>
            </a>
          </div>
        </motion.div>

      {/* Floating Status Badge */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-16 left-1/2 -translate-x-1/2 flex items-center gap-3 text-[#86868b] text-sm font-medium tracking-wide"
      >
        <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
        Laboratorio Operativo en Iguala
      </motion.div>
    </section>
  )
}
