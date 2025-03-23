
import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { CartItem, Product } from '@/types';
import { toast } from 'sonner';

interface CartContextType {
  items: CartItem[];
  itemCount: number;
  subtotal: number;
  addItem: (product: Product, quantity?: number) => void;
  removeItem: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  clearCart: () => void;
  isInCart: (productId: string) => boolean;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const useCart = (): CartContextType => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};

interface CartProviderProps {
  children: ReactNode;
}

export const CartProvider = ({ children }: CartProviderProps) => {
  const [items, setItems] = useState<CartItem[]>([]);
  
  // Load cart from localStorage on initial render
  useEffect(() => {
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
      try {
        setItems(JSON.parse(savedCart));
      } catch (error) {
        console.error('Failed to parse cart from localStorage', error);
        setItems([]);
      }
    }
  }, []);
  
  // Save cart to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(items));
  }, [items]);
  
  // Calculate total number of items
  const itemCount = items.reduce((total, item) => total + item.quantity, 0);
  
  // Calculate subtotal
  const subtotal = items.reduce((total, item) => {
    return total + (item.product.price * item.quantity);
  }, 0);
  
  // Add item to cart
  const addItem = (product: Product, quantity = 1) => {
    setItems(prevItems => {
      const existingItem = prevItems.find(item => item.productId === product.id);
      
      if (existingItem) {
        // Item exists, update quantity
        const updatedItems = prevItems.map(item => 
          item.productId === product.id 
            ? { ...item, quantity: item.quantity + quantity } 
            : item
        );
        toast.success(`Updated ${product.name} quantity in cart`);
        return updatedItems;
      } else {
        // Item doesn't exist, add new item
        toast.success(`Added ${product.name} to cart`);
        return [...prevItems, { productId: product.id, quantity, product }];
      }
    });
  };
  
  // Remove item from cart
  const removeItem = (productId: string) => {
    setItems(prevItems => {
      const itemToRemove = prevItems.find(item => item.productId === productId);
      if (itemToRemove) {
        toast.info(`Removed ${itemToRemove.product.name} from cart`);
      }
      return prevItems.filter(item => item.productId !== productId);
    });
  };
  
  // Update item quantity
  const updateQuantity = (productId: string, quantity: number) => {
    if (quantity < 1) {
      removeItem(productId);
      return;
    }
    
    setItems(prevItems => 
      prevItems.map(item => 
        item.productId === productId 
          ? { ...item, quantity } 
          : item
      )
    );
  };
  
  // Clear cart
  const clearCart = () => {
    setItems([]);
    toast.info('Cart cleared');
  };
  
  // Check if product is in cart
  const isInCart = (productId: string) => {
    return items.some(item => item.productId === productId);
  };
  
  return (
    <CartContext.Provider value={{
      items,
      itemCount,
      subtotal,
      addItem,
      removeItem,
      updateQuantity,
      clearCart,
      isInCart
    }}>
      {children}
    </CartContext.Provider>
  );
};
