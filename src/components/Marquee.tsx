import React, { useRef, useEffect } from 'react';

const TT = "https://motionsites.ai/assets/";
const kT = [
  "hero-space-voyage-preview-eECLH3Yc",
  "hero-codenest-preview-Cgppc2qV",
  "hero-vex-ventures-preview-BczMFIiw",
  "hero-stellar-ai-v2-preview-DjvxjG3C",
  "hero-asme-preview-B_nGDnTP",
  "hero-transform-data-preview-Cx5OU29N",
  "hero-vitara-preview-Cjz2QYyU",
  "hero-terra-preview-BFjrCr7T",
  "hero-skyelite-preview-DHaZIgUv",
  "hero-aethera-preview-DknSlcTa",
  "hero-designpro-preview-D8c5_een",
  "hero-stellar-ai-preview-D3HL6bw1",
  "hero-xportfolio-preview-D4A8maiC",
  "hero-orbit-web3-preview-BXt4OttD",
  "hero-nexora-preview-cx5HmUgo",
  "hero-evr-ventures-preview-DZxeVFEX",
  "hero-planet-orbit-preview-DWAP8Z1P",
  "hero-new-era-preview-CocuDUm9",
  "hero-wealth-preview-B70idl_u",
  "hero-luminex-preview-CxOP7ce6",
  "hero-celestia-preview-0yO3jXO8"
];

const Dg = kT.map(e => `${TT}${e}.gif`);
const ET = Dg.slice(0, 11);
const CT = Dg.slice(11);
const PT = (e: string[]) => [...e, ...e, ...e];

interface TdProps {
  items: string[];
  rowRef: React.RefObject<HTMLDivElement>;
}

const Td: React.FC<TdProps> = ({ items, rowRef }) => {
  return (
    <div ref={rowRef} className="flex gap-3" style={{ willChange: "transform" }}>
      {PT(items).map((n, r) => (
        <img
          key={r}
          src={n}
          alt=""
          loading="lazy"
          className="rounded-2xl object-cover shrink-0"
          style={{ width: 420, height: 270 }}
        />
      ))}
    </div>
  );
};

export const Marquee: React.FC = () => {
  const containerRef = useRef<HTMLElement>(null);
  const rowTopRef = useRef<HTMLDivElement>(null);
  const rowBottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current || !rowTopRef.current || !rowBottomRef.current) return;
      const i = containerRef.current.getBoundingClientRect().top + window.scrollY;
      const s = (window.scrollY - i + window.innerHeight) * 0.3;
      rowTopRef.current.style.transform = `translateX(${s - 200}px)`;
      rowBottomRef.current.style.transform = `translateX(${-(s - 200)}px)`;
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  return (
    <section
      ref={containerRef}
      className="pt-24 sm:pt-32 md:pt-40 pb-10 overflow-hidden"
      style={{ background: "#0C0C0C" }}
    >
      <div className="flex flex-col gap-3">
        <Td items={ET} rowRef={rowTopRef} />
        <Td items={CT} rowRef={rowBottomRef} />
      </div>
    </section>
  );
};
