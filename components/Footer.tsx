export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Contact', href: '#contact' },
  ];

  const socialLinks = [
    {
      name: 'LinkedIn',
      href: '#',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
      ),
    },
    {
      name: 'Twitter',
      href: '#',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
        </svg>
      ),
    },
    {
      name: 'Upwork',
      href: '#',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M18.561 13.158c-1.102 0-2.135-.467-3.074-1.227l.228-1.076.008-.042c.207-1.143.849-3.06 2.839-3.06 1.492 0 2.703 1.212 2.703 2.703-.001 1.489-1.212 2.702-2.704 2.702zm0-6.963c-2.659 0-4.549 1.767-5.231 4.2l-.027.112c-.078.334-.149.669-.212 1.006l-.633 3.033c-.326 1.564-.694 3.337-1.694 4.402-.3-.826-1.131-3.147-1.684-4.817l-.583-1.836c-.144-.458-.283-.92-.42-1.371l-.182-.592c-.043-.14-.084-.279-.127-.416C6.458 6.97 4.954 6.374 3.469 6.374c-.248 0-.502.022-.754.066C1.376 6.654.224 8.246.042 10.253c-.03.332.214.624.549.654.334.03.624-.214.654-.549.129-1.395.882-2.428 1.933-2.623.165-.03.332-.044.497-.044 1.105 0 2.139.631 2.913 1.78.057.087.112.176.164.265l.474 1.133c.534 1.275 1.129 2.693 1.541 3.694.353.861.743 1.771 1.172 2.707.327.746.683 1.486 1.057 2.199.137.262.464.382.74.271.194-.077.328-.255.356-.464.101-.759.153-1.531.153-2.295 0-.596-.03-1.196-.088-1.784-.043-.421-.1-.845-.168-1.261l-.066-.397c.483-.076.978-.116 1.479-.116 2.08 0 4.02.775 5.464 2.182.164.16.384.247.61.247.225 0 .445-.087.609-.247 1.444-1.407 3.384-2.182 5.464-2.182 2.971 0 5.389 2.418 5.389 5.389s-2.418 5.389-5.389 5.389c-2.08 0-4.02-.775-5.464-2.182-.164-.16-.384-.247-.609-.247-.226 0-.446.087-.61.247-1.444 1.407-3.384 2.182-5.464 2.182-2.971 0-5.389-2.418-5.389-5.389 0-.334.027-.666.08-.992.058-.369-.196-.714-.566-.772-.37-.058-.714.196-.772.566-.067.422-.101.854-.101 1.288 0 3.7 3.01 6.71 6.71 6.71 2.174 0 4.202-.862 5.711-2.335 1.509 1.473 3.537 2.335 5.711 2.335 3.7 0 6.71-3.01 6.71-6.71s-3.01-6.71-6.71-6.71z" />
        </svg>
      ),
    },
  ];

  return (
    <footer className="bg-slate-900 text-white relative overflow-hidden">
      {/* Top linear line */}
      <div className="h-1 bg-linear-to-r from-blue-600 via-blue-400 to-blue-600" />

      <div className="max-w-6xl mx-auto px-6 py-16">
        {/* Main footer content */}
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand column */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-linear-to-br from-blue-600 to-blue-700 flex items-center justify-center text-white font-bold shadow-lg shadow-blue-600/20">
                EL
              </div>
              <span className="text-xl font-bold">Emilio Lopez</span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed max-w-xs">
              Detail-oriented Virtual Assistant helping businesses streamline 
              operations and achieve their goals efficiently.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-400 mb-4">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {footerLinks.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href}
                    className="text-slate-300 hover:text-blue-400 transition-colors duration-200 text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact info */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-400 mb-4">
              Get in Touch
            </h3>
            <div className="space-y-3">
              <a 
                href="mailto:emilio.lopez@email.com"
                className="flex items-center gap-3 text-slate-300 hover:text-blue-400 transition-colors duration-200 text-sm group"
              >
                <svg className="w-4 h-4 text-blue-600 group-hover:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                emilio.lopez@email.com
              </a>
              <div className="flex items-center gap-3 text-slate-300 text-sm">
                <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                Philippines
              </div>
            </div>

            {/* Social links */}
            <div className="flex gap-3 mt-6">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="w-10 h-10 rounded-lg bg-slate-800 flex items-center justify-center text-slate-400 hover:bg-blue-600 hover:text-white transition-all duration-200"
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-slate-800 mb-8" />

        {/* Bottom bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 text-sm">
            © {currentYear} Emilio Carlos Lopez. All rights reserved.
          </p>
          <p className="text-slate-600 text-xs">
            Designed with care for your success
          </p>
        </div>
      </div>
    </footer>
  );
}