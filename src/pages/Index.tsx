import Navbar from "@/components/Navbar";
import HeroSection from "@/components/sections/HeroSection";
import MeetExpertsSection from "@/components/sections/MeetExpertsSection";
import WhatAreSection from "@/components/sections/WhatAreSection";
import WhatWeHelpSection from "@/components/sections/WhatWeHelpSection";
import WhoItIsForSection from "@/components/sections/WhoItIsForSection";
import HowItWorksSection from "@/components/sections/HowItWorksSection";
import CTASection from "@/components/sections/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <HeroSection />
      <MeetExpertsSection />
      <WhatAreSection />
      <WhatWeHelpSection />
      <WhoItIsForSection />
      <HowItWorksSection />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;
