import { useState } from "react";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";

const Work = () => {
  const [showDescription, setShowDescription] = useState(false);

  return (
    <Layout>
      <section className="pt-40 pb-24">
        <div className="container mx-auto px-6 space-y-20">

          {/* ================= HEADER ================= */}
         <div className="text-center max-w-4xl mx-auto space-y-6">
  <h1 className="font-serif text-5xl md:text-6xl text-navy leading-tight">
    Our work speaks for itself—dive into the projects that define us
  </h1>



  <p className="text-base text-muted-foreground/80 max-w-2xl mx-auto">
    Discover our cutting-edge projects that are transforming businesses across
    Rwanda and Africa
  </p>
</div>


          {/* ================= IMAGE + BUTTON ================= */}
          <div className="flex flex-col items-center space-y-6">
            <img
              src="/shoppa.png"
              alt="Shoppa Preview"
              className="w-full max-w-4xl rounded-[30px] shadow-xl"
            />

            <Button
              onClick={() => setShowDescription(!showDescription)}
              className="bg-blue-600 hover:bg-blue-700 text-white 
                         rounded-full px-10 py-3 text-sm font-semibold shadow-lg"
            >
              {showDescription ? "Hide Description" : "View Description"}
            </Button>
          </div>

          {/* ================= DESCRIPTION ================= */}
          <AnimatePresence>
            {showDescription && (
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.5 }}
                className="space-y-16"
              >
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

                  {/* TEXT */}
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-xl font-medium mb-2">Overview</h3>
                      <p className="text-muted-foreground max-w-md">
                        Shoppa helps different business owners and customers
                        connect in one seamless mobile platform for free.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-xl font-medium mb-2">
                        Small Description
                      </h3>
                      <p className="text-muted-foreground">
                        Shop smarter. Sell faster. Manage better.
                      </p>
                    </div>

                    <div className="pt-6 border-t border-border flex gap-16">
                      <div>
                        <h4 className="text-xl font-medium">Marketing</h4>
                        <p className="text-sm text-muted-foreground">
                          Industry
                        </p>
                      </div>
                      <div>
                        <h4 className="text-xl font-medium">2025</h4>
                        <p className="text-sm text-muted-foreground">
                          Year
                        </p>
                      </div>
                      <div>
                        <h4 className="text-xl font-medium">Shoppa</h4>
                        <p className="text-sm text-muted-foreground">
                          Name
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* TESTIMONIAL CARD */}
                  <div className="bg-white p-10 rounded-[40px] shadow-2xl max-w-md">
                    <div className="space-y-6">
                      <div className="w-16 h-16 rounded-lg overflow-hidden">
                        <img
                          src="/shoppa.png"
                          alt="Avatar"
                          className="w-full h-full object-cover"
                        />
                      </div>

                      <p className="text-xl font-serif text-navy">
                        “My products selling increased due to use of Shoppa
                        through listing down my products.”
                      </p>

                      <div>
                        <h5 className="font-bold text-navy">
                          Mugisha David
                        </h5>
                        <p className="text-sm text-muted-foreground">
                          Owner of Kigali Market
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* ================= IMAGE AFTER DESCRIPTION ================= */}
                <div className="flex justify-center">
                  <img
                    src="/shoppa.png"
                    alt="Shoppa App Full View"
                    className="w-full max-w-5xl rounded-[30px] shadow-xl"
                  />
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>
    </Layout>
  );
};

export default Work;
