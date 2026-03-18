"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { Button } from "./ui/button";
import { ArrowRight, Hand } from "lucide-react";
import { MouseEvent, useState } from "react";
import { Link } from "react-router-dom";

const signals = [
  {
    name: "Shoppa",
    role: "Commerce discovery product",
    image: "/shoppa.png",
    content:
      "Shoppa is the first public proof point in the NexatechRwanda portfolio, focused on turning nearby informal retail inventory into fast local discovery.",
  },
  {
    name: "Tugendane",
    role: "Mobility product",
    image: "/team1.png",
    content:
      "Tugendane extends the portfolio into Rwanda-first ride coordination, showing how the company approaches essential urban mobility as a long-term product category.",
  },
  {
    name: "Hanoserve",
    role: "Services and labor product",
    image: "/team2.png",
    content:
      "Hanoserve is being developed to make skilled labor more visible to employers and employers more visible to workers in fragmented urban labor markets.",
  },
  {
    name: "Verline",
    role: "Agriculture product",
    image: "/team3.png",
    content:
      "Verline brings the same portfolio logic into agriculture, where coordination, value chains, and market visibility remain highly fragmented.",
  },
];

const marqueeItems = [...signals, ...signals, ...signals];
const rotations = [-2, 1, -1, 2];

export default function Testimonials() {
  const [paused, setPaused] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springConfig = { stiffness: 150, damping: 15, mass: 0.1 };
  const cursorX = useSpring(mouseX, springConfig);
  const cursorY = useSpring(mouseY, springConfig);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>, index: number) => {
    if (hoveredIndex === index) {
      const rect = e.currentTarget.getBoundingClientRect();
      mouseX.set(e.clientX - rect.left - 75);
      mouseY.set(e.clientY - rect.top - 20);
    }
  };

  return (
    <section className="py-24 bg-[#Fdfbf7] overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-block px-3 py-1 rounded-full border border-black/5 bg-white text-[11px] font-medium text-gray-600 mb-6 shadow-sm">
            Portfolio signals
          </div>

          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-light text-[#4A4A4A] leading-[1.1] mb-6">
            What the portfolio is
            <span className="font-normal"> being built around</span>
          </h2>

          <p className="text-gray-500 text-base max-w-2xl mx-auto font-light mb-8">
            NexatechRwanda is still in its early stage, so this section focuses
            on the four active product directions rather than fabricated client
            wins or unsupported performance claims.
          </p>

          <Link to="/contact">
            <Button className="rounded-xl bg-[#0057B8] hover:bg-[#004694] text-white px-8 h-12 gap-2 shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 text-[15px]">
              <Hand className="w-5 h-5" />
              Contact the company
            </Button>
          </Link>
        </div>

        <div className="relative overflow-hidden py-8">
          <motion.div
            className="flex items-start w-max gap-8"
            animate={{ x: paused ? 0 : ["0%", "-50%"] }}
            transition={{
              duration: 50,
              ease: "linear",
              repeat: paused ? 0 : Infinity,
            }}
          >
            {marqueeItems.map((t, index) => (
              <motion.div
                key={`${t.name}-${index}`}
                onMouseEnter={() => {
                  setPaused(true);
                  setHoveredIndex(index);
                }}
                onMouseLeave={() => {
                  setPaused(false);
                  setHoveredIndex(null);
                }}
                onMouseMove={(e) => handleMouseMove(e, index)}
                initial={{ rotate: rotations[index % rotations.length] }}
                whileHover={{ rotate: 0, y: -8, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 200, damping: 20 }}
                className="relative w-[340px] h-[360px] bg-white border border-gray-100 rounded-[32px] p-8 shadow-lg hover:shadow-2xl transition-all group cursor-none"
              >
                <motion.div
                  style={{
                    x: cursorX,
                    y: cursorY,
                  }}
                  animate={{
                    opacity: hoveredIndex === index ? 1 : 0,
                    scale: hoveredIndex === index ? 1 : 0.6,
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 260,
                    damping: 20,
                  }}
                  className="absolute top-0 left-0 z-50 pointer-events-none hidden md:flex items-center gap-2 bg-[#4A4A4A] text-white px-4 py-2 rounded-full shadow-2xl backdrop-blur-sm text-xs"
                >
                  <Link
                    to="/work"
                    className="flex items-center gap-1.5 pointer-events-auto"
                  >
                    <span className="font-medium">View portfolio</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </motion.div>

                <div className="w-16 h-16 mb-6 rounded-xl overflow-hidden bg-gray-100">
                  <img
                    src={t.image}
                    alt={t.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                <p
                  className="text-[17px] leading-relaxed mb-8 text-gray-800"
                  style={{
                    fontFamily: "'Indie Flower', cursive",
                    fontWeight: 600,
                  }}
                >
                  {t.content}
                </p>

                <div className="absolute bottom-8 left-8 right-8">
                  <div className="text-base font-medium text-[#1a1a1a] mb-1">
                    {t.name}
                  </div>
                  <div className="text-sm text-gray-500 font-light">
                    {t.role}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
