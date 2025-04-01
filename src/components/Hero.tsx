
import React from "react";
import { ArrowDown } from "lucide-react";

const Hero = () => {
  return (
    <div className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Video Background */}
      <video 
        className="video-background"
        autoPlay 
        loop 
        muted 
        playsInline
      >
        <source src="https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4" type="video/mp4" />
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
          <button className="btn-primary">
            Join Now
          </button>
          <button className="bg-transparent text-white border-2 border-white font-bold py-3 px-6 rounded-md hover:bg-white hover:bg-opacity-10 transition-all">
            Learn More
          </button>
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
