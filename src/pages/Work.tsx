import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const Work = () => {
  return (
    <Layout>
      {/* ================= HERO SECTION ================= */}
      <section className="relative pt-40 pb-20 overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

            {/* Left Column */}
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="font-serif text-6xl md:text-7xl text-navy">
                  Shoppa
                </h1>

                <div className="flex gap-3">
                  <span className="px-3 py-1 bg-muted text-[10px] font-medium rounded-md uppercase tracking-wider text-muted-foreground">
                    Online Marketing
                  </span>
                  <span className="px-3 py-1 bg-muted text-[10px] font-medium rounded-md uppercase tracking-wider text-muted-foreground">
                    Mobile App
                  </span>
                </div>
              </div>

              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-medium mb-2">Overview</h3>
                  <p className="text-muted-foreground leading-relaxed max-w-md">
                    Shoppa helps different business owners and customers connect
                    in one seamless mobile platform for free.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-medium mb-2">Small Description</h3>
                  <p className="text-muted-foreground leading-relaxed max-w-md">
                    Shop smarter. Sell faster. Manage better.
                  </p>
                </div>
              </div>

              <div className="pt-8 border-t border-border flex gap-16">
                <div>
                  <h4 className="text-xl font-medium mb-1">Marketing</h4>
                  <p className="text-sm text-muted-foreground">Industry</p>
                </div>
                <div>
                  <h4 className="text-xl font-medium mb-1">2025</h4>
                  <p className="text-sm text-muted-foreground">Year</p>
                </div>
                <div>
                  <h4 className="text-xl font-medium mb-1">Shoppa</h4>
                  <p className="text-sm text-muted-foreground">Name</p>
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div className="relative flex justify-center lg:justify-end">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="bg-white p-10 rounded-[40px] shadow-2xl max-w-md relative"
              >
                <div className="absolute -top-3 right-10 w-6 h-6 bg-blue-600 rounded-full border-4 border-white shadow-lg" />

                <div className="space-y-6">
                  <div className="w-16 h-16 rounded-lg overflow-hidden bg-muted">
                    <img
                      src="/shoppa.png"
                      alt="Avatar"
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <p className="text-2xl font-serif leading-tight text-navy">
                    "My present daily mistakes are the seeds of tomorrow's
                    victory. Keep going."
                  </p>

                  <div>
                    <h5 className="font-bold text-navy">Mugisha David</h5>
                    <p className="text-sm text-muted-foreground">
                      Founder of Royal Rwandans
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>

          </div>
        </div>
      </section>

      {/* ================= VISUAL SHOWCASE ================= */}
      <section className="py-20">
        <div className="rounded-[30px] relative overflow-hidden flex items-center justify-center p-4">
          <img
            src="/shoppa.png"
            alt="Smartphone App"
            className="max-w-screen max-h-screen object-fit opacity-80"
          />
        </div>
      </section>

      {/* ================= CTA SECTION ================= */}
      {/* <section className="py-16 blue-gradient text-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-1xl md:text-2xl font-serif mb-3 max-w-1xl mx-auto leading-tight">
            Why wait? Take the leap. Make your design process stress-free today.
          </h2>

          <Button
            variant="outline"
            className="bg-white text-blue-700 hover:bg-blue-50 border-white rounded-full px-10 py-6 text-sm font-bold tracking-wider"
          >
            Join Us
          </Button>
        </div>
      </section> */}
    </Layout>
  );
};

export default Work;
