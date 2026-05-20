import { motion } from 'framer-motion'
import { Smartphone, Laptop, Tablet, Watch, Monitor, Database, Camera } from 'lucide-react'

const WA = '527331066757'
const wa = (msg) => `https://wa.me/${WA}?text=${encodeURIComponent(msg)}`

const services = [
  {
    icon: <Smartphone size={26} className="text-[#0071e3]" />,
    title: "iPhone & Android",
    desc: "Cambio de pantallas, baterías, FaceID y micro-soldadura avanzada.",
    size: "lg",
    link: wa("Hola Macifix 👋 Me interesa el servicio de reparación de iPhone/Android. ¿Pueden darme más información?")
  },
  {
    icon: <Laptop size={26} className="text-[#0071e3]" />,
    title: "MacBook & PC",
    desc: "Servicio térmico, reparación de placa y actualizaciones.",
    size: "sm",
    link: wa("Hola Macifix 👋 Necesito ayuda con mi MacBook/PC. ¿Pueden orientarme sobre el servicio?")
  },
  {
    icon: <Tablet size={26} className="text-[#0071e3]" />,
    title: "iPad & Tablets",
    desc: "Reparación de glass y digitalizadores táctiles.",
    size: "sm",
    link: wa("Hola Macifix 👋 Tengo un iPad o tablet con pantalla dañada. ¿Cuánto cuesta la reparación?")
  },
  {
    icon: <Database size={26} className="text-[#0071e3]" />,
    title: "Recuperación de Datos",
    desc: "Extracción forense de información en equipos dañados.",
    size: "sm",
    link: wa("Hola Macifix 👋 Necesito recuperar información de un equipo dañado. ¿Me pueden ayudar?")
  },
  {
    icon: <Watch size={26} className="text-[#0071e3]" />,
    title: "Relojes & Smartwatches",
    desc: "Soporte técnico especializado para Apple Watch y relojes inteligentes.",
    size: "sm",
    link: wa("Hola Macifix 👋 Tengo un Apple Watch o reloj inteligente con fallas. ¿Tienen servicio para eso?")
  },
  {
    icon: <Monitor size={26} className="text-[#0071e3]" />,
    title: "iMac & Monitores",
    desc: "Reparación de fuentes de poder y paneles LED profesionales.",
    size: "sm",
    link: wa("Hola Macifix 👋 Mi iMac o monitor no enciende/tiene problemas de imagen. ¿Pueden revisarlo?")
  },
  {
    icon: <Camera size={26} className="text-[#0071e3]" />,
    title: "Cámaras de Seguridad",
    desc: "Instalación y mantenimiento de sistemas CCTV y monitoreo remoto.",
    size: "lg",
    link: wa("Hola Macifix 👋 Me interesa instalar cámaras de seguridad CCTV. ¿Qué opciones tienen?")
  }
]

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1 }
  }
}

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } }
}

export default function Services() {
  return (
    <section id="servicios" className="py-20">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="mb-32">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <h2 className="text-hero leading-tight mb-8">
              Soluciones <br /><span className="text-[#86868b]">técnicas.</span>
            </h2>
            <p className="text-sub max-w-xl">
              Especialistas en hardware de alta gama. Diagnóstico gratuito en todos los niveles.
            </p>
          </motion.div>
        </div>

        {/* Cards grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          {services.map((s, i) => (
            <motion.div
              key={i}
              variants={cardVariants}
              whileHover={{ y: -6, transition: { duration: 0.3 } }}
              className={`
                relative group overflow-hidden
                liquid-card p-10 flex flex-col justify-between
                border border-white/5
                hover:border-[#0071e3]/40
                hover:shadow-[0_0_40px_rgba(0,113,227,0.15)]
                transition-all duration-500
                ${s.size === 'lg' ? 'md:col-span-2' : ''}
              `}
            >
              {/* Blue glow blob on hover */}
              <div className="absolute -top-10 -left-10 w-40 h-40 bg-[#0071e3]/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

              <div>
                {/* Icon box */}
                <div className="
                  w-14 h-14 rounded-2xl mb-10
                  bg-[#0071e3]/10 border border-[#0071e3]/20
                  flex items-center justify-center
                  group-hover:bg-[#0071e3]/20
                  group-hover:border-[#0071e3]/50
                  group-hover:shadow-[0_0_20px_rgba(0,113,227,0.3)]
                  group-hover:scale-110
                  transition-all duration-500
                ">
                  {s.icon}
                </div>

                {/* Title */}
                <h4 className="text-2xl font-bold text-white mb-4 tracking-tight group-hover:text-[#4da3ff] transition-colors duration-300">
                  {s.title}
                </h4>

                {/* Description */}
                <p className="text-[#86868b] text-lg font-light leading-relaxed">
                  {s.desc}
                </p>
              </div>

              {/* CTA link */}
              <a
                href={s.link}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  inline-flex items-center gap-2 mt-8
                  text-[#0071e3] text-sm font-bold
                  group-hover:gap-4 transition-all duration-300
                "
              >
                Saber más
                <motion.span
                  animate={{ x: [0, 4, 0] }}
                  transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
                >
                  →
                </motion.span>
              </a>

              {/* Bottom blue accent line */}
              <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-gradient-to-r from-[#0071e3] to-[#4da3ff] group-hover:w-full transition-all duration-500 rounded-full" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
