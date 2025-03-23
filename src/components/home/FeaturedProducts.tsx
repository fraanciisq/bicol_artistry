
import { ProductGrid } from '@/components/products/ProductGrid';
import { getFeaturedProducts } from '@/data/products';

export function FeaturedProducts() {
  const featuredProducts = getFeaturedProducts();
  
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
