import { motion } from 'framer-motion'
import { ArrowRight, Clock, User, Tag } from 'lucide-react'

const WA = '527331066757'
const wa = (msg) => `https://wa.me/${WA}?text=${encodeURIComponent(msg)}`

const posts = [
  {
    title: "¡Auxilio! Mi celular cayó al agua: Pasos Críticos",
    excerpt: "Olvida el mito del arroz. Te enseñamos los pasos de ingeniería reales para salvar tu dispositivo de la corrosión inmediata.",
    image: "/blog-water.png",
    date: "13 May, 2026",
    author: "Ing. Macifix",
    category: "Emergencia",
    glow: "glow-blue",
    link: wa("Hola Macifix 📱 Leí su artículo sobre qué hacer cuando un celular cae al agua. ¿Tienen más información o consejos sobre este tema?")
  },
  {
    title: "Mitos y Realidades sobre la Salud de tu Batería",
    excerpt: "¿Cargar al 100% o mantenerlo entre 20% y 80%? Descubre la ciencia detrás de las baterías de litio modernas.",
    image: "/blog-battery.png",
    date: "12 May, 2026",
    author: "Ing. Macifix",
    category: "Cuidado",
    glow: "glow-purple",
    link: wa("Hola Macifix 🔋 Leí su artículo sobre mitos y cuidado de baterías de litio. ¿Tienen más tips o información sobre el tema?")
  },
  {
    title: "Seguridad 2026: Por qué instalar CCTV en tu Negocio",
    excerpt: "La videovigilancia no es solo seguridad, es control total desde tu celular. Analizamos los beneficios para comercios en Iguala.",
    image: "/blog-cctv.png",
    date: "10 May, 2026",
    author: "CCTV Expert",
    category: "Seguridad",
    glow: "glow-green",
    link: wa("Hola Macifix 📷 Leí su artículo sobre seguridad CCTV para negocios en Iguala. ¿Tienen más información sobre videovigilancia?")
  }
]

export default function Blog() {
  return (
    <section id="blog" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-32 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-hero leading-tight mb-8">Blog <br /><span className="text-[#86868b]">tecnológico.</span></h2>
            <p className="text-sub max-w-xl">
              Información relevante y consejos de ingeniería para proteger tu inversión.
            </p>
          </motion.div>
          <motion.a
            href={wa("Hola Macifix 📚 Quisiera recibir más artículos y tips tecnológicos de su blog. ¿Me pueden compartir más contenido?")}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-[#0071e3] font-bold flex items-center gap-2 hover:gap-4 transition-all pb-1 border-b border-[#0071e3]/20"
          >
            Explorar todo el blog <ArrowRight size={20} />
          </motion.a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {posts.map((post, index) => (
            <motion.article 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`liquid-card p-0 overflow-hidden group ${post.glow}`}
            >
              <div className="aspect-[16/10] overflow-hidden relative bg-black">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 opacity-90"
                />
                {/* Dark gradient overlay for premium look */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20" />
                <div className="absolute top-6 left-6">
                  <span className="px-4 py-1.5 rounded-full bg-black/60 backdrop-blur-md border border-white/10 text-[10px] font-bold text-white uppercase tracking-widest">
                    {post.category}
                  </span>
                </div>
              </div>
              
              <div className="p-10">
                <div className="flex items-center gap-6 text-[10px] font-bold text-[#86868b] uppercase tracking-widest mb-6">
                  <span className="flex items-center gap-2"><Clock size={14} /> {post.date}</span>
                  <span className="flex items-center gap-2"><User size={14} /> {post.author}</span>
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-6 leading-tight tracking-tight group-hover:text-blue-400 transition-colors">
                  {post.title}
                </h3>
                
                <p className="text-[#86868b] text-base mb-10 line-clamp-2 font-light leading-relaxed">
                  {post.excerpt}
                </p>
                
                <a
                  href={post.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white font-bold text-xs flex items-center gap-3 group-hover:gap-5 transition-all hover:text-[#0071e3]"
                >
                  Leer artículo <ArrowRight size={18} className="text-[#0071e3]" />
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
