import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Button } from "./ui/button";
import { Hand } from "lucide-react";
import { Link } from "react-router-dom";
import { leaders } from "@/data/nexatech";

const Team = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-24 bg-[#ECEBE9]">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <div className="inline-block px-3 py-1 rounded-full border border-black/5 bg-white text-[11px] font-medium text-gray-600 mb-6 shadow-sm">
            Leadership
          </div>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-normal text-[#4A4A4A] mb-8 leading-[1.1]">
            Meet The Team Building
            <br />
            NexatechRwanda
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto font-light">
            The public leadership team reflects the four executives currently
            steering Nexatech&apos;s portfolio, operations, technology, and
            market position.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="relative max-w-6xl mx-auto mb-20 group/team"
        >
          <div className="grid lg:grid-cols-2 gap-8">
            {leaders.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.12 }}
                className="bg-white rounded-[32px] p-6 md:p-8 group hover:shadow-xl hover:-translate-y-2 transition-all duration-500"
              >
                <div className="grid md:grid-cols-[220px_1fr] gap-6 items-start">
                  <div className="aspect-[4/5] rounded-[24px] overflow-hidden bg-gray-100">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>

                  <div className="space-y-4">
                    <div>
                      <h3 className="font-serif text-2xl font-normal text-[#1a1a1a] mb-2">
                        {member.name}
                      </h3>
                      <p className="text-[#0057B8] font-medium text-sm">
                        {member.role}
                      </p>
                    </div>

                    <p className="text-[#555] leading-relaxed text-sm">
                      {member.description}
                    </p>

                    <blockquote className="rounded-2xl bg-[#F5F7FB] border border-[#D7E5F7] px-5 py-4 text-sm text-gray-700 italic leading-relaxed">
                      &quot;{member.quote}&quot;
                    </blockquote>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="pointer-events-none absolute inset-0 hidden md:flex items-center justify-center rounded-[36px] bg-[#0D2442]/0 transition-all duration-300 group-hover/team:bg-[#0D2442]/24">
            <div className="translate-y-4 opacity-0 transition-all duration-300 group-hover/team:translate-y-0 group-hover/team:opacity-100">
              <Link to="/team" className="pointer-events-auto">
                <Button className="rounded-full bg-white text-[#0D2442] hover:bg-white/90 px-8 h-12 gap-2 shadow-2xl text-[15px]">
                  <Hand className="w-5 h-5" />
                  View the full team
                </Button>
              </Link>
            </div>
          </div>
        </motion.div>

        <div className="text-center md:hidden">
          <Link to="/team">
            <Button className="rounded-xl bg-[#0057B8] hover:bg-[#004694] text-white px-8 h-12 gap-2 shadow-lg hover:shadow-xl transition-all duration-300 text-[15px]">
              <Hand className="w-5 h-5" />
              View the full team
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Team;
