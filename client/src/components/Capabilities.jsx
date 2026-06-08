import {
  Smartphone,
  Palette,
  Search,
  Zap,
  TrendingUp,
  ShieldCheck,
  MousePointerClick,
  Plug,
} from "lucide-react";
import { FiLayers, FiCalendar } from "react-icons/fi";

import { useNavigate } from "react-router-dom";
import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const data = [
  {
    icon: Smartphone,
    title: "Seamless Across Every Device",
    desc: "Your website delivers a consistent, high-quality experience across mobile, tablet, and desktop—ensuring accessibility and engagement everywhere.",
  },
  {
    icon: Palette,
    title: "Design That Reflects Your Brand",
    desc: "Every interface is crafted to align with your brand identity—creating a strong, professional presence that builds trust instantly.",
  },
  {
    icon: Search,
    title: "Structured for Search Visibility",
    desc: "Built with SEO-ready architecture, clean code, and optimized structure to improve discoverability and long-term rankings.",
  },
  {
    icon: Zap,
    title: "Fast, Smooth, and Reliable Performance",
    desc: "Optimized for speed and responsiveness to reduce drop-offs, improve engagement, and deliver a seamless user experience.",
  },
  {
    icon: TrendingUp,
    title: "Built to Grow with Your Business",
    desc: "Scalable systems designed to handle increasing traffic, evolving features, and long-term expansion without limitations.",
  },
  {
    icon: ShieldCheck,
    title: "Secure and Stable by Design",
    desc: "Developed using best practices to ensure your platform remains secure, reliable, and consistently available.",
  },
  {
    icon: MousePointerClick,
    title: "Designed to Drive Action",
    desc: "Layouts and user flows strategically structured to increase conversions, engagement, and user interaction.",
  },
  {
    icon: Plug,
    title: "Ready for Integrations and Expansion",
    desc: "Easily connects with CRMs, payment systems, analytics tools, and third-party services to support your business operations.",
  },
];

export default function Capabilities() {
  const navigate = useNavigate();

  const sectionRef = useRef(null);
  const leftRef = useRef(null);
  const capabilityRefs = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Left Content
      gsap.fromTo(
        leftRef.current,
        {
          opacity: 0,
          y: 80,
        },
        {
          opacity: 1,
          y: 0,
          ease: "none",
          scrollTrigger: {
            trigger: leftRef.current,
            start: "top 90%",
            end: "top 30%",
            scrub: 2,
          },
        },
      );

      // Capabilities
      capabilityRefs.current.forEach((item) => {
        if (!item) return;

        gsap.fromTo(
          item,
          {
            opacity: 0.3,
            y: 40,
          },
          {
            opacity: 1,
            y: 0,

            scrollTrigger: {
              trigger: item,
              start: "top 85%",
              end: "top 55%",
              scrub: 1.5,
            },
          },
        );
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="bg-[#F6F6F4] px-6 py-[90px] md:px-10 md:py-[110px] lg:px-16"
    >
      <div className="mx-auto max-w-[1280px]">
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-20">
          {/* LEFT */}
          <div ref={leftRef} className="lg:col-span-5 opacity-0">
            <p className="text-[11px] uppercase tracking-[0.28em] text-red-600">
              Capabilities
            </p>

            <h2 className="mt-5 font-heading text-[34px] leading-[1.02] tracking-[-0.05em] text-[#0B0B0C] md:text-[44px] lg:text-[56px]">
              Built With Everything Required To Perform And Scale
            </h2>

            <p className="mt-5 max-w-[460px] text-[14px] leading-[1.9] text-[#52525B]">
              Every website and web application is built with essential
              performance, scalability, and business-focused capabilities—
              designed around long-term growth instead of short-term delivery.
            </p>

            {/* FOOTER */}
            <div className="mt-12 border-t border-black/10 pt-6">
              <p className="max-w-[360px] text-[13px] leading-[1.8] text-[#71717A]">
                Strong systems are not built from isolated features. They work
                together to create reliability, scalability, and better user
                experiences.
              </p>

              <div className="mt-6 flex gap-8">
                <button
                  onClick={() => navigate("/pricing")}
                  className="
  flex
  items-center
  gap-2
  border-b
  border-red-600
  pb-1
  text-[14px]
  "
                >
                  <FiLayers className="text-[15px]" />
                  Review Packages
                </button>

                <button
                  onClick={() => navigate("/book-call")}
                  className="
  flex
  items-center
  gap-2
  border-b
  border-transparent
  pb-1
  text-[14px]
  text-[#71717A]
  hover:border-red-600
  transition-all
  "
                >
                  <FiCalendar className="text-[15px]" />
                  Schedule a Consultation
                </button>
              </div>
            </div>
          </div>

          {/* RIGHT */}
          <div className="lg:col-span-7">
            <div className="">
              {data.map((item, index) => {
                const Icon = item.icon;

                return (
                  <div
                    key={index}
                    ref={(el) => (capabilityRefs.current[index] = el)}
                    className="
    py-6
    opacity-30
    translate-y-[40px]
  "
                  >
                    <div className="grid grid-cols-[30px_1fr] gap-5">
                      {/* ICON */}
                      <div className="pt-1">
                        <Icon className="h-5 w-5 text-red-600" />
                      </div>

                      <div>
                        {/* TITLE */}
                        <h3
                          className="
                      font-heading
                      text-[18px]
                      md:text-[22px]
                      tracking-[-0.03em]
                      text-[#0B0B0C]
                      "
                        >
                          {item.title}
                        </h3>

                        {/* DESCRIPTION */}
                        <p
                          className="
                      mt-3
                      max-w-[500px]
                      text-[13px]
                      leading-[1.8]
                      text-[#71717A]
                      "
                        >
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
