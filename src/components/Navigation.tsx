import React, { useState, useEffect } from 'react';
import { Reveal } from './Reveal';
import { Menu, X } from 'lucide-react';

interface NavItem {
  label: string;
  target: string;
}

const navItems: NavItem[] = [
  { label: 'About', target: '#about' },
  { label: 'Price', target: '#services' },
  { label: 'Projects', target: '#projects' },
  { label: 'Contact', target: '#contact' }
];

export const Navigation: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, target: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const element = document.querySelector(target);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="relative z-40 w-full">
      <Reveal delay={0} y={-20}>
        <nav
          className={`flex justify-between items-center px-6 md:px-10 pt-6 md:pt-8 text-[#D7E2EA] font-medium uppercase tracking-wider text-sm md:text-lg lg:text-[1.4rem] transition-all duration-300 ${
            scrolled ? 'backdrop-blur-sm bg-[#0C0C0C]/40 py-4' : ''
          }`}
          aria-label="Main Navigation"
        >
          {/* Desktop Navigation Links */}
          <div className="hidden sm:flex w-full justify-between items-center">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.target}
                onClick={(e) => handleNavClick(e, item.target)}
                className="hover:opacity-70 transition-opacity duration-200 tracking-wider focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C3A5EE]"
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Mobile Bar */}
          <div className="sm:hidden flex w-full justify-between items-center">
            <a
              href="#home"
              onClick={(e) => handleNavClick(e, '#home')}
              className="font-black text-lg tracking-widest text-[#D7E2EA]"
            >
              DEBBY
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-[#D7E2EA] p-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C3A5EE]"
              aria-label={mobileMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>
        </nav>
      </Reveal>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="sm:hidden fixed inset-0 z-50 bg-[#0C0C0C]/95 backdrop-blur-md flex flex-col justify-center items-center gap-8 text-[#D7E2EA] px-6">
          <button
            onClick={() => setMobileMenuOpen(false)}
            className="absolute top-6 right-6 text-[#D7E2EA] p-2"
            aria-label="Close Navigation Menu"
          >
            <X size={32} />
          </button>
          <div className="text-xs uppercase tracking-widest text-[#858B91] mb-2">
            Debby — 3D Creator
          </div>
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.target}
              onClick={(e) => handleNavClick(e, item.target)}
              className="font-bold text-2xl uppercase tracking-widest hover:text-[#C3A5EE] transition-colors"
            >
              {item.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={(e) => handleNavClick(e, '#contact')}
            className="mt-6 rounded-full px-8 py-3 text-sm font-medium uppercase tracking-widest text-white cta-gradient-btn"
          >
            Contact Me
          </a>
        </div>
      )}
    </header>
  );
};
