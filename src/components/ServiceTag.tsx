import { Sparkles } from "lucide-react";

interface ServiceTagProps {
  label: string;
}

const ServiceTag = ({ label }: ServiceTagProps) => {
  return (
    <span className="inline-flex items-center gap-2 px-4 py-2 border border-border rounded-full text-sm text-muted-foreground hover:border-primary hover:text-primary transition-colors cursor-default">
      <Sparkles className="w-3 h-3" />
      {label}
    </span>
  );
};

export default ServiceTag;
