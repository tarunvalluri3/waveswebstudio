import React from "react";
import {
  siBootstrap,
  siDocker,
  siExpress,
  siFigma,
  siFirebase,
  siFramer,
  siGsap,
  siJavascript,
  siMongodb,
  siNextdotjs,
  siNodedotjs,
  siPostgresql,
  siReact,
  siRedux,
  siReactquery,
  siTailwindcss,
  siThreedotjs,
  siTypescript,
  siVercel,
} from "simple-icons";

import BrandIcon from "../components/BrandIcon";

export default function TechStack() {
  const techContent = {
    eyebrow: "Tech Stack",
    title:
      "Modern technologies powering high-performance digital products.",
    description:
      "Our technology choices are driven by scalability, maintainability, performance, and long-term business growth — ensuring every product is built on a reliable modern foundation.",
  };

  const techStack = [
    { name: "ReactJS", icon: siReact },
    { name: "React Native", icon: siReact },
    { name: "Next.js", icon: siNextdotjs },
    { name: "JavaScript", icon: siJavascript },
    { name: "TypeScript", icon: siTypescript },
    { name: "Node.js", icon: siNodedotjs },
    { name: "Express.js", icon: siExpress },
    { name: "Redux", icon: siRedux },
    { name: "React Query", icon: siReactquery },
    { name: "MongoDB", icon: siMongodb },
    { name: "PostgreSQL", icon: siPostgresql },
    { name: "Firebase", icon: siFirebase },
    { name: "Tailwind CSS", icon: siTailwindcss },
    { name: "Bootstrap", icon: siBootstrap },
    { name: "Three.js", icon: siThreedotjs },
    { name: "GSAP", icon: siGsap },
    { name: "Framer", icon: siFramer },
    { name: "Docker", icon: siDocker },
    { name: "Figma", icon: siFigma },
    { name: "Vercel", icon: siVercel },
  ];

  return (
    <section
      className="relative overflow-hidden bg-[#E8DDD6] text-[#0B0B0C] pt-[120px] md:pt-[140px] pb-[100px] md:pb-[120px] px-6"
      style={{
        background: `
          linear-gradient(
            180deg,
            #F6F6F4 0%,
            #E4F4F8 60%,
            #F6F6F4 100%
          )
        `,
        backgroundSize: "100% 140%",
      }}
    >
      {/* ================= CONTENT ================= */}
      <div className="relative z-10 max-w-[1440px] mx-auto">

        {/* HEADER */}
        <div className="ml-auto max-w-[720px] text-right">
          <p className="text-[11px] md:text-[12px] tracking-[0.22em] uppercase text-[#9CA3AF]">
            {techContent.eyebrow}
          </p>

          <h2 className="mt-4 font-playfair text-[36px] sm:text-[44px] md:text-[56px] leading-[1.1] tracking-[-0.5px]">
            {techContent.title}
          </h2>

          <p className="mt-5 md:mt-6 text-[15px] md:text-[18px] text-[#3F3F46] leading-[1.8]">
            {techContent.description}
          </p>
        </div>

        {/* MARQUEE */}
        <div className="mt-16 md:mt-20 overflow-hidden">
          <div className="flex w-max gap-12 md:gap-16 animate-marquee">

            {[...techStack, ...techStack].map((item, index) => (
              <div
                key={`${item.name}-${index}`}
                className="flex items-center gap-4 text-[#6B7280]"
              >
                <BrandIcon
                  icon={item.icon}
                  className="w-6 h-6 md:w-7 md:h-7"
                />

                <span className="text-[14px] md:text-[16px] tracking-[-0.2px] whitespace-nowrap">
                  {item.name}
                </span>
              </div>
            ))}

          </div>
        </div>

      </div>
    </section>
  );
}