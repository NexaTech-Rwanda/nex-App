import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { products } from "@/data/nexatech";

const Work = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const navigate = useNavigate();
  const [featuredProduct, ...otherProducts] = products;

  return (
    <section id="products" ref={ref} className="py-24 bg-white overflow-hidden">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-block px-3 py-1 rounded-full border border-black/5 bg-white text-[11px] font-medium text-gray-600 mb-6 shadow-sm">
            Product portfolio
          </div>
          <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl font-normal text-[#1A1A1A] leading-[1.15] mb-6">
            A clearer look at what NexatechRwanda
            <br className="hidden md:block" />
            is building right now
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto leading-relaxed">
            Shoppa is the current flagship validation product, while the rest of
            the portfolio shows how the company expands its thesis across
            mobility, services, and agriculture.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="rounded-[36px] border border-gray-100 bg-[#F5F5F3] p-6 md:p-8 lg:p-10 mb-10 max-w-6xl mx-auto cursor-pointer hover:shadow-xl transition-all duration-300"
          onClick={() => navigate(`/products/${featuredProduct.slug}`)}
        >
          <div className="grid lg:grid-cols-[1.25fr_0.95fr] gap-8 items-center">
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
                  Flagship product
                </span>
                <span className="text-sm font-medium text-[#0057B8]">
                  {featuredProduct.status}
                </span>
              </div>

              <div>
                <h3 className="font-serif text-4xl text-gray-900 mb-3">
                  {featuredProduct.name}
                </h3>
                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                  {featuredProduct.tagline}
                </p>
                <p className="text-sm text-gray-500 leading-relaxed">
                  {featuredProduct.summary}
                </p>
              </div>

              <div className="space-y-3">
                {featuredProduct.cardHighlights.map((highlight) => (
                  <div
                    key={highlight}
                    className="flex items-center gap-3 text-sm text-gray-600"
                  >
                    <span className="w-2 h-2 rounded-full bg-[#0057B8]" />
                    <span>{highlight}</span>
                  </div>
                ))}
              </div>

              <div className="inline-flex items-center gap-2 text-[#0057B8] font-medium">
                View product details
                <ArrowRight className="w-4 h-4" />
              </div>
            </div>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {otherProducts.map((product, index) => (
            <motion.div
              key={product.slug}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.2 + index * 0.1 }}
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

              <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                <span className="px-3 py-1 rounded-full bg-[#F7F7F7] border border-gray-200 text-[11px] font-medium text-gray-600">
                  {product.category}
                </span>
              </div>

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

        <div className="text-center mt-12">
          <Link
            to="/products"
            className="inline-flex items-center gap-2 text-[#0057B8] font-medium hover:text-[#004694] transition-colors"
          >
            See the full products page
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Work;
