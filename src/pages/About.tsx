import Layout from "@/components/Layout";
import FeatureCard from "@/components/FeatureCard";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Lightbulb, Users, Trophy, Cpu, Rocket, Phone } from "lucide-react";
import teamGrid from "@/assets/team-grid.jpg";

const About = () => {
  const features = [
    {
      icon: Lightbulb,
      title: "Strategic Project Thinking",
      description:
        "We design with your business goals in mind, ensuring impactful results.",
    },
    {
      icon: Users,
      title: "Collaborative Process",
      description:
        "We work closely with you, blending your vision with our creative expertise.",
    },
    {
      icon: Trophy,
      title: "Proven Track Record",
      description:
        "Our success is reflected in the achievements of our satisfied clients.",
    },
    {
      icon: Cpu,
      title: "Modern Technology",
      description:
        "Leveraging cutting-edge technology to enhance efficiency, precision, and sustainability.",
    },
    {
      icon: Rocket,
      title: "Innovation Engineers",
      description:
        "A passionate team of African tech innovators building solutions that transform ecosystems.",
    },
  ];

  return (
    <Layout>
      <div className="relative overflow-hidden">
        {/* 🌄 SAME Background Image as Hero */}
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20 -z-20"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1')",
          }}
        />

        {/* SAME Overlay as Hero */}
        <div className="absolute inset-0 bg-background/70 -z-10" />

        {/* Optional dotted overlay (Hero-style) */}
        <div
          className="
            absolute inset-0 pointer-events-none
            bg-[radial-gradient(circle,_rgba(0,0,0,0.15)_1px,_transparent_1px)]
            bg-[size:14px_14px]
          "
        />

        {/* Team Section */}
        <section className="pt-32 pb-24">
          <div className="container mx-auto px-6 text-center">
            <span className="inline-block px-4 py-1 border border-border rounded-full text-sm text-muted-foreground mb-6">
              Our Developers
            </span>

            <h2 className="font-heading text-3xl md:text-4xl font-medium mb-4">
              Meet Our Developers Who Are Changing Africa Tech
            </h2>

            <p className="text-muted-foreground max-w-xl mx-auto mb-12">
              Get to know the visionaries dedicated to making Rwanda the
              continent's premier tech hub.
            </p>

            <div className="max-w-2xl mx-auto">
              <img
                src={teamGrid}
                alt="NexaTech team grid"
                className="w-full rounded-xl shadow-xl"
              />
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-24">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <span className="inline-block px-4 py-1 border border-border rounded-full text-sm text-muted-foreground bg-background mb-6">
                Features
              </span>

              <h2 className="font-heading text-3xl md:text-4xl font-medium mb-4">
                What sets us apart?
              </h2>

              <p className="text-muted-foreground max-w-xl mx-auto">
                Every detail counts. Discover how our tailored solutions elevate
                your brand.
              </p>
            </div>

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
      </div>
    </Layout>
  );
};

export default About;
