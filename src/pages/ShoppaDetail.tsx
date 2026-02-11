import Layout from "@/components/Layout";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link, useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import SEO from "@/components/SEO";

const Work = () => {
    const navigate = useNavigate();
    return (
        <Layout>
            <SEO 
                title="Shoppa | Business & Customer Connector"
                description="Shoppa helps business owners and customers connect in one seamless mobile platform. Explore our work on this innovative marketing app."
            />
            <div className="bg-white min-h-screen">
                {/* Project Hero Section */}
                <section className="relative pt-32 pb-20 overflow-hidden">
                    {/* Cloudy Background Effect */}
                    <div className="absolute inset-0 z-0">
                        <div className="absolute top-0 left-0 w-full h-[800px] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-50/50 via-white to-transparent opacity-80" />
                        <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-blue-100/10 rounded-full blur-[120px] filter" />
                        {/* Abstract cloud-like shapes */}
                        <div className="absolute -top-20 -left-20 w-96 h-96 bg-gray-50/50 rounded-full blur-3xl" />
                        <div className="absolute top-40 -right-20 w-80 h-80 bg-blue-50/30 rounded-full blur-3xl" />
                    </div>

                    <div className="container mx-auto px-6 relative z-10">

                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start max-w-6xl mx-auto">
                            {/* Left Column: Title & Info */}
                            <div className="space-y-12">
                                <div>
                                    {/* Back Button */}
                                    <motion.button
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ duration: 0.6 }}
                                        onClick={() => navigate(-1)}
                                        className="flex items-center gap-2 text-gray-400 hover:text-[#0057B8] transition-colors mb-12 group"
                                    >
                                        <div className="w-8 h-8 rounded-full border border-gray-100 flex items-center justify-center group-hover:border-[#0057B8]/20 group-hover:bg-blue-50/50 transition-all">
                                            <ArrowLeft className="w-4 h-4" />
                                        </div>
                                        <span className="text-sm font-medium">Back to Work</span>
                                    </motion.button>
                                    <h1 className="font-serif text-4xl md:text-5xl lg:text-5xl font-normal text-gray-900 mb-6">
                                        Shoppa
                                    </h1>
                                    <div className="flex gap-3">
                                        <span className="px-3 py-1 bg-white border border-gray-100 rounded-full text-[10px] text-gray-500 font-medium shadow-sm">
                                            Online Marketing
                                        </span>
                                        <span className="px-3 py-1 bg-white border border-gray-100 rounded-full text-[10px] text-gray-500 font-medium shadow-sm">
                                            Mobile App
                                        </span>
                                    </div>
                                </div>

                                <div className="space-y-8">
                                    <div>
                                        <h3 className="font-serif text-lg font-normal mb-3 text-gray-900 underline decoration-gray-200 underline-offset-8">
                                            Overview
                                        </h3>
                                        <p className="text-gray-500 text-sm font-serif leading-relaxed max-w-md">
                                            Shoppa helps different business owners and customers connect in one seamless mobile platform for free.
                                        </p>
                                    </div>

                                    <div>
                                        <h3 className="font-serif text-lg font-normal mb-3 text-gray-900 underline decoration-gray-200 underline-offset-8">
                                            Small Description
                                        </h3>
                                        <p className="text-gray-500 text-sm font-serif leading-relaxed max-w-md">
                                            Shop smarter. Sell Faster. Manage Better.
                                        </p>
                                    </div>

                                    {/* Project Specs */}
                                    <div className="grid grid-cols-3 gap-8 pt-6 border-t border-gray-100">
                                        <div>
                                            <h4 className="font-serif text-xl text-gray-900 mb-1">Marketing</h4>
                                            <p className="text-[10px] text-gray-400 font-serif uppercase tracking-wider">Industry</p>
                                        </div>
                                        <div>
                                            <h4 className="font-serif text-xl text-gray-900 mb-1">2025</h4>
                                            <p className="text-[10px] text-gray-400 font-serif uppercase tracking-wider">Year</p>
                                        </div>
                                        <div>
                                            <h4 className="font-serif text-xl text-gray-900 mb-1">Shoppa</h4>
                                            <p className="text-[10px] text-gray-400 font-serif uppercase tracking-wider">Name</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Right Column: Pinned Testimonial Card */}
                            <div className="relative flex lg:justify-end py-12 lg:py-0">
                                <motion.div
                                    initial={{ opacity: 0, y: 30 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.8, delay: 0.3 }}
                                    className="bg-white/80 backdrop-blur-md p-8 rounded-[40px] shadow-[0_20px_60px_-15px_rgba(0,0,0,0.08)] border border-gray-100/50 max-w-sm relative group"
                                >
                                    {/* Pin Decoration - Now a rounded circle as per screenshot */}
                                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#0057B8] w-6 h-6 rounded-full shadow-[0_4px_10px_rgba(0,87,184,0.3)] z-20 flex items-center justify-center">
                                        <div className="w-2 h-2 bg-white/40 rounded-full" />
                                    </div>

                                    <div className="space-y-6">
                                        <div className="w-16 h-16 rounded-[20px] overflow-hidden shadow-md">
                                            <img
                                                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&h=150"
                                                alt="Mugisha David"
                                                className="w-full h-full object-cover"
                                            />
                                        </div>

                                        <p className="text-gray-600 text-[20px] leading-relaxed font-['Indie_Flower']">
                                            My Products selling increased due to use of Shoppa through listing down my products
                                        </p>

                                        <div className="pt-2">
                                            <h5 className="font-semibold text-gray-900 text-base mb-0.5">Mugisha David</h5>
                                            <p className="text-sm text-gray-400 font-normal">Owner of Kigali Market</p>
                                        </div>
                                    </div>
                                </motion.div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Main Project Image with Animation */}
                <section className="pb-24 pt-10">
                    <div className="container mx-auto px-6 max-w-6xl">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95, y: 40 }}
                            whileInView={{ opacity: 1, scale: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                            className="rounded-[3rem] overflow-hidden shadow-[0_40px_100px_-20px_rgba(0,0,0,0.12)] bg-white p-2 border border-gray-100"
                        >
                            <motion.img
                                initial={{ scale: 1.1 }}
                                whileInView={{ scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 1.5, ease: "easeOut" }}
                                src="/shoppa.png"
                                alt="Shoppa App UI"
                                loading="lazy"
                                className="w-full h-auto object-cover rounded-[2.5rem]"
                            />
                        </motion.div>
                    </div>
                </section>

                {/* Dynamic Blue CTA Section - Matching Home Page style */}
                <section className="py-40 bg-[#0057B8] relative overflow-hidden">
                    {/* Background Decorative Circle - Matching the orb in screenshot */}
                    <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[600px] h-[600px] bg-white/5 rounded-full blur-3xl pointer-events-none translate-x-1/3" />

                    <div className="container mx-auto px-6 text-center relative z-10">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="space-y-14"
                        >
                            <h2 className="font-serif text-2xl mb-10 md:text-3xl lg:text-3xl text-white max-w-2xl mx-auto leading-[1.3] font-normal">
                                Ready to accelerate your digital roadmap? <br className="hidden md:block" /> Let's build the future of your business.
                            </h2>
                            <Link to="/contact">
                                <Button className="rounded-[12px] bg-white text-[#0D0D0D] hover:bg-white/90 px-10 py-2 h-auto text-[15px] font-medium shadow-xl transition-all hover:scale-105 active:scale-95 duration-300">
                                    Start Your Project
                                </Button>
                            </Link>
                        </motion.div>
                    </div>
                </section>
            </div>
        </Layout>
    );
};

export default Work;
