
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export function ArtisanStory() {
  return (
    <section className="py-20 overflow-hidden">
      <div className="container px-4 mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="order-2 lg:order-1"
          >
            <span className="inline-block px-3 py-1 text-xs font-semibold text-terracotta-700 bg-terracotta-100 rounded-full mb-4 dark:bg-terracotta-900/30 dark:text-terracotta-300">
              Our Artisans
            </span>
            <h2 className="text-3xl font-display font-semibold mb-6">The Hands Behind the Craft</h2>
            <p className="text-bicolartistry-600 dark:text-bicolartistry-300 mb-6 text-lg">
              Every piece tells a story, a narrative woven through generations of Bicol artisans who have preserved ancient techniques while adapting to modern sensibilities.
            </p>
            <p className="text-bicolartistry-600 dark:text-bicolartistry-300 mb-8">
              Our artisans work with natural materials like abaca, raffia, shells, and clay, transforming them into functional works of art that reflect the rich cultural heritage of the Bicol region. By supporting our marketplace, you're not just acquiring a beautiful handcrafted item – you're helping sustain traditional skills and provide sustainable livelihoods to local communities.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Button 
                className="bg-terracotta-500 hover:bg-terracotta-600 text-white rounded-full px-6 group"
                asChild
              >
                <Link to="/artisans">
                  Meet Our Artisans
                  <ArrowRight size={16} className="ml-2 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              
              <Button 
                variant="outline" 
                className="rounded-full border-bicolartistry-300 dark:border-bicolartistry-700 hover:bg-bicolartistry-100 dark:hover:bg-bicolartistry-800 px-6"
                asChild
              >
                <Link to="/about">
                  Our Story
                </Link>
              </Button>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="order-1 lg:order-2 relative"
          >
            <div className="relative z-10 rounded-xl overflow-hidden shadow-lg">
              <img 
                src="/images/artisan-working.jpg" 
                alt="Bicol Artisan" 
                className="w-full h-auto"
              />
            </div>
            
            <div className="hidden lg:block absolute -bottom-10 -left-10 w-32 h-32 rounded-full bg-terracotta-100 dark:bg-terracotta-900/30 z-0 animate-float" />
            <div className="hidden lg:block absolute -top-8 -right-8 w-24 h-24 rounded-full bg-teal-100 dark:bg-teal-900/30 z-0 animate-float" style={{ animationDelay: '2s' }} />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
