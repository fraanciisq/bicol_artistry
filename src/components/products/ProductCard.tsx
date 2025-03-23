
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Product } from '@/types';
import { Heart, ShoppingCart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useCart } from '@/contexts/CartContext';

interface ProductCardProps {
  product: Product;
  index?: number;
}

export function ProductCard({ product, index = 0 }: ProductCardProps) {
  const { addItem, isInCart } = useCart();
  
  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addItem(product, 1);
  };

  const cardVariants = {
    hidden: { 
      opacity: 0,
      y: 20
    },
    visible: { 
      opacity: 1,
      y: 0,
      transition: { 
        duration: 0.5,
        delay: index * 0.1
      }
    }
  };

  const imageVariants = {
    hover: { 
      scale: 1.05,
      transition: { duration: 0.3 }
    }
  };

  const alreadyInCart = isInCart(product.id);

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={cardVariants}
      className="group relative overflow-hidden rounded-xl bg-white dark:bg-bicolartistry-900 shadow-sm hover:shadow-md transition-shadow duration-300"
    >
      <Link to={`/product/${product.id}`} className="block">
        <div className="aspect-square overflow-hidden relative">
          <motion.img
            whileHover="hover"
            variants={imageVariants}
            src={product.images[0] || '/images/placeholder.jpg'}
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-500"
          />
          
          {product.featured && (
            <div className="absolute top-3 left-3 bg-terracotta-500 text-white text-xs font-bold px-2 py-1 rounded-md">
              Featured
            </div>
          )}
          
          <Button 
            size="icon" 
            variant="ghost" 
            className="absolute top-3 right-3 bg-white/70 hover:bg-white dark:bg-black/70 dark:hover:bg-black text-bicolartistry-700 dark:text-bicolartistry-300 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          >
            <Heart size={18} />
          </Button>
        </div>
        
        <div className="p-4">
          <div className="flex justify-between items-start gap-2 mb-2">
            <h3 className="font-medium text-bicolartistry-800 dark:text-bicolartistry-100 line-clamp-1">
              {product.name}
            </h3>
            <div className="text-lg font-semibold text-terracotta-600 dark:text-terracotta-400 whitespace-nowrap">
              ₱{product.price.toLocaleString()}
            </div>
          </div>
          
          <p className="text-sm text-bicolartistry-600 dark:text-bicolartistry-400 line-clamp-2 mb-4 min-h-[2.5rem]">
            {product.description}
          </p>
          
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className={`w-4 h-4 ${
                      i < Math.floor(product.rating || 0)
                        ? 'text-yellow-400'
                        : 'text-gray-300 dark:text-gray-600'
                    }`}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <span className="text-xs text-gray-500 dark:text-gray-400 ml-1">
                {product.rating}
              </span>
            </div>
            
            <Button 
              size="sm" 
              onClick={handleAddToCart}
              variant={alreadyInCart ? "outline" : "default"}
              className={`rounded-full transition-all duration-300 ${
                alreadyInCart 
                  ? 'border-terracotta-500 text-terracotta-500 hover:bg-terracotta-50' 
                  : 'bg-terracotta-500 hover:bg-terracotta-600 text-white'
              }`}
            >
              <ShoppingCart size={16} className="mr-1" />
              {alreadyInCart ? 'In Cart' : 'Add'}
            </Button>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
