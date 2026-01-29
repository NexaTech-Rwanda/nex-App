import { motion } from "framer-motion";
import { Phone } from "lucide-react";
import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom"; // ✅ added

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
      <div className="flex items-center gap-8 bg-card/80 backdrop-blur-md rounded-[25px] px-6 py-3 border border-border shadow-sm">

        {/* Logo → Home */}
        <Link
          to="/"
          className="font-serif font-semibold text-foreground cursor-pointer transition-colors duration-300"
        >
          NexaTech Rwanda
        </Link>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center gap-6">
          {/* Home link */}
          <Link
            to="/"
            className="text-sm font-medium text-muted-foreground hover:text-foreground cursor-pointer transition-colors duration-300"
          >
            Home
          </Link>

          {navLinks.map((link) => (
            <Link
              key={link.label}
              to={link.href}
              className="text-sm font-medium text-muted-foreground hover:text-foreground cursor-pointer transition-colors duration-300"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Say Hi → Contact page */}
        {/* <Link to="/contact">
          <Button variant="default" size="sm" className="rounded-full gap-2 cursor-pointer">
            <Phone className="w-4 h-4" />
            Say hi
          </Button>
        </Link> */}
        <Link to="/contact">
  <Button
    variant="default"
    size="sm"
    className="rounded-full gap-2 cursor-pointer"
  >
      <ArrowRight className="w-4 h-4 text-blue-500" />
    Say hi
  </Button>
</Link>

      </div>
    </motion.nav>
  );
};

export default Navbar;
