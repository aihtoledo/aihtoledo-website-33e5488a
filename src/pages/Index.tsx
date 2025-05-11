
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import Navbar from "@/components/Navbar";
import ServiceCard from "@/components/ServiceCard";
import ProcessStep from "@/components/ProcessStep";
import AiFeature from "@/components/AiFeature";
import AudienceSegment from "@/components/AudienceSegment";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import ExpertCard from "@/components/ExpertCard";
import { ArrowRight, BookOpen, Presentation, Brain, Users, Calendar, Briefcase } from "lucide-react";

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 md:pt-40 md:pb-28 bg-white bg-cover bg-center" style={{ backgroundImage: "url('/lovable-uploads/aihtoledo-hero.jpg')" }}>
        <div className="section-container bg-white rounded-lg p-1 shadow-lg bg-opacity-80">
          <div className="max-w-50rem mx-auto">
            <h1 className="text-center text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-toledo-blue">
              Expert Office Hours
            </h1>
            <p className="text-center text-xl md:text-2xl font-medium mb-6 text-toledo-gold">
              Professional support. Strategic clarity. Results that matter.
            </p>
            <p className="text-justify text-lg text-toledo-grey mb-12">
              Get direct access to experienced experts ready to help you solve problems, build smarter strategies, develop new skills, and present with impact. Whether you're an individual looking to grow or a team facing complex challenges, Office Hours give you the focused support you need—when you need it.
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
            <div className="text-toledo-grey text-lg font-medium mt-4 sm:mt-0">
                Book a session. Make a plan. Make it happen! 👉 
              </div>
              <a href="#meet-the-experts">
                <Button size="lg" className="btn-primary text-lg px-8 py-6 rounded-none">
                  Book a Session
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Meet the Experts Section */}
      <section id="meet-the-experts" className="py-20 bg-toledo-light">
        <div className="section-container">
          <AnimateOnScroll>
            <div className="text-center mb-16">
              <div className="inline-block bg-toledo-gold px-4 py-1.5 text-toledo-blue font-medium mb-4">
                👋 Meet The Experts
              </div>
              <h2 className="section-heading">
                Book a session with our experienced professionals
              </h2>
              <p className="text-lg text-toledo-grey max-w-3xl mx-auto mb-12">
                Our experts bring years of experience and specialized knowledge to help you tackle challenges and achieve your goals.
              </p>
            </div>
          </AnimateOnScroll>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <AnimateOnScroll delay={100}>
              <ExpertCard 
                name="Justin Beaudry" 
                pronouns="he/him"
                image="/lovable-uploads/612cdb91-bddf-4108-8ab1-bac61f0263e8.png"
                bio="I am a seasoned software and systems engineer. As the Director of Engineering at Actual Reality Technologies, I lead teams across the stack—from front-end interfaces to data infrastructure—delivering solutions for startups and larger enterprises alike. My career has included roles at companies like Vida Health, United Airlines, and JetInsight, where I've championed collaborative, people-first engineering cultures."
                bookingLink="https://cal.com/justinbeaudry"
                linkedInLink="https://www.linkedin.com/in/justinbeaudry/"
              />
            </AnimateOnScroll>

            <AnimateOnScroll delay={200}>
              <ExpertCard 
                name="Keith Instone" 
                pronouns="he/him"
                image="/lovable-uploads/0786c27d-52ff-46c3-a4b3-4fc9d9903b54.png"
                bio="I am a user experience consultant, working with business and IT teams to define, design and deliver great experiences for people using technology. As part of Tech Toledo (from 2011-2019), I helped foster the tech ecosystem in the Toledo region. With things like Toledo Codes, time for the next iteration."
                bookingLink="#"
                personalSiteLink="https://dexterityux.com/"
              />
            </AnimateOnScroll>

            <AnimateOnScroll delay={300}>
              <ExpertCard 
                name="Michael Vanderpool" 
                pronouns="he/him"
                image="/lovable-uploads/84732a45-fac0-411c-822a-3aaf7ccb11e9.png"
                bio="Michael Vanderpool is a lifelong learner and educator with a passion for helping others grow. With a background in entrepreneurship and creative media, he has applied his skills in video production, writing, and web design across various industries. After earning his bachelor's from Oakland University, he completed a Master of Education in Learning Design and Technology at Bowling Green State University, where he also taught visual communication."
                bookingLink="#"
                linkedInLink="https://www.linkedin.com/in/vanderpoolmichael/"
              />
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* What Are Expert Office Hours Section */}
      <section id="what-are" className="py-20 bg-white">
        <div className="section-container">
          <AnimateOnScroll>
            <div className="max-w-3xl mx-auto text-center mb-12">
              <div className="inline-block bg-toledo-gold px-4 py-1.5 text-toledo-blue font-medium mb-4">
                👋 What Are Expert Office Hours?
              </div>
              <h2 className="section-heading">
                Focused, actionable sessions designed to help you solve real problems
              </h2>
              <p className="text-lg text-toledo-grey">
                Expert Office Hours are focused, actionable sessions designed to help leaders, teams, and individuals solve real problems and unlock real progress. No fluff. No endless meetings. Just meaningful collaboration—with tools, frameworks, and guidance to help you move forward faster.
              </p>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* What We Help With Section */}
      <section id="what-we-help" className="py-20 bg-toledo-light">
        <div className="section-container">
          <AnimateOnScroll>
            <div className="text-center mb-16">
              <div className="inline-block bg-toledo-gold px-4 py-1.5 text-toledo-blue font-medium mb-4">
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

      {/* Who It's For Section */}
      <section id="who-its-for" className="py-20 bg-white">
        <div className="section-container">
          <AnimateOnScroll>
            <div className="text-center mb-16">
              <div className="inline-block bg-toledo-gold px-4 py-1.5 text-toledo-blue font-medium mb-4">
                🚀 Who It's For
              </div>
              <h2 className="section-heading">
                Supporting diverse professionals across industries
              </h2>
              <p className="text-lg text-toledo-grey max-w-3xl mx-auto mb-12">
                Anyone who's ready to stop spinning wheels and start making things happen.
              </p>
            </div>
          </AnimateOnScroll>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <AnimateOnScroll delay={100}>
              <AudienceSegment 
                title="Founders and Executives"
                icon={<Briefcase className="h-8 w-8" />}
              />
            </AnimateOnScroll>

            <AnimateOnScroll delay={200}>
              <AudienceSegment 
                title="HR and L&D Leaders"
                icon={<Users className="h-8 w-8" />}
              />
            </AnimateOnScroll>

            <AnimateOnScroll delay={300}>
              <AudienceSegment 
                title="Team Leads and Contributors"
                icon={<Users className="h-8 w-8" />}
              />
            </AnimateOnScroll>

            <AnimateOnScroll delay={400}>
              <AudienceSegment 
                title="Educators and Consultants"
                icon={<BookOpen className="h-8 w-8" />}
              />
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-20 bg-toledo-light">
        <div className="section-container">
          <AnimateOnScroll>
            <div className="text-center mb-16">
              <div className="inline-block bg-toledo-gold px-4 py-1.5 text-toledo-blue font-medium mb-4">
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

      {/* CTA Section */}
      <section className="py-20 bg-toledo-gold">
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

      {/* Footer */}
      <footer className="bg-toledo-blue text-white py-12">
        <div className="section-container">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <h3 className="text-2xl font-bold text-white">Expert Office Hours</h3>
              <p className="mt-2 text-white/80">Professional support when you need it most.</p>
            </div>
            <div className="flex space-x-10">
              <a href="#" className="hover:text-toledo-gold transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-toledo-gold transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-toledo-gold transition-colors">Contact</a>
            </div>
          </div>
          <Separator className="my-8 bg-white/20" />
          <div className="text-center text-sm text-white/80">
            <p>© {new Date().getFullYear()} Expert Office Hours. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
