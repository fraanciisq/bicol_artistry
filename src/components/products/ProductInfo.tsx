
import { Link } from 'react-router-dom';
import { Product } from '@/types';

interface ProductInfoProps {
  product: Product;
  isLoading: boolean;
}

export function ProductInfo({ product, isLoading }: ProductInfoProps) {
  if (isLoading) {
    return (
      <div className="space-y-4">
        <div className="h-8 bg-bicolartistry-200 dark:bg-bicolartistry-800 rounded animate-pulse w-3/4" />
        <div className="h-6 bg-bicolartistry-200 dark:bg-bicolartistry-800 rounded animate-pulse w-1/4" />
        <div className="h-4 bg-bicolartistry-200 dark:bg-bicolartistry-800 rounded animate-pulse w-full" />
        <div className="h-4 bg-bicolartistry-200 dark:bg-bicolartistry-800 rounded animate-pulse w-full" />
        <div className="h-4 bg-bicolartistry-200 dark:bg-bicolartistry-800 rounded animate-pulse w-3/4" />
      </div>
    );
  }

  return (
    <>
      <h1 className="text-3xl font-display font-semibold mb-3">{product.name}</h1>
      
      <div className="flex items-center gap-4 mb-5">
        <div className="text-2xl font-semibold text-terracotta-600 dark:text-terracotta-400">
          ₱{product.price.toLocaleString()}
        </div>
        
        <div className="flex items-center">
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <svg
                key={i}
                className={`w-4 h-4 ${
                  i < Math.floor(product.rating || 0)
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
            {product.rating} ({product.reviews?.length || 0} reviews)
          </span>
        </div>
      </div>
      
      <p className="text-bicolartistry-600 dark:text-bicolartistry-300 mb-6">
        {product.description}
      </p>
      
      <div className="space-y-5 mb-8">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <h3 className="text-sm font-medium text-bicolartistry-500 dark:text-bicolartistry-400 mb-1">Category</h3>
            <p>{product.category}</p>
          </div>
          
          {product.artisan && (
            <div>
              <h3 className="text-sm font-medium text-bicolartistry-500 dark:text-bicolartistry-400 mb-1">Artisan</h3>
              <Link 
                to={`/artisan/${product.artisan.id}`} 
                className="text-terracotta-600 hover:text-terracotta-700 dark:text-terracotta-400 dark:hover:text-terracotta-300 transition-colors"
              >
                {product.artisan.name}
              </Link>
            </div>
          )}
          
          {product.material && (
            <div>
              <h3 className="text-sm font-medium text-bicolartistry-500 dark:text-bicolartistry-400 mb-1">Material</h3>
              <p>{product.material}</p>
            </div>
          )}
          
          {product.dimensions && (
            <div>
              <h3 className="text-sm font-medium text-bicolartistry-500 dark:text-bicolartistry-400 mb-1">Dimensions</h3>
              <p>{product.dimensions}</p>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
