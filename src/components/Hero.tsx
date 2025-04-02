import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  // Advantages data
  const advantages = [
    {
      icon: "🔥",
      title: "Anytime MMA & Strength Training",
      description: "Train at your convenience with no fixed schedules. Our gym is open anytime for your flexibility."
    },
    {
      icon: "🥋",
      title: "Pro Fighter Coaching",
      description: "Learn from experienced professionals and master the techniques used by top MMA fighters."
    },
    {
      icon: "👊",
      title: "Self-Defense & Combat Training",
      description: "Develop essential combat and self-defense skills, especially designed for personal safety and empowerment."
    },
    {
      icon: "💪",
      title: "Strength & Functional Training",
      description: "Build real strength, agility, and endurance with functional workouts instead of relying on machines."
    },
    {
      icon: "👦",
      title: "Kids Batch (6-16 Years)",
      description: "Instill discipline, confidence, and physical strength in children through structured martial arts training."
    },
    {
      icon: "⚡",
      title: "Recovery & Rehab",
      description: "Enhance mobility, prevent injuries, and recover faster with expert rehab programs and strength-building techniques."
    },
    {
      icon: "🥗",
      title: "Custom Nutrition Plans",
      description: "Optimize your performance with personalized nutrition plans tailored for MMA fighters, strength training, and fat loss."
    },
    {
      icon: "🧼",
      title: "Hygiene & Cleanliness",
      description: "Train in a clean, sanitized environment with strict hygiene standards for your safety and comfort."
    }
  ];

  return (
    <div>
      {/* Hero Section */}
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
            
            {/* Buttons with increased size and proper links */}
            <div className="flex gap-8 pb-8 text-left">
              <Link to="/contact">
                <button className="
                  bg-transparent
                  text-white
                  border-2 border-white
                  font-bold
                  py-4 px-10
                  rounded-full
                  hover:bg-white hover:bg-opacity-20
                  transition-all
                  shadow-lg
                  hover:shadow-xl
                  text-xl
                ">
                  Contact Us
                </button>
              </Link>
              
              <Link to="/services">
                <button className="
                  bg-black
                  text-white
                  font-bold
                  py-4 px-10
                  rounded-full
                  hover:bg-gray-800
                  transition-all
                  shadow-lg
                  hover:shadow-xl
                  text-xl
                  border-2 border-black
                ">
                  More Info
                </button>
              </Link>
            </div>
          </div>

          {/* Bottom Section - Who We Are */}
          <div className="pb-8 text-right">
            <Link to="/contact">
              <button className="
                bg-white text-black font-bold py-4 px-10 rounded-full
                hover:bg-gray-200 transition-all shadow-lg hover:shadow-xl text-xl
              ">
                Who We Are
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* Welcome Message Section */}
      <div className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-5xl">
          <div className="
            bg-black
            p-12
            text-white
            border-2 border-black
          ">
            <h2 className="
              text-3xl md:text-4xl
              font-bold
              mb-8
              text-center
              uppercase
              tracking-wider
            ">
              Welcome to Colosseum Strength
            </h2>
            
            <div className="
              text-lg md:text-xl
              leading-relaxed
              space-y-6
              font-medium
              text-center
            ">
              <p>
                The <span className="font-bold">only gym in Chennai</span> offering <span className="font-bold">24/7 MMA Training</span> with no batch restrictions.
              </p>
              
              <p>
                A <span className="font-bold">combat sports facility</span> specializing in MMA, strength training, and functional fitness.
              </p>
              
              <p>
                Designed for <span className="font-bold">fighters</span>, <span className="font-bold">athletes</span>, and those seeking <span className="font-bold">real self-defense skills</span>.
              </p>
            </div>

            <div className="mt-12 flex justify-center">
              <div className="w-32 h-1 bg-white"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Why Choose Us Section */}
      <div className="bg-white py-20">
        <div className="container mx-auto px-4">
          <h3 className="text-center text-4xl font-bold mb-16 text-black uppercase tracking-wider">Why Choose Us?</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {advantages.map((advantage, index) => (
              <div
                key={index}
                className="
                  bg-white
                  p-8
                  border-2 border-black
                  flex flex-col
                  h-full
                  hover:bg-black hover:text-white
                  transition-all
                  duration-300
                  group
                  cursor-pointer
                "
              >
                <div className="text-5xl mb-5 text-center group-hover:text-white">{advantage.icon}</div>
                <h3 className="text-xl font-bold mb-3 text-center uppercase tracking-wider">{advantage.title}</h3>
                <p className="text-gray-600 text-center group-hover:text-gray-300">{advantage.description}</p>
                
                {/* Added "Learn More" link */}
                <div className="mt-auto pt-4 text-center">
                  <Link to="/services">
                    <span className="inline-block mt-2 font-bold text-black group-hover:text-white underline">
                      Learn More
                    </span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
          
          {/* Added CTA button */}
          <div className="text-center mt-16">
            <Link to="/services">
              <button className="
                bg-black 
                text-white 
                font-bold 
                py-4 px-10
                rounded-full 
                hover:bg-gray-800 
                transition-all
                shadow-lg
                hover:shadow-xl
                text-xl
              ">
                Explore All Services
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
