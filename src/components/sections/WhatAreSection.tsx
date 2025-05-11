
import AnimateOnScroll from "@/components/AnimateOnScroll";

const WhatAreSection = () => {
  return (
    <section id="what-are" className="py-20 bg-white">
      <div className="section-container">
        <AnimateOnScroll>
          <div className="max-w-3xl mx-auto text-center mb-12">
            <div className="text-toledo-orange font-medium text-xl mb-4">
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
  );
};

export default WhatAreSection;
