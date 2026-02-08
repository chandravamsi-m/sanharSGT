import { useRef, useEffect } from 'react'
import gsap from 'gsap'

const Careers = () => {
  const container = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".career-title", {
        scrollTrigger: {
          trigger: ".career-title",
          start: "top 80%",
        },
        y: 30,
        opacity: 0,
        duration: 0.8
      })
      gsap.from(".career-card", {
        scrollTrigger: {
          trigger: ".career-grid",
          start: "top 75%",
        },
        scale: 0.95,
        opacity: 0,
        duration: 0.6,
        stagger: 0.1
      })
    }, container)
    return () => ctx.revert()
  }, [])

  const jobs = [
    { title: "Senior Backend Engineer", dept: "Engineering", loc: "Mumbai / Remote", type: "Full-time" },
    { title: "Healthcare Data Analyst", dept: "Data Science", loc: "Bangalore", type: "Full-time" },
    { title: "UI/UX Designer", dept: "Design", loc: "Remote", type: "Contract" },
    { title: "Product Manager", dept: "Product", loc: "Mumbai", type: "Full-time" },
  ]

  return (
    <section id="careers" ref={container} className="py-32 px-6 bg-surface overflow-hidden">
      <div className="max-w-[1440px] mx-auto">
        <div className="text-center mb-20 career-title">
          <h2 className="text-[44px] md:text-[64px] font-extrabold mb-6 leading-tight text-heading">Build Systems<br /><span className="text-primary">That Matter</span></h2>
          <p className="text-xl text-body max-w-2xl mx-auto font-medium">
            Join our team designing digital infrastructure for healthcare and
            enterprise growth.
          </p>
        </div>

        <div className="career-grid grid grid-cols-1 md:grid-cols-2 gap-8">
          {jobs.map((job, i) => (
            <div
              key={i}
              className="career-card card-premium p-12 flex flex-col justify-between"
            >
              <div>
                <div className="flex justify-between items-start mb-8">
                  <h3 className="text-3xl font-extrabold max-w-[70%] text-heading group-hover:text-primary transition-colors">{job.title}</h3>
                  <span className="px-5 py-1.5 bg-surface rounded-full text-[10px] font-black uppercase tracking-widest text-muted border border-border shadow-sm">{job.dept}</span>
                </div>
                <div className="flex flex-wrap gap-8 items-center text-body font-bold text-xs uppercase tracking-widest mb-16">
                  <div className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                    {job.loc}
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                    {job.type}
                  </div>
                </div>
              </div>
              <button className="btn-primary w-fit px-10">
                Apply Now
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Careers
