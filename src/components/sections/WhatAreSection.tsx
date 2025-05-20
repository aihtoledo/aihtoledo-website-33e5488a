
import AnimateOnScroll from "@/components/AnimateOnScroll";
import { useIsMobile } from "@/hooks/use-mobile";
import { cn } from "@/lib/utils";
import { useState, useEffect } from "react";

const WhatAreSection = () => {
  const isMobile = useIsMobile();
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    // Small delay to trigger the animation after component mount
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 300);
    
    return () => clearTimeout(timer);
  }, []);
  
  return (
    <section id="what-are" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row gap-8 lg:gap-16">
          {/* Left column with image - now with slide-in animation */}
          <div className="md:w-1/2 overflow-hidden">
            <div 
              className={cn(
                "h-full min-h-[300px] md:min-h-[400px] bg-cover bg-center rounded-lg shadow-lg scale-x-[-1] transition-all duration-1000 ease-out",
                isVisible ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0"
              )} 
              style={{ backgroundImage: "url('/lovable-uploads/aihtoledo-hero.jpg')" }}>
            </div>
          </div>
          
          {/* Right column with content */}
          <div className="md:w-1/2">
            <AnimateOnScroll>
              <div className="h-full flex flex-col justify-center">
                <div className="text-toledo-coral font-medium text-xl mb-4">
                  👋 What Are Expert Office Hours?
                </div>
                <h2 className="section-heading">
                  Focused, actionable sessions designed to help you solve real problems
                </h2>
                <p className="text-lg text-toledo-grey">
                  Expert Office Hours are focused, actionable sessions designed to help leaders, teams, and individuals solve real problems and unlock real progress. No fluff. No endless meetings. Just meaningful collaboration—with tools, frameworks, and guidance to help you move forward faster.
                </p>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatAreSection;
