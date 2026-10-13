import React from 'react';
import { Reveal } from './Reveal';

const socialLinks = [
  { label: 'INSTAGRAM ↗', url: 'https://instagram.com' },
  { label: 'BEHANCE ↗', url: 'https://behance.net' },
  { label: 'LINKEDIN ↗', url: 'https://linkedin.com' }
];

export const Contact: React.FC = () => {
  return (
    <footer
      id="contact"
      className="relative z-10 -mt-10 sm:-mt-12 md:-mt-14 rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32 flex flex-col items-center text-center"
      style={{ background: "#0C0C0C" }}
    >
      <div className="max-w-5xl mx-auto flex flex-col items-center gap-10 sm:gap-14">
        <Reveal delay={0} y={40}>
          <h2
            className="hero-heading font-black uppercase leading-none tracking-tight text-center"
            style={{ fontSize: "clamp(3rem, 12vw, 160px)" }}
          >
            Let's make it real.
          </h2>
        </Reveal>

        <Reveal delay={0.2} y={20}>
          <a
            href="mailto:hello@debby.studio"
            className="inline-block rounded-full text-white font-medium uppercase tracking-widest px-8 py-3.5 sm:px-12 sm:py-4 md:px-14 md:py-5 text-sm sm:text-base md:text-lg cta-btn transition-transform duration-200"
          >
            hello@debby.studio
          </a>
        </Reveal>

        {/* Social Links */}
        <Reveal delay={0.3} y={20}>
          <div className="flex flex-wrap justify-center items-center gap-6 sm:gap-10 pt-10 text-xs sm:text-sm font-medium uppercase tracking-widest text-[#9299A2]">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
        </Reveal>

        {/* Footer Sub-bar */}
        <div className="w-full pt-16 sm:pt-20 border-t border-[rgba(215,226,234,0.12)] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs tracking-wider uppercase text-[#858B91]">
          <div className="flex items-center gap-3">
            <span className="font-bold text-sm text-[#D7E2EA]">DEBBY®</span>
            <span>•</span>
            <span>INDEPENDENT 3D CREATOR</span>
          </div>
          <div>
            <span>© 2026 DEBBY</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
