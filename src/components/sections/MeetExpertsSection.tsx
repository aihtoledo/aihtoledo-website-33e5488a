
import ExpertCard from "@/components/ExpertCard";
import AnimateOnScroll from "@/components/AnimateOnScroll";

const MeetExpertsSection = () => {
  return (
    <section id="meet-the-experts" className="py-6 bg-toledo-light">
      <div className="section-container">
        <AnimateOnScroll>
          <div className="text-center mb-10">
            <div className="text-toledo-orange font-medium text-xl mb-4">
              👋 Meet The Experts
            </div>
            <h2 className="section-heading">
              Book a session with our experienced professionals
            </h2>
            <p className="text-lg text-toledo-grey max-w-3xl mx-auto mb-8">
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
              services={[
                "Fractional CTO",
                "Data Infrastructure Design",
                "AI Adoption"
              ]}
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
              services={[
                "Fractional CLO",
                "Strategic Planning",
                "Presentation Design and Delivery"
              ]}
            />
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
};

export default MeetExpertsSection;
