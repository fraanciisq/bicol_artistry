
import { useState } from 'react';
import { motion } from 'framer-motion';

interface ProductImageGalleryProps {
  images: string[];
  productName: string;
  isLoading: boolean;
}

export function ProductImageGallery({ images, productName, isLoading }: ProductImageGalleryProps) {
  const [activeImage, setActiveImage] = useState(0);
  const [imageErrors, setImageErrors] = useState<Record<number, boolean>>({});

  const handleImageError = (index: number) => {
    setImageErrors(prev => ({ ...prev, [index]: true }));
  };

  const getImageSrc = (index: number) => {
    return imageErrors[index] ? '/placeholder.svg' : (images[index] || '/placeholder.svg');
  };

  if (isLoading) {
    return <div className="aspect-square rounded-xl bg-bicolartistry-200 dark:bg-bicolartistry-800 animate-pulse" />;
  }

  return (
    <div className="space-y-4">
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="aspect-square rounded-xl overflow-hidden bg-white"
      >
        <img 
          src={getImageSrc(activeImage)} 
          alt={productName} 
          className="w-full h-full object-contain"
          onError={() => handleImageError(activeImage)}
        />
      </motion.div>
      
      {images.length > 1 && (
        <div className="grid grid-cols-5 gap-3">
          {images.map((image, index) => (
            <button
              key={index}
              onClick={() => setActiveImage(index)}
              className={`aspect-square rounded-md overflow-hidden border-2 transition-all ${
                activeImage === index
                  ? 'border-terracotta-500 shadow-sm'
                  : 'border-transparent hover:border-terracotta-300'
              }`}
            >
              <img 
                src={getImageSrc(index)} 
                alt={`${productName} - View ${index + 1}`} 
                className="w-full h-full object-cover"
                onError={() => handleImageError(index)}
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
