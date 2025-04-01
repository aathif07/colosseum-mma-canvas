
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

  // Auto-scrolling functionality
  useEffect(() => {
    // Function to handle automatic scrolling
    const handleAutoScroll = () => {
      const sections = [homeRef, servicesRef, contactRef];
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.body.scrollHeight;
      
      // If user is near the bottom, don't interfere with their scrolling
      if (scrollPosition + windowHeight >= documentHeight - 100) {
        return;
      }
      
      // Determine which section to scroll to based on current position
      for (let i = 0; i < sections.length; i++) {
        const section = sections[i].current;
        if (!section) continue;
        
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        
        // If we're in the current section but not at the next one yet
        if (
          scrollPosition >= sectionTop - 100 && 
          scrollPosition < sectionTop + sectionHeight - 100
        ) {
          // If we're near the bottom of this section, scroll to the next one
          if (scrollPosition > sectionTop + sectionHeight / 2) {
            if (i < sections.length - 1 && sections[i + 1].current) {
              scrollToSection(sections[i + 1]);
            }
            break;
          }
        }
      }
    };

    // Detect scroll end for auto-scrolling to the next section
    let scrollTimeout: number | null = null;
    const handleScrollEnd = () => {
      if (scrollTimeout) {
        clearTimeout(scrollTimeout);
      }
      scrollTimeout = window.setTimeout(handleAutoScroll, 800); // Adjust timing as needed
    };

    // Add event listener for scroll
    window.addEventListener('scroll', handleScrollEnd);

    // Clean up on component unmount
    return () => {
      window.removeEventListener('scroll', handleScrollEnd);
      if (scrollTimeout) {
        clearTimeout(scrollTimeout);
      }
    };
  }, []);

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
      
      <Footer />
    </div>
  );
};

export default Index;
