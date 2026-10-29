import React, { useEffect } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation, Navigate } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { ReactLenis } from "lenis/react";
import "lenis/dist/lenis.css";
import Navbar from "./components/Navbar";
import Index from "./pages/Index";
import Resume from "./pages/Resume";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const AnimatedRoutes = () => {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Index />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/portfolio" element={<Navigate to="/#work" replace />} />
        <Route path="/contact" element={<Navigate to="/#contact" replace />} />
        <Route path="/testimonials" element={<Navigate to="/#results" replace />} />
        <Route path="/services" element={<Navigate to="/#work" replace />} />
        <Route path="/about" element={<Navigate to="/#clients" replace />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </AnimatePresence>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <ReactLenis
        root
        options={{
          lerp: 0.085,
          duration: 1.2,
          smoothWheel: true,
          wheelMultiplier: 1.0,
          touchMultiplier: 1.2,
        }}
      >
        <BrowserRouter>
          <ScrollToTop />
          <Navbar />
          <AnimatedRoutes />
        </BrowserRouter>
      </ReactLenis>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

