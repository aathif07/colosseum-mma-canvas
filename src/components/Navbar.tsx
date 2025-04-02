import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

interface NavbarProps {
  onHomeClick?: () => void;
  onServicesClick?: () => void;
  onContactClick?: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onHomeClick, onServicesClick, onContactClick }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleNavClick = (callback?: () => void) => {
    setIsMenuOpen(false);
    if (callback) callback();
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? "bg-white shadow-md py-2" : "bg-white/10 backdrop-blur-sm py-4"}`}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link 
            to="/" 
            className="font-bold text-xl text-black" 
            onClick={() => handleNavClick(onHomeClick)}
          >
           COLOSSEUM STRENGTH & MMA
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <Link 
              to="/" 
              className="font-medium text-black hover:text-gray-700" 
              onClick={() => handleNavClick(onHomeClick)}
            >
              Home
            </Link>
            <Link 
              to="/services" 
              className="font-medium text-black hover:text-gray-700" 
              onClick={() => handleNavClick(onServicesClick)}
            >
              Services
            </Link>
            <Link 
              to="/contact" 
              className="font-medium text-black hover:text-gray-700" 
              onClick={() => handleNavClick(onContactClick)}
            >
              Contact
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button 
              onClick={toggleMenu}
              className="text-black"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white text-black shadow-lg rounded-lg mt-2 py-4 px-4 absolute left-0 right-0 mx-4 animate-fade-down">
            <div className="flex flex-col space-y-4">
              <Link 
                to="/" 
                className="text-black hover:text-gray-700 font-medium text-left" 
                onClick={() => handleNavClick(onHomeClick)}
              >
                Home
              </Link>
              <Link 
                to="/services" 
                className="text-black hover:text-gray-700 font-medium text-left" 
                onClick={() => handleNavClick(onServicesClick)}
              >
                Services
              </Link>
              <Link 
                to="/contact" 
                className="text-black hover:text-gray-700 font-medium text-left" 
                onClick={() => handleNavClick(onContactClick)}
              >
                Contact
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;