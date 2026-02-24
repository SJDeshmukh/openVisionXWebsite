import { Suspense, lazy } from "react";
import Navbar from "@/components/landing/Navbar";
import HeroSection from "@/components/landing/HeroSection";
import ProblemSection from "@/components/landing/ProblemSection";
import SolutionSection from "@/components/landing/SolutionSection";
import FaceAttendance from "@/components/landing/FaceAttendance";
import BusTracking from "@/components/landing/BusTracking";
import RouteBuilder from "@/components/landing/RouteBuilder";
import Architecture from "@/components/landing/Architecture";
import WhySection from "@/components/landing/WhySection";
import UseCasesSection from "@/components/landing/UseCasesSection";
import CTASection from "@/components/landing/CTASection";

const Hero3DScene = lazy(() => import("@/components/Hero3D"));

const Index = () => {
  return (
    <div className="bg-background min-h-screen overflow-x-hidden">
      <Navbar />

      {/* Hero */}
      <section className="relative min-h-screen overflow-hidden">
        <div className="gradient-bg-hero absolute inset-0" />
        <Suspense fallback={null}>
          <Hero3DScene />
        </Suspense>
        <HeroSection />
      </section>

      {/* Problem */}
      <ProblemSection />

      {/* Solution */}
      <SolutionSection />

      {/* Face Attendance */}
      <FaceAttendance />

      {/* Bus Tracking */}
      <BusTracking />

      {/* Route Builder */}
      <RouteBuilder />

      {/* Architecture */}
      <Architecture />

      {/* Why OpenVisionX */}
      <WhySection />

      {/* Use Cases */}
      <UseCasesSection />

      {/* CTA */}
      <CTASection />

      {/* Footer */}
      <footer className="border-t border-border/50 py-12 section-padding">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded flex items-center justify-center overflow-hidden"
              style={{ background: "linear-gradient(135deg, hsl(187, 100%, 50%), hsl(254, 100%, 69%))" }}
            >
              <span className="font-display font-bold text-[8px] text-navy-deep">OV</span>
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
