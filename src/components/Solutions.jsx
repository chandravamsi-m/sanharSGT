import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import CircularGallery from './CircularGallery'
import { solutionsContent } from '../data/solutionsContent'

const Solutions = () => {
  const [scrollX, setScrollX] = useState(0)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  return (
    <section className="pt-4 md:pt-4 pb-16 md:pb-20 bg-surface relative overflow-hidden flex flex-col items-center">
      <div className="container-custom relative z-10 text-center mb-6 px-4">
        <motion.h2
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-extrabold text-heading mb-4 max-w-2xl mx-auto leading-tight"
        >
          {solutionsContent.heading}
        </motion.h2>
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-base md:text-lg text-body max-w-2xl mx-auto px-4"
        >
          {solutionsContent.subheading}
        </motion.p>
      </div>

      <div className="w-full h-[300px] sm:h-[440px] md:h-[540px] relative -mt-16">
        <CircularGallery
          items={solutionsContent.items}
          bend={isMobile ? 0 : 3}
          textColor="#3F3F46"
          borderRadius={0.05}
          onScroll={(val) => setScrollX(val)}
        />
      </div>

      <div className="w-full mt-0 md:mt-4 relative">
        {/* Side Shades using Mask Image for a more premium look */}
        <div
          className="absolute inset-0 z-10 pointer-events-none"
          style={{
            maskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)',
            WebkitMaskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)'
          }}
        />

        <div className="overflow-hidden py-6 md:py-10">
          <motion.div
            style={{
              x: ((-scrollX * 30) % 600) - 300 // Adjusted for mobile speed and wrapping
            }}
            className="flex justify-center items-center gap-10 md:gap-24 opacity-30 grayscale hover:grayscale-0 transition-all duration-500 whitespace-nowrap"
          >
            {[...solutionsContent.logos, ...solutionsContent.logos, ...solutionsContent.logos, ...solutionsContent.logos].map((logo, i) => (
              <div key={i} className="h-6 md:h-12 flex items-center shrink-0">
                <span className="text-lg md:text-2xl font-bold text-heading tracking-tight">{logo.name}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Solutions
