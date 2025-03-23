
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { Heart, Minus, Plus, ShoppingCart, Share2, Truck, ShieldCheck } from 'lucide-react';
import { Product } from '@/types';
import { useCart } from '@/contexts/CartContext';
import { toast } from 'sonner';

interface ProductActionsProps {
  product: Product;
}

export function ProductActions({ product }: ProductActionsProps) {
  const [quantity, setQuantity] = useState(1);
  const { addItem, isInCart } = useCart();
  
  const handleQuantityChange = (newQuantity: number) => {
    if (newQuantity < 1) return;
    setQuantity(newQuantity);
  };
  
  const handleAddToCart = () => {
    addItem(product, quantity);
  };
  
  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: product.name,
        text: `Check out this ${product.name} on BicolArtistry!`,
        url: window.location.href,
      })
      .catch(error => console.log('Error sharing', error));
    } else {
      // Fallback for browsers that don't support the Web Share API
      navigator.clipboard.writeText(window.location.href);
      toast.success('Link copied to clipboard!');
    }
  };

  return (
    <>
      <Separator className="my-6" />
      
      <div className="mb-8">
        <div className="flex items-center gap-4 mb-6">
          <div className="flex items-center border border-bicolartistry-200 dark:border-bicolartistry-700 rounded-md">
            <Button 
              variant="ghost" 
              size="icon" 
              className="h-10 w-10 rounded-none rounded-l-md"
              onClick={() => handleQuantityChange(quantity - 1)}
            >
              <Minus size={16} />
            </Button>
            
            <div className="w-14 h-10 flex items-center justify-center font-medium border-l border-r border-bicolartistry-200 dark:border-bicolartistry-700">
              {quantity}
            </div>
            
            <Button 
              variant="ghost" 
              size="icon" 
              className="h-10 w-10 rounded-none rounded-r-md"
              onClick={() => handleQuantityChange(quantity + 1)}
            >
              <Plus size={16} />
            </Button>
          </div>
          
          <div className="text-sm text-bicolartistry-500 dark:text-bicolartistry-400">
            {product.inStock ? (
              <span className="text-green-600 dark:text-green-400">In Stock</span>
            ) : (
              <span className="text-red-600 dark:text-red-400">Out of Stock</span>
            )}
          </div>
        </div>
        
        <div className="flex flex-wrap gap-3">
          <Button 
            className={`flex-1 h-12 rounded-full group ${
              isInCart(product.id)
                ? 'bg-terracotta-600 hover:bg-terracotta-700'
                : 'bg-terracotta-500 hover:bg-terracotta-600'
            } text-white`}
            onClick={handleAddToCart}
            disabled={!product.inStock}
          >
            <ShoppingCart size={18} className="mr-2" />
            {isInCart(product.id) ? 'Add More to Cart' : 'Add to Cart'}
          </Button>
          
          <Button 
            variant="outline" 
            size="icon" 
            className="h-12 w-12 rounded-full"
          >
            <Heart size={18} />
          </Button>
          
          <Button 
            variant="outline" 
            size="icon" 
            className="h-12 w-12 rounded-full"
            onClick={handleShare}
          >
            <Share2 size={18} />
          </Button>
        </div>
      </div>
      
      <div className="space-y-4">
        <div className="flex items-center gap-3 text-sm">
          <Truck size={18} className="text-terracotta-500" />
          <span>Free shipping for orders over ₱2,000</span>
        </div>
        
        <div className="flex items-center gap-3 text-sm">
          <ShieldCheck size={18} className="text-terracotta-500" />
          <span>100% authentic handcrafted products</span>
        </div>
      </div>
    </>
  );
}
