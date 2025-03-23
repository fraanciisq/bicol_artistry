
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { toast } from 'sonner';

export function Newsletter() {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      toast.success('Thank you for subscribing to our newsletter!');
      setEmail('');
      setIsSubmitting(false);
    }, 1000);
  };
  
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-terracotta-100 to-terracotta-50 dark:from-terracotta-900/20 dark:to-terracotta-900/10 z-0" />
      
      <div className="absolute -bottom-16 -right-16 w-64 h-64 rounded-full bg-teal-100/50 dark:bg-teal-900/10 blur-3xl z-0" />
      <div className="absolute -top-20 -left-20 w-80 h-80 rounded-full bg-terracotta-100/50 dark:bg-terracotta-900/10 blur-3xl z-0" />
      
      <div className="container px-4 mx-auto relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="max-w-xl mx-auto text-center"
        >
          <h2 className="text-3xl font-display font-semibold mb-4">
            Join Our Community
          </h2>
          <p className="text-bicolartistry-600 dark:text-bicolartistry-300 mb-8">
            Subscribe to our newsletter for exclusive offers, artisan stories, and updates on new product arrivals from the Bicol region.
          </p>
          
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
            <Input 
              type="email" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address" 
              required
              className="sm:flex-1"
            />
            <Button 
              type="submit" 
              disabled={isSubmitting}
              className="bg-terracotta-500 hover:bg-terracotta-600 text-white"
            >
              {isSubmitting ? 'Subscribing...' : 'Subscribe'}
            </Button>
          </form>
          <p className="text-xs text-bicolartistry-500 dark:text-bicolartistry-400 mt-4">
            By subscribing, you agree to our Privacy Policy. You can unsubscribe at any time.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
