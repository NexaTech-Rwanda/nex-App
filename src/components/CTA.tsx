import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Button } from "./ui/button";

const CTA = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-32 blue-gradient relative overflow-hidden">
      {/* Decorative circles */}
      <motion.div 
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.05, 0.1, 0.05]
        }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/2 left-1/4 w-96 h-96 bg-white rounded-full blur-3xl -translate-y-1/2" 
      />
      <motion.div 
        animate={{ 
          scale: [1.2, 1, 1.2],
          opacity: [0.05, 0.1, 0.05]
        }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute top-1/2 right-1/4 w-64 h-64 bg-white rounded-full blur-3xl -translate-y-1/2" 
      />
      
      <div className="container relative">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-medium text-primary-foreground mb-4">
            Join Africa's Tech Revolution – Start Today!
          </h2>
          <p className="font-serif text-2xl md:text-3xl text-primary-foreground/80 mb-10">
            Through Joining NexaTech Rwanda
          </p>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Button
              variant="outline"
              size="lg"
              className="rounded-full border-primary-foreground bg-primary-foreground text-primary hover:bg-primary-foreground/90 px-10 transition-all duration-300 hover:scale-105 hover:shadow-xl"
            >
              Join Us
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;
