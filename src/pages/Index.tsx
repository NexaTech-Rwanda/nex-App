import Layout from "@/components/Layout";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Work from "@/components/Work";
import WhyChooseUs from "@/components/WhyChooseUs";
import Team from "@/components/Team";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import SEO from "@/components/SEO";
import { BRAND_NAME } from "@/data/nexatech";

const Index = () => {
  return (
    <Layout>
      <SEO 
        title={`${BRAND_NAME} | Building Africa's Essential Service Portfolio`}
        description={`${BRAND_NAME} is a Rwanda-first consumer technology holding company building and owning products across commerce, mobility, services, and agriculture.`}
      />
      <Hero />
      <About />
      <Work />
      <WhyChooseUs />
      <Team />
      <FAQ />
      <CTA />
    </Layout>
  );
};

export default Index;
