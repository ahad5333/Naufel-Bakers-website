import React from 'react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 bg-pastel-pink">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-4xl font-serif font-bold text-brown-dark sm:text-5xl">Get In Touch</h2>
          <p className="mt-4 text-lg text-brown-light max-w-2xl mx-auto">
            We'd love to hear from you! Visit us or give us a call.
          </p>
        </div>
        <div className="mt-16 max-w-3xl mx-auto">
            <div className="bg-cream p-8 rounded-lg shadow-lg space-y-8">
                <div>
                    <h3 className="text-xl font-semibold text-brown-dark">Our Address</h3>
                    <p className="mt-2 text-brown-light">H NO 5-6-134/2/A, beside RELAINCE SMART POINT, Teachers Colony, Mahabubnagar, Telangana 509001, India</p>
                </div>
                <div>
                    <h3 className="text-xl font-semibold text-brown-dark">Contact Info</h3>
                    <p className="mt-2 text-brown-light">Phone: (+91) 91547 86835</p>
                    <p className="mt-1 text-brown-light">Email: hello@naufelbakers.com</p>
                </div>
                <div>
                    <h3 className="text-xl font-semibold text-brown-dark">Opening Hours</h3>
                    <p className="mt-2 text-brown-light">Monday - Sunday: 10:00 AM - 10:00 PM</p>
                </div>
            </div>
            <div className="mt-8 rounded-lg overflow-hidden shadow-lg h-96">
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
      </div>
    </section>
  );
};

export default Contact;