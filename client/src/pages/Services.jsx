import ServiceComp from "../components/services/ServiceComp";
import { servicesData } from "../components/services/servicesData";

import { useNavigate, useSearchParams } from "react-router-dom";

import SEO from "../components/SEO";

export default function Services() {
  const navigate = useNavigate();

  const [searchParams] = useSearchParams();

  const selectedService = searchParams.get("service") || servicesData[0].id;

  const serviceData =
    servicesData.find((item) => item.id === selectedService) || servicesData[0];

  return (
    <>
      <SEO
        title="Web Development Services | Waves Web Studio"
        description="Custom websites, web applications, e-commerce solutions, SEO services, website migration, and digital solutions built for growth and performance."
        keywords="web development services, website development, custom websites, web applications, ecommerce development"
      />

      <div className="relative min-h-screen  bg-[#F5F1EA] text-black">
        {/* BACKGROUNDS */}

        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute top-[-120px] left-[-120px] h-[420px] w-[420px] rounded-full bg-[#D9C7B0]/20 blur-3xl" />

          <div className="absolute right-[-100px] top-[200px] h-[380px] w-[380px] rounded-full bg-[#B91C1C]/[0.04] blur-3xl" />

          <div className="absolute bottom-[-120px] left-[20%] h-[320px] w-[320px] rounded-full bg-black/[0.03] blur-3xl" />
        </div>

        {/* HERO */}

        <section className="relative px-6 pb-[72px] pt-[130px] md:px-10 md:pb-[90px] md:pt-[170px] lg:px-16 lg:pb-[110px]">
          <div className="mx-auto max-w-[1280px]">
            <div className="grid gap-16 lg:grid-cols-12 lg:items-end">
              {/* LEFT */}

              <div className="lg:col-span-7">
                <div className="mb-8">
                  <span className="text-[11px] font-medium uppercase tracking-[0.32em] text-black/45">
                    Services
                  </span>
                </div>

                <h1 className="max-w-[860px] font-heading text-[32px] sm:text-[38px] lg:text-[46px] xl:text-[52px] leading-[1.08] tracking-[-0.03em] font-semibold text-black">
                  Services Designed Around Clarity, Performance, and Long-Term
                  Growth
                </h1>
              </div>

              {/* RIGHT */}

              <div className="lg:col-span-5 lg:pl-8">
                <div className="mb-8 h-px w-[90px] bg-[#B91C1C]/70" />

                <p className="max-w-[440px] text-[15px] leading-[1.8] text-black/65 md:text-[16px]">
                  Each service solves a different business challenge — from
                  digital presence and conversion systems to operational
                  platforms and long-term growth.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* SERVICE NAVIGATION */}
        <section
          className="
    sticky
    top-0
    z-50
    border-y
    border-black/8
    bg-[#F5F1EA]/90
    backdrop-blur-xl
  "
        >
          <div className="mx-auto max-w-[1280px] px-4 sm:px-6 md:px-10 lg:px-16">
            <div className="grid lg:grid-cols-12 items-center">
              {/* LABEL */}
              <div className="hidden lg:flex lg:col-span-2 items-center">
                <span
                  className="
          text-[11px]
          uppercase
          tracking-[0.28em]
          text-black/35
          "
                >
                  Services
                </span>
              </div>

              {/* NAVIGATION */}
              <div className="lg:col-span-10 overflow-x-auto no-scrollbar">
                <div
                  className="
          flex
          items-center
          gap-5
          sm:gap-7
          md:gap-9
          py-4
          md:py-5
          min-w-max
          "
                >
                  {servicesData.map((service, index) => {
                    const active = service.id === selectedService;

                    return (
                      <button
                        key={service.id}
                        onClick={() =>
                          navigate(`/services?service=${service.id}`)
                        }
                        className="
                  flex
                  items-center
                  gap-2
                  sm:gap-3
                  shrink-0
                  transition-all
                  duration-500
                "
                      >
                        {/* NUMBER */}
                        <span
                          className={`
                  text-[10px]
                  sm:text-[11px]
                  tracking-[0.12em]
                  transition-colors
                  ${active ? "text-red-600" : "text-black/25"}
                  `}
                        >
                          {String(index + 1).padStart(2, "0")}
                        </span>

                        {/* TITLE */}
                        <span
                          className={`
                  text-[13px]
                  sm:text-[14px]
                  md:text-[15px]
                  whitespace-nowrap
                  tracking-[-0.02em]
                  transition-all
                  ${active ? "text-black" : "text-black/45"}
                  `}
                        >
                          {service.title}
                        </span>

                        {/* LINE */}
                        <div
                          className={`
                  h-[1px]
                  transition-all
                  duration-500
                  ${
                    active
                      ? "w-[45px] sm:w-[55px] bg-[#B91C1C]"
                      : "w-[14px] sm:w-[20px] bg-black/10"
                  }
                  `}
                        />
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* DYNAMIC CONTENT */}

        <section>
          <ServiceComp serviceData={serviceData} />
        </section>
      </div>
    </>
  );
}
