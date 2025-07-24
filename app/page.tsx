"use client"
import React from 'react'; 
import PresentationSection from "@/components/PresentationSection"
import ServicesSection from "@/components/ServicesSection"
import ValuesSection from "@/components/ValuesSection"
//import WhyChooseUsSection from "@/components/WhyChooseUsSection"
//import TrustedClientsSection from "@/components/TrustedClientsSection"
import CtaSection from "@/components/CtaSection"
import HeroSection from "@/components/HeroSection"

const Home = () => {
  

 

  return (
    <div className="relative overflow-hidden">
        <HeroSection />

            <PresentationSection />
      {/* Nos Services Clés */}
              <ServicesSection />
      {/* Nos Valeurs Fondatrices */}
     <ValuesSection />

      {/* Pourquoi Choisir Novatrix */}
     {/**
      * <WhyChooseUsSection />
      * 
      */} 

      {/* Avis Clients & Partenaires */}
      {/**
       * 
       * <TrustedClientsSection />
       * 
       */}
      

      {/* CTA Finale */}
      <CtaSection />
    </div>
  );
};

export default Home;