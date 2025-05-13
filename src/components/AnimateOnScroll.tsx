
import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

interface AnimateOnScrollProps {
  children: React.ReactNode;
  className?: string;
  threshold?: number;
  delay?: number;
  slideDirection?: "left" | "right" | "up" | "down" | "none";
}

const AnimateOnScroll = ({ 
  children, 
  className, 
  threshold = 0.1, 
  delay = 0,
  slideDirection = "up" 
}: AnimateOnScrollProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsVisible(true);
          }, delay);
          observer.unobserve(entry.target);
        }
      },
      { threshold }
    );

    const currentRef = ref.current;

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [threshold, delay]);

  // Apply different initial translate values based on slideDirection
  const getSlideClass = () => {
    if (!isVisible) {
      switch (slideDirection) {
        case "left": return "-translate-x-full";
        case "right": return "translate-x-full";
        case "up": return "-translate-y-20";
        case "down": return "translate-y-20";
        case "none": return "";
        default: return "-translate-y-20"; // Default is up
      }
    }
    return "translate-x-0 translate-y-0";
  };

  return (
    <div
      ref={ref}
      className={cn(
        "transition-all duration-1000 ease-out", 
        getSlideClass(),
        !isVisible && "opacity-0", 
        isVisible && "opacity-100",
        className
      )}
    >
      {children}
    </div>
  );
};

export default AnimateOnScroll;
