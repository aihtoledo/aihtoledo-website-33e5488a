
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ArrowRight, Linkedin, ExternalLink } from "lucide-react";
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

  return (
    <div className={cn("flex flex-col bg-white shadow-lg p-6 border-t-4 border-toledo-orange", className)}>
      <div className="flex flex-col gap-6">
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
                <Linkedin className="w-4 h-4" />
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
                <ExternalLink className="w-4 h-4" />
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

        <div>
          {services && services.length > 0 && (
            <div className="mb-3">
              <ul className="list-disc pl-5 text-sm text-toledo-grey">
                {services.map((service, index) => (
                  <li key={index} className="font-bold">{service}</li>
                ))}
              </ul>
            </div>
          )}
          
          <p className="text-toledo-grey text-sm text-justify hyphens-auto no-orphans">{bio}</p>
        </div>
      </div>
    </div>
  );
};

export default ExpertCard;
