
import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gym-dark text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h3 className="text-xl font-bold">Colosseum Strength & MMA</h3>
            <p className="text-sm mt-1">Chennai's First Anytime MMA & Strength Training Gym</p>
          </div>
          
          <div className="text-sm">
            <p>&copy; {currentYear} Colosseum Strength & MMA. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
