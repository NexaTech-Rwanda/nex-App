import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";

const faqs = [
  {
    question: "How Do You Understand Africa Needs ?",
    answer:
      "We conduct extensive research and work closely with local communities and businesses across Africa to understand the unique challenges and opportunities in the region's tech landscape.",
  },
  {
    question: "How Do You Get Design Ecosystem ?",
    answer:
      "Our design ecosystem is built on collaborative frameworks, leveraging local talent and international best practices to create solutions that are both innovative and culturally relevant.",
  },
  {
    question: "How Do You Build And Scale Together ?",
    answer:
      "We partner with businesses, governments, and organizations to build scalable solutions, providing ongoing support and resources to ensure sustainable growth and impact.",
  },
];

const logos = [
  { icon: "◐", name: "Logoipsum" },
  { icon: "⬡", name: "Logoipsum" },
  { icon: "◉", name: "Logoipsum" },
  { icon: "✦", name: "Logoipsum" },
  { icon: "◐", name: "Logoipsum" },
  { icon: "⬡", name: "Logoipsum" },
];

const FAQ = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section ref={ref} className="relative py-24 bg-gradient-to-b from-white via-blue-50/30 to-white overflow-hidden">

      {/* Blue Atmospheric Shadow/Glow */}
      <div
        className="absolute top-[40%] left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-blue-500/10 blur-[120px] rounded-full pointer-events-none"
      />

      <div
        className="absolute bottom-0 left-0 right-0 h-[200px] bg-gradient-to-t from-blue-100/20 to-transparent pointer-events-none"
      />

      <div className="container max-w-3xl relative z-10">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-block px-3 py-1 rounded-full border border-black/5 bg-white text-[11px] font-medium text-gray-600 mb-6 shadow-sm">
            Questions
          </div>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-light text-[#4A4A4A] mb-6 leading-[1.1]">
            Got questions? <span className="font-normal">We've got answers</span>
          </h2>
          <p className="text-gray-500 text-base max-w-2xl mx-auto font-light">
            Explore our frequently asked questions to find the information you need about our services and process.
          </p>
        </motion.div>

        {/* Accordion with Blue Hover */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="space-y-3 mb-20"
        >
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <Accordion type="single" collapsible>
                <AccordionItem
                  value={`item-${index}`}
                  className={`
                    border-none rounded-2xl px-6 transition-all duration-300
                    ${hoveredIndex === index
                      ? 'bg-[#0057B8] text-white shadow-lg shadow-blue-500/20'
                      : 'bg-white/80 backdrop-blur-sm shadow-sm'
                    }
                  `}
                >
                  <AccordionTrigger
                    className={`
                      text-left font-normal text-base hover:no-underline py-5
                      ${hoveredIndex === index ? 'text-white' : 'text-[#1a1a1a]'}
                    `}
                  >
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className={`pb-5 ${hoveredIndex === index ? 'text-blue-50' : 'text-gray-600'}`}>
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </motion.div>
          ))}
        </motion.div>

        {/* Animated Logo Carousel */}
        {/* <div className="relative overflow-hidden py-12">
          <motion.div
            animate={{
              x: [0, -1000],
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 20,
                ease: "linear",
              },
            }}
            className="flex items-center gap-16"
          >
            {[...logos, ...logos].map((logo, index) => (
              <div
                key={index}
                className="flex items-center gap-3 text-gray-500 whitespace-nowrap flex-shrink-0"
              >
                <span className="text-3xl opacity-80">{logo.icon}</span>
                <span className="font-medium text-lg opacity-80">{logo.name}</span>
              </div>
            ))}
          </motion.div>
        </div> */}

      </div>
    </section>
  );
};

export default FAQ;
