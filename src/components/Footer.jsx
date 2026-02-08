const Footer = () => {
  return (
    <footer className="pt-4 pb-4 px-2 md:px-6 bg-white overflow-hidden">
      <div className="mx-auto w-full md:w-fit max-w-full">
        {/* Navigation Row */}
        <div className="w-full flex flex-col items-center gap-6 mb-8 md:flex-row md:justify-between md:mb-4">
          <div className="flex flex-nowrap justify-center gap-x-3 md:gap-x-8 text-zinc-500 font-medium text-[9px] sm:text-[11px] md:text-sm whitespace-nowrap">
            <a href="#solutions" className="hover:text-heading transition-colors">Solutions</a>
            <a href="#products" className="hover:text-heading transition-colors">Products</a>
            <a href="#industries" className="hover:text-heading transition-colors">Industries</a>
            <a href="#about" className="hover:text-heading transition-colors">About</a>
            <a href="#" className="hover:text-heading transition-colors">Why Us</a>
            <a href="#" className="hover:text-heading transition-colors">Resources</a>
            <a href="#careers" className="hover:text-heading transition-colors">Careers</a>
          </div>
          <div className="flex justify-center gap-6 text-black font-semibold text-[11px] md:text-sm">
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
              fontSize: 'clamp(40px, 20vw, 282.77px)',
              lineHeight: '100%',
              letterSpacing: '0%',
              paddingRight: '0.05em'
            }}
          >
            SanharSGT
          </h1>
        </div>
      </div>
    </footer>
  )
}

export default Footer
