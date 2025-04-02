import React from "react";

const Hero = () => {
  return (
    <div className="relative h-screen flex items-center overflow-hidden">
      {/* Video Background */}
      <video 
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay 
        loop 
        muted 
        playsInline
      >
        <source src="/video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-40"></div>
    
      {/* Content Container */}
      <div className="container mx-auto px-4 relative z-20 w-full h-full flex flex-col justify-between">
        {/* Middle Section - Main Content */}
        <div className="flex-grow flex flex-col justify-center pt-8">
          <div className="mb-8">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-3">
              Colosseum Strength & MMA
            </h1>
            <p className="text-white text-xl md:text-2xl">
              Chennai's First Anytime MMA & Strength Training Gym
            </p>
          </div>
          
          {/* Buttons with proper spacing */}
          <div className="pb-8 text-left "> {/* Increased gap from gap-4 to gap-8 */}
            <button className="
              bg-transparent 
              text-white 
              border-2 border-white 
              font-bold 
              py-3 px-8
              rounded-full 
              hover:bg-white hover:bg-opacity-20 
              transition-all
              shadow-lg
              hover:shadow-xl
              text-lg
            ">
              Contact us
            </button>
            
            <button className="
              bg-black 
              text-white 
              font-bold 
              py-3 px-8
              rounded-full 
              hover:bg-gray-800 
              transition-all
              shadow-lg
              hover:shadow-xl
              text-lg
              border-2 border-black
            ">
              More Info
            </button>
          </div>
        </div>
        
        {/* Bottom Section - Who We Are */}
        <div className="pb-8 text-right">
          <button className="
            bg-white text-black font-bold py-3 px-6 rounded-full
            hover:bg-gray-200 transition-all shadow-lg hover:shadow-xl text-lg
          ">
            Who We Are
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;