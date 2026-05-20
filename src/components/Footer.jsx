import { motion } from 'framer-motion'

// Custom SVGs for Social Media
const FacebookIcon = ({ size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
  </svg>
)

const InstagramIcon = ({ size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
  </svg>
)

const TikTokIcon = ({ size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.06-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.9-.32-1.98-.23-2.81.33-.85.51-1.44 1.43-1.58 2.41-.14.99.13 2.02.74 2.81.59.8 1.54 1.35 2.54 1.47 1.02.13 2.09-.17 2.91-.8.97-.72 1.53-1.89 1.61-3.1.03-3.95-.02-7.9-.02-11.85z"/>
  </svg>
)

export default function Footer() {
  return (
    <footer className="py-20 border-t border-white/5 bg-[#050505]/80 backdrop-blur-3xl overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-16 mb-20">
          <div className="col-span-2">
            <a href="#" className="text-2xl font-bold tracking-tighter text-white mb-8 block">
              Macifix <span className="text-[#0071e3]">Solutions.</span>
            </a>
            <p className="text-[#86868b] text-lg font-light leading-relaxed max-w-sm">
              Servicio técnico profesional de electrónicos en Iguala, Guerrero. 
              Más de 20 años reparando lo que otros no pueden.
            </p>
          </div>

          <div>
            <h4 className="text-white font-bold mb-8 uppercase tracking-widest text-xs">Ubicaciones</h4>
            <div className="space-y-4 text-[#86868b] text-sm">
              <p>Sucursal 1: Iguala Centro, Gro.</p>
              <p>Sucursal 2: Periférico Norte, Iguala.</p>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-8 uppercase tracking-widest text-xs">Contacto</h4>
            <div className="space-y-4 text-sm">
              <a
                href="tel:+527331066757"
                className="flex items-center gap-2 text-[#86868b] hover:text-white transition-colors"
              >
                📞 733 106 6757
              </a>
              <a
                href="https://wa.me/527331066757?text=Hola%20Macifix%2C%20quisiera%20informaci%C3%B3n"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-[#25D366] hover:text-green-400 transition-colors font-semibold"
              >
                💬 WhatsApp
              </a>
              <p className="text-[#86868b]">Lun–Vie: 10am – 7pm</p>
              <p className="text-[#86868b]">Dom: 10am – 4pm</p>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-8 uppercase tracking-widest text-xs">Síguenos</h4>
            <div className="flex gap-6">
              <motion.a 
                href="https://www.facebook.com/macifixsolutions" 
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -5, color: '#1877F2' }}
                className="text-[#86868b] transition-colors"
              >
                <FacebookIcon size={24} />
              </motion.a>
              <motion.a 
                href="https://www.instagram.com/macifixsolutions?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" 
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -5, color: '#E4405F' }}
                className="text-[#86868b] transition-colors"
              >
                <InstagramIcon size={24} />
              </motion.a>
              <motion.a 
                href="https://www.tiktok.com/@macifixsolutions?is_from_webapp=1&sender_device=pc" 
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -5, color: '#00F2EA' }}
                className="text-[#86868b] transition-colors"
              >
                <TikTokIcon size={24} />
              </motion.a>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-12 border-t border-white/5 gap-8">
          <p className="text-[#424245] text-xs">
            © {new Date().getFullYear()} Macifix Solutions. Todos los derechos reservados.
          </p>
          <div className="flex gap-8">
            <a href="#servicios" className="text-[#86868b] text-xs hover:text-white transition-colors">Servicios</a>
            <a href="#proceso" className="text-[#86868b] text-xs hover:text-white transition-colors">Protocolo</a>
            <a href="#precios" className="text-[#86868b] text-xs hover:text-white transition-colors">Precios</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
