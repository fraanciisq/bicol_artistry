
import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Layout } from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { ProductGrid } from '@/components/products/ProductGrid';
import { Separator } from '@/components/ui/separator';
import { Heart, Minus, Plus, ShoppingCart, Share2, Truck, ShieldCheck, ArrowLeft } from 'lucide-react';
import { toast } from 'sonner';
import { useCart } from '@/contexts/CartContext';
import { getProductById, getRelatedProducts } from '@/data/products';

const ProductDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const [currentProduct, setCurrentProduct] = useState(id ? getProductById(id) : undefined);
  const [quantity, setQuantity] = useState(1);
  const [activeImage, setActiveImage] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const { addItem, isInCart } = useCart();
  
  useEffect(() => {
    if (id) {
      const product = getProductById(id);
      setCurrentProduct(product);
      setActiveImage(0); // Reset active image when product changes
      
      // Simulate loading
      setIsLoading(true);
      const timer = setTimeout(() => {
        setIsLoading(false);
      }, 500);
      
      return () => clearTimeout(timer);
    }
  }, [id]);
  
  if (!currentProduct) {
    return (
      <Layout>
        <div className="container px-4 mx-auto py-12 text-center">
          <h1 className="text-2xl font-semibold mb-4">Product Not Found</h1>
          <p className="mb-6">The product you're looking for doesn't exist or has been removed.</p>
          <Button asChild>
            <Link to="/products">
              <ArrowLeft size={16} className="mr-2" />
              Back to Products
            </Link>
          </Button>
        </div>
      </Layout>
    );
  }
  
  const relatedProducts = getRelatedProducts(currentProduct.id);
  
  const handleQuantityChange = (newQuantity: number) => {
    if (newQuantity < 1) return;
    setQuantity(newQuantity);
  };
  
  const handleAddToCart = () => {
    addItem(currentProduct, quantity);
  };
  
  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: currentProduct.name,
        text: `Check out this ${currentProduct.name} on BicolArtistry!`,
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
    <Layout>
      <div className="container px-4 mx-auto py-12">
        <div className="mb-6 flex items-center text-sm">
          <Link to="/" className="text-bicolartistry-500 hover:text-terracotta-500 transition-colors">
            Home
          </Link>
          <span className="mx-2">/</span>
          <Link to="/products" className="text-bicolartistry-500 hover:text-terracotta-500 transition-colors">
            Products
          </Link>
          <span className="mx-2">/</span>
          <span className="font-medium truncate">{currentProduct.name}</span>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Images */}
          <div>
            {isLoading ? (
              <div className="aspect-square rounded-xl bg-bicolartistry-200 dark:bg-bicolartistry-800 animate-pulse" />
            ) : (
              <div className="space-y-4">
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                  className="aspect-square rounded-xl overflow-hidden bg-white"
                >
                  <img 
                    src={currentProduct.images[activeImage]} 
                    alt={currentProduct.name} 
                    className="w-full h-full object-contain"
                  />
                </motion.div>
                
                {currentProduct.images.length > 1 && (
                  <div className="grid grid-cols-5 gap-3">
                    {currentProduct.images.map((image, index) => (
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
                          src={image} 
                          alt={`${currentProduct.name} - View ${index + 1}`} 
                          className="w-full h-full object-cover"
                        />
                      </button>
                    ))}
                  </div>
                )}
              </div>
            )}
          </div>
          
          {/* Product Info */}
          <div>
            {isLoading ? (
              <div className="space-y-4">
                <div className="h-8 bg-bicolartistry-200 dark:bg-bicolartistry-800 rounded animate-pulse w-3/4" />
                <div className="h-6 bg-bicolartistry-200 dark:bg-bicolartistry-800 rounded animate-pulse w-1/4" />
                <div className="h-4 bg-bicolartistry-200 dark:bg-bicolartistry-800 rounded animate-pulse w-full" />
                <div className="h-4 bg-bicolartistry-200 dark:bg-bicolartistry-800 rounded animate-pulse w-full" />
                <div className="h-4 bg-bicolartistry-200 dark:bg-bicolartistry-800 rounded animate-pulse w-3/4" />
              </div>
            ) : (
              <>
                <h1 className="text-3xl font-display font-semibold mb-3">{currentProduct.name}</h1>
                
                <div className="flex items-center gap-4 mb-5">
                  <div className="text-2xl font-semibold text-terracotta-600 dark:text-terracotta-400">
                    ₱{currentProduct.price.toLocaleString()}
                  </div>
                  
                  <div className="flex items-center">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <svg
                          key={i}
                          className={`w-4 h-4 ${
                            i < Math.floor(currentProduct.rating || 0)
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
                    <span className="text-sm text-gray-500 dark:text-gray-400 ml-1">
                      {currentProduct.rating} ({currentProduct.reviews?.length || 0} reviews)
                    </span>
                  </div>
                </div>
                
                <p className="text-bicolartistry-600 dark:text-bicolartistry-300 mb-6">
                  {currentProduct.description}
                </p>
                
                <div className="space-y-5 mb-8">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <h3 className="text-sm font-medium text-bicolartistry-500 dark:text-bicolartistry-400 mb-1">Category</h3>
                      <p>{currentProduct.category}</p>
                    </div>
                    
                    {currentProduct.artisan && (
                      <div>
                        <h3 className="text-sm font-medium text-bicolartistry-500 dark:text-bicolartistry-400 mb-1">Artisan</h3>
                        <Link 
                          to={`/artisan/${currentProduct.artisan.id}`} 
                          className="text-terracotta-600 hover:text-terracotta-700 dark:text-terracotta-400 dark:hover:text-terracotta-300 transition-colors"
                        >
                          {currentProduct.artisan.name}
                        </Link>
                      </div>
                    )}
                    
                    {currentProduct.material && (
                      <div>
                        <h3 className="text-sm font-medium text-bicolartistry-500 dark:text-bicolartistry-400 mb-1">Material</h3>
                        <p>{currentProduct.material}</p>
                      </div>
                    )}
                    
                    {currentProduct.dimensions && (
                      <div>
                        <h3 className="text-sm font-medium text-bicolartistry-500 dark:text-bicolartistry-400 mb-1">Dimensions</h3>
                        <p>{currentProduct.dimensions}</p>
                      </div>
                    )}
                  </div>
                </div>
                
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
                      {currentProduct.inStock ? (
                        <span className="text-green-600 dark:text-green-400">In Stock</span>
                      ) : (
                        <span className="text-red-600 dark:text-red-400">Out of Stock</span>
                      )}
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-3">
                    <Button 
                      className={`flex-1 h-12 rounded-full group ${
                        isInCart(currentProduct.id)
                          ? 'bg-terracotta-600 hover:bg-terracotta-700'
                          : 'bg-terracotta-500 hover:bg-terracotta-600'
                      } text-white`}
                      onClick={handleAddToCart}
                      disabled={!currentProduct.inStock}
                    >
                      <ShoppingCart size={18} className="mr-2" />
                      {isInCart(currentProduct.id) ? 'Add More to Cart' : 'Add to Cart'}
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
            )}
          </div>
        </div>
        
        {/* Related Products */}
        <div className="mt-20">
          <ProductGrid 
            products={relatedProducts}
            title="You Might Also Like"
            subtitle="Explore more beautiful handcrafted products from the Bicol region"
            loading={isLoading}
          />
        </div>
      </div>
    </Layout>
  );
};

export default ProductDetailPage;
