import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const faqs = [
  {
    question: "¿Cuánto tiempo toma el diagnóstico?",
    answer: "El diagnóstico básico inicial es inmediato y sin costo. Para fallas complejas de tarjeta lógica, el diagnóstico detallado puede tomar hasta 24 horas."
  },
  {
    question: "¿Las refacciones son originales?",
    answer: "Utilizamos refacciones de grado original (OEM) y certificadas que cumplen con los estándares de fábrica para asegurar que tu equipo mantenga su rendimiento y durabilidad."
  },
  {
    question: "¿Qué garantía tienen las reparaciones?",
    answer: "Todas nuestras reparaciones cuentan con una garantía de 30 días contra defectos de fabricación o fallas en la mano de obra. Tu satisfacción es nuestra prioridad."
  },
  {
    question: "¿Perderé mi información?",
    answer: "En reparaciones físicas (pantallas, baterías), tus datos están seguros. Si la falla es de software o tarjeta madre, te informaremos antes de proceder para que realices un respaldo."
  },
  {
    question: "¿Reparan equipos mojados?",
    answer: "Sí, mediante limpieza ultrasónica y tratamiento químico. El éxito depende de qué tan pronto traigas el equipo; te recomendamos NO encenderlo ni cargarlo."
  },
  {
    question: "¿Tienen servicio a domicilio?",
    answer: "Actualmente recibimos los equipos en nuestras sucursales físicas para garantizar el uso de herramienta profesional, pero podemos coordinar la recolección vía WhatsApp."
  },
  {
    question: "¿Cuál es el costo de revisión?",
    answer: "La revisión básica es totalmente GRATUITA. Solo pagas si decides realizar la reparación cotizada."
  }
]

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState(null)

  return (
    <section id="faq" className="py-20">
      <div className="max-w-4xl mx-auto px-6">
        <div className="mb-32">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-hero leading-tight mb-8">Preguntas <br /><span className="text-[#86868b]">claras.</span></h2>
            <p className="text-sub">Resolvemos tus dudas tecnológicas antes de iniciar cualquier proceso.</p>
          </motion.div>
        </div>

        <div className="border-t border-white/5">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-white/5 overflow-hidden">
              <button
                onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                className="w-full flex items-center justify-between py-10 text-left group"
              >
                <span className="text-xl md:text-2xl font-bold text-white tracking-tight group-hover:text-[#0071e3] transition-colors">{faq.question}</span>
                <motion.span 
                  animate={{ rotate: activeIndex === index ? 45 : 0 }}
                  className="text-3xl text-[#86868b] font-light"
                >
                  +
                </motion.span>
              </button>
              
              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <div className="pb-12 text-lg text-[#86868b] font-light leading-relaxed max-w-2xl">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
