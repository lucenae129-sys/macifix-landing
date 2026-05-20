import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { MapPin, Clock, Send, CheckCircle, Loader2, ArrowRight } from 'lucide-react'

export default function Contact() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })
  const [status, setStatus] = useState('idle')
  const [form, setForm] = useState({ name: '', device: '', problem: '' })

  const handleSubmit = (e) => {
    e.preventDefault()
    setStatus('loading')
    setTimeout(() => {
      const msg = encodeURIComponent(`Hola Macifix Solutions, soy ${form.name}. Equipo: ${form.device}. Problema: ${form.problem}`)
      window.open(`https://wa.me/527331066757?text=${msg}`, '_blank')
      setStatus('success')
      setForm({ name: '', device: '', problem: '' })
      setTimeout(() => setStatus('idle'), 3000)
    }, 1000)
  }

  return (
    <section id="contacto" className="py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-32">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-hero leading-tight mb-8">Nuestras <br /><span className="text-[#86868b]">sucursales.</span></h2>
            <p className="text-sub max-w-xl">
              Visítanos en cualquiera de nuestras 2 ubicaciones en Iguala para un diagnóstico profesional.
            </p>
          </motion.div>
        </div>

        <div className="grid lg:grid-cols-2 gap-24 items-start">
          {/* Info Side */}
          <div className="space-y-12">
            <div className="grid sm:grid-cols-2 gap-8">
              <motion.div 
                whileHover={{ y: -5 }}
                className="liquid-card p-8"
              >
                <div className="text-[#0071e3] mb-6"><MapPin size={28} /></div>
                <h4 className="text-lg font-bold text-white mb-3">Sucursal 1</h4>
                <p className="text-[#86868b] text-sm font-light mb-6">Ignacio zaragoza #29, Iguala, Gro.</p>
                <a 
                  href="https://maps.app.goo.gl/MwHJQwnCYurQWDJ69" 
                  target="_blank" 
                  className="text-xs font-bold text-white flex items-center gap-2 hover:text-[#0071e3] transition-colors"
                >
                  Ver en Google Maps <ArrowRight size={14} />
                </a>
              </motion.div>

              <motion.div 
                whileHover={{ y: -5 }}
                className="liquid-card p-8"
              >
                <div className="text-[#0071e3] mb-6"><MapPin size={28} /></div>
                <h4 className="text-lg font-bold text-white mb-3">Sucursal 2</h4>
                <p className="text-[#86868b] text-sm font-light mb-6">Vicente Guerrero #28A, Iguala, Gro.</p>
                <a 
                  href="https://maps.app.goo.gl/1pRHvZ4URT9328gv7" 
                  target="_blank" 
                  className="text-xs font-bold text-white flex items-center gap-2 hover:text-[#0071e3] transition-colors"
                >
                  Ver en Google Maps <ArrowRight size={14} />
                </a>
              </motion.div>
            </div>

            <div className="liquid-card p-10 flex items-start gap-6">
              <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center shrink-0">
                <Clock className="text-blue-500" />
              </div>
              <div>
                <h4 className="text-xl font-bold text-white mb-4">Horario de Atención</h4>
                <div className="space-y-2 text-[#86868b] text-lg font-light leading-relaxed">
                  <p>Lunes a Viernes: <span className="text-white font-medium">10:00 AM — 7:00 PM</span></p>
                  <p>Domingo: <span className="text-white font-medium">10:00 AM — 4:00 PM</span></p>
                  <p className="text-red-400 font-medium">Sábado: Cerrado</p>
                </div>
              </div>
            </div>
          </div>

          {/* Form Side */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="liquid-card p-12"
          >
            <h4 className="text-2xl font-bold text-white mb-10 tracking-tight">Escríbenos</h4>
            <form onSubmit={handleSubmit} className="space-y-10">
              <div className="space-y-2 border-b border-white/10 pb-4">
                <label className="text-xs font-bold text-[#86868b] uppercase tracking-widest">Nombre</label>
                <input 
                  type="text" 
                  required
                  placeholder="Tu nombre completo"
                  value={form.name}
                  onChange={e => setForm({...form, name: e.target.value})}
                  className="w-full bg-transparent text-xl text-white outline-none placeholder:text-white/10"
                />
              </div>
              <div className="space-y-2 border-b border-white/10 pb-4">
                <label className="text-xs font-bold text-[#86868b] uppercase tracking-widest">Equipo</label>
                <input 
                  type="text" 
                  required
                  placeholder="iPhone, Laptop..."
                  value={form.device}
                  onChange={e => setForm({...form, device: e.target.value})}
                  className="w-full bg-transparent text-xl text-white outline-none placeholder:text-white/10"
                />
              </div>
              <div className="space-y-2 border-b border-white/10 pb-4">
                <label className="text-xs font-bold text-[#86868b] uppercase tracking-widest">Problema</label>
                <textarea 
                  required
                  rows={2}
                  placeholder="¿Qué le sucede?"
                  value={form.problem}
                  onChange={e => setForm({...form, problem: e.target.value})}
                  className="w-full bg-transparent text-xl text-white outline-none resize-none placeholder:text-white/10"
                />
              </div>

              <button 
                type="submit" 
                disabled={status === 'loading'}
                className="btn-apple w-full text-center flex items-center justify-center gap-3"
              >
                {status === 'loading' ? <Loader2 className="animate-spin" /> : status === 'success' ? <><CheckCircle size={20} /> ¡Enviado!</> : "Enviar vía WhatsApp"}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
