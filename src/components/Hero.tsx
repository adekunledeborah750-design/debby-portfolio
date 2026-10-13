import React from 'react';
import { Reveal, Magnetic } from './Reveal';

const navLinks = ["About", "Price", "Projects", "Contact"];

export const ContactButton: React.FC<{ text?: string }> = ({ text = "Contact Me" }) => (
  <a
    href="#contact"
    className="inline-block rounded-full text-white font-medium uppercase tracking-widest px-8 py-3 sm:px-10 sm:py-3.5 md:px-12 md:py-4 text-xs sm:text-sm md:text-base cta-btn transition-transform duration-200"
  >
    {text}
  </a>
);

export const Hero: React.FC = () => {
  return (
    <section id="home" className="relative h-screen flex flex-col" style={{ overflowX: "clip" }}>
      {/* Navigation */}
      <Reveal delay={0} y={-20}>
        <nav className="flex justify-between px-6 md:px-10 pt-6 md:pt-8 text-[#D7E2EA] font-medium uppercase tracking-wider text-sm md:text-lg lg:text-[1.4rem]">
          {navLinks.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase() === 'price' ? 'services' : item.toLowerCase()}`}
              className="hover:opacity-70 transition-opacity duration-200"
            >
              {item}
            </a>
          ))}
        </nav>
      </Reveal>

      {/* Main Dominant Headline */}
      <div className="overflow-hidden mt-6 sm:mt-4 md:-mt-5 px-4 sm:px-8">
        <Reveal delay={0.15} y={40}>
          <h1
            className="hero-heading font-black uppercase leading-none whitespace-nowrap w-full text-center"
            style={{ fontSize: "clamp(2rem, 10.8vw, 150px)", letterSpacing: "-0.03em" }}
          >
            Hi, i'm debby
          </h1>
        </Reveal>
      </div>

      {/* Bottom Info Bar */}
      <div className="mt-auto flex justify-between items-end px-6 md:px-10 pb-7 sm:pb-8 md:pb-10">
        <Reveal delay={0.35} y={20}>
          <p
            className="text-[#D7E2EA] font-light uppercase tracking-wide leading-snug max-w-[160px] sm:max-w-[220px] md:max-w-[260px]"
            style={{ fontSize: "clamp(0.75rem, 1.4vw, 1.5rem)" }}
          >
            a 3d creator driven by crafting striking and unforgettable projects
          </p>
        </Reveal>

        <Reveal delay={0.5} y={20} className="relative z-20">
          <ContactButton />
        </Reveal>
      </div>

      {/* Centerpiece 3D Sculpture resting at bottom */}
      <div className="absolute left-1/2 -translate-x-1/2 z-10 bottom-0 w-[280px] sm:w-[360px] md:w-[440px] lg:w-[520px]">
        <Reveal delay={0.6} y={30}>
          <Magnetic padding={150} strength={3}>
            <img
              src="/images/hero-artwork.png"
              alt="Debby 3D Sculpture"
              className="w-full h-auto select-none pointer-events-none"
              draggable={false}
            />
          </Magnetic>
        </Reveal>
      </div>
    </section>
  );
};
