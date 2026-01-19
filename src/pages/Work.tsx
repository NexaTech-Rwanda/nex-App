import Layout from "@/components/Layout";

const Work = () => {
  const projects = [
    {
      title: "Shoppa",
      category: "E-commerce",
      image: "./shoppa.png",
      description: "Shop smarter. Sell faster. Manage better.",
    },
  ];

  return (
    <Layout>
      {/* ================= HERO-like section ================= */}
      <section className="relative overflow-hidden pt-36 pb-24 text-black min-h-screen">
        {/*  Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1')",
          }}
        />

        {/* Overlay for readability */}
        <div className="absolute inset-0 bg-background/70" />

        

        {/* Decorative gradients */}
        <div className="absolute top-0 left-0 w-80 h-80 bg-gradient-to-br from-muted/50 to-transparent rounded-full blur-3xl" />
        <div className="absolute top-20 right-0 w-[28rem] h-[28rem] bg-gradient-to-bl from-muted/30 to-transparent rounded-full blur-3xl" />

        <div className="container mx-auto px-6 relative z-10">
          {/* Heading */}
          <div className="text-center max-w-4xl mx-auto mb-20">
            <h1 className="font-heading text-md md:text-4xl lg:text-4.5xl font-medium mb-16">
              <span className="italic">Our work speaks for itself—dive into the projects that define us</span>
            </h1>
            <p className="text-black text-md md:text-xl max-w-2xl mt-[-2px] mx-auto">
             Discover our cutting-edge projects that are transforming businesses across Rwanda and Africa
            </p>
          </div>

          {/* ================= PROJECTS ================= */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            {projects.map((project) => (
              <div
                key={project.title}
                className="group rounded-2xl bg-background shadow-sm hover:shadow-xl transition-all duration-500 relative z-10"
              >
                {/* Image */}
                <div className="relative overflow-hidden rounded-t-2xl">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-450px h-350px object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  {/* Subtle hover overlay */}
                  <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>

                {/* Content */}
                <div className="p-7">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="font-heading text-2xl font-semibold">
                      {project.title}
                    </h3>
                    <span className="text-sm px-3 py-1 rounded-full bg-muted text-muted-foreground">
                      {project.category}
                    </span>
                  </div>
                  <p className="text-muted-foreground leading-relaxed max-w-md">
                    {project.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Work;
