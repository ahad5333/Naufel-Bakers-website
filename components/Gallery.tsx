import React, { useState } from 'react';
import { GALLERY_IMAGES } from '../constants';
import { GalleryImage } from '../types';
import GalleryModal from './GalleryModal';
import GalleryItem from './GalleryItem';

const Gallery: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);

  const openModal = (image: GalleryImage) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <section id="gallery" className="py-20 bg-pastel-pink">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-4xl font-serif font-bold text-brown-dark sm:text-5xl">Our Gallery</h2>
          <p className="mt-4 text-lg text-brown-light max-w-2xl mx-auto">
            A glimpse into the delicious world of Naufel Bakers.
          </p>
        </div>
        <div className="mt-12 columns-1 sm:columns-2 lg:columns-3 gap-4">
          {GALLERY_IMAGES.map((image) => (
            <div key={image.id} className="break-inside-avoid mb-4">
              <GalleryItem image={image} onClick={openModal} />
            </div>
          ))}
        </div>
      </div>
      {selectedImage && <GalleryModal image={selectedImage} onClose={closeModal} />}
    </section>
  );
};

export default Gallery;