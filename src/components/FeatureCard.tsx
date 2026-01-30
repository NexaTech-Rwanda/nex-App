import { LucideIcon } from "lucide-react";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

const FeatureCard = ({ icon: Icon, title, description }: FeatureCardProps) => {
  return (
    <div className="p-6 border border-border rounded-lg bg-card hover:shadow-lg transition-shadow">
      <Icon className="w-6 h-6 text-foreground mb-3" strokeWidth={1.5} />
      <h3 className="font-heading text-lg font-semibold mb-2">{title}</h3>
      <p className="text-muted-foreground text-xs leading-relaxed">{description}</p>
    </div>
  );
};

export default FeatureCard;
