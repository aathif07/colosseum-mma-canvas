
import React, { useEffect, useRef } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  // Reference for sections to implement smooth scrolling
  const homeRef = useRef<HTMLDivElement>(null);
  const servicesRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  const scrollToSection = (sectionRef: React.RefObject<HTMLDivElement>) => {
    if (sectionRef.current) {
      sectionRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-white text-gym-dark">
      <Navbar 
        onHomeClick={() => scrollToSection(homeRef)}
        onServicesClick={() => scrollToSection(servicesRef)}
        onContactClick={() => scrollToSection(contactRef)}
      />
      
      <div ref={homeRef}>
        <Hero />
      </div>
      
      <div ref={servicesRef}>
        <Services />
      </div>
      
      <div ref={contactRef}>
        <Contact />
      </div>
      
      <Footer />
    </div>
  );
};

export default Index;
