import { LucideIcon } from "lucide-react";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

const FeatureCard = ({ icon: Icon, title, description }: FeatureCardProps) => {
  return (
    <div className="p-8 border border-border rounded-lg bg-card hover:shadow-lg transition-shadow">
      <Icon className="w-8 h-8 text-foreground mb-4" strokeWidth={1.5} />
      <h3 className="font-heading text-xl font-semibold mb-3">{title}</h3>
      <p className="text-muted-foreground text-sm leading-relaxed">{description}</p>
    </div>
  );
};

export default FeatureCard;
