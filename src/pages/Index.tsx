
import React, { useEffect, useRef, useState } from "react";
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
  const footerRef = useRef<HTMLDivElement>(null);

  const [currentSection, setCurrentSection] = useState(0);

  const sections = [homeRef, servicesRef, contactRef, footerRef];

  const scrollToSection = (sectionRef: React.RefObject<HTMLDivElement>) => {
    if (sectionRef.current) {
      sectionRef.current.scrollIntoView({ 
        behavior: "smooth", 
        block: "start" 
      });
    }
  };

  // Auto-scrolling functionality
  useEffect(() => {
    const handleAutoScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;

      // Find the current section based on scroll position
      const sectionIndex = sections.findIndex((section, index) => {
        if (!section.current) return false;
        const sectionTop = section.current.offsetTop;
        const sectionHeight = section.current.offsetHeight;
        
        return (
          scrollPosition >= sectionTop - windowHeight / 2 && 
          scrollPosition < sectionTop + sectionHeight - windowHeight / 2
        );
      });

      if (sectionIndex !== -1 && sectionIndex !== currentSection) {
        setCurrentSection(sectionIndex);
        
        // Automatically scroll to next section if user is near bottom of current section
        if (
          sections[sectionIndex].current && 
          sectionIndex < sections.length - 1
        ) {
          const currentSectionElement = sections[sectionIndex].current;
          const scrollPercentage = 
            (scrollPosition - currentSectionElement.offsetTop) / 
            currentSectionElement.offsetHeight;

          if (scrollPercentage > 0.7) {
            scrollToSection(sections[sectionIndex + 1]);
          }
        }
      }
    };

    // Debounce scroll event
    let scrollTimeout: number;
    const debouncedHandleScroll = () => {
      if (scrollTimeout) clearTimeout(scrollTimeout);
      scrollTimeout = window.setTimeout(handleAutoScroll, 200);
    };

    window.addEventListener('scroll', debouncedHandleScroll);

    return () => {
      window.removeEventListener('scroll', debouncedHandleScroll);
      if (scrollTimeout) clearTimeout(scrollTimeout);
    };
  }, [currentSection]);

  return (
    <div className="min-h-screen bg-white text-gym-dark">
      <Navbar 
        onHomeClick={() => scrollToSection(homeRef)}
        onServicesClick={() => scrollToSection(servicesRef)}
        onContactClick={() => scrollToSection(contactRef)}
      />
      
      <div ref={homeRef} className="scroll-section">
        <Hero />
      </div>
      
      <div ref={servicesRef} className="scroll-section">
        <Services />
      </div>
      
      <div ref={contactRef} className="scroll-section">
        <Contact />
      </div>
      
      <div ref={footerRef} className="scroll-section">
        <Footer />
      </div>
    </div>
  );
};

export default Index;

