
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { duration: 0.7, ease: [0.4, 0, 0.2, 1] }
    }
  };

  return (
    <div className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/30 z-10" />
        <img 
          src="/images/hero-background.jpg" 
          alt="Bicol Handicrafts" 
          className="w-full h-full object-cover object-center"
        />
      </div>
      
      <div className="container relative z-10 px-4 mx-auto">
        <motion.div 
          className="max-w-2xl text-white"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <motion.div variants={itemVariants}>
            <span className="inline-block px-3 py-1 text-xs font-semibold bg-terracotta-500/90 rounded-full mb-5">
              Authentic Bicol Handicrafts
            </span>
          </motion.div>
          
          <motion.h1 
            className="text-4xl md:text-5xl lg:text-6xl font-display font-bold leading-tight mb-6"
            variants={itemVariants}
          >
            Discover the Artistry of Bicol Region
          </motion.h1>
          
          <motion.p 
            className="text-lg md:text-xl opacity-90 mb-8 max-w-xl"
            variants={itemVariants}
          >
            Exquisite handcrafted treasures made by skilled artisans, 
            preserving cultural heritage while supporting local communities.
          </motion.p>
          
          <motion.div 
            className="flex flex-wrap gap-4"
            variants={itemVariants}
          >
            <Button 
              size="lg" 
              className="bg-terracotta-500 hover:bg-terracotta-600 text-white rounded-full px-8 group"
              asChild
            >
              <Link to="/products">
                Shop Now
                <ArrowRight size={18} className="ml-2 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
            
            <Button 
              size="lg" 
              variant="outline" 
              className="rounded-full border-white/60 text-white hover:bg-white/10 px-8"
              asChild
            >
              <Link to="/artisans">
                Our Artisans
              </Link>
            </Button>
          </motion.div>
        </motion.div>
      </div>
      
      {/* Decorative Elements */}
      <div className="absolute right-0 bottom-0 w-1/3 h-1/3 bg-gradient-radial from-terracotta-500/30 to-transparent blur-3xl pointer-events-none opacity-60 z-0" />
    </div>
  );
}
