
import ExpertCard from "@/components/ExpertCard";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import { Users, MessageSquare, ArrowRight } from "lucide-react";

const MeetExpertsSection = () => {
  return (
    <section id="meet-the-experts" className="relative py-16 md:py-24 overflow-hidden bg-white">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimateOnScroll>
          <div className="text-center max-w-4xl mx-auto mb-12">
            <span className="inline-flex items-center px-4 py-2 rounded-full bg-toledo-coral/10 text-toledo-coral text-sm font-medium mb-4">
              <Users className="w-4 h-4 mr-2" />
              Meet Our Experts
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-toledo-teal mb-4 leading-tight">
              Meet Our <span className="text-toledo-coral">Consulting</span> Team
            </h2>
            <p className="text-lg text-toledo-grey/90 max-w-2xl mx-auto">
              Our Toledo-based consultants bring years of local business expertise to help your company thrive. We understand the unique challenges and opportunities in the Northwest Ohio market.
            </p>
          </div>
        </AnimateOnScroll>

        {/* Experts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimateOnScroll delay={100}>
            <ExpertCard 
              name="Justin Beaudry" 
              pronouns="he/him"
              image="/uploads/612cdb91-bddf-4108-8ab1-bac61f0263e8.png"
              bio="I am a seasoned software and systems engineer. As the Director of Engineering at Actual Reality Technologies, I lead teams across the stack—from front-end interfaces to data infrastructure—delivering solutions for startups and larger enterprises alike. My career has included roles at companies like Vida Health, United Airlines, and JetInsight, where I've championed collaborative, people-first engineering cultures."
              bookingLink="https://cal.com/justinbeaudry"
              linkedInLink="https://www.linkedin.com/in/justinbeaudry/"
              services={[
                "Fractional CTO",
                "Data Infrastructure Design",
                "AI Adoption"
              ]}
              className="h-full"
            />
          </AnimateOnScroll>

          <AnimateOnScroll delay={200}>
            <ExpertCard 
              name="Keith Instone" 
              pronouns="he/him"
              image="/uploads/0786c27d-52ff-46c3-a4b3-4fc9d9903b54.png"
              bio="I am a user experience consultant, working with business and IT teams to define, design and deliver great experiences for people using technology. As part of Tech Toledo (from 2011-2019), I helped foster the tech ecosystem in the Toledo region. With things like Toledo Codes, time for the next iteration."
              bookingLink="#"
              personalSiteLink="https://dexterityux.com/"
              services={[
                "User Experience Design",
                "Tech Hub Architecture",
                "Tech Community Engagement"
              ]}
              className="h-full"
            />
          </AnimateOnScroll>

          <AnimateOnScroll delay={300}>
            <ExpertCard 
              name="Michael Vanderpool" 
              pronouns="he/him"
              image="/uploads/84732a45-fac0-411c-822a-3aaf7ccb11e9.png"
              bio="Michael Vanderpool is a lifelong learner and educator with a passion for helping others grow. With a background in entrepreneurship and creative media, he has applied his skills in video production, writing, and web design across various industries. After earning his bachelor's from Oakland University, he completed a Master of Education in Learning Design and Technology at Bowling Green State University, where he also taught visual communication."
              bookingLink="#"
              linkedInLink="https://www.linkedin.com/in/vanderpoolmichael/"
              services={[
                "Fractional CLO",
                "Strategic Planning",
                "Presentation Design and Delivery"
              ]}
              className="h-full"
            />
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
};

export default MeetExpertsSection;
