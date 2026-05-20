import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { MessageCircle } from 'lucide-react'

export default function CTABanner() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section style={{ padding: '4rem 1.5rem', position: 'relative' }}>
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 30, scale: 0.98 }}
        animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
        transition={{ duration: 0.6 }}
        style={{
          maxWidth: '900px',
          margin: '0 auto',
          borderRadius: '24px',
          padding: '3.5rem 2rem',
          textAlign: 'center',
          background: 'linear-gradient(135deg, rgba(0,212,255,0.08) 0%, rgba(124,58,237,0.12) 100%)',
          border: '1px solid rgba(0,212,255,0.2)',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Glow */}
        <div style={{
          position: 'absolute',
          top: '-80px', left: '50%', transform: 'translateX(-50%)',
          width: '300px', height: '300px',
          background: 'rgba(0,212,255,0.06)',
          borderRadius: '50%',
          filter: 'blur(60px)',
        }} />

        <motion.div
          animate={{ rotate: [0, 5, -5, 0] }}
          transition={{ repeat: Infinity, duration: 3 }}
          style={{ fontSize: '3rem', marginBottom: '1rem' }}
        >
          ⚡
        </motion.div>

        <h2 style={{
          fontFamily: "'Space Grotesk', sans-serif",
          fontWeight: 800,
          fontSize: 'clamp(1.6rem, 4vw, 2.5rem)',
          color: '#e8f0fe',
          letterSpacing: '-0.02em',
          marginBottom: '0.8rem',
        }}>
          ¿Listo para recuperar tu equipo?
        </h2>
        <p style={{
          color: '#64748b',
          fontSize: '1.05rem',
          marginBottom: '2rem',
          maxWidth: '500px',
          margin: '0 auto 2rem',
          lineHeight: 1.7,
        }}>
          Contáctanos ahora y en menos de 24 horas tendrás el diagnóstico de tu equipo — <strong style={{ color: '#00d4ff' }}>completamente gratis</strong>.
        </p>

        <a
          href="https://wa.me/527331066757?text=Hola%20Macifix%2C%20quisiera%20una%20cotización"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary"
          id="cta-banner-btn"
          style={{ fontSize: '1.1rem', padding: '1rem 2.5rem' }}
        >
          <MessageCircle size={20} />
          Contactar por WhatsApp
        </a>
      </motion.div>
    </section>
  )
}
