const Locations = () => {
  const offices = [
    { city: "Mumbai", country: "India", loc: "Corporate Office" },
    { city: "Dubai", country: "UAE", loc: "Regional Hub" },
    { city: "Bangalore", country: "India", loc: "Tech Center" },
    { city: "Nairobi", country: "Kenya", loc: "Africa HQ" },
  ]

  return (
    <section className="py-12 px-4 bg-zinc-950 border-y border-white/5">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-display font-bold text-center mb-16 opacity-50 uppercase tracking-[0.2em] text-sm">Office Locations</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
          {offices.map((office) => (
            <div key={office.city} className="text-center group">
              <div className="mb-6 inline-block p-4 rounded-2xl bg-white/5 group-hover:bg-brand-purple transition-colors">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-display font-bold mb-1">{office.city}</h3>
              <p className="text-slate-400 text-sm font-medium mb-1">{office.country}</p>
              <p className="text-brand-purple text-xs font-bold uppercase tracking-wider">{office.loc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Locations
