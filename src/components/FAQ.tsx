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
    question: "What is NexatechRwanda building?",
    answer:
      "NexatechRwanda is building and owning a portfolio of consumer-first products across commerce, mobility, services, and agriculture. The current four products are Shoppa, Tugendane, Hanoserve, and Verline.",
  },
  {
    question: "Is NexatechRwanda an agency or software company for clients?",
    answer:
      "No. NexatechRwanda is not a client-services firm. It operates as a Rwanda-first consumer technology holding company that incubates, owns, and scales its own ventures over the long term.",
  },
  {
    question: "Why is Shoppa the most visible product today?",
    answer:
      "Shoppa is the first product being pushed toward market validation in Kigali. It serves as the leading proof point while the broader portfolio continues active development.",
  },
  {
    question: "Who should contact NexatechRwanda?",
    answer:
      "The company is best approached by investors, strategic partners, ecosystem collaborators, and operators connected to its products or target sectors. Product-specific users can also reach out through the main contact channels.",
  },
];

const FAQ = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section
      ref={ref}
      className="relative py-24 bg-gradient-to-b from-white via-blue-50/30 to-white overflow-hidden"
    >
      <div className="absolute top-[40%] left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-blue-500/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 right-0 h-[200px] bg-gradient-to-t from-blue-100/20 to-transparent pointer-events-none" />

      <div className="container max-w-3xl relative z-10">
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
            Questions about the company
            <span className="font-normal"> and portfolio</span>
          </h2>
          <p className="text-gray-500 text-base max-w-2xl mx-auto font-light">
            These answers explain what NexatechRwanda is building, how the
            portfolio works, and who the company is designed to engage with.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="space-y-3 mb-20"
        >
          {faqs.map((faq, index) => (
            <motion.div
              key={faq.question}
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <Accordion type="single" collapsible>
                <AccordionItem
                  value={`item-${index}`}
                  className={`border-none rounded-2xl px-6 transition-all duration-300 ${
                    hoveredIndex === index
                      ? "bg-[#0057B8] text-white shadow-lg shadow-blue-500/20"
                      : "bg-white/80 backdrop-blur-sm shadow-sm"
                  }`}
                >
                  <AccordionTrigger
                    className={`text-left font-normal text-base hover:no-underline py-5 ${
                      hoveredIndex === index ? "text-white" : "text-[#1a1a1a]"
                    }`}
                  >
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent
                    className={`pb-5 ${
                      hoveredIndex === index ? "text-blue-50" : "text-gray-600"
                    }`}
                  >
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;
