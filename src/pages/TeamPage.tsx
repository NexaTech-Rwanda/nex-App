import Layout from "@/components/Layout";
import SEO from "@/components/SEO";
import { motion } from "framer-motion";
import { leaders, productTeam, BRAND_NAME } from "@/data/nexatech";

const TeamPage = () => {
  return (
    <Layout>
      <SEO
        title={`Team | ${BRAND_NAME}`}
        description={`Meet the leadership and product team behind ${BRAND_NAME}.`}
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
              Leadership and product team
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="font-serif text-4xl md:text-6xl text-[#171717] leading-[1.1] mb-8"
            >
              The people behind {BRAND_NAME}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="max-w-3xl mx-auto text-lg text-gray-600 leading-relaxed"
            >
              This page focuses only on the team: the public leadership group
              and the broader people contributing to the product portfolio.
            </motion.p>
          </div>
        </section>

        <section className="pb-24">
          <div className="container max-w-6xl">
            <div className="text-center mb-14">
              <span className="inline-block px-3 py-1 rounded-full border border-[#D8E0EA] bg-white text-xs font-medium text-gray-600 mb-6">
                Leadership
              </span>
              <h2 className="font-serif text-3xl md:text-5xl text-[#171717] mb-6">
                The 4 C-suite leaders
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

        <section className="pb-28">
          <div className="container max-w-7xl">
            <div className="text-center mb-14">
              <span className="inline-block px-3 py-1 rounded-full border border-[#D8E0EA] bg-white text-xs font-medium text-gray-600 mb-6">
                Product team
              </span>
              <h2 className="font-serif text-3xl md:text-5xl text-[#171717] mb-6">
                The broader team behind the products
              </h2>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {productTeam.map((member, index) => (
                <motion.div
                  key={member.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  className="rounded-[28px] bg-white border border-gray-100 p-5 shadow-sm hover:-translate-y-1 hover:shadow-lg transition-all duration-300"
                >
                  <div className="aspect-[4/4.8] rounded-[22px] overflow-hidden bg-[#F4F5F7] mb-5 flex items-center justify-center">
                    {member.image ? (
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="flex flex-col items-center justify-center text-center px-4">
                        <div className="w-16 h-16 rounded-full bg-[#E4ECF8] text-[#0057B8] flex items-center justify-center font-serif text-xl mb-4">
                          {member.name.slice(0, 1)}
                        </div>
                        <p className="text-xs uppercase tracking-[0.18em] text-gray-400">
                          Image pending
                        </p>
                      </div>
                    )}
                  </div>

                  <h3 className="font-serif text-xl text-[#1A1A1A] mb-2">
                    {member.name}
                  </h3>
                  <p className="text-sm text-[#0057B8] font-medium">
                    {member.role}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default TeamPage;
