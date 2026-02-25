import { useState, MouseEvent } from "react";
import { motion } from "framer-motion";
import { ArrowRight, MessageSquare } from "lucide-react";

export default function CTASection() {
  const [primaryOffset, setPrimaryOffset] = useState({ x: 0, y: 0 });
  const [secondaryOffset, setSecondaryOffset] = useState({ x: 0, y: 0 });

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
    <section id="contact" className="relative py-40 section-padding overflow-hidden">
      <div className="absolute inset-0 gradient-bg-cta" />
      <div className="absolute inset-0 neural-grid-bg" />

      <div className="relative max-w-3xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-6xl font-display font-extrabold text-foreground mb-6 text-balance tracking-[-0.03em]">
            Build Aggressive{" "}
            <span className="gradient-text-blue">AI Infrastructure.</span>
          </h2>
          <p className="text-lg text-muted-foreground mb-2 max-w-xl mx-auto text-balance">
            Lock in identity, movement and access across your campus with one control layer.
          </p>
          <p className="text-sm text-muted-foreground/80 mb-12 max-w-xl mx-auto text-balance">
            No blind spots. No fragile glue code. Just hard guarantees.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <motion.button
              whileHover={{ scale: 1.06 }}
              whileTap={{ scale: 0.97 }}
              onMouseMove={handlePrimaryMove}
              onMouseLeave={resetPrimary}
              className="glow-button flex items-center gap-2 text-lg"
            >
              <motion.span
                style={{ x: primaryOffset.x, y: primaryOffset.y }}
                transition={{ type: "spring", stiffness: 260, damping: 18, mass: 0.2 }}
                className="flex items-center gap-2"
              >
                Schedule Demo <ArrowRight className="w-5 h-5" />
              </motion.span>
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              onMouseMove={handleSecondaryMove}
              onMouseLeave={resetSecondary}
              className="glow-button-outline flex items-center gap-2 text-lg"
            >
              <motion.span
                style={{ x: secondaryOffset.x, y: secondaryOffset.y }}
                transition={{ type: "spring", stiffness: 260, damping: 18, mass: 0.2 }}
                className="flex items-center gap-2"
              >
                <MessageSquare className="w-5 h-5" /> Talk to Sales
              </motion.span>
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
