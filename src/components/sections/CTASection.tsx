
import { Button } from "@/components/ui/button";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import { ArrowRight } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-20 bg-toledo-orange">
      <div className="section-container">
        <AnimateOnScroll>
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-toledo-blue">
              🔥 Let's Make It Happen
            </h2>
            <p className="text-xl mb-8 text-toledo-blue">
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
      </div>
    </section>
  );
};

export default CTASection;
