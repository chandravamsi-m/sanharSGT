import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const dropdownRef = useRef(null)
  const navContainerRef = useRef(null)

  const navLinks = [
    { name: 'Solutions', href: '#solutions' },
    { name: 'Products', href: '#products' },
    { name: 'Industries', href: '#industries' },
    { name: 'About', href: '#about' },
    { name: 'Why Us', href: '#' },
    { name: 'Resources', href: '#' },
    { name: 'Careers', href: '#careers' }
  ]

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      // Check if click is outside dropdown container
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target) &&
        navContainerRef.current &&
        !navContainerRef.current.contains(event.target)
      ) {
        // We only want to close if the click isn't also on the toggle button
        // but since the toggle is inside the same parent as the nav,
        // we can check if it's on the toggle.
        // Actually, easiest is just if it's not in dropdownRef and it's not the toggle.
        setIsOpen(false)
      }
    }

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside)
    }
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [isOpen])

  // Remove scroll lock logic since it's a dropdown

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-4 md:px-6 py-6 md:py-8 pointer-events-none">
      <div className="max-w-[1440px] mx-auto flex items-center justify-between pointer-events-auto">
        {/* Glassmorphic Logo Container */}
        <div
          ref={navContainerRef}
          className="bg-surface/40 backdrop-blur-xl border border-border px-4 md:px-6 py-2.5 rounded-full flex items-center justify-between shrink-0 w-full lg:w-[164px] h-[58px] shadow-sm relative z-50"
        >
          <a href="#hero" className="flex items-center transition-all cursor-pointer">
            <div className="text-xl md:text-2xl font-black italic tracking-tighter">
              <span className="text-heading">S</span>
              <span className="text-primary opacity-60">anhar</span>
              <span className="text-heading">SGT</span>
            </div>
          </a>

          {/* Hamburger Menu Toggle (Mobile/Tablet Only) */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden flex flex-col gap-1.5 p-2 transition-all active:scale-90"
            aria-label="Toggle Menu"
          >
            <motion.span
              animate={{ rotate: isOpen ? 45 : 0, y: isOpen ? 8 : 0 }}
              className="w-6 h-0.5 bg-heading rounded-full"
            />
            <motion.span
              animate={{ opacity: isOpen ? 0 : 1 }}
              className="w-6 h-0.5 bg-heading rounded-full"
            />
            <motion.span
              animate={{ rotate: isOpen ? -45 : 0, y: isOpen ? -8 : 0 }}
              className="w-6 h-0.5 bg-heading rounded-full"
            />
          </button>
        </div>

        {/* Desktop Links Container */}
        <div className="hidden lg:flex bg-surface/40 backdrop-blur-xl border border-border px-8 py-2 rounded-full items-center gap-8 h-[58px] shadow-sm transition-all duration-300">
          {navLinks.map((item) => (
            <a key={item.name} href={item.href} className="text-sm font-bold text-body hover:text-primary transition-colors">
              {item.name}
            </a>
          ))}
        </div>

        {/* Desktop Contact Button */}
        <div className="hidden lg:block shrink-0 w-[164px] h-[58px]">
          <button className="w-full h-full bg-primary text-white border border-[#09090b]/20 rounded-full text-base font-bold hover:bg-primary-hover hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer shadow-lg shadow-primary/20">
            Contact Us
          </button>
        </div>
      </div>

      {/* Full-Width Mobile Top Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            ref={dropdownRef}
            initial={{ y: '-100%', opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: '-100%', opacity: 0 }}
            transition={{ type: "spring", damping: 30, stiffness: 300, mass: 0.8 }}
            className="absolute top-0 left-0 right-0 w-full bg-white/95 backdrop-blur-3xl border-b border-border shadow-2xl rounded-b-[40px] pointer-events-auto z-40 lg:hidden flex flex-col p-6 pt-28 pb-10 overflow-hidden"
          >
            <div className="flex flex-col items-center gap-1 w-full max-w-[400px] mx-auto">
              {navLinks.map((item, i) => (
                <motion.a
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.03 + 0.1 }}
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="text-lg font-bold text-heading hover:text-primary transition-all px-4 py-2 w-full text-center"
                >
                  {item.name}
                </motion.a>
              ))}
              <div className="w-full flex justify-center mt-6">
                <motion.button
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: navLinks.length * 0.03 + 0.1 }}
                  className="px-10 py-3 bg-primary text-white border border-white/10 rounded-full text-base font-bold shadow-lg shadow-primary/20 active:scale-[0.98] transition-all w-fit"
                >
                  Contact Us
                </motion.button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}

export default Navbar
