import { useRef } from 'react'

const Careers = () => {
  const container = useRef(null)

  const jobs = [
    {
      id: "01",
      title: "Senior Software Engineer",
      dept: "Engineering",
      location: "San Francisco, CA",
      type: "Remote",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique."
    },
    {
      id: "02",
      title: "Product Designer",
      dept: "Design",
      location: "New York, NY",
      type: "Full-time",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique."
    },
    {
      id: "03",
      title: "Data Analyst",
      dept: "Analytics",
      location: "London, UK",
      type: "Remote",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique."
    },
    {
      id: "04",
      title: "Marketing Manager",
      dept: "Marketing",
      location: "Remote",
      type: "Part-time",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique."
    },
    {
      id: "05",
      title: "Customer Success",
      dept: "Operations",
      location: "Berlin, DE",
      type: "Full-time",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique."
    },
    {
      id: "06",
      title: "QA Engineer",
      dept: "Engineering",
      location: "Toronto, CA",
      type: "Remote",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique."
    }
  ]

  return (
    <section id="careers" ref={container} className="pt-8 md:pt-12 pb-12 md:pb-16 px-6 bg-white overflow-hidden">
      <div className="max-w-[1000px] mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12 career-header">
          <h2 className="text-[30px] sm:text-[42px] md:text-[52px] leading-[1.15] font-extrabold text-heading mb-4 tracking-[-0.03em]">
            Build Systems That Matter
          </h2>
          <p className="text-sm md:text-base leading-relaxed text-body max-w-2xl mx-auto font-medium opacity-80">
            Join our team designing digital infrastructure for healthcare and enterprises worldwide
          </p>
        </div>

        {/* Grid Layout */}
        <div className="career-grid grid grid-cols-1 md:grid-cols-2 gap-4">
          {jobs.map((job) => (
            <div
              key={job.id}
              className="career-card bg-zinc-100/80 rounded-[20px] p-4 md:p-5 flex flex-col justify-between group hover:bg-zinc-100 transition-all duration-300"
            >
              <div>
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl md:text-2xl font-bold text-heading leading-tight">
                    {job.title}
                  </h3>
                  <span className="px-2.5 py-1 bg-zinc-200/50 text-heading text-[9px] font-black uppercase tracking-wider rounded-md">
                    {job.dept}
                  </span>
                </div>

                <p className="text-zinc-600 text-xs font-medium leading-relaxed mb-5">
                  {job.desc}
                </p>

                <div className="flex flex-wrap gap-5 items-center mb-8">
                  <div className="flex items-center gap-2 text-zinc-500 font-bold text-[13px]">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    {job.location}
                  </div>
                  <div className="flex items-center gap-2 text-zinc-500 font-bold text-[13px]">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {job.type}
                  </div>
                </div>
              </div>

              <button className="w-fit px-5 py-2 bg-zinc-200/80 text-heading rounded-lg font-bold text-[11px] hover:bg-zinc-200 transition-colors">
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
