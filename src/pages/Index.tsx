import Layout from "@/components/Layout";
import Hero from "@/components/Hero";
import WhyChooseUs from "@/components/WhyChooseUs";
import Work from "@/components/Work";
import About from "@/components/About";
import Team from "@/components/Team";
import FAQ from "@/components/FAQ";
import Testimonials from "@/components/Testimonials";
import CTA from "@/components/CTA";
import SEO from "@/components/SEO";

const Index = () => {
  return (
    <Layout>
      <SEO 
        title="NexaTech Rwanda | Engineering Africa's Digital Future"
        description="Transform your vision into reality with NexaTech's ready-to-market digital solutions. We build scalable web platforms, mobile apps, and AI for the African continent."
      />
      <Hero />
      <WhyChooseUs />
      <Work />
      <About />
      <Team />
      <FAQ />
      <Testimonials />
      <CTA />
    </Layout>
  );
};

export default Index;
