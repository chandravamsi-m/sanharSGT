import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { productsContent } from '../data/productsContent'

const Platforms = () => {
  const [activeIndex, setActiveIndex] = useState(0)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768)
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  return (
    <section id="products" className="pt-8 pb-4 md:pb-8 bg-surface">
      <div className="container-custom">
        {/* Header section matching Figma 84:5949 */}
        <div className="text-center mb-8 md:mb-16 max-w-4xl mx-auto px-4">
          <motion.h2
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="text-[30px] sm:text-[42px] md:text-[52px] leading-[1.15] font-extrabold text-heading mb-5 tracking-[-0.03em]"
          >
            {productsContent.heading}
          </motion.h2>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-sm md:text-base leading-relaxed text-body max-w-2xl mx-auto"
          >
            {productsContent.subheading}
          </motion.p>
        </div>

        {/* Interactive Tabs Container - Vertical on mobile, Horizontal on desktop */}
        <div className="flex flex-col md:flex-row h-auto md:h-[520px] w-full border border-border rounded-[24px] md:rounded-[32px] overflow-hidden bg-surface-alt">
          {productsContent.items.map((item, index) => {
            const isActive = activeIndex === index

            return (
              <motion.div
                key={item.id}
                layout
                initial={false}
                animate={{
                  flex: isActive ? 3.5 : (typeof window !== 'undefined' && window.innerWidth < 768 ? 1 : 0.6),
                  backgroundColor: isActive ? 'var(--color-surface)' : 'var(--color-surface-alt)'
                }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                onClick={() => setActiveIndex(index)}
                className={`relative flex flex-col md:flex-row h-full border-b md:border-b-0 md:border-r border-border last:border-b-0 last:border-r-0 cursor-pointer overflow-hidden group`}
              >
                {/* Tab Trigger / Sidebar */}
                <div className={`shrink-0 flex items-center md:flex-col md:items-start px-6 py-3 md:px-6 md:py-6 h-auto md:h-full md:w-[90px] border-b md:border-b-0 md:border-r border-border/10 bg-surface-alt/50 relative z-20`}>
                  <div className="flex items-center gap-4 md:flex-col md:items-start md:gap-0">
                    <span className={`text-xl md:text-3xl font-bold font-display transition-colors duration-300 ${isActive ? 'text-primary' : 'text-heading/30'}`}>
                      {item.id}
                    </span>
                    <span className={`md:hidden text-lg font-bold text-heading transition-colors duration-300 ${isActive ? 'text-primary' : 'text-heading/60'}`}>
                      {item.title}
                    </span>
                  </div>

                  <div className="hidden md:block mt-auto">
                    <p className={`whitespace-nowrap -rotate-90 origin-left translate-x-4 mb-4 text-[13px] font-bold uppercase tracking-[0.25em] transition-all duration-300 ${isActive ? 'text-heading' : 'text-heading/40'}`}>
                      {item.title}
                    </p>
                  </div>
                </div>

                {/* Content Area */}
                <AnimatePresence mode="wait">
                  {isActive && (
                    <motion.div
                      key="content"
                      initial={{ opacity: 0, x: isMobile ? 0 : 20, y: isMobile ? 15 : 0 }}
                      animate={{ opacity: 1, x: 0, y: 0 }}
                      exit={{ opacity: 0, x: isMobile ? 0 : -20, y: isMobile ? -15 : 0 }}
                      transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 30,
                        mass: 0.8,
                        opacity: { duration: 0.2 }
                      }}
                      className="flex-1 p-5 md:p-8 flex flex-col items-start h-full overflow-hidden"
                    >
                      <div className="w-full">
                        <motion.h3
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.2 }}
                          className="text-2xl md:text-3xl font-extrabold text-heading mb-4 md:mb-6 tracking-[0.01em] leading-tight"
                        >
                          {item.heading}
                        </motion.h3>
                        <motion.p
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.3 }}
                          className="text-sm md:text-[15px] text-body font-medium leading-relaxed mb-8 md:mb-10 max-w-xl"
                        >
                          {item.description}
                        </motion.p>
                      </div>

                      <motion.div
                        initial={{ opacity: 0, scale: 0.98 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.4 }}
                        className="w-full h-[220px] md:h-[400px] rounded-2xl md:rounded-[32px] overflow-hidden bg-zinc-100"
                      >
                        <img
                          src={item.image}
                          alt={item.title}
                          className="w-full h-full object-cover"
                        />
                      </motion.div>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Interaction Overlay (for collapsed state hover) */}
                {!isActive && (
                  <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/2 transition-colors" />
                )}
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Platforms
