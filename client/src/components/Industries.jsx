import React from "react";
import { useNavigate } from "react-router-dom";
import { FiCompass, FiCalendar } from "react-icons/fi";

const industries = [
  {
    title: "Startups",
    description:
      "Structured digital products designed to help early-stage businesses move faster and scale with clarity.",
  },
  {
    title: "SaaS Platforms",
    description:
      "Product-focused experiences built around usability, retention, and long-term platform growth.",
  },
  {
    title: "E-Commerce",
    description:
      "Conversion-focused platforms optimized for performance and seamless purchasing experiences.",
  },
  {
    title: "Healthcare",
    description:
      "Clear, trustworthy digital systems designed around accessibility and user confidence.",
  },
  {
    title: "Real Estate",
    description:
      "Modern property experiences that improve discovery, trust, and lead generation.",
  },
  {
    title: "Logistics",
    description:
      "Operationally focused platforms that simplify workflows and improve business efficiency.",
  },
  {
    title: "Manufacturing",
    description:
      "Digital systems designed to streamline operations and modernize industrial workflows.",
  },
  {
    title: "Local Businesses",
    description:
      "High-performance websites built to improve visibility, credibility, and customer acquisition.",
  },
];

export default function Industries() {
  const navigate = useNavigate();
  return (
    <section className="bg-[#F6F6F4] px-6 py-[90px] md:px-10 md:py-[110px] lg:px-16">
      <div className="mx-auto max-w-[1180px]">
        {/* TOP */}
        <div className="max-w-[700px]">
          <p className="text-[11px] uppercase tracking-[0.28em] text-red-600">
            Industries
          </p>

          <h2 className="mt-5 font-heading text-[34px] leading-[1.02] tracking-[-0.05em] text-[#0B0B0C] md:text-[44px] lg:text-[56px]">
            Built Around How Different Businesses Operate.
          </h2>

          <p className="mt-5 max-w-[620px] text-[14px] leading-[1.9] text-[#52525B]">
            Every industry operates differently. We build systems around real
            workflows, customer behavior, and business requirements— not generic
            assumptions.
          </p>
        </div>

        {/* INDUSTRIES */}
        <div className="mt-16 border-t border-black/10">
          <div className="grid md:grid-cols-2">
            {industries.map((item, index) => (
              <div
                key={index}
                className={`
            py-8

            ${
              index % 2 === 0
                ? "md:pr-8"
                : "md:border-l md:border-black/10 md:pl-8"
            }

            ${index < industries.length - 2 ? "border-b border-black/10" : ""}
            `}
              >
                <h3
                  className="
            font-heading
            text-[22px]
            md:text-[28px]
            leading-[1]
            tracking-[-0.04em]
            text-[#0B0B0C]
            "
                >
                  {item.title}
                </h3>

                <p
                  className="
            mt-4
            max-w-[420px]
            text-[14px]
            leading-[1.85]
            text-[#71717A]
            "
                >
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* FOOTER */}

        <div className="mt-14 border-t border-black/10 pt-8">
          {/* MORE INDUSTRIES */}
          <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
            <div>
              <div className="flex items-center gap-4">
                <div className="h-[1px] w-[40px] bg-red-600/50" />

                <p
                  className="
        font-heading
        text-[22px]
        tracking-[-0.03em]
        text-[#0B0B0C]/85
        "
                >
                  And many more industries
                </p>
              </div>

              <p
                className="
      mt-4
      max-w-[420px]
      text-[13px]
      leading-[1.8]
      text-[#71717A]
      "
              >
                Different industries require different systems. The goal isn't
                fitting your business into a template— it's building around how
                your business actually works.
              </p>
            </div>

            {/* CTA GROUP */}

            <div className="flex flex-col sm:flex-row gap-6 sm:gap-8">
              <button
                onClick={() => navigate("/services")}
                className="
    flex
    items-center
    gap-2
    border-b
    border-red-600
    pb-1
    text-[14px]
    text-[#0B0B0C]
    "
              >
                <FiCompass className="text-[15px] shrink-0" />
                <span>Explore Possibilities</span>
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
    transition-all
    duration-300
    hover:border-red-600
    "
              >
                <FiCalendar className="text-[15px] shrink-0" />
                <span>Request a Consultation</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
