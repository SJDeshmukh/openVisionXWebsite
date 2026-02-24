import { motion } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";

export default function Navbar() {
  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="fixed top-0 left-0 right-0 z-50 section-padding"
    >
      <div className="max-w-6xl mx-auto mt-4">
        <div className="glass-panel px-6 py-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center">
              <div className="w-4 h-4 rounded-sm bg-accent" />
            </div>
            <span className="font-display font-bold text-lg text-foreground">
              OpenVisionX
            </span>
          </div>

          <div className="hidden md:flex items-center gap-8">
            {["Platform", "Use Cases", "Docs", "Pricing"].map((item) => (
              <a
                key={item}
                href="#"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
              >
                {item}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <a
              href="#"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors hidden sm:block"
            >
              Sign in
            </a>
            <button className="glow-button text-sm px-5 py-2">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </motion.nav>
  );
}

export function HeroContent() {
  return (
    <div className="relative z-10 flex flex-col items-center justify-center min-h-screen text-center section-padding">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="max-w-4xl mx-auto"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="inline-flex items-center gap-2 glass-panel px-4 py-2 mb-8 text-sm text-muted-foreground"
        >
          <span className="w-2 h-2 rounded-full bg-glow-neon animate-glow-pulse" />
          Now in Public Beta
        </motion.div>

        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-display font-bold text-foreground mb-6 leading-[0.95] tracking-tight">
          Build the Future
          <br />
          with{" "}
          <span className="gradient-text">OpenVisionX</span>
        </h1>

        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-12 text-balance">
          The AI infrastructure platform that powers the next generation of intelligent systems. 
          From research to production, at any scale.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="glow-button flex items-center gap-2 text-base"
          >
            Get Started <ArrowRight className="w-4 h-4" />
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="glow-button-outline flex items-center gap-2 text-base"
          >
            <Play className="w-4 h-4" /> View Demo
          </motion.button>
        </div>
      </motion.div>

      {/* Scroll indicator */}
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
    </div>
  );
}
