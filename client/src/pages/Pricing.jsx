import React, { useState } from "react";
import { HiOutlineBars3BottomLeft } from "react-icons/hi2";

import PricingCard from "../components/pricing/PricingCard";
import { pricingData } from "../components/pricing/pricingData";
import PricingFaq from "../components/pricing/PricingFaq";
import FullWidthContactForm from "../components/FullWidthContactForm";

const Pricing = () => {
  const [selectedService, setSelectedService] = useState(
    pricingData[0].id
  );

  const activeService = pricingData.find(
    (service) => service.id === selectedService
  );

  return (
    <main className="bg-[#F7F4EF] min-h-screen text-[#111111]">
      {/* Hero */}

      <section
        className="
        px-6
        sm:px-8
        lg:px-16
        pt-24
        lg:pt-32
        "
      >
        <div className="max-w-[1320px] mx-auto">
          <span
            className="
            text-[10px]
            sm:text-[11px]
            uppercase
            tracking-[0.28em]
            text-red-600
            "
          >
            Investment & Engagement
          </span>

          <h1
            className="
            mt-5
            max-w-[780px]
            text-[34px]
            sm:text-[44px]
            lg:text-[54px]
            leading-[1.02]
            tracking-[-0.055em]
            font-semibold
            "
          >
            Choose the right investment for your business goals.
          </h1>

          <p
            className="
            mt-8
            max-w-[720px]
            text-[15px]
            sm:text-[16px]
            leading-8
            text-neutral-600
            "
          >
            Different services solve different business
            challenges. Explore each engagement model to
            understand which investment aligns best with
            your objectives, growth stage, and operational
            requirements.
          </p>
        </div>
      </section>

      {/* Navigation */}

      <section
        className="
        px-6
        sm:px-8
        lg:px-16
        mt-14
        lg:mt-16
        "
      >
        <div
          className="
          max-w-[1320px]
          mx-auto
          border-y
          border-black/10
          py-7
          "
        >
          {/* Header */}

          <div
            className="
            flex
            items-center
            gap-3
            "
          >
            <HiOutlineBars3BottomLeft
              className="
              text-[18px]
              text-red-600
              shrink-0
              "
            />

            <p
              className="
              text-[13px]
              uppercase
              tracking-[0.22em]
              text-neutral-500
              "
            >
              Switch Between Services
            </p>
          </div>

          {/* Service Nav */}

          <div
            className="
            mt-8
            flex
            gap-8
            lg:gap-10
            overflow-x-auto
            scrollbar-none
            "
          >
            {pricingData.map((service) => {
              const isActive =
                service.id === selectedService;

              return (
                <button
                  key={service.id}
                  onClick={() =>
                    setSelectedService(service.id)
                  }
                  className="
                  relative
                  pb-3
                  shrink-0
                  transition-all
                  duration-500
                  "
                >
                  <span
                    className={`
                      text-[14px]
                      lg:text-[15px]
                      transition-all
                      duration-500
                      ${
                        isActive
                          ? "text-black font-medium"
                          : "text-neutral-500 hover:text-black"
                      }
                    `}
                  >
                    {service.navLabel}
                  </span>

                  <span
                    className={`
                      absolute
                      left-0
                      bottom-0
                      h-[2px]
                      bg-red-600
                      transition-all
                      duration-500
                      ${
                        isActive
                          ? "w-full opacity-100"
                          : "w-0 opacity-0"
                      }
                    `}
                  />
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Dynamic Pricing Section */}

      <PricingCard data={activeService} />
      <FullWidthContactForm />
      <PricingFaq />
    </main>
  );
};

export default Pricing;