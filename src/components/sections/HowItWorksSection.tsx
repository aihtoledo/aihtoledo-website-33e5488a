
import ProcessStep from "@/components/ProcessStep";
import AnimateOnScroll from "@/components/AnimateOnScroll";

const HowItWorksSection = () => {
  return (
    <section id="how-it-works" className="py-20 bg-toledo-light">
      <div className="section-container">
        <AnimateOnScroll>
          <div className="text-center mb-16">
            <div className="text-toledo-orange font-medium text-xl mb-4">
              💬 How It Works
            </div>
            <h2 className="section-heading">
              A simple process for powerful results
            </h2>
          </div>
        </AnimateOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <AnimateOnScroll delay={100}>
            <ProcessStep
              number={1}
              title="Book a Session"
              description="Choose between 30- or 60-minute focused sessions"
            />
          </AnimateOnScroll>

          <AnimateOnScroll delay={200}>
            <ProcessStep
              number={2}
              title="Share Your Challenge"
              description="Tell us your goal, challenge, or idea"
            />
          </AnimateOnScroll>

          <AnimateOnScroll delay={300}>
            <ProcessStep
              number={3}
              title="Collaborate"
              description="Join a focused working session—with tools and real-time collaboration"
            />
          </AnimateOnScroll>

          <AnimateOnScroll delay={400}>
            <ProcessStep
              number={4}
              title="Take Action"
              description="Leave with a plan, a prototype, or a polished presentation—ready to go"
            />
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
