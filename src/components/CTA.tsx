import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Button } from "./ui/button";

const CTA = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      ref={ref}
      className="relative overflow-hidden py-32 blue-gradient"
    >
      {/* === Smoky rotating background === */}
      <motion.div
        className="absolute inset-0 z-0 flex items-center justify-center"
        animate={{ rotate: 360 }}
        transition={{
          duration: 120, // slow & smooth
          repeat: Infinity,
          ease: "linear",
        }}
      >
        <div className="smoke-ring-main" />
      </motion.div>

      {/* Optional second layer for depth */}
      <motion.div
        className="absolute inset-0 z-0 flex items-center justify-center"
        animate={{ rotate: -360 }}
        transition={{
          duration: 180,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        <div className="smoke-ring-secondary" />
      </motion.div>

      {/* Soft glowing accents */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.05, 0.1, 0.05],
        }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/2 left-1/4 w-96 h-96 bg-white rounded-full blur-3xl -translate-y-1/2 z-10 mix-blend-screen"
      />

      <motion.div
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.05, 0.1, 0.05],
        }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute top-1/2 right-1/4 w-72 h-72 bg-white rounded-full blur-3xl -translate-y-1/2 z-10"
      />

      {/* === Content === */}
      <div className="container relative z-20">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-medium text-primary-foreground mb-4">
            Join Africa&apos;s Tech Revolution – Start Today!
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
              className="rounded-full border-primary-foreground bg-primary-foreground text-primary px-10 transition-all duration-300 hover:scale-105 hover:shadow-xl"
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
