
import { cn } from "@/lib/utils";

interface AudienceSegmentProps {
  title: string;
  icon: React.ReactNode;
  className?: string;
}

const AudienceSegment = ({ title, icon, className }: AudienceSegmentProps) => {
  return (
    <div className={cn("flex flex-col items-center p-6 bg-white rounded-lg shadow-sm border border-gray-100 transition-all duration-200 hover:shadow-md", className)}>
      <div className="flex items-center justify-center h-14 w-14 rounded-full bg-eoh-blue-50 text-eoh-blue-700 mb-4">
        {icon}
      </div>
      <h3 className="text-lg font-semibold text-center">{title}</h3>
    </div>
  );
};

export default AudienceSegment;
