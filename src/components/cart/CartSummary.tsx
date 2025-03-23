
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { useCart } from '@/contexts/CartContext';
import { Link } from 'react-router-dom';
import { ArrowRight, CreditCard, Truck } from 'lucide-react';

export function CartSummary() {
  const { subtotal, itemCount } = useCart();
  const [isProcessing, setIsProcessing] = useState(false);
  
  // Calculate other values based on subtotal
  const shipping = subtotal > 0 ? 150 : 0; // Free shipping over a certain amount
  const tax = subtotal * 0.12; // 12% VAT
  const total = subtotal + shipping + tax;
  
  const handleCheckout = () => {
    setIsProcessing(true);
    
    // Simulate checkout process
    setTimeout(() => {
      setIsProcessing(false);
      // Redirect to checkout page
      window.location.href = '/checkout';
    }, 1000);
  };
  
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="glass-card glass-card-hover p-6 rounded-xl sticky top-24"
    >
      <h2 className="text-xl font-display font-semibold mb-6">Order Summary</h2>
      
      <div className="space-y-3 mb-6">
        <div className="flex justify-between">
          <span className="text-bicolartistry-600 dark:text-bicolartistry-300">Subtotal ({itemCount} items)</span>
          <span className="font-medium">₱{subtotal.toLocaleString()}</span>
        </div>
        
        <div className="flex justify-between">
          <span className="text-bicolartistry-600 dark:text-bicolartistry-300">Shipping</span>
          <span className="font-medium">
            {shipping > 0 ? `₱${shipping.toLocaleString()}` : 'Free'}
          </span>
        </div>
        
        <div className="flex justify-between">
          <span className="text-bicolartistry-600 dark:text-bicolartistry-300">Tax (12% VAT)</span>
          <span className="font-medium">₱{tax.toLocaleString()}</span>
        </div>
        
        <div className="border-t border-bicolartistry-200 dark:border-bicolartistry-700 pt-3 mt-3 flex justify-between">
          <span className="font-medium">Total</span>
          <span className="text-xl font-semibold text-terracotta-600 dark:text-terracotta-400">
            ₱{total.toLocaleString()}
          </span>
        </div>
      </div>
      
      <Button 
        className="w-full bg-terracotta-500 hover:bg-terracotta-600 text-white h-12 rounded-full group mb-4"
        disabled={subtotal === 0 || isProcessing}
        onClick={handleCheckout}
      >
        {isProcessing ? 'Processing...' : 'Proceed to Checkout'}
        <ArrowRight size={16} className="ml-2 transition-transform group-hover:translate-x-1" />
      </Button>
      
      <div className="space-y-3 text-sm">
        <div className="flex items-center text-bicolartistry-500 dark:text-bicolartistry-400">
          <Truck size={16} className="mr-2 text-terracotta-500" />
          Free shipping on orders over ₱2,000
        </div>
        
        <div className="flex items-center text-bicolartistry-500 dark:text-bicolartistry-400">
          <CreditCard size={16} className="mr-2 text-terracotta-500" />
          Secure payment processing
        </div>
      </div>
      
      <div className="mt-6 pt-4 border-t border-bicolartistry-200 dark:border-bicolartistry-700 text-center">
        <p className="text-sm text-bicolartistry-500 dark:text-bicolartistry-400 mb-3">
          Need help with your order?
        </p>
        <Link 
          to="/contact" 
          className="text-sm font-medium text-terracotta-600 hover:text-terracotta-700 dark:text-terracotta-400 dark:hover:text-terracotta-300 transition-colors"
        >
          Contact Customer Support
        </Link>
      </div>
    </motion.div>
  );
}
