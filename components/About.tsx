import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-pastel-pink">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 lg:items-center">
          <div>
            <h2 className="text-4xl font-serif font-bold text-brown-dark sm:text-5xl">
              Our Story
            </h2>
            <p className="mt-6 text-lg text-brown-dark leading-relaxed">
              Naufel Bakers began with a simple passion: to share the joy of traditional baking with our community. Founded in a small kitchen, our dream was to create a place where the aroma of fresh bread and the taste of a warm pastry could bring a smile to anyone's face.
            </p>
            <p className="mt-4 text-lg text-brown-dark leading-relaxed">
              Today, we continue that tradition, using only the finest ingredients and time-honored recipes passed down through generations. Every loaf, cake, and cookie is a piece of our heart, baked with dedication and a commitment to quality. We believe in baking happiness, one delicious treat at a time.
            </p>
          </div>
          <div className="mt-10 lg:mt-0">
            <img 
              className="rounded-lg shadow-2xl object-cover w-full h-[500px] transform hover:scale-105 transition-transform duration-500"
              src="https://images.pexels.com/photos/205961/pexels-photo-205961.jpeg" 
              alt="Interior of Naufel Bakers" 
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
