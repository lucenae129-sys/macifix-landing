import { motion, useInView, useMotionValue, useTransform, animate } from 'framer-motion'
import { useRef, useEffect } from 'react'

const stats = [
  { value: 500, suffix: "+",     label: "Equipos reparados",   sublabel: "este año",           color: "text-[#0071e3]" },
  { value: 20,  suffix: "+",     label: "Años de experiencia", sublabel: "desde 2004",          color: "text-white" },
  { value: 2,   suffix: "",      label: "Sucursales",          sublabel: "en Iguala, Gro.",      color: "text-[#0071e3]" },
  { value: 30,  suffix: " días", label: "Garantía de servicio",sublabel: "en toda reparación",  color: "text-white" },
]

function AnimatedNumber({ value, suffix, color }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })
  const count = useMotionValue(0)

  useEffect(() => {
    if (inView) {
      const controls = animate(count, value, { duration: 2, ease: "easeOut" })
      return controls.stop
    }
  }, [inView, value, count])

  return (
    <div ref={ref} className={`text-4xl md:text-6xl font-bold tracking-tighter ${color}`}>
      <motion.span>
        {useTransform(count, (v) => Math.round(v))}
      </motion.span>
      <span>{suffix}</span>
    </div>
  )
}

export default function Stats() {
  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="liquid-card p-12 md:p-16"
        >
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10 text-center">
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex flex-col items-center gap-3"
              >
                <AnimatedNumber value={stat.value} suffix={stat.suffix} color={stat.color} />
                <div>
                  <p className="text-white font-bold text-sm md:text-base tracking-tight">{stat.label}</p>
                  <p className="text-[#86868b] text-xs md:text-sm font-light mt-1">{stat.sublabel}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
