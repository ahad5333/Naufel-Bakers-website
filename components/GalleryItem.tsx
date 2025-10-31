import React, { useRef, useEffect, useState } from 'react';
import { GalleryImage } from '../types';

interface GalleryItemProps {
  image: GalleryImage;
  onClick: (image: GalleryImage) => void;
}

const GalleryItem: React.FC<GalleryItemProps> = ({ image, onClick }) => {
  const [isVisible, setIsVisible] = useState(false);
  const itemRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1, // Start animation when 10% of the item is visible
      }
    );

    if (itemRef.current) {
      observer.observe(itemRef.current);
    }

    return () => {
      if (itemRef.current) {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        observer.unobserve(itemRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={itemRef}
      className={`group relative overflow-hidden rounded-lg shadow-lg cursor-pointer transition-all duration-700 ease-out ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
      }`}
      onClick={() => onClick(image)}
      onKeyDown={(e) => e.key === 'Enter' && onClick(image)}
      tabIndex={0}
      role="button"
      aria-label={`View larger image for ${image.alt}`}
    >
      <img
        src={image.src}
        alt={image.alt}
        className="w-full h-auto transform group-hover:scale-105 transition-transform duration-500"
      />
      <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-all duration-500 flex items-center justify-center">
        <p className="text-white text-lg font-semibold opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all ease-in-out duration-300 px-4 text-center">
          {image.alt}
        </p>
      </div>
    </div>
  );
};

export default GalleryItem;
