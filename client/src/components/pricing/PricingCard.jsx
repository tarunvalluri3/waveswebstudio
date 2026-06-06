import React from "react";
import { useNavigate } from "react-router-dom";
import {FiPhone, FiGrid,} from "react-icons/fi";
import {
  Check,
  Target,
  TrendingUp,
  ShieldCheck,
  Users,
  Rocket,
  LineChart,
  ArrowUpRight,
} from "lucide-react";

const outcomeIcons = [
  Target,
  TrendingUp,
  ShieldCheck,
  Users,
  Rocket,
  LineChart,
];

const PricingCard = ({ data }) => {
  const navigate = useNavigate();
  return (
    <section className="bg-[#F7F4EF] text-[#111111] overflow-hidden">
      <div className="max-w-[1320px] mx-auto px-6 sm:px-8 lg:px-16 py-20 lg:py-28">
        {/* HERO */}
        <div className="grid lg:grid-cols-[1.35fr_420px] gap-16 lg:gap-24 items-end">
          <div>
            <span className="text-[10px] sm:text-[11px] uppercase tracking-[0.28em] text-red-600">
              {data.sectionLabel}
            </span>

            <h2 className="mt-4 text-[30px] sm:text-[38px] lg:text-[46px] leading-[1.05] tracking-[-0.05em] font-semibold max-w-[820px]">
              {data.heading}
            </h2>

            <p className="mt-7 text-[15px] leading-8 text-neutral-600 max-w-[680px]">
              {data.description}
            </p>
          </div>
        </div>
      </div>

      {/* investment test */}

      <section>
        <div className="max-w-[1320px] mx-auto px-6 sm:px-8 lg:px-16 py-24 lg:py-36">
          <div className="grid lg:grid-cols-[1fr_520px] gap-16 lg:gap-24">
            <div>
              <span
                className="
    text-[10px]
    sm:text-[11px]
    uppercase
    tracking-[0.28em]
    text-red-600
    "
              >
                Investment
              </span>

              <h3
                className="
    mt-8
    text-[52px]
    sm:text-[60px]
    lg:text-[72px]
    leading-none
    tracking-[-0.07em]
    font-semibold
    "
              >
                {data.investment.price}
              </h3>

              <p
                className="
    mt-12
    text-[18px]
    sm:text-[19px]
    leading-9
    tracking-[-0.02em]
    text-neutral-800
    max-w-[520px]
    "
              >
                {data.highlight}
              </p>
            </div>

            <div>
              <p className="text-[15px] leading-8 text-neutral-600">
                {data.investment.range}
              </p>

              <div className="mt-12 flex flex-wrap gap-3">
                {data.investment.idealFor.map((item) => (
                  <span
                    key={item}
                    className="px-5 py-3 border border-black/10 rounded-full text-[14px]"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Test */}

      <section>
        <div className="max-w-[1320px] mx-auto px-6 sm:px-8 lg:px-16 py-24 lg:py-36">
          <div className="max-w-[240px]">
            <span className="text-[10px] sm:text-[11px] uppercase tracking-[0.28em] text-red-600">
              Engagement Process
            </span>
          </div>

          <div className="mt-20">
            {data.categories.map((category, index) => (
              <div key={category.title} className="relative">
                <div className="grid lg:grid-cols-[220px_1fr] gap-10 lg:gap-20">
                  <div>
                    <span className="text-[11px] uppercase tracking-[0.24em] text-neutral-400">
                      Stage {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>

                  <div className="pb-20 lg:pb-24">
                    <h3 className="text-[26px] sm:text-[30px] leading-[1.08] tracking-[-0.04em] font-semibold max-w-[520px]">
                      {category.title}
                    </h3>

                    <p className="mt-8 text-[15px] leading-8 text-neutral-600 max-w-[760px]">
                      {category.description}
                    </p>

                    <div className="mt-12 grid sm:grid-cols-2 gap-x-14 gap-y-6">
                      {category.points.map((point) => (
                        <div key={point} className="flex items-start gap-4">
                          <div className="w-2 h-2 rounded-full bg-red-600 mt-3 shrink-0" />

                          <p className="text-[15px] leading-7 text-neutral-700">
                            {point}
                          </p>
                        </div>
                      ))}
                    </div>

                    <p className="mt-12 text-[15px] leading-8 italic text-neutral-500 max-w-[650px]">
                      {category.closing}
                    </p>
                  </div>
                </div>

                {index !== data.categories.length - 1 && (
                  <div className="ml-[4px] lg:ml-[224px] h-16 border-l border-black/10" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>  

       <section className="bg-[#111111] text-white">
              <div className="max-w-[1320px] mx-auto px-6 sm:px-8 lg:px-16 py-24 lg:py-32">
                <div className="max-w-[820px]">
                  <span
                    className="
              text-[11px]
              uppercase
              tracking-[0.28em]
              text-red-600
              "
                  >
                    Let's Build Something Valuable
                  </span>
      
                  <h2
                    className="
              mt-6
              font-heading
              text-[34px]
              md:text-[52px]
              lg:text-[64px]
              font-semibold
              leading-[0.95]
              tracking-[-0.05em]
              "
                  >
                    Ready to discuss your business,
                    <br />
                    project, or next idea?
                  </h2>
      
                  <p
                    className="
              mt-8
              max-w-[620px]
              text-[15px]
              md:text-[16px]
              leading-[2]
              text-white/60
              "
                  >
                    Whether you need a new website, a custom web application,
                    performance improvements, or a long-term technology partner, we'll
                    help you identify the right approach before development begins.
                  </p>
      
                  <div
                    className="
              mt-12
              flex
              flex-col
              sm:flex-row
              gap-6
              sm:gap-10
              "
                  >
                    <button
                      onClick={() => navigate("/contact")}
                      className="
                flex
                items-center
                gap-2
                text-white
                text-[15px]
                font-medium
                border-b
                border-red-600
                pb-1
                w-fit
                hover:border-white/40
                transition-all
                duration-300
                "
                    >
                      <FiPhone className="text-[16px]" />
                      Book a Strategy Call
                    </button>
      
                    <button
                      onClick={() => navigate("/services")}
                      className="
                flex
                items-center
                gap-2
                text-white/70
                text-[15px]
                font-medium
                border-b
                border-white/20
                pb-1
                w-fit
                hover:border-red-600
                hover:text-white
                transition-all
                duration-300
                "
                    >
                      <FiGrid className="text-[16px]" />
                      Explore Solutions
                    </button>
                  </div>
      
                  <div
                    className="
              mt-16
              pt-8
              border-t
              border-white/10
              "
                  >
                    <p
                      className="
                text-[12px]
                uppercase
                tracking-[0.22em]
                text-white/35
                "
                    >
                      Typical Response Time
                    </p>
      
                    <p
                      className="
                mt-3
                text-[15px]
                text-white/60
                "
                    >
                      Usually within 24 hours on business days.
                    </p>
                  </div>
                </div>
              </div>
            </section>

      {/* OUTCOMES */}
      <section className="border-t border-black/10">
        <div className="max-w-[1320px] mx-auto px-6 sm:px-8 lg:px-16 py-24 lg:py-32">
          <div className="max-w-[780px]">
            <span className="text-[10px] sm:text-[11px] uppercase tracking-[0.28em] text-red-600">
              {data.outcomes.label}
            </span>

            <h3 className="mt-4 text-[30px] sm:text-[36px] leading-[1.08] tracking-[-0.045em] font-semibold">
              {data.outcomes.title}
            </h3>

            <p className="mt-6 text-[15px] leading-8 text-neutral-600">
              {data.outcomes.description}
            </p>
          </div>

          <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-x-16 gap-y-14">
            {data.outcomes.points.map((point, index) => {
              const Icon = outcomeIcons[index % outcomeIcons.length];

              return (
                <div
                  key={point}
                  className="group border-t border-black/10 pt-8"
                >
                  <Icon
                    size={22}
                    className="text-red-600 transition-transform duration-500 group-hover:translate-x-1"
                  />

                  <p className="mt-5 text-[15px] leading-7 text-neutral-700 max-w-[280px]">
                    {point}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      
      <section className="bg-[#111111] text-white">
        <div className="max-w-[1320px] mx-auto px-6 sm:px-8 lg:px-16 py-28 lg:py-40">
          <div className="max-w-[900px]">
            <span
              className="
        text-[11px]
        uppercase
        tracking-[0.28em]
        text-red-600
        "
            >
              Ready When You Are
            </span>

            <h3
              className="
        mt-8
        text-[30px]
        sm:text-[38px]
        lg:text-[46px]
        leading-[1.05]
        tracking-[-0.05em]
        font-semibold
        "
            >
              Most businesses focus on visibility.
              <br />
              <span className="text-white/55">
                We focus on what happens after.
              </span>
            </h3>

            <button
            onClick={() => navigate("/book-call")}
              className="
        mt-16
        flex
        items-center
        gap-3
        text-[15px]
        text-white
        hover:opacity-70
        transition-all
        duration-500
        "
            >
              Discuss Your Business Goals

              <ArrowUpRight
                size={16}
                className="
                text-red-600
          transition-transform
          duration-500
          group-hover:translate-x-1
          "
              />
            </button>
          </div>
        </div>
      </section>
    </section>
  );
};

export default PricingCard;
