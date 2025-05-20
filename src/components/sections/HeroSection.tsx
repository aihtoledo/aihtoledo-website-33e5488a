
import { Button } from "@/components/ui/button";
import { useIsMobile } from "@/hooks/use-mobile";
import { ArrowRight } from "lucide-react";

const HeroSection = () => {
  const isMobile = useIsMobile();
  
  return (
    <section className="min-h-[75vh] flex items-end justify-center bg-cover bg-center relative" style={{ backgroundImage: "url('/lovable-uploads/aihtoledo-hero.jpg')" }}>
      {/* Dark overlay for better contrast */}
      <div className="absolute inset-0 bg-black/40 bg-gradient-to-t from-black/70 to-black/10"></div>
      
      <div className="w-full max-w-3xl glass-card backdrop-blur-sm bg-white/80 p-8 md:p-10 rounded-t-xl shadow-xl relative z-10">
        <h1 className="text-3xl md:text-5xl font-bold text-center mb-6 text-brand-800">
          Expert Office Hours
        </h1>

        <p className="text-xl md:text-2xl font-medium text-center mb-8 text-brand-600">
          Professional support when you need it most
        </p>

        <p className="text-lg text-neutral-700 mb-10 max-w-2xl mx-auto text-center">
          Get direct access to experienced professionals ready to help you solve problems,
          build strategies, and deliver results that matter.
        </p>

        <div className="flex justify-center">
          <a href="#meet-the-experts">
            <Button size="lg" className="bg-brand-600 hover:bg-brand-700 text-white px-8 py-6 text-lg rounded-md shadow-md transition-all hover:shadow-lg flex items-center gap-2">
              Book a Session
              <ArrowRight className="h-5 w-5" />
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
