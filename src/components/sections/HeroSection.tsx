
import { Button } from "@/components/ui/button";
import { useIsMobile } from "@/hooks/use-mobile";
import { ArrowRight } from "lucide-react";

const HeroSection = () => {
  const isMobile = useIsMobile();
  
  return (
    <section className="min-h-screen flex items-end justify-center bg-cover bg-center relative" style={{ backgroundImage: "url('/lovable-uploads/aihtoledo-hero.jpg')" }}>
      {/* Dark overlay to increase text contrast */}
      <div className="absolute inset-0 bg-black/30 bg-gradient-to-t from-black/60 to-black/10"></div>
      
      <div className={`w-full ${isMobile ? 'max-w-full' : 'max-w-[50%]'} glass-card backdrop-blur-md bg-white/70 p-8 md:p-10 rounded-t-3xl shadow-xl ${isMobile ? 'mb-0' : 'mb-0'} relative z-10`}>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-center mb-6 text-gradient">
          Expert Office Hours
        </h1>

        <p className="text-xl md:text-2xl font-semibold text-center mb-2 text-toledo-blue">
          Professional support. Strategic clarity.
        </p>
        <p className="text-xl md:text-2xl font-semibold text-center mb-8 text-toledo-blue">
          Results that matter.
        </p>

        <p className="text-lg text-toledo-grey mb-12 max-w-3xl mx-auto">
          Get direct access to experienced experts ready to help you solve problems, build smarter strategies,
          develop new skills, and present with impact. Whether you're an individual looking to grow or a team
          facing complex challenges, Office Hours give you the focused support you need—when you need it.
        </p>

        <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
          <div className="text-lg font-medium text-toledo-grey text-center sm:text-left">
            Book a session. Make a plan.<br />Make it happen!
          </div>
          <a href="#meet-the-experts">
            <Button size="lg" className="bg-gradient-to-r from-toledo-blue to-pink-700 hover:opacity-90 text-white text-lg px-8 py-6 rounded-full shadow-lg transition-all hover:shadow-xl flex items-center gap-2">
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
