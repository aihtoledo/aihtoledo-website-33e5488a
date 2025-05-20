import { Button } from "@/components/ui/button";
import { useIsMobile } from "@/hooks/use-mobile";
import { ArrowRight } from "lucide-react";

const HeroSection = () => {
  const isMobile = useIsMobile();
  
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-toledo-teal/90">
      {/* Background image with overlay */}
      <div className="absolute inset-0">
        <img
          src="/lovable-uploads/aihtoledo-hero.jpg"
          alt="Toledo skyline and business professionals"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-toledo-teal/70 backdrop-blur-sm"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-toledo-teal/90 via-toledo-teal/50 to-toledo-teal/30"></div>
      </div>
      
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="max-w-3xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm text-white text-sm font-medium mb-6 border border-white/20">
            <span className="relative flex h-2 w-2 mr-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-toledo-coral opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-toledo-coral"></span>
            </span>
            Now accepting new appointments
          </div>
          
          {/* Main heading */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white mb-6 leading-tight">
            <span className="inline-block">Expert <span className="text-toledo-peach">Office Hours</span></span>
            <span className="block mt-2 text-2xl sm:text-3xl font-normal text-white/90">for Strategic Growth in Toledo</span>
          </h1>
          
          <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto leading-relaxed">
            Professional consulting services providing expert guidance and strategic solutions to help your business thrive in today's competitive landscape.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#meet-the-experts">
              <Button size="lg" className="bg-toledo-coral hover:bg-toledo-coral/90 text-white text-lg px-8 py-6 rounded-xl shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-0.5 flex items-center gap-2 group">
                Book a Session
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </a>
            <a href="#how-it-works">
              <Button variant="outline" size="lg" className="bg-white/5 hover:bg-white/10 border-white/20 text-white text-lg px-8 py-6 rounded-xl backdrop-blur-sm transition-all hover:border-toledo-coral/50 hover:text-toledo-peach">
                Learn More
              </Button>
            </a>
          </div>
          
          {/* Scroll indicator removed - using the one at page bottom */}
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute -top-10 -right-10 w-40 h-40 bg-toledo-coral/20 rounded-full mix-blend-multiply filter blur-3xl opacity-70"></div>
      <div className="absolute -bottom-10 -left-10 w-60 h-60 bg-toledo-peach/20 rounded-full mix-blend-multiply filter blur-3xl opacity-70"></div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="animate-bounce flex flex-col items-center">
          <span className="text-sm text-white/80 mb-2">Scroll to explore</span>
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center p-1">
            <div className="w-1 h-2 bg-white/80 rounded-full animate-bounce"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
