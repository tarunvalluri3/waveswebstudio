import { homePageContent } from "../data/homePageContent";
import { useNavigate } from "react-router-dom";
import { FiTrendingUp } from "react-icons/fi";

import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Process = () => {
  const { processSection } = homePageContent;
  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const timelineRef = useRef(null);
  const stepsRef = useRef([]);

 useEffect(() => {
  const ctx = gsap.context(() => {
    // Header Reveal
    gsap.fromTo(
      headerRef.current,
      {
        opacity: 0,
        y: 80,
      },
      {
        opacity: 1,
        y: 0,
        ease: "none",
        scrollTrigger: {
          trigger: headerRef.current,
          start: "top 90%",
          end: "top 30%",
          scrub: 2,
        },
      },
    );

    // Timeline Growth
    gsap.to(timelineRef.current, {
      scaleY: 1,
      ease: "none",

      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 85%",
        end: "bottom 20%",
        scrub: 2,
      },
    });

    // Step Activation
    stepsRef.current.forEach((step) => {
      if (!step) return;

      gsap.to(step, {
        opacity: 1,

        scrollTrigger: {
          trigger: step,
          start: "top 65%",
          end: "top 40%",
          scrub: 1.5,
        },
      });
    });
  });

  return () => ctx.revert();
}, []);

  const navigate = useNavigate();

  return (
    <section
      ref={sectionRef}
      className="
      relative
      bg-[#0B0B0C]
      text-white
      pt-[95px]
      pb-[90px]
      md:pt-[110px]
      md:pb-[100px]
      px-6
      overflow-hidden
      "
    >
      {/* Glow */}
      <div className="absolute inset-0 flex justify-center items-start pointer-events-none">
        <div className="w-[500px] h-[500px] bg-[radial-gradient(circle,rgba(198,169,107,0.05),transparent_70%)] blur-3xl" />
      </div>

      <div className="relative max-w-6xl mx-auto">
        {/* HEADER */}
        <div
          ref={headerRef}
          className="text-center max-w-2xl mx-auto opacity-0"
        >
          <h2
            className="
          font-playfair
          text-[34px]
          md:text-[42px]
          leading-[1.02]
          tracking-[-0.5px]
          text-[#F5F5F3]
          "
          >
            {processSection.heading}
          </h2>

          <p
            className="
          mt-3
          text-[#A1A1AA]
          text-[14px]
          leading-[1.8]
          "
          >
            {processSection.description}
          </p>
        </div>

        {/* TIMELINE */}
        <div className="mt-20 relative">
          {/* CENTER LINE */}
          <div
            className="
  absolute
  top-0

  left-[14px]
  md:left-1/2

  md:-translate-x-1/2

  w-[1px]
  h-full
  bg-white/[0.04]
  "
          >
            <div
              ref={timelineRef}
              className="
absolute
top-0
left-0
w-full
h-full
bg-gradient-to-b
from-red-600
via-red-700
to-red-900
origin-top
scale-y-0
"
            />
          </div>

          <div className="space-y-20">
            {processSection.steps.map((step, index) => {
              const isLeft = index % 2 === 0;

              return (
                <div
                  key={index}
                  ref={(el) => (stepsRef.current[index] = el)}
                  className="
  relative
  grid
  md:grid-cols-2
  items-start
  opacity-40
  "
                >
                  {/* LEFT SIDE */}
                  <div
                    className={`
pl-10
md:px-6
${isLeft ? "md:text-right md:pr-16" : "invisible md:block"}
`}
                  >
                    {isLeft && (
                      <>
                        {/* NUMBER */}
                        <p
                          className="
                        text-[54px]
                        md:text-[72px]
                        font-playfair
                        font-semibold
                        leading-none
                        mb-3
                        tracking-[-0.02em]
                        bg-gradient-to-b
                        from-[#9CA3AF]
                        via-[#4B5563]
                        to-[#111827]
                        bg-clip-text
                        text-transparent
                        opacity-25
                        select-none
                        pointer-events-none
                        "
                        >
                          {step.step}
                        </p>

                        <h3
                          className="
                        text-[18px]
                        font-medium
                        text-[#EAEAEA]
                        "
                        >
                          {step.title}
                        </h3>

                        {/* SUBHEADING */}
                        <p
                          className="
                        mt-1
                        text-[12px]
                        tracking-[0.05em]
                        text-red-600
                        "
                        >
                          {step.subHeading}
                        </p>

                        <p
                          className="
                        mt-2
                        text-[13px]
                        leading-[1.8]
                        text-[#8B8B92]
                        "
                        >
                          {step.description}
                        </p>
                      </>
                    )}
                  </div>

                  {/* RIGHT SIDE */}
                  <div
                    className={`
pl-10
md:px-6
${!isLeft ? "md:pl-16" : "invisible md:block"}
`}
                  >
                    {!isLeft && (
                      <>
                        {/* NUMBER */}
                        <p
                          className="
                        text-[54px]
                        md:text-[72px]
                        font-playfair
                        font-semibold
                        leading-none
                        mb-3
                        tracking-[-0.02em]
                        bg-gradient-to-b
                        from-[#9CA3AF]
                        via-[#4B5563]
                        to-[#111827]
                        bg-clip-text
                        text-transparent
                        opacity-25
                        select-none
                        pointer-events-none
                        "
                        >
                          {step.step}
                        </p>

                        <h3
                          className="
                        text-[18px]
                        font-medium
                        text-[#EAEAEA]
                        "
                        >
                          {step.title}
                        </h3>

                        {/* SUBHEADING */}
                        <p
                          className="
                        mt-1
                        text-[12px]
                        tracking-[0.05em]
                        text-red-600
                        "
                        >
                          {step.subHeading}
                        </p>

                        <p
                          className="
                        mt-2
                        text-[13px]
                        leading-[1.8]
                        text-[#8B8B92]
                        "
                        >
                          {step.description}
                        </p>
                      </>
                    )}
                  </div>

                  {/* CENTER DOT */}
                  <div
                    className="
  absolute

  left-[14px]
  md:left-1/2

  -translate-x-1/2

  top-3

  w-[6px]
  h-[6px]

  bg-[#374151]/70
  rounded-full
  "
                  />
                </div>
              );
            })}
          </div>
        </div>

        {/* CLOSING */}
        <div className="mt-20 flex justify-end">
          <div className="max-w-[420px] text-right">
            <div
              className="
            w-[50px]
            h-[1px]
            bg-white/20
            ml-auto
            mb-5
            "
            />

            <p
              className="
            text-[13px]
            text-[#6B6B73]
            leading-[1.8]
            "
            >
              {processSection.closingLine}
            </p>

            <button
              onClick={() => navigate("/book-call")}
              className="
  mt-6
  flex
  items-center
  gap-2
  text-[#EAEAEA]
  border-b
  border-red-600
  pb-1
  hover:border-white
  transition-all
  duration-300
  "
            >
              <FiTrendingUp className="text-[16px]" />
              <span></span>
              Start Your Digital Transformation
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
