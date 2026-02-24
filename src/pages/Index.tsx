import { Suspense, lazy } from "react";
import Navbar, { HeroContent } from "@/components/HeroUI";
import Features from "@/components/Features";
import Platform from "@/components/Platform";
import UseCases from "@/components/UseCases";
import CTA from "@/components/CTA";

const Hero3DCanvas = lazy(() => import("@/components/Hero3D"));

const Index = () => {
  return (
    <div className="bg-background min-h-screen overflow-x-hidden">
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-screen overflow-hidden">
        <div className="gradient-bg-hero absolute inset-0" />
        <Suspense fallback={null}>
          <Hero3DCanvas />
        </Suspense>
        <HeroContent />
      </section>

      {/* Features */}
      <Features />

      {/* Platform */}
      <Platform />

      {/* Use Cases */}
      <UseCases />

      {/* CTA */}
      <CTA />

      {/* Footer */}
      <footer className="border-t border-border/50 py-12 section-padding">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded bg-primary/20 flex items-center justify-center">
              <div className="w-3 h-3 rounded-sm bg-accent" />
            </div>
            <span className="font-display font-bold text-foreground">OpenVisionX</span>
          </div>
          <p className="text-sm text-muted-foreground">
            © 2026 OpenVisionX Inc. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            {["Privacy", "Terms", "Security"].map((item) => (
              <a key={item} href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                {item}
              </a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
