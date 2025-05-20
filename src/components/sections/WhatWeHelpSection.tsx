import ServiceCard from "@/components/ServiceCard";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import { BookOpen, Brain, Presentation, Layout, Network, Users, Database, Rocket, Computer } from "lucide-react";

const WhatWeHelpSection = () => {
  return (
    <section id="what-we-help" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimateOnScroll>
          <div className="text-center mb-16">
            <div className="text-toledo-coral font-medium text-xl mb-4">
              🧠 What We Help With
            </div>
            <h2 className="section-heading">
              Expert guidance when you need it most
            </h2>
          </div>
        </AnimateOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* AI Adoption Service Card - Now first */}
          <AnimateOnScroll delay={100}>
            <ServiceCard
              title="AI Adoption"
              description="Navigate the complex landscape of artificial intelligence with expert guidance to implement AI solutions that create real business value."
              features={[
                "AI readiness assessment",
                "Use case identification and prioritization",
                "Ethical AI implementation frameworks",
                "Change management for AI integration",
                "ROI measurement and optimization"
              ]}
              icon={<Rocket className="h-6 w-6" />}
            />
          </AnimateOnScroll>
          
          {/* Strategic Problem-Solving - Now second */}
          <AnimateOnScroll delay={200}>
            <ServiceCard
              title="Strategic Problem-Solving"
              description="Not sure how to tackle a challenge? We'll work together to map it, frame it, and solve it. Call it innovation, call it systems thinking—we call it making it happen."
              features={[
                "Navigate uncertainty with clarity",
                "Break complex problems into actionable next steps",
                "Use proven methodologies to analyze options",
                "Develop comprehensive solution frameworks",
                "Implement strategic decision-making protocols"
              ]}
              icon={<Brain className="h-6 w-6" />}
            />
          </AnimateOnScroll>

          {/* Fractional CTO - Now third */}
          <AnimateOnScroll delay={300}>
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
              icon={<Computer className="h-6 w-6" />}
            />
          </AnimateOnScroll>

          {/* Data Infrastructure Design - Now fourth */}
          <AnimateOnScroll delay={400}>
            <ServiceCard
              title="Data Infrastructure Design"
              description="Build robust, scalable data architectures that turn your organization's information into actionable insights and competitive advantage."
              features={[
                "Data strategy development",
                "Data pipeline architecture",
                "Analytics infrastructure design",
                "Data governance implementation",
                "Scalability and performance optimization"
              ]}
              icon={<Database className="h-6 w-6" />}
            />
          </AnimateOnScroll>
          
          {/* Tech Hub Architecture - Now fifth */}
          <AnimateOnScroll delay={500}>
            <ServiceCard
              title="Tech Hub Architecture"
              description="Design and implement innovative technological ecosystems that foster collaboration, innovation, and efficiency across your organization."
              features={[
                "Tech infrastructure planning",
                "Collaborative workspace design",
                "Innovation pipeline development",
                "Technology integration strategies",
                "Cross-functional workflow optimization"
              ]}
              icon={<Network className="h-6 w-6" />}
            />
          </AnimateOnScroll>
          
          {/* User Experience Design - Now sixth */}
          <AnimateOnScroll delay={600}>
            <ServiceCard
              title="User Experience Design"
              description="Create intuitive, engaging digital experiences that delight users and drive business results through strategic UX design."
              features={[
                "User research and persona development",
                "Interface design and prototyping",
                "Usability testing and optimization",
                "Accessibility compliance implementation",
                "Customer journey mapping"
              ]}
              icon={<Layout className="h-6 w-6" />}
            />
          </AnimateOnScroll>
          
          {/* Fractional CLO - Now seventh */}
          <AnimateOnScroll delay={700}>
            <ServiceCard
              title="Fractional Chief Learning Officer Support"
              description="Need help building a learning strategy? Launching a professional development initiative? Aligning training with your business goals? You get CLO-level support—without the full-time overhead."
              features={[
                "Build learning plans for individuals or teams",
                "Design scalable training programs",
                "Align talent development with business strategy",
                "Create knowledge management systems",
                "Measure and optimize learning outcomes"
              ]}
              icon={<BookOpen className="h-6 w-6" />}
            />
          </AnimateOnScroll>

          {/* Tech Community Engagement - Now eighth */}
          <AnimateOnScroll delay={800}>
            <ServiceCard
              title="Tech Community Engagement"
              description="Build vibrant technical communities that drive knowledge sharing, talent development, and create sustainable competitive advantages."
              features={[
                "Community building strategies",
                "Technical mentorship programs",
                "Knowledge sharing platforms",
                "Developer advocacy initiatives",
                "Community-driven innovation frameworks"
              ]}
              icon={<Users className="h-6 w-6" />}
            />
          </AnimateOnScroll>
          
          {/* Presentation Coaching - Now ninth */}
          <AnimateOnScroll delay={900}>
            <ServiceCard
              title="Presentation Coaching & Communication Support"
              description="We help you tell the right story—whether it's a pitch, a board presentation, or a keynote."
              features={[
                "Structure your message for maximum impact",
                "Design visuals that drive action",
                "Rehearse with expert feedback to perfect delivery",
                "Develop compelling presentation narratives",
                "Tailor communication for diverse audiences"
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
