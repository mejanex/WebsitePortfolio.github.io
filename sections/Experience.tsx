export default function Experience() {
  const experiences = [
    {
      title: "Customer Support & Admin Assistant",
      company: "SSS (Social Security System)",
      period: "2022 - Present",
      description: "Managed high-volume customer inquiries, processed claims, and maintained accurate records. Streamlined administrative workflows resulting in 30% faster response times.",
      skills: ["Customer Relations", "Data Management", "Process Optimization"],
    },
    {
      title: "Customer Service Assistant",
      company: "Café & Bistro",
      period: "2020 - 2022",
      description: "Delivered exceptional customer service in fast-paced environment. Handled orders, resolved complaints, and trained new staff on service standards.",
      skills: ["Communication", "Problem Solving", "Team Training"],
    },
    {
      title: "Data Entry Assistant",
      company: "Auditing Firm",
      period: "2019 - 2020",
      description: "Processed financial documents with 99.8% accuracy. Organized digital filing systems and supported audit preparation for multiple clients.",
      skills: ["Data Entry", "Excel", "Attention to Detail"],
    },
    {
      title: "IT Support Assistant",
      company: "Tech Solutions Inc.",
      period: "2018 - 2019",
      description: "Provided technical support to 50+ employees. Troubleshot hardware/software issues and maintained inventory of IT equipment.",
      skills: ["Technical Support", "Hardware Troubleshooting", "Documentation"],
    },
  ];

  return (
    <section id="experience" className="py-24 px-6 bg-slate-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-px bg-linear-to-r from-transparent via-slate-200 to-transparent" />
      <div className="absolute top-40 right-0 w-96 h-96 bg-blue-100/30 rounded-full blur-3xl" />

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Section header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="h-px w-12 bg-blue-600" />
            <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">Experience</span>
            <div className="h-px w-12 bg-blue-600" />
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Professional <span className="text-blue-600">journey</span>
          </h2>
          
          <p className="text-lg text-slate-600">
            A track record of delivering excellence across administrative, 
            technical, and customer-facing roles.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-linear-to-b from-blue-200 via-blue-300 to-blue-200 md:-translate-x-1/2" />

          {experiences.map((exp, index) => (
            <div 
              key={index} 
              className={`relative flex items-start gap-8 mb-12 last:mb-0 ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}
            >
              {/* Timeline dot */}
              <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-blue-600 rounded-full border-4 border-white shadow-lg md:-translate-x-1/2 z-10 mt-2" />

              {/* Content card */}
              <div className={`ml-12 md:ml-0 md:w-[calc(50%-2rem)] ${
                index % 2 === 0 ? 'md:pr-8 md:text-right' : 'md:pl-8'
              }`}>
                <div className="group bg-white rounded-2xl p-6 shadow-lg shadow-slate-200/50 border border-slate-100 hover:shadow-xl hover:shadow-blue-900/5 hover:-translate-y-1 transition-all duration-300">
                  {/* Period badge */}
                  <span className={`inline-block px-3 py-1 bg-blue-50 text-blue-700 text-xs font-semibold rounded-full mb-3 ${
                    index % 2 === 0 ? 'md:ml-auto' : ''
                  }`}>
                    {exp.period}
                  </span>

                  {/* Title & Company */}
                  <h3 className="text-xl font-bold text-slate-900 mb-1 group-hover:text-blue-600 transition-colors">
                    {exp.title}
                  </h3>
                  <p className="text-blue-600 font-medium mb-3">{exp.company}</p>

                  {/* Description */}
                  <p className="text-slate-600 text-sm leading-relaxed mb-4">
                    {exp.description}
                  </p>

                  {/* Skills */}
                  <div className={`flex flex-wrap gap-2 ${index % 2 === 0 ? 'md:justify-end' : ''}`}>
                    {exp.skills.map((skill) => (
                      <span 
                        key={skill} 
                        className="px-2.5 py-1 bg-slate-100 text-slate-600 text-xs rounded-lg font-medium"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Spacer for alternating layout */}
              <div className="hidden md:block md:w-[calc(50%-2rem)]" />
            </div>
          ))}
        </div>

        {/* Bottom stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { value: "1+", label: "Years Experience" },
            { value: "2", label: "Industries" },
            { value: "100%", label: "Commitment" },
            { value: "∞", label: "Learning" },
          ].map((stat) => (
            <div key={stat.label} className="text-center p-6 bg-white rounded-2xl border border-slate-100 shadow-sm">
              <div className="text-3xl font-bold text-blue-600 mb-1">{stat.value}</div>
              <div className="text-sm text-slate-500">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
