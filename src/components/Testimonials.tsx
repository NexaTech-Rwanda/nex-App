import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { MessageSquare } from "lucide-react";
import { useState } from "react";

const testimonials = [
  {
    name: "Mike Karanzi",
    role: "CEO | ShopWise",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
    content:
      "Shoppa increased my sales by improving product visibility and customer reach.",
  },
  {
    name: "Alex",
    role: "CEO | Urumbiai Rwanda",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
    content:
      "Our operations became smoother and customers engaged more consistently.",
  },
  {
    name: "Melisa Den",
    role: "Marketing Lead | Prime Life Insurance",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=face",
    content:
      "Shoppa helped us scale faster and reach the right audience effectively.",
  },
  {
    name: "Alex Divert",
    role: "Sales Officer | Nssb",
    image:
      "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=100&h=100&fit=crop&crop=face",
    content:
      "Sales tracking and performance insights improved instantly.",
  },
];

// duplicate for infinite loop
const marqueeItems = [...testimonials, ...testimonials];

const Testimonials = () => {
  const [paused, setPaused] = useState(false);

  return (
    <section className="py-20 cream-section overflow-hidden">
      <div className="container">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="section-badge mb-4">They trust us</span>
          <h2 className="font-serif text-4xl md:text-5xl font-medium mb-6">
            Real feedback, <span className="font-bold">real results.</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto mb-8">
            See how people are growing their businesses with Shoppa.
          </p>
          <Button className="rounded-full gap-2">
            <MessageSquare className="w-4 h-4" />
            Book a call
          </Button>
        </div>

        {/* Infinite small cards */}
        <div className="relative overflow-hidden">
          <motion.div
            className="flex gap-4 w-max"
            animate={{ x: paused ? 0 : ["0%", "-50%"] }}
            transition={{
              duration: 30,
              ease: "linear",
              repeat: paused ? 0 : Infinity,
            }}
          >
            {marqueeItems.map((testimonial, index) => (
              <div
                key={index}
                onMouseEnter={() => setPaused(true)}
                onMouseLeave={() => setPaused(false)}
                className="w-[240px] bg-card rounded-xl p-5 border border-border hover:shadow-lg transition"
              >
                <Avatar className="w-10 h-10 mb-3">
                  <AvatarImage src={testimonial.image} />
                  <AvatarFallback>
                    {testimonial.name[0]}
                  </AvatarFallback>
                </Avatar>

                <p className="text-sm text-muted-foreground mb-4 italic">
                  “{testimonial.content}”
                </p>

                <div>
                  <div className="font-medium text-sm">
                    {testimonial.name}
                  </div>
                  <div className="text-xs text-muted-foreground">
                    {testimonial.role}
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
