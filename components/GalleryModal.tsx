import React, { useEffect } from 'react';
import { GalleryImage } from '../types';
import { CloseIcon } from './icons/CloseIcon';

interface GalleryModalProps {
  image: GalleryImage;
  onClose: () => void;
}

const GalleryModal: React.FC<GalleryModalProps> = ({ image, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 p-4 animate-fade-in"
      onClick={onClose}
      aria-modal="true"
      role="dialog"
    >
      <div
        className="relative bg-cream rounded-lg shadow-2xl max-w-4xl w-full max-h-[90vh] flex flex-col transform animate-scale-up"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="p-2 text-right">
          <button
            onClick={onClose}
            className="inline-block p-2 text-brown-dark hover:text-accent transition-colors rounded-full focus:outline-none focus:ring-2 focus:ring-accent"
            aria-label="Close image view"
          >
            <CloseIcon className="w-7 h-7" />
          </button>
        </div>
        
        <div className="flex-grow overflow-auto p-4 pt-0 text-center">
          <img
            src={image.src}
            alt={image.alt}
            className="w-full h-auto object-contain max-h-[65vh] rounded"
          />
          <p className="mt-4 text-lg text-brown-light">{image.alt}</p>
        </div>
      </div>
    </div>
  );
};

export default GalleryModal;
