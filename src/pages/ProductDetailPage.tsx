
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Layout } from '@/components/layout/Layout';
import { ProductGrid } from '@/components/products/ProductGrid';
import { ProductBreadcrumbs } from '@/components/products/ProductBreadcrumbs';
import { ProductImageGallery } from '@/components/products/ProductImageGallery';
import { ProductInfo } from '@/components/products/ProductInfo';
import { ProductActions } from '@/components/products/ProductActions';
import { ProductNotFound } from '@/components/products/ProductNotFound';
import { getProductById, getRelatedProducts } from '@/data/products';

const ProductDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const [currentProduct, setCurrentProduct] = useState(id ? getProductById(id) : undefined);
  const [isLoading, setIsLoading] = useState(true);
  const [relatedProducts, setRelatedProducts] = useState<ReturnType<typeof getRelatedProducts>>([]);
  
  useEffect(() => {
    if (id) {
      const product = getProductById(id);
      setCurrentProduct(product);
      
      // Get related products
      if (product) {
        setRelatedProducts(getRelatedProducts(product.id));
      }
      
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
        <ProductNotFound />
      </Layout>
    );
  }
  
  return (
    <Layout>
      <div className="container px-4 mx-auto py-12">
        <ProductBreadcrumbs productName={currentProduct.name} />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Images */}
          <ProductImageGallery 
            images={currentProduct.images} 
            productName={currentProduct.name} 
            isLoading={isLoading} 
          />
          
          {/* Product Info */}
          <div>
            <ProductInfo product={currentProduct} isLoading={isLoading} />
            <ProductActions product={currentProduct} />
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
