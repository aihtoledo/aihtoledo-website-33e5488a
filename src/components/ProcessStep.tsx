
import { cn } from "@/lib/utils";

interface ProcessStepProps {
  number: number;
  title: string;
  description: string;
  className?: string;
}

const ProcessStep = ({ number, title, description, className }: ProcessStepProps) => {
  return (
    <div className={cn("flex flex-col items-center text-center", className)}>
      <div className="flex items-center justify-center h-16 w-16 rounded-full bg-eoh-blue-100 text-eoh-blue-800 text-2xl font-bold mb-4">
        {number}
      </div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default ProcessStep;
