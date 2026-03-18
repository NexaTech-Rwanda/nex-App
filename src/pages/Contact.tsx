import { useState } from "react";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import SEO from "@/components/SEO";
import { BRAND_NAME } from "@/data/nexatech";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message sent!",
      description: "We'll review it and respond through the appropriate team.",
    });
    setFormData({ name: "", phone: "", email: "", message: "" });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <Layout>
      <SEO
        title={`Contact Us | ${BRAND_NAME}`}
        description={`Contact ${BRAND_NAME} for investor, partnership, ecosystem, or product-related conversations.`}
      />
      <section className="relative min-h-screen pt-32 pb-24 hero-gradient overflow-hidden text-foreground px-4 md:px-8 lg:px-16">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1')",
          }}
        />

        <div className="absolute inset-0 bg-background/70" />
        <div className="absolute top-0 left-0 w-80 h-80 bg-gradient-to-br from-muted/50 to-transparent rounded-full blur-3xl" />
        <div className="absolute top-20 right-0 w-[28rem] h-[28rem] bg-gradient-to-bl from-muted/30 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-muted/40 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-gradient-to-bl from-muted/30 to-transparent rounded-full blur-3xl" />

        <div className="container mx-auto relative z-10">
          <div className="text-center mb-12 max-w-2xl mx-auto">
            <h1 className="font-serif text-4xl md:text-5xl font-medium mb-4">
              Contact {BRAND_NAME}
            </h1>
            <p className="text-muted-foreground">
              Use this page for investor conversations, strategic partnerships,
              ecosystem collaboration, or product-related inquiries connected to
              the NexatechRwanda portfolio.
            </p>
          </div>

          <form
            onSubmit={handleSubmit}
            className="max-w-lg mx-auto space-y-6 bg-card/70 backdrop-blur-md p-8 rounded-2xl border border-border"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm text-muted-foreground mb-2">
                  Name
                </label>
                <Input
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="John Doe"
                  required
                />
              </div>
              <div>
                <label className="block text-sm text-muted-foreground mb-2">
                  Phone Number
                </label>
                <Input
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+250..."
                />
              </div>
            </div>

            <div>
              <label className="block text-sm text-muted-foreground mb-2">
                Email
              </label>
              <Input
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="you@email.com"
                required
              />
            </div>

            <div>
              <label className="block text-sm text-muted-foreground mb-2">
                Message
              </label>
              <Textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell us whether this is about investment, partnership, or a product-related inquiry..."
                rows={4}
                required
              />
            </div>

            <Button type="submit" className="w-full rounded-full">
              Send inquiry
            </Button>
          </form>

          <div className="text-center mt-12">
            <p className="font-serif text-lg mb-4">Or email us directly</p>
            <a href="mailto:info@nexatech.co.rw">
              <Button className="rounded-full gap-2 bg-primary text-primary-foreground hover:bg-primary/90">
                <Mail className="w-4 h-4" />
                info@nexatech.co.rw
              </Button>
            </a>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      </section>
    </Layout>
  );
};

export default Contact;
