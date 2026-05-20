import { motion } from 'framer-motion'
import { Microscope, MessageSquareText, Cpu, PackageCheck, Zap } from 'lucide-react'

const steps = [
  {
    icon: <Microscope className="text-[#0071e3]" size={32} />,
    title: "01. Diagnóstico",
    desc: "Análisis exhaustivo de hardware y software para identificar la falla exacta.",
    glow: "blue"
  },
  {
    icon: <MessageSquareText className="text-[#0071e3]" size={32} />,
    title: "02. Cotización",
    desc: "Te contactamos para explicarte el problema y darte el presupuesto más justo.",
    glow: "blue"
  },
  {
    icon: <Cpu className="text-[#0071e3]" size={32} />,
    title: "03. Reparación",
    desc: "Intervención técnica de alta precisión con refacciones de grado original.",
    glow: "blue"
  },
  {
    icon: <PackageCheck className="text-green-500" size={32} />,
    title: "04. Entrega",
    desc: "Certificación de calidad y entrega de tu equipo con garantía de 30 días.",
    glow: "green"
  }
]

export default function Process() {
  return (
    <section id="proceso" className="py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-32">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-hero leading-tight mb-8">Transparencia <br /><span className="text-[#86868b]">total.</span></h2>
            <p className="text-sub max-w-2xl">
              Nuestro sistema exclusivo de <span className="text-white font-bold">Seguimiento en Vivo</span> te notifica vía WhatsApp en cada fase del proceso.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="relative group"
            >
              <div className="liquid-card p-10 h-full flex flex-col items-center text-center">
                <div className={`w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center mb-8 group-hover:scale-110 transition-all duration-500 ${
                  step.glow === 'green'
                    ? 'group-hover:bg-green-500/10 group-hover:shadow-[0_0_20px_rgba(34,197,94,0.25)]'
                    : 'group-hover:bg-[#0071e3]/10 group-hover:shadow-[0_0_20px_rgba(0,113,227,0.25)]'
                }`}>
                  {step.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-4 tracking-tight">{step.title}</h3>
                <p className="text-[#86868b] text-sm font-light leading-relaxed mb-6">
                  {step.desc}
                </p>
                
                {/* WhatsApp Notification Tag */}
                <div className="mt-auto flex items-center gap-2 px-4 py-1.5 rounded-full bg-green-500/5 border border-green-500/10 text-[9px] font-bold text-green-500 uppercase tracking-widest">
                  <Zap size={10} className="animate-pulse" /> Notificado por WhatsApp
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
