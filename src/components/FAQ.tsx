import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";
import { Button } from "./ui/button";

const faqs = [
  {
    question: "How Do You Understand Africa Needs?",
    answer:
      "We conduct extensive research and work closely with local communities and businesses across Africa to understand the unique challenges and opportunities in the region's tech landscape.",
  },
  {
    question: "How Do You Get Design Ecosystem?",
    answer:
      "Our design ecosystem is built on collaborative frameworks, leveraging local talent and international best practices to create solutions that are both innovative and culturally relevant.",
  },
  {
    question: "How Do You Build And Scale Together?",
    answer:
      "We partner with businesses, governments, and organizations to build scalable solutions, providing ongoing support and resources to ensure sustainable growth and impact.",
  },
];

const FAQ = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="relative py-28 faq-bg overflow-hidden">

      {/* ⭐ BLUR GLOW BEHIND QUESTIONS */}
      <div
        className="
          absolute top-[35%] left-1/2 -translate-x-1/2 
          w-[700px] h-[220px]
          bg-primary/20 blur-[90px]
          rounded-full pointer-events-none
        "
      />

      <div className="container max-w-3xl relative">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="section-badge mb-4">Questions</span>
          <h2 className="font-serif text-4xl md:text-5xl font-medium text-foreground">
            Got questions? <span className="font-bold">We've got answers</span>
          </h2>
          <p className="text-muted-foreground mt-4">
            Explore our frequently asked questions to find the information you
            need about our services and process.
          </p>
        </motion.div>

        {/* Accordion */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative z-10"
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
              >
                <AccordionItem
                  value={`item-${index}`}
                  className="border border-border rounded-xl px-6 bg-card/70 backdrop-blur-sm hover:shadow-md transition-shadow duration-300"
                >
                  <AccordionTrigger className="text-left font-serif text-lg hover:no-underline py-6">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-6">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </motion.div>

        {/* Partner Logos */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 0.5 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex items-center justify-center gap-12 mt-16"
        >
          {[
            { icon: "◐", name: "Logoipsum" },
            { icon: "✳", name: "Logoipsum" },
            { icon: "◉", name: "Logoipsum" },
          ].map((logo, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.1, opacity: 1 }}
              className="flex items-center gap-2 text-muted-foreground cursor-pointer transition-all"
            >
              <span className="text-2xl">{logo.icon}</span>
              <span className="font-medium">{logo.name}</span>
            </motion.div>
          ))}
        </motion.div>

        {/* ⭐ DOTTED DIVIDER */}
        <div
          className="
            w-full h-px mt-20
            bg-[radial-gradient(circle,_rgba(0,0,0,0.2)_1px,_transparent_1px)]
            bg-[size:12px_12px]
          "
        />
      </div>

      {/* ⭐ CTA SECTION BELOW FAQ */}
      <div className="container max-w-2xl text-center mt-24">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 0.7, y: 0 } : {}}
          className="text-sm text-muted-foreground"
        >
          They trust us
        </motion.span>

        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2 }}
          className="font-serif text-4xl md:text-5xl mt-3"
        >
          Real feedback, <span className="font-bold">real results.</span>
        </motion.h3>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3 }}
          className="text-muted-foreground mt-4 max-w-xl mx-auto"
        >
          Explore how businesses and individuals have achieved their goals with
          our tailored solutions and exceptional support.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.4 }}
          className="mt-8"
        >
          <Button size="lg" className="rounded-full px-10">
            Book a call
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;
