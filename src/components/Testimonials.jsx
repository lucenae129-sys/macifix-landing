import { motion } from 'framer-motion'
import { Star, Quote } from 'lucide-react'

const reviews = [
  {
    initials: "CM",
    name: "Carlos M.",
    role: "Cliente — iPhone 13",
    location: "Iguala, Gro.",
    text: "Repararon mi MacBook Pro que en otros lados me decían que ya no tenía arreglo. Servicio increíble y muy profesionales. 100% recomendados.",
    rating: 5,
    color: "from-blue-600 to-blue-400"
  },
  {
    initials: "PR",
    name: "Papelería Ramírez",
    role: "Negocio local — Cámaras CCTV",
    location: "Iguala, Gro.",
    text: "Instalaron el sistema de cámaras en mi negocio y el seguimiento por WhatsApp es excelente. Ya lo vi funcionar desde mi celular el mismo día.",
    rating: 5,
    color: "from-purple-600 to-purple-400"
  },
  {
    initials: "LV",
    name: "Laura V.",
    role: "Clienta — iPad Air",
    location: "Iguala, Gro.",
    text: "El cambio de pantalla fue rápido y quedó perfecta. Me explicaron todo el proceso y me dieron garantía por escrito. Muy honesto el trato.",
    rating: 5,
    color: "from-green-600 to-green-400"
  },
  {
    initials: "JR",
    name: "Jorge R.",
    role: "Cliente — Recuperación de datos",
    location: "Iguala, Gro.",
    text: "Pensé que había perdido toda la información de mi laptop. La recuperaron en 24 horas. No lo podía creer. Excelente trabajo.",
    rating: 5,
    color: "from-orange-500 to-yellow-400"
  }
]

export default function Testimonials() {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-24 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-hero leading-tight mb-8">Lo que dicen <br /><span className="text-[#86868b]">nuestros clientes.</span></h2>
            <p className="text-sub max-w-xl mx-auto">Más de 20 años construyendo confianza en Iguala, una reparación a la vez.</p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
          {reviews.map((rev, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="liquid-card p-8 flex flex-col h-full"
            >
              <div className="text-blue-500 mb-5"><Quote size={24} /></div>
              <p className="text-[#86868b] text-base font-light leading-relaxed mb-8 italic flex-1">
                "{rev.text}"
              </p>
              <div className="mt-auto">
                <div className="flex gap-1 mb-4">
                  {[...Array(rev.rating)].map((_, i) => (
                    <Star key={i} size={13} className="fill-yellow-500 text-yellow-500" />
                  ))}
                </div>
                <div className="flex items-center gap-3">
                  <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${rev.color} flex items-center justify-center text-white font-bold text-xs shrink-0`}>
                    {rev.initials}
                  </div>
                  <div>
                    <p className="text-white font-bold text-sm">{rev.name}</p>
                    <p className="text-[#86868b] text-xs">{rev.role}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
