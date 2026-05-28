const Footer = () => {
  return (
    <footer className="pt-4 pb-4 px-2 md:px-6 bg-white overflow-hidden">
      <div className="mx-auto w-full max-w-[1200px]">
        {/* Desktop Layout (xl and above) */}
        <div className="hidden xl:block">
          {/* Navigation Row */}
          <div className="w-full flex xl:flex-row xl:justify-between mb-4">
            <div className="flex gap-x-8 text-zinc-500 font-medium text-sm whitespace-nowrap">
              <a href="#solutions" className="hover:text-heading transition-colors">Solutions</a>
              <a href="#products" className="hover:text-heading transition-colors">Products</a>
              <a href="#industries" className="hover:text-heading transition-colors">Industries</a>
              <a href="#about" className="hover:text-heading transition-colors">About</a>
              <a href="#" className="hover:text-heading transition-colors">Why Us</a>
              <a href="#" className="hover:text-heading transition-colors">Resources</a>
              <a href="#careers" className="hover:text-heading transition-colors">Careers</a>
            </div>
            <div className="flex gap-6 text-black font-semibold text-sm">
              <a href="#" className="underline underline-offset-4 decoration-1 hover:text-zinc-600 transition-colors">Privacy Policy</a>
              <a href="#" className="underline underline-offset-4 decoration-1 hover:text-zinc-600 transition-colors">Terms of Service</a>
              <a href="#" className="underline underline-offset-4 decoration-1 hover:text-zinc-600 transition-colors">Cookies Settings</a>
            </div>
          </div>

          {/* Branding Row */}
          <div className="relative flex justify-center w-full overflow-visible">
            <h1
              className="font-bold italic select-none text-center pointer-events-none bg-gradient-to-r from-[#A09DBC] via-[#DBD7EE] to-[#A09DBC] bg-clip-text text-transparent overflow-visible whitespace-nowrap"
              style={{
                fontFamily: 'Calibri, sans-serif',
                fontSize: '282.77px',
                lineHeight: '100%',
                letterSpacing: '0%',
                paddingRight: '0.05em'
              }}
            >
              SanharSGT
            </h1>
          </div>
        </div>

        {/* Sandwich Layout (below xl) */}
        <div className="xl:hidden w-full grid grid-cols-[min-content_1fr_min-content] items-center gap-2 md:gap-4">
          {/* Left Nav Stack */}
          <div className="flex flex-col items-start gap-y-0 text-zinc-500 font-medium text-[9px] sm:text-[11px] md:text-xs whitespace-nowrap">
            <a href="#solutions" className="hover:text-heading transition-colors leading-tight">Solutions</a>
            <a href="#products" className="hover:text-heading transition-colors leading-tight">Products</a>
            <a href="#industries" className="hover:text-heading transition-colors leading-tight">Industries</a>
            <a href="#about" className="hover:text-heading transition-colors leading-tight">About</a>
            <a href="#" className="hover:text-heading transition-colors leading-tight">Why Us</a>
            <a href="#" className="hover:text-heading transition-colors leading-tight">Resources</a>
            <a href="#careers" className="hover:text-heading transition-colors leading-tight">Careers</a>
          </div>

          {/* Center Brand */}
          <div className="flex justify-center items-center overflow-visible px-2 min-w-0">
            <h1
              className="font-bold italic select-none text-center pointer-events-none bg-gradient-to-r from-[#A09DBC] via-[#DBD7EE] to-[#A09DBC] bg-clip-text text-transparent overflow-visible whitespace-nowrap"
              style={{
                fontFamily: 'Calibri, sans-serif',
                fontSize: 'clamp(40px, 16vw, 220px)',
                lineHeight: '100%',
                letterSpacing: '0%',
                paddingRight: '0.05em'
              }}
            >
              SanharSGT
            </h1>
          </div>

          {/* Right Nav Stack */}
          <div className="flex flex-col items-end gap-y-2 text-black font-semibold text-[9px] sm:text-[11px] md:text-xs text-right whitespace-nowrap">
            <a href="#" className="underline underline-offset-4 decoration-1 hover:text-zinc-600 transition-colors leading-tight">Privacy Policy</a>
            <a href="#" className="underline underline-offset-4 decoration-1 hover:text-zinc-600 transition-colors leading-tight">Terms of Service</a>
            <a href="#" className="underline underline-offset-4 decoration-1 hover:text-zinc-600 transition-colors leading-tight">Cookies Settings</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
