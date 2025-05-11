
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
    <Card className={cn("h-full transition-all duration-200 hover:shadow-lg border-t-4 border-t-toledo-gold", className)}>
      <CardHeader>
        <div className="flex items-center justify-center h-12 w-12 text-toledo-blue mb-4">{icon}</div>
        <CardTitle className="text-xl font-bold text-toledo-blue no-orphans">{title}</CardTitle>
        <CardDescription className="text-toledo-grey mt-3 no-orphans">{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <ul className="space-y-2">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <span className="text-toledo-gold mr-2 font-bold">✓</span>
              <span className="text-toledo-grey no-orphans">{feature}</span>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
};

export default ServiceCard;
