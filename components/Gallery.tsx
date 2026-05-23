import React, { useState } from 'react';
import { GALLERY_IMAGES } from '../constants';
import { GalleryImage } from '../types';
import GalleryModal from './GalleryModal';
import GalleryItem from './GalleryItem';
import { motion, AnimatePresence } from 'framer-motion';

const gridSpans = [
  "md:col-span-2 md:row-span-1",
  "md:col-span-1 md:row-span-2",
  "md:col-span-1 md:row-span-1",
  "md:col-span-1 md:row-span-1",
  "md:col-span-2 md:row-span-1",
  "md:col-span-1 md:row-span-1",
];

const Gallery: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);

  const openModal = (image: GalleryImage) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <section id="gallery" className="py-20 bg-pastel-pink overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <h2 className="text-4xl font-serif font-bold text-brown-dark sm:text-5xl">Our Gallery</h2>
          <p className="mt-4 text-lg text-brown-light max-w-2xl mx-auto">
            A glimpse into the delicious world of Naufel Bakers.
          </p>
        </motion.div>
        
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[250px] md:auto-rows-[300px]">
          {GALLERY_IMAGES.map((image, index) => (
            <div key={image.id} className={`${gridSpans[index % gridSpans.length]} h-full`}>
              <GalleryItem image={image} onClick={openModal} />
            </div>
          ))}
        </div>
      </div>
      
      <AnimatePresence>
        {selectedImage && <GalleryModal image={selectedImage} onClose={closeModal} />}
      </AnimatePresence>
    </section>
  );
};

export default Gallery;