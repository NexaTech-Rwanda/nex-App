import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Button } from "./ui/button";
import { Hand, Instagram, Linkedin, MessageSquare } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const currentYear = new Date().getFullYear();
  const navItems = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Products", href: "/products" },
    { label: "Team", href: "/team" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <footer
      ref={ref}
      className="bg-[rgba(10,75,148,0.98)] text-white py-16 border-t border-white/10"
    >
      <div className="container">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2"
          >
            <h3 className="font-serif text-2xl font-medium mb-3 text-white">
              NexatechRwanda
            </h3>
            <p className="text-white/80 text-sm mb-8 max-w-sm">
              A Rwanda-first consumer technology holding company building and
              owning products across essential services.
            </p>
            <Link to="/contact">
              <Button className="rounded-lg border border-white/10 bg-white/10 hover:bg-white/20 text-white gap-2 transition-all duration-300 backdrop-blur-sm px-6">
                <Hand className="w-4 h-4" />
                Contact the company
              </Button>
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4 className="font-medium mb-6 text-sm text-white">Navigation</h4>
            <ul className="space-y-4 text-sm text-white/70">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link
                    to={item.href}
                    className="hover:text-white transition-colors duration-300"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="font-medium mb-6 text-sm text-white">Contact</h4>
            <ul className="space-y-4 text-sm text-white/70">
              <li>+250723374650</li>
              <li>info@nexatech.co.rw</li>
              <li>Kigali, Rwanda</li>
            </ul>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-white/10 text-xs text-white/60"
        >
          <p>© {currentYear} All rights reserved</p>
          <p className="hidden md:block">NexatechRwanda</p>
          <div className="flex items-center gap-6">
            {[
              { Icon: Instagram, href: "https://www.instagram.com/nexa_tech.co/" },
              { Icon: Linkedin, href: "https://www.linkedin.com/company/nexatechrwanda" },
              { Icon: MessageSquare, href: "https://wa.me/250723374650" },
            ].map(({ Icon, href }, index) => (
              <motion.a
                key={index}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, y: -2 }}
                className="text-white/80 hover:text-white transition-colors duration-300"
              >
                <Icon className="w-4 h-4" />
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
