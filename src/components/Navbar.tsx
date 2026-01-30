import { motion } from "framer-motion";
import { CornerDownRight } from "lucide-react";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";

const navLinks = [
  { label: "About", href: "/About" },
  { label: "Work", href: "/work" },
];

const Navbar = () => {
  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-4 inset-x-0 z-50 flex justify-center"
    >
      <div className="flex items-center gap-1 bg-white/90 backdrop-blur-xl rounded-[14px] px-1.5 py-1.5 pr-1.5 border border-black/5 shadow-[0_2px_15px_rgb(0,0,0,0.02)]">

        {/* Logo */}
        <Link
          to="/"
          className="font-serif font-bold text-[17px] text-[#0057B8] px-3 py-1.5 cursor-pointer transition-colors duration-300 tracking-tight"
        >
          NexaTech Rwanda
        </Link>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center gap-0.5 font-serif">
          {/* Home link */}
          <Link
            to="/"
            className="text-[13px] font-medium text-black hover:bg-black/5 px-3 py-1.5 rounded-md transition-all duration-200"
          >
            Home
          </Link>

          {/* About */}
          <Link
            to="/about"
            className="text-[13px] font-medium text-[#0057B8] bg-blue-50 px-3 py-1.5 rounded-md transition-all duration-200"
          >
            About
          </Link>

          <Link
            to="/work"
            className="text-[13px] font-medium text-black hover:bg-black/5 px-3 py-1.5 rounded-md transition-all duration-200"
          >
            Work
          </Link>
        </div>

        {/* Say Hi Button */}
        <Link to="/contact" className="ml-1">
          <Button
            className="rounded-[10px] bg-[#0057B8] hover:bg-[#004694] text-white font-serif font-medium px-4 h-[36px] gap-2 shadow-sm transition-all duration-300 text-[13px]"
          >
            <CornerDownRight className="w-3.5 h-3.5 text-white" strokeWidth={2.5} />
            Say hi
          </Button>
        </Link>
      </div>
    </motion.nav>
  );
};

export default Navbar;
