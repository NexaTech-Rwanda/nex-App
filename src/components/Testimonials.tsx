import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Button } from "./ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { MessageSquare } from "lucide-react";

const testimonials = [
  {
    name: "Mike Karanzi",
    role: "CEO | ShopWise",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
    content: "The Use of Shoppa made by my Products Selling increased due to use of shoppa through listing down my products and now am selling more than $500k per month.",
  },
  {
    name: "Alex",
    role: "CEO | Urumbiai Rwanda",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
    content: "The Use of Shoppa made by my Products Selling increased due to use of shoppa through listing down my products and now am selling more than $500k per month.",
  },
  {
    name: "Melisa Den",
    role: "Marketing Lead | Prime Life Insurance",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=face",
    content: "The Use of Shoppa made by my Products Selling increased due to use of shoppa through listing down my products and now am selling more than $500k per month.",
  },
  {
    name: "Alex Divert",
    role: "Sales Officer | Nssb",
    image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=100&h=100&fit=crop&crop=face",
    content: "The Use of Shoppa made by my Products Selling increased due to use of shoppa through listing down my products and now am selling more than $500k per month.",
  },
];

const Testimonials = () => {
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
          className="text-center mb-12"
        >
          <span className="section-badge mb-4">They trust us</span>
          <h2 className="font-serif text-4xl md:text-5xl font-medium text-foreground mb-6">
            Real feedback, <span className="font-bold">real results.</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto mb-8">
            Explore how businesses and individuals have achieved their goals with our tailored solutions and exceptional support.
          </p>
          <Button className="rounded-full gap-2 transition-all duration-300 hover:scale-105 hover:shadow-lg">
            <MessageSquare className="w-4 h-4" />
            Book a call
          </Button>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-4 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div 
              key={index} 
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
              whileHover={{ y: -8 }}
              className="bg-card rounded-2xl p-6 border border-border hover:shadow-xl transition-shadow duration-300"
            >
              <Avatar className="w-12 h-12 mb-4">
                <AvatarImage src={testimonial.image} />
                <AvatarFallback>{testimonial.name[0]}</AvatarFallback>
              </Avatar>
              <p className="text-sm text-muted-foreground mb-6 italic">
                {testimonial.content}
              </p>
              <div>
                <div className="font-serif font-medium text-foreground">{testimonial.name}</div>
                <div className="text-xs text-muted-foreground">{testimonial.role}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
