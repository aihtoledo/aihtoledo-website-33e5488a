
import { cn } from "@/lib/utils";

interface AiFeatureProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  className?: string;
}

const AiFeature = ({ title, description, icon, className }: AiFeatureProps) => {
  return (
    <div className={cn("flex flex-col items-center text-center p-6", className)}>
      <div className="flex items-center justify-center h-16 w-16 border-2 border-toledo-gold text-toledo-blue mb-5">
        {icon}
      </div>
      <h3 className="text-lg font-bold mb-3 text-toledo-blue">{title}</h3>
      <p className="text-toledo-grey">{description}</p>
    </div>
  );
};

export default AiFeature;
