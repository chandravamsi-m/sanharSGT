import { useRef, useEffect } from 'react'
import gsap from 'gsap'

const Organizations = () => {
  const scrollRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".org-card", {
        scrollTrigger: {
          trigger: ".org-grid",
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

  const items = [
    { title: "Public Health Authorities", text: "Robust systems for managing population health at scale with integrated reporting.", size: "col-span-1 md:col-span-2" },
    { title: "Private Hospital Chains", text: "Unified management for multi-facility chains, ensuring consistent care.", size: "col-span-1" },
    { title: "Medical Research", text: "Specialized platforms for data collection and complex clinical trials.", size: "col-span-1" },
    { title: "Health Insurance Groups", text: "Efficiency-driven tools for claims processing and member management.", size: "col-span-1 md:col-span-2" },
  ]

  return (
    <section id="industries" ref={scrollRef} className="py-12 px-6 bg-white overflow-hidden">
      <div className="max-w-[1440px] mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-[30px] sm:text-[42px] md:text-[52px] leading-[1.15] font-extrabold text-heading mb-5 tracking-[-0.03em]">Serving Complex Organizations</h2>
          <p className="text-sm md:text-base leading-relaxed text-body max-w-2xl mx-auto font-medium">
            Specialized digital solutions tailored to the unique workflows and enterprise scale of healthcare providers.
          </p>
        </div>

        <div className="org-grid grid grid-cols-1 md:grid-cols-3 gap-8">
          {items.map((item, i) => (
            <div
              key={i}
              className={`org-card ${item.size} bg-slate-50 p-12 rounded-[50px] border border-slate-100 flex flex-col justify-between group hover:border-brand-purple transition-all shadow-sm hover:shadow-2xl relative overflow-hidden`}
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-brand-purple/5 rounded-bl-[100px] group-hover:bg-brand-purple transition-all duration-500 group-hover:w-full group-hover:h-full group-hover:rounded-none group-hover:opacity-0 -z-0" />
              <div className="relative z-10 flex-col flex h-full justify-between">
                <div>
                  <span className="text-xs font-black tracking-widest text-slate-400 uppercase mb-8 block">INDUSTRY SECTOR</span>
                  <h3 className="text-3xl md:text-3xl font-extrabold mb-6 text-slate-900 group-hover:text-brand-purple transition-colors">{item.title}</h3>
                  <p className="text-xl text-slate-500 font-medium">{item.text}</p>
                </div>
                <div className="mt-12 flex items-center justify-between">
                  <button className="text-brand-purple font-black uppercase text-sm tracking-widest flex items-center gap-2 group-hover:gap-4 transition-all">
                    VIEW CASE STUDY <span>→</span>
                  </button>
                  <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center border border-slate-200 group-hover:border-brand-purple transition-colors">
                    <div className="w-2 h-2 bg-slate-300 group-hover:bg-brand-purple rounded-full" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Organizations
