import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function CTA() {
  return (
    <section className="relative py-40 section-padding overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 gradient-bg-cta" />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />

      <div className="relative max-w-3xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-sm font-medium tracking-[0.2em] uppercase text-accent mb-6">
            Ready to Start
          </p>
          <h2 className="text-4xl md:text-6xl font-display font-bold text-foreground mb-8 text-balance">
            The Future of Intelligence is{" "}
            <span className="gradient-text">Open</span>
          </h2>
          <p className="text-lg text-muted-foreground mb-12 max-w-xl mx-auto text-balance">
            Join thousands of teams building the next generation of AI-powered products with OpenVisionX.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="glow-button flex items-center gap-2 text-lg"
            >
              Start Building <ArrowRight className="w-5 h-5" />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="glow-button-outline text-lg"
            >
              Talk to Sales
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
