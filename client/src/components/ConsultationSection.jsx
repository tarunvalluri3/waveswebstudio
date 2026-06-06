import React from "react";
import ContactForm from "../components/ContactForm";
import { ShieldCheck, TrendingUp, Workflow } from "lucide-react";
export default function ConsultationSection() {
  return (
    <section className="relative overflow-hidden bg-[#F7F5F2] px-6 py-[90px] md:px-10 md:py-[110px] lg:px-16">
      <div className="mx-auto max-w-[1180px]">
        <div className="grid items-start gap-14 lg:grid-cols-[0.85fr_1fr] lg:gap-20">
          {/* CONTENT FIRST */}
          <div className="order-1 lg:order-2">
            {/* LABEL */}
            <p className="text-[11px] uppercase tracking-[0.28em] text-red-600">
              Start a Conversation
            </p>

            {/* TITLE */}
            <h2 className="mt-5 font-heading text-[34px] leading-[1.02] tracking-[-0.05em] text-[#0B0B0C] md:text-[44px] lg:text-[56px]">
              Tell Us What You're Building.
            </h2>

            {/* DESCRIPTION */}
            <p className="mt-5 max-w-[440px] text-[14px] leading-[1.9] text-[#52525B]">
              Whether you need a high-performance website, scalable web
              application, or a complete digital experience, we'll help define
              the right direction before anything gets built.
            </p>

            {/* POINTS */}

            <div className="mt-12 border-t border-black/10">
              {[
                {
                  icon: ShieldCheck,
                  title: "Structured From The Beginning",
                  desc: "Clear communication and defined expectations from day one.",
                },
                {
                  icon: TrendingUp,
                  title: "Built Around Business Outcomes",
                  desc: "Focused on scalability, usability and measurable results.",
                },
                {
                  icon: Workflow,
                  title: "No Generic Process",
                  desc: "Every business requires its own structure and strategy.",
                },
              ].map((item, index) => {
                const Icon = item.icon;

                return (
                  <div key={index} className="border-b border-black/10 py-5">
                    <div className="flex items-start gap-4">
                      {/* ICON */}
                      <div
                        className="
                  mt-[2px]
                  flex
                  h-9
                  w-9
                  shrink-0
                  items-center
                  justify-center
                  rounded-full
                  bg-black/[0.03]
                  "
                      >
                        <Icon className="h-4 w-4 text-red-600" />
                      </div>

                      <div>
                        <h3
                          className="
                    text-[17px]
                    font-medium
                    text-[#0B0B0C]
                    "
                        >
                          {item.title}
                        </h3>

                        <p
                          className="
                    mt-2
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

            {/* MICRO TRUST */}
            <div className="mt-10">
              <p
                className="
          max-w-[320px]
          text-[13px]
          leading-[1.8]
          text-[#71717A]
          "
              >
                Most successful projects begin with a conversation, not a
                commitment.
              </p>
            </div>
          </div>

          {/* FORM SECOND ON MOBILE, RIGHT ON DESKTOP */}
          <div className="order-2 lg:order-1 lg:pt-4">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
