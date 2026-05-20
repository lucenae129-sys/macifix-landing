import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { ShieldCheck, Clock3, BadgeDollarSign, Star, ThumbsUp, Wrench } from 'lucide-react'



const advantages = [
  {
    icon: <ShieldCheck size={26} />,
    title: 'Garantía de 30 días',
    desc: 'Cada reparación viene respaldada por nuestra garantía. Si algo falla, lo resolvemos sin costo adicional.',
    color: '#34d399',
  },
  {
    icon: <Clock3 size={26} />,
    title: 'Diagnóstico gratuito',
    desc: 'Sin cargos por revisar tu equipo. Te damos un presupuesto claro antes de empezar cualquier reparación.',
    color: '#00d4ff',
  },
  {
    icon: <BadgeDollarSign size={26} />,
    title: 'Precios justos',
    desc: 'Tarifas honestas y transparentes. Nada de costos ocultos ni sorpresas al momento de recoger tu equipo.',
    color: '#f59e0b',
  },
  {
    icon: <Wrench size={26} />,
    title: 'Técnicos certificados',
    desc: 'Nuestro equipo tiene experiencia y formación en las principales marcas y modelos del mercado.',
    color: '#a855f7',
  },
  {
    icon: <ThumbsUp size={26} />,
    title: 'Refacciones de calidad',
    desc: 'Usamos piezas originales o de alta compatibilidad para asegurar que tu equipo quede como nuevo.',
    color: '#f472b6',
  },
  {
    icon: <Star size={26} />,
    title: 'Atención personalizada',
    desc: 'Te mantenemos informado durante todo el proceso. Sabemos que tu equipo es importante para ti.',
    color: '#22d3ee',
  },
]


export default function WhyUs() {
  const headRef = useRef(null)
  const headInView = useInView(headRef, { once: true, margin: '-60px' })

  return (
    <section id="ventajas" style={{ padding: '6rem 1.5rem', position: 'relative' }}>
      {/* Glow */}
      <div className="glow-orb" style={{
        width: '500px', height: '500px',
        background: 'rgba(52,211,153,0.05)',
        top: '20%', right: '-200px',
      }} />

      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        {/* Header */}
        <motion.div
          ref={headRef}
          initial={{ opacity: 0, y: 30 }}
          animate={headInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          style={{ textAlign: 'center', marginBottom: '4rem' }}
        >
          <span className="section-tag">🏆 Por qué elegirnos</span>
          <h2 style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontWeight: 800,
            fontSize: 'clamp(1.8rem, 4vw, 2.8rem)',
            color: '#e8f0fe',
            letterSpacing: '-0.02em',
            marginBottom: '0.8rem',
          }}>
            La diferencia <span className="gradient-text">Macifix</span>
          </h2>
          <p style={{ color: '#64748b', fontSize: '1rem', maxWidth: '500px', margin: '0 auto' }}>
            No somos solo un taller de reparaciones. Somos tu aliado tecnológico de confianza.
          </p>
        </motion.div>

        {/* Advantages grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
          gap: '1.5rem',
        }}>
          {advantages.map((adv, i) => (
            <motion.div
              key={adv.title}
              initial={{ opacity: 0, y: 30 }}
              animate={headInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 + i * 0.07 }}
              style={{
                display: 'flex',
                gap: '1.1rem',
                padding: '1.5rem',
                borderRadius: '14px',
                background: 'rgba(13,20,38,0.5)',
                border: '1px solid rgba(255,255,255,0.05)',
                transition: 'border-color 0.3s',
              }}
              onMouseEnter={e => e.currentTarget.style.borderColor = adv.color + '40'}
              onMouseLeave={e => e.currentTarget.style.borderColor = 'rgba(255,255,255,0.05)'}
            >
              <div style={{
                flexShrink: 0,
                width: '50px',
                height: '50px',
                borderRadius: '12px',
                background: `${adv.color}15`,
                color: adv.color,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
                {adv.icon}
              </div>
              <div>
                <h3 style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontWeight: 700,
                  fontSize: '1rem',
                  color: '#e8f0fe',
                  marginBottom: '0.35rem',
                }}>
                  {adv.title}
                </h3>
                <p style={{ color: '#64748b', fontSize: '0.875rem', lineHeight: 1.6 }}>
                  {adv.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
