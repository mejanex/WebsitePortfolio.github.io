'use client';

import { useState, useEffect } from 'react';

export default function Navbar() {
  const [active, setActive] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const sections = ['home', 'about', 'services', 'portfolio', 'experience', 'contact'];

      for (const id of sections) {
        const el = document.getElementById(id);
        if (!el) continue;

        const { top, bottom } = el.getBoundingClientRect();
        if (top <= 100 && bottom >= 100) {
          setActive(id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const el = document.getElementById(id);

    if (!el) return;

    window.scrollTo({
      top: el.offsetTop - 80,
      behavior: 'smooth',
    });

    setActive(id);
  };

  const links = ['home', 'about', 'services', 'portfolio', 'experience', 'contact'];

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-white/90 backdrop-blur-md shadow-lg shadow-slate-200/20 py-3'
          : 'py-5'
      }`}
    >
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6">
        
        {/* Logo */}
        <a
          href="#home"
          onClick={(e) => scrollTo(e, 'home')}
          className="flex items-center gap-2 group"
        >
          <div className="w-9 h-9 flex items-center justify-center rounded-lg bg-gradient-to-br from-blue-600 to-blue-700 text-white font-bold text-sm shadow-lg transition group-hover:scale-105">
            EL
          </div>

          <span className="font-bold text-lg text-slate-900">
            Emilio Lopez
          </span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-2">
          {links.map((link) => {
            const isActive = active === link;

            return (
              <a
                key={link}
                href={`#${link}`}
                onClick={(e) => scrollTo(e, link)}
                className={`relative px-4 py-2 text-sm font-medium rounded-lg transition-all duration-300 group
                  ${
                    isActive
                      ? 'text-blue-600 bg-blue-50'
                      : 'text-slate-600 hover:text-blue-600 hover:bg-slate-50'
                  }`}
              >
                {link.charAt(0).toUpperCase() + link.slice(1)}

                {/* underline */}
                <span
                  className={`absolute left-4 right-4 bottom-1 h-0.5 bg-blue-600 rounded-full transition-all duration-300
                    ${
                      isActive
                        ? 'scale-x-100 opacity-100'
                        : 'scale-x-0 opacity-0 group-hover:scale-x-100 group-hover:opacity-100'
                    }`}
                />
              </a>
            );
          })}

          {/* CTA */}
          <a
            href="#contact"
            onClick={(e) => scrollTo(e, 'contact')}
            className="ml-3 px-5 py-2.5 bg-blue-600 text-white text-sm font-semibold rounded-xl shadow-lg hover:bg-blue-700 hover:-translate-y-0.5 transition"
          >
            Hire Me
          </a>
        </div>

        {/* Mobile Button */}
        <button className="md:hidden p-2 text-slate-600 hover:text-blue-600">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>

      </div>
    </nav>
  );
}