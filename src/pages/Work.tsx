import Layout from "@/components/Layout";
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import SEO from "@/components/SEO";
import { ArrowRight } from "lucide-react";
import { BRAND_NAME, products } from "@/data/nexatech";

const Work = () => {
  const navigate = useNavigate();
  const [featuredProduct, ...otherProducts] = products;

  return (
    <Layout>
      <SEO
        title={`Products | ${BRAND_NAME}`}
        description={`Explore ${BRAND_NAME}'s four active products across commerce, mobility, services, and agriculture.`}
      />

      <section className="pt-32 pb-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-4xl mx-auto mb-20 space-y-6">
            <h1 className="font-serif text-3xl md:text-5xl lg:text-5xl font-normal text-[#1A1A1A] leading-[1.15]">
              Four products. One disciplined
              <br className="hidden md:block" />
              holding-company thesis.
            </h1>
            <p className="text-gray-500 text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
              This page is organized around the current portfolio: one flagship
              product moving toward validation first, followed by the wider
              product roadmap across essential services.
            </p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-[34px] border border-gray-100 bg-[#F6F5F2] p-6 md:p-8 lg:p-10 mb-16 max-w-6xl mx-auto cursor-pointer hover:shadow-xl transition-all duration-300"
            onClick={() => navigate(`/products/${featuredProduct.slug}`)}
          >
            <div className="grid lg:grid-cols-[1.15fr_0.9fr] gap-10 items-center">
              <div className="rounded-[28px] overflow-hidden border border-white/80 bg-white shadow-sm">
                {featuredProduct.image && (
                  <img
                    src={featuredProduct.image}
                    alt={featuredProduct.imageAlt ?? featuredProduct.name}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                )}
              </div>

              <div className="space-y-6">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="px-3 py-1 rounded-full bg-white border border-gray-200 text-[11px] font-medium text-gray-600">
                    Flagship validation product
                  </span>
                  <span className="text-sm font-medium text-[#0057B8]">
                    {featuredProduct.status}
                  </span>
                </div>

                <div>
                  <h2 className="font-serif text-4xl text-gray-900 mb-4">
                    {featuredProduct.name}
                  </h2>
                  <p className="text-lg text-gray-700 leading-relaxed mb-4">
                    {featuredProduct.tagline}
                  </p>
                  <p className="text-sm text-gray-500 leading-relaxed">
                    {featuredProduct.detail}
                  </p>
                </div>

                <div className="space-y-3">
                  {featuredProduct.detailHighlights.map((highlight) => (
                    <div
                      key={highlight}
                      className="flex items-start gap-3 text-sm text-gray-600"
                    >
                      <span className="mt-1.5 w-2 h-2 rounded-full bg-[#0057B8]" />
                      <span>{highlight}</span>
                    </div>
                  ))}
                </div>

                <div className="inline-flex items-center gap-2 text-[#0057B8] font-medium">
                  Open {featuredProduct.name}
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </div>
          </motion.div>

          <div className="max-w-6xl mx-auto mb-10">
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-8">
              <div>
                <h2 className="font-serif text-3xl text-[#1A1A1A] mb-2">
                  The wider portfolio in development
                </h2>
                <p className="text-gray-500 max-w-2xl leading-relaxed">
                  These additional ventures show how NexatechRwanda extends the
                  same operating logic into mobility, labor, and agriculture.
                </p>
              </div>
              <Link
                to="/about"
                className="inline-flex items-center gap-2 text-[#0057B8] font-medium hover:text-[#004694] transition-colors"
              >
                Learn how the company works
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {otherProducts.map((product, index) => (
                <motion.div
                  key={product.slug}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group cursor-pointer rounded-[28px] border border-gray-100 bg-white p-7 hover:-translate-y-1 hover:shadow-lg transition-all duration-300"
                  onClick={() => navigate(`/products/${product.slug}`)}
                >
                  <div className="h-44 rounded-[22px] bg-[linear-gradient(135deg,#0D4D9C_0%,#2D7BE0_45%,#F6F5F2_100%)] p-5 flex items-end mb-6">
                    <div className="rounded-2xl bg-white/90 backdrop-blur-md px-4 py-3">
                      <div className="text-[11px] uppercase tracking-[0.18em] text-[#0057B8] mb-1">
                        In development
                      </div>
                      <div className="font-serif text-2xl text-[#1A1A1A]">
                        {product.name}
                      </div>
                    </div>
                  </div>

                  <span className="inline-flex px-3 py-1 rounded-full bg-[#F7F7F7] border border-gray-200 text-[11px] font-medium text-gray-600 mb-4">
                    {product.category}
                  </span>
                  <h3 className="font-serif text-2xl text-gray-900 mb-3">
                    {product.name}
                  </h3>
                  <p className="text-sm text-gray-700 leading-relaxed mb-3">
                    {product.tagline}
                  </p>
                  <p className="text-sm text-gray-500 leading-relaxed">
                    {product.summary}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Work;
