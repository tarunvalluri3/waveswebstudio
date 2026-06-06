import React from "react";
import { useState } from "react";
import BookCallForm from "./BookCallForm";

const callBenefits = [
  {
    number: "01",
    title: "Website Audit",
    description:
      "Review your current website, identify weaknesses, and uncover opportunities for improvement.",
  },
  {
    number: "02",
    title: "Growth Strategy",
    description:
      "Discover practical ways to improve user experience, conversions, and online presence.",
  },
  {
    number: "03",
    title: "Project Roadmap",
    description:
      "Receive clarity on timelines, scope, deliverables, and the next steps forward.",
  },
];

const suitableFor = [
  "Businesses launching a new website",
  "Website redesign projects",
  "Growing brands seeking better conversions",
  "Founders building a premium online presence",
];

const notSuitableFor = [
  "Free consulting without project intent",
  "DIY website support",
  "One-time technical troubleshooting",
  "Homework or educational assignments",
];

const faq = [
  {
    question: "How long is the consultation?",
    answer:
      "The consultation typically lasts around 30 minutes and focuses on understanding your goals and challenges.",
  },
  {
    question: "Is the call free?",
    answer:
      "Yes. The consultation is completely free and designed to determine whether we're the right fit.",
  },
  {
    question: "Will I receive a proposal?",
    answer:
      "If your project is a good fit, you'll receive a tailored proposal outlining scope, timeline, and investment.",
  },
  {
    question: "Do you work internationally?",
    answer:
      "Yes. Waves Web Studio works with businesses across different countries and time zones.",
  },
];

const BookCall = () => {
  const [active, setActive] = useState(0);

  const toggle = (index) => {
    setActive(active === index ? null : index);
  };
  return (
    <main className="bg-[#fafafa] text-[#111111]">
      {/* HERO */}

      <section>
        <div className="max-w-[1320px] mx-auto px-6 sm:px-8 lg:px-16 py-24 lg:py-36">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 items-start">
            <div className="lg:col-span-7">
              <span
                className="
    text-[10px]
    sm:text-[11px]
    uppercase
    tracking-[0.28em]
    text-red-600
    "
              >
                Strategy Consultation
              </span>

              <h1
                className="
    mt-5
    max-w-[780px]
    font-heading
    text-[38px]
    sm:text-[48px]
    lg:text-[58px]
    xl:text-[64px]
    leading-[1.05]
    tracking-[-0.03em]
    font-semibold
  "
              >
                Let's discuss what's next for your business.
              </h1>

              <p
                className="
    mt-8
    max-w-[620px]
    text-[15px]
    sm:text-[16px]
    leading-8
    text-neutral-600
    "
              >
                This conversation is designed to understand your business,
                current challenges, growth objectives, and digital requirements.
                Together, we'll explore the most effective approach for
                achieving your goals and determine whether we're the right fit
                to work together.
              </p>

              <div
                className="
    mt-12
    pt-8
    border-t
    border-black/10
    "
              >
                <div className="flex flex-wrap gap-x-12 gap-y-6">
                  <div>
                    <p
                      className="
          text-[10px]
          uppercase
          tracking-[0.18em]
          text-neutral-500
          "
                    >
                      Response Time
                    </p>

                    <p
                      className="
          mt-2
          text-[16px]
          font-medium
          text-black
          "
                    >
                      Within 24 Hours
                    </p>
                  </div>

                  <div>
                    <p
                      className="
          text-[10px]
          uppercase
          tracking-[0.18em]
          text-neutral-500
          "
                    >
                      Consultation
                    </p>

                    <p
                      className="
          mt-2
          text-[16px]
          font-medium
          text-black
          "
                    >
                      Free Initial Call
                    </p>
                  </div>

                  <div>
                    <p
                      className="
          text-[10px]
          uppercase
          tracking-[0.18em]
          text-neutral-500
          "
                    >
                      Focus
                    </p>

                    <p
                      className="
          mt-2
          text-[16px]
          font-medium
          text-black
          "
                    >
                      Strategy & Planning
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5">
              <BookCallForm />
            </div>
          </div>
        </div>
      </section>

      {/* BENEFITS */}

      <section className="bg-[#111111] text-white">
        <div className="max-w-[1320px] mx-auto px-6 sm:px-8 lg:px-16 py-24 lg:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
            {/* LEFT */}

            <div className="lg:col-span-5">
              <span
                className="
          text-[10px]
          sm:text-[11px]
          uppercase
          tracking-[0.28em]
          text-red-600
          "
              >
                What Happens Next
              </span>

              <h2
                className="
          mt-5
          font-heading
          text-[34px]
          sm:text-[44px]
          lg:text-[58px]
          leading-[0.98]
          tracking-[-0.05em]
          font-semibold
          text-white
          "
              >
                A strategic conversation designed around your business.
              </h2>

              <p
                className="
          mt-8
          max-w-[460px]
          text-[15px]
          sm:text-[16px]
          leading-8
          text-neutral-400
          "
              >
                Every project begins with understanding your goals, challenges,
                and opportunities. This process helps us determine the right
                direction before any proposal, planning, or execution begins.
              </p>
            </div>

            {/* RIGHT */}

            <div className="lg:col-span-7">
              {/* DISCOVERY */}

              <div className="py-8 border-t border-white/[0.08]">
                <h3
                  className="
            text-[26px]
            sm:text-[30px]
            tracking-[-0.03em]
            font-medium
            text-red-600
            "
                >
                  Discovery
                </h3>

                <p
                  className="
            mt-5
            max-w-[560px]
            text-[15px]
            sm:text-[16px]
            leading-8
            text-neutral-400
            "
                >
                  We discuss your business, current challenges, growth
                  objectives, audience, and the outcomes you're looking to
                  achieve through your digital presence.
                </p>
              </div>

              {/* STRATEGY */}

              <div className="py-8 border-t border-white/[0.08]">
                <h3
                  className="
            text-[26px]
            sm:text-[30px]
            tracking-[-0.03em]
            font-medium
            text-red-600
            "
                >
                  Strategy
                </h3>

                <p
                  className="
            mt-5
            max-w-[560px]
            text-[15px]
            sm:text-[16px]
            leading-8
            text-neutral-400
            "
                >
                  Based on your requirements, we identify opportunities,
                  recommend solutions, and outline the most effective approach
                  for achieving your business goals.
                </p>
              </div>

              {/* ROADMAP */}

              <div className="py-8 border-t border-b border-white/[0.08]">
                <h3
                  className="
            text-[26px]
            sm:text-[30px]
            tracking-[-0.03em]
            font-medium
            text-red-600
            "
                >
                  Roadmap & Proposal
                </h3>

                <p
                  className="
            mt-5
            max-w-[560px]
            text-[15px]
            sm:text-[16px]
            leading-8
            text-neutral-400
            "
                >
                  If we're the right fit, you'll receive a clear roadmap
                  covering scope, timeline, investment, deliverables, and the
                  recommended next steps.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHO ITS FOR */}

      <section className="bg-[#111111] border-t border-white/[0.08]">
        <div className="max-w-[1320px] mx-auto px-6 sm:px-8 lg:px-16 py-24">
          <div className="grid lg:grid-cols-2 gap-24">
            <div>
              <span
                className="
          text-[11px]
          uppercase
          tracking-[0.24em]
          text-red-600
          "
              >
                Ideal Clients
              </span>

              <h2
                className="
          mt-5
          text-[42px]
          font-semibold
          tracking-[-0.03em]
          text-white
          "
              >
                Who This Is For
              </h2>

              <div className="mt-10 space-y-5">
                {suitableFor.map((item) => (
                  <div
                    key={item}
                    className="
              flex
              gap-4
              items-start
              "
                  >
                    <span className="text-red-600 mt-[2px]">+</span>

                    <p className="text-neutral-400">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <span
                className="
          text-[11px]
          uppercase
          tracking-[0.24em]
          text-red-600
          "
              >
                Expectations
              </span>

              <h2
                className="
          mt-5
          text-[42px]
          font-semibold
          tracking-[-0.03em]
          text-white
          "
              >
                Not Suitable For
              </h2>

              <div className="mt-10 space-y-5">
                {notSuitableFor.map((item) => (
                  <div
                    key={item}
                    className="
              flex
              gap-4
              items-start
              "
                  >
                    <span className="text-red-600 mt-[2px]">—</span>

                    <p className="text-neutral-400">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROCESS */}

      <section className="bg-[#F8F7F4]">
        <div className="max-w-[1320px] mx-auto px-6 sm:px-8 lg:px-16 py-24 lg:py-32">
          {/* HEADER */}

          <div className="max-w-[760px]">
            <span
              className="
        text-[10px]
        sm:text-[11px]
        uppercase
        tracking-[0.28em]
        text-red-600
        "
            >
              Outcomes
            </span>

            <h2
              className="
        mt-5
        font-heading
        text-[34px]
        sm:text-[44px]
        lg:text-[54px]
        leading-[1.02]
        tracking-[-0.05em]
        font-semibold
        "
            >
              What you'll leave the consultation with.
            </h2>

            <p
              className="
        mt-8
        max-w-[620px]
        text-[15px]
        sm:text-[16px]
        leading-8
        text-neutral-600
        "
            >
              Every strategy call is designed to provide clarity, actionable
              direction, and a better understanding of what your business needs
              next.
            </p>
          </div>

          {/* ITEMS */}

          <div className="mt-20">
            {callBenefits.map((item) => (
              <div
                key={item.title}
                className="
          py-12
          border-t
          border-black/10
          "
              >
                <div className="grid lg:grid-cols-12 gap-8 lg:gap-16">
                  {/* LEFT */}

                  <div className="lg:col-span-4">
                    <span
                      className="
                text-[12px]
                tracking-[0.24em]
                uppercase
                text-red-600
                "
                    >
                      {item.number}
                    </span>

                    <h3
                      className="
                mt-4
                text-[30px]
                sm:text-[36px]
                leading-[1.05]
                tracking-[-0.04em]
                font-medium
                "
                    >
                      {item.title}
                    </h3>
                  </div>

                  {/* RIGHT */}

                  <div className="lg:col-span-8 lg:pt-2">
                    <p
                      className="
                max-w-[620px]
                text-[16px]
                leading-8
                text-neutral-600
                "
                    >
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}

      <section className="bg-[#F8F7F4] border-t border-black/10">
        <div className="max-w-[1320px] mx-auto px-6 sm:px-8 lg:px-16 py-24 lg:py-32">
          <div className="grid lg:grid-cols-12 gap-16 lg:gap-24">
            {/* LEFT */}

            <div className="lg:col-span-4">
              <span
                className="
          text-[10px]
          sm:text-[11px]
          uppercase
          tracking-[0.28em]
          text-red-600
          "
              >
                Questions
              </span>

              <h2
                className="
          mt-5
          font-heading
          text-[34px]
          sm:text-[44px]
          lg:text-[54px]
          leading-[1.02]
          tracking-[-0.05em]
          font-semibold
          "
              >
                Frequently Asked Questions
              </h2>

              <p
                className="
          mt-6
          max-w-[340px]
          text-[15px]
          leading-8
          text-neutral-600
          "
              >
                Everything you need to know before scheduling a consultation,
                discussing your project, or starting an engagement.
              </p>
            </div>

            {/* RIGHT */}

            <div className="lg:col-span-8">
              <div className="space-y-8">
                {faq.map((item, index) => {
                  const isOpen = active === index;

                  return (
                    <div
                      key={item.question}
                      className="
                border-b
                border-black/10
                pb-8
                "
                    >
                      <button
                        onClick={() => toggle(index)}
                        className="
                  w-full
                  flex
                  justify-between
                  items-start
                  text-left
                  "
                      >
                        <span
                          className="
                    text-[18px]
                    sm:text-[20px]
                    font-medium
                    leading-[1.4]
                    text-black
                    pr-8
                    "
                        >
                          {item.question}
                        </span>

                        <span
                          className="
                    text-red-600
                    text-[22px]
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
                    ${isOpen ? "max-h-[300px] mt-5" : "max-h-0"}
                  `}
                      >
                        <p
                          className="
                    max-w-[85%]
                    text-[15px]
                    leading-8
                    text-neutral-600
                    "
                        >
                          {item.answer}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default BookCall;
