
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { Button } from '@/components/ui/button';

// Sample testimonials data
const testimonials = [
  {
    id: 1,
    name: 'Maria Torres',
    location: 'Manila',
    quote: 'The quality of the abaca bag I purchased exceeded my expectations. The craftsmanship is exquisite, and I love knowing my purchase supports local artisans in Bicol.',
    image: '/images/testimonials/testimonial-1.jpg'
  },
  {
    id: 2,
    name: 'John Rivera',
    location: 'Cebu City',
    quote: 'I bought several shell craft items as gifts, and everyone was impressed by their beauty and uniqueness. The packaging was also thoughtful and eco-friendly.',
    image: '/images/testimonials/testimonial-2.jpg'
  },
  {
    id: 3,
    name: 'Sophie Reyes',
    location: 'Singapore',
    quote: 'The traditional clay pottery I ordered arrived safely all the way to Singapore! It now has a special place in my home and always starts conversations with guests.',
    image: '/images/testimonials/testimonial-3.jpg'
  }
];

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const handlePrev = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };
  
  const handleNext = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };
  
  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    })
  };

  const [direction, setDirection] = useState(0);

  const nextSlide = () => {
    setDirection(1);
    handleNext();
  };

  const prevSlide = () => {
    setDirection(-1);
    handlePrev();
  };

  return (
    <section className="py-20 bg-bicolartistry-50 dark:bg-bicolartistry-900/50">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-12">
          <span className="inline-block px-3 py-1 text-xs font-semibold text-terracotta-700 bg-terracotta-100 rounded-full mb-3 dark:bg-terracotta-900/30 dark:text-terracotta-300">
            Testimonials
          </span>
          <h2 className="text-3xl font-display font-semibold mb-4">What Our Customers Say</h2>
        </div>
        
        <div className="relative max-w-4xl mx-auto">
          <div className="overflow-hidden rounded-2xl glass-card">
            <div className="relative h-72 md:h-64">
              <AnimatePresence initial={false} custom={direction}>
                <motion.div
                  key={currentIndex}
                  custom={direction}
                  variants={variants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{
                    x: { type: "spring", stiffness: 300, damping: 30 },
                    opacity: { duration: 0.2 }
                  }}
                  className="absolute inset-0 flex flex-col md:flex-row"
                >
                  <div className="w-full md:w-1/3 relative h-32 md:h-full">
                    <img 
                      src={testimonials[currentIndex].image} 
                      alt={testimonials[currentIndex].name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="w-full md:w-2/3 p-6 md:p-8 flex flex-col justify-center relative">
                    <Quote size={30} className="absolute top-4 left-6 text-terracotta-200 dark:text-terracotta-900/50" />
                    <p className="text-bicolartistry-600 dark:text-bicolartistry-300 italic mb-6 relative z-10">
                      "{testimonials[currentIndex].quote}"
                    </p>
                    <div>
                      <h4 className="font-semibold">{testimonials[currentIndex].name}</h4>
                      <p className="text-sm text-bicolartistry-500 dark:text-bicolartistry-400">{testimonials[currentIndex].location}</p>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
          
          <div className="flex justify-center mt-8 space-x-2">
            <Button 
              variant="outline" 
              size="icon" 
              onClick={prevSlide}
              className="rounded-full hover:bg-terracotta-100 hover:text-terracotta-600 dark:hover:bg-terracotta-900/20 dark:hover:text-terracotta-300"
            >
              <ChevronLeft size={18} />
            </Button>
            
            {testimonials.map((_, index) => (
              <Button 
                key={index} 
                variant="ghost" 
                size="sm" 
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 p-0 rounded-full ${
                  index === currentIndex
                    ? 'bg-terracotta-500'
                    : 'bg-bicolartistry-300 dark:bg-bicolartistry-700'
                }`}
              >
                <span className="sr-only">Go to slide {index + 1}</span>
              </Button>
            ))}
            
            <Button 
              variant="outline" 
              size="icon" 
              onClick={nextSlide}
              className="rounded-full hover:bg-terracotta-100 hover:text-terracotta-600 dark:hover:bg-terracotta-900/20 dark:hover:text-terracotta-300"
            >
              <ChevronRight size={18} />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
