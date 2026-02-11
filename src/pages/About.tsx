import Layout from "@/components/Layout";
import ServiceTag from "@/components/ServiceTag";
import FeatureCard from "@/components/FeatureCard";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { motion } from "framer-motion"
import { Lightbulb, Users, Trophy, Cpu, Rocket, Phone, Hand } from "lucide-react";
import SEO from "@/components/SEO";

const notFoundBg = "https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1";
const randomTeamLead = "https://source.unsplash.com/400x400/?person,portrait";
const randomTeamGrid = "https://source.unsplash.com/800x400/?team,tech";

const About = () => {
  const services = ["AI Solutions", "Cloud Solutions", "Tech Solutions", "Web Development", "Mobile Apps"];

  const features = [
    { icon: Lightbulb, title: "Strategic Project Thinking", description: "Each digital system is architected for market readiness and scalability from day one." },
    { icon: Users, title: "User-Centric African Architecture", description: "Solutions designed specifically for the unique needs and workflows of the African market." },
    { icon: Trophy, title: "Scalable Pan-African Infrastructure", description: "Engineered to grow across borders, ensuring reliability as your business expands continent-wide." },
    { icon: Cpu, title: "Local Expertise, Global Standards", description: "World-class engineering delivered with deep regional insight and market understanding." },
    { icon: Rocket, title: "Innovation Engineers", description: "A passionate team of African tech innovators dedicated to building solutions that transform entire business ecosystems across the continent." }
  ];

  return (
    <Layout>
      <SEO 
        title="About Us | NexaTech Rwanda"
        description="Learn about NexaTech's mission to architect comprehensive digital ecosystems that solve Africa's most complex operational challenges."
      />
      <div className="max-w-screen mx-auto">
        {/* Hero Section */}
        <section className="relative flex items-center justify-center pt-10 pb-28 pt-28">
          <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${notFoundBg})`, opacity: 0.18 }} />
          <div className="absolute inset-0 bg-primary/10" />
          <div className="absolute inset-0 bg-background/60" />

          <div className="container mx-auto px-7 text-center max-w-3xl relative z-10 pt-8">
            <h1 className="font-serif text-sm md:text-base lg:text-lg font-normal mb-6 leading-relaxed text-[#0D0D0D]">
              We blend cutting-edge technology with African<br />
              innovation to build solutions that transform entire <br />
              business ecosystems. Our commitment to excellence,<br />
              scalability, and sustainability ensures every tech <br />
              solution we create contributes to Rwanda's emergence<br />
              as Africa's premier tech destination.
            </h1>

            <div className="relative max-w-xl mx-auto pb-8">
              {/* Carousel Container */}
              <div className="relative flex overflow-hidden bg-secondary/50 rounded-md p-1 mask-linear">
                <div className="absolute inset-y-0 left-0 w-6 bg-gradient-to-r from-background to-transparent z-10"></div>
                <div className="absolute inset-y-0 right-0 w-6 bg-gradient-to-l from-background to-transparent z-10"></div>

                <div className="flex gap-2 animate-scroll whitespace-nowrap">
                  {/* Duplicate items for seamless scrolling */}
                  {[...services, ...services, ...services].map((service, index) => (
                    <div key={`${service}-${index}`} className="flex-shrink-0 bg-white rounded-full">
                      <ServiceTag label={service} />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Story Section */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-6 max-w-6xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
              {/* TEXT COLUMN */}
              <div className="flex flex-col justify-center">
                <h2 className="font-serif text-3xl md:text-4xl font-normal mb-8 text-[#0D0D0D] leading-tight">
                  Developers. Big Minds Discovers. Lifelong
                  <br className="hidden md:block" />
                  learners Workers.
                </h2>

                <div className="space-y-8">
                  <div>
                    <h3 className="font-heading text-lg font-semibold mb-3">
                      Our Story
                    </h3>
                    <p className="text-muted-foreground text-sm font-serif leading-relaxed">
                      Founded with a passion for solving african problemsand a commitment to innovation, our team has grown from a small team of enthusiasts to a leading design studio. Over the years, we've partnered with startups and companies at every stage, helping them scale by delivering cutting-edge digital products and solutions. Our journey is fueled by creativity, collaboration, and a relentless pursuit of excellence.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-heading text-lg font-semibold mb-3">
                      About Us
                    </h3>
                    <p className="text-muted-foreground text-sm font-serif leading-relaxed">
                      At NexaTech Rwanda, we believe in the power of design to drive success. Our team is a diverse group of creatives and strategists, all dedicated to turning your vision into reality. Whether it's crafting a brand identity, developing a seamless user experience, or building a scalable product, we bring a wealth of experience and a fresh perspective to every project.
                    </p>
                  </div>

                  <Link to="/about">
                    <Button className="rounded-large px-9 py-2 text-base h-auto 
               bg-[#0057B8] hover:bg-[#004494] 
               text-white font-semibold 
               shadow-md hover:shadow-lg 
               transition duration-300 ease-in-out 
               mt-5">
                      Join Us
                    </Button>
                  </Link>
                </div>
              </div>

              {/* IMAGE COLUMN */}
              <div className="relative flex justify-end items-start h-full pt-4">
                <motion.div
                  initial={{ opacity: 0, x: 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  className="w-full"
                >
                  <div className="rounded-2xl overflow-hidden shadow-2xl bg-white p-2 border border-gray-100">
                    <img
                      src="./team-lead.jpg"
                      alt="NexaTech team member"
                      className="w-full aspect-square object-cover rounded-xl"
                    />
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-10 bg-white overflow-hidden">
          <div className="container mx-auto px-6 text-center">
            <div className="mb-2">
              <span className="section-badge px-2 py-0.5 rounded-full text-[9px] font-medium border border-[#0057B8]/20 text-[#0057B8] bg-[#0057B8]/5">
                Our Developers
              </span>
            </div>

            <h2 className="font-serif text-xl md:text-2xl font-normal mb-3 text-[#0D0D0D] leading-tight">
              Meet Our Developers Who Are Changing <br /> Africa Tech
            </h2>

            <p className="text-muted-foreground text-xs md:text-sm max-w-lg mx-auto mb-8 font-serif">
              Get to know the visionaries dedicated to making Rwanda the <br /> continent's premier tech hub.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-4xl mx-auto">
              {[
                { name: "Alain", role: "Developer", image: "/boy.jpg" },
                { name: "Hope", role: "Designer", image: "/avatar.jpg" },
                { name: "Chael", role: "Developer", image: "/boy.jpg" },
                { name: "Corene", role: "Developer", image: "/team3.png" },
                { name: "Nikita", role: "Designer", image: "/team1.png" },
                { name: "Roger", role: "Developer", image: "/boy.jpg" },
                { name: "Nelson", role: "Developer", image: "/team2.png" },
                { name: "Yvan", role: "Developer", image: "/boy.jpg" },
                { name: "Paola", role: "Developer", image: "/team4.png" },
                { name: "Jeremy", role: "Designer", image: "/boy.jpg" },


              ].map((member, index) => (
                <motion.div
                  key={index}
                  whileHover={{ y: -5 }}
                  className="group relative bg-white rounded-[1.5rem] p-3 shadow-[0_5px_20px_-10px_rgba(0,0,0,0.1)] transition-all duration-500"
                >
                  <div className="aspect-[3/4] overflow-hidden rounded-[1.2rem] relative bg-gray-50">
                    <img
                      src={member.image}
                      alt={member.name}
                      loading="lazy"
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                    />

                    {/* Speech Bubble Name Tag on Hover */}
                    <div className="absolute inset-x-0 bottom-4 flex justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-2 group-hover:translate-y-0 z-20">
                      <div className="relative bg-white px-4 py-1.5 rounded-xl shadow-lg">
                        <span className="font-heading text-xs font-bold text-gray-900 whitespace-nowrap">
                          Hi! I'm {member.name}
                        </span>
                        {/* Little triangle for bubble effect */}
                        <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-white rotate-45" />
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-24 relative bg-[#F8F7F4] overflow-hidden">
          {/* Cloudy Background Effect at bottom */}
          <div className="absolute bottom-0 left-0 w-full h-[400px] z-0 opacity-40 pointer-events-none">
            <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent" />
            <div className="absolute bottom-[-10%] left-[-10%] w-[120%] h-full bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-blue-100/20 via-transparent to-transparent blur-3xl" />
          </div>

          <div className="container mx-auto px-6 relative z-10">
            <div className="text-center mb-16">
              <span className="px-3 py-1 bg-white border border-gray-200 rounded-full text-[10px] uppercase tracking-wider font-semibold text-gray-500 shadow-sm mb-6 inline-block">
                Features
              </span>
              <h2 className="font-serif text-4xl md:text-5xl lg:text-5xl font-normal mb-6 text-[#1A1A1A]">
                Built for Africa, Engineered for Impact.
              </h2>
              <p className="text-gray-500 text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
                Every detail counts. Discover how our tailored solutions elevate your brand, <br className="hidden md:block" />
                ensuring flawless execution and stunning results.
              </p>
            </div>

            {/* Features Unified Grid */}
            <div className="max-w-6xl mx-auto bg-white border border-gray-100 rounded-[2rem] shadow-[0_20px_50px_rgba(0,0,0,0.04)] overflow-hidden">
              <div className="grid grid-cols-1 md:grid-cols-3 border-b border-gray-100">
                {features.slice(0, 3).map((feature, idx) => (
                  <div key={feature.title} className={`p-10 ${idx !== 2 ? 'md:border-r border-gray-100' : ''}`}>
                    <feature.icon className="w-5 h-5 text-gray-800 mb-6" strokeWidth={1} />
                    <h3 className="font-serif text-2xl font-normal mb-4 text-gray-900">{feature.title}</h3>
                    <p className="text-gray-500 text-[13px] leading-relaxed font-serif">
                      {feature.description}
                    </p>
                  </div>
                ))}
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2">
                {features.slice(3).map((feature, idx) => (
                  <div key={feature.title} className={`p-10 ${idx === 0 ? 'md:border-r border-gray-100' : ''}`}>
                    <feature.icon className="w-5 h-5 text-gray-800 mb-6" strokeWidth={1} />
                    <h3 className="font-serif text-2xl font-normal mb-4 text-gray-900">{feature.title}</h3>
                    <p className="text-gray-500 text-[13px] leading-relaxed font-serif">
                      {feature.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="text-center mt-16">
              <Link to="/contact">
                <Button className="rounded-xl px-10 py-4 h-auto bg-[#0057B8] hover:bg-[#004494] text-white font-medium shadow-lg hover:shadow-blue-200 transition-all duration-300 gap-3">
                  <Hand className="w-2 h-2" strokeWidth={2} />
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
