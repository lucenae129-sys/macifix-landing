import { motion } from 'framer-motion'
import BeforeAfterImage from './micro-ui/BeforeAfterImage'

const jobs = [
  {
    title: "Micro-soldadura en Placa Base",
    category: "Soporte Avanzado",
    description: "Recuperamos componentes quemados, corroídos y dañados por líquido directamente en la placa lógica. Tecnología de soldadura SMD con microscopio de alta resolución.",
    before: "/micro_soldadura_antes.png",
    after: "/micro_soldadura_despues.png",
    stats: ["98% de éxito", "24–48 hrs", "Garantía 6 meses"]
  },
  {
    title: "Restauración MacBook Pro",
    category: "Laptops Apple",
    description: "Transformamos equipos en mal estado a su gloria original. Carcasa, teclado, pantalla y sistema interno quedan como recién salidos de la caja.",
    before: "/macbook_restauracion_antes.png",
    after: "/macbook_restauracion_despues.png",
    stats: ["Aspecto de nuevo", "Diagnóstico gratis", "Garantía 3 meses"]
  },
  {
    title: "Limpieza Térmica Profunda",
    category: "Mantenimiento",
    description: "Eliminamos el polvo acumulado del sistema de enfriamiento y aplicamos pasta térmica líquido metálico de alta conducción. Tu equipo corre hasta 40°C más frío.",
    before: "/limpieza_termica_antes.png",
    after: "/limpieza_termica_despues.png",
    stats: ["−40°C en temperatura", "Desde $350 pesos", "Mismo día"]
  },
  {
    title: "Cambio de Pantalla Retina",
    category: "Pantallas",
    description: "Reemplazamos displays rotos con paneles certificados. Colores perfectos, brillo máximo y sin manchas. La pantalla que mereces, restaurada en pocas horas.",
    before: "/pantalla_rota_antes.png",
    after: "/pantalla_rota_despues.png",
    stats: ["Panel certificado", "2–4 hrs", "Garantía 6 meses"]
  },
  {
    title: "Instalación de Cámaras IP",
    category: "Seguridad",
    description: "Diseñamos e instalamos sistemas de videovigilancia profesional para hogares y negocios. Cableado oculto, visión nocturna y acceso remoto desde tu celular.",
    before: "/camaras_antes.png",
    after: "/camaras_despues.png",
    stats: ["Visión 24/7", "Acceso remoto", "Instalación el mismo día"]
  }
]

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-32">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <h2 className="text-hero leading-tight mb-8">Nuestros <br /><span className="text-[#86868b]">resultados.</span></h2>
            <p className="text-sub max-w-xl">
              La perfección no es un accidente. Es el resultado de un proceso meticuloso y herramientas de última generación.
            </p>
          </motion.div>
        </div>

        <div className="space-y-48">
          {jobs.map((job, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              className="grid lg:grid-cols-2 gap-16 items-center"
            >
              <div className={index % 2 === 0 ? "lg:order-1" : "lg:order-2"}>
                <div className="liquid-card p-4">
                  <div className="aspect-video rounded-[30px] overflow-hidden">
                    <BeforeAfterImage 
                      beforeImage={job.before} 
                      afterImage={job.after} 
                    />
                  </div>
                </div>
              </div>
              
              <div className={index % 2 === 0 ? "lg:order-2" : "lg:order-1"}>
                <div className="max-w-md mx-auto lg:mx-0">
                  <span className="text-[#0071e3] font-bold text-xs uppercase tracking-[0.2em] mb-4 block">{job.category}</span>
                  <h3 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">{job.title}</h3>
                  <p className="text-[#86868b] text-lg font-light leading-relaxed mb-8">
                    {job.description}
                  </p>

                  {/* Stats badges */}
                  <div className="flex flex-wrap gap-3 mb-10">
                    {job.stats.map((stat, i) => (
                      <span
                        key={i}
                        className="px-4 py-2 rounded-full text-sm font-medium text-white border border-white/10 bg-white/5 backdrop-blur-sm"
                      >
                        {stat}
                      </span>
                    ))}
                  </div>

                  {/* WhatsApp CTA */}
                  <a
                    href={`https://wa.me/527411234567?text=Hola%20Macifix%2C%20me%20interesa%20el%20servicio%20de%20${encodeURIComponent(job.title)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-[#0071e3] text-white font-semibold text-sm hover:bg-[#0077ed] transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,113,227,0.4)] hover:scale-105"
                  >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                    </svg>
                    Cotizar este servicio
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
