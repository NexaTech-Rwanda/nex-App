import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Button } from "./ui/button";
import { Hand } from "lucide-react";
import { Link } from "react-router-dom";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" ref={ref} className="relative py-24 bg-[#Fdfbf7] overflow-hidden">

      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-5"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1')",
        }}
      />

      <div className="container relative z-10">
        {/* Who Are We Section */}
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
            Who Are We? The Brain Of<br />Africa's Tech Ecosystem
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto mb-10 leading-relaxed font-light">
            At NexaTech Rwanda, we are more than just a tech company—we are the architects of Africa's digital future.
          </p>

          <Link to="/contact">
            <Button className="rounded-xl bg-[#0057B8] hover:bg-[#004694] text-white px-8 h-12 gap-2 shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 text-[15px]">
              <Hand className="w-5 h-5" />
              Book a call
            </Button>
          </Link>
        </motion.div>

        {/* Blue CTA Box */}
        <motion.div
          initial={{ opacity: 0, y: 60, scale: 0.95 }}
          animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative bg-[#0057B8] rounded-[40px] p-10 md:p-16 text-white mb-20 shadow-2xl overflow-hidden group"
        >
          {/* Background Texture/Overlay */}
          <div className="absolute inset-0 opacity-20 mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-400/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>

          <div className="relative z-10 max-w-3xl">
            <h3 className="font-serif text-4xl md:text-5xl font-normal mb-6">Africa Tech Brain</h3>
            <p className="text-blue-100/90 text-lg mb-10 max-w-xl leading-relaxed">
              Leveraging cutting-edge technology to enhance efficiency, precision, and sustainability in every project.
            </p>

            <ul className="space-y-4 mb-10">
              {[
                "AI-Powered Business Solutions",
                "Custom Tech Solutions",
                "African AI Innovation",
                "Pan-African Cloud Infrastructure"
              ].map((item, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                  className="flex items-center gap-3 text-base md:text-lg font-light"
                >
                  <span className="text-blue-300 text-xl">✶</span> {item}
                </motion.li>
              ))}
            </ul>

            <Link to="/contact">
              <Button className="rounded-xl border border-white/20 bg-white/10 hover:bg-white/20 text-white px-8 h-12 gap-2 backdrop-blur-sm transition-all duration-300 text-[15px]">
                <Hand className="w-5 h-5" />
                Join Us
              </Button>
            </Link>
          </div>
        </motion.div>

        {/* Stats */}
        <div className="grid md:grid-cols-3 gap-12 text-center border-t border-gray-100 pt-16">
          {[
            { value: "4", label: "Total Product", desc: "We have officially in process of launching our main projects" },
            { value: "97%", label: "Success Rate", desc: "Consistently delivering exceptional results that exceed users expectations." },
            { value: "1 Year", label: "In business", desc: "Half a decade of shaping digital experiences and driving business growth." },
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.5 + index * 0.15 }}
              className="px-4"
            >
              <div className="font-serif text-5xl md:text-6xl font-normal text-[#4A4A4A] mb-3">{stat.value}</div>
              <div className="text-lg font-medium text-gray-800 mb-3">{stat.label}</div>
              <p className="text-sm text-gray-500 leading-relaxed max-w-xs mx-auto">{stat.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
