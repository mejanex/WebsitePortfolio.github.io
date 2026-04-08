export default function About() {
  const skills = [
    "Email Management",
    "Calendar Scheduling", 
    "Data Entry",
    "Customer Support",
    "Google Workspace",
    "Excel",
    "Notion",
  ];

  return (
    <section id="about" className="py-24 px-6 bg-slate-50 relative overflow-hidden">
      {/* Subtle background decoration */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-linear-to-l from-blue-50/50 to-transparent" />
      
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section header with accent */}
        <div className="flex items-center gap-4 mb-8">
          <div className="h-px w-12 bg-blue-600" />
          <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">About Me</span>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left column - Main content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-slate-900 leading-tight">
              Helping businesses <span className="text-blue-600">thrive</span> through efficient operations
            </h2>
            
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              Detail-oriented and reliable Virtual Assistant with strong
              administrative and IT background. I specialize in transforming 
              chaotic workflows into streamlined processes, allowing business 
              owners to focus on growth while I handle the operational details.
            </p>

            {/* Stats row */}
            <div className="flex gap-8 mb-8">
              <div>
                <div className="text-3xl font-bold text-slate-900">5+</div>
                <div className="text-sm text-slate-500">Years Experience</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-slate-900">50+</div>
                <div className="text-sm text-slate-500">Projects Completed</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-slate-900">99%</div>
                <div className="text-sm text-slate-500">Client Satisfaction</div>
              </div>
            </div>
          </div>

          {/* Right column - Skills */}
          <div className="bg-white rounded-2xl p-8 shadow-xl shadow-slate-200/50 border border-slate-100">
            <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
              <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              Core Skills
            </h3>
            
            <div className="flex flex-wrap gap-3">
              {skills.map((skill) => (
                <span 
                  key={skill} 
                  className="px-4 py-2.5 bg-blue-50 text-blue-700 rounded-xl text-sm font-medium border border-blue-100 hover:bg-blue-100 hover:scale-105 transition-all duration-200 cursor-default"
                >
                  {skill}
                </span>
              ))}
            </div>

            {/* Additional info */}
            <div className="mt-8 pt-6 border-t border-slate-100">
              <p className="text-sm text-slate-500 italic">
                Proficient in modern productivity tools and committed to 
                delivering high-quality work with quick turnaround times.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}