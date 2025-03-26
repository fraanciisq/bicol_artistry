import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const location = useLocation();

  useEffect(() => {
    // Scroll to the top on location change
    window.scrollTo(0, 0);
  }, [location]);

  useEffect(() => {
    // Scroll to the top and reload the page on browser refresh
    const handleBeforeUnload = () => {
      window.scrollTo(0, 0);
    };

    window.addEventListener("beforeunload", handleBeforeUnload);
    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, []);

  return null; // This component does not render anything
};

export default ScrollToTop;
