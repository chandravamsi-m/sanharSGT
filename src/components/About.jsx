import { useRef, useEffect } from 'react'
import gsap from 'gsap'

const About = () => {
    const sectionRef = useRef(null)

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(".about-left > *", {
                scrollTrigger: {
                    trigger: ".about-left",
                    start: "top 80%",
                },
                x: -50,
                opacity: 0,
                duration: 0.8,
                stagger: 0.2
            })
            gsap.from(".about-card", {
                scrollTrigger: {
                    trigger: ".about-right",
                    start: "top 80%",
                },
                x: 50,
                opacity: 0,
                duration: 0.8,
                stagger: 0.2
            })
        }, sectionRef)
        return () => ctx.revert()
    }, [])

    return (
        <section id="about" ref={sectionRef} className="py-32 px-6 bg-surface overflow-hidden">
            <div className="max-w-[1440px] mx-auto">
                <div className="flex flex-col lg:flex-row gap-24 items-start">
                    <div className="lg:w-1/2 about-left">
                        <div className="inline-flex items-center gap-3 px-5 py-2.5 bg-primary-soft border border-primary/10 rounded-full text-primary text-xs font-black tracking-widest uppercase mb-10">
                            <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                            ABOUT US
                        </div>
                        <h2 className="text-[52px] md:text-[64px] leading-tight font-extrabold mb-10 text-heading">
                            Two Decades of <br />
                            Digital Excellence
                        </h2>
                        <div className="space-y-8 text-xl text-body font-medium leading-relaxed">
                            <p>SANHAR SGT designs and delivers enterprise-grade digital infrastructure for mission-critical organizations worldwide.</p>
                            <p>Our work spans hospital information systems, enterprise resource planning, and advanced analytics that drive precision and growth.</p>
                            <p>With over 20 years of experience, we've helped 200+ clients across 12 countries modernize their digital footprint.</p>
                        </div>
                    </div>

                    <div className="lg:w-1/2 about-right grid grid-cols-1 gap-8">
                        {[
                            { title: "Global Presence", text: "Operating in 12 countries with 8 local office locations." },
                            { title: "Expert Team", text: "Healthcare IT specialists, enterprise architects and engineers." },
                            { title: "Certified & Compliant", text: "HIPAA, ISO 9001 and secure global infrastructures." }
                        ].map((item, i) => (
                            <div
                                key={i}
                                className="about-card card-premium p-10 flex gap-8 items-start"
                            >
                                <div className="w-16 h-16 bg-surface rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:bg-primary transition-colors shadow-sm">
                                    <div className="w-6 h-6 bg-surface-alt group-hover:bg-white/30 rounded-full" />
                                </div>
                                <div>
                                    <h3 className="text-2xl font-extrabold mb-3 text-heading">{item.title}</h3>
                                    <p className="text-lg text-body font-medium">{item.text}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Vision/Mission Row */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-24">
                    <div className="p-16 rounded-card bg-heading text-white relative overflow-hidden group">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 rounded-bl-[200px] transition-all group-hover:scale-110" />
                        <h3 className="uppercase tracking-widest text-xs font-black text-primary mb-6">Our Vision</h3>
                        <p className="text-2xl md:text-3xl font-bold leading-relaxed relative z-10 italic">
                            "To be the trusted foundation for mission-critical organizations globally, powering the future of healthcare."
                        </p>
                    </div>
                    <div className="p-16 rounded-card bg-primary text-white relative overflow-hidden group">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-bl-[200px] transition-all group-hover:scale-110" />
                        <h3 className="uppercase tracking-widest text-xs font-black text-white/50 mb-6">Our Mission</h3>
                        <p className="text-2xl md:text-3xl font-bold leading-relaxed relative z-10">
                            To deliver systems that evolve with the organization, ensuring scalability, security and superior performance.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About
