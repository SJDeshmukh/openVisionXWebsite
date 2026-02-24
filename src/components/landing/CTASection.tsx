import { motion } from "framer-motion";
import { ArrowRight, MessageSquare } from "lucide-react";

export default function CTASection() {
  return (
    <section className="relative py-40 section-padding overflow-hidden">
      <div className="absolute inset-0 gradient-bg-cta" />
      <div className="absolute inset-0 neural-grid-bg" />

      <div className="relative max-w-3xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-6xl font-display font-bold text-foreground mb-8 text-balance">
            Build Intelligent Infrastructure with{" "}
            <span className="gradient-text-blue">OpenVisionX</span>
          </h2>
          <p className="text-lg text-muted-foreground mb-12 max-w-xl mx-auto text-balance">
            AI-powered institutional infrastructure that automates identity verification and
            optimizes mobility systems in real time.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="glow-button flex items-center gap-2 text-lg"
            >
              Schedule Demo <ArrowRight className="w-5 h-5" />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="glow-button-outline flex items-center gap-2 text-lg"
            >
              <MessageSquare className="w-5 h-5" /> Talk to Sales
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
