import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const layers = [
  { label: "User", color: "primary" },
  { label: "AI Engine", color: "primary" },
  { label: "Cloud", color: "primary" },
  { label: "Dashboard", color: "primary" },
  { label: "Mobile App", color: "primary" },
];

const techHighlights = [
  "Edge + Cloud hybrid architecture",
  "Real-time data processing",
  "Encrypted biometric storage",
  "Scalable microservices backend",
  "High availability system design",
];

export default function Architecture() {
  return (
    <section className="relative py-32 section-padding overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-30" />

      <div className="relative max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <p className="text-sm font-medium tracking-[0.2em] uppercase text-primary mb-4">
            Infrastructure
          </p>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6">
            Built on Scalable{" "}
            <span className="gradient-text-blue">AI Infrastructure</span>
          </h2>
        </motion.div>

        {/* Flow diagram */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="glass-panel p-8 md:p-12 mb-16"
        >
          <div className="flex flex-wrap items-center justify-center gap-3 md:gap-4">
            {layers.map((layer, i) => (
              <div key={layer.label} className="flex items-center gap-3 md:gap-4">
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="px-5 py-3 rounded-xl border border-primary/30 bg-primary/5"
                >
                  <span className="font-display font-semibold text-sm text-foreground">
                    {layer.label}
                  </span>
                </motion.div>
                {i < layers.length - 1 && (
                  <ArrowRight className="w-4 h-4 text-primary/50 shrink-0 hidden md:block" />
                )}
              </div>
            ))}
          </div>
        </motion.div>

        {/* Tech highlights */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {techHighlights.map((t, i) => (
            <motion.div
              key={t}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="glass-panel-hover p-5 flex items-center gap-3"
            >
              <div className="w-2 h-2 rounded-full bg-primary shrink-0" />
              <span className="text-sm text-foreground">{t}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
