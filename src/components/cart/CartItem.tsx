
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Trash, Minus, Plus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { CartItem as CartItemType } from '@/types';
import { useCart } from '@/contexts/CartContext';

interface CartItemProps {
  item: CartItemType;
}

export function CartItem({ item }: CartItemProps) {
  const { updateQuantity, removeItem } = useCart();
  const [isHovered, setIsHovered] = useState(false);
  const [imageError, setImageError] = useState(false);
  
  const handleQuantityChange = (newQuantity: number) => {
    if (newQuantity < 1) return;
    updateQuantity(item.productId, newQuantity);
  };
  
  const handleRemove = () => {
    removeItem(item.productId);
  };

  const handleImageError = () => {
    setImageError(true);
  };
  
  const imageSrc = imageError ? '/placeholder.svg' : (item.product.images[0] || '/placeholder.svg');
  
  return (
    <div 
      className="flex flex-col sm:flex-row items-start gap-4 py-4 border-b border-bicolartistry-200 dark:border-bicolartistry-700 relative transition-all duration-300"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="w-full sm:w-24 h-24 overflow-hidden rounded-lg">
        <Link to={`/product/${item.productId}`}>
          <img 
            src={imageSrc}
            alt={item.product.name} 
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
            onError={handleImageError}
          />
        </Link>
      </div>
      
      <div className="flex-1 min-w-0">
        <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2">
          <div>
            <Link 
              to={`/product/${item.productId}`}
              className="text-lg font-medium hover:text-terracotta-500 transition-colors line-clamp-1"
            >
              {item.product.name}
            </Link>
            
            <p className="text-sm text-bicolartistry-500 dark:text-bicolartistry-400 mb-2">
              Category: {item.product.category}
            </p>
          </div>
          
          <div className="text-right">
            <p className="text-lg font-semibold text-terracotta-600 dark:text-terracotta-400">
              ₱{item.product.price.toLocaleString()}
            </p>
            
            <p className="text-sm text-bicolartistry-500 dark:text-bicolartistry-400">
              Subtotal: ₱{(item.product.price * item.quantity).toLocaleString()}
            </p>
          </div>
        </div>
        
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mt-3">
          <div className="flex items-center">
            <Button 
              variant="outline" 
              size="icon" 
              className="h-8 w-8 rounded"
              onClick={() => handleQuantityChange(item.quantity - 1)}
            >
              <Minus size={14} />
            </Button>
            
            <span className="mx-3 font-medium min-w-[20px] text-center">
              {item.quantity}
            </span>
            
            <Button 
              variant="outline" 
              size="icon" 
              className="h-8 w-8 rounded"
              onClick={() => handleQuantityChange(item.quantity + 1)}
            >
              <Plus size={14} />
            </Button>
          </div>
          
          <Button 
            variant="ghost" 
            size="sm" 
            className="text-red-500 hover:text-red-700 hover:bg-red-50 dark:hover:bg-red-900/10 transition-colors px-2 h-8"
            onClick={handleRemove}
          >
            <Trash size={16} className="mr-1" />
            Remove
          </Button>
        </div>
      </div>
    </div>
  );
}
