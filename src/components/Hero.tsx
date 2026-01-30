import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

const Hero = () => {
  return (
    <section
      id="home"
      className="
        relative min-h-screen hero-gradient overflow-hidden
        px-4 md:px-8 lg:px-16
      "
    >
      {/* 🌄 Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-20"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1')",
        }}
      />

      {/* Overlay for readability */}
      <div className="absolute inset-0 bg-background/70" />

      {/* ⭐ Dotted Overlay */}
      <div
        className="
          absolute top-0 left-0 w-full h-[98%] pointer-events-none
          bg-[radial-gradient(circle,_rgba(0,0,0,0.15)_1px,_transparent_1px)]
          bg-[size:14px_14px]
        "
      />

      {/* Decorative gradients */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute top-0 left-0 w-80 h-80 bg-gradient-to-br from-muted/50 to-transparent rounded-full blur-3xl"
      />

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5, delay: 0.2, ease: "easeOut" }}
        className="absolute top-20 right-0 w-[28rem] h-[28rem] bg-gradient-to-bl from-muted/30 to-transparent rounded-full blur-3xl"
      />

      <div className="container relative pt-40 pb-32">
        <div className="max-w-4xl mx-auto text-center">

          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-primary text-primary-foreground text-sm mb-10"
          >
            <span className="w-1.5 h-1.5 bg-primary-foreground rounded-full animate-pulse" />
            Revolutionize Africa Tech
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="font-serif text-5xl md:text-7xl lg:text-[80px] font-normal text-[#4A4A4A] mb-8 leading-[1.1] tracking-tight"
          >
            Building Africa&apos;s Tech Ecosystem <br className="hidden md:block" /> From Rwanda
          </motion.h1>

          {/* Subtext */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-gray-500 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed font-light"
          >
            Transform Africa&apos;s tech with NexaTech
            Rwanda&apos;s innovative solutions. We&apos;re creating the tech ecosystem
            that will make Rwanda the brain of Africa&apos;s technological revolution.
          </motion.p>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <Button
              size="lg"
              className="rounded-full bg-[#0057B8] hover:bg-[#0057B8]/90 text-white text-base px-6 py-2 h-auto shadow-[0_20px_40px_-15px_rgba(var(--primary),0.3)] hover:shadow-xl hover:-translate-y-1 transition-all duration-300 mb-5"
            >
              Join Us
            </Button>
          </motion.div>

          {/* 🔁 Floating Avatars */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1 }}
            className="flex flex-col items-center gap-4"
          >
            <div className="flex -space-x-3">

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
          </motion.div>
        </div>
      </div>

      {/* Bottom border */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
    </section>
  );
};

export default Hero;
