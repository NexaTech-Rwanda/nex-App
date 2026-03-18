import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Button } from "./ui/button";
import { Building2, Hand, Layers3, MapPinned } from "lucide-react";
import { Link } from "react-router-dom";
import { operatingPrinciples } from "@/data/nexatech";

const features = [
  {
    icon: Layers3,
    title: operatingPrinciples[0].title,
    description: operatingPrinciples[0].description,
  },
  {
    icon: MapPinned,
    title: operatingPrinciples[1].title,
    description: operatingPrinciples[1].description,
  },
  {
    icon: Building2,
    title: operatingPrinciples[2].title,
    description: operatingPrinciples[2].description,
  },
];

const WhyChooseUs = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-16 relative bg-[#F9F8F6] overflow-hidden">
      {/* Background Dots */}
      <div
        className="absolute inset-0 z-0 opacity-[0.4]"
        style={{
          backgroundImage: "radial-gradient(#E5E5E5 1px, transparent 1px)",
          backgroundSize: "20px 20px"
        }}
      />

      <div className="container relative z-10">

        {/* Header Section */}
        <div className="flex flex-col md:flex-row items-end justify-between mb-12 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="max-w-xl"
          >
            <div className="inline-block px-3 py-1 rounded-full border border-black/5 bg-white/50 backdrop-blur-sm text-[11px] font-medium text-gray-600 mb-4 shadow-sm">
              How Nexatech Builds
            </div>

            <h2 className="font-serif text-4xl md:text-5xl font-normal text-[#4A4A4A] mb-4 leading-[1.1]">
              A Holding Company For Africa&apos;s Essential Services
            </h2>

            <p className="text-muted-foreground text-base leading-relaxed max-w-lg mb-6">
              NexatechRwanda does not operate as an agency building software for
              clients. It builds, validates, owns, and compounds consumer-first
              products that modernize commerce, mobility, services, and
              agriculture from Rwanda outward.
            </p>

            <div className="flex flex-wrap items-center gap-3">
              <Link to="/products">
                <Button
                  className="rounded-xl bg-[#0057B8]/90 hover:bg-[#0057B8] text-white px-6 h-11 gap-2 shadow-lg shadow-blue-900/10 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 text-sm"
                >
                  <Hand className="w-4 h-4" />
                  View products
                </Button>
              </Link>

              <Link to="/about">
                <Button
                  variant="outline"
                  className="rounded-xl border-gray-200 bg-transparent text-foreground hover:bg-white/50 px-6 h-11 text-sm transition-all duration-300"
                >
                  Operating model
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + (index * 0.15) }}
              className="flex flex-col items-center text-center group"
            >
              {/* Animated Icon Container */}
              <motion.div
                whileTap={{ rotate: 360, scale: 0.9 }}
                whileHover={{ scale: 1.05 }}
                animate={
                  index === 0
                    ? { y: [0, -5, 0], rotate: [0, 15, -10, 0] }
                    : index === 1
                      ? { y: [0, -5, 0], scale: [1, 1.2, 1], rotate: [0, 90, 0] }
                      : { y: [0, -5, 0], scale: [1, 1.15, 1] }
                }
                transition={{
                  y: { duration: 3, repeat: Infinity, ease: "easeInOut", delay: index * 0.5 },
                  rotate: { duration: index === 1 ? 5 : 3, repeat: Infinity, ease: "easeInOut", delay: index * 0.2 },
                  scale: { duration: 2, repeat: Infinity, ease: "easeInOut", delay: index * 0.3 },
                }}
                className="w-14 h-14 rounded-[18px] bg-white border border-white shadow-[0_4px_20px_rgb(0,0,0,0.03)] flex items-center justify-center mb-5 transition-all duration-500 hover:shadow-lg hover:shadow-blue-100/50 cursor-pointer"
              >
                <feature.icon
                  className={`text-[#0057B8]/80 ${index === 2 ? "w-5 h-5" : "w-6 h-6"}`}
                  strokeWidth={1.5}
                />
              </motion.div>

              <h3 className="font-serif text-xl font-medium text-foreground mb-3">
                {feature.title}
              </h3>

              <p className="text-muted-foreground leading-relaxed max-w-sm text-sm">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
