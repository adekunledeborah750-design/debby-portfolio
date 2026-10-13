import React, { useRef } from 'react';
import { motion, useScroll, useTransform, MotionValue } from 'framer-motion';
import { Reveal } from './Reveal';
import { ContactButton } from './Hero';

const LT = "https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/";
const VT = "With more than five years of experience in 3D design, I focus on 3D modeling, rendering, and motion design. I truly enjoy working with ambitious brands that aim to stand out and present their best image. Let's build something incredible together!";

const RT = [
  { src: "moon_icon.11395d36.png", pos: "top-[4%] left-[1%] sm:left-[2%] md:left-[4%]", size: "w-[120px] sm:w-[160px] md:w-[210px]", delay: 0.1, x: -80 },
  { src: "p59_1.4659672e.png", pos: "bottom-[8%] left-[3%] sm:left-[6%] md:left-[10%]", size: "w-[100px] sm:w-[140px] md:w-[180px]", delay: 0.25, x: -80 },
  { src: "lego_icon-1.703bb594.png", pos: "top-[4%] right-[1%] sm:right-[2%] md:right-[4%]", size: "w-[120px] sm:w-[160px] md:w-[210px]", delay: 0.15, x: 80 },
  { src: "Group_134-1.2e04f3ce.png", pos: "bottom-[8%] right-[3%] sm:right-[6%] md:right-[10%]", size: "w-[130px] sm:w-[170px] md:w-[220px]", delay: 0.3, x: 80 }
];

interface MTProps {
  char: string;
  i: number;
  n: number;
  progress: MotionValue<number>;
}

const MT: React.FC<MTProps> = ({ char, i, n, progress }) => {
  const opacity = useTransform(progress, [i / n, (i + 1) / n], [0.2, 1]);
  return (
    <span className="relative">
      <span style={{ opacity: 0 }}>{char}</span>
      <motion.span style={{ opacity, position: "absolute", left: 0, top: 0 }}>
        {char}
      </motion.span>
    </span>
  );
};

interface DTProps {
  text: string;
  className?: string;
  style?: React.CSSProperties;
}

const DT: React.FC<DTProps> = ({ text, className, style }) => {
  const ref = useRef<HTMLParagraphElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 0.8", "end 0.2"] });
  const chars = Array.from(text);

  return (
    <p ref={ref} className={className} style={style}>
      {chars.map((char, index) =>
        char === " " ? (
          " "
        ) : (
          <MT key={index} char={char} i={index} n={chars.length} progress={scrollYProgress} />
        )
      )}
    </p>
  );
};

export const About: React.FC = () => {
  return (
    <section
      id="about"
      className="relative min-h-screen flex flex-col items-center justify-center px-5 sm:px-8 md:px-10 py-20"
      style={{ background: "#0C0C0C" }}
    >
      {RT.map((e) => (
        <Reveal
          key={e.src}
          delay={e.delay}
          x={e.x}
          y={0}
          duration={0.9}
          className={`absolute ${e.pos} ${e.size} pointer-events-none select-none`}
        >
          <img src={LT + e.src} alt="" className="w-full h-auto" />
        </Reveal>
      ))}

      <div className="relative z-10 flex flex-col items-center gap-16 sm:gap-20 md:gap-24">
        <div className="flex flex-col items-center gap-10 sm:gap-14 md:gap-16">
          <Reveal delay={0} y={40}>
            <h2
              className="hero-heading font-black uppercase leading-none tracking-tight text-center"
              style={{ fontSize: "clamp(3rem, 12vw, 160px)" }}
            >
              About me
            </h2>
          </Reveal>
          <DT
            text={VT}
            className="text-[#D7E2EA] font-medium text-center leading-relaxed max-w-[560px]"
            style={{ fontSize: "clamp(1rem, 2vw, 1.35rem)" }}
          />
        </div>
        <ContactButton />
      </div>
    </section>
  );
};
