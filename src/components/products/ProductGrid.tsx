
import { ReactNode } from 'react';
import { Product } from '@/types';
import { ProductCard } from './ProductCard';

interface ProductGridProps {
  products: Product[];
  title?: string;
  subtitle?: string;
  emptyMessage?: string;
  renderHeader?: () => ReactNode;
  loading?: boolean;
}

export function ProductGrid({
  products,
  title,
  subtitle,
  emptyMessage = "No products found",
  renderHeader,
  loading = false
}: ProductGridProps) {
  return (
    <div className="w-full">
      {renderHeader ? (
        renderHeader()
      ) : (
        title && (
          <div className="text-center mb-12">
            <h2 className="text-3xl font-display font-semibold mb-3">{title}</h2>
            {subtitle && <p className="text-bicolartistry-600 dark:text-bicolartistry-300 max-w-2xl mx-auto">{subtitle}</p>}
          </div>
        )
      )}

      {loading ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {[...Array(8)].map((_, index) => (
            <div key={index} className="rounded-xl overflow-hidden">
              <div className="aspect-square bg-bicolartistry-200 dark:bg-bicolartistry-800 animate-pulse" />
              <div className="p-4 space-y-3">
                <div className="h-5 bg-bicolartistry-200 dark:bg-bicolartistry-800 rounded animate-pulse" />
                <div className="h-4 bg-bicolartistry-200 dark:bg-bicolartistry-800 rounded w-1/2 animate-pulse" />
                <div className="h-10 bg-bicolartistry-200 dark:bg-bicolartistry-800 rounded animate-pulse" />
              </div>
            </div>
          ))}
        </div>
      ) : products.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <ProductCard key={product.id} product={product} index={index} />
          ))}
        </div>
      ) : (
        <div className="text-center py-16">
          <p className="text-bicolartistry-500 dark:text-bicolartistry-400">{emptyMessage}</p>
        </div>
      )}
    </div>
  );
}
