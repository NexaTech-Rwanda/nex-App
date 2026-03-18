import Layout from "@/components/Layout";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link, useNavigate, useParams } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import SEO from "@/components/SEO";
import { BRAND_NAME, products } from "@/data/nexatech";

const ProductDetail = () => {
  const navigate = useNavigate();
  const { slug } = useParams();
  const product = products.find((item) => item.slug === slug);

  if (!product) {
    return (
      <Layout>
        <section className="pt-32 pb-24 bg-white">
          <div className="container max-w-3xl text-center">
            <h1 className="font-serif text-4xl text-[#1A1A1A] mb-6">
              Product not found
            </h1>
            <p className="text-gray-500 mb-8">
              This portfolio item does not exist in the current Nexatech
              product list.
            </p>
            <Link to="/products">
              <Button className="rounded-xl bg-[#0057B8] hover:bg-[#004694] text-white">
                Back to products
              </Button>
            </Link>
          </div>
        </section>
      </Layout>
    );
  }

  return (
    <Layout>
      <SEO title={`${product.name} | ${BRAND_NAME}`} description={product.summary} />

      <div className="bg-white min-h-screen">
        <section className="relative pt-32 pb-20 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <div className="absolute top-0 left-0 w-full h-[800px] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-50/50 via-white to-transparent opacity-80" />
            <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-blue-100/10 rounded-full blur-[120px] filter" />
            <div className="absolute -top-20 -left-20 w-96 h-96 bg-gray-50/50 rounded-full blur-3xl" />
            <div className="absolute top-40 -right-20 w-80 h-80 bg-blue-50/30 rounded-full blur-3xl" />
          </div>

          <div className="container mx-auto px-6 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start max-w-6xl mx-auto">
              <div className="space-y-12">
                <div>
                  <motion.button
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    onClick={() => navigate("/products")}
                    className="flex items-center gap-2 text-gray-400 hover:text-[#0057B8] transition-colors mb-12 group"
                  >
                    <div className="w-8 h-8 rounded-full border border-gray-100 flex items-center justify-center group-hover:border-[#0057B8]/20 group-hover:bg-blue-50/50 transition-all">
                      <ArrowLeft className="w-4 h-4" />
                    </div>
                    <span className="text-sm font-medium">Back to Products</span>
                  </motion.button>

                  <h1 className="font-serif text-4xl md:text-5xl lg:text-5xl font-normal text-gray-900 mb-6">
                    {product.name}
                  </h1>

                  <div className="flex flex-wrap gap-3">
                    <span className="px-3 py-1 bg-white border border-gray-100 rounded-full text-[10px] text-gray-500 font-medium shadow-sm">
                      {product.category}
                    </span>
                    <span className="px-3 py-1 bg-white border border-gray-100 rounded-full text-[10px] text-[#0057B8] font-medium shadow-sm">
                      {product.stage}
                    </span>
                  </div>
                </div>

                <div className="space-y-8">
                  <div>
                    <h3 className="font-serif text-lg font-normal mb-3 text-gray-900 underline decoration-gray-200 underline-offset-8">
                      Product thesis
                    </h3>
                    <p className="text-gray-500 text-sm font-serif leading-relaxed max-w-md">
                      {product.tagline}
                    </p>
                  </div>

                  <div>
                    <h3 className="font-serif text-lg font-normal mb-3 text-gray-900 underline decoration-gray-200 underline-offset-8">
                      What it does
                    </h3>
                    <p className="text-gray-500 text-sm font-serif leading-relaxed max-w-md">
                      {product.detail}
                    </p>
                  </div>

                  <div className="grid grid-cols-3 gap-8 pt-6 border-t border-gray-100">
                    <div>
                      <h4 className="font-serif text-xl text-gray-900 mb-1">
                        {product.name}
                      </h4>
                      <p className="text-[10px] text-gray-400 font-serif uppercase tracking-wider">
                        Product
                      </p>
                    </div>
                    <div>
                      <h4 className="font-serif text-xl text-gray-900 mb-1">
                        Rwanda
                      </h4>
                      <p className="text-[10px] text-gray-400 font-serif uppercase tracking-wider">
                        Starting market
                      </p>
                    </div>
                    <div>
                      <h4 className="font-serif text-xl text-gray-900 mb-1">
                        Year 1
                      </h4>
                      <p className="text-[10px] text-gray-400 font-serif uppercase tracking-wider">
                        Company stage
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative flex lg:justify-end py-12 lg:py-0">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  className="bg-white/80 backdrop-blur-md p-8 rounded-[40px] shadow-[0_20px_60px_-15px_rgba(0,0,0,0.08)] border border-gray-100/50 max-w-sm relative"
                >
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#0057B8] w-6 h-6 rounded-full shadow-[0_4px_10px_rgba(0,87,184,0.3)] z-20 flex items-center justify-center">
                    <div className="w-2 h-2 bg-white/40 rounded-full" />
                  </div>

                  <div className="space-y-6">
                    <div className="w-16 h-16 rounded-[20px] bg-[#F2F6FC] text-[#0057B8] shadow-md flex items-center justify-center font-serif text-2xl">
                      {product.name.slice(0, 1)}
                    </div>

                    <p className="text-gray-600 text-[20px] leading-relaxed font-['Indie_Flower']">
                      {product.summary}
                    </p>

                    <div className="pt-2">
                      <h5 className="font-semibold text-gray-900 text-base mb-0.5">
                        Market focus
                      </h5>
                      <p className="text-sm text-gray-400 font-normal">
                        {product.market}
                      </p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {product.image && (
          <section className="pb-16 pt-6">
            <div className="container mx-auto px-6 max-w-6xl">
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 40 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                className="rounded-[3rem] overflow-hidden shadow-[0_40px_100px_-20px_rgba(0,0,0,0.12)] bg-white p-2 border border-gray-100"
              >
                <motion.img
                  initial={{ scale: 1.05 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.2, ease: "easeOut" }}
                  src={product.image}
                  alt={product.imageAlt ?? product.name}
                  loading="lazy"
                  className="w-full h-auto object-cover rounded-[2.5rem]"
                />
              </motion.div>
            </div>
          </section>
        )}

        <section className="pb-24 pt-6">
          <div className="container mx-auto px-6 max-w-6xl">
            <div className="rounded-[3rem] overflow-hidden shadow-[0_40px_100px_-20px_rgba(0,0,0,0.12)] bg-[#F7F6F3] p-10 md:p-14 border border-gray-100">
              <div className="grid md:grid-cols-3 gap-8">
                {product.detailHighlights.map((highlight) => (
                  <motion.div
                    key={highlight}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.7 }}
                    className="rounded-[28px] bg-white p-8 border border-gray-100"
                  >
                    <div className="w-10 h-10 rounded-full bg-[#0057B8]/10 text-[#0057B8] flex items-center justify-center mb-5 text-sm font-semibold">
                      NX
                    </div>
                    <p className="text-gray-600 leading-relaxed text-sm">
                      {highlight}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="py-32 bg-[#0057B8] relative overflow-hidden">
          <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[600px] h-[600px] bg-white/5 rounded-full blur-3xl pointer-events-none translate-x-1/3" />

          <div className="container mx-auto px-6 text-center relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-14"
            >
              <h2 className="font-serif text-2xl mb-6 md:text-3xl lg:text-3xl text-white max-w-2xl mx-auto leading-[1.3] font-normal">
                Explore the rest of the product portfolio or contact the company
                for product, partnership, or investor-related conversations.
              </h2>
              <div className="flex flex-wrap items-center justify-center gap-3">
                <Link to="/products">
                  <Button className="rounded-[12px] bg-white text-[#0D0D0D] hover:bg-white/90 px-8 py-2 h-auto text-[15px] font-medium shadow-xl transition-all hover:scale-105 active:scale-95 duration-300">
                    View all products
                  </Button>
                </Link>
                <Link to="/contact">
                  <Button className="rounded-[12px] border border-white/20 bg-white/10 text-white hover:bg-white/20 px-8 py-2 h-auto text-[15px] font-medium shadow-xl transition-all duration-300">
                    Contact {BRAND_NAME}
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default ProductDetail;
