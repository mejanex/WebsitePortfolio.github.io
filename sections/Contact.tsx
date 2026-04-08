export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-px bg-linear-to-r from-transparent via-slate-200 to-transparent" />
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-blue-100/50 rounded-full blur-3xl" />
      <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-purple-100/30 rounded-full blur-3xl" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="h-px w-12 bg-blue-600" />
            <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">Contact</span>
            <div className="h-px w-12 bg-blue-600" />
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Let&apos;s work <span className="text-blue-600">together</span>
          </h2>
          
          <p className="text-lg text-slate-600">
            Ready to streamline your operations? Send me a message and 
            let&apos;s discuss how I can help your business thrive.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Contact Info - Left Side */}
          <div className="lg:col-span-2 space-y-8">
            <div className="bg-slate-50 rounded-2xl p-8 border border-slate-100">
              <h3 className="text-xl font-bold text-slate-900 mb-6">Get in touch</h3>
              
              <div className="space-y-6">
                <a 
                  href="mailto:emilio.lopez@email.com" 
                  className="flex items-start gap-4 group"
                >
                  <div className="w-12 h-12 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center shrink-0 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-slate-500 mb-1">Email</p>
                    <p className="text-slate-900 font-semibold group-hover:text-blue-600 transition-colors">emilio.lopez@email.com</p>
                  </div>
                </a>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center shrink-0">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-slate-500 mb-1">Location</p>
                    <p className="text-slate-900 font-semibold">Philippines</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center shrink-0">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-slate-500 mb-1">Availability</p>
                    <p className="text-slate-900 font-semibold">Monday - Friday, 9AM - 6PM PST</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="bg-slate-900 rounded-2xl p-8 text-white">
              <h3 className="text-lg font-bold mb-4">Connect with me</h3>
              <div className="flex gap-4">
                {['LinkedIn', 'Twitter', 'Upwork'].map((social) => (
                  <a 
                    key={social}
                    href="#"
                    className="px-4 py-2 bg-white/10 rounded-lg text-sm font-medium hover:bg-white/20 transition-colors"
                  >
                    {social}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form - Right Side */}
          <div className="lg:col-span-3">
            <form className="bg-white rounded-2xl p-8 shadow-xl shadow-slate-200/50 border border-slate-100">
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-slate-700">Name</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all placeholder:text-slate-400"
                    placeholder="John Doe"
                  />
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-slate-700">Email</label>
                  <input 
                    type="email" 
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all placeholder:text-slate-400"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div className="space-y-2 mb-6">
                <label className="text-sm font-semibold text-slate-700">Subject</label>
                <input 
                  type="text" 
                  className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all placeholder:text-slate-400"
                  placeholder="How can I help you?"
                />
              </div>

              <div className="space-y-2 mb-6">
                <label className="text-sm font-semibold text-slate-700">Message</label>
                <textarea 
                  rows={5}
                  className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none placeholder:text-slate-400"
                  placeholder="Tell me about your project and how I can assist you..."
                />
              </div>

              <button 
                type="submit"
                className="w-full md:w-auto px-8 py-4 bg-blue-600 text-white font-semibold rounded-xl shadow-lg shadow-blue-600/25 hover:shadow-blue-600/40 hover:-translate-y-0.5 hover:bg-blue-700 transition-all duration-300 flex items-center justify-center gap-2"
              >
                Send Message
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}