
import React from "react";
import { Instagram, Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
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
        </div>
      </div>
    </footer>
  );
};

export default Footer;
