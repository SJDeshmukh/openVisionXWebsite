import { useRef, useState, MouseEvent } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";

export default function HeroSection() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });
  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "-12%"]);
  const heroOpacity = useTransform(scrollYProgress, [0, 1], [1, 0.4]);
  const [cursorPos, setCursorPos] = useState({ x: 50, y: 30 });
  const [primaryOffset, setPrimaryOffset] = useState({ x: 0, y: 0 });
  const [secondaryOffset, setSecondaryOffset] = useState({ x: 0, y: 0 });

  const handleMouseMove = (event: MouseEvent<HTMLDivElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const x = ((event.clientX - rect.left) / rect.width) * 100;
    const y = ((event.clientY - rect.top) / rect.height) * 100;
    setCursorPos({
      x: Math.max(0, Math.min(100, x)),
      y: Math.max(0, Math.min(100, y)),
    });
  };

  const handlePrimaryMove = (event: MouseEvent<HTMLButtonElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const offsetX = event.clientX - rect.left - rect.width / 2;
    const offsetY = event.clientY - rect.top - rect.height / 2;
    setPrimaryOffset({
      x: offsetX * 0.16,
      y: offsetY * 0.16,
    });
  };

  const resetPrimary = () => {
    setPrimaryOffset({ x: 0, y: 0 });
  };

  const handleSecondaryMove = (event: MouseEvent<HTMLButtonElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const offsetX = event.clientX - rect.left - rect.width / 2;
    const offsetY = event.clientY - rect.top - rect.height / 2;
    setSecondaryOffset({
      x: offsetX * 0.16,
      y: offsetY * 0.16,
    });
  };

  const resetSecondary = () => {
    setSecondaryOffset({ x: 0, y: 0 });
  };

  return (
    <motion.div
      ref={containerRef}
      style={{ y: heroY, opacity: heroOpacity }}
      onMouseMove={handleMouseMove}
      className="relative z-10 flex flex-col items-center justify-center min-h-screen text-center section-padding"
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.5 }}
        className="max-w-4xl mx-auto relative"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="inline-flex items-center gap-2 glass-panel px-4 py-2 mb-8 text-xs md:text-sm tracking-[0.28em] uppercase text-primary/80"
        >
          <span className="w-2 h-2 rounded-full bg-glow-blue animate-glow-pulse" />
          Command-Grade AI Platform
        </motion.div>

        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-display font-extrabold text-foreground mb-6 leading-[0.9] tracking-[-0.04em]">
          AI THAT SEES.
          <br />
          <span className="gradient-text-blue">SYSTEMS THAT MOVE.</span>
        </h1>

        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-3 text-balance leading-relaxed">
          Automate identity. Control mobility. Eliminate blind spots across your institution.
        </p>
        <p className="text-sm md:text-base text-muted-foreground/80 max-w-xl mx-auto mb-12 text-balance">
          No manual logs. No guesswork. No excuses.
        </p>

        
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex items-start justify-center pt-2"
        >
          <div className="w-1 h-2 rounded-full bg-muted-foreground/50" />
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
