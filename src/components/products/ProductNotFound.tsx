
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';

export function ProductNotFound() {
  return (
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
  );
}
