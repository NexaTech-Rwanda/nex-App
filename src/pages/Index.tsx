import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import WhyChooseUs from "@/components/WhyChooseUs";
import Work from "@/components/Work";
import About from "@/components/About";
import Team from "@/components/Team";
import FAQ from "@/components/FAQ";
import Testimonials from "@/components/Testimonials";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <WhyChooseUs />
      <Work />
      <About />
      <Team />
      <FAQ />
      <Testimonials />
      <CTA />
      <Footer />
    </div>
  );
};

export default Index;
