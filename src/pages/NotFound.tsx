import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <Layout>
      <section className="relative max-h-screen overflow-hidden px-4 md:px-8 lg:px-16">
        {/*  Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1')",
            opacity: 0.18,
          }}
        />

        {/* Brand color tint */}
        <div className="absolute inset-0 bg-primary/10" />

        {/* Soft readability overlay */}
        <div className="absolute inset-0 bg-background/60" />

        {/* Content */}
        <div className="relative z-10 flex min-h-[70vh] items-center justify-center">
          <div className="text-center max-w-xl">
            <h1 className="mb-4 font-serif text-5xl md:text-6xl font-medium text-foreground">
              Whoops, that page is gone.
            </h1>

            <p className="mb-8 text-lg text-muted-foreground">
              Looks like this page doesn’t exist or was moved.
            </p>

            {/* Go back button */}
            <Button
              size="lg"
              variant="outline"
              className="rounded-full px-10 py-6 text-lg transition-all duration-300 hover:scale-105 hover:shadow-xl"
              onClick={() => (window.location.href = "/")}
            >
              Go to homepage
            </Button>
          </div>
        </div>

        {/* Bottom divider */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      </section>
    </Layout>
  );
};

export default NotFound;
