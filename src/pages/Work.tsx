import Layout from "@/components/Layout";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import SEO from "@/components/SEO";

const projects = [
  {
    title: "Shoppa",
    category: "Shoppa",
    image: "/shoppa.png",
    slug: "shoppa"
  },
  // Add more projects here
];

const Work = () => {
  const navigate = useNavigate();

  return (
    <Layout>
      <SEO 
        title="Our Work | NexaTech Rwanda Projects"
        description="Explore our cutting-edge projects—web, mobile, and AI—that are transforming businesses across Rwanda and Africa."
      />
      <section className="pt-32 pb-24 bg-white">
        <div className="container mx-auto px-6">

          {/* Header Section */}
          <div className="text-center max-w-4xl mx-auto mb-20 space-y-6">
            <h1 className="font-serif text-3xl md:text-5xl lg:text-5xl font-normal text-[#1A1A1A] leading-[1.15]">
              Our work speaks for itself dive into the<br className="hidden md:block" />
              projects that define us
            </h1>
            <p className="text-gray-500 text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
              Discover our cutting-edge projects that are transforming<br className="hidden md:block" />
              businesses across Rwanda and Africa
            </p>
          </div>

          {/* Projects Grid */}
          <div className="max-w-6xl mx-auto space-y-16">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="group cursor-pointer"
                onClick={() => navigate(`/work/${project.slug}`)}
              >
                {/* Image Container */}
                <div className="bg-[#F5F5F3] rounded-[24px] overflow-hidden p-8 md:p-12 lg:p-16 mb-6 transition-transform duration-500 group-hover:scale-[1.01]">
                  <div className="rounded-xl overflow-hidden shadow-2xl bg-white border border-gray-100">
                    <img
                      src={project.image}
                      alt={project.title}
                      loading="lazy"
                      className="w-full h-auto object-cover"
                    />
                  </div>
                </div>

                {/* Info Below Image */}
                <div className="flex justify-between items-center px-2">
                  <h3 className="font-serif text-xl md:text-2xl text-gray-900">
                    {project.title}
                  </h3>
                  <span className="text-sm md:text-base text-gray-400 font-serif">
                    {project.category}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>
    </Layout>
  );
};

export default Work;
