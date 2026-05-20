import { motion } from 'framer-motion'
import { Check } from 'lucide-react'

const pricing = [
  {
    title: "Smartphones",
    price: "$399",
    services: ["Cambio de pantalla", "Batería certificada", "Micro-soldadura"]
  },
  {
    title: "Laptops & MacBook",
    price: "$699",
    services: ["Servicio térmico", "Actualización SSD", "Reparación Logic Board"]
  },
  {
    title: "Tablets & iPads",
    price: "$499",
    services: ["Glass / Digitalizador", "Reemplazo de batería", "Carga rápida"]
  },
  {
    title: "Instalación de Cámaras",
    price: "$1,200",
    services: ["Cámaras IP / CCTV", "Instalación y cableado", "Acceso remoto desde tu celular"]
  }
]

export default function Pricing() {
  return (
    <section id="precios" className="py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-32 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-hero leading-tight mb-8">Precios <br /><span className="text-[#86868b]">transparentes.</span></h2>
            <p className="text-sub max-w-xl mx-auto">
              Valores base para servicios especializados. Diagnóstico sin costo incluido.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
          {pricing.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="liquid-card p-10 text-center flex flex-col"
            >
              <h3 className="text-xl font-bold text-[#86868b] mb-4 tracking-tight min-h-[56px] flex items-center justify-center">{item.title}</h3>
              <div className="mb-8">
                <span className="text-5xl font-bold text-white tracking-tighter">{item.price}</span>
                <span className="text-base font-semibold text-[#86868b] ml-1">MXN+</span>
              </div>
              
              <ul className="space-y-4 mb-10 text-left inline-block mx-auto flex-1">
                {item.services.map((service, i) => (
                  <li key={i} className="flex items-center gap-3 text-[#86868b] text-sm">
                    <Check size={16} className="text-[#0071e3] shrink-0" />
                    {service}
                  </li>
                ))}
              </ul>
              
              <a 
                href="https://wa.me/527331066757" 
                className="w-full py-4 rounded-full bg-white/5 border border-white/10 text-white font-bold text-sm hover:bg-white/10 transition-all block mt-auto"
              >
                Consultar costo exacto
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
