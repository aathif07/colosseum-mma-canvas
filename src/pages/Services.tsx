
import React from "react";
import Navbar from "@/components/Navbar";
import ServicesComponent from "@/components/Services";
import Footer from "@/components/Footer";

const Services = () => {
  return (
    <div className="min-h-screen bg-white text-gym-dark">
      <Navbar />
      <div className="pt-20">
        <ServicesComponent />
      </div>
      <Footer />
    </div>
  );
};

export default Services;
