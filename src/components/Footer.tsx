import React from "react";
<<<<<<< HEAD
import { ArrowDown } from "lucide-react";
=======
import { Instagram, Phone, Mail, MapPin } from "lucide-react";
>>>>>>> fbd93619af3a41cea646e4d2845caf647a86eda2

const Hero = () => {
  return (
<<<<<<< HEAD
    <div className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Video Background */}
      <video 
        className="video-background"
        autoPlay 
        loop 
        muted 
        playsInline
      >
        <source src="" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      
      {/* Overlay */}
      <div className="video-overlay"></div>
      
      {/* Content */}
      <div className="container mx-auto px-4 relative z-20 text-center">
        <h1 className="text-5xl md:text-6xl font-bold text-white mb-4 animate-fade-down">
          Colosseum Strength & MMA
        </h1>
        <h2 className="text-xl md:text-2xl text-white mb-8 animate-fade-down" style={{ animationDelay: "0.2s" }}>
          Chennai's First Anytime MMA & Strength Training Gym
        </h2>
        <p className="text-white text-lg max-w-3xl mx-auto mb-10 animate-fade-down" style={{ animationDelay: "0.4s" }}>
          Welcome to Colosseum Strength & MMA – the only gym in Chennai that offers Anytime MMA Training. 
          No batch restrictions, no waiting—just walk in and train when you want.
        </p>
        <div className="flex flex-col md:flex-row justify-center gap-4 animate-fade-down" style={{ animationDelay: "0.6s" }}>
          <button className="bg-black text-white font-bold py-3 px-6 rounded-md hover:bg-gray-800 transition-all">
            Join Now
          </button>
          <button className="bg-transparent text-white border-2 border-white font-bold py-3 px-6 rounded-md hover:bg-white hover:bg-opacity-10 transition-all">
            Learn More
          </button>
=======
    <footer className="bg-gym-dark text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h3 className="text-xl font-bold">Colosseum Strength & MMA</h3>
            <p className="text-sm mt-1">Chennai's First Anytime MMA & Strength Training Gym</p>
            <div className="flex items-center mt-3 space-x-4">
              <a href="https://www.instagram.com/colosseum_strength_mma/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-gym-red transition-colors">
                <Instagram size={20} />
              </a>
              <a href="tel:+917401070866" 
                className="hover:text-gym-red transition-colors">
                <Phone size={20} />
              </a>
              <a href="mailto:colosseumgym2110@gmail.com" 
                className="hover:text-gym-red transition-colors">
                <Mail size={20} />
              </a>
            </div>
          </div>
          
          <div className="text-sm mb-6 md:mb-0 md:text-right">
            <div className="flex items-center justify-center md:justify-end mb-2">
              <MapPin size={16} className="mr-1" />
              <p>No.13 thiruporur road, Hasthinapuram, Chromepet, Chennai 600064</p>
            </div>
            <p>&copy; {currentYear} Colosseum Strength & MMA. All rights reserved.</p>
          </div>
>>>>>>> fbd93619af3a41cea646e4d2845caf647a86eda2
        </div>
      </div>
      
      {/* Scroll down indicator */}
      <div className="absolute bottom-8 left-0 right-0 flex justify-center z-20 animate-bounce">
        <ArrowDown className="text-white" size={32} />
      </div>
    </div>
  );
};

export default Hero;
