
  import React, { useState, useEffect } from "react";
  import { Menu, X } from "lucide-react";
  import { Link } from "react-router-dom";

  const Navbar = () => {
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

    const handleNavClick = () => {
      setIsMenuOpen(false);
    };

    return (
      <nav className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md py-2" : "bg-transparent py-4"
      }`}>
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <Link to="/" className={`font-bold text-xl ${isScrolled ? "text-gym-dark" : "text-white"}`}>
                Colosseum S&MMA
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              <Link 
                to="/"
                className={`font-medium ${isScrolled ? "text-gym-dark hover:text-black" : "text-white hover:text-black"}`}
                onClick={handleNavClick}
              >
                Home
              </Link>
              <Link 
                to="/services"
                className={`font-medium ${isScrolled ? "text-gym-dark hover:text-black" : "text-white hover:text-black"}`}
                onClick={handleNavClick}
              >
                Services
              </Link>
              <Link 
                to="/contact"
                className={`font-medium ${isScrolled ? "text-gym-dark hover:text-black" : "text-white hover:text-black"}`}
                onClick={handleNavClick}
              >
                Contact
              </Link>
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
                <Link 
                  to="/"
                  className="text-gym-dark hover:text-black font-medium text-left"
                  onClick={handleNavClick}
                >
                  Home
                </Link>
                <Link 
                  to="/services"
                  className="text-gym-dark hover:text-black font-medium text-left"
                  onClick={handleNavClick}
                >
                  Services
                </Link>
                <Link 
                  to="/contact"
                  className="text-gym-dark hover:text-black font-medium text-left"
                  onClick={handleNavClick}
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
