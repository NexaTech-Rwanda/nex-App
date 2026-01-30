import { motion, useInView, useMotionValue, useSpring } from "framer-motion";
import { useRef, useState, MouseEvent } from "react";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { useNavigate } from "react-router-dom";
import { Eye } from "lucide-react";

const Work = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const navigate = useNavigate();

  // Mouse follower state
  const [isHovering, setIsHovering] = useState(false);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { stiffness: 150, damping: 15, mass: 0.1 }; // Smoother, floaty feel
  const cursorX = useSpring(mouseX, springConfig);
  const cursorY = useSpring(mouseY, springConfig);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left - 75); // Center the button (assuming ~150px width)
    mouseY.set(e.clientY - rect.top - 25);  // Center the button (assuming ~50px height)
  };

  return (
    <section id="work" ref={ref} className="py-24 bg-background overflow-hidden">
      <div className="container">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <div className="inline-block px-3 py-1 rounded-full border border-black/5 bg-white text-[11px] font-medium text-gray-600 mb-6 shadow-sm">
            Work
          </div>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-normal text-[#4A4A4A] leading-[1.1]">
            Building Africa's Tech Ecosystem<br />Through Innovation
          </h2>
        </motion.div>

        {/* Project Card - Shoppa */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative bg-[#F9F8F6] rounded-[40px] p-8 md:p-12 max-w-6xl mx-auto overflow-hidden group cursor-none"
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
          onMouseMove={handleMouseMove}
          onDoubleClick={() => navigate('/work')}
        >
          {/* Custom Cursor Button */}
          <motion.div
            style={{
              x: cursorX,
              y: cursorY,
            }}
            animate={{
              opacity: isHovering ? 1 : 0,
              scale: isHovering ? 1 : 0.6,
            }}
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
            className="absolute top-0 left-0 z-50 pointer-events-none hidden md:flex items-center gap-2 bg-[#4A4A4A] text-white px-6 py-3 rounded-full shadow-xl"
          >
            <span className="text-sm font-medium">Explore project</span>
            <Eye className="w-4 h-4" />
          </motion.div>

          <div className="flex gap-3 mb-8">
            <Badge className="bg-[#0057B8] hover:bg-[#0057B8]/90 text-white rounded-full px-4 py-1.5 text-xs font-normal border-none">E-commerce</Badge>
            <Badge className="bg-[#21C55D] hover:bg-[#21C55D] text-white rounded-full px-4 py-1.5 text-xs font-normal border-none">2025</Badge>
          </div>

          <h3 className="font-serif text-4xl md:text-5xl font-normal text-[#1a1a1a] mb-12">Shoppa</h3>

          {/* Shoppa Image */}
          <div className="rounded-[32px] overflow-hidden shadow-sm border border-gray-100">
            <img
              src="/shoppa.png"
              alt="Shoppa Project Preview"
              className="w-full h-auto object-cover hover:scale-105 transition-transform duration-700"
            />
          </div>

        </motion.div>
      </div>
    </section>
  );
};

export default Work;
