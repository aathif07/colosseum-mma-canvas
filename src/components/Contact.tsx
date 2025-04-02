import React, { useState } from "react";
import { Instagram, MessageSquare } from "lucide-react";
import { toast } from "@/components/ui/use-toast";
import { FaWhatsapp } from "react-icons/fa"; // Import WhatsApp icon

type ServiceOption = "Strength Training" | "Self-defense" | "MMA" | "";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    service: "" as ServiceOption,
    message: ""
  });

  const [formErrors, setFormErrors] = useState({
    name: false,
    email: false,
    mobile: false,
    service: false
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  
    if (formErrors[name as keyof typeof formErrors]) {
      setFormErrors(prev => ({ ...prev, [name]: false }));
    }
  };

  const validateForm = () => {
    const errors = {
      name: formData.name.trim() === "",
      email: !/^\S+@\S+\.\S+$/.test(formData.email),
      mobile: !/^[0-9]{10}$/.test(formData.mobile),
      service: formData.service === ""
    };
  
    setFormErrors(errors);
    return !Object.values(errors).some(error => error);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  
    if (validateForm()) {
      console.log("Form submitted:", formData);
      toast({
        title: "Form Submitted!",
        description: "We'll get back to you shortly.",
      });
      setFormData({
        name: "",
        email: "",
        mobile: "",
        service: "" as ServiceOption,
        message: ""
      });
    } else {
      toast({
        title: "Form Error",
        description: "Please fill all required fields correctly.",
        variant: "destructive"
      });
    }
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-black">Ready to Train? Contact Us Now.</h2>
          <p className="text-lg max-w-3xl mx-auto text-gray-700">
            Train like a fighter. Get stronger. Dominate. Whether you want to sign up, 
            inquire about training, or drop in for a trial session, we're here for you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Contact Info */}
          <div>
            <h3 className="text-2xl font-bold mb-6 text-black">Gym Information</h3>
          
            <div className="mb-8">
              <h4 className="text-xl font-semibold mb-3 text-black">Gym Timings</h4>
              <ul className="space-y-2 text-gray-700">
                <li>Monday – Saturday: 6 AM – 9:30 PM</li>
                <li>Sunday: 5 PM – 9 PM</li>
              </ul>
            </div>
          
            <div className="mb-8">
              <h4 className="text-xl font-semibold mb-3 text-black">Location</h4>
              <p className="text-gray-700">📍 No.13 thiruporur road, Hasthinapuram, Chromepet, Chennai 600064</p>
            </div>
          
            <div className="mb-8">
              <h4 className="text-xl font-semibold mb-3 text-black">Contact Us</h4>
              <p className="mb-2 text-gray-700">📞 +91 74010 70866</p>
              <p className="text-gray-700">📧 colosseumgym2110@gmail.com</p>
            </div>
          
            <div>
              <h4 className="text-xl font-semibold mb-3 text-black">Follow Us</h4>
              <div className="flex space-x-4">
                <a 
                  href="https://www.instagram.com/colosseum_strength_mma/" 
                  target="_blank" 
                  rel="noreferrer"
                  className="flex items-center text-gray-700 hover:text-black transition-colors"
                >
                  <Instagram className="mr-2" size={24} />
                  <span>Instagram</span>
                </a>
                <a 
                  href="https://wa.me/+917401070866" 
                  target="_blank" 
                  rel="noreferrer"
                  className="flex items-center text-gray-700 hover:text-black transition-colors"
                >
                  <FaWhatsapp className="mr-2" size={24} /> {/* Replaced MessageSquare with FaWhatsapp */}
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        
          {/* Contact Form */}
          <div className="bg-gray-50 p-8 rounded-lg shadow-md border border-gray-200">
            <h3 className="text-2xl font-bold mb-6 text-black">Get in Touch</h3>
            <p className="mb-6 text-gray-700">📩 Fill out the form below & we'll get back to you</p>
          
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="name" className="block mb-2 font-medium text-black">
                  Name <span className="text-black">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-black ${
                    formErrors.name ? "border-red-500" : "border-gray-300"
                  }`}
                  placeholder="Your name"
                />
                {formErrors.name && (
                  <p className="text-red-500 text-sm mt-1">Name is required</p>
                )}
              </div>
            
              <div className="mb-4">
                <label htmlFor="email" className="block mb-2 font-medium text-black">
                  Email <span className="text-black">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-black ${
                    formErrors.email ? "border-red-500" : "border-gray-300"
                  }`}
                  placeholder="Your email"
                />
                {formErrors.email && (
                  <p className="text-red-500 text-sm mt-1">Valid email is required</p>
                )}
              </div>
            
              <div className="mb-4">
                <label htmlFor="mobile" className="block mb-2 font-medium text-black">
                  Mobile Number <span className="text-black">*</span>
                </label>
                <input
                  type="tel"
                  id="mobile"
                  name="mobile"
                  value={formData.mobile}
                  onChange={handleChange}
                  className={`w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-black ${
                    formErrors.mobile ? "border-red-500" : "border-gray-300"
                  }`}
                  placeholder="Your mobile number"
                />
                {formErrors.mobile && (
                  <p className="text-red-500 text-sm mt-1">Valid 10-digit mobile number is required</p>
                )}
              </div>
            
              <div className="mb-4">
                <label htmlFor="service" className="block mb-2 font-medium text-black">
                  Service You're Interested In <span className="text-black">*</span>
                </label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className={`w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-black ${
                    formErrors.service ? "border-red-500" : "border-gray-300"
                  }`}
                >
                  <option value="">Select a service</option>
                  <option value="Strength Training">Strength Training</option>
                  <option value="Self-defense">Self-defense</option>
                  <option value="MMA">MMA</option>
                </select>
                {formErrors.service && (
                  <p className="text-red-500 text-sm mt-1">Please select a service</p>
                )}
              </div>
            
              <div className="mb-6">
                <label htmlFor="message" className="block mb-2 font-medium text-black">
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
                  placeholder="Tell us about your fitness goals"
                ></textarea>
              </div>
            
              <button 
                type="submit" 
                className="bg-black text-white font-bold py-3 px-6 rounded-md hover:bg-gray-800 transition-all w-full"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;