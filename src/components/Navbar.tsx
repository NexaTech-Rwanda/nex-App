import { motion } from "framer-motion";
import { Phone } from "lucide-react";
import { Button } from "./ui/button";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Work", href: "#work" },
];

const Navbar = () => {
  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-4 inset-x-0 z-50 flex justify-center"
    >
      <div className="flex items-center gap-8 bg-card/80 backdrop-blur-md rounded-full px-6 py-3 border border-border shadow-sm">

        {/* Logo */}
        <span className="font-display font-semibold text-foreground">
          NexaTech Rwanda
        </span>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-300"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* CTA Button */}
        <Button variant="default" size="sm" className="rounded-full gap-2">
          <Phone className="w-4 h-4" />
          Say hi
        </Button>
      </div>
    </motion.nav>
  );
};

export default Navbar;
