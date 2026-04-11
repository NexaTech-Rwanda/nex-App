import { Toaster } from "@/components/ui/toaster"
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import React, { Suspense, lazy } from "react";
import { Analytics } from "@vercel/analytics/react";

// Lazy load pages for better performance
const Index = lazy(() => import("./pages/Index"));
const About = lazy(() => import("./pages/About"));
const TeamPage = lazy(() => import("./pages/TeamPage"));
const Work = lazy(() => import("./pages/Work"));
const ProductDetail = lazy(() => import("./pages/ShoppaDetail"));
const Contact = lazy(() => import("./pages/Contact"));
const NotFound = lazy(() => import("./pages/NotFound"));

const queryClient = new QueryClient();

// Loading component for Suspense
const PageLoader = () => (
  <div className="h-screen w-full flex items-center justify-center bg-white">
    <div className="w-8 h-8 border-4 border-[#0057B8] border-t-transparent rounded-full animate-spin"></div>
  </div>
);

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Suspense fallback={<PageLoader />}>
            <Routes>
              {/* Home */}
              <Route path="/" element={<Index />} />

              {/* Other pages */}
              <Route path="/about" element={<About />} />
              <Route path="/team" element={<TeamPage />} />
              <Route path="/products" element={<Work />} />
              <Route path="/products/:slug" element={<ProductDetail />} />
              <Route path="/work" element={<Work />} />
              <Route path="/work/:slug" element={<ProductDetail />} />
              <Route path="/contact" element={<Contact />} />

              {/* 404 – MUST stay last */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </BrowserRouter>
        <Analytics />
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
