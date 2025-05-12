
import { Button } from "@/components/ui/button";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import { ArrowRight } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-20 bg-toledo-orange">
      <div className="section-container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch h-full">
          <AnimateOnScroll>
            <div className="max-w-xl mx-auto md:mx-0 text-center md:text-left">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
                🔥 Let's Make It Happen
              </h2>
              <p className="text-xl mb-8 text-white">
                This isn't a webinar. It's not a course. It's not another "coffee chat." It's expert time, dedicated to your challenge—designed to move you forward.
              </p>
              <a href="#meet-the-experts">
                <Button variant="default" size="lg" className="btn-primary text-lg px-10 py-6 rounded-none">
                  Book Your Session Now
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </a>
            </div>
          </AnimateOnScroll>
          
          <AnimateOnScroll delay={200} className="h-full">
            <div className="h-full rounded-lg overflow-hidden shadow-lg">
              <img 
                src="/lovable-uploads/05fd033e-4427-4270-aa11-0a5429ddc42d.png" 
                alt="Whiteboard planning session with flowchart" 
                className="w-full h-full object-cover"
              />
            </div>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
