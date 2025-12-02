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

                {/* green text */}
                <p className="font-serif text-xl text-[#68AE3C] mb-4">Manage Better</p>

                <p className="text-sm text-muted-foreground mb-4">
                  Shoppa helps different business owners and customers connect in one seamless mobile platform for free.
                </p>
                <Button variant="outline" size="sm" className="rounded-full transition-all duration-300 hover:scale-105">Get Started</Button>
              </div>
              
              {/* ------------------ FINAL CLEAN IMAGE ONLY ------------------ */}
              <motion.div 
                initial={{ scale: 0.9, opacity: 0 }}
                animate={isInView ? { scale: 1, opacity: 1 } : {}}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="flex items-center justify-center"
              >

                <motion.div 
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  className="w-full flex justify-center"
                >
                  <img
                    src="/shoppa.png"
                    alt="App Preview"
                    width={300}
                    height={600}
                    className="rounded-2xl shadow-2xl object-contain"
                  />
                </motion.div>

              </motion.div>
              {/* ------------------------------------------------------------- */}

            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Work;
