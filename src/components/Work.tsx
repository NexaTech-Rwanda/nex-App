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
                    width={1000}
                    height={800}
                    className="rounded-2xl shadow-2xl object-contain"
                  />
                </motion.div>

              </motion.div>
              {/* ------------------------------------------------------------- */}

            
        
        </motion.div>
      </div>
    </section>
  );
};

export default Work;
