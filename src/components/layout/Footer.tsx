import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-bicolartistry-50 dark:bg-bicolartistry-950 border-t border-bicolartistry-200 dark:border-bicolartistry-800">
      <div className="container px-4 py-12 mx-auto">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-12">
          {/* Brand and Description */}
          <div className="md:col-span-4">
            <Link to="/" className="inline-block mb-4">
              <span className="text-2xl font-display font-bold">BicolArtistry</span>
            </Link>
            <p className="text-bicolartistry-600 dark:text-bicolartistry-300 mb-6">
              Preserving and celebrating the rich cultural heritage of Bicol through 
              authentic handcrafted products made by skilled local artisans.
            </p>
            <div className="flex space-x-4">
              <Button variant="ghost" size="icon" asChild>
                <a href="https://facebook.com">
                  <Facebook size={20} />
                </a>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <a href="https://instagram.com">
                  <Instagram size={20} />
                </a>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <a href="https://twitter.com">
                  <Twitter size={20} />
                </a>
              </Button>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="md:col-span-2">
            <h3 className="text-sm font-semibold text-bicolartistry-700 dark:text-bicolartistry-300 mb-4">Shop</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/products" className="text-bicolartistry-600 dark:text-bicolartistry-400 hover:underline">
                  All Products
                </Link>
              </li>
              <li>
                <Link to="/products/pottery" className="text-bicolartistry-600 dark:text-bicolartistry-400 hover:underline">
                  Pottery
                </Link>
              </li>
              <li>
                <Link to="/products/textiles" className="text-bicolartistry-600 dark:text-bicolartistry-400 hover:underline">
                  Textiles
                </Link>
              </li>
              <li>
                <Link to="/products/baskets" className="text-bicolartistry-600 dark:text-bicolartistry-400 hover:underline">
                  Baskets
                </Link>
              </li>
              <li>
                <Link to="/products/shell-craft" className="text-bicolartistry-600 dark:text-bicolartistry-400 hover:underline">
                  Shell Craft
                </Link>
              </li>
              <li>
                <Link to="/products/wood-carvings" className="text-bicolartistry-600 dark:text-bicolartistry-400 hover:underline">
                  Wood Carvings
                </Link>
              </li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-bicolartistry-600 dark:text-bicolartistry-300 hover:text-terracotta-500 dark:hover:text-terracotta-400 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/artisans" className="text-bicolartistry-600 dark:text-bicolartistry-300 hover:text-terracotta-500 dark:hover:text-terracotta-400 transition-colors">
                  Our Artisans
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-bicolartistry-600 dark:text-bicolartistry-300 hover:text-terracotta-500 dark:hover:text-terracotta-400 transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-bicolartistry-600 dark:text-bicolartistry-300 hover:text-terracotta-500 dark:hover:text-terracotta-400 transition-colors">
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <h3 className="text-lg font-semibold mb-4">Support</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/shipping" className="text-bicolartistry-600 dark:text-bicolartistry-300 hover:text-terracotta-500 dark:hover:text-terracotta-400 transition-colors">
                  Shipping
                </Link>
              </li>
              <li>
                <Link to="/returns" className="text-bicolartistry-600 dark:text-bicolartistry-300 hover:text-terracotta-500 dark:hover:text-terracotta-400 transition-colors">
                  Returns
                </Link>
              </li>
              <li>
                <Link to="/faq" className="text-bicolartistry-600 dark:text-bicolartistry-300 hover:text-terracotta-500 dark:hover:text-terracotta-400 transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link to="/privacy-policy" className="text-bicolartistry-600 dark:text-bicolartistry-300 hover:text-terracotta-500 dark:hover:text-terracotta-400 transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-bicolartistry-600 dark:text-bicolartistry-300 hover:text-terracotta-500 dark:hover:text-terracotta-400 transition-colors">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="md:col-span-2">
            <h3 className="text-lg font-semibold mb-4">Get in Touch</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <MapPin size={18} className="shrink-0 mt-0.5 text-terracotta-500" />
                <span className="text-bicolartistry-600 dark:text-bicolartistry-300">
                  123 Mayon Street, Legazpi City, Albay, Philippines
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone size={18} className="shrink-0 text-terracotta-500" />
                <span className="text-bicolartistry-600 dark:text-bicolartistry-300">
                  +63 (123) 456-7890
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail size={18} className="shrink-0 text-terracotta-500" />
                <span className="text-bicolartistry-600 dark:text-bicolartistry-300">
                  hello@bicolartistry.com
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Newsletter */}
        {/* <div className="border-t border-bicolartistry-200 dark:border-bicolartistry-800 mt-12 pt-12">
          <div className="max-w-xl mx-auto text-center">
            <h3 className="text-xl font-display font-semibold mb-2">Subscribe to our newsletter</h3>
            <p className="text-bicolartistry-600 dark:text-bicolartistry-300 mb-6">
              Stay updated with our latest products, artisan stories, and exclusive offers.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Input 
                type="email" 
                placeholder="Your email address" 
                className="sm:flex-1"
              />
              <Button className="bg-terracotta-500 hover:bg-terracotta-600">
                Subscribe
              </Button>
            </div>
          </div>
        </div> */}

        {/* Copyright */}
        <div className="border-t border-bicolartistry-200 dark:border-bicolartistry-800 mt-12 pt-6 text-center text-bicolartistry-600 dark:text-bicolartistry-400 text-sm">
          <p>© {currentYear} BicolArtistry. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
