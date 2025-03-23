
import { Link } from 'react-router-dom';

interface ProductBreadcrumbsProps {
  productName: string;
}

export function ProductBreadcrumbs({ productName }: ProductBreadcrumbsProps) {
  return (
    <div className="mb-6 flex items-center text-sm">
      <Link to="/" className="text-bicolartistry-500 hover:text-terracotta-500 transition-colors">
        Home
      </Link>
      <span className="mx-2">/</span>
      <Link to="/products" className="text-bicolartistry-500 hover:text-terracotta-500 transition-colors">
        Products
      </Link>
      <span className="mx-2">/</span>
      <span className="font-medium truncate">{productName}</span>
    </div>
  );
}
