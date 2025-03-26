import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { CartProvider } from "@/contexts/CartContext";
import Index from "./pages/Index";
import ProductsPage from "./pages/ProductsPage";
import ProductDetailPage from "./pages/ProductDetailPage";
import CartPage from "./pages/CartPage";
import NotFound from "./pages/NotFound";
import ArtisansPage from '@/pages/ArtisansPage'; 
import AboutPage from './pages/AboutPage'; 
import ContactPage from './pages/ContactPage';
import AccountPage from "@/pages/AccountPage"; // Import the AccountPage component
import ScrollToTop from "@/components/ScrollToTop"; // Import the ScrollToTop component
import LoadingScreen from "@/components/ui/LoadingScreen"; // Import LoadingScreen
import TermsPage from "./pages/TermsPage"; // Import the TermsPage component
import { useState, useEffect } from "react";

// Create a client
const queryClient = new QueryClient();

// Route change detection component
const RouteChangeLoader = () => {
  const [isLoading, setIsLoading] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsLoading(true);

    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500); // Simulate route change loading time

    return () => clearTimeout(timer);
  }, [location.pathname]);

  return isLoading ? <LoadingScreen /> : null;
};

function App() {
  const [isInitialLoading, setIsInitialLoading] = useState(true);

  useEffect(() => {
    const handleLoad = () => {
      setIsInitialLoading(false);
    };

    if (document.readyState === "complete") {
      handleLoad();
    } else {
      window.addEventListener("load", handleLoad);
    }

    return () => {
      window.removeEventListener("load", handleLoad);
    };
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <CartProvider>
          {isInitialLoading && <LoadingScreen />} {/* Initial loading screen */}
          {!isInitialLoading && (
            <>
              <Toaster />
              <Sonner />
              <Router>
                <RouteChangeLoader /> {/* Route change loader */}
                <ScrollToTop />
                <Routes>
                  <Route path="/" element={<Index />} />
                  <Route path="/products" element={<ProductsPage />} />
                  <Route path="/products/:categorySlug" element={<ProductsPage />} />
                  <Route path="/product/:id" element={<ProductDetailPage />} />
                  <Route path="/cart" element={<CartPage />} />
                  <Route path="/artisans" element={<ArtisansPage />} /> 
                  <Route path="/about" element={<AboutPage />} /> 
                  <Route path="/contact" element={<ContactPage />} />
                  <Route path="/account" element={<AccountPage />} /> {/* Add this route */}
                  <Route path="/terms" element={<TermsPage />} /> {/* Add this route */}
                  {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
                  <Route path="*" element={<NotFound />} />
                </Routes>
              </Router>
            </>
          )}
        </CartProvider>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
