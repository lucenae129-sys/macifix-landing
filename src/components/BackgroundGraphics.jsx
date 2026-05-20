import { motion } from 'framer-motion'

export default function BackgroundGraphics() {
  return (
    <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden">
      {/* Morphing Liquid Orbs */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          x: [0, 50, 0],
          y: [0, 30, 0],
          rotate: [0, 90, 0],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute -top-[10%] -left-[10%] w-[60vw] h-[60vw] bg-blue-600/5 rounded-full blur-[120px]"
      />
      
      <motion.div
        animate={{
          scale: [1.2, 1, 1.2],
          x: [0, -50, 0],
          y: [0, -30, 0],
          rotate: [0, -90, 0],
        }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        className="absolute -bottom-[10%] -right-[10%] w-[50vw] h-[50vw] bg-purple-600/5 rounded-full blur-[100px]"
      />

      {/* Floating Particles (Motion Graphics Style) */}
      {[...Array(15)].map((_, i) => (
        <motion.div
          key={i}
          initial={{ 
            opacity: 0, 
            x: Math.random() * 100 + "vw", 
            y: Math.random() * 100 + "vh" 
          }}
          animate={{ 
            opacity: [0, 0.2, 0],
            y: ["-10vh", "110vh"],
            x: (Math.random() - 0.5) * 200 + "px"
          }}
          transition={{ 
            duration: Math.random() * 10 + 10, 
            repeat: Infinity, 
            delay: Math.random() * 5 
          }}
          className="absolute w-1 h-1 bg-blue-400 rounded-full blur-[1px]"
        />
      ))}

      {/* SVG Animated Lines */}
      <svg className="absolute inset-0 w-full h-full opacity-[0.03]">
        <motion.path
          d="M -100 200 Q 400 400 900 200 T 1400 300"
          stroke="white"
          strokeWidth="1"
          fill="none"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.path
          d="M -100 800 Q 500 600 1000 800 T 1500 700"
          stroke="white"
          strokeWidth="1"
          fill="none"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        />
      </svg>
    </div>
  )
}
