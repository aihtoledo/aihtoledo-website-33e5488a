
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ArrowRight, Linkedin, ExternalLink, Calendar, MessageSquare } from "lucide-react";
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
  const firstName = name.split(' ')[0];

  return (
    <div className={cn(
      "group relative bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 flex flex-col h-full",
      "border border-gray-100 hover:border-toledo-coral/20",
      className
    )}>
      <div className="relative z-10 flex flex-col h-full p-6">
        {/* Expert header with image and basic info */}
        <div className="flex flex-col items-center text-center mb-6">
          <div className="relative mb-4 group-hover:scale-105 transition-transform duration-300">
            <div className="relative w-32 h-32 rounded-full overflow-hidden border-4 border-white shadow-lg group-hover:border-toledo-coral/30 transition-colors duration-300">
              <img 
                src={image} 
                alt={`Photo of ${name}`} 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          
          <h3 className="text-2xl font-bold text-toledo-teal mb-1">{name}</h3>
          <div className="text-sm text-toledo-grey/80 mb-6">{pronouns}</div>
          
          {/* Social links */}
          <div className="flex gap-3 mb-6">
            {linkedInLink && (
              <a 
                href={linkedInLink} 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-gray-100 text-toledo-teal hover:bg-toledo-teal hover:text-white transition-colors duration-200"
                aria-label={`${name}'s LinkedIn profile`}
              >
                <Linkedin className="w-5 h-5" />
              </a>
            )}
            {personalSiteLink && (
              <a 
                href={personalSiteLink} 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-gray-100 text-toledo-teal hover:bg-toledo-teal hover:text-white transition-colors duration-200"
                aria-label={`${name}'s personal website`}
              >
                <ExternalLink className="w-5 h-5" />
              </a>
            )}
          </div>
        </div>
        
        {/* Services */}
        {services && services.length > 0 && (
          <div className="mb-6">
            <h4 className="text-sm font-semibold text-toledo-grey/80 uppercase tracking-wider mb-3 flex items-center">
              <MessageSquare className="w-4 h-4 mr-2 text-toledo-coral" />
              Expert In
            </h4>
            <div className="flex flex-wrap gap-2">
              {services.map((service, index) => (
                <span 
                  key={index} 
                  className="inline-flex items-center px-3 py-1.5 rounded-full text-xs font-medium bg-toledo-coral/10 text-toledo-coral border border-toledo-coral/20"
                >
                  {service}
                </span>
              ))}
            </div>
          </div>
        )}
        
        {/* Bio */}
        <div className="mb-6 flex-grow">
          <p className="text-toledo-grey text-justify hyphens-auto no-orphans">
            {bio.length > 200 ? `${bio.substring(0, 200)}...` : bio}
          </p>
        </div>
        
        {/* CTA Button */}
        <Button 
          className="w-full py-6 bg-toledo-coral hover:bg-toledo-coral/90 text-white font-medium rounded-xl shadow-md hover:shadow-lg transition-all duration-300 group-hover:scale-[1.02] flex items-center justify-center gap-2"
          onClick={() => window.open(bookingLink, '_blank')}
        >
          <Calendar className="w-5 h-5" />
          Book with {firstName}
          <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
        </Button>
      </div>
    </div>
  );
};

export default ExpertCard;
