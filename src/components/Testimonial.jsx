import { useRef, useEffect } from 'react'
import gsap from 'gsap'

const Testimonial = () => {
  const container = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".testimonial-content > *", {
        scrollTrigger: {
          trigger: ".testimonial-content",
          start: "top 85%",
        },
        y: 20,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1
      })
    }, container)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={container} className="py-6 md:py-8 px-6 bg-white overflow-hidden text-center">
      <div className="max-w-4xl mx-auto testimonial-content flex flex-col items-center">
        {/* Star Rating */}
        <div className="flex justify-center gap-1 mb-4 text-heading">
          {[1, 2, 3, 4, 5].map(i => (
            <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 24 24">
              <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
            </svg>
          ))}
        </div>

        {/* Quote */}
        <blockquote className="text-lg md:text-[32px] md:text-3xl leading-[1.3] font-bold text-heading mb-8 max-w-3xl">
          "A customer testimonial that highlights features and answers potential customer doubts about your product or service. Showcase testimonials from a similar demographic to your customers."
        </blockquote>

        {/* Profile */}
        <div className="flex items-center gap-4">
          {/* Avatar Icon Placeholder */}
          <div className="w-12 h-12 rounded-full bg-zinc-100 flex items-center justify-center border border-zinc-200">
            <svg className="w-6 h-6 text-zinc-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
          </div>

          <div className="flex items-center">
            <div className="text-left pr-4">
              <div className="text-sm font-bold text-heading">Name Surname</div>
              <div className="text-xs text-body font-medium">Position, Company name</div>
            </div>
            {/* Vertical Separator */}
            <div className="h-10 w-[1px] bg-zinc-200"></div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonial
