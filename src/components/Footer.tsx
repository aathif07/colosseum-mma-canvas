import React from "react";
import { Link } from "react-router-dom";
import { Instagram, MessageSquare, Phone, Mail, MapPin } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa"; // Import WhatsApp icon

const Footer = () => {
  return (
    <footer className="bg-black text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About */}
          <div>
            <h3 className="text-xl font-bold mb-4">COLOSSEUM STRENGTH & MMA</h3>
            <p className="mb-4 text-gray-300">
              Chennai's First Anytime MMA & Strength Training Gym. Train at your convenience with no batch restrictions.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://www.instagram.com/colosseum_strength_mma/" 
                target="_blank" 
                rel="noreferrer"
                className="hover:text-white transition-colors"
              >
                <Instagram size={20} />
              </a>
              <a 
                href="https://wa.me/+917401070866" 
                target="_blank" 
                rel="noreferrer"
                className="hover:text-white transition-colors"
              >
                <FaWhatsapp size={20} /> {/* Replaced MessageSquare with WhatsApp icon */}
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">QUICK LINKS</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="hover:text-white transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-white transition-colors">Services</Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-white transition-colors">Contact Us</Link>
              </li>
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h3 className="text-xl font-bold mb-4">CONTACT INFO</h3>
            <ul className="space-y-3">
              <li className="flex items-center">
                <Phone size={16} className="mr-2 text-gray-300" />
                <span className="text-gray-300">+91 74010 70866</span>
              </li>
              <li className="flex items-center">
                <Mail size={16} className="mr-2 text-gray-300" />
                <span className="text-gray-300">colosseumgym2110@gmail.com</span>
              </li>
              <li className="flex items-start">
                <MapPin size={16} className="mr-2 mt-1 text-gray-300" />
                <span className="text-gray-300">No.13 thiruporur road, Hasthinapuram, Chromepet, Chennai 600064</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Colosseum Strength & MMA. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;