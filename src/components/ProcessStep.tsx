
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
      <div className="flex items-center justify-center h-20 w-20 rounded-md bg-toledo-orange text-white font-bold mb-4 text-3xl">
        {number}
      </div>
      <h3 className="text-xl font-bold mb-3 text-toledo-blue">{title}</h3>
      <p className="text-toledo-grey text-base">{description}</p>
    </div>
  );
};

export default ProcessStep;
