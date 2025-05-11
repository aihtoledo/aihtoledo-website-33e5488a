
import AudienceSegment from "@/components/AudienceSegment";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import { Briefcase, Users, BookOpen } from "lucide-react";

const WhoItIsForSection = () => {
  return (
    <section id="who-its-for" className="py-20 bg-white">
      <div className="section-container">
        <AnimateOnScroll>
          <div className="text-center mb-16">
            <div className="text-toledo-orange font-medium text-xl mb-4">
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
  );
};

export default WhoItIsForSection;
