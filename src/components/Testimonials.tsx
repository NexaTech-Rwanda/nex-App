"use client";

import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { Hand } from "lucide-react";
import { useState } from "react";
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
                initial={{ rotate: rotations[index % rotations.length] }}
                whileHover={{ rotate: 0, y: -8, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 200, damping: 20 }}
                className="relative w-[340px] h-[420px] bg-white border border-gray-100 rounded-[32px] p-8 shadow-lg hover:shadow-2xl transition-all group"
              >
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

                {/* Author Info - fades out on hover */}
                <motion.div
                  className="absolute bottom-8 left-8 right-8"
                  animate={{
                    opacity: hoveredIndex === index ? 0 : 1
                  }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="text-base font-medium text-[#1a1a1a] mb-1">
                    {t.name}
                  </div>
                  <div className="text-sm text-gray-500 font-light">
                    {t.role}
                  </div>
                </motion.div>

                {/* Hover Button - "Work with us" appears at bottom */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{
                    opacity: hoveredIndex === index ? 1 : 0,
                    y: hoveredIndex === index ? 0 : 10
                  }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                  className="absolute bottom-8 left-8 right-8 flex justify-center"
                  style={{
                    pointerEvents: hoveredIndex === index ? 'auto' : 'none'
                  }}
                >
                  <Link to="/contact">
                    <Button
                      className="rounded-xl bg-gray-800/90 hover:bg-gray-900 text-white px-6 h-11 gap-2 shadow-lg text-[14px]"
                      style={{
                        fontFamily: "'Cool Jazz', sans-serif"
                      }}
                    >
                      Work with us
                      <span className="text-lg">→</span>
                    </Button>
                  </Link>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
