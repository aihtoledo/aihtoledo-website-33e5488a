
import { cn } from "@/lib/utils";

interface AiFeatureProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  className?: string;
}

const AiFeature = ({ title, description, icon, className }: AiFeatureProps) => {
  return (
    <div className={cn("flex flex-col items-center text-center", className)}>
      <div className="flex items-center justify-center h-16 w-16 rounded-full bg-gradient-to-br from-toledo-blue to-toledo-gold text-white mb-4">
        {icon}
      </div>
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-toledo-grey">{description}</p>
    </div>
  );
};

export default AiFeature;
