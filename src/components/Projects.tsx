import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Reveal } from './Reveal';

interface Project {
  name: string;
  category: string;
  imgs: string[];
}

const projects: Project[] = [
  {
    name: "Nextlevel Studio",
    category: "Client",
    imgs: [
      "/images/project1-1.png",
      "/images/project1-2.png",
      "/images/project1-3.png"
    ]
  },
  {
    name: "Aura Brand Identity",
    category: "Personal",
    imgs: [
      "/images/project2-1.png",
      "/images/project2-2.png",
      "/images/project2-3.png"
    ]
  },
  {
    name: "Solaris Digital",
    category: "Client",
    imgs: [
      "/images/project3-1.png",
      "/images/project3-2.png",
      "/images/project3-3.png"
    ]
  }
];

const Ii = "rounded-[40px] sm:rounded-[50px] md:rounded-[60px]";

interface CardProps {
  p: Project;
  index: number;
  total: number;
}

const ProjectCard: React.FC<CardProps> = ({ p, index, total }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const s = 1 - (total - 1 - index) * 0.03;
  const scale = useTransform(scrollYProgress, [0, 1], [1, s]);

  return (
    <div ref={containerRef} className="h-[85vh]">
      <motion.div
        className={`sticky top-24 md:top-32 border-2 border-[#D7E2EA] ${Ii} p-4 sm:p-6 md:p-8`}
        style={{
          background: "#0C0C0C",
          scale,
          marginTop: index * 28,
          transformOrigin: "top center"
        }}
      >
        <div className="flex flex-wrap items-center justify-between gap-4 mb-4 sm:mb-6">
          <div className="flex items-center gap-4 sm:gap-8">
            <span
              className="hero-heading font-black leading-none"
              style={{ fontSize: "clamp(3rem, 10vw, 140px)" }}
            >
              {String(index + 1).padStart(2, "0")}
            </span>
            <div>
              <div className="text-[#D7E2EA] opacity-60 font-light uppercase tracking-widest text-xs sm:text-sm">
                {p.category}
              </div>
              <h3
                className="text-[#D7E2EA] font-medium uppercase"
                style={{ fontSize: "clamp(1rem, 2.2vw, 2.1rem)" }}
              >
                {p.name}
              </h3>
            </div>
          </div>

          <a
            href="#contact"
            className="rounded-full border-2 border-[#D7E2EA] text-[#D7E2EA] font-medium uppercase tracking-widest px-8 py-3 sm:px-10 sm:py-3.5 text-sm sm:text-base hover:bg-[#D7E2EA]/10 transition-colors"
          >
            Live Project
          </a>
        </div>

        <div className="flex gap-3 sm:gap-4">
          <div className="flex flex-col gap-3 sm:gap-4" style={{ width: "40%" }}>
            <img
              src={p.imgs[0]}
              alt=""
              loading="lazy"
              className={`w-full object-cover ${Ii}`}
              style={{ height: "clamp(130px, 16vw, 230px)" }}
            />
            <img
              src={p.imgs[1]}
              alt=""
              loading="lazy"
              className={`w-full object-cover ${Ii}`}
              style={{ height: "clamp(160px, 22vw, 340px)" }}
            />
          </div>
          <div style={{ width: "60%" }}>
            <img
              src={p.imgs[2]}
              alt=""
              loading="lazy"
              className={`w-full h-full object-cover ${Ii}`}
            />
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export const Projects: React.FC = () => {
  return (
    <section
      id="projects"
      className="relative z-10 -mt-10 sm:-mt-12 md:-mt-14 rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32"
      style={{ background: "#0C0C0C" }}
    >
      <Reveal>
        <h2
          className="hero-heading font-black uppercase leading-none tracking-tight text-center mb-16 sm:mb-20 md:mb-28"
          style={{ fontSize: "clamp(3rem, 12vw, 160px)" }}
        >
          Project
        </h2>
      </Reveal>
      <div className="max-w-6xl mx-auto">
        {projects.map((p, index) => (
          <ProjectCard key={p.name} p={p} index={index} total={projects.length} />
        ))}
      </div>
    </section>
  );
};
