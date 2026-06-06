import { useState } from "react";

const categories = [
  {
    name: "Getting Started",
    micro:
      "Understand how we work, what we build, and what you can expect when starting a project.",
    items: [
      {
        q: "What exactly can you help me build for my business?",
        a: "We provide end-to-end digital solutions including landing pages, custom websites, e-commerce platforms, web applications such as dashboards and management systems, UI/UX design, mobile app development, SEO, and website migration.",
      },
      {
        q: "How long does it typically take to go from idea to launch?",
        a: "Timelines depend on the scope and complexity. Landing pages typically take 1–2 weeks, business websites 2–4 weeks, and custom web applications or larger systems may take several weeks depending on features and integrations.",
      },
      {
        q: "What does the process look like once we start?",
        a: "We follow a structured process—from understanding your goals, planning and design, to development, testing, and launch—ensuring clarity and alignment at every stage.",
      },
      {
        q: "Will I be able to manage things after the project is completed?",
        a: "Absolutely. We build flexible systems that allow you to update content, manage data, and scale features without limitations.",
      },
    ],
  },

  {
    name: "Quality & Experience",
    micro:
      "See how we ensure your product not only works—but performs and delivers results.",
    items: [
      {
        q: "How do you ensure the final product actually performs well?",
        a: "Every product is built with performance-first principles, ensuring fast loading, smooth interactions, and optimized user experience to improve engagement and reduce drop-offs.",
      },
      {
        q: "Will my website or application work seamlessly across devices?",
        a: "Yes. Every project is designed and developed to work seamlessly across mobile, tablet, and desktop devices, ensuring a consistent and high-quality user experience.",
      },
      {
        q: "How do you approach user experience and design decisions?",
        a: "We design interfaces based on user behavior, clarity, and conversion principles—ensuring your product is intuitive, engaging, and aligned with business goals.",
      },
    ],
  },

  {
    name: "UI/UX & Product Experience",
    micro:
      "Where design goes beyond visuals—focused on usability, clarity, and real user behavior.",
    items: [
      {
        q: "How do you approach UI/UX design in your projects?",
        a: "We approach UI/UX as a strategic process—focusing on user behavior, clarity, and interaction flow to create experiences that are intuitive, engaging, and aligned with business goals.",
      },
      {
        q: "Do you offer UI/UX design as a standalone service?",
        a: "Yes. We provide UI/UX design as a standalone service for businesses looking to improve usability, redesign products, or optimize user journeys.",
      },
      {
        q: "How does design impact conversions and user engagement?",
        a: "Design directly influences how users interact with your product. We structure layouts, navigation, and flows to reduce friction, improve clarity, and guide users toward meaningful actions.",
      },
    ],
  },

  {
    name: "Web Applications",
    micro:
      "For businesses that need more than a website—custom systems built to handle operations, workflows, and scale.",
    items: [
      {
        q: "Can you build custom web applications tailored to my business workflows?",
        a: "Yes. We design and develop custom web applications such as dashboards, CRM systems, vendor management systems (VMS), and internal tools tailored to your exact workflows and operational needs.",
      },
      {
        q: "How do you ensure these systems are scalable and future-ready?",
        a: "We build applications with modular architecture and scalability in mind, allowing you to expand features, handle increased usage, and evolve without needing to rebuild from scratch.",
      },
      {
        q: "Will the application remain fast and stable as usage grows?",
        a: "Yes. Performance optimization, efficient data handling, and scalable infrastructure are built into the system to ensure reliability even as your usage grows.",
      },
    ],
  },

  {
    name: "Scalability & Flexibility",
    micro:
      "Built not just for today—but for how your business evolves over time.",
    items: [
      {
        q: "Will the system be able to scale as my business grows?",
        a: "Yes. All systems are built with scalability in mind, allowing you to expand features, handle increased usage, and evolve without rebuilding from scratch.",
      },
      {
        q: "Can features be customized or extended in the future?",
        a: "Absolutely. From custom workflows to integrations and advanced features, everything is designed to be flexible and adaptable.",
      },
    ],
  },

  {
    name: "E-commerce",
    micro:
      "Built for businesses focused on selling—optimized for conversions, performance, and scalability.",
    items: [
      {
        q: "How do you approach building high-performing e-commerce platforms?",
        a: "We build scalable e-commerce platforms with secure payment integrations, product management systems, and optimized user journeys for higher conversions.",
      },
      {
        q: "Can the store be customized beyond standard functionality?",
        a: "Absolutely. From custom checkout flows to advanced filtering, dashboards, and integrations, we tailor the platform to your business requirements.",
      },
    ],
  },

  {
    name: "SEO & Visibility",
    micro:
      "Ensuring your product is discoverable and performs well in search from day one.",
    items: [
      {
        q: "How do you ensure my website is optimized for search engines?",
        a: "We implement technical SEO, performance optimization, and structured architecture to improve search visibility and long-term rankings.",
      },
      {
        q: "Will SEO be considered from the beginning of the project?",
        a: "Every project is built with SEO best practices including clean code, fast loading speeds, mobile optimization, and proper structure.",
      },
    ],
  },

  {
    name: "Trust & Support",
    micro:
      "Addressing reliability, migration, and long-term collaboration after launch.",
    items: [
      {
        q: "Can you migrate my existing website without losing performance or SEO?",
        a: "Yes. We handle complete website migration including content transfer, redesign if needed, performance improvements, and SEO preservation.",
      },
      {
        q: "What happens after launch—will I get ongoing support?",
        a: "Yes. We offer continuous support, maintenance, and optimization to ensure your platform remains secure, fast, and aligned with your business growth.",
      },
    ],
  },

  {
    name: "Mobile Applications",
    micro:
      "Extending your digital presence beyond web into scalable mobile experiences.",
    items: [
      {
        q: "Do you also build mobile applications tailored to business needs?",
        a: "Yes. We build mobile applications designed for performance, usability, and scalability, aligned with your business requirements and user needs.",
      },
    ],
  },
];

export default function FAQ() {
  const [active, setActive] = useState(null);

  const toggle = (index) => {
    setActive(active === index ? null : index);
  };

  let globalIndex = 0;

  return (
    <section className="bg-[#0B0B0C] text-white pt-[140px] pb-[140px] px-6">
      <div className="max-w-6xl mx-auto">

        {/* HEADER */}
        <div className="max-w-2xl">
          <h2 className="font-playfair text-[40px] md:text-[48px] leading-tight text-[#F5F5F3]">
            Frequently Asked Questions
          </h2>

          <p className="mt-5 text-[#A1A1AA] text-[15px] leading-relaxed">
            Clear answers across design, development, and growth—so you understand exactly how we work and what to expect.
          </p>
        </div>

        {/* CONTENT */}
        <div className="mt-24 space-y-24">

          {categories.map((section, sectionIndex) => (
            <div key={sectionIndex}>

              {/* CATEGORY HEADER */}
              <div className="mb-10">
                <p className="text-[11px] tracking-[0.35em] uppercase text-red-600 mb-3">
                  {section.name}
                </p>

                <p className="text-[14px] text-[#8B8B92] max-w-[520px] leading-relaxed">
                  {section.micro}
                </p>
              </div>

              {/* QUESTIONS */}
              <div className="space-y-6">
                {section.items.map((item) => {
                  const currentIndex = globalIndex++;
                  const isOpen = active === currentIndex;

                  return (
                    <div
                      key={currentIndex}
                      className="border-b border-white/10 pb-6"
                    >
                      {/* QUESTION */}
                      <button
                        onClick={() => toggle(currentIndex)}
                        className="w-full flex justify-between items-start text-left"
                      >
                        <span className="text-[18px] font-medium text-[#EAEAEA] leading-[1.4]">
                          {item.q}
                        </span>

                        <span className="ml-6 text-red-600 text-[20px]">
                          {isOpen ? "−" : "+"}
                        </span>
                      </button>

                      {/* ANSWER */}
                      <div
                        className={`overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                          isOpen ? "max-h-[300px] mt-4" : "max-h-0"
                        }`}
                      >
                        <p className="text-[14px] text-[#8B8B92] leading-[1.7] max-w-[90%]">
                          {item.a}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>

            </div>
          ))}

        </div>
      </div>
    </section>
  );
}