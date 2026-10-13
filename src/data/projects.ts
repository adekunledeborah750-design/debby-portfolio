export interface ProjectItem {
  id: string;
  number: string;
  name: string;
  category: string;
  tags: string[];
  description: string;
  year?: string;
  imgs: string[];
  link?: string;
}

export const projectsData: ProjectItem[] = [
  {
    id: "nextlevel-studio",
    number: "01",
    name: "Nextlevel Studio",
    category: "CLIENT PROJECT",
    tags: ["3D", "ART DIRECTION"],
    description: "A bold visual universe for a new generation of digital culture, fusing abstract metallic forms with vibrant chromatic illumination.",
    year: "2024",
    imgs: [
      "/images/project1-1.png",
      "/images/project1-2.png",
      "/images/project1-3.png"
    ],
    link: "#contact"
  },
  {
    id: "aura-brand-identity",
    number: "02",
    name: "Aura — Brand Identity",
    category: "PERSONAL PROJECT",
    tags: ["BRANDING", "CGI"],
    description: "An expressive identity built around sculptural organic form, diffuse gradient lights, and dynamic physics simulations.",
    year: "2025",
    imgs: [
      "/images/project2-1.png",
      "/images/project2-2.png",
      "/images/project2-3.png"
    ],
    link: "#contact"
  },
  {
    id: "solaris-digital",
    number: "03",
    name: "Solaris Digital",
    category: "CLIENT PROJECT",
    tags: ["3D", "MOTION"],
    description: "A futuristic campaign featuring hyper-tactile materials, iridescent surface refractions, and cinematic celestial lighting.",
    year: "2025 — 2026",
    imgs: [
      "/images/project3-1.png",
      "/images/project3-2.png",
      "/images/project3-3.png"
    ],
    link: "#contact"
  }
];

export const marqueeReels = [
  { title: "Space Voyage", src: "/images/reel-hero-space-voyage-preview-eECLH3Yc.gif" },
  { title: "Codenest", src: "/images/reel-hero-codenest-preview-Cgppc2qV.gif" },
  { title: "Vex Ventures", src: "/images/reel-hero-vex-ventures-preview-BczMFIiw.gif" },
  { title: "Stellar AI v2", src: "/images/reel-hero-stellar-ai-v2-preview-DjvxjG3C.gif" },
  { title: "ASME Studio", src: "/images/reel-hero-asme-preview-B_nGDnTP.gif" },
  { title: "Transform Data", src: "/images/reel-hero-transform-data-preview-Cx5OU29N.gif" },
  { title: "Vitara", src: "/images/reel-hero-vitara-preview-Cjz2QYyU.gif" },
  { title: "Terra CGI", src: "/images/reel-hero-terra-preview-BFjrCr7T.gif" },
  { title: "Skyelite", src: "/images/reel-hero-skyelite-preview-DHaZIgUv.gif" }
];
