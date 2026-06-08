import React from "react";
import { useNavigate } from "react-router-dom";
import { FiDollarSign, FiCompass, FiPhone } from "react-icons/fi";

const features = [
  {
    title: "Clarity Without Friction",
    subtitle: "You always know what’s happening.",
    description:
      "From day one, everything is defined—scope, timelines, and priorities—so you stay informed without chasing updates.",
  },
  {
    title: "Execution That Moves Forward",
    subtitle: "No delays. No unnecessary back-and-forth.",
    description:
      "A structured workflow ensures consistent progress and focused decision-making at every stage.",
  },
  {
    title: "Every Detail Has a Purpose",
    subtitle: "Nothing is added for decoration.",
    description:
      "Every interaction, layout, and system is designed to improve performance, strengthen user experience, and increase conversion.",
  },
  {
    title: "Built Like a Product, Not a Project",
    subtitle: "Designed for growth, not just launch.",
    description:
      "We align design, development, and strategy to build platforms that support long-term business outcomes.",
  },
  {
    title: "Scalable From the Ground Up",
    subtitle: "No rebuilding later.",
    description:
      "Whether it's a website, e-commerce platform, or custom web application, everything is built to grow with your business.",
  },
  {
    title: "A Partnership That Stays Aligned",
    subtitle: "Clear, honest, and structured.",
    description:
      "Communication stays focused and transparent, ensuring every decision aligns with your goals.",
  },
];

export default function Features() {
  const navigate = useNavigate();
  return (
    <section className="relative overflow-hidden bg-[#0B0B0C] px-6 pt-[90px] pb-[90px] text-white md:px-10 md:pt-[110px] md:pb-[110px] lg:px-16">
      {/* Glow */}
      <div className="absolute inset-0 flex pointer-events-none justify-center items-start">
        <div className="h-[400px] w-[400px] bg-[radial-gradient(circle,rgba(198,169,107,0.05),transparent_70%)] blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-6xl">
        {/* HEADER */}
        <div className="max-w-[560px]">
          <h2 className="font-playfair text-[34px] leading-[1.02] tracking-[-0.05em] text-[#F5F5F3] md:text-[42px] lg:text-[52px]">
            What It Feels Like to Work With Us
          </h2>

          <p className="mt-3 text-[14px] leading-[1.8] text-[#A1A1AA]">
            Not a typical web development service. A structured,
            high-performance partnership built around clarity, speed, and
            measurable outcomes.
          </p>

          <p className="mt-2 text-[13px] leading-[1.8] text-[#8B8B92]">
            From custom web applications and UI UX design to e-commerce
            development, every decision is intentional—focused on performance,
            scalability and real business impact.
          </p>
        </div>

        {/* FEATURES */}
        <div className="mt-16 space-y-16 md:space-y-18">
          {features.map((item, index) => {
            const isRight = index % 2 !== 0;

            return (
              <div
                key={index}
                className={`flex ${
                  isRight ? "justify-end text-right" : "justify-start text-left"
                }`}
              >
                <div className="relative w-[85%] max-w-[380px]">
                  {/* ACCENT */}
                  <div
                    className={`
                absolute top-[5px]
                ${isRight ? "right-10" : "left-10"}
                h-[14px]
                w-[2px]
                bg-red-600
                `}
                  />

                  <div
                    className={`
                ${isRight ? "pr-12" : "pl-12"}
                `}
                  >
                    <h3 className="text-[17px] font-medium text-[#EAEAEA]">
                      {item.title}
                    </h3>

                    <p className="mt-2 text-[13px] text-[#B0B0B8]">
                      {item.subtitle}
                    </p>

                    <p className="mt-2 text-[13px] leading-[1.8] text-[#8B8B92]">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* DIVIDER */}
        <div className="mt-14 flex justify-end">
          <div className="h-[1px] w-[500px] bg-gradient-to-r from-transparent via-white/20 to-transparent" />
        </div>

        {/* CLOSING */}

        <div className="mt-10 flex justify-end">
          <div className="max-w-[460px] text-right">
            <p className="text-[14px] leading-[1.8] text-[#EAEAEA]">
              Most projects fail in the gaps. Unclear direction, slow execution,
              and decisions without intent.
            </p>

            <p className="mt-2 text-[14px] leading-[1.8] text-[#EAEAEA]">
              We remove those gaps, so what you build actually works.
            </p>

            {/* CTA GROUP */}

            <div
              className="

      mt-10

      flex

      flex-col

      sm:flex-row

      sm:flex-wrap

      items-end

      sm:justify-end

      gap-5

      sm:gap-8

      "
            >
              <button
                onClick={() => navigate("/book-call")}
                className="

        flex

        items-center

        gap-2

        border-b

        border-red-600

        pb-1

        text-[14px]

        text-[#F5F5F3]

        transition-all

        duration-300

        hover:border-white

        "
              >
                <FiPhone className="text-[15px] shrink-0" />

                <span>Book a Strategy Call</span>
              </button>

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

        text-[#F5F5F3]

        transition-all

        duration-300

        hover:border-white

        "
              >
                <FiCompass className="text-[15px] shrink-0" />

                <span>Explore Solutions</span>
              </button>

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

        text-[#F5F5F3]

        transition-all

        duration-300

        hover:border-white

        "
              >
                <FiDollarSign className="text-[15px] shrink-0" />

                <span>Review Prices</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
