  import React, { useState } from "react";
  import { Instagram, MessageSquare } from "lucide-react";
  import { toast } from "@/components/ui/use-toast";

<<<<<<< HEAD
  type ServiceOption = "Strength Training" | "Self-defense" | "MMA";
=======
import React, { useState } from "react";
import { Instagram, MessageSquare, MapPin, Phone, Mail } from "lucide-react";
import { toast } from "@/components/ui/use-toast";
import { Card, CardContent } from "@/components/ui/card";
>>>>>>> fbd93619af3a41cea646e4d2845caf647a86eda2

  const Contact = () => {
    const [formData, setFormData] = useState({
      name: "",
      email: "",
      mobile: "",
      service: "" as ServiceOption,
      message: ""
    });

<<<<<<< HEAD
    const [formErrors, setFormErrors] = useState({
      name: false,
      email: false,
      mobile: false,
      service: false
    });
=======
const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    service: "" as ServiceOption | "",
    message: ""
  });
>>>>>>> fbd93619af3a41cea646e4d2845caf647a86eda2

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
      const { name, value } = e.target;
      setFormData(prev => ({ ...prev, [name]: value }));
    
      // Clear error when field is being edited
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
        // Form is valid, submit it
        console.log("Form submitted:", formData);
      
        // Show success message
        toast({
          title: "Form Submitted!",
          description: "We'll get back to you shortly.",
        });
      
<<<<<<< HEAD
        // Reset form
        setFormData({
          name: "",
          email: "",
          mobile: "",
          service: "" as ServiceOption,
          message: ""
        });
      } else {
        // Show error message
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
            <h2 className="section-title">Ready to Train? Contact Us Now.</h2>
            <p className="text-lg max-w-3xl mx-auto">
              Train like a fighter. Get stronger. Dominate. Whether you want to sign up, 
              inquire about training, or drop in for a trial session, we're here for you.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Contact Info */}
            <div>
              <h3 className="text-2xl font-bold mb-6">Gym Information</h3>
            
              <div className="mb-8">
                <h4 className="text-xl font-semibold mb-3">Gym Timings</h4>
                <ul className="space-y-2">
                  <li>Monday – Saturday: 6 AM – 9:30 PM</li>
                  <li>Sunday: 5 PM – 9 PM</li>
                </ul>
              </div>
            
              <div className="mb-8">
                <h4 className="text-xl font-semibold mb-3">Location</h4>
                <p>📍 No.13 thiruporur road, Hasthinapuram, Chromepet, Chennai 600064</p>
              </div>
            
              <div className="mb-8">
                <h4 className="text-xl font-semibold mb-3">Contact Us</h4>
                <p className="mb-2">📞 +91 74010 70866</p>
                <p>📧 colosseumgym2110@gmail.com</p>
              </div>
            
              <div>
                <h4 className="text-xl font-semibold mb-3">Follow Us on Social Media</h4>
                <div className="flex space-x-4">
                  <a 
                    href="https://www.instagram.com/colosseum_strength_mma/" 
                    target="_blank" 
                    rel="noreferrer"
                    className="flex items-center text-gym-dark hover:text-black transition-colors"
                  >
                    <Instagram className="mr-2" />
                    <span>Instagram</span>
                  </a>
                  <a 
                    href="http://www.wa.me/+917401070866" 
                    target="_blank" 
                    rel="noreferrer"
                    className="flex items-center text-gym-dark hover:text-black transition-colors"
                  >
                    <MessageSquare className="mr-2" />
                    <span>WhatsApp</span>
                  </a>
                </div>
              </div>
=======
      // Reset form
      setFormData({
        name: "",
        email: "",
        mobile: "",
        service: "" as ServiceOption | "",
        message: ""
      });
    } else {
      // Show error message
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
          <h2 className="text-4xl font-bold mb-6 relative inline-block after:content-[''] after:block after:w-1/2 after:h-1 after:bg-gym-red after:mx-auto after:mt-2">Ready to Train? Contact Us Now.</h2>
          <p className="text-lg max-w-3xl mx-auto text-gray-700">
            Train like a fighter. Get stronger. Dominate. Whether you want to sign up, 
            inquire about training, or drop in for a trial session, we're here for you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Contact Info */}
          <div className="bg-gray-50 p-8 rounded-lg shadow-sm transform hover:scale-[1.01] transition-transform duration-300">
            <h3 className="text-2xl font-bold mb-6 border-b-2 border-gym-red pb-2">Gym Information</h3>
            
            <div className="mb-8">
              <Card className="overflow-hidden hover:shadow-md transition-shadow duration-300">
                <CardContent className="p-6">
                  <h4 className="text-xl font-semibold mb-3 flex items-center">
                    <span className="h-6 w-1 bg-gym-red mr-3"></span>
                    Gym Timings
                  </h4>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-center">
                      <span className="h-2 w-2 bg-gym-red rounded-full mr-2"></span>
                      Monday – Saturday: 6 AM – 9:30 PM
                    </li>
                    <li className="flex items-center">
                      <span className="h-2 w-2 bg-gym-red rounded-full mr-2"></span>
                      Sunday: 5 PM – 9 PM
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
            
            <div className="mb-8">
              <Card className="overflow-hidden hover:shadow-md transition-shadow duration-300">
                <CardContent className="p-6">
                  <h4 className="text-xl font-semibold mb-3 flex items-center">
                    <span className="h-6 w-1 bg-gym-red mr-3"></span>
                    Location
                  </h4>
                  <p className="text-gray-700 flex items-start">
                    <MapPin className="mr-2 text-gym-red flex-shrink-0 mt-1" size={18} />
                    <span>No.13 thiruporur road, Hasthinapuram, Chromepet, Chennai 600064</span>
                  </p>
                </CardContent>
              </Card>
            </div>
            
            <div className="mb-8">
              <Card className="overflow-hidden hover:shadow-md transition-shadow duration-300">
                <CardContent className="p-6">
                  <h4 className="text-xl font-semibold mb-3 flex items-center">
                    <span className="h-6 w-1 bg-gym-red mr-3"></span>
                    Contact Us
                  </h4>
                  <p className="mb-2 text-gray-700 flex items-center">
                    <Phone className="mr-2 text-gym-red" size={18} />
                    +91 74010 70866
                  </p>
                  <p className="text-gray-700 flex items-center">
                    <Mail className="mr-2 text-gym-red" size={18} />
                    colosseumgym2110@gmail.com
                  </p>
                </CardContent>
              </Card>
            </div>
            
            <div>
              <Card className="overflow-hidden hover:shadow-md transition-shadow duration-300">
                <CardContent className="p-6">
                  <h4 className="text-xl font-semibold mb-3 flex items-center">
                    <span className="h-6 w-1 bg-gym-red mr-3"></span>
                    Follow Us on Social Media
                  </h4>
                  <div className="flex flex-col space-y-2">
                    <a 
                      href="https://www.instagram.com/colosseum_strength_mma/" 
                      target="_blank" 
                      rel="noreferrer"
                      className="flex items-center text-gray-700 hover:text-gym-red transition-colors group"
                    >
                      <div className="bg-gray-200 p-2 rounded-full group-hover:bg-gym-red group-hover:text-white transition-colors mr-3">
                        <Instagram size={18} />
                      </div>
                      <span>Instagram</span>
                    </a>
                    <a 
                      href="http://www.wa.me/+917401070866" 
                      target="_blank" 
                      rel="noreferrer"
                      className="flex items-center text-gray-700 hover:text-gym-red transition-colors group"
                    >
                      <div className="bg-gray-200 p-2 rounded-full group-hover:bg-gym-red group-hover:text-white transition-colors mr-3">
                        <MessageSquare size={18} />
                      </div>
                      <span>WhatsApp</span>
                    </a>
                  </div>
                </CardContent>
              </Card>
>>>>>>> fbd93619af3a41cea646e4d2845caf647a86eda2
            </div>
          
<<<<<<< HEAD
            {/* Contact Form */}
            <div className="bg-gym-light p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold mb-6">Get in Touch</h3>
              <p className="mb-6">📩 Fill out the form below & we'll get back to you</p>
            
              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label htmlFor="name" className="block mb-2 font-medium">
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
                  <label htmlFor="email" className="block mb-2 font-medium">
                    Email <span className="text-black">*</span>
=======
          {/* Contact Form */}
          <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-100">
            <h3 className="text-2xl font-bold mb-6 border-b-2 border-gym-red pb-2">Get in Touch</h3>
            <p className="mb-6 flex items-center text-gray-700">
              <Mail className="mr-2 text-gym-red" size={18} />
              Fill out the form below & we'll get back to you
            </p>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block mb-2 font-medium text-gray-700">
                  Name <span className="text-gym-red">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-gym-red transition-all ${
                    formErrors.name ? "border-red-500 bg-red-50" : "border-gray-300"
                  }`}
                  placeholder="Your name"
                />
                {formErrors.name && (
                  <p className="text-red-500 text-sm mt-1 flex items-center">
                    <span className="h-1 w-1 bg-red-500 rounded-full mr-2"></span>
                    Name is required
                  </p>
                )}
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="email" className="block mb-2 font-medium text-gray-700">
                    Email <span className="text-gym-red">*</span>
>>>>>>> fbd93619af3a41cea646e4d2845caf647a86eda2
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
<<<<<<< HEAD
                    className={`w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-black ${
                      formErrors.email ? "border-red-500" : "border-gray-300"
=======
                    className={`w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-gym-red transition-all ${
                      formErrors.email ? "border-red-500 bg-red-50" : "border-gray-300"
>>>>>>> fbd93619af3a41cea646e4d2845caf647a86eda2
                    }`}
                    placeholder="Your email"
                  />
                  {formErrors.email && (
<<<<<<< HEAD
                    <p className="text-red-500 text-sm mt-1">Valid email is required</p>
                  )}
                </div>
              
                <div className="mb-4">
                  <label htmlFor="mobile" className="block mb-2 font-medium">
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
                  <label htmlFor="service" className="block mb-2 font-medium">
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
                  <label htmlFor="message" className="block mb-2 font-medium">
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
              
                <button type="submit" className="bg-black text-white font-bold py-3 px-6 rounded-md hover:bg-gray-800 transition-all w-full">
                  Submit
                </button>
              </form>
            </div>
=======
                    <p className="text-red-500 text-sm mt-1 flex items-center">
                      <span className="h-1 w-1 bg-red-500 rounded-full mr-2"></span>
                      Valid email is required
                    </p>
                  )}
                </div>
                
                <div>
                  <label htmlFor="mobile" className="block mb-2 font-medium text-gray-700">
                    Mobile Number <span className="text-gym-red">*</span>
                  </label>
                  <input
                    type="tel"
                    id="mobile"
                    name="mobile"
                    value={formData.mobile}
                    onChange={handleChange}
                    className={`w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-gym-red transition-all ${
                      formErrors.mobile ? "border-red-500 bg-red-50" : "border-gray-300"
                    }`}
                    placeholder="Your 10-digit number"
                  />
                  {formErrors.mobile && (
                    <p className="text-red-500 text-sm mt-1 flex items-center">
                      <span className="h-1 w-1 bg-red-500 rounded-full mr-2"></span>
                      Valid 10-digit mobile number is required
                    </p>
                  )}
                </div>
              </div>
              
              <div>
                <label htmlFor="service" className="block mb-2 font-medium text-gray-700">
                  Service You're Interested In <span className="text-gym-red">*</span>
                </label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className={`w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-gym-red appearance-none bg-white transition-all ${
                    formErrors.service ? "border-red-500 bg-red-50" : "border-gray-300"
                  }`}
                >
                  <option value="">Select a service</option>
                  <option value="Strength Training">Strength Training</option>
                  <option value="Self-defense">Self-defense</option>
                  <option value="MMA">MMA</option>
                </select>
                {formErrors.service && (
                  <p className="text-red-500 text-sm mt-1 flex items-center">
                    <span className="h-1 w-1 bg-red-500 rounded-full mr-2"></span>
                    Please select a service
                  </p>
                )}
              </div>
              
              <div>
                <label htmlFor="message" className="block mb-2 font-medium text-gray-700">
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gym-red resize-none transition-all"
                  placeholder="Tell us about your fitness goals"
                ></textarea>
              </div>
              
              <button 
                type="submit" 
                className="w-full py-4 px-6 bg-gym-red text-white font-bold rounded-md hover:bg-opacity-90 transition-all transform hover:translate-y-[-2px] focus:outline-none focus:ring-2 focus:ring-gym-red focus:ring-opacity-50"
              >
                Submit
              </button>
            </form>
>>>>>>> fbd93619af3a41cea646e4d2845caf647a86eda2
          </div>
        </div>
      </section>
    );
  };

  export default Contact;
