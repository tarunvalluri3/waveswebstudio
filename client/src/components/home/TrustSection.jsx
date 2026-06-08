import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { homePageContent } from "../../data/homePageContent";

gsap.registerPlugin(ScrollTrigger);

const TrustSection = () => {
  const { trustSection } = homePageContent;

  const sectionRef = useRef(null);
  const glowRef = useRef(null);
  const headingRef = useRef(null);
  const subtextRef = useRef(null);
  const blocksRef = useRef([]);
  const microRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        contentRef.current,
        {
          opacity: 0,
          y: 60,
        },
        {
          opacity: 1,
          y: 0,
          ease: "power2.out",

          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 90%",
            end: "top 20%",
            scrub: 2,
          },
        },
      );
    });

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative bg-[#0B0B0C] text-white pt-[140px] pb-[120px] px-6 overflow-hidden"
    >
      {/* Glow */}
      <div
        ref={glowRef}
        className="absolute inset-0 flex justify-center items-start pointer-events-none"
      >
        <div className="w-[500px] h-[500px] bg-[radial-gradient(circle,rgba(198,169,107,0.06),transparent_70%)] blur-3xl" />
      </div>

      <div ref={contentRef} className="relative max-w-6xl mx-auto opacity-0">
        {/* HEADER (MASK SPLIT) */}
        <div className="text-center max-w-2xl mx-auto overflow-hidden">
          <h2
            ref={headingRef}
            className="font-playfair text-[40px] md:text-[48px] leading-tight tracking-[-0.5px] text-[#F5F5F3]"
          >
            <span className="block overflow-hidden">
              <span className="line block">Trusted by Businesses That</span>
            </span>
            <span className="block overflow-hidden">
              <span className="line block">
                Prioritize Performance and Growth
              </span>
            </span>
          </h2>

          <p
            ref={subtextRef}
            className="mt-4 text-[#A1A1AA] text-[15px] leading-relaxed"
          >
            {trustSection.subText}
          </p>
        </div>

        {/* BLOCKS */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-y-14 gap-x-16">
          {trustSection.trustPoints.map((item, index) => (
            <div
              key={index}
              ref={(el) => el && (blocksRef.current[index] = el)}
              className="relative pl-6"
            >
              <div className="absolute left-0 top-[4px] w-[2px] h-[18px] bg-red-600" />

              <h3 className="text-[18px] font-medium text-[#EAEAEA]">
                {item.title}
              </h3>

              <p className="mt-3 text-[14px] leading-relaxed text-[#8B8B92] max-w-[90%]">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="mt-24 flex justify-center">
          <div className="w-[80px] h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent" />
        </div>

        {/* Micro Trust */}
        <p
          ref={microRef}
          className="mt-6 text-center text-[13px] tracking-[0.4px] text-[#6B6B73]"
        >
          {trustSection.microTrustLine}
        </p>
      </div>
    </section>
  );
};

export default TrustSection;
