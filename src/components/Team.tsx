import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Button } from "./ui/button";
import { Hand } from "lucide-react";
import { Link } from "react-router-dom";

const teamMembers = [
  {
    name: "Kagabo Lucky",
    role: "Chief Executive Officer (CEO)",
    image: "./lucky.png",
  },
  {
    name: "Bizimana Christian",
    role: "Chief Operation Officer (COO)",
    image: "./christ.png",
  },
  {
    name: "Dushimire Aine",
    role: "Chief Technology Officer (CTO)",
    image: "./aine.png",
  },
  {
    name: "Kirezi Livia",
    role: "Chief Marketing Officer (CMO)",
    image: "./livia.png",
  },
  // {
  //   name: "Niyirera Theogene",
  //   role: "Chief Sales Officer (CSO)",
  //   image: "./munyakazi.png",
  // },
];

const Team = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-24 bg-[#ECEBE9]">
      <div className="container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <div className="inline-block px-3 py-1 rounded-full border border-black/5 bg-white text-[11px] font-medium text-gray-600 mb-6 shadow-sm">
            Team
          </div>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-normal text-[#4A4A4A] mb-8 leading-[1.1]">
            Meet The Architects Of<br />Africa's Tech Future
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto font-light">
            Get to know the visionaries dedicated to making Rwanda the continent's premier tech hub.
          </p>
        </motion.div>

        {/* Team Grid Row 1 */}
        <div className="flex flex-wrap justify-center gap-8 mb-8 max-w-7xl mx-auto">
          {teamMembers.slice(0, 3).map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="bg-white rounded-[32px] p-6 w-full sm:w-[calc(50%-2rem)] lg:w-[calc(33.33%-2rem)] max-w-md group hover:shadow-xl hover:-translate-y-2 transition-all duration-500 cursor-pointer"
            >
              <div className="aspect-[4/3] rounded-[24px] overflow-hidden mb-6 bg-gray-100">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <h3 className="font-serif text-2xl font-normal text-[#1a1a1a] mb-2">{member.name}</h3>
              <p className="text-[#666] font-light">{member.role}</p>
            </motion.div>
          ))}
        </div>

        {/* Team Grid Row 2 - Centered */}
        <div className="flex flex-wrap justify-center gap-8 mb-20 max-w-6xl mx-auto">
          {teamMembers.slice(3).map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.15 }}
              className="bg-white rounded-[32px] p-6 w-full sm:w-[calc(50%-2rem)] max-w-md group hover:shadow-xl hover:-translate-y-2 transition-all duration-500 cursor-pointer"
            >
              <div className="aspect-[4/3] rounded-[24px] overflow-hidden mb-6 bg-gray-100">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <h3 className="font-serif text-2xl font-normal text-[#1a1a1a] mb-2">{member.name}</h3>
              <p className="text-[#666] font-light">{member.role}</p>
            </motion.div>
          ))}
        </div>

        {/* Join Us Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center"
        >
          <Link to="/contact">
            <Button className="rounded-xl bg-[#0057B8] hover:bg-[#004694] text-white px-8 h-12 gap-2 shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 text-[15px]">
              <Hand className="w-5 h-5" />
              Start Your Project
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Team;
