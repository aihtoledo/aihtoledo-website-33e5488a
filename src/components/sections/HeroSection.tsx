
import { Button } from "@/components/ui/button";
import { useIsMobile } from "@/hooks/use-mobile";
import { ArrowRight, Calendar, Clock, Users, Lightbulb } from "lucide-react";

const HeroSection = () => {
  const isMobile = useIsMobile();
  
  return (
    <section className="relative overflow-hidden min-h-screen flex items-center justify-center bg-gradient-to-br from-toledo-blue/90 to-indigo-900">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4yIj48cGF0aCBkPSJNMjEgMTYuMTdWMEgwdjM0aDIxdi0xN2MwLS40LjM0LS43Ny43NS0uODZoMHoiLz48cGF0aCBkPSJNMjYgNS4yM2gxM1YzOUgyNlY1LjIzek0xMyA1LjA3VjM5SDBWMTloMTIuMjVjLjQxIDAgLjc1LS4zNC43NS0uNzV2LTEzaDB6Ii8+PHBhdGggZD0iTTM0IDBoLTd2MTMuMDhjMCAuNDEuMzQuNzUuNzUuNzVoMTEuNXYtMTN6Ii8+PC9nPjwvZz48L3N2Zz4=')]"></div>
      </div>
      
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/30"></div>
      
      {/* Grid pattern */}
      <div className="absolute inset-0 [mask-image:linear-gradient(180deg,white_0%,transparent_100%)] [background-image:linear-gradient(90deg,rgba(255,255,255,0.4)_1px,transparent_0),linear-gradient(180deg,rgba(255,255,255,0.4)_1px,transparent_0)] [background-size:24px_24px] opacity-5"></div>
      
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="text-center md:text-left">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm text-white text-sm font-medium mb-6 border border-white/20">
              <span className="relative flex h-2 w-2 mr-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              Now accepting new appointments
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight text-white mb-6 leading-tight">
              Expert <span className="text-toledo-orange">Office Hours</span> for Strategic Growth
            </h1>
            
            <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-2xl mx-auto md:mx-0">
              Professional consulting services in Toledo, Ohio, providing expert guidance and strategic solutions to help your business thrive in today's competitive landscape.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <a href="#meet-the-experts">
                <Button size="lg" className="bg-toledo-orange hover:bg-toledo-orange/90 text-white text-lg px-8 py-6 rounded-xl shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-0.5 flex items-center gap-2 group">
                  Book a Session
                  <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Button>
              </a>
              <a href="#how-it-works">
                <Button variant="outline" size="lg" className="bg-white/5 hover:bg-white/10 border-white/20 text-white text-lg px-8 py-6 rounded-xl backdrop-blur-sm transition-all">
                  Learn More
                </Button>
              </a>
            </div>
            
            <div className="mt-12 grid grid-cols-2 gap-4 max-w-md mx-auto md:mx-0">
              <div className="flex items-center gap-3 text-white/80">
                <div className="p-2 bg-white/10 rounded-lg">
                  <Clock className="h-5 w-5 text-toledo-orange" />
                </div>
                <span className="text-sm font-medium">60-minute sessions</span>
              </div>
              <div className="flex items-center gap-3 text-white/80">
                <div className="p-2 bg-white/10 rounded-lg">
                  <Users className="h-5 w-5 text-toledo-orange" />
                </div>
                <span className="text-sm font-medium">1:1 or team sessions</span>
              </div>
              <div className="flex items-center gap-3 text-white/80">
                <div className="p-2 bg-white/10 rounded-lg">
                  <Calendar className="h-5 w-5 text-toledo-orange" />
                </div>
                <span className="text-sm font-medium">Flexible scheduling</span>
              </div>
              <div className="flex items-center gap-3 text-white/80">
                <div className="p-2 bg-white/10 rounded-lg">
                  <Lightbulb className="h-5 w-5 text-toledo-orange" />
                </div>
                <span className="text-sm font-medium">Actionable insights</span>
              </div>
            </div>
          </div>
          
          <div className="relative hidden md:block">
            <div className="relative z-10 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-1 shadow-2xl">
              <div className="aspect-w-16 aspect-h-9 bg-gray-800/50 rounded-xl overflow-hidden">
                <img 
                  src="/lovable-uploads/aihtoledo-hero.jpg" 
                  alt="Expert consultation session" 
                  className="w-full h-full object-cover opacity-90"
                />
              </div>
              <div className="absolute -bottom-5 -left-5 bg-toledo-orange text-white px-4 py-2 rounded-lg shadow-lg">
                <div className="text-sm font-medium">Expert Available</div>
                <div className="text-xs opacity-80">Book your slot today</div>
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-toledo-orange/20 rounded-full mix-blend-multiply filter blur-3xl opacity-70"></div>
            <div className="absolute -bottom-10 -left-10 w-60 h-60 bg-indigo-500/20 rounded-full mix-blend-multiply filter blur-3xl opacity-70"></div>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="animate-bounce flex flex-col items-center">
          <span className="text-sm text-white/60 mb-2">Scroll to explore</span>
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center p-1">
            <div className="w-1 h-2 bg-white/60 rounded-full animate-bounce"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
