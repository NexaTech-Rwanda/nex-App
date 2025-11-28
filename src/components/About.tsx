import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Button } from "./ui/button";
import { MessageSquare } from "lucide-react";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" ref={ref} className="py-20 cream-section">
      <div className="container">
        {/* Who Are We Section */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="section-badge mb-4">who we are</span>
          <h2 className="font-serif text-4xl md:text-5xl font-medium text-foreground mb-6">
            Who Are We? The Brain Of Africa's Tech Ecosystem
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto mb-8">
            At NexaTech Rwanda, we are more than just a tech company—we are the architects of Africa's digital future.
          </p>
          <Button className="rounded-full gap-2 transition-all duration-300 hover:scale-105 hover:shadow-lg">
            <MessageSquare className="w-4 h-4" />
            Book a call
          </Button>
        </motion.div>

        {/* Blue CTA Box */}
        <motion.div 
          initial={{ opacity: 0, y: 60, scale: 0.95 }}
          animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="blue-gradient rounded-3xl p-10 text-primary-foreground mb-16 hover:shadow-2xl transition-shadow duration-500"
        >
          <h3 className="font-serif text-3xl font-medium mb-4">Africa Tech Brain</h3>
          <p className="text-primary-foreground/80 mb-6 max-w-md">
            Leveraging cutting-edge technology to enhance efficiency, precision, and sustainability in every project.
          </p>
          <ul className="space-y-2 mb-8">
            {[
              "AI-Powered Business Solutions",
              "Custom Tech Solutions", 
              "African AI Innovation",
              "Pan-African Cloud Infrastructure"
            ].map((item, index) => (
              <motion.li 
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                className="flex items-center gap-2 text-sm"
              >
                <span className="text-yellow-300">✦</span> {item}
              </motion.li>
            ))}
          </ul>
          <Button variant="outline" className="rounded-full border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 gap-2 transition-all duration-300 hover:scale-105">
            <MessageSquare className="w-4 h-4" />
            Join Us
          </Button>
        </motion.div>

        {/* Stats */}
        <div className="grid md:grid-cols-3 gap-8 text-center">
          {[
            { value: "4", label: "Total Product", desc: "We have officially in process of launching our main projects" },
            { value: "97%", label: "Success Rate", desc: "Consistently delivering exceptional results that exceed users expectations." },
            { value: "1 Year", label: "In business", desc: "Half a decade of shaping digital experiences and driving business growth." },
          ].map((stat, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.5 + index * 0.15 }}
            >
              <div className="font-serif text-5xl font-medium text-foreground mb-2">{stat.value}</div>
              <div className="font-medium text-foreground mb-2">{stat.label}</div>
              <p className="text-sm text-muted-foreground">{stat.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
