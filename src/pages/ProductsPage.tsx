import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Layout } from '@/components/layout/Layout';
import { ProductGrid } from '@/components/products/ProductGrid';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Search, Filter, ChevronDown } from 'lucide-react';
import { products, categories } from '@/data';
import { Product } from '@/types';

const ProductsPage = () => {
  const { categorySlug } = useParams<{ categorySlug: string }>();
  const [filteredProducts, setFilteredProducts] = useState<Product[]>(products);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState(categorySlug || '');
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 5000]);
  const [sortOption, setSortOption] = useState('featured');
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  // Update selectedCategory when categorySlug changes
  useEffect(() => {
    setSelectedCategory(categorySlug || '');
  }, [categorySlug]);

  // Simulate loading state
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 800);
    
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    // Filter products based on search, category, and price
    let filtered = [...products];
    
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(
        product => 
          product.name.toLowerCase().includes(query) || 
          product.description.toLowerCase().includes(query) ||
          product.category.toLowerCase().includes(query)
      );
    }
    
    if (selectedCategory) {
      filtered = filtered.filter(
        product => product.category.toLowerCase() === selectedCategory.toLowerCase()
      );
    }
    
    filtered = filtered.filter(
      product => product.price >= priceRange[0] && product.price <= priceRange[1]
    );
    
    // Sort products
    switch (sortOption) {
      case 'price-low':
        filtered.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        filtered.sort((a, b) => b.price - a.price);
        break;
      case 'newest':
        filtered.sort((a, b) => 
          new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
        );
        break;
      case 'rating':
        filtered.sort((a, b) => (b.rating || 0) - (a.rating || 0));
        break;
      default: // 'featured'
        filtered = filtered.sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0));
    }
    
    setFilteredProducts(filtered);
  }, [searchQuery, selectedCategory, priceRange, sortOption]);

  const resetFilters = () => {
    setSearchQuery('');
    setSelectedCategory('');
    setPriceRange([0, 5000]);
    setSortOption('featured');
  };

  return (
    <Layout>
      <div className="container px-4 mx-auto py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-display font-bold mb-4">Explore Our Handicrafts</h1>
          <p className="text-bicolartistry-600 dark:text-bicolartistry-300 max-w-2xl mx-auto">
            Discover authentic handcrafted treasures that showcase the rich cultural heritage and artistic tradition of the Bicol region.
          </p>
        </div>
        
        <div className="mb-8">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="relative w-full md:w-auto flex-1 max-w-md">
              <Search size={18} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-bicolartistry-400" />
              <Input
                type="text"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
            
            <div className="flex flex-wrap items-center gap-3 w-full md:w-auto">
              <div className="flex items-center gap-3">
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="flex items-center"
                  onClick={() => setIsFilterOpen(!isFilterOpen)}
                >
                  <Filter size={16} className="mr-2" />
                  Filters
                  <ChevronDown size={16} className={`ml-2 transition-transform ${isFilterOpen ? 'rotate-180' : ''}`} />
                </Button>
                
                <select 
                  value={sortOption}
                  onChange={(e) => setSortOption(e.target.value)}
                  className="h-9 rounded-md border border-input bg-background px-3 py-1 text-sm shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground"
                >
                  <option value="featured">Featured</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="newest">Newest</option>
                  <option value="rating">Highest Rated</option>
                </select>
              </div>
              
              <p className="text-sm text-bicolartistry-500 dark:text-bicolartistry-400">
                Showing {filteredProducts.length} of {products.length} products
              </p>
            </div>
          </div>
          
          {isFilterOpen && (
            <motion.div 
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="mt-4 p-4 border border-bicolartistry-200 dark:border-bicolartistry-700 rounded-md"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div>
                  <h3 className="font-medium mb-2">Categories</h3>
                  <div className="space-y-2">
                    <label className="flex items-center">
                      <input 
                        type="radio" 
                        name="category" 
                        value=""
                        checked={selectedCategory === ''}
                        onChange={() => setSelectedCategory('')}
                        className="mr-2"
                      />
                      All Categories
                    </label>
                    
                    {categories.map((category) => (
                      <label key={category.id} className="flex items-center">
                        <input 
                          type="radio" 
                          name="category" 
                          value={category.name}
                          checked={selectedCategory === category.name}
                          onChange={() => setSelectedCategory(category.name)}
                          className="mr-2"
                        />
                        {category.name}
                      </label>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h3 className="font-medium mb-2">Price Range</h3>
                  <div className="space-y-2">
                    <div className="flex gap-4 items-center">
                      <Input 
                        type="number" 
                        min="0" 
                        max={priceRange[1]}
                        value={priceRange[0]}
                        onChange={(e) => setPriceRange([Number(e.target.value), priceRange[1]])}
                        className="w-24"
                      />
                      <span>to</span>
                      <Input 
                        type="number" 
                        min={priceRange[0]}
                        value={priceRange[1]}
                        onChange={(e) => setPriceRange([priceRange[0], Number(e.target.value)])}
                        className="w-24"
                      />
                    </div>
                  </div>
                </div>
                
                <div className="col-span-1 md:col-span-2 flex items-end justify-end">
                  <Button 
                    variant="outline" 
                    onClick={resetFilters}
                  >
                    Reset Filters
                  </Button>
                </div>
              </div>
            </motion.div>
          )}
        </div>
        
        <ProductGrid 
          products={filteredProducts}
          emptyMessage="No products match your search criteria. Try adjusting your filters."
          loading={isLoading}
        />
      </div>
    </Layout>
  );
};

export default ProductsPage;
