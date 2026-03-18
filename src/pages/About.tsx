import Layout from "@/components/Layout";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  BRAND_NAME,
  holdingModelHighlights,
  leaders,
  operatingPrinciples,
  products,
} from "@/data/nexatech";

const About = () => {
  return (
    <Layout>
      <SEO
        title={`About Us | ${BRAND_NAME}`}
        description={`${BRAND_NAME} is a Rwanda-first consumer technology holding company that incubates, owns, and scales essential-service products across Africa.`}
      />

      <div className="bg-[#FCFBF8]">
        <section className="relative pt-32 pb-24 overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center opacity-10"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1')",
            }}
          />
          <div className="absolute inset-0 bg-white/80" />

          <div className="container relative z-10 max-w-5xl text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white border border-[#D8E0EA] text-sm text-gray-600 mb-8"
            >
              Built in Kigali. Designed for Africa.
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="font-serif text-4xl md:text-6xl text-[#171717] leading-[1.1] mb-8"
            >
              {BRAND_NAME} is a Rwanda-first consumer technology holding
              company.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="max-w-3xl mx-auto text-lg text-gray-600 leading-relaxed"
            >
              We incubate, own, and scale a portfolio of consumer-first
              technology products that modernize essential services. The company
              retains long-term ownership across commerce, mobility, services,
              and agriculture, starting in Rwanda and expanding only after real
              market proof.
            </motion.p>
          </div>
        </section>

        <section className="pb-24">
          <div className="container max-w-6xl">
            <div className="grid lg:grid-cols-2 gap-8">
              <div className="rounded-[32px] bg-white border border-gray-100 p-8 md:p-10 shadow-sm">
                <span className="inline-block px-3 py-1 rounded-full bg-[#F3F7FD] text-[#0057B8] text-xs font-medium mb-6">
                  Founding thesis
                </span>
                <h2 className="font-serif text-3xl text-[#1A1A1A] mb-6">
                  Why Nexatech exists
                </h2>
                <p className="text-gray-600 leading-relaxed mb-6">
                  Across African markets, essential daily services are still
                  constrained by fragmented informal systems, weak coordination,
                  and limited digital modernization. Nexatech exists to close
                  that gap with consumer-first products that work in real local
                  conditions.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  The informal sector is not a problem to eliminate. It is the
                  market. Our role is to build technology that helps real supply
                  and real demand connect more effectively.
                </p>
              </div>

              <div className="rounded-[32px] bg-[#0057B8] text-white p-8 md:p-10 shadow-sm">
                <span className="inline-block px-3 py-1 rounded-full bg-white/10 text-white text-xs font-medium mb-6 border border-white/10">
                  Operating philosophy
                </span>
                <h2 className="font-serif text-3xl mb-6">
                  How the company is structured
                </h2>
                <div className="space-y-4 text-blue-50">
                  {holdingModelHighlights.map((item) => (
                    <div key={item} className="flex items-start gap-3">
                      <span className="mt-2 w-2 h-2 rounded-full bg-white" />
                      <p className="leading-relaxed">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="pb-24">
          <div className="container max-w-6xl">
            <div className="text-center mb-14">
              <span className="inline-block px-3 py-1 rounded-full border border-[#D8E0EA] bg-white text-xs font-medium text-gray-600 mb-6">
                Core principles
              </span>
              <h2 className="font-serif text-3xl md:text-5xl text-[#171717] mb-6">
                The logic behind every Nexatech product
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {operatingPrinciples.map((principle, index) => (
                <motion.div
                  key={principle.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.12 }}
                  className="rounded-[28px] bg-white border border-gray-100 p-8"
                >
                  <h3 className="font-serif text-2xl text-[#1A1A1A] mb-4">
                    {principle.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-sm">
                    {principle.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="pb-24">
          <div className="container max-w-6xl">
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
              <div>
                <span className="inline-block px-3 py-1 rounded-full border border-[#D8E0EA] bg-white text-xs font-medium text-gray-600 mb-6">
                  Product portfolio
                </span>
                <h2 className="font-serif text-3xl md:text-5xl text-[#171717] mb-4">
                  Four active products in development
                </h2>
                <p className="text-gray-600 max-w-2xl leading-relaxed">
                  Shoppa is the current market-priority product, but the
                  company&apos;s public portfolio includes all four ventures.
                </p>
              </div>

              <Link to="/products">
                <Button className="rounded-xl bg-[#0057B8] hover:bg-[#004694] text-white px-6 h-11">
                  View full products page
                </Button>
              </Link>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {products.map((product, index) => (
                <motion.div
                  key={product.slug}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="rounded-[28px] bg-white border border-gray-100 p-8"
                >
                  <div className="flex flex-wrap items-center justify-between gap-3 mb-5">
                    <span className="text-sm text-[#0057B8] font-medium">
                      {product.status}
                    </span>
                    <span className="px-3 py-1 rounded-full bg-[#F6F6F6] text-xs text-gray-600">
                      {product.category}
                    </span>
                  </div>
                  <h3 className="font-serif text-3xl text-[#1A1A1A] mb-4">
                    {product.name}
                  </h3>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    {product.tagline}
                  </p>
                  <p className="text-sm text-gray-500 leading-relaxed">
                    {product.summary}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="pb-28">
          <div className="container max-w-6xl">
            <div className="text-center mb-14">
              <span className="inline-block px-3 py-1 rounded-full border border-[#D8E0EA] bg-white text-xs font-medium text-gray-600 mb-6">
                Leadership team
              </span>
              <h2 className="font-serif text-3xl md:text-5xl text-[#171717] mb-6">
                The official public team at Nexatech
              </h2>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              {leaders.map((leader, index) => (
                <motion.div
                  key={leader.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="rounded-[32px] bg-white border border-gray-100 p-6 md:p-8"
                >
                  <div className="grid md:grid-cols-[220px_1fr] gap-6 items-start">
                    <div className="aspect-[4/5] rounded-[24px] overflow-hidden bg-gray-100">
                      <img
                        src={leader.image}
                        alt={leader.name}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    <div className="space-y-4">
                      <div>
                        <h3 className="font-serif text-2xl text-[#1A1A1A] mb-2">
                          {leader.name}
                        </h3>
                        <p className="text-[#0057B8] font-medium text-sm">
                          {leader.role}
                        </p>
                      </div>

                      <p className="text-sm text-gray-600 leading-relaxed">
                        {leader.description}
                      </p>

                      <blockquote className="rounded-2xl bg-[#F5F7FB] border border-[#D7E5F7] px-5 py-4 text-sm text-gray-700 italic leading-relaxed">
                        &quot;{leader.quote}&quot;
                      </blockquote>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

      </div>
    </Layout>
  );
};

export default About;
