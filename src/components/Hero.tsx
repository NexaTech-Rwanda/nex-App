import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Link } from "react-router-dom";
import { leaders } from "@/data/nexatech";

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
            Rwanda-first consumer tech holding company
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="font-serif text-3xl md:text-5xl lg:text-[55px] font-normal text-[#4A4A4A] mb-8 leading-[1.1] tracking-tight"
          >
            Building And Owning Digital Products <br className="hidden md:block" /> For Africa&apos;s Essential Services.
          </motion.h1>

          {/* Subtext */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-gray-500 text-md md:text-lg max-w-2xl mx-auto mb-10 leading-relaxed font-light"
          >
            NexatechRwanda is a product ownership company building a portfolio
            of consumer-first ventures across commerce, mobility, services, and
            agriculture. We start in Rwanda, prove real market value, and scale
            durable products across Africa over time.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="flex flex-wrap items-center justify-center gap-3"
          >
            <Link to="/products">
              <Button
                size="lg"
                className="rounded-full bg-[#0057B8] hover:bg-[#0057B8]/90 text-white text-base px-6 py-2 h-auto shadow-[0_20px_40px_-15px_rgba(var(--primary),0.3)] hover:shadow-xl hover:-translate-y-1 transition-all duration-300 mb-5"
              >
                Explore Our Products
              </Button>
            </Link>
            <Link to="/team">
              <Button
                size="lg"
                variant="outline"
                className="rounded-full border-gray-200 bg-white/80 text-[#1A1A1A] hover:bg-white text-base px-6 py-2 h-auto shadow-sm transition-all duration-300 mb-5"
              >
                Meet The Team
              </Button>
            </Link>
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
                  {leaders.map((leader) => (
                    <Avatar
                      key={leader.name}
                      className="w-10 h-10 border-2 border-background transition-transform hover:scale-110 hover:z-10"
                    >
                      <AvatarImage src={leader.image} alt={leader.name} />
                      <AvatarFallback>
                        {leader.name
                          .split(" ")
                          .map((part) => part[0])
                          .join("")
                          .slice(0, 2)}
                      </AvatarFallback>
                    </Avatar>
                  ))}
                </div>
                <span className="text-sm text-muted-foreground">
                  4 active products in development across essential services
                </span>
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
