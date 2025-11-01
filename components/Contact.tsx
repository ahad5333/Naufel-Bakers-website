import React from 'react';

const Contact: React.FC = () => {
  const handleFormSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    // In a real application, you would handle form submission here,
    // e.g., by sending data to a server or an email service.
    alert("Thank you for your message! We'll get back to you soon.");
  }
  
  return (
    <section id="contact" className="py-20 bg-pastel-pink">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-4xl font-serif font-bold text-brown-dark sm:text-5xl">Get In Touch</h2>
          <p className="mt-4 text-lg text-brown-light max-w-2xl mx-auto">
            We'd love to hear from you! Visit us, give us a call, or send us a message below.
          </p>
        </div>
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          {/* Left Column: Contact Info & Map */}
          <div className="space-y-8">
             <div className="bg-cream p-8 rounded-lg shadow-lg space-y-8">
                <div>
                    <h3 className="text-xl font-semibold text-brown-dark">Our Address</h3>
                    <p className="mt-2 text-brown-light">H NO 5-6-134/2/A, beside RELAINCE SMART POINT, Teachers Colony, Mahabubnagar, Telangana 509001, India</p>
                </div>
                <div>
                    <h3 className="text-xl font-semibold text-brown-dark">Contact Info</h3>
                    <p className="mt-2 text-brown-light">Phone: (+91) 7671073675</p>
                </div>
                <div>
                    <h3 className="text-xl font-semibold text-brown-dark">Opening Hours</h3>
                    <p className="mt-2 text-brown-light">Monday - Sunday: 9:00 AM - 12:00 PM</p>
                </div>
            </div>
            <div className="rounded-lg overflow-hidden shadow-lg h-80">
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
          </div>
          
          {/* Right Column: Contact Form */}
          <div className="bg-cream p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-serif font-bold text-brown-dark mb-6">Send us a Message</h3>
            <form onSubmit={handleFormSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-brown-dark">Full Name</label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  required
                  className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-accent focus:border-accent sm:text-sm"
                  placeholder="Your Name"
                />
              </div>
               <div>
                <label htmlFor="email" className="block text-sm font-medium text-brown-dark">Email Address</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  required
                  className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-accent focus:border-accent sm:text-sm"
                  placeholder="you@example.com"
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-brown-dark">Phone Number (Optional)</label>
                <input
                  type="tel"
                  name="phone"
                  id="phone"
                  className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-accent focus:border-accent sm:text-sm"
                  placeholder="Your Phone Number"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-brown-dark">Message</label>
                <textarea
                  name="message"
                  id="message"
                  rows={4}
                  required
                  className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-accent focus:border-accent sm:text-sm"
                  placeholder="Your message..."
                ></textarea>
              </div>
              <div>
                <button
                  type="submit"
                  className="w-full flex justify-center py-3 px-4 border border-transparent rounded-full shadow-sm text-sm font-medium text-white bg-accent hover:bg-opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-accent transition-all duration-300"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
