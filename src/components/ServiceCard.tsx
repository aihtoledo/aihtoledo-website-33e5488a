
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
    <Card className={cn("h-full transition-all duration-200 hover:shadow-lg", className)}>
      <CardHeader>
        <div className="feature-icon">{icon}</div>
        <CardTitle className="text-xl font-bold">{title}</CardTitle>
        <CardDescription className="text-gray-600 mt-2">{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <ul className="space-y-2">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <span className="text-eoh-blue-600 mr-2 font-bold">✅</span>
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
};

export default ServiceCard;
