import { Suspense, lazy, useState, MouseEvent } from "react";
import { motion, useScroll } from "framer-motion";
import Navbar from "@/components/landing/Navbar";
import ThemeToggle from "@/components/ThemeToggle";
import HeroSection from "@/components/landing/HeroSection";
import ProblemSection from "@/components/landing/ProblemSection";
import SolutionSection from "@/components/landing/SolutionSection";
import FaceAttendance from "@/components/landing/FaceAttendance";
import BusTracking from "@/components/landing/BusTracking";
import Architecture from "@/components/landing/Architecture";
import WhySection from "@/components/landing/WhySection";
import UseCasesSection from "@/components/landing/UseCasesSection";
import CTASection from "@/components/landing/CTASection";

const Hero3DScene = lazy(() => import("@/components/Hero3D"));

const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-0.5 z-50 bg-transparent"
      style={{
        background:
          "linear-gradient(90deg, hsl(var(--glow-blue)), hsl(var(--glow-purple)))",
      }}
    >
      <motion.div
        className="h-full bg-transparent"
        style={{
          scaleX: scrollYProgress,
          transformOrigin: "0% 50%",
        }}
      />
    </motion.div>
  );
};

type CursorPos = { x: number; y: number };

const GlobalMouseOverlay = ({ cursorPos }: { cursorPos: CursorPos }) => {
  return (
    <>
      <div className="pointer-events-none absolute inset-0 neural-grid-bg opacity-25" />
    </>
  );
};

const CustomCursor = ({ cursorPos }: { cursorPos: CursorPos }) => {
  return (
    <motion.div
      className="pointer-events-none absolute z-50 hidden md:block -translate-x-1/2 -translate-y-1/2"
      style={{
        left: `${cursorPos.x}%`,
        top: `${cursorPos.y}%`,
      }}
    >
      <motion.div
        animate={{ scale: [1, 1.4, 1] }}
        transition={{ duration: 1.1, repeat: Infinity, ease: "easeInOut" }}
        className="w-8 h-8 rounded-full"
        style={{
          border: "1px solid hsl(var(--illum-color))",
          background: "hsl(var(--illum-color) / 0.1)",
          boxShadow: "0 0 30px hsl(var(--illum-color) / 0.55)",
        }}
      />
    </motion.div>
  );
};

const Index = () => {
  const [cursorPos, setCursorPos] = useState<CursorPos>({ x: 50, y: 30 });

  const handleMouseMove = (event: MouseEvent<HTMLDivElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const x = ((event.clientX - rect.left) / rect.width) * 100;
    const y = ((event.clientY - rect.top) / rect.height) * 100;
    setCursorPos({
      x: Math.max(0, Math.min(100, x)),
      y: Math.max(0, Math.min(100, y)),
    });
  };

  return (
    <div
      className="relative bg-background min-h-screen overflow-x-hidden cursor-none"
      onMouseMove={handleMouseMove}
    >
      <ScrollProgress />
      <div className="pointer-events-none absolute inset-0 gradient-bg-hero -z-10" />
      <GlobalMouseOverlay cursorPos={cursorPos} />
      <CustomCursor cursorPos={cursorPos} />
      <div className="fixed top-3 right-3 z-[60]">
        <ThemeToggle />
      </div>
      <Navbar />

      {/* Hero */}
      <section id="platform" className="relative min-h-screen overflow-hidden">
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

      {/* Bus + Route Management */}
      <BusTracking />

      {/* Architecture */}
      <Architecture />

      {/* Why OpenVisionX */}
      <WhySection />

      {/* Use Cases */}
      <UseCasesSection />

      {/* CTA */}
      <CTASection />

      {/* Footer */}
      <footer className="relative border-t border-border/50 py-12 section-padding overflow-hidden">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded overflow-hidden">
              <img src="/Screenshot%202026-02-21%20at%209.03.35%E2%80%AFAM.png" alt="OpenVisionX logo" className="w-full h-full object-cover" />
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
        <div className="pointer-events-none absolute inset-x-0 bottom-0 flex justify-center">
          <p
            className="font-display font-extrabold tracking-[-0.08em] text-[14vw] leading-none text-white/10 translate-y-1/2"
          >
            OPENVISIONX
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
