
import { cn } from "@/lib/utils";

interface AudienceSegmentProps {
  title: string;
  icon: React.ReactNode;
  className?: string;
}

const AudienceSegment = ({ title, icon, className }: AudienceSegmentProps) => {
  return (
    <div className={cn("flex flex-col items-center p-8 bg-white border-t-4 border-t-toledo-gold shadow-sm transition-all duration-200 hover:shadow-lg", className)}>
      <div className="flex items-center justify-center h-12 w-12 text-toledo-blue mb-5">
        {icon}
      </div>
      <h3 className="text-lg font-bold text-center text-toledo-blue">{title}</h3>
    </div>
  );
};

export default AudienceSegment;
