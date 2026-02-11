import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";

const CTA = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section
      ref={ref}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative overflow-hidden py-32 bg-[#0057B8]"
    >
      {/* Smoky Rotating Background - Changes direction on hover */}
      <motion.div
        className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none"
        animate={{ rotate: isHovered ? -360 : 360 }}
        transition={{
          duration: 120,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        <div className="smoke-ring-main opacity-60 mix-blend-screen" />
      </motion.div>

      {/* === Content === */}
      <div className="container relative z-20">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-normal text-white mb-4 leading-tight">
            Join Africa's Tech Revolution Start Today!
          </h2>

          <p className="font-serif text-2xl md:text-3xl text-white/90 mb-12">
            Through Joining NexaTech Rwanda
          </p>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Link to="/contact">
              <Button
                className="rounded-xl bg-white text-[#4A4A4A] hover:bg-gray-100 px-12 h-14 text-lg font-medium shadow-xl transition-all duration-300 hover:scale-105"
              >
                Join Us
              </Button>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;
