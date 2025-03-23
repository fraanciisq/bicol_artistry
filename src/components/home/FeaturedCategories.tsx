
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { categories } from '@/data/products';

export function FeaturedCategories() {
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
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section className="py-20 bg-bicolartistry-50 dark:bg-bicolartistry-900/50">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-12">
          <span className="inline-block px-3 py-1 text-xs font-semibold text-terracotta-700 bg-terracotta-100 rounded-full mb-3 dark:bg-terracotta-900/30 dark:text-terracotta-300">
            Explore Collections
          </span>
          <h2 className="text-3xl font-display font-semibold mb-4">Handcrafted Categories</h2>
          <p className="text-bicolartistry-600 dark:text-bicolartistry-300 max-w-2xl mx-auto">
            Discover our curated collection of authentic Bicol handicrafts, each category representing centuries of tradition and craftsmanship.
          </p>
        </div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          {categories.slice(0, 3).map((category, index) => (
            <motion.div 
              key={category.id}
              variants={itemVariants}
              className="group relative overflow-hidden rounded-xl shadow-sm hover:shadow-lg transition-shadow duration-300"
            >
              <Link to={`/category/${category.slug}`} className="block">
                <div className="aspect-[4/5] overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-black/10 z-10" />
                  <img 
                    src={category.image}
                    alt={category.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                
                <div className="absolute bottom-0 left-0 right-0 p-6 z-20 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-xl font-display font-semibold text-white mb-2">{category.name}</h3>
                  <p className="text-white/80 text-sm mb-4 line-clamp-2">{category.description}</p>
                  <div className="flex items-center text-terracotta-300 text-sm font-medium group-hover:text-terracotta-200 transition-colors">
                    <span>View Collection</span>
                    <ArrowRight size={16} className="ml-2 transform group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
        
        <div className="text-center mt-12">
          <Link 
            to="/products" 
            className="inline-flex items-center text-terracotta-600 hover:text-terracotta-700 font-medium dark:text-terracotta-400 dark:hover:text-terracotta-300 transition-colors"
          >
            View All Categories
            <ArrowRight size={16} className="ml-2" />
          </Link>
        </div>
      </div>
    </section>
  );
}
