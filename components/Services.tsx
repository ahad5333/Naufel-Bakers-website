
import React from 'react';
import { CakeIcon, GiftIcon, TruckIcon, PartyIcon } from './icons/ServiceIcons';
import { motion } from 'framer-motion';

const services = [
  {
    title: "Custom Cakes",
    description: "From weddings to birthdays, we craft bespoke cakes that match your vision and taste perfectly.",
    icon: <CakeIcon className="w-8 h-8 text-accent" />,
    image: "/service_cakes.png",
  },
  {
    title: "Event Catering",
    description: "Make your gatherings memorable with our assorted pastry platters, snack boxes, and dessert tables.",
    icon: <PartyIcon className="w-8 h-8 text-accent" />,
    image: "/service_catering.png",
  },
  {
    title: "Gift Hampers",
    description: "Spread joy with our curated gift boxes filled with cookies, brownies, and artisanal breads.",
    icon: <GiftIcon className="w-8 h-8 text-accent" />,
    image: "/service_hampers.png",
  },
  {
    title: "Home Delivery",
    description: "Craving something sweet? We deliver fresh baked goods safely right to your doorstep.",
    icon: <TruckIcon className="w-8 h-8 text-accent" />,
    image: "/service_delivery.png",
  },
];

const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-cream relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <h2 className="text-4xl font-serif font-bold text-brown-dark sm:text-5xl">Our Services</h2>
          <p className="mt-4 text-lg text-brown-light max-w-2xl mx-auto font-sans">
            More than just a bakery, we are a part of your every celebration.
          </p>
        </motion.div>
        
        <div className="space-y-24 md:space-y-32">
          {services.map((service, index) => {
            const isEven = index % 2 === 0;
            return (
              <div 
                key={index} 
                className={`flex flex-col md:flex-row items-center gap-12 md:gap-16 ${
                  isEven ? '' : 'md:flex-row-reverse'
                }`}
              >
                {/* Image Block */}
                <motion.div 
                  className="w-full md:w-1/2"
                  initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                >
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    className="relative rounded-2xl overflow-hidden shadow-xl border border-pastel-pink aspect-[4/3] bg-white"
                  >
                    <img 
                      src={service.image} 
                      alt={service.title} 
                      className="w-full h-full object-cover select-none"
                    />
                  </motion.div>
                </motion.div>

                {/* Text Block */}
                <motion.div 
                  className="w-full md:w-1/2 space-y-6"
                  initial={{ opacity: 0, x: isEven ? 50 : -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                >
                  <div className="inline-flex p-3 bg-pastel-pink rounded-full text-accent shadow-sm border border-white">
                    {service.icon}
                  </div>
                  <h3 className="text-3xl font-serif font-bold text-brown-dark">{service.title}</h3>
                  <p className="text-brown-light leading-relaxed text-lg font-sans">
                    {service.description}
                  </p>
                  <div className="pt-2">
                    <a 
                      href="#contact" 
                      className="inline-flex items-center text-accent hover:text-brown-dark font-bold transition-colors duration-200 text-base"
                    >
                      Inquire About {service.title}
                      <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                      </svg>
                    </a>
                  </div>
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
