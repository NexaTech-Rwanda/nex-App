"use client";

import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { MessageSquare } from "lucide-react";
import { useState } from "react";

const testimonials = [
  {
    name: "Mike Karanzi",
    role: "CEO | ShopWise",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=120&h=120&fit=crop&crop=face",
    content:
      "The use of Shoppa made my products selling increase due to improved visibility.",
  },
  {
    name: "Alex",
    role: "CEO | Urumbiai Rwanda",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=120&h=120&fit=crop&crop=face",
    content:
      "Using Shoppa allowed us to sell more products consistently every month.",
  },
  {
    name: "Melissa Den",
    role: "Marketing Lead | Prime Life Insurance",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=120&h=120&fit=crop&crop=face",
    content:
      "Shoppa helped us scale faster and reach the right audience effectively.",
  },
  {
    name: "Alex Divan",
    role: "Sales Officer | Neeb",
    image:
      "https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=120&h=120&fit=crop&crop=face",
    content:
      "Our monthly revenue increased significantly after adopting Shoppa.",
  },
];

const marqueeItems = [...testimonials, ...testimonials];
const rotations = [-3, -1, 2, -2];

export default function Testimonials() {
  const [paused, setPaused] = useState(false);

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-20">
          <span className="section-badge mb-4">They trust us</span>

          <h2 className="font-serif text-[40px] md:text-[48px] font-medium leading-tight mb-6">
            Real feedback, <span className="font-semibold">real results.</span>
          </h2>

          <p className="text-[15px] leading-6 text-muted-foreground max-w-xl mx-auto mb-8">
            Explore how businesses and individuals achieved their goals with Shoppa.
          </p>

          <Button className="rounded-full gap-2">
            <MessageSquare className="w-4 h-4" />
            Book a call
          </Button>
        </div>

        {/* MARQUEE — SINGLE ROW, ~5px OVERLAP */}
        <div className="relative overflow-hidden">
          <motion.div
            className="flex items-start w-max gap-10"
            animate={{ x: paused ? 0 : ["0%", "-50%"] }}
            transition={{
              duration: 40,
              ease: "linear",
              repeat: paused ? 0 : Infinity,
            }}
          >
            {marqueeItems.map((t, index) => (
              <motion.div
                key={index}
                onMouseEnter={() => setPaused(true)}
                onMouseLeave={() => setPaused(false)}
                initial={{ rotate: rotations[index % rotations.length] }}
                whileHover={{ rotate: 0, y: -6 }}
                transition={{ type: "spring", stiffness: 200, damping: 18 }}
                style={{
                  zIndex: index,
                  marginLeft: index === 0 ? "0px" : "-5px",
                }}
                className="
                  w-[320px]
                  min-h-[260px]
                  bg-card
                  border
                  rounded-2xl
                  p-6
                  shadow-md
                  hover:shadow-xl
                  transition-all
                "
              >
                <Avatar className="w-10 h-10 mb-4">
                  <AvatarImage src={t.image} />
                  <AvatarFallback>{t.name[0]}</AvatarFallback>
                </Avatar>

                <p className="font-serif text-[14px] leading-6 italic text-muted-foreground mb-6">
                  “{t.content}”
                </p>

                <div>
                  <div className="text-[14px] font-medium text-foreground">
                    {t.name}
                  </div>
                  <div className="text-[12px] text-muted-foreground">
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
