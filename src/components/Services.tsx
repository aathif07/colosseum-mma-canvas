
import React from "react";

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

// Advantages data
const advantages = [
  {
    icon: "🔥",
    text: "Anytime MMA & Strength Training – Train at your convenience, no fixed schedules."
  },
  {
    icon: "🥋",
    text: "Pro Fighter Coaching – Learn from experienced professionals."
  },
  {
    icon: "👊",
    text: "Self-Defense & Combat Training – Essential skills for everyone, especially women."
  },
  {
    icon: "💪",
    text: "Strength Training & Functional Training Over Machines – Build real strength, agility, and endurance."
  },
  {
    icon: "👦",
    text: "Kids Batch (6-16 Years) – Instilling discipline, confidence, and strength from a young age."
  },
  {
    icon: "⚡",
    text: "Recovery & Rehab – Keep your body in peak condition."
  },
  {
    icon: "🥗",
    text: "Nutrition Plans – MMA-focused diets for peak performance."
  },
  {
    icon: "🧼",
    text: "Hygiene & Cleanliness – A top priority for a safe training environment."
  }
];

const Services = () => {
  return (
    <section className="py-20 bg-gym-light">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="section-title">Our Services</h2>
          <p className="text-lg max-w-3xl mx-auto">
            We are not your regular gym; we specialize in combat sports, strength training, and functional fitness.
            Whether you're an aspiring fighter, a fitness enthusiast, or someone looking to master self-defense,
            our facility is designed to push your limits.
          </p>
        </div>

        {/* Why Choose Us */}
        <div className="mb-20">
          <h3 className="section-subtitle text-center">Why Choose Us?</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {advantages.map((advantage, index) => (
              <div key={index} className="bg-white p-5 rounded-lg shadow-sm border-t-2 border-gym-red">
                <div className="text-3xl mb-2">{advantage.icon}</div>
                <p className="text-gym-dark">{advantage.text}</p>
              </div>
            ))}
          </div>
        </div>
        
        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <div className="text-4xl mb-3">{service.icon}</div>
              <h3 className="text-xl font-bold mb-3">{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
        
        {/* CTA */}
        <div className="text-center mt-16">
          <p className="text-xl mb-6">Are you ready to train like a fighter? Join the movement today!</p>
          <button className="btn-primary">
            Get Started
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;
