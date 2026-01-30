"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { Button } from "./ui/button";
import { Hand } from "lucide-react";
import { useState, MouseEvent } from "react";
import { Link } from "react-router-dom";

const testimonials = [
  {
    name: "Mike Karanzi",
    role: "CEO | ShopWise",
    image: "./mike.png",
    content:
      "The use of Shoppa made my Products Selling increase due to use of Shoppa through selling down my products and even dan selling went. Now 800% per month.",
  },
  {
    name: "Alex",
    role: "CEO | Urumbiai Rwanda",
    image: "./alex.png",
    content:
      "The use of Shoppa made my Products Selling increase due to use of Shoppa through selling down my products and even dan selling went. Now 800% per month.",
  },
  {
    name: "Melissa Den",
    role: "Marketing Lead | Prime Life Insurance",
    image: "./melissa.png",
    content:
      "The use of Shoppa made my Products Selling increase due to use of Shoppa through selling down my products and even dan selling went. Now 800% per month.",
  },
  {
    name: "Alex Divan",
    role: "Sales Officer | Neeb",
    image: "./divan.png",
    content:
      "The use of Shoppa made my Products Selling increase due to use of Shoppa through selling down my products and even dan selling went. Now 800% per month.",
  },
];

const marqueeItems = [...testimonials, ...testimonials, ...testimonials];
const rotations = [-2, 1, -1, 2];

export default function Testimonials() {
  const [paused, setPaused] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  // Mouse tracking for cursor follower
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
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block px-3 py-1 rounded-full border border-black/5 bg-white text-[11px] font-medium text-gray-600 mb-6 shadow-sm">
            They trust us
          </div>

          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-light text-[#4A4A4A] leading-[1.1] mb-6">
            Real feedback, <span className="font-normal">real results.</span>
          </h2>

          <p className="text-gray-500 text-base max-w-2xl mx-auto font-light mb-8">
            Explore how businesses and individuals have achieved their goals with our tailored solutions and exceptional support.
          </p>

          <Link to="/contact">
            <Button className="rounded-xl bg-[#0057B8] hover:bg-[#004694] text-white px-8 h-12 gap-2 shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 text-[15px]">
              <Hand className="w-5 h-5" />
              Book a call
            </Button>
          </Link>
        </div>

        {/* Carousel with Slanted Cards */}
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
                key={index}
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
                className="relative w-[340px] h-[420px] bg-white border border-gray-100 rounded-[32px] p-8 shadow-lg hover:shadow-2xl transition-all group cursor-none"
              >
                {/* Mouse-following Button */}
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
                    damping: 20
                  }}
                  className="absolute top-0 left-0 z-50 pointer-events-none hidden md:flex items-center gap-2 bg-[#4A4A4A] text-white px-4 py-2 rounded-full shadow-2xl backdrop-blur-sm text-xs"
                >
                  <Link to="/contact" className="flex items-center gap-1.5 pointer-events-auto">
                    <span className="font-medium">Work with us</span>
                    <span>→</span>
                  </Link>
                </motion.div>

                {/* Square Avatar */}
                <div className="w-16 h-16 mb-6 rounded-xl overflow-hidden bg-gray-100">
                  <img
                    src={t.image}
                    alt={t.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Testimonial Text with Cool Jazz font */}
                <p
                  className="text-[16px] leading-relaxed mb-8 text-gray-800"
                  style={{
                    fontFamily: "'Cool Jazz', sans-serif"
                  }}
                >
                  {t.content}
                </p>

                {/* Author Info */}
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
