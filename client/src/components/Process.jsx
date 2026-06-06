import { useRef } from "react";
import { homePageContent } from "../data/homePageContent";
import { useNavigate } from "react-router-dom";
import { FiTrendingUp } from "react-icons/fi";

const Process = () => {
  const { processSection } = homePageContent;
  const sectionRef = useRef(null);
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
        <div className="text-center max-w-2xl mx-auto">
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
          <div className="absolute left-1/2 top-0 -translate-x-1/2 w-[1px] h-full bg-white/[0.04]" />

          <div className="space-y-20">
            {processSection.steps.map((step, index) => {
              const isLeft = index % 2 === 0;

              return (
                <div
                  key={index}
                  className="relative grid md:grid-cols-2 items-start"
                >
                  {/* LEFT SIDE */}
                  <div
                    className={`px-6 ${
                      isLeft ? "text-right pr-16" : "invisible"
                    }`}
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
                  <div className={`px-6 ${!isLeft ? "pl-16" : "invisible"}`}>
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
                  left-1/2
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
              <FiTrendingUp className="text-[16px]" /><span></span>
              Start Your Digital Transformation
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
