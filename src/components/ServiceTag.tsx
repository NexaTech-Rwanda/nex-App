import { Sparkles } from "lucide-react";

interface ServiceTagProps {
  label: string;
}

const ServiceTag = ({ label }: ServiceTagProps) => {
  return (
    <span className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 border border-gray-200 rounded-full text-[13px] text-gray-600 font-medium hover:border-blue-500 hover:text-blue-600 transition-colors cursor-default shadow-sm backdrop-blur-sm">
      <span className="text-lg leading-none pt-1">﹡</span>
      {label}
    </span>
  );
};

export default ServiceTag;
