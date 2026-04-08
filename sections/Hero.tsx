export default function Hero() {
  return (
    <section 
      id="home" 
      className="min-h-screen flex items-center justify-center px-6 relative overflow-hidden bg-linear-to-br from-slate-50 via-white to-blue-50"
    >
      {/* Decorative background elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200/30 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-200/20 rounded-full blur-3xl animate-pulse delay-1000" />
      
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.03)_1px,transparent_1px)] bg-size-4rem_4rem mask-[radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]" />

      <div className="text-center max-w-3xl relative z-10">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100/80 text-blue-700 text-sm font-medium mb-6 backdrop-blur-sm border border-blue-200/50">
          <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
          Available for work
        </div>

        {/* Main heading with gradient text */}
        <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
          <span className="bg-linear-to-r from-slate-900 via-blue-900 to-slate-900 bg-clip-text text-transparent">
            Emilio Carlos Lopez
          </span>
        </h1>

        {/* Role with accent */}
        <div className="flex items-center justify-center gap-3 mb-6">
          <div className="h-px w-12 bg-blue-400/50" />
          <p className="text-2xl md:text-3xl font-semibold text-blue-600">
            Virtual Assistant
          </p>
          <div className="h-px w-12 bg-blue-400/50" />
        </div>

        {/* Description */}
        <p className="text-lg md:text-xl text-slate-600 mb-10 max-w-xl mx-auto leading-relaxed">
          Detail-oriented Virtual Assistant helping businesses manage tasks,
          emails, and operations efficiently. Transforming chaos into organized success.
        </p>

        {/* CTA Buttons with enhanced styling */}
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button className="group relative px-8 py-4 bg-blue-600 text-white rounded-2xl font-semibold shadow-lg shadow-blue-600/25 hover:shadow-blue-600/40 hover:-translate-y-0.5 transition-all duration-300 overflow-hidden">
            <div className="absolute inset-0 bg-linear-to-r from-blue-600 to-blue-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <span className="relative flex items-center justify-center gap-2">
              Hire Me
              <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </span>
          </button>
          
          <button className="group px-8 py-4 bg-white/80 backdrop-blur-sm text-slate-700 border-2 border-slate-200 rounded-2xl font-semibold hover:border-blue-300 hover:bg-blue-50/50 hover:-translate-y-0.5 transition-all duration-300">
            <span className="flex items-center justify-center gap-2">
              View Portfolio
              <svg className="w-4 h-4 text-slate-400 group-hover:text-blue-600 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
              </svg>
            </span>
          </button>
        </div>

        {/* Social proof or stats */}
        <div className="mt-16 pt-8 border-t border-slate-200/60">
          <div className="flex justify-center gap-8 md:gap-16 text-sm text-slate-500">
            <div className="flex flex-col items-center">
              <span className="text-2xl font-bold text-slate-800">20+</span>
              <span>Clients Helped</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-2xl font-bold text-slate-800">1+</span>
              <span>Years Experience</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-2xl font-bold text-slate-800">50%</span>
              <span>Satisfaction</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-slate-300 flex justify-center pt-2">
          <div className="w-1 h-2 bg-slate-400 rounded-full" />
        </div>
      </div>
    </section>
  );
}
