import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Button } from "./ui/button";
import { Smartphone, Plus, Heart } from "lucide-react";

const features = [
  {
    icon: Smartphone,
    title: "AI-Powered Business Solutions",
    description: "We build smart automation solutions for African enterprises to Rwanda's thriving tech ecosystem.",
  },
  {
    icon: Plus,
    title: "Custom Tech Solutions",
    description: "We design end-to-end tech solutions for Africa and Rwanda to enhance its Tech",
  },
  {
    icon: Heart,
    title: "African AI Innovation",
    description: "We are leading our africa ai innovation hub creation through our different solutions",
  },
];

const WhyChooseUs = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-20 cream-section">
      <div className="container">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-xl mb-16"
        >
          <span className="section-badge mb-4">Why choose us</span>
          <h2 className="font-serif text-4xl md:text-5xl font-medium text-foreground mb-6">
            Digital Solutions for Africa
          </h2>
          <p className="text-muted-foreground mb-8">
            NexaTech Rwanda pioneers Africa's digital transformation by delivering innovative tech solutions that empower businesses and governments for sustainable development.
          </p>
          <div className="flex items-center gap-4">
            <Button className="rounded-full gap-2 transition-all duration-300 hover:scale-105 hover:shadow-lg">
              <span className="w-4 h-4">📋</span>
              Get started
            </Button>
            <Button variant="outline" className="rounded-full transition-all duration-300 hover:scale-105">
              How we work?
            </Button>
          </div>
        </motion.div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div 
              key={index} 
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="text-center group"
            >
              <div className="w-12 h-12 rounded-full border border-border bg-card flex items-center justify-center mx-auto mb-4 transition-all duration-300 group-hover:scale-110 group-hover:border-primary group-hover:shadow-md">
                <feature.icon className="w-5 h-5 text-foreground transition-colors group-hover:text-primary" />
              </div>
              <h3 className="font-serif text-lg font-medium text-foreground mb-2">
                {feature.title}
              </h3>
              <p className="text-sm text-muted-foreground">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
