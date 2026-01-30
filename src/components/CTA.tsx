import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Button } from "./ui/button";

const CTA = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      ref={ref}
      className="relative overflow-hidden py-32 bg-[#0057B8]"
    >
      {/* Central Glow/Highlight */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-white/10 blur-[120px] rounded-full pointer-events-none"
      />

      {/* === Content === */}
      <div className="container relative z-20">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-normal text-white mb-4 leading-tight">
            Join Africa's Tech Revolution — Start Today!
          </h2>

          <p className="font-serif text-2xl md:text-3xl text-white/90 mb-12">
            Through Joining NexaTech Rwanda
          </p>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Button
              className="rounded-xl bg-white text-black hover:bg-gray-100 px-12 h-14 text-lg font-medium shadow-xl transition-all duration-300 hover:scale-105"
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
