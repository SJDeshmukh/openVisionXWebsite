import { motion, useScroll } from "framer-motion";
import Navbar from "@/components/landing/Navbar";
import FuturisticLanding from "@/components/landing/FuturisticLanding";

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



const Index = () => {
  return (
    <div
      className="relative bg-background min-h-screen overflow-x-hidden"
    >
      <ScrollProgress />
      <Navbar />
      <FuturisticLanding />

      {/* Footer */}
      <footer className="relative border-t border-border/50 py-12 section-padding overflow-hidden">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded overflow-hidden">
              <img src="/openVisionXLogo.png" alt="OpenVisionX logo" className="w-full h-full object-cover" />
            </div>
            <span className="font-display font-bold text-foreground">OpenVisionX</span>
          </div>
          <p className="text-sm text-muted-foreground">
            © 2026 OpenVisionX. AI for connected operations.
          </p>
          <a href="mailto:contact@openvisionx.com" className="text-sm text-muted-foreground transition-colors hover:text-foreground">contact@openvisionx.com</a>
        </div>
        <div className="pointer-events-none absolute inset-x-0 bottom-0 flex justify-center">
          <p
            className="font-display font-extrabold tracking-[-0.08em] text-[14vw] leading-none text-foreground/5 translate-y-1/2"
          >
            OPENVISIONX
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
