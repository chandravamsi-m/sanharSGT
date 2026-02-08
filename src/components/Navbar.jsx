import { useEffect } from 'react'
import { motion } from 'framer-motion'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-8 pointer-events-none">
      <div className="max-w-[1440px] mx-auto flex items-center justify-between pointer-events-auto">
        {/* Glassmorphic Logo Container */}
        <a href="#hero" className="bg-surface/40 backdrop-blur-xl border border-border px-6 py-2.5 rounded-full flex items-center justify-center shrink-0 w-[164px] h-[58px] shadow-sm hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer">
          <div className="text-2xl font-black italic tracking-tighter">
            <span className="text-heading">S</span>
            <span className="text-primary opacity-60">anhar</span>
            <span className="text-heading">SGT</span>
          </div>
        </a>

        {/* Glassmorphic Links Container */}
        <div className="hidden lg:flex bg-surface/40 backdrop-blur-xl border border-border px-8 py-2 rounded-full items-center gap-8 h-[58px] shadow-sm">
          {[
            { name: 'Solutions', href: '#solutions' },
            { name: 'Products', href: '#products' },
            { name: 'Industries', href: '#industries' },
            { name: 'About', href: '#about' },
            { name: 'Why Us', href: '#' },
            { name: 'Resources', href: '#' },
            { name: 'Careers', href: '#careers' }
          ].map((item) => (
            <a key={item.name} href={item.href} className="text-sm font-bold text-body hover:text-primary transition-colors">
              {item.name}
            </a>
          ))}
        </div>

        {/* Glassmorphic Contact Container */}
        <div className="bg-surface/40 backdrop-blur-xl border border-border px-6 py-2.5 rounded-full flex items-center justify-center shrink-0 w-[164px] h-[58px] shadow-sm">
          <button className="w-full h-10 bg-primary text-white rounded-full text-sm font-bold hover:bg-primary-hover transition-all transform active:scale-95 shadow-md shadow-primary/20">
            Contact Us
          </button>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
