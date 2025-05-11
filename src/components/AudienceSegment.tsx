
import { cn } from "@/lib/utils";

interface AudienceSegmentProps {
  title: string;
  icon: React.ReactNode;
  className?: string;
}

const AudienceSegment = ({ title, icon, className }: AudienceSegmentProps) => {
  return (
    <div className={cn("flex flex-col items-center p-6 bg-white border-t-4 border-toledo-gold shadow-md transition-all duration-200 hover:shadow-lg", className)}>
      <div className="flex items-center justify-center h-16 w-16 text-toledo-blue mb-5">
        {icon}
      </div>
      <h3 className="text-lg font-bold text-center text-toledo-blue whitespace-pre-line">{title}</h3>
    </div>
  );
};

export default AudienceSegment;
