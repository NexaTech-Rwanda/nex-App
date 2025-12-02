import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

const Hero = () => {
  return (
    <section
      id="home"
      className="
        relative max-h-screen hero-gradient overflow-hidden
      "
    >
      {/* ⭐ TOP-HALF DOTTED OVERLAY */}
      <div
        className="
          absolute top-0 left-0 w-full h-[98%] pointer-events-none
          bg-[radial-gradient(circle,_rgba(0,0,0,0.15)_1px,_transparent_1px)]
          bg-[size:14px_14px]
        "
      />

      {/* Decorative elements */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute top-0 left-0 w-64 h-64 bg-gradient-to-br from-muted/50 to-transparent rounded-full blur-3xl" 
      />

      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5, delay: 0.2, ease: "easeOut" }}
        className="absolute top-20 right-0 w-96 h-96 bg-gradient-to-bl from-muted/30 to-transparent rounded-full blur-3xl" 
      />

      {/* Cloud/mountain shapes */}
      <motion.div 
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.3 }}
        className="absolute top-32 left-0 w-32 h-48 bg-gradient-to-r from-muted-foreground/5 to-transparent" 
        style={{ clipPath: 'polygon(0 100%, 100% 60%, 100% 100%)' }} 
      />

      <motion.div 
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.3 }}
        className="absolute top-20 right-0 w-48 h-64 bg-gradient-to-l from-muted-foreground/10 to-transparent"
        style={{ clipPath: 'polygon(0 40%, 100% 0, 100% 100%, 0 100%)' }} 
      />
      
      <div className="container relative pt-32 pb-20">
        <div className="max-w-3xl mx-auto text-center">

          {/* Badge */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary text-primary-foreground text-sm mb-8"
          >
            <span className="w-1.5 h-1.5 bg-primary-foreground rounded-full animate-pulse" />
            Revolutionize Africa Tech
          </motion.div>
          
          {/* Heading */}
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="font-serif text-5xl md:text-6xl lg:text-7xl font-medium text-foreground mb-6 leading-tight"
          >
            Building Africa's Tech Ecosystem From Rwanda
          </motion.h1>
          
          {/* Subtext */}
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-muted-foreground text-lg max-w-xl mx-auto mb-8"
          >
            Transform Africa's tech with NexaTech Rwanda's innovative solutions. We're creating the tech ecosystem that will make Rwanda the brain of Africa's technological revolution.
          </motion.p>

          {/* Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <Button 
              size="lg" 
              className="rounded-full px-8 mb-8 transition-all duration-300 hover:scale-105 hover:shadow-lg"
            >
              Join Us
            </Button>
          </motion.div>

          {/* Trusted Clients */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1 }}
            className="flex flex-col items-center gap-3"
          >
            <div className="flex -space-x-2">
              <Avatar className="w-10 h-10 border-2 border-background transition-transform hover:scale-110 hover:z-10">
                <AvatarImage src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face" />
                <AvatarFallback>U1</AvatarFallback>
              </Avatar>

              <Avatar className="w-10 h-10 border-2 border-background transition-transform hover:scale-110 hover:z-10">
                <AvatarImage src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=face" />
                <AvatarFallback>U2</AvatarFallback>
              </Avatar>

              <Avatar className="w-10 h-10 border-2 border-background transition-transform hover:scale-110 hover:z-10">
                <AvatarImage src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face" />
                <AvatarFallback>U3</AvatarFallback>
              </Avatar>
            </div>
            <span className="text-sm text-muted-foreground">Trusted by 30+ Clients</span>
          </motion.div>
        </div>
      </div>

      {/* Bottom border decoration */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
    </section>
  );
};

export default Hero;
