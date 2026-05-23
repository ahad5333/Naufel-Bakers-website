import React from 'react';
import { motion } from 'framer-motion';

const Contact: React.FC = () => {
  const handleFormSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    alert("Thank you for your message! We'll get back to you soon.");
  }
  
  return (
    <section id="contact" className="py-20 bg-pastel-pink overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <h2 className="text-4xl font-serif font-bold text-brown-dark sm:text-5xl">Get In Touch</h2>
          <p className="mt-4 text-lg text-brown-light max-w-2xl mx-auto font-sans">
            We'd love to hear from you! Visit us, give us a call, or send us a message below.
          </p>
        </motion.div>
        
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          {/* Left Column: Contact Info & Map */}
          <motion.div 
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
             <div className="bg-white p-8 rounded-lg shadow-lg space-y-8 border border-pastel-pink">
                <div>
                    <h3 className="text-xl font-bold font-serif text-brown-dark">Our Address</h3>
                    <p className="mt-2 text-brown-light text-sm leading-relaxed">H NO 5-6-134/2/A, beside RELAINCE SMART POINT, Teachers Colony, Mahabubnagar, Telangana 509001, India</p>
                </div>
                <div>
                    <h3 className="text-xl font-bold font-serif text-brown-dark">Contact Info</h3>
                    <p className="mt-2 text-brown-light text-sm">Phone: (+91) 91547 86835</p>
                    <p className="mt-1 text-brown-light text-sm">Email: hello@naufelbakers.com</p>
                </div>
                <div>
                    <h3 className="text-xl font-bold font-serif text-brown-dark">Opening Hours</h3>
                    <p className="mt-2 text-brown-light text-sm">Monday - Sunday: 10:00 AM - 10:00 PM</p>
                </div>
            </div>
            <div className="rounded-lg overflow-hidden shadow-lg h-80 border border-pastel-pink">
                <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3822.091535694384!2d78.1302684758703!3d16.77458518390754!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bca31fe33484ac3%3A0x5d66ab2a96552c4d!2sNaufel%20Bakers!5e0!3m2!1sen!2sin!4v1718890430588!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                title="Naufel Bakers Location"
                ></iframe>
            </div>
          </motion.div>
          
          {/* Right Column: Contact Form */}
          <motion.div 
            className="bg-white p-8 rounded-lg shadow-lg border border-pastel-pink"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <h3 className="text-2xl font-serif font-bold text-brown-dark mb-6">Send us a Message</h3>
            <form onSubmit={handleFormSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-brown-dark mb-1">Full Name</label>
                <motion.input
                  whileFocus={{ scale: 1.005, borderColor: "rgba(194, 147, 46, 0.8)" }}
                  type="text"
                  name="name"
                  id="name"
                  required
                  className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-accent sm:text-sm transition-all"
                  placeholder="Your Name"
                />
              </div>
               <div>
                <label htmlFor="email" className="block text-sm font-semibold text-brown-dark mb-1">Email Address</label>
                <motion.input
                  whileFocus={{ scale: 1.005, borderColor: "rgba(194, 147, 46, 0.8)" }}
                  type="email"
                  name="email"
                  id="email"
                  required
                  className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-accent sm:text-sm transition-all"
                  placeholder="you@example.com"
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-semibold text-brown-dark mb-1">Phone Number (Optional)</label>
                <motion.input
                  whileFocus={{ scale: 1.005, borderColor: "rgba(194, 147, 46, 0.8)" }}
                  type="tel"
                  name="phone"
                  id="phone"
                  className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-accent sm:text-sm transition-all"
                  placeholder="Your Phone Number"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-brown-dark mb-1">Message</label>
                <motion.textarea
                  whileFocus={{ scale: 1.005, borderColor: "rgba(194, 147, 46, 0.8)" }}
                  name="message"
                  id="message"
                  rows={4}
                  required
                  className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-accent sm:text-sm transition-all resize-none"
                  placeholder="Your message..."
                ></motion.textarea>
              </div>
              <div>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="w-full flex justify-center py-3 px-4 border border-transparent rounded-full shadow-sm text-sm font-bold text-white bg-accent hover:bg-opacity-95 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-accent transition-all duration-300"
                >
                  Send Message
                </motion.button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
