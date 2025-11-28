import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";

const Work = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="work" ref={ref} className="py-20 bg-background">
      <div className="container">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="section-badge mb-4">Work</span>
          <h2 className="font-serif text-4xl md:text-5xl font-medium text-foreground">
            Building Africa's Tech Ecosystem<br />Through Innovation
          </h2>
        </motion.div>

        {/* Project Card */}
        <motion.div 
          initial={{ opacity: 0, y: 60 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-cream rounded-3xl p-8 max-w-4xl mx-auto hover:shadow-xl transition-shadow duration-500"
        >
          <div className="flex gap-3 mb-4">
            <Badge variant="secondary" className="bg-primary text-primary-foreground">E-commerce</Badge>
            <Badge variant="outline">2025</Badge>
          </div>
          
          <h3 className="font-serif text-3xl font-medium text-foreground mb-6">Shoppa</h3>
          
          {/* Mock App Preview */}
          <div className="bg-card rounded-2xl p-6 border border-border">
            <div className="flex items-center justify-between mb-6">
              <span className="text-sm font-medium text-primary">Shoppa</span>
              <div className="flex items-center gap-4">
                <span className="text-xs text-muted-foreground">Features</span>
                <span className="text-xs text-muted-foreground">FAQ</span>
                <Button size="sm" className="rounded-full text-xs h-7 transition-all duration-300 hover:scale-105">Download App</Button>
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h4 className="font-serif text-2xl md:text-3xl font-medium mb-2">
                  Shop smarter Sell Faster
                </h4>
                <p className="font-serif text-xl text-green-500 mb-4">Manage Better</p>
                <p className="text-sm text-muted-foreground mb-4">
                  Shoppa helps different business owners and customers connect in one seamless mobile platform for free.
                </p>
                <Button variant="outline" size="sm" className="rounded-full transition-all duration-300 hover:scale-105">Get Started</Button>
              </div>
              
              <motion.div 
                initial={{ scale: 0.9, opacity: 0 }}
                animate={isInView ? { scale: 1, opacity: 1 } : {}}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="relative"
              >
                <div className="bg-green-500 rounded-2xl h-48 flex items-center justify-center overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-green-400 to-green-600" />
                  <div className="relative z-10 flex items-center gap-4">
                    <motion.div 
                      animate={{ y: [0, -5, 0] }}
                      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                      className="w-20 h-32 bg-card rounded-xl shadow-lg flex items-center justify-center"
                    >
                      <span className="text-xs text-muted-foreground">📱</span>
                    </motion.div>
                    <div className="space-y-2">
                      <motion.div 
                        animate={{ x: [0, 5, 0] }}
                        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
                        className="bg-card/90 px-3 py-1 rounded-full text-xs"
                      >
                        Effortless Shopping
                      </motion.div>
                      <motion.div 
                        animate={{ x: [0, 5, 0] }}
                        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.6 }}
                        className="bg-primary px-3 py-1 rounded-full text-xs text-primary-foreground"
                      >
                        Effortless Shopping
                      </motion.div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Work;
