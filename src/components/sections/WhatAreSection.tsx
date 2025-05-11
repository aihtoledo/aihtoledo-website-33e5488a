
import AnimateOnScroll from "@/components/AnimateOnScroll";
import { useIsMobile } from "@/hooks/use-mobile";

const WhatAreSection = () => {
  const isMobile = useIsMobile();
  
  return (
    <section id="what-are" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row gap-8 lg:gap-16">
          {/* Right column with content (now on the left) */}
          <div className="md:w-1/2">
            <AnimateOnScroll>
              <div className="h-full flex flex-col justify-center">
                <div className="text-toledo-orange font-medium text-xl mb-4">
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
          
          {/* Left column with image (now on the right) */}
          <div className="md:w-1/2">
            <AnimateOnScroll>
              <div className="h-full min-h-[300px] md:min-h-[400px] bg-cover bg-center rounded-lg shadow-lg" 
                   style={{ backgroundImage: "url('/lovable-uploads/aihtoledo-hero.jpg')" }}>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatAreSection;
