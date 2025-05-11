
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";
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
      <div className="flex flex-col md:flex-row gap-6">
        <div className="flex flex-col items-center md:items-start">
          <div className="w-32 h-32 rounded-full overflow-hidden shrink-0 mb-3">
            <img 
              src={image} 
              alt={`Photo of ${name}`} 
              className="w-full h-full object-cover"
            />
          </div>
          <h3 className="text-xl font-bold text-toledo-blue mb-1 text-center md:text-left">{name} <span className="text-sm font-normal text-toledo-grey">({pronouns})</span></h3>
          <div className="flex flex-wrap gap-3 mb-3 justify-center md:justify-start">
            {linkedInLink && (
              <a 
                href={linkedInLink} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-sm text-toledo-blue hover:text-toledo-orange transition-colors"
              >
                LinkedIn
              </a>
            )}
            {personalSiteLink && (
              <a 
                href={personalSiteLink} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-sm text-toledo-blue hover:text-toledo-orange transition-colors"
              >
                Website
              </a>
            )}
          </div>
        </div>
        <div className={isMobile ? "mt-3" : ""}>
          {services && services.length > 0 && (
            <div className="mb-3">
              <ul className="list-disc pl-5 text-sm text-toledo-grey">
                {services.map((service, index) => (
                  <li key={index} className="font-bold">{service}</li>
                ))}
              </ul>
            </div>
          )}
          
          <p className="text-toledo-grey text-sm line-clamp-6 md:line-clamp-none text-center md:text-left">{bio}</p>
        </div>
      </div>
      <div className="mt-auto pt-4 border-t border-gray-100 mt-6">
        <Button 
          className="bg-toledo-orange hover:bg-toledo-orange/90 text-white w-full"
          onClick={() => window.open(bookingLink, '_blank')}
        >
          Book with {name.split(' ')[0]}
          <ArrowRight className="w-4 h-4 ml-2" />
        </Button>
      </div>
    </div>
  );
};

export default ExpertCard;
