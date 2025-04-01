
import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

interface NavbarProps {
  onHomeClick: () => void;
  onServicesClick: () => void;
  onContactClick: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ 
  onHomeClick, 
  onServicesClick, 
  onContactClick 
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleNavClick = (callback: () => void) => {
    callback();
    setIsMenuOpen(false);
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? "bg-white shadow-md py-2" : "bg-transparent py-4"
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <span className={`font-bold text-xl ${isScrolled ? "text-gym-dark" : "text-white"}`}>
              Colosseum S&MMA
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <button 
              onClick={() => handleNavClick(onHomeClick)}
              className={`font-medium ${isScrolled ? "text-gym-dark hover:text-gym-red" : "text-white hover:text-gym-red"}`}
            >
              Home
            </button>
            <button 
              onClick={() => handleNavClick(onServicesClick)}
              className={`font-medium ${isScrolled ? "text-gym-dark hover:text-gym-red" : "text-white hover:text-gym-red"}`}
            >
              Services
            </button>
            <button 
              onClick={() => handleNavClick(onContactClick)}
              className={`font-medium ${isScrolled ? "text-gym-dark hover:text-gym-red" : "text-white hover:text-gym-red"}`}
            >
              Contact
            </button>
          </div>

          {/* Mobile Navigation Toggle */}
          <div className="md:hidden">
            <button 
              onClick={toggleMenu}
              className={`${isScrolled ? "text-gym-dark" : "text-white"}`}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white shadow-lg rounded-lg mt-2 py-4 px-4 absolute left-0 right-0 mx-4 animate-fade-down">
            <div className="flex flex-col space-y-4">
              <button 
                onClick={() => handleNavClick(onHomeClick)}
                className="text-gym-dark hover:text-gym-red font-medium text-left"
              >
                Home
              </button>
              <button 
                onClick={() => handleNavClick(onServicesClick)}
                className="text-gym-dark hover:text-gym-red font-medium text-left"
              >
                Services
              </button>
              <button 
                onClick={() => handleNavClick(onContactClick)}
                className="text-gym-dark hover:text-gym-red font-medium text-left"
              >
                Contact
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
