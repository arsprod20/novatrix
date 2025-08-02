"use client"
import React from 'react';
import PresentationSection from "@/components/PresentationSection"
import ServicesSection from "@/components/ServicesSection"
import ValuesSection from "@/components/ValuesSection"
import CtaSection from "@/components/CtaSection"
import HeroSection from "@/components/HeroSection"


const Home = () => {

  return (
    <div className="relative overflow-hidden">
      <HeroSection />
      <PresentationSection />
      <ServicesSection />
      <ValuesSection />
      <CtaSection />
    </div>
  );
};

export default Home;
