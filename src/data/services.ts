export interface ServiceItem {
  number: string;
  title: string;
  description: string;
  tags?: string[];
}

export const servicesData: ServiceItem[] = [
  {
    number: "01",
    title: "3D Modeling",
    description: "Detailed objects, characters, and environments built around your idea with precision geometry and cinematic topology.",
    tags: ["Asset Creation", "Hard Surface", "Organic Sculpting"]
  },
  {
    number: "02",
    title: "Rendering",
    description: "Polished, high-impact visuals with considered lighting, physical materials, ray-traced reflections, and studio atmosphere.",
    tags: ["Photorealism", "Studio Lighting", "Octane / Redshift"]
  },
  {
    number: "03",
    title: "Motion Design",
    description: "Fluid animation and motion graphics that bring stories to life with dynamic timing, kinetic typography, and physics simulations.",
    tags: ["Product CGI", "Simulations", "Loop Animations"]
  },
  {
    number: "04",
    title: "Branding",
    description: "Memorable visual identities with a clear and consistent point of view, merging 3D forms with editorial typography.",
    tags: ["Visual Identity", "3D Logomarks", "Design Systems"]
  },
  {
    number: "05",
    title: "Creative Direction",
    description: "A cohesive creative vision from first concept to final delivery, translating abstract brand ambitions into iconic imagery.",
    tags: ["Look Development", "Art Direction", "Campaign Strategy"]
  }
];
