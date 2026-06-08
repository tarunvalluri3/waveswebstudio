import React from "react";
import Hero from "../components/home/Hero";
import TrustSection from "../components/home/TrustSection";
import HomeServices from "../components/home/HomeServices";
import TechStack from "../components/TechStack";
import Process from "../components/Process";
import Capabilities from "../components/Capabilities";
import HomeFaq from "../components/home/HomeFaq";
import Features from "../components/home/Features";
import Industries from "../components/Industries";
import ConsultationSection from "../components/ConsultationSection";
import FullWidthContactForm from "../components/FullWidthContactForm";
import SEO from "../components/SEO";

const Home = () => {
  return (
    <>
      <SEO
        title="Waves Web Studio | Premium Web Design & Development"
        description="Custom websites, web applications, SEO, e-commerce solutions, and digital experiences designed to help businesses grow through modern design, development, and strategy."
      />
      <Hero />
      <TrustSection />
      <HomeServices />
      <Process />
      <ConsultationSection />
      <Capabilities />
      <Features />
      <TechStack />
      <Industries />
      <FullWidthContactForm />
      {/* Pricing CTA */}
      <HomeFaq />
      {/* Footer */}
    </>
  );
};

export default Home;
