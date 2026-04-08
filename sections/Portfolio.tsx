import Image from "next/image";

export default function Portfolio() {
  const projects = [
    {
      title: "Tourism Management System",
      description: "Comprehensive system for managing tourism data, bookings, and operational workflows. Streamlined processes for 50+ local businesses.",
      image: "/images/turismo_project.png",
      tags: ["Data Management", "Workflow Optimization", "Client Training"],
      link: "#",
    },
    {
      title: "Social Media Scheduler",
      description: "Designed and managed an automated Social Media Content Scheduling and Tracking system in Asana, streamlining content approvals, scheduled publishing, and post-performance monitoring.",
      image: "/images/social_media.png",
      tags: ["Social Media", "Automation", "Analytics"],
      link: "#",
    },
    {
      title: "Notion Client Dashboard",
      description: "Custom dashboard system for tracking 30+ client projects. Reduced reporting time by 60% with automated status updates.",
      image: "/images/goal_planner.webp",
      tags: ["Notion", "Project Management", "Dashboard Design"],
      link: "#",
    },
  ];

  return (
    <section id="portfolio" className="py-24 px-6 bg-slate-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-px bg-linear-to-r from-transparent via-slate-200 to-transparent" />
      <div className="absolute top-20 right-0 w-72 h-72 bg-blue-100/40 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-0 w-96 h-96 bg-purple-100/30 rounded-full blur-3xl" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="h-px w-12 bg-blue-600" />
            <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">Portfolio</span>
            <div className="h-px w-12 bg-blue-600" />
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Featured <span className="text-blue-600">projects</span>
          </h2>
          
          <p className="text-lg text-slate-600">
            Real-world solutions that demonstrate efficiency, organization, 
            and measurable results for my clients.
          </p>
        </div>

        {/* Projects grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <a 
              key={project.title}
              href={project.link}
              className="group block bg-white rounded-2xl overflow-hidden shadow-lg shadow-slate-200/50 border border-slate-100 hover:shadow-xl hover:shadow-blue-900/5 hover:-translate-y-2 transition-all duration-300"
            >
              {/* Image container with Next.js Image */}
              <div className="relative h-48 overflow-hidden">
                <Image 
                  src={project.image} 
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-linear-to-t from-slate-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* View indicator */}
                <div className="absolute bottom-4 right-4 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg translate-y-12 group-hover:translate-y-0 transition-transform duration-300">
                  <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-3">
                  {project.tags.map((tag) => (
                    <span 
                      key={tag} 
                      className="px-2.5 py-1 bg-blue-50 text-blue-700 text-xs font-medium rounded-lg"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-slate-600 text-sm leading-relaxed mb-4">
                  {project.description}
                </p>

                {/* Link indicator */}
                <div className="flex items-center text-blue-600 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  View Project
                  <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* View all CTA */}
        <div className="mt-16 text-center">
          <p className="text-slate-600 mb-6">Interested in seeing more of my work?</p>
          <a 
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-slate-900 text-white rounded-xl font-semibold hover:bg-blue-600 hover:shadow-lg hover:shadow-blue-600/25 hover:-translate-y-0.5 transition-all duration-300"
          >
            Let&apos;s Discuss Your Project
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}