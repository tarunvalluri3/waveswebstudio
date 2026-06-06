import {
  Monitor,
  Layout,
  ShoppingCart,
  Code,
  Search,
  RefreshCcw,
  PenTool,
  Smartphone,
  TrendingUp,
} from "lucide-react";

import { Link } from "react-router-dom";
import { homePageContent } from "../../data/homePageContent";
import { useRef } from "react";

const HomeServices = () => {
  const { servicesSection } = homePageContent;
  const services = servicesSection.services;

  const sectionRef = useRef(null);

  return (
    <section
      ref={sectionRef}
      className="
      relative
      overflow-hidden
      bg-[#F7F7F5]
      text-[#0B0B0C]
      pt-[90px]
      sm:pt-[100px]
      lg:pt-[110px]
      pb-[80px]
      sm:pb-[90px]
      lg:pb-[100px]
      px-5
      sm:px-8
      lg:px-16
      "
    >
      <div className="max-w-[1440px] mx-auto">
        {/* HEADER */}
        <div className="max-w-[650px] heading-reveal reveal-text">
          <h2
            className="
          font-playfair
          text-[28px]
          sm:text-[36px]
          lg:text-[48px]
          leading-[1.05]
          "
          >
            <span className="line block">{servicesSection.heading}</span>
          </h2>

          <p
            className="
          mt-4
          text-[11px]
          uppercase
          tracking-[0.22em]
          "
          >
            <span className="line block">
              Not just services — systems{" "}
              <span className="text-[#DC2626] font-medium">
                developed for performance
              </span>
            </span>
          </p>

          <p
            className="
          mt-5
          text-[14px]
          text-[#3F3F46]
          leading-[1.8]
          max-w-[580px]
          "
          >
            <span className="line block">{servicesSection.description}</span>
          </p>
        </div>

        {/* SERVICES */}

        <ServiceRight item={services[0]} Icon={Monitor} />
        <ServiceRight item={services[1]} Icon={Layout} />
        <ServiceCenter item={services[2]} Icon={ShoppingCart} />

        <div className="mt-14 grid md:grid-cols-2 gap-12">
          <ServiceLeft item={services[3]} Icon={Code} noMargin />
          <ServiceLeft item={services[4]} Icon={Search} noMargin />
        </div>

        <ServiceRight item={services[5]} Icon={RefreshCcw} />
        <ServiceRight item={services[6]} Icon={PenTool} />

        <div className="mt-14 grid md:grid-cols-2 gap-12">
          <ServiceLeft item={services[8]} Icon={Smartphone} noMargin />
          <ServiceLeft item={services[7]} Icon={TrendingUp} noMargin />
        </div>
      </div>
    </section>
  );
};

export default HomeServices;

/* ================= LEFT ================= */

const ServiceLeft = ({ item, Icon, noMargin }) => (
  <div
    className={`
    service-left
    will-change-transform
    transform-gpu
    ${noMargin ? "" : "mt-12"}
    `}
  >
    <div className="max-w-[900px] flex gap-6">
      <div className="icon-wrap flex flex-col items-center mt-1">
        <Icon className="w-6 h-6" />
        <div className="w-[2px] h-full bg-[#DC2626] mt-3" />
      </div>

      <ServiceContent item={item} />
    </div>
  </div>
);

/* ================= RIGHT ================= */

const ServiceRight = ({ item, Icon }) => (
  <div
    className="
  service-right
  will-change-transform
  transform-gpu
  mt-14
  flex
  justify-end
  "
  >
    <div className="max-w-[900px] flex gap-6 flex-row-reverse">
      <div className="icon-wrap flex flex-col items-center mt-1">
        <Icon className="w-6 h-6" />
        <div className="w-[2px] h-full bg-[#DC2626] mt-3" />
      </div>

      <ServiceContent item={item} />
    </div>
  </div>
);

/* ================= CENTER ================= */

const ServiceCenter = ({ item, Icon }) => (
  <div
    className="
  service-center
  will-change-transform
  transform-gpu
  mt-14
  flex
  justify-center
  "
  >
    <div className="max-w-[900px] flex gap-6">
      <div className="icon-wrap flex flex-col items-center mt-1">
        <Icon className="w-6 h-6" />
        <div className="w-[2px] h-full bg-[#DC2626] mt-3" />
      </div>

      <ServiceContent item={item} large />
    </div>
  </div>
);

/* ================= CONTENT ================= */

const ServiceContent = ({ item, large }) => (
  <div className="reveal-text">
    <h3
      className={`
      font-medium
      ${large ? "text-[24px]" : "text-[21px]"}
      `}
    >
      <span className="line block">{item.title}</span>
    </h3>

    <p className="mt-2 text-[13px] text-[#9CA3AF]">
      <span className="line block">{item.tagline}</span>
    </p>

    <p
      className="
    mt-4
    text-[14px]
    text-[#3F3F46]
    leading-[1.8]
    "
    >
      <span className="line block">{item.description}</span>
    </p>

    <p
      className="
    mt-4
    text-[14px]
    text-[#6B7280]
    leading-[1.8]
    "
    >
      <span className="line block">{item.extendedDescription}</span>
    </p>

    <Link
      to={`/services?service=${item.id}`}
      className="
      mt-5
      inline-block
      text-[#DC2626]
      text-[14px]
      font-medium
      "
    >
      <span className="line block">{item.cta} →</span>
    </Link>
  </div>
);
