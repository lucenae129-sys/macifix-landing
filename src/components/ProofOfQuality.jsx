import { useRef, useEffect } from 'react'
import { motion, useInView, useMotionValue, animate } from 'framer-motion'
import { ShieldCheck, Zap, Clock, Award, Cpu, Users } from 'lucide-react'

/* ── Animated counter ── */
function Counter({ to, suffix = '', prefix = '', decimals = 0 }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })
  const count = useMotionValue(0)

  useEffect(() => {
    if (!inView) return
    const ctrl = animate(count, to, { duration: 2.2, ease: 'easeOut' })
    const unsub = count.on('change', (v) => {
      if (ref.current)
        ref.current.textContent = prefix + v.toFixed(decimals) + suffix
    })
    return () => { ctrl.stop(); unsub() }
  }, [inView, to, prefix, suffix, decimals, count])

  return <span ref={ref}>{prefix}0{suffix}</span>
}

/* ── Animated progress bar ── */
function Bar({ pct, color = '#0071e3' }) {
  return (
    <div className="h-1.5 w-full rounded-full bg-white/5 overflow-hidden">
      <motion.div
        className="h-full rounded-full"
        style={{ background: color }}
        initial={{ width: 0 }}
        whileInView={{ width: `${pct}%` }}
        viewport={{ once: true }}
        transition={{ duration: 1.6, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
      />
    </div>
  )
}

const metrics = [
  { icon: ShieldCheck, label: 'Tasa de éxito en reparaciones',  value: 98.5, suffix: '%',  bar: 98.5, color: '#0071e3' },
  { icon: Cpu,         label: 'Éxito en micro-soldadura',       value: 96,   suffix: '%',  bar: 96,   color: '#4da3ff' },
  { icon: Zap,         label: 'Casos resueltos el mismo día',   value: 87,   suffix: '%',  bar: 87,   color: '#0071e3' },
  { icon: Users,       label: 'Clientes que regresan',          value: 92,   suffix: '%',  bar: 92,   color: '#4da3ff' },
]

const highlights = [
  { icon: Award, top: '+500', bottom: 'Equipos reparados este año' },
  { icon: Clock, top: '4.2h', bottom: 'Tiempo promedio de entrega' },
  { icon: ShieldCheck, top: '30', bottom: 'Días de garantía' },
]

export default function ProofOfQuality() {
  return (
    <section id="pruebas" className="py-20 relative overflow-hidden">

      {/* Background glow blobs */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-[#0071e3]/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-[#0071e3]/8 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="mb-24"
        >
          <h2 className="text-hero leading-tight mb-8">
            Precisión <br /><span className="text-[#86868b]">demostrable.</span>
          </h2>
          <p className="text-sub max-w-xl">
            Números reales de nuestro laboratorio. Cada reparación respaldada por datos y garantía escrita.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10 items-start">

          {/* LEFT — progress metrics */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="liquid-card p-10 space-y-10"
          >
            {metrics.map((m, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12, duration: 0.7 }}
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <m.icon size={16} className="text-[#0071e3]" />
                    <span className="text-white/70 text-sm font-medium">{m.label}</span>
                  </div>
                  <span className="text-white font-bold text-lg tabular-nums">
                    <Counter to={m.value} suffix={m.suffix} decimals={m.value % 1 !== 0 ? 1 : 0} />
                  </span>
                </div>
                <Bar pct={m.bar} color={m.color} />
              </motion.div>
            ))}
          </motion.div>

          {/* RIGHT — big stat + highlight cards */}
          <div className="flex flex-col gap-6">

            {/* Hero stat card */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="liquid-card p-10 relative overflow-hidden"
            >
              {/* inner glow */}
              <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-[#0071e3]/15 rounded-full blur-3xl pointer-events-none" />

              <p className="text-[#0071e3] text-xs font-bold uppercase tracking-[0.25em] mb-4">Fundada en 2004</p>
              <div className="text-[4rem] sm:text-[6rem] font-black leading-none text-white tracking-tighter mb-2">
                <Counter to={20} suffix="+" />
              </div>
              <p className="text-[#86868b] text-xl font-light">años reparando dispositivos Apple y Android en Iguala, Guerrero.</p>

              {/* dot grid decoration */}
              <div className="absolute top-6 right-6 grid grid-cols-5 gap-1.5 opacity-20">
                {Array.from({ length: 25 }).map((_, i) => (
                  <div key={i} className="w-1 h-1 rounded-full bg-[#0071e3]" />
                ))}
              </div>
            </motion.div>

            {/* 3 mini highlight cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {highlights.map((h, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + i * 0.1, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                  whileHover={{ y: -4, transition: { duration: 0.3 } }}
                  className="liquid-card p-6 flex flex-col items-center text-center group hover:border-[#0071e3]/30 hover:shadow-[0_0_30px_rgba(0,113,227,0.1)] transition-all duration-500"
                >
                  <h.icon size={18} className="text-[#0071e3] mb-3 group-hover:scale-110 transition-transform duration-300" />
                  <div className="text-2xl font-black text-white leading-none mb-1">{h.top}</div>
                  <p className="text-[#86868b] text-[11px] font-light leading-tight">{h.bottom}</p>
                </motion.div>
              ))}
            </div>

          </div>
        </div>

        {/* Bottom trust strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-12 liquid-card px-10 py-6 flex flex-col sm:flex-row items-center justify-between gap-4"
        >
          <p className="text-white/60 text-sm font-light">
            Todos los datos corresponden al período <span className="text-white font-medium">Enero – Mayo 2026</span>
          </p>
          <div className="flex items-center gap-2 text-[#0071e3] text-sm font-bold">
            <ShieldCheck size={16} />
            Garantía escrita en cada reparación
          </div>
        </motion.div>

      </div>
    </section>
  )
}
