import React from 'react';
import { Reveal } from './Reveal';

const services = [
  [
    "3D Modeling",
    "Creation of detailed objects, characters, or environments tailored to specific client needs, ideal for games, products, and visualizations."
  ],
  [
    "Rendering",
    "High-quality, photorealistic renders that showcase designs with custom lighting, textures, and materials to bring concepts to life."
  ],
  [
    "Motion Design",
    "Dynamic animations and motion graphics that add energy and storytelling to brands, products, and digital experiences."
  ],
  [
    "Branding",
    "Crafting cohesive visual identities — from logos to full brand systems — that communicate a clear and memorable presence."
  ],
  [
    "Creative Direction",
    "A cohesive creative vision from first concept to final delivery, translating abstract brand ambitions into iconic digital imagery."
  ]
];

export const Services: React.FC = () => {
  return (
    <section
      id="services"
      className="bg-white rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32 relative z-20"
    >
      <span id="price" className="sr-only" />
      <Reveal>
        <h2
          className="text-[#0C0C0C] font-black uppercase text-center leading-none mb-16 sm:mb-20 md:mb-28"
          style={{ fontSize: "clamp(3rem, 12vw, 160px)" }}
        >
          Services
        </h2>
      </Reveal>
      <div className="max-w-5xl mx-auto">
        {services.map(([title, desc], index) => (
          <Reveal
            key={title}
            delay={index * 0.1}
            className="flex gap-4 sm:gap-8 md:gap-12 py-8 sm:py-10 md:py-12"
            style={{ borderTop: index === 0 ? "none" : "1px solid rgba(12, 12, 12, 0.15)" }}
          >
            <span
              className="font-black text-[#0C0C0C] leading-none shrink-0"
              style={{ fontSize: "clamp(3rem, 10vw, 140px)" }}
            >
              {String(index + 1).padStart(2, "0")}
            </span>
            <div className="flex flex-col gap-2 text-[#0C0C0C]">
              <h3
                className="font-medium uppercase"
                style={{ fontSize: "clamp(1rem, 2.2vw, 2.1rem)" }}
              >
                {title}
              </h3>
              <p
                className="font-light leading-relaxed max-w-2xl"
                style={{ fontSize: "clamp(0.85rem, 1.6vw, 1.25rem)", opacity: 0.6 }}
              >
                {desc}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
};
