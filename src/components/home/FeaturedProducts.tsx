
import { useState, useEffect } from 'react';
import { ProductGrid } from '@/components/products/ProductGrid';
import { getFeaturedProducts } from '@/data';

export function FeaturedProducts() {
  const [featuredProducts, setFeaturedProducts] = useState(getFeaturedProducts());
  
  // Ensure products have fallback images
  useEffect(() => {
    const productsWithFallbacks = featuredProducts.map(product => ({
      ...product,
      images: product.images.map(img => img || '/placeholder.svg')
    }));
    
    setFeaturedProducts(productsWithFallbacks);
  }, []);
  
  return (
    <section className="py-20">
      <div className="container px-4 mx-auto">
        <ProductGrid 
          products={featuredProducts}
          title="Featured Products"
          subtitle="Discover our handpicked selection of exquisite Bicol handicrafts, showcasing the finest craftsmanship and cultural heritage of the region."
        />
      </div>
    </section>
  );
}
