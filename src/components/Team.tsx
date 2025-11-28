import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Button } from "./ui/button";
import { MessageSquare } from "lucide-react";

const teamMembers = [
  {
    name: "Kagabo Lucky",
    role: "Chief Executive Officer (CEO)",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face",
  },
  {
    name: "Bizimana Christian",
    role: "Chief Operation Officer (COO)",
    image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=300&h=300&fit=crop&crop=face",
  },
  {
    name: "Dushimire Aine",
    role: "Chief Technology Officer (CTO)",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=300&h=300&fit=crop&crop=face",
  },
  {
    name: "Kirezi Livia",
    role: "Chief Marketing Officer (CMO)",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300&h=300&fit=crop&crop=face",
  },
  {
    name: "Niyirera Theogene",
    role: "Chief Sales Officer (CSO)",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face",
  },
];

const Team = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-20 cream-section">
      <div className="container">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="section-badge mb-4">Team</span>
          <h2 className="font-serif text-4xl md:text-5xl font-medium text-foreground mb-6">
            Meet The Architects Of Africa's Tech Future
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Get to know the visionaries dedicated to making Rwanda the continent's premier tech hub.
          </p>
        </motion.div>

        {/* Team Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {teamMembers.slice(0, 3).map((member, index) => (
            <motion.div 
              key={index} 
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="bg-card rounded-2xl p-6 border border-border group hover:shadow-xl hover:-translate-y-2 transition-all duration-500"
            >
              <div className="aspect-square rounded-xl overflow-hidden mb-4 bg-muted">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <h3 className="font-serif text-xl font-medium text-foreground">{member.name}</h3>
              <p className="text-sm text-muted-foreground">{member.role}</p>
            </motion.div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto mb-12">
          {teamMembers.slice(3).map((member, index) => (
            <motion.div 
              key={index} 
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.45 + index * 0.15 }}
              className="bg-card rounded-2xl p-6 border border-border group hover:shadow-xl hover:-translate-y-2 transition-all duration-500"
            >
              <div className="aspect-square rounded-xl overflow-hidden mb-4 bg-muted">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <h3 className="font-serif text-xl font-medium text-foreground">{member.name}</h3>
              <p className="text-sm text-muted-foreground">{member.role}</p>
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
          <Button className="rounded-full gap-2 transition-all duration-300 hover:scale-105 hover:shadow-lg">
            <MessageSquare className="w-4 h-4" />
            Join Us
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default Team;
