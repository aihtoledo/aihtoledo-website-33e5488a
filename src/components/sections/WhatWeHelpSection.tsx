
import ServiceCard from "@/components/ServiceCard";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import { BookOpen, Brain, Presentation } from "lucide-react";

const WhatWeHelpSection = () => {
  return (
    <section id="what-we-help" className="py-20 bg-toledo-light">
      <div className="section-container">
        <AnimateOnScroll>
          <div className="text-center mb-16">
            <div className="text-toledo-orange font-medium text-xl mb-4">
              🧠 What We Help With
            </div>
            <h2 className="section-heading">
              Expert guidance when you need it most
            </h2>
          </div>
        </AnimateOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <AnimateOnScroll delay={100}>
            <ServiceCard
              title="Fractional Chief Learning Officer Support"
              description="Need help building a learning strategy? Launching a professional development initiative? Aligning training with your business goals? You get CLO-level support—without the full-time overhead."
              features={[
                "Build learning plans for individuals or teams",
                "Design scalable training programs",
                "Align talent development with business strategy"
              ]}
              icon={<BookOpen className="h-6 w-6" />}
            />
          </AnimateOnScroll>

          <AnimateOnScroll delay={200}>
            <ServiceCard
              title="Fractional Chief Technology Officer Support"
              description="Need strategic technology leadership without the full-time commitment? Looking to align your tech infrastructure with business goals? Get CTO-level expertise—without the full-time overhead."
              features={[
                "Develop comprehensive technology roadmaps",
                "Guide digital transformation initiatives",
                "Optimize IT infrastructure and security",
                "Align technology investments with business strategy",
                "Build and mentor high-performing technical teams"
              ]}
              icon={<Brain className="h-6 w-6" />}
            />
          </AnimateOnScroll>

          <AnimateOnScroll delay={300}>
            <ServiceCard
              title="Strategic Problem-Solving"
              description="Not sure how to tackle a challenge? We'll work together to map it, frame it, and solve it. Call it innovation, call it systems thinking—we call it making it happen."
              features={[
                "Navigate uncertainty with clarity",
                "Break complex problems into actionable next steps",
                "Use proven methodologies to prototype, model, or analyze your options"
              ]}
              icon={<Brain className="h-6 w-6" />}
            />
          </AnimateOnScroll>

          <AnimateOnScroll delay={400}>
            <ServiceCard
              title="Presentation Coaching & Communication Support"
              description="We help you tell the right story—whether it's a pitch, a board presentation, or a keynote."
              features={[
                "Structure your message for maximum impact",
                "Design visuals that don't just look good—they drive action",
                "Rehearse with expert feedback to perfect your delivery"
              ]}
              icon={<Presentation className="h-6 w-6" />}
            />
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
};

export default WhatWeHelpSection;
