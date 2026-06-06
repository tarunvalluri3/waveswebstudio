import { useNavigate } from "react-router-dom";

import {
  Lightbulb,
  Workflow,
  Database,
  ShieldCheck,
  Layers3,
  Cpu,
  Gauge,
  Network,
  Settings2,
  LayoutDashboard,
} from "lucide-react";

import { FiTarget, FiPhone, FiDollarSign, FiTrendingUp } from "react-icons/fi";

const understandingIcons = [
  Workflow,
  LayoutDashboard,
  ShieldCheck,
  Database,
  Settings2,
  Layers3,
  Network,
  Gauge,
  Cpu,
];

import FullWidthContactForm from "../FullWidthContactForm";

const ServiceComp = ({ serviceData }) => {
  const navigate = useNavigate();
  return (
    <>
      {/* HERO */}
      <div className="bg-[#111111] text-white">
        <section className="px-6 pt-[70px] pb-[90px] md:px-10 md:pt-[90px] md:pb-[110px] lg:px-16 lg:pt-[110px] lg:pb-[130px]">
          <div className="mx-auto max-w-[1280px]">
            {/* TOP AREA */}
            <div className="flex flex-col items-end">
              {/* LABEL */}
              <span className="text-[11px] uppercase tracking-[0.28em] text-red-600">
                {serviceData.hero.label}
              </span>

              {/* TITLE */}
              <div className="mt-6 max-w-[860px] text-right">
                <h1 className="font-heading text-[34px] font-semibold leading-[1.02] tracking-[-0.055em] text-white sm:text-[42px] md:text-[52px] lg:text-[58px] xl:text-[64px]">
                  {serviceData.hero.title}
                </h1>
              </div>
            </div>

            {/* DESCRIPTION */}
            <div className="mt-14 md:mt-16 lg:mt-20">
              <div className="max-w-[85%] border-l border-red-600 pl-5 sm:max-w-[72%] md:max-w-[500px] md:pl-8">
                <p className="text-[13px] leading-[1.9] text-white/60 md:text-[15px]">
                  {serviceData.hero.description}
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
      {/* Introduction */}
      <div className="bg-[#111111] text-white">
        <section className="px-6 py-[90px] md:px-10 md:py-[110px] lg:px-16">
          <div className="mx-auto max-w-[1280px]">
            {/* SECTION LABEL */}
            <div className="mb-10">
              <span className="text-[11px] uppercase tracking-[0.28em] text-red-600">
                Introduction
              </span>
            </div>

            {/* TITLE */}
            <div className="flex justify-start">
              <div className="max-w-[820px] text-left">
                <h2 className="font-heading text-[34px] font-semibold leading-[1.04] tracking-[-0.05em] text-white sm:text-[40px] md:text-[52px]">
                  {serviceData.introduction.title}
                </h2>
              </div>
            </div>

            {/* CONTENT */}
            <div className="mt-16">
              <div className="space-y-12 md:space-y-16">
                {/* DESCRIPTION 1 */}
                <div className="w-[85%] max-w-[680px]">
                  <div className="border-r border-red-600 pr-5 md:pr-7">
                    <p className="text-[15px] leading-[1.9] text-white/62 md:text-[16px]">
                      {serviceData.introduction.description}
                    </p>
                  </div>
                </div>

                {/* DESCRIPTION 2 */}
                <div className="flex justify-center">
                  <div className="w-[85%] max-w-[620px]">
                    <div className="border-l border-red-600 pl-5 md:pl-7">
                      <p className="text-[15px] leading-[1.9] text-white/58 md:text-[16px]">
                        {serviceData.introduction.description2}
                      </p>
                    </div>
                  </div>
                </div>

                {/* DESCRIPTION 3 */}
                <div className="flex justify-end">
                  <div className="w-[85%] max-w-[600px]">
                    <div className="border-r border-red-600 pr-5 md:pr-7">
                      <p className="text-[14px] leading-[1.9] text-white/44 md:text-[15px]">
                        {serviceData.introduction.description3}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      {/* STRATEGIC INSIGHT */}
      <div className="bg-[#F5F1EA] text-black">
        <section className="px-6 py-[80px] md:px-10 md:py-[100px] lg:px-16 lg:py-[120px]">
          <div className="mx-auto max-w-[1180px]">
            {/* ICON */}
            <div className="flex justify-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-red-600/10">
                <Lightbulb className="h-7 w-7 text-black-600/75" />
              </div>
            </div>

            {/* LABEL */}
            <div className="mt-8 text-center">
              <span className="text-[11px] uppercase tracking-[0.28em] text-black">
                Strategic Insight
              </span>
            </div>

            {/* TITLE */}
            <div className="mx-auto mt-10 max-w-[980px] text-center">
              <h2 className="font-heading text-[40px] font-semibold leading-[1.08] tracking-[-0.055em] text-red-600 sm:text-[52px] md:text-[60px]">
                {serviceData.strategicInsight.title}
              </h2>
            </div>

            {/* BOTTOM ANCHOR */}
            <div className="mt-14 flex justify-center md:mt-16">
              <div className="h-px w-[120px] bg-red-600/30" />
            </div>
          </div>
        </section>
      </div>
      {/* UNDERSTANDING */}
      <div className="bg-[#F5F1EA] text-black">
        <section className="px-6 py-[100px] md:px-10 md:py-[120px] lg:px-16 lg:py-[140px]">
          <div className="mx-auto max-w-[1380px]">
            <div className="grid gap-16 lg:grid-cols-12 lg:gap-20">
              {/* LEFT SIDE */}
              <div className="lg:col-span-5">
                <div className="lg:sticky lg:top-24">
                  {/* LABEL */}
                  <span className="text-[11px] uppercase tracking-[0.28em] text-red-600">
                    Understanding
                  </span>

                  {/* TITLE */}
                  <div className="mt-6 max-w-[520px]">
                    <h2 className="font-heading text-[36px] font-semibold leading-[1.02] tracking-[-0.055em] text-black sm:text-[46px] md:text-[54px] lg:text-[60px]">
                      {serviceData.understanding.title}
                    </h2>
                  </div>

                  {/* DESCRIPTIONS */}
                  <div className="mt-14 space-y-8">
                    <p className="max-w-[560px] text-[14px] leading-[1.9] text-black/68">
                      {serviceData.understanding.description}
                    </p>

                    <p className="max-w-[520px] text-[14px] leading-[1.9] text-black/56">
                      {serviceData.understanding.description2}
                    </p>

                    <p className="max-w-[480px] text-[14px] leading-[1.9] text-black/40">
                      {serviceData.understanding.description3}
                    </p>
                  </div>
                </div>
              </div>

              {/* RIGHT SIDE */}
              <div className="lg:col-span-6 lg:col-start-7">
                <div className="space-y-14 md:space-y-16">
                  {serviceData.understanding.points.map((point, index) => {
                    const Icon = understandingIcons[index];

                    return (
                      <div
                        key={point}
                        className={`max-w-[580px] ${
                          index % 2 === 1 ? "ml-auto" : ""
                        }`}
                      >
                        {/* LINE */}
                        <div className="mb-4 flex items-center gap-6">
                          <div className="h-px flex-1 bg-red-600/20" />
                        </div>

                        {/* CONTENT */}
                        <div className="flex items-start gap-4">
                          <div className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-black/[0.03]">
                            <Icon className="h-4 w-4 text-red-600/70" />
                          </div>

                          <p className="text-[17px] leading-[1.75] tracking-[-0.02em] text-black/78 md:text-[20px]">
                            {point}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* CLOSING */}
                <div className="mt-20 border-t border-black/8 pt-8">
                  <div className="max-w-[620px]">
                    <p className="text-[14px] leading-[1.9] text-black/50">
                      {serviceData.understanding.closing}
                    </p>

                    <button
                      onClick={() => navigate("/book-call")}
                      className="
  mt-6
  flex
  items-center
  gap-2
  w-fit
  border-b
  border-red-600
  pb-1
  text-[14px]
  font-medium
  text-black
  transition-all
  duration-300
  hover:border-black/40
  "
                    >
                      <FiTarget className="text-[15px] shrink-0" />{" "}
                      <span></span>
                      <span>Discuss Your Business Goals</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      {/* PROCESS */}
      <section className="relative overflow-hidden bg-[#0B0B0C] px-6 pt-[100px] pb-[90px] text-white md:px-10 lg:px-16">
        <div className="relative mx-auto max-w-6xl">
          {/* HEADER */}
          <div className="max-w-[680px]">
            <span className="text-[11px] uppercase tracking-[0.28em] text-red-600">
              {serviceData.process.title}
            </span>

            <h2 className="mt-6 font-heading text-[34px] leading-[1.02] tracking-[-0.05em] text-[#F5F5F3] md:text-[42px] lg:text-[52px]">
              Structured Operational Execution.
            </h2>

            <p className="mt-3 max-w-[560px] text-[14px] leading-[1.8] text-[#A1A1AA]">
              Every stage is designed to reduce operational ambiguity while
              building scalable systems aligned with long-term business growth.
            </p>
          </div>

          {/* TIMELINE */}
          <div className="relative mt-20">
            {/* CENTER LINE */}
            <div className="absolute left-[20px] top-0 h-full w-[1px] bg-white/[0.04] md:left-1/2 md:-translate-x-1/2" />

            <div className="space-y-20 md:space-y-24">
              {serviceData.process.steps.map((step, index) => {
                const isLeft = index % 2 === 0;

                return (
                  <div
                    key={index}
                    className="relative grid items-start md:grid-cols-2"
                  >
                    {/* LEFT */}
                    <div
                      className={`pl-12 md:px-6 ${
                        isLeft ? "md:pr-14 md:text-right" : "md:invisible"
                      }`}
                    >
                      {isLeft && (
                        <>
                          {/* NUMBER */}
                          <p className="mb-3 font-heading text-[52px] md:text-[72px] font-semibold leading-none tracking-[-0.02em] bg-gradient-to-b from-[#9CA3AF] via-[#4B5563] to-[#111827] bg-clip-text text-transparent opacity-25 select-none pointer-events-none">
                            {step.step}
                          </p>

                          <h3 className="text-[18px] font-medium text-red-600">
                            {step.title}
                          </h3>

                          <p className="mt-2 text-[13px] leading-[1.8] text-[#8B8B92]">
                            {step.description}
                          </p>
                        </>
                      )}
                    </div>

                    {/* RIGHT */}
                    <div
                      className={`pl-12 md:px-6 ${
                        !isLeft ? "md:pl-14" : "md:invisible"
                      }`}
                    >
                      {!isLeft && (
                        <>
                          {/* NUMBER */}
                          <p className="mb-3 font-heading text-[52px] md:text-[72px] font-semibold leading-none tracking-[-0.02em] bg-gradient-to-b from-[#9CA3AF] via-[#4B5563] to-[#111827] bg-clip-text text-transparent opacity-25 select-none pointer-events-none">
                            {step.step}
                          </p>

                          <h3 className="text-[18px] font-medium text-[#EAEAEA]">
                            {step.title}
                          </h3>

                          <p className="mt-2 text-[13px] leading-[1.8] text-[#8B8B92]">
                            {step.description}
                          </p>
                        </>
                      )}
                    </div>

                    {/* DOT */}
                    <div className="absolute left-[16px] top-3 h-[6px] w-[6px] rounded-full bg-[#374151]/70 md:left-1/2 md:-translate-x-1/2" />
                  </div>
                );
              })}
            </div>
          </div>

          {/* CLOSING */}
          <div className="mt-20 flex justify-end">
            <div className="max-w-[440px] text-right">
              <div className="mb-5 ml-auto h-[1px] w-[50px] bg-white/20" />

              <p className="text-[13px] leading-[1.8] text-[#6B6B73]">
                Strong operational systems are built through structured
                planning, scalable architecture, careful implementation, and
                continuous validation across every stage of development.
              </p>

              <button
                onClick={() => navigate("/book-call")}
                className="
  mt-5
  flex
  items-center
  gap-2
  w-fit
  border-b
  border-red-600
  pb-1
  text-[14px]
  text-[#EAEAEA]
  transition-all
  duration-300
  hover:border-white
  "
              >
                <FiPhone className="text-[15px] shrink-0" /> <span></span>
                <span>Book a Strategy Call </span>
              </button>
            </div>
          </div>
        </div>
      </section>
      {/* BUSINESS IMPACT */}
      <section className="bg-[#F5F1EA] px-6 py-[100px] text-black md:px-10 md:py-[120px] lg:px-16 lg:py-[140px]">
        <div className="mx-auto max-w-[1280px]">
          {/* TOP AREA */}
          <div className="grid gap-14 lg:grid-cols-12 lg:gap-20">
            {/* LEFT */}
            <div className="lg:col-span-5">
              {/* LABEL */}
              <span className="text-[11px] uppercase tracking-[0.28em] text-red-600/45">
                {serviceData.businessImpact.title}
              </span>

              {/* HEADING */}
              <h2 className="mt-6 max-w-[500px] font-heading text-[36px] font-semibold leading-[1.02] tracking-[-0.055em] text-black sm:text-[46px] md:text-[54px] lg:text-[60px]">
                Operational Improvements That Extend Across The Business.
              </h2>

              {/* POINTS */}
              <div className="mt-14 space-y-6 md:mt-16">
                {serviceData.businessImpact.points.map((point) => (
                  <div key={point} className="flex items-start gap-4">
                    {/* RED ACCENT */}
                    <div className="mt-[12px] h-[2px] w-[28px] shrink-0 bg-red-600/70" />

                    {/* TEXT */}
                    <p className="text-[16px] leading-[1.8] tracking-[-0.02em] text-black/76 md:text-[18px]">
                      {point}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* RIGHT */}
            <div className="lg:col-span-6 lg:col-start-7">
              <div className="lg:pt-14">
                <p className="max-w-[680px] text-[16px] leading-[1.95] text-black/62 md:text-[18px]">
                  {serviceData.businessImpact.description}
                </p>

                {/* CLOSING */}
                <div className="mt-20 border-t border-black/8 pt-8 md:mt-24">
                  <p className="max-w-[560px] text-[14px] leading-[1.9] text-black/42 md:text-[15px]">
                    Well-structured digital systems improve operational
                    visibility, streamline collaboration, and create scalable
                    infrastructure that supports long-term organizational
                    growth.
                  </p>

                  {/* CTA */}
                  <button
                    onClick={() => navigate("/pricing")}
                    className="
  mt-8
  flex
  items-center
  gap-2
  w-fit
  border-b
  border-red-600
  pb-1
  text-[14px]
  font-medium
  text-black
  transition-all
  duration-300
  hover:border-black/40
  "
                  >
                    <FiDollarSign className="text-[15px] shrink-0" />
                    <span>Investment Guide</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* DIFFERENCE */}
      <section className="bg-[#0B0B0C] px-6 py-[100px] text-white md:px-10 md:py-[120px] lg:px-16 lg:py-[140px]">
        <div className="mx-auto max-w-[1280px]">
          {/* TOP */}
          <div className="grid gap-14 lg:grid-cols-12 lg:gap-20">
            {/* LEFT */}
            <div className="lg:col-span-5">
              {/* LABEL */}
              <span className="text-[11px] uppercase tracking-[0.28em] text-red-600/45">
                Difference
              </span>

              {/* TITLE */}
              <h2 className="mt-6 max-w-[500px] font-heading text-[36px] font-semibold leading-[1.02] tracking-[-0.055em] text-white sm:text-[46px] md:text-[54px] lg:text-[60px]">
                {serviceData.difference.title}
              </h2>
            </div>

            {/* RIGHT */}
            <div className="space-y-8 lg:col-span-6 lg:col-start-7">
              <p className="max-w-[680px] text-[16px] leading-[1.9] text-white/62 md:text-[17px]">
                {serviceData.difference.description}
              </p>

              <p className="max-w-[640px] text-[15px] leading-[1.9] text-white/46 md:text-[16px]">
                {serviceData.difference.description2}
              </p>
            </div>
          </div>

          {/* POINTS */}
          <div className="mt-20 border-t border-white/8">
            <div className="grid md:grid-cols-2">
              {serviceData.difference.points.map((point, index) => (
                <div
                  key={point}
                  className={`
            flex items-start gap-4 py-6 md:py-8

            ${
              index % 2 === 0
                ? "md:pr-8"
                : "md:border-l md:border-white/8 md:pl-8"
            }

            ${
              index < serviceData.difference.points.length - 2
                ? "border-b border-white/8"
                : ""
            }
          `}
                >
                  {/* RED DOT */}
                  <div className="mt-[10px] h-[5px] w-[5px] shrink-0 rounded-full bg-red-600/70" />

                  {/* TEXT */}
                  <p className="text-[16px] leading-[1.8] tracking-[-0.02em] text-white/78 md:text-[18px]">
                    {point}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* BOTTOM */}
          <div className="mt-20 flex flex-col gap-8 border-t border-white/8 pt-8 md:flex-row md:items-end md:justify-between">
            <button
              onClick={() => navigate("/book-call")}
              className="
  flex
  items-center
  gap-2
  w-fit
  border-b
  border-red-600
  pb-1
  text-[14px]
  font-medium
  text-white
  transition-all
  duration-300
  hover:border-white/40
  "
            >
              <FiTrendingUp className="text-[15px] shrink-0" />
              <span>Begin Your Growth Journey </span>
            </button>

            <p className="max-w-[560px] text-[14px] leading-[1.9] text-white/38 md:text-right md:text-[15px]">
              Strong digital systems are built by aligning operational
              understanding, technical architecture, and long-term scalability
              into one structured implementation approach.
            </p>
          </div>
        </div>
      </section>
      {/* IDEAL FOR */}
      <section className="relative overflow-hidden bg-[#F5F1EA] px-6 py-[150px] md:px-10 lg:px-16">
        {/* BG GLOW */}
        <div className="absolute left-[20%] top-[20%] h-[500px] w-[500px] rounded-full bg-red-500/[0.03] blur-[120px]" />

        {/* NOISE */}
        <div
          className="
    absolute inset-0 opacity-[0.02]
    [background-image:radial-gradient(#000_0.7px,transparent_0.7px)]
    [background-size:18px_18px]
  "
        />

        <div className="relative mx-auto max-w-[1180px]">
          {/* TOP */}
          <div className="grid gap-16 lg:grid-cols-12">
            {/* LEFT */}
            <div className="lg:col-span-3">
              <div className="sticky top-24">
                <span
                  className="
            text-[11px]
            uppercase
            tracking-[0.35em]
            text-red-600/70
          "
                >
                  {serviceData.idealFor.title}
                </span>

                <div className="mt-6 h-[70px] w-[1px] bg-gradient-to-b from-red-600 to-transparent" />
              </div>
            </div>

            {/* RIGHT */}
            <div className="lg:col-span-9">
              <h2
                className="
          max-w-[850px]
          font-heading
          text-[42px]
          font-semibold
          leading-[0.95]
          tracking-[-0.065em]
          sm:text-[54px]
          md:text-[64px]
          lg:text-[76px]
        "
              >
                Built around
                <span className="text-black/35">
                  {" "}
                  real operational systems,
                </span>
                scalable workflows and digital infrastructure.
              </h2>
            </div>
          </div>

          {/* ITEMS */}
          <div className="mt-[90px]">
            {serviceData.idealFor.points.map((point, index) => {
              const isRight = index % 2 !== 0;

              return (
                <div
                  key={point}
                  className="
        relative
        overflow-hidden
        border-t
        border-black/[0.06]
        py-10 md:py-12
        "
                >
                  <div
                    className={`
          flex
          ${isRight ? "justify-end" : "justify-start"}
          `}
                  >
                    <div
                      className={`
            relative
            w-[80%]
            ${isRight ? "text-right" : "text-left"}
            `}
                    >
                      {/* GHOST TEXT */}
                      <div
                        className={`
              absolute
              top-[-6px]
              whitespace-nowrap
              font-heading
              text-[34px]
              sm:text-[48px]
              md:text-[60px]
              font-semibold
              leading-none
              tracking-[-0.05em]
              text-black/[0.022]

              ${isRight ? "-left-[25px]" : "-right-[25px]"}
              `}
                      >
                        {point}
                      </div>

                      {/* MAIN TEXT */}
                      <h3
                        className="
              relative
              font-heading
              text-[22px]
              sm:text-[26px]
              md:text-[34px]
              font-semibold
              leading-[1]
              tracking-[-0.045em]
              text-black/80
              "
                      >
                        {point}
                      </h3>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* FOOTER */}

          <div className="mt-20 flex flex-col gap-8 border-t border-black/[0.06] pt-8 sm:flex-row sm:items-end sm:justify-between">
            <p
              className="
    max-w-[260px]
    text-[13px]
    leading-[1.8]
    text-black/45
    "
            >
              Structured around operational efficiency, scalable workflows and
              long-term digital systems built for sustainable growth.
            </p>

            <button
              onClick={() => navigate("/book-call")}
              className="
    flex
    items-center
    gap-4
    text-[14px]
    font-medium
    shrink-0
    "
            >
              <span className="border-b border-red-600 pb-[2px]">
                Move Your Business Forward
              </span>
              →
            </button>
          </div>
        </div>
      </section>
      {/* Full width form section */}
      <section>
        <FullWidthContactForm />
      </section>
      {/* FAQ'S */}
      <section className="bg-[#0B0B0C] px-6 py-[90px] text-white md:px-10 md:py-[110px] lg:px-16">
        <div className="mx-auto max-w-[1280px]">
          <div className="grid gap-14 lg:grid-cols-12 lg:gap-20">
            {/* LEFT */}
            <div className="lg:col-span-4">
              <div className="lg:sticky lg:top-24">
                <span className="text-[11px] uppercase tracking-[0.28em] text-red-600/60">
                  FAQ
                </span>

                <h2
                  className="
          mt-6
          max-w-[460px]
          font-heading
          text-[34px]
          font-semibold
          leading-[1.02]
          tracking-[-0.055em]
          text-white
          sm:text-[42px]
          md:text-[50px]
          "
                >
                  {serviceData.faq.title}
                </h2>

                <p
                  className="
          mt-6
          max-w-[380px]
          text-[14px]
          leading-[1.9]
          text-white/50
          "
                >
                  Questions around architecture, scalability, development
                  process, and implementation.
                </p>
              </div>
            </div>

            {/* RIGHT */}
            <div className="lg:col-span-7 lg:col-start-6">
              <div className="border-t border-white/8">
                {serviceData.faq.questions.map((item, index) => (
                  <details
                    key={index}
                    className="
              group
              border-b
              border-white/8
              py-6
              "
                  >
                    <summary
                      className="
                flex
                cursor-pointer
                list-none
                items-start
                justify-between
                gap-6
                "
                    >
                      <div className="flex gap-4">
                        <h3
                          className="
                  text-[17px]
                  md:text-[18px]
                  font-medium
                  leading-[1.6]
                  tracking-[-0.02em]
                  text-white/82
                  "
                        >
                          {item.question}
                        </h3>
                      </div>

                      {/* ICON */}
                      <span
                        className="
                shrink-0
                text-[22px]
                leading-none
                text-red-600
                transition-transform
                duration-300
                group-open:rotate-45
                "
                      >
                        +
                      </span>
                    </summary>

                    {/* ANSWER */}
                    <div
                      className="
              overflow-hidden
              pl-10
              pt-5
              "
                    >
                      <p
                        className="
                max-w-[720px]
                text-[14px]
                leading-[1.9]
                text-white/45
                "
                      >
                        {item.answer}
                      </p>
                    </div>
                  </details>
                ))}
              </div>

              {/* FOOTER */}
              <div className="mt-8 pt-8">
                <div className="max-w-[420px]">
                  <p
                    className="
            text-[13px]
            leading-[1.8]
            text-white/35
            "
                  >
                    Need more clarity around workflows, infrastructure or
                    implementation?
                  </p>

                  <button
                    onClick={() => navigate("/book-call")}
                    className="
            mt-5
            border-b
            border-red-600
            pb-1
            text-[14px]
            "
                  >
                    ↗ <span> </span>
                    Take the Next Step
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*CTA */}\
      <section className="relative overflow-hidden bg-[#F5F1EA] px-6 py-[90px] text-black md:px-10 md:py-[110px] lg:px-16">
        {/* SOFT GLOW */}
        <div className="absolute left-1/2 top-1/2 h-[450px] w-[450px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-red-600/[0.02] blur-[100px]" />

        <div className="relative mx-auto max-w-[1180px]">
          {/* TOP LINE */}
          {/* <div className="mb-10 h-px w-full bg-gradient-to-r from-transparent via-black/10 to-transparent" /> */}

          <div className="flex flex-col items-center text-center">
            {/* LABEL */}
            <span className="text-[11px] uppercase tracking-[0.28em] text-red-600/70">
              Start Building
            </span>

            {/* TITLE */}
            <h2
              className="
        mt-6
        max-w-[900px]
        font-heading
        text-[34px]
        font-semibold
        leading-[1]
        tracking-[-0.055em]
        text-black
        sm:text-[42px]
        md:text-[52px]
        lg:text-[58px]
        "
            >
              {serviceData.cta.title}
            </h2>

            {/* DESCRIPTION */}
            <p
              className="
        mt-6
        max-w-[620px]
        text-[14px]
        leading-[1.9]
        text-black/50
        md:text-[15px]
        "
            >
              {serviceData.cta.description}
            </p>

            {/* CTA'S */}
            <div className="mt-12 flex flex-col gap-6 sm:flex-row sm:items-center">
              {/* PRIMARY */}
              <button
                onClick={() => navigate("/book-call")}
                className="
    flex
    items-center
    gap-2
    w-fit
    border-b
    border-red-600
    pb-1
    text-[15px]
    font-medium
    text-black
    "
              >
                <FiTarget className="text-[15px] shrink-0" />
                <span>Discuss Your Business Goals </span>
              </button>

              {/* SECONDARY */}
              <button
                onClick={() => navigate("/pricing")}
                className="
    flex
    items-center
    gap-2
    w-fit
    border-b
    border-black/15
    pb-1
    text-[15px]
    text-black/55
    "
              >
                <FiDollarSign className="text-[15px] shrink-0" />
                <span>Explore Investment Levels </span>
              </button>
            </div>
          </div>

          {/* BOTTOM LINE */}
          <div className="mt-14 h-px w-full bg-gradient-to-r from-transparent via-black/10 to-transparent" />
        </div>
      </section>
    </>
  );
};

export default ServiceComp;
