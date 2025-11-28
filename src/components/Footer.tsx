import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Button } from "./ui/button";
import { MessageSquare, Twitter, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <footer ref={ref} className="bg-foreground text-primary-foreground py-16">
      <div className="container">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h3 className="font-serif text-xl font-medium mb-2">NexaTech Rwanda</h3>
            <p className="text-primary-foreground/70 text-sm mb-4">
              Transforming Africa and Rwanda tech solutions
            </p>
            <Button
              variant="outline"
              size="sm"
              className="rounded-full border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 gap-2 transition-all duration-300 hover:scale-105"
            >
              <MessageSquare className="w-4 h-4" />
              Get in contact
            </Button>
          </motion.div>

          {/* Navigation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4 className="font-medium mb-4">Navigation</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/70">
              <li><a href="#home" className="hover:text-primary-foreground transition-colors duration-300">Home</a></li>
              <li><a href="#about" className="hover:text-primary-foreground transition-colors duration-300">About</a></li>
              <li><a href="#work" className="hover:text-primary-foreground transition-colors duration-300">Work</a></li>
              <li><a href="#contact" className="hover:text-primary-foreground transition-colors duration-300">Contact</a></li>
            </ul>
          </motion.div>

          {/* Contacts */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="font-medium mb-4">Contacts</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/70">
              <li>+250723374650</li>
              <li>NexaTech347@gmail.com</li>
              <li>Rwanda</li>
            </ul>
          </motion.div>
        </div>

        {/* Bottom */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-primary-foreground/20"
        >
          <p className="text-sm text-primary-foreground/50">© 2025 All rights reserved</p>
          <p className="text-sm text-primary-foreground/70">NexaTech Rwanda</p>
          <div className="flex items-center gap-4">
            {[Twitter, Instagram, Linkedin].map((Icon, index) => (
              <motion.a 
                key={index}
                href="#" 
                whileHover={{ scale: 1.2, y: -2 }}
                className="text-primary-foreground/70 hover:text-primary-foreground transition-colors duration-300"
              >
                <Icon className="w-5 h-5" />
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
