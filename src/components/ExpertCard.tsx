
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ArrowRight, Linkedin, ExternalLink, ChevronDown, ChevronUp } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

interface ExpertCardProps {
  name: string;
  pronouns: string;
  image: string;
  bio: string;
  bookingLink: string;
  linkedInLink?: string;
  personalSiteLink?: string;
  services?: string[];
  className?: string;
}

const ExpertCard = ({ 
  name, 
  pronouns, 
  image, 
  bio, 
  bookingLink, 
  linkedInLink, 
  personalSiteLink,
  services,
  className 
}: ExpertCardProps) => {
  const isMobile = useIsMobile();
  const [expanded, setExpanded] = useState(false);

  // Define fixed height for collapsed state
  const collapsedHeight = "120px";

  return (
    <div className={cn("flex flex-col bg-white shadow-lg p-6 border-t-4 border-toledo-orange h-full", className)}>
      <div className="flex flex-col gap-6 h-full">
        <div className="flex flex-col items-center">
          <div className="w-32 h-32 rounded-full overflow-hidden shrink-0 mb-3">
            <img 
              src={image} 
              alt={`Photo of ${name}`} 
              className="w-full h-full object-cover"
            />
          </div>
          <h3 className="text-xl font-bold text-toledo-blue mb-1 text-center">{name} <span className="text-sm font-normal text-toledo-grey">({pronouns})</span></h3>
          <div className="flex flex-wrap gap-3 mb-3 justify-center">
            {linkedInLink && (
              <a 
                href={linkedInLink} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-sm text-toledo-blue hover:text-toledo-orange transition-colors flex items-center gap-1"
              >
                <span className="flex items-center justify-center bg-toledo-blue rounded-full p-1">
                  <Linkedin className="w-3 h-3 text-white" />
                </span>
                LinkedIn
              </a>
            )}
            {personalSiteLink && (
              <a 
                href={personalSiteLink} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-sm text-toledo-blue hover:text-toledo-orange transition-colors flex items-center gap-1"
              >
                <span className="flex items-center justify-center bg-toledo-blue rounded-full p-1">
                  <ExternalLink className="w-3 h-3 text-white" />
                </span>
                Website
              </a>
            )}
          </div>
        </div>
        
        {/* Button moved above the bio */}
        <div className="pb-4 border-b border-gray-100">
          <Button 
            className="bg-toledo-orange hover:bg-toledo-orange/90 text-white w-full"
            onClick={() => window.open(bookingLink, '_blank')}
          >
            Book with {name.split(' ')[0]}
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </div>

        <div className="flex-grow flex flex-col">
          {services && services.length > 0 && (
            <div className="mb-3">
              <ul className="list-disc pl-5 text-sm text-toledo-grey">
                {services.map((service, index) => (
                  <li key={index} className="font-bold">{service}</li>
                ))}
              </ul>
            </div>
          )}
          
          <div className="relative flex-grow">
            <div 
              className={cn(
                "text-toledo-grey text-sm text-justify hyphens-auto no-orphans overflow-hidden transition-all duration-300", 
                expanded ? "max-h-full" : `max-h-[${collapsedHeight}]`
              )}
            >
              {bio}
            </div>
            
            {/* Fade overlay when collapsed */}
            {!expanded && (
              <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent"></div>
            )}
            
            {/* Expand/collapse button */}
            <button
              onClick={() => setExpanded(!expanded)}
              className="flex items-center justify-center w-full mt-2 text-toledo-blue text-sm hover:text-toledo-orange transition-colors"
            >
              {expanded ? (
                <>Show less <ChevronUp className="ml-1 w-4 h-4" /></>
              ) : (
                <>Read more <ChevronDown className="ml-1 w-4 h-4" /></>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExpertCard;
