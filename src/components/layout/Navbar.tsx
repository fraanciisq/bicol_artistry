import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { useCart } from "@/contexts/CartContext";
import { Button } from "@/components/ui/button";
import { Menu, X, ShoppingCart, User, Search, ChevronDown } from "lucide-react";
import { categories, products } from "@/data";
import { CommandDialog, CommandInput, CommandList, CommandItem, CommandEmpty } from "@/components/ui/command";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const { itemCount } = useCart();
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    if (searchQuery) {
      const results = products.filter(product =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setSearchResults(results);
    } else {
      setSearchResults([]);
    }
  }, [searchQuery]);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);

  const handleSearchSelect = (product) => {
    setIsSearchOpen(false);
    navigate(`/product/${product.id}`);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/90 dark:bg-black/80 backdrop-blur-md shadow-sm py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container px-4 mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2">
          <span className="text-2xl font-display font-bold bg-clip-text text-transparent bg-gradient-to-r from-terracotta-600 to-terracotta-500">
            Bicol Artistry
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link
            to="/"
            className="font-medium hover:text-terracotta-500 transition-colors"
          >
            Home
          </Link>

          <div className="relative">
            <button
              onClick={toggleDropdown}
              className="flex items-center font-medium hover:text-terracotta-500 transition-colors"
            >
              Shop
              <ChevronDown size={16} className="ml-1" />
            </button>

            <AnimatePresence>
              {isDropdownOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ duration: 0.2 }}
                  className="absolute top-full left-0 mt-2 w-56 glass-card glass-card-hover rounded-lg shadow-lg overflow-hidden"
                >
                  <div className="py-2">
                    <Link
                      to="/products"
                      className="block px-4 py-2 hover:bg-terracotta-100 dark:hover:bg-terracotta-900/20 transition-colors"
                      onClick={() => setIsDropdownOpen(false)}
                    >
                      All Products
                    </Link>
                    {categories.map((category) => (
                      <Link
                        key={category.id}
                        to={`/products/${category.slug}`}
                        className="block px-4 py-2 hover:bg-terracotta-100 dark:hover:bg-terracotta-900/20 transition-colors"
                        onClick={() => setIsDropdownOpen(false)}
                      >
                        {category.name}
                      </Link>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <Link
            to="/artisans"
            className="font-medium hover:text-terracotta-500 transition-colors"
          >
            Artisans
          </Link>

          <Link
            to="/about"
            className="font-medium hover:text-terracotta-500 transition-colors"
          >
            About
          </Link>

          <Link
            to="/contact"
            className="font-medium hover:text-terracotta-500 transition-colors"
          >
            Contact
          </Link>
        </nav>

        {/* Desktop Actions */}
        <div className="hidden md:flex items-center space-x-4">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="ghost" size="icon" onClick={() => setIsSearchOpen(true)}>
                  <Search size={20} />
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <span>Search</span>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>

          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="ghost" size="icon" asChild>
                  <Link to="/account">
                    <User size={20} />
                  </Link>
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <span>Account</span>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>

          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="ghost" size="icon" className="relative" asChild>
                  <Link to="/cart">
                    <ShoppingCart size={20} />
                    {itemCount > 0 && (
                      <span className="absolute -top-1 -right-1 bg-terracotta-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                        {itemCount > 9 ? "9+" : itemCount}
                      </span>
                    )}
                  </Link>
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <span>Cart</span>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex items-center space-x-4 md:hidden">
          <Button variant="ghost" size="icon" className="relative" asChild>
            <Link to="/cart">
              <ShoppingCart size={20} />
              {itemCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-terracotta-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                  {itemCount > 9 ? "9+" : itemCount}
                </span>
              )}
            </Link>
          </Button>

          <Button variant="ghost" size="icon" onClick={toggleMenu}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden glass-card overflow-hidden"
          >
            <nav className="flex flex-col space-y-4 px-4 py-6">
              <Link to="/" className="text-lg font-medium">
                Home
              </Link>
              <Link to="/products" className="text-lg font-medium">
                Shop
              </Link>
              <Link to="/artisans" className="text-lg font-medium">
                Artisans
              </Link>
              <Link to="/about" className="text-lg font-medium">
                About
              </Link>
              <Link to="/contact" className="text-lg font-medium">
                Contact
              </Link>
              <Link to="/search" className="text-lg font-medium">
                Search
              </Link>
              <Link to="/account" className="text-lg font-medium">
                Account
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Search Dialog */}
      <CommandDialog open={isSearchOpen} onOpenChange={setIsSearchOpen}>
        <CommandInput
          placeholder="Search for products..."
          value={searchQuery}
          onValueChange={(value) => setSearchQuery(value)}
        />
        <CommandList>
          {searchResults.length > 0 ? (
            searchResults.map((product) => (
              <CommandItem
                key={product.id}
                onSelect={() => handleSearchSelect(product)}
              >
                {product.name}
              </CommandItem>
            ))
          ) : (
            <CommandEmpty>No results found.</CommandEmpty>
          )}
        </CommandList>
      </CommandDialog>
    </header>
  );
}
