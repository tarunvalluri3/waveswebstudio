import { useState } from "react";
import { pricingFaqs } from "./pricingData";

const PricingFaq = () => {
  const [active, setActive] = useState(null);

  const toggle = (index) => {
    setActive(active === index ? null : index);
  };

  return (
    <section
      className="
      bg-[#F7F4EF]
      text-[#111111]
      px-6
      sm:px-8
      lg:px-16
      py-24
      lg:py-32
      "
    >
      <div className="max-w-[1320px] mx-auto">
        {/* Header */}

        <div className="flex justify-end">
          <div className="max-w-[760px] ">
            <span
              className="
            text-[10px]
            sm:text-[11px]
            uppercase
            tracking-[0.28em]
            text-red-600
            "
            >
              FAQ's
            </span>

            <h2
              className="
            mt-5
            text-[30px]
            sm:text-[38px]
            lg:text-[46px]
            leading-[1.05]
            tracking-[-0.05em]
            font-semibold
            "
            >
              Questions about pricing, scope, and engagement.
            </h2>

            <p
              className="
            mt-6
            text-[15px]
            leading-8
            text-neutral-600
            max-w-[640px]
            "
            >
              Investment varies based on business goals, technical requirements,
              and project scope. These answers help clarify how engagements are
              structured and what to expect before getting started.
            </p>
          </div>
        </div>

        {/* FAQ */}

        <div
          className="
          mt-20
          lg:mt-24
          border-t
          border-black/10
          "
        >
          {pricingFaqs.map((faq, index) => {
            const isOpen = active === index;

            return (
              <div
                key={index}
                className="
                border-b
                border-black/10
                py-8
                "
              >
                <button
                  onClick={() => toggle(index)}
                  className="
                  w-full
                  flex
                  justify-between
                  items-start
                  gap-8
                  text-left
                  "
                >
                  <span
                    className="
                    text-[18px]
                    sm:text-[20px]
                    font-medium
                    leading-[1.45]
                    tracking-[-0.02em]
                    max-w-[900px]
                    "
                  >
                    {faq.question}
                  </span>

                  <span
                    className="
                    shrink-0
                    text-red-600
                    text-[26px]
                    leading-none
                    "
                  >
                    {isOpen ? "−" : "+"}
                  </span>
                </button>

                <div
                  className={`
                    overflow-hidden
                    transition-all
                    duration-500
                    ease-[cubic-bezier(0.22,1,0.36,1)]
                    ${isOpen ? "max-h-[400px] mt-5" : "max-h-0"}
                  `}
                >
                  <p
                    className="
                    text-[15px]
                    leading-8
                    text-neutral-600
                    max-w-[900px]
                    "
                  >
                    {faq.answer}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Note */}

        <div
          className="
          mt-16
          pt-10
          border-t
          border-black/10
          "
        >
          <p
            className="
            text-[14px]
            sm:text-[15px]
            leading-8
            text-neutral-500
            max-w-[700px]
            "
          >
            Still unsure which engagement is right for your business? We can
            discuss your objectives, requirements, and growth plans to recommend
            the most appropriate investment approach.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PricingFaq;
