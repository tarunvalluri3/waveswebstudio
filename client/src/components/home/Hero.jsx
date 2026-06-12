import { useRef } from "react";
import { homePageContent } from "../../data/homePageContent";
import ContactForm from "../ContactForm";
import heroBg from "../../assets/hero-bg.png";
import { useNavigate } from "react-router-dom";
import { FiCompass, FiLayers, FiPhone } from "react-icons/fi";

const Hero = () => {
  const sectionRef = useRef(null);
  const contentRef = useRef(null);
  const headingRef = useRef(null);
  const formRef = useRef(null);
  const navigate = useNavigate();
  // const bgRef = useRef(null);

  return (
    <section
      ref={sectionRef}
      className="relative w-full min-h-screen overflow-hidden flex items-center pt-24 lg:pt-16  bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url(${heroBg})`,
      }}
    >
      <div className="w-full max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-16 py-8 sm:py-10 lg:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* LEFT */}
          <div className="lg:col-span-6 flex flex-col max-w-[640px]">
            <div ref={contentRef}>
              <span className="inline-block text-[11px] tracking-[0.18em] uppercase text-black font-medium px-2 py-[2px] bg-black/12 rounded-sm mb-5">
                {homePageContent.heroSection.subHeadline}
              </span>

              <h1
                ref={headingRef}
                className="font-heading text-[32px] sm:text-[38px] lg:text-[46px] xl:text-[52px] leading-[1.08] tracking-[-0.03em] font-semibold text-black"
              >
                {homePageContent.heroSection.mainHeading}
              </h1>

              <p className="mt-5 text-[16px] leading-[1.8] text-black/70 max-w-[560px]">
                {homePageContent.heroSection.description}
              </p>

              <div className="mt-8 flex flex-col sm:flex-row gap-6 sm:gap-10">
                <button
                  onClick={() => navigate("/book-call")}
                  className="flex items-center gap-2 text-black text-[15px] font-medium border-b border-red-600 pb-1 w-fit hover:border-black/40 transition-all duration-300"
                >
                  <FiPhone className="text-[16px]" />
                  {homePageContent.heroSection.cta.primary}
                </button>

                <button
                  onClick={() => navigate("/services")}
                  className="flex items-center gap-2 text-black/70 text-[15px] font-medium border-b border-black/20 pb-1 w-fit hover:border-red-600 hover:text-black transition-all duration-300"
                >
                  <FiLayers className="text-[16px]" />
                  Explore Solutions
                </button>
              </div>
            </div>
          </div>

          {/* RIGHT */}
          <div
            ref={formRef}
            className="lg:col-span-6 flex justify-center lg:justify-end"
          >
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
