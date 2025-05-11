
import { Button } from "@/components/ui/button";
import { useIsMobile } from "@/hooks/use-mobile";

const HeroSection = () => {
  const isMobile = useIsMobile();
  
  return (
    <section className="min-h-screen flex items-end justify-center bg-cover bg-center" style={{ backgroundImage: "url('/lovable-uploads/aihtoledo-hero.jpg')" }}>
      <div className={`w-full ${isMobile ? 'max-w-full' : 'max-w-[50%]'} bg-white bg-opacity-95 p-6 rounded-lg shadow-lg ${isMobile ? 'mb-0' : 'mb-6'}`}>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center text-toledo-blue mb-6">
          Expert Office Hours
        </h1>

        <p className="text-xl md:text-2xl font-medium text-center text-toledo-orange mb-2">
          Professional support. Strategic clarity.
        </p>
        <p className="text-xl md:text-2xl font-medium text-center text-toledo-orange mb-6">
          Results that matter.
        </p>

        <p className="text-lg text-justify text-toledo-grey mb-12">
          Get direct access to experienced experts ready to help you solve problems, build smarter strategies,
          develop new skills, and present with impact. Whether you're an individual looking to grow or a team
          facing complex challenges, Office Hours give you the focused support you need—when you need it.
        </p>

        <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
          <div className="text-lg font-medium text-toledo-grey text-center sm:text-left">
            Book a session. Make a plan.<br />Make it happen! 👉
          </div>
          <a href="#meet-the-experts">
            <Button size="lg" className="btn-primary text-lg px-8 py-6 rounded-none">
              Book a Session
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
