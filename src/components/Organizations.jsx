import { useRef, useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { motion } from 'framer-motion'

gsap.registerPlugin(ScrollTrigger)

const Organizations = () => {
  const scrollRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate top section
      gsap.from(".org-top-section > *", {
        scrollTrigger: {
          trigger: ".org-top-section",
          start: "top 80%",
        },
        y: 50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2
      })

      // Animate bottom section
      gsap.from(".org-bottom-section > *", {
        scrollTrigger: {
          trigger: ".org-bottom-section",
          start: "top 80%",
        },
        y: 50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2
      })
    }, scrollRef)
    return () => ctx.revert()
  }, [])

  const topIndustries = [
    {
      id: "t1",
      tagline: "Population Health",
      title: "Public Health Authorities",
      description: "Robust systems for managing population health at scale with integrated reporting and analytics."
    },
    {
      id: "t2",
      tagline: "Multi-Facility Care",
      title: "Private Hospital Networks",
      description: "Unified management for multi-facility chains, ensuring consistent care standards."
    },
    {
      id: "t3",
      tagline: "Clinical Innovation",
      title: "Medical Research",
      description: "Specialized platforms for data collection, analysis, and management of complex clinical trials and research studies."
    }
  ]

  const bottomIndustries = [
    {
      id: "b1",
      tagline: "Claims Processing",
      title: "Health Insurance Groups",
      description: "Efficiency-driven tools for claims processing, member management, and provider networks."
    },
    {
      id: "b2",
      tagline: "Diagnostic Excellence",
      title: "Laboratory & Imaging",
      description: "Integrated workflows for lab tests, imaging studies, and result delivery with precision timing."
    },
    {
      id: "b3",
      tagline: "Focused Care",
      title: "Specialty Clinics",
      description: "Tailored solutions for cardiology, oncology, and other specialized care delivery models requiring unique workflows."
    }
  ]

  const renderImagePlaceholder = () => (
    <div className="h-full w-full bg-zinc-100 flex items-center justify-center overflow-hidden">
      <div className="w-12 h-12 rounded-full bg-zinc-200/50 flex items-center justify-center text-zinc-300">
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      </div>
    </div>
  )

  const renderButton = () => (
    <div className="flex gap-2 mt-auto">
      <button className="inline-flex items-center justify-center p-0 bg-transparent border border-transparent rounded-full text-xs font-bold text-heading hover:text-primary transition-all duration-300 group w-fit">
        Button
        <svg className="w-3 h-3 ml-1.5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </div>
  )

  const renderSmallCard = (item, layout) => {
    // layout: 'text-left' (Image Right) or 'image-left' (Text Right)
    const isImageLeft = layout === 'image-left'

    return (
      <div key={item.id} className={`bg-white border border-border rounded-[20px] flex flex-col md:grid md:grid-cols-2 gap-0 overflow-hidden hover:shadow-xl hover:border-primary/20 transition-all duration-300 group h-full min-h-[400px] md:min-h-0`}>
        <div className={`h-1/2 md:h-full flex flex-col items-start gap-3 p-6 md:p-8 ${isImageLeft ? "md:order-2" : "md:order-1"}`}>
          <div className="flex-1">
            <span className="text-[10px] font-black tracking-widest text-muted uppercase mb-2 block">{item.tagline}</span>
            <h3 className="text-xl font-bold text-heading mb-2 group-hover:text-primary transition-colors leading-tight">{item.title}</h3>
            <p className="text-body text-xs leading-relaxed line-clamp-3 md:line-clamp-4">{item.description}</p>
          </div>
          {renderButton()}
        </div>
        <div className={`h-1/2 md:h-full ${isImageLeft ? "md:order-1" : "md:order-2"}`}>
          {renderImagePlaceholder()}
        </div>
      </div>
    )
  }

  const renderBigCard = (item, layout) => {
    // layout: 'text-top' (Image Bottom) or 'image-top' (Text Bottom)
    const isImageTop = layout === 'image-top'

    return (
      <div key={item.id} className={`bg-white border border-border rounded-[20px] flex flex-col ${isImageTop ? "flex-col-reverse" : "flex-col"} overflow-hidden h-full hover:shadow-xl hover:border-primary/20 transition-all duration-300 group min-h-[500px] md:min-h-0`}>
        <div className="h-1/2 flex flex-col items-start gap-4 p-6 md:p-8">
          <div className="flex-1">
            <span className="text-[10px] font-black tracking-widest text-muted uppercase mb-2 block">{item.tagline}</span>
            <h3 className="text-2xl md:text-3xl font-bold text-heading mb-3 group-hover:text-primary transition-colors leading-tight">{item.title}</h3>
            <p className="text-body text-sm leading-relaxed max-w-xl">{item.description}</p>
          </div>
          {renderButton()}
        </div>
        <div className="h-1/2 w-full">
          {renderImagePlaceholder()}
        </div>
      </div>
    )
  }

  return (
    <section id="industries" ref={scrollRef} className="pt-12 pb-12 px-8 md:px-16 bg-surface overflow-hidden">
      <div className="max-w-[1200px] mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <motion.h2
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-[30px] sm:text-[42px] md:text-[52px] leading-[1.15] font-extrabold text-heading mb-5 tracking-[-0.03em]"
          >
            Serving Complex Organizations
          </motion.h2>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-sm md:text-base leading-relaxed text-body max-w-2xl mx-auto font-medium"
          >
            Specialized digital solutions tailored to the unique workflows and enterprise scale of healthcare providers.
          </motion.p>
        </div>

        <div className="flex flex-col gap-4 md:gap-5">
          {/* Top Section: Stack Left, Big Right */}
          <div className="org-top-section grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-5">
            <div className="flex flex-col gap-4 md:gap-5 h-full">
              {topIndustries.slice(0, 2).map(item => renderSmallCard(item, 'text-left'))}
            </div>
            <div className="h-full">
              {renderBigCard(topIndustries[2], 'text-top')}
            </div>
          </div>

          {/* Bottom Section: Big Left, Stack Right */}
          <div className="org-bottom-section grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-5">
            <div className="h-full">
              {renderBigCard(bottomIndustries[2], 'image-top')}
            </div>
            <div className="flex flex-col gap-4 md:gap-5 h-full">
              {bottomIndustries.slice(0, 2).map(item => renderSmallCard(item, 'image-left'))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Organizations
