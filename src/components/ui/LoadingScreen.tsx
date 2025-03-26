import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";
import LoadingSpinner from "./LoadingSpinner";

interface LoadingScreenProps {
  className?: string;
}

const LoadingScreen = ({ className }: LoadingScreenProps) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleLoad = () => {
      setTimeout(() => {
        setIsVisible(false);
      }, 300); // Smooth transition delay
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

  if (!isVisible) return null;

  return (
    <div
      className={cn(
        "fixed inset-0 z-50 flex items-center justify-center bg-background transition-opacity duration-300",
        className
      )}
    >
      <div className="flex flex-col items-center gap-4">
        <LoadingSpinner size={48} />
        <p className="text-lg font-medium text-muted-foreground">Loading...</p>
      </div>
    </div>
  );
};

export default LoadingScreen;
