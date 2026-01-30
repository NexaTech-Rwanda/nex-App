import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";

const projects = [
  {
    title: "Shoppa",
    category: "Shoppa",
    image: "/shoppa.png"
  }
];

const Work = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const navigate = useNavigate();

  return (
    <section id="work" ref={ref} className="py-24 bg-white overflow-hidden">
      <div className="container">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <div className="inline-block px-3 py-1 rounded-full border border-black/5 bg-white text-[11px] font-medium text-gray-600 mb-6 shadow-sm">
            Our Work
          </div>
          <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl font-normal text-[#1A1A1A] leading-[1.15]">
            Our work speaks for itself—dive into the<br className="hidden md:block" />
            projects that define us
          </h2>
        </motion.div>

        {/* Project Grid */}
        <div className="max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="group cursor-pointer"
              onDoubleClick={() => navigate('/work/shoppa')}
            >
              {/* Image Container */}
              <div className="bg-[#F5F5F3] rounded-[32px] overflow-hidden p-8 md:p-12 lg:p-16 mb-6 transition-transform duration-500 group-hover:scale-[1.01]">
                <div className="rounded-xl overflow-hidden shadow-2xl bg-white border border-gray-100">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>

              {/* Info Below Image */}
              <div className="flex justify-between items-center px-4">
                <h3 className="font-serif text-2xl md:text-3xl text-gray-900">{project.title}</h3>
                <span className="text-base text-gray-400 font-serif">{project.category}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Work;

