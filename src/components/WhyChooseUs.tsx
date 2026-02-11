import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Button } from "./ui/button";
import { Plus, Heart, Hand, Pencil } from "lucide-react";

const features = [
  {
    icon: Pencil,
    title: "Custom Enterprise Platforms",
    description: "Tailored enterprise solutions designed to streamline complex business processes and scale across the African market.",
  },
  {
    icon: Plus,
    title: "Mobile Product Engineering",
    description: "High-performance native and cross-platform mobile solutions ready for deployment and high-user engagement.",
  },
  {
    icon: Heart,
    title: "AI & Data Intelligence",
    description: "Leveraging artificial intelligence to automate workflows and provide predictive insights for smarter decision-making.",
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
              Our Ready-to-Market Solutions
            </div>

            <h2 className="font-serif text-4xl md:text-5xl font-normal text-[#4A4A4A] mb-4 leading-[1.1]">
              End-to-End Digital Transformation for Africa
            </h2>

            <p className="text-muted-foreground text-base leading-relaxed max-w-lg mb-6">
              NexaTech Rwanda pioneers Africa's digital transformation by delivering
              innovative tech solutions that empower businesses and governments
              for sustainable development.
            </p>

            <div className="flex flex-wrap items-center gap-3">
              <Button
                className="rounded-xl bg-[#0057B8]/90 hover:bg-[#0057B8] text-white px-6 h-11 gap-2 shadow-lg shadow-blue-900/10 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 text-sm"
              >
                <Hand className="w-4 h-4" />
                Get started
              </Button>

              <Button
                variant="outline"
                className="rounded-xl border-gray-200 bg-transparent text-foreground hover:bg-white/50 px-6 h-11 text-sm transition-all duration-300"
              >
                How we work ?
              </Button>
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
                    ? { y: [0, -5, 0], rotate: [0, 15, -10, 0] } // Pencil: Swing
                    : index === 1
                      ? { y: [0, -5, 0], scale: [1, 1.2, 1], rotate: [0, 90, 0] } // Plus/Star: Zoom + Spin
                      : { y: [0, -5, 0], scale: [1, 1.15, 1] } // Heart: Zoom (Heartbeat)
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
