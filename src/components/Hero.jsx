import { useRef, useEffect, useState } from 'react'
import { motion, useScroll, useTransform, useSpring, useMotionValue } from 'framer-motion'
import { heroContent } from '../data/heroContent'

const Hero = () => {
  const heroRef = useRef(null)

  // 3D Perspective Mouse Tracking
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  // Smooth springs for cursor movement
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [15, -15]), { stiffness: 100, damping: 30 })
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-15, 15]), { stiffness: 100, damping: 30 })

  const handleMouseMove = (e) => {
    const rect = heroRef.current.getBoundingClientRect()
    const x = (e.clientX - rect.left) / rect.width - 0.5
    const y = (e.clientY - rect.top) / rect.height - 0.5
    mouseX.set(x)
    mouseY.set(y)
  }

  const handleMouseLeave = () => {
    mouseX.set(0)
    mouseY.set(0)
  }

  const MockupCard = ({ item }) => {
    const isMobile = item.type === 'mobile'
    return (
      <div className={`${isMobile ? 'w-[140px] h-[240px]' : 'w-[280px] h-[190px]'} rounded-[20px] overflow-hidden border-4 border-white shadow-xl backdrop-blur-sm shrink-0`}>
        <img src={item.src} alt="Mockup" className="w-full h-full object-cover" />
      </div>
    )
  }

  return (
    <section
      id="hero"
      ref={heroRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative min-h-[90vh] md:min-h-screen pt-32 md:pt-36 pb-4 md:pb-8 overflow-hidden bg-surface flex flex-col items-center justify-start"
      style={{ perspective: "1500px" }}
    >
      {/* Background Grid Pattern - Fading out from the center */}
      <div className="absolute inset-0 z-0 pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(var(--color-primary) 1.5px, transparent 1.5px)`,
          backgroundSize: '40px 40px',
          maskImage: 'linear-gradient(to bottom, black 30%, transparent 70%)',
          WebkitMaskImage: 'linear-gradient(to bottom, black 30%, transparent 70%)',
          opacity: 0.2
        }}
      />

      <div className="container-custom relative z-10 flex flex-col items-center text-center px-4">
        {/* Main Heading */}
        <motion.h1
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-[32px] sm:text-[48px] md:text-[60px] leading-[1.1] font-extrabold text-heading mb-6 tracking-[-0.03em] whitespace-pre-line px-2"
        >
          {heroContent.heading}
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
          className="text-base md:text-lg leading-relaxed text-body max-w-xl mx-auto mb-6 md:mb-8 px-4"
        >
          {heroContent.description}
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
          className="flex flex-col sm:flex-row items-center justify-center gap-3 md:gap-4 mb-10 md:mb-12 w-full sm:w-auto"
        >
          <button className="btn-primary w-full sm:w-auto py-4 px-8 text-sm">
            Book An Appointment
          </button>
          <button className="btn-outline w-full sm:w-auto py-4 px-8 text-sm">
            Explore Solutions
          </button>
        </motion.div>

        {/* Stats Row - Responsive Wrap */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
          className="grid grid-cols-3 gap-4 md:gap-12 py-8 border-y border-border max-w-3xl mx-auto w-full"
        >
          {heroContent.stats.map((stat, i) => (
            <div key={i} className="flex flex-col items-center">
              <div className="text-xl md:text-3xl font-bold text-primary leading-none mb-1">{stat.value}</div>
              <div className="text-[10px] md:text-[13px] font-medium text-body text-center">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Mockup Showcase with 3D Interaction */}
      <motion.div
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        className="relative mt-8 md:mt-12 lg:mt-20 w-[140vw] flex flex-col gap-4 md:gap-6 z-20 scale-90 sm:scale-95 md:scale-100 left-1/2 -translate-x-1/2"
      >
        {/* Row 1 - Left to Right */}
        <div className="flex gap-4 md:gap-6 overflow-hidden w-full">
          <motion.div
            animate={{ x: ["0%", "-25%"] }}
            transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
            className="flex gap-4 md:gap-6 shrink-0 items-center w-max"
          >
            {[...heroContent.row1, ...heroContent.row1, ...heroContent.row1, ...heroContent.row1, ...heroContent.row1, ...heroContent.row1, ...heroContent.row1, ...heroContent.row1, ...heroContent.row1, ...heroContent.row1, ...heroContent.row1, ...heroContent.row1].map((item, i) => (
              <MockupCard key={i} item={item} />
            ))}
          </motion.div>
        </div>

        {/* Row 2 - Right to Left */}
        <div className="flex gap-4 md:gap-6 overflow-hidden w-full">
          <motion.div
            animate={{ x: ["-25%", "0%"] }}
            transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
            className="flex gap-4 md:gap-6 shrink-0 items-center w-max"
          >
            {[...heroContent.row2, ...heroContent.row2, ...heroContent.row2, ...heroContent.row2, ...heroContent.row2, ...heroContent.row2, ...heroContent.row2, ...heroContent.row2, ...heroContent.row2, ...heroContent.row2, ...heroContent.row2, ...heroContent.row2].map((item, i) => (
              <MockupCard key={i} item={item} />
            ))}
          </motion.div>
        </div>
      </motion.div>

      {/* Extreme Bottom Shadow Overlay */}
      <div className="absolute inset-x-0 bottom-0 h-24 md:h-32 bg-linear-to-t from-surface to-transparent z-30" />
    </section>
  )
}

export default Hero
