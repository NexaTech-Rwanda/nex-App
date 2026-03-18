import { motion, useInView, useSpring, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { Hand } from "lucide-react";
import { Button } from "./ui/button";
import { companySignals, holdingModelHighlights } from "@/data/nexatech";

const Counter = ({ value, isInView }: { value: string; isInView: boolean }) => {
  const numericPart = parseInt(value, 10) || 0;
  const suffix = value.replace(/[0-9]/g, "").trim();
  const [display, setDisplay] = useState(0);

  const springValue = useSpring(0, {
    bounce: 0,
    duration: 2000,
  });

  const displayValue = useTransform(springValue, (latest) => Math.round(latest));

  useEffect(() => {
    return displayValue.on("change", (latest) => {
      setDisplay(latest);
    });
  }, [displayValue]);

  useEffect(() => {
    if (isInView) {
      springValue.set(numericPart);
    }
  }, [isInView, numericPart, springValue]);

  return (
    <span>
      {numericPart > 0 ? display : value}
      {numericPart > 0 && suffix && (
        <span className={suffix === "%" ? "" : "ml-1"}>{suffix}</span>
      )}
    </span>
  );
};

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="about"
      ref={ref}
      className="relative py-24 bg-[#Fdfbf7] overflow-hidden"
    >
      <div
        className="absolute inset-0 bg-cover bg-center opacity-5"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1')",
        }}
      />

      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <div className="inline-block px-3 py-1 rounded-full border border-black/5 bg-white text-[11px] font-medium text-gray-600 mb-6 shadow-sm">
            who we are
          </div>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-normal text-[#4A4A4A] mb-8 leading-[1.1]">
            Product Ownership For
            <br />
            Africa&apos;s Essential Services
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto mb-10 leading-relaxed font-light">
            NexatechRwanda is a Rwanda-first consumer technology holding company
            based in Kigali. We design, incubate, own, and scale digital
            products that solve real everyday problems across commerce,
            mobility, services, and agriculture.
          </p>

          <Link to="/about">
            <Button className="rounded-xl bg-[#0057B8] hover:bg-[#004694] text-white px-8 h-12 gap-2 shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 text-[15px]">
              <Hand className="w-5 h-5" />
              Learn how we build
            </Button>
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 60, scale: 0.95 }}
          animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative bg-[#0057B8] rounded-[40px] p-10 md:p-16 text-white mb-20 shadow-2xl overflow-hidden group"
        >
          <div className="absolute inset-0 opacity-20 mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-400/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />

          <div className="relative z-10 max-w-3xl">
            <h3 className="font-serif text-4xl md:text-5xl font-normal mb-6">
              The Holding Company Model
            </h3>
            <p className="text-blue-100/90 text-lg mb-10 max-w-xl leading-relaxed">
              Nexatech builds internally, validates in market, and scales only
              when a product proves it can earn trust in real local conditions.
              Every venture is treated as a long-term asset, not a short-term
              experiment.
            </p>

            <ul className="space-y-4 mb-10">
              {holdingModelHighlights.map((item, index) => (
                <motion.li
                  key={item}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                  className="flex items-center gap-3 text-base md:text-lg font-light"
                >
                  <span className="text-blue-300 text-xl">*</span>
                  <span>{item}</span>
                </motion.li>
              ))}
            </ul>

            <Link to="/products">
              <Button className="rounded-xl border border-white/20 bg-white/10 hover:bg-white/20 text-white px-8 h-12 gap-2 backdrop-blur-sm transition-all duration-300 text-[15px]">
                <Hand className="w-5 h-5" />
                Explore the products
              </Button>
            </Link>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-12 text-center border-t border-gray-100 pt-16">
          {companySignals.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.5 + index * 0.15 }}
              className="px-4"
            >
              <div className="font-serif text-5xl md:text-6xl font-normal text-[#4A4A4A] mb-3">
                <Counter value={stat.value} isInView={isInView} />
              </div>
              <div className="text-lg font-medium text-gray-800 mb-3">
                {stat.label}
              </div>
              <p className="text-sm text-gray-500 leading-relaxed max-w-xs mx-auto">
                {stat.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
