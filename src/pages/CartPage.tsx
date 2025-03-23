
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Layout } from '@/components/layout/Layout';
import { CartItem } from '@/components/cart/CartItem';
import { CartSummary } from '@/components/cart/CartSummary';
import { Button } from '@/components/ui/button';
import { useCart } from '@/contexts/CartContext';
import { ArrowLeft, ShoppingCart } from 'lucide-react';

const CartPage = () => {
  const { items, clearCart } = useCart();
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };
  
  return (
    <Layout>
      <div className="container px-4 mx-auto py-12">
        <div className="mb-8">
          <h1 className="text-3xl font-display font-semibold mb-2">Shopping Cart</h1>
          <p className="text-bicolartistry-600 dark:text-bicolartistry-300">
            Review your items and proceed to checkout
          </p>
        </div>
        
        {items.length > 0 ? (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <motion.div 
              className="lg:col-span-2"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              <div className="bg-white dark:bg-bicolartistry-900 rounded-xl shadow-sm p-6">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-lg font-medium">
                    Cart Items ({items.length})
                  </h2>
                  <Button 
                    variant="outline" 
                    size="sm"
                    onClick={clearCart}
                  >
                    Clear Cart
                  </Button>
                </div>
                
                <div className="divide-y divide-bicolartistry-200 dark:divide-bicolartistry-700">
                  {items.map((item) => (
                    <motion.div key={item.productId} variants={itemVariants}>
                      <CartItem item={item} />
                    </motion.div>
                  ))}
                </div>
                
                <div className="mt-8 pt-4 border-t border-bicolartistry-200 dark:border-bicolartistry-700">
                  <Button 
                    variant="outline" 
                    className="rounded-full"
                    asChild
                  >
                    <Link to="/products">
                      <ArrowLeft size={16} className="mr-2" />
                      Continue Shopping
                    </Link>
                  </Button>
                </div>
              </div>
            </motion.div>
            
            <div>
              <CartSummary />
            </div>
          </div>
        ) : (
          <div className="text-center py-16 max-w-md mx-auto">
            <div className="mb-6 w-24 h-24 mx-auto bg-bicolartistry-100 dark:bg-bicolartistry-800 rounded-full flex items-center justify-center">
              <ShoppingCart size={32} className="text-bicolartistry-400 dark:text-bicolartistry-500" />
            </div>
            
            <h2 className="text-2xl font-display font-semibold mb-3">Your cart is empty</h2>
            <p className="text-bicolartistry-600 dark:text-bicolartistry-300 mb-8">
              Looks like you haven't added any products to your cart yet.
            </p>
            
            <Button 
              className="rounded-full bg-terracotta-500 hover:bg-terracotta-600 text-white px-8"
              asChild
            >
              <Link to="/products">
                Start Shopping
              </Link>
            </Button>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default CartPage;
