import React from "react";
import { Link } from "react-router-dom";

// Service data
const services = [
  {
    icon: "🥋",
    title: "MMA Training (Anytime Access)",
    description: "Train like a pro. We offer MMA training for all levels—from beginners to those looking to go pro. Unlike traditional gyms, we have an open training system where you can walk in and train whenever you're free."
  },
  {
    icon: "💪",
    title: "Strength & Functional Training",
    description: "Forget machines—real strength is built through movement. Our training programs are designed for fighters, athletes, and individuals looking for explosive power, endurance, and agility."
  },
  {
    icon: "👊",
    title: "Self-Defense & Combat Training",
    description: "In today's world, self-defense is a necessity. Learn striking, grappling, and real-world combat techniques that could be lifesaving. Especially important for women."
  },
  {
    icon: "🧒",
    title: "Kids MMA & Strength Training (Ages 6-16)",
    description: "Confidence. Discipline. Strength. Our kids' program builds strong, focused individuals who can defend themselves and grow into powerful athletes."
  },
  {
    icon: "🔥",
    title: "Personal Training by Pro Fighters",
    description: "Get one-on-one training from professional fighters. Perfect for those who want a tailored approach to MMA, strength training, and weight loss."
  },
  {
    icon: "⚡",
    title: "Recovery & Rehab",
    description: "We help our fighters and members recover faster and train harder with mobility drills, injury prevention techniques, and strength-building rehab programs."
  },
  {
    icon: "🥗",
    title: "Custom Nutrition Plans",
    description: "Fuel your body the right way. We provide customized diet plans designed for combat athletes, strength training, and fat loss."
  }
];

const Services = () => {
  return (
    <section className="py-20 bg-gym-light">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="section-title text-black">Our Services</h2>
          <p className="text-lg max-w-3xl mx-auto text-black">
            We are not your regular gym; we specialize in combat sports, strength training, and functional fitness.
            Whether you're an aspiring fighter, a fitness enthusiast, or someone looking to master self-defense,
            our facility is designed to push your limits.
          </p>
        </div>
       
        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md border-t-2 border-black hover:shadow-lg transition-all">
              <div className="text-4xl mb-3">{service.icon}</div>
              <h3 className="text-xl font-bold mb-3 text-black">{service.title}</h3>
              <p className="text-black">{service.description}</p>
            </div>
          ))}
        </div>
       
        {/* CTA */}
        <div className="text-center mt-16">
          <p className="text-xl mb-6 text-black">Are you ready to train like a fighter? Join the movement today!</p>
          <Link to="/contact">
            <button className="bg-black text-white font-bold py-3 px-6 rounded-md hover:bg-gray-800 transition-all">
              Get Started
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Services;
