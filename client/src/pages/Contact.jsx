import ContactForm from "../components/ContactForm";
import { useNavigate } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import {
  FiMail,
  FiMapPin,
  FiPlus,
  FiMinus,
  FiClock,
  FiTarget,
  FiCheckCircle,
  FiFileText,
  FiMessageCircle,
  FiCompass,
  FiArrowRight,
  FiPhone,
  FiGrid,
  FiDollarSign,
} from "react-icons/fi";

import { FaInstagram, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";

import { useState } from "react";

import SEO from "../components/SEO";

const faq = [
  {
    question: "What are the different ways to contact Waves Studio?",
    answer:
      "You can contact through the inquiry form, email, phone, or social channels.",
  },

  {
    question: "What information should I provide for a website project?",
    answer:
      "Share your business goals, required features, target audience, and any references if available.",
  },

  {
    question: "How quickly can I expect a response?",
    answer: "Most inquiries receive a response within 24 hours.",
  },

  {
    question: "Can I schedule a consultation before committing?",
    answer:
      "Yes. Initial discussions help define direction before any commitment.",
  },

  {
    question: "Do I need a clear idea before contacting?",
    answer:
      "No. Even rough ideas are enough to begin planning and discussions.",
  },
];

export default function Contact() {
  const [active, setActive] = useState(null);

  const toggle = (index) => {
    setActive(active === index ? null : index);
  };

  const navigate = useNavigate();
  return (
    <>
      <SEO
        title="Contact Waves Web Studio"
        description="Get in touch to discuss your website, web application, SEO, e-commerce, or digital growth project."
        keywords="contact web developer, website consultation, web design agency contact"
      />
      <div className="bg-[#F5F1EA] text-[#0B0B0C]">
        {/* HERO + FORM */}

        <section className="px-6 pt-[120px] pb-[90px] md:px-10 md:pt-[150px] lg:px-16">
          <div className="mx-auto max-w-[1280px]">
            <div className="grid gap-16 lg:grid-cols-12 lg:items-center">
              {/* LEFT */}

              <div className="lg:col-span-5">
                <span className="text-[11px] uppercase tracking-[0.28em] text-red-600">
                  Contact
                </span>

                <h1
                  className="
    mt-8
    font-heading
    text-[32px]
    sm:text-[38px]
    lg:text-[46px]
    xl:text-[52px]
    leading-[1.08]
    tracking-[-0.03em]
    font-semibold
  "
                >
                  Let's Turn Your Vision Into Reality.
                </h1>

                <p
                  className="
              mt-8
              max-w-[500px]
              text-[15px]
              leading-[2]
              text-black/60
              "
                >
                  Whether you're building a website, web application or a
                  complete digital experience, every project starts with a
                  conversation around goals and long-term growth.
                </p>

                {/* POINTS */}

                {/* POINTS */}

                <div className="mt-12 space-y-6">
                  {[
                    {
                      icon: FiClock,
                      text: "Response within 24 hours",
                    },

                    {
                      icon: FiTarget,
                      text: "Strategy-first discussions",
                    },

                    {
                      icon: FiCheckCircle,
                      text: "No commitment required",
                    },
                  ].map((item, index) => {
                    const Icon = item.icon;

                    return (
                      <div
                        key={index}
                        className="
        flex
        items-center
        gap-4
        "
                      >
                        {/* ICON */}

                        <div
                          className="
          flex
          h-9
          w-9
          shrink-0
          items-center
          justify-center
          rounded-full
          bg-red-600/8
          "
                        >
                          <Icon
                            className="
            text-[16px]
            text-red-600
            "
                          />
                        </div>

                        {/* TEXT */}

                        <p
                          className="
          text-[14px]
          md:text-[15px]
          text-black/68
          "
                        >
                          {item.text}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* FORM */}

              <div className="lg:col-span-6 lg:col-start-7">
                <ContactForm />
              </div>
            </div>
          </div>
        </section>

        {/* CONTACT WALL */}
        <section className="bg-[#0B0B0C] px-6 py-[80px] text-white md:px-10 lg:px-16">
          <div className="mx-auto max-w-[1280px]">
            <div className="grid gap-14 lg:grid-cols-12">
              {/* LEFT */}

              <div className="lg:col-span-4">
                <span className="text-[11px] uppercase tracking-[0.28em] text-red-600">
                  Reach Us
                </span>

                <h2
                  className="
          mt-5
          font-heading
          text-[24px]
          font-semibold
          leading-[1.05]
          tracking-[-0.04em]
          text-[#F5F5F3]
          md:text-[32px]
          lg:text-[32px]
          "
                >
                  Reach out through the channel that works best.
                </h2>

                <p
                  className="
          mt-6
          max-w-[340px]
          text-[14px]
          leading-[1.9]
          text-white/45
          "
                >
                  Whether you're planning a product, discussing ideas, or
                  exploring long-term collaboration.
                </p>

                {/* FOUNDER */}

                <div className="mt-10 flex items-center gap-5">
                  {/* RED ACCENT */}

                  <div
                    className="
    h-[40px]
    w-[2px]
    bg-red-600
    shrink-0
    "
                  />

                  {/* DETAILS */}

                  <div>
                    <p
                      className="
      text-[16px]
      font-medium
      tracking-[-0.02em]
      text-[#F5F5F3]
      "
                    >
                      Tarun Valluri
                    </p>

                    <p
                      className="
      mt-1
      text-[11px]
      uppercase
      tracking-[0.22em]
      text-white/35
      "
                    >
                      Founder · Waves Studio
                    </p>
                  </div>
                </div>
              </div>

              {/* RIGHT */}

              <div className="lg:col-span-7 lg:col-start-6">
                {[
                  {
                    icon: FiMail,
                    title: "Email",
                    value: "waveswebstudio99@gmail.com",
                    color: "text-[#DC2626]", // red
                  },

                  {
                    icon: FaWhatsapp,
                    title: "Phone",
                    value: "+91\u00A0\u00A06303896249",
                    color: "text-[#22C55E]", // green
                  },

                  {
                    icon: FiMapPin,
                    title: "Location",
                    value: "Hyderabad, India",
                    color: "text-[#F59E0B]", // amber
                  },

                  // {
                  //   icon: FaInstagram,
                  //   title: "Instagram",
                  //   value: "@waveswebstudio",
                  //   color: "text-[#E1306C]", // instagram pink
                  // },

                  // {
                  //   icon: FaLinkedinIn,
                  //   title: "LinkedIn",
                  //   value: "Waves Web Studio",
                  //   color: "text-[#0A66C2]", // linkedin blue
                  // },
                ].map((item, index) => {
                  const Icon = item.icon;

                  return (
                    <div
                      key={index}
                      className="
      
     
      pb-5
      "
                    >
                      <div
                        className="
        flex
        items-end
        gap-5
        "
                      >
                        {/* ICON */}

                        <div
                          className="
          flex
          h-8
          w-8
          items-center
          justify-center
          shrink-0
          "
                        >
                          <Icon
                            className={`
            text-[16px]
            ${item.color}
            `}
                          />
                        </div>

                        {/* CONTENT */}

                        <div className="min-w-[140px]">
                          <p
                            className="
            mt-4
            text-[10px]
            uppercase
            tracking-[0.18em]
            text-white/30
            "
                          >
                            {item.title}
                          </p>

                          <h3
                            className="
            mt-2
            font-heading
            text-[16px]
            md:text-[14px]
            font-medium
            leading-[1.3]
            tracking-[-0.02em]
            text-[#F5F5F3]
            "
                          >
                            {item.value}
                          </h3>
                        </div>

                        {/* ARCHITECTURAL LINE */}

                        <div
                          className="
          h-[1px]
          flex-1
          bg-gradient-to-r
          from-red-600/50
          to-transparent
          "
                        />
                      </div>
                    </div>
                  );
                })}

                {/* FOOTNOTE */}

                <div className="mt-8">
                  <p
                    className="
      max-w-[340px]
      text-[12px]
      leading-[1.8]
      text-white/35
      "
                  >
                    Currently accepting projects for June–July 2026.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* WHAT HAPPENS NEXT */}

        <section className="bg-[#F5F1EA] px-6 py-[90px] md:px-10 lg:px-16">
          <div className="mx-auto max-w-[1100px]">
            {/* HEADER */}

            <div className="text-center">
              <span
                className="
        text-[11px]
        uppercase
        tracking-[0.28em]
        text-red-600
        "
              >
                Process
              </span>

              <h2
                className="
        mt-5
        font-heading
        text-[28px]
        md:text-[34px]
        font-semibold
        leading-[1]
        tracking-[-0.04em]
        "
              >
                What happens after inquiry?
              </h2>

              <p
                className="
        mt-5
        mx-auto
        max-w-[520px]
        text-[14px]
        leading-[1.9]
        text-black/55
        "
              >
                A structured process designed to create clarity before
                development begins.
              </p>
            </div>

            {/* TIMELINE */}

            <div className="relative mt-20">
              {/* CENTER LINE */}

              <div
                className="
        absolute
        left-[18px]
        top-0
        h-full
        w-px
        bg-black/8

        md:left-1/2
        md:-translate-x-1/2
        "
              />

              {[
                {
                  icon: FiFileText,
                  title: "Requirements Review",
                  desc: "We understand goals, business requirements and project scope.",
                },

                {
                  icon: FiMessageCircle,
                  title: "Discussion",
                  desc: "We discuss direction, ideas and implementation possibilities.",
                },

                {
                  icon: FiCompass,
                  title: "Project Direction",
                  desc: "We define a structured approach aligned with objectives.",
                },

                {
                  icon: FiArrowRight,
                  title: "Recommendations",
                  desc: "You receive recommendations and next steps.",
                },
              ].map((item, index) => {
                const Icon = item.icon;
                const isRight = index % 2 !== 0;

                return (
                  <div
                    key={index}
                    className="
            relative
            grid
            md:grid-cols-2
            mb-12
            "
                  >
                    {/* CONTENT */}

                    <div
                      className={`
              pl-14
              md:px-10

              ${isRight ? "md:col-start-2" : "md:text-right"}
              `}
                    >
                      <div
                        className="
                flex
                items-start
                gap-4

                md:block
                "
                      >
                        {/* ICON */}

                        <div
                          className="
                  md:hidden
                  "
                        >
                          <Icon
                            className="
                    text-red-600
                    text-[18px]
                    "
                          />
                        </div>

                        <div>
                          <h3
                            className="
                    text-[18px]
                    font-medium
                    text-black/85
                    "
                          >
                            {item.title}
                          </h3>

                          <p
                            className="
                    mt-3
                    text-[14px]
                    leading-[1.8]
                    text-black/50
                    "
                          >
                            {item.desc}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* CENTER ICON */}

                    <div
                      className="
              hidden
              md:flex
              absolute
              left-1/2
              -translate-x-1/2
              top-1
              h-9
              w-9
              items-center
              justify-center
              rounded-full
              bg-[#F5F1EA]
              border
              border-black/10
              "
                    >
                      <Icon
                        className="
                text-red-600
                text-[15px]
                "
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          {/* CTA BUTTONS */}

          <div
            className="
  mt-20
  flex
  flex-col
  sm:flex-row
  items-center
  justify-center
  gap-6
  sm:gap-10
  "
          >
            <button
              onClick={() => navigate("/book-call")}
              className="
    flex
    items-center
    gap-2
    text-black
    text-[15px]
    font-medium
    border-b
    border-red-600
    pb-1
    w-fit
    hover:border-black/40
    transition-all
    duration-300
    "
            >
              <FiPhone className="text-[16px]" />
              Schedule a Consultation
            </button>

            <button
              onClick={() => navigate("/services")}
              className="
    flex
    items-center
    gap-2
    text-black
    text-[15px]
    font-medium
    border-b
    border-red-600
    pb-1
    w-fit
    hover:border-black/40
    transition-all
    duration-300
    "
            >
              <FiGrid className="text-[16px]" />
              Explore Solutions
            </button>

            <button
              onClick={() => navigate("/pricing")}
              className="
    flex
    items-center
    gap-2
    text-black
    text-[15px]
    font-medium
    border-b
    border-red-600
    pb-1
    w-fit
    hover:border-black/40
    transition-all
    duration-300
    "
            >
              <FiDollarSign className="text-[16px]" />
              Review Packages
            </button>
          </div>
        </section>

        {/* FAQ */}

        <section className="bg-[#0B0B0C] text-white px-6 py-[90px] md:px-10 lg:px-16">
          <div className="mx-auto max-w-[1000px]">
            {/* HEADER */}

            <div className="text-center">
              <span
                className="
      text-[11px]
      uppercase
      tracking-[0.32em]
      text-red-600
      "
              >
                FAQ
              </span>

              <h2
                className="
        mt-5
        font-heading
        text-[32px]
        md:text-[38px]
        font-semibold
        tracking-[-0.04em]
        text-[#F5F5F3]
        "
              >
                Frequently Asked Questions
              </h2>

              <p
                className="
        mt-5
        mx-auto
        max-w-[560px]
        text-[14px]
        leading-[1.9]
        text-[#8B8B92]
        "
              >
                Clear answers around communication, project discussions,
                timelines and what to expect throughout the process.
              </p>
            </div>

            {/* FAQ ITEMS */}

            <div className="mt-20">
              {faq.map((item, index) => {
                const isOpen = active === index;

                return (
                  <div
                    key={index}
                    className="
            border-b
            border-white/[0.08]
            py-6
            "
                  >
                    {/* QUESTION */}

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
                      <p
                        className="
                text-[17px]
                md:text-[18px]
                leading-[1.5]
                text-[#F5F5F3]
                "
                      >
                        {item.question}
                      </p>

                      <div
                        className="
                mt-1
                shrink-0
                text-red-600
                "
                      >
                        {isOpen ? <FiMinus size={18} /> : <FiPlus size={18} />}
                      </div>
                    </button>

                    {/* ANSWER */}

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
                max-w-[90%]
                text-[14px]
                leading-[1.9]
                text-[#8B8B92]
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
                performance improvements, or a long-term technology partner,
                we'll help you identify the right approach before development
                begins.
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
      </div>
    </>
  );
}
