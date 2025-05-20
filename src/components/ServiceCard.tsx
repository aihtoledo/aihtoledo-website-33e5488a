
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface ServiceCardProps {
  title: string;
  description: string;
  features: string[];
  icon: React.ReactNode;
  className?: string;
}

const ServiceCard = ({ title, description, features, icon, className }: ServiceCardProps) => {
  return (
    <Card className={cn("h-full transition-all duration-200 hover:shadow-lg border-t-4 border-t-toledo-coral bg-white", className)}>
      <CardHeader>
        <div className="flex items-center justify-center h-12 w-12 text-toledo-teal mb-4">{icon}</div>
        <CardTitle className="text-lg font-bold text-toledo-teal">{title}</CardTitle>
        <CardDescription className="text-sm text-toledo-grey/90 mt-3 whitespace-normal">{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <ul className="space-y-2">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <span className="text-toledo-coral mr-2 font-bold">✓</span>
              <span className="text-sm text-toledo-grey/90 whitespace-normal">{feature}</span>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
};

export default ServiceCard;
