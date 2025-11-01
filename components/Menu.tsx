
import React, { useState } from 'react';
import { MENU_ITEMS } from '../constants';
import { MenuCategory, MenuItem } from '../types';

const MenuItemCard: React.FC<{ item: MenuItem }> = ({ item }) => (
  <div className="bg-cream rounded-lg shadow-lg overflow-hidden group transform hover:-translate-y-2 transition-transform duration-300">
  {/* Image container with padding */}
  <div className="p-2 flex items-center justify-center bg-white">
    <img
      src={item.image}
      alt={item.alt}
      className="w-full h-48 object-contain rounded-md"
    />
  </div>

  {/* Card content */}
  <div className="p-6">
    <h3 className="text-xl font-serif font-bold text-brown-dark">{item.name}</h3>
    <p className="mt-2 text-brown-light text-sm flex-grow">{item.description}</p>
  </div>
</div>
);


const Menu: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<MenuCategory>(MenuCategory.Cakes);

  const categories = Object.values(MenuCategory);
  const filteredItems = MENU_ITEMS.filter(item => item.category === activeCategory);

  return (
    <section id="menu" className="py-20 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-4xl font-serif font-bold text-brown-dark sm:text-5xl">Our Menu</h2>
          <p className="mt-4 text-lg text-brown-light max-w-2xl mx-auto">
            Discover a world of flavor, from our classic cakes to our artisanal breads. All baked fresh daily.
          </p>
        </div>

        <div className="mt-12 flex flex-wrap justify-center gap-2 md:gap-4">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 text-sm md:text-base font-semibold rounded-full transition-colors duration-300 ${
                activeCategory === category ? 'bg-accent text-white shadow-md' : 'bg-pastel-pink text-brown-dark hover:bg-accent hover:text-white'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {filteredItems.map(item => (
            <MenuItemCard key={item.name} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Menu;