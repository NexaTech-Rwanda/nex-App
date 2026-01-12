import Layout from "@/components/Layout";
import ServiceTag from "@/components/ServiceTag";
import FeatureCard from "@/components/FeatureCard";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { motion } from "framer-motion"
import { Lightbulb, Users, Trophy, Cpu, Rocket, Phone } from "lucide-react";

const notFoundBg = "https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1"; 
const randomTeamLead = "https://source.unsplash.com/400x400/?person,portrait"; 
const randomTeamGrid = "https://source.unsplash.com/800x400/?team,tech"; 

const About = () => {
  const services = ["AI Solutions", "Cloud Solutions", "Tech Solutions", "Web Development"];
  
  const features = [
    { icon: Lightbulb, title: "Strategic Project Thinking", description: "We design with your business goals in mind, ensuring impactful results." },
    { icon: Users, title: "Collaborative Process", description: "We work closely with you, blending your vision with our creative expertise." },
    { icon: Trophy, title: "Proven Track Record", description: "Our success is reflected in the achievements of our satisfied clients." },
    { icon: Cpu, title: "Modern Technology", description: "Leveraging cutting-edge technology to enhance efficiency, precision, and sustainability in every project." },
    { icon: Rocket, title: "Innovation Engineers", description: "A passionate team of African tech innovators dedicated to building solutions that transform entire business ecosystems across the continent." }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative max-h-screen flex items-center justify-center pt-20 pb-20">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${notFoundBg})`, opacity: 0.18 }} />
        <div className="absolute inset-0 bg-primary/10" />
        <div className="absolute inset-0 bg-background/60" />

        <div className="container mx-auto px-6 text-center max-w-4xl relative z-10 pt-20">
          <h1 className="font-heading text-md md:text-4xl lg:text-3xl font-medium mb-16">
            We blend cutting-edge technology with African innovation to build solutions that transform entire business ecosystems. Our commitment to excellence, scalability, and sustainability ensures every tech solution we create contributes to Rwanda's emergence as Africa's premier tech destination.
          </h1>
          
          <div className="flex flex-wrap justify-center gap-3 animate-fade-in pb-25" style={{ animationDelay: '0.2s' }}>
            {services.map((service) => (
              <ServiceTag key={service} label={service} />
            ))}
          </div>
        </div>
      </section>

       {/* Our Story Section */}
<section className="py-24 bg-background">
  <div className="container mx-auto px-6">
    <h2 className="font-heading text-3xl md:text-4xl font-medium mb-8">
      Developers. Big Minds Discovers. Lifelong
      <br />
      learners Workers.
    </h2>

    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
      {/* TEXT COLUMN — UNCHANGED */}
      <div>
        <h3 className="font-heading text-xl font-semibold mb-4">
          Our Story
        </h3>
        <p className="text-muted-foreground leading-relaxed mb-8">
          Founded with a passion for solving african problemsand a commitment to innovation, our team has grown from a small team of enthusiasts to a leading design studio. Over the years, we've partnered with startups and companies at every stage, helping them scale by delivering cutting-edge digital products and solutions. Our journey is fueled by creativity, collaboration, and a relentless pursuit of excellence.
        </p>

        <h3 className="font-heading text-xl font-semibold mb-4">
        About Us
        </h3>
        <p className="text-muted-foreground leading-relaxed mb-8">
          At NexaTech Rwanda, we believe in the power of design to drive success. Our team is a diverse group of creatives and strategists, all dedicated to turning your vision into reality. Whether it's crafting a brand identity, developing a seamless user experience, or building a scalable product, we bring a wealth of experience and a fresh perspective to every project.
        </p>

        <Link to="/about">
          <Button className="rounded-full">Join Us</Button>
        </Link>
      </div>

      {/* IMAGE COLUMN — PUSHED TO RIGHT END */}
      <div className="relative flex justify-end items-center h-full">
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="w-full max-w-sm lg:max-w-md"
        >
          <div className="rounded-2xl overflow-hidden shadow-2xl transform rotate-2 hover:rotate-0 transition-transform duration-500">
            <img
              src="./team-lead.jpg"
              alt="NexaTech team member"
              className="w-[700px] h-[560px] object-cover"
            />
          </div>
        </motion.div>
      </div>
    </div>
  </div>
</section>

    

      {/* Team Section */}
         <section className="py-24 bg-white overflow-hidden">
  <div className="container mx-auto px-6 text-center">
    <h3 className="font-heading text-2xl md:text-3xl font-medium mb-4">
      Our Developers
    </h3>

    <h2 className="font-heading text-3xl md:text-4xl font-medium mb-4">
      Meet Our Developers Who Are Changing Africa Tech
    </h2>

    <p className="text-muted-foreground max-w-xl mx-auto mb-16">
      Get to know the visionaries dedicated to making Rwanda the continent's premier tech hub.
    </p>

    {/* 3x3 Overlapping Grid */}
    <div className="grid grid-cols-3 gap-y-16 max-w-3xl mx-auto">
      {Array.from({ length: 9 }).map((_, index) => {
        const rotations = [
          "-rotate-6",
          "-rotate-2",
          "rotate-4",
          "rotate-3",
          "-rotate-5",
          "rotate-2",
          "-rotate-3",
          "rotate-5",
          "-rotate-4",
        ];

        const offsets = [
          "-ml-6",
          "ml-0",
          "ml-6",
          "-ml-4",
          "ml-2",
          "ml-6",
          "-ml-6",
          "ml-0",
          "ml-4",
        ];

        return (
          <div
            key={index}
            className={`
              relative
              w-40 sm:w-44
              rounded-2xl
              overflow-hidden
              border border-border
              bg-white
              shadow-md
              transform
              ${rotations[index]}
              ${offsets[index]}
              transition-all duration-300
              hover:rotate-0 hover:scale-105 hover:z-20
            `}
          >
            <img
              src={`https://api.dicebear.com/7.x/personas/svg?seed=dev-${index}`}
              alt={`Developer ${index + 1}`}
              className="w-full h-40 object-cover bg-muted"
            />

            <div className="p-3 text-center">
              <h4 className="font-medium text-sm">
                Developer {index + 1}
              </h4>
              <p className="text-xs text-muted-foreground">
                Software Engineer
              </p>
            </div>
          </div>
        );
      })}
    </div>
  </div>
</section>

      {/* Features Section */}
      <section className="py-24 relative">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${notFoundBg})`, opacity: 0.18 }} />
        <div className="absolute inset-0 bg-primary/10" />
        <div className="absolute inset-0 bg-background/60" />

        <div className="container mx-auto px-6 relative z-10">
          <h3 className="font-heading text-2xl md:text-3xl font-medium mb-4 text-center">
            Features
          </h3>
          <h2 className="font-heading text-3xl md:text-4xl font-medium mb-4 text-center">
            What sets us apart?
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto text-center mb-12">
            Every detail counts. Discover how our tailored solutions elevate your brand, ensuring flawless execution and stunning results.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.slice(0, 3).map((feature) => (
              <FeatureCard key={feature.title} {...feature} />
            ))}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6 max-w-4xl mx-auto">
            {features.slice(3).map((feature) => (
              <FeatureCard key={feature.title} {...feature} />
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link to="/contact">
              <Button className="rounded-full gap-2">
                <Phone className="w-4 h-4" />
                Book a call
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
