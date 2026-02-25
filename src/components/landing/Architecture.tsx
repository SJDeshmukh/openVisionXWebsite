import { motion } from "framer-motion";

const layers = [
  { label: "User", src: "/user.gif" },
  { label: "AI Engine", src: "/ai_engine.gif" },
  { label: "Cloud", src: "/cloud.gif" },
  { label: "Dashboard", src: "/dashboard.gif" },
  { label: "Mobile App", src: "/mobile.gif" },
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
    <section id="architecture" className="relative py-32 section-padding overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-30" />

      <div className="relative max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <p className="text-sm font-semibold tracking-[0.3em] uppercase text-primary mb-3">
            Infrastructure
          </p>
          <h2 className="text-4xl md:text-5xl font-display font-extrabold text-foreground mb-6 tracking-[-0.03em]">
            Built on Scalable{" "}
            <span className="gradient-text-blue">AI Infrastructure.</span>
          </h2>
        </motion.div>

        {/* Sequence flow (desktop/tablet) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
          whileHover={{ y: -6 }}
          className="glass-panel p-6 md:p-10 mb-16 overflow-x-auto hidden md:block"
        >
          <div className="flex items-center justify-center gap-4 md:gap-6 min-w-max">
            {layers.map((layer, i) => (
              <div key={layer.label} className="flex items-center gap-4 md:gap-6">
                <motion.div 
                  className="flex flex-col items-center"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.5, delay: i * 0.35 }}
                >
                  <div className="relative w-16 h-16 md:w-20 md:h-20 rounded-full border border-primary/40 bg-background/80 overflow-hidden shadow-[0_0_45px_hsl(var(--glow-blue)/0.35)]">
                    <img src={layer.src} alt={layer.label} className="w-full h-full object-cover" loading="eager" />
                    <motion.span
                      className="absolute inset-0 rounded-full border border-primary/30"
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true, amount: 0.2 }}
                      transition={{ duration: 0.5, delay: i * 0.35 + 0.15 }}
                    />
                  </div>
                  <span className="mt-2 text-xs font-medium text-foreground">{layer.label}</span>
                </motion.div>
                {i < layers.length - 1 && (
                  <motion.div
                    initial={{ width: 0, opacity: 0.6 }}
                    whileInView={{ width: "5rem", opacity: 1 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.6, delay: i * 0.35 + 0.25 }}
                    className="h-1 rounded-full bg-gradient-to-r from-[hsl(var(--glow-blue))] to-[hsl(var(--glow-purple))] hidden md:block"
                  />
                )}
              </div>
            ))}
          </div>
        </motion.div>

        {/* Mobile connectors */}
        <div className="md:hidden glass-panel p-5 mb-16">
          <div className="flex flex-col items-center gap-4">
            {layers.map((layer, i) => (
              <div key={`m-${layer.label}`} className="flex flex-col items-center gap-2">
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.5, delay: i * 0.3 }}
                  className="w-16 h-16 rounded-full border border-primary/40 bg-background/80 overflow-hidden shadow-[0_0_45px_hsl(var(--glow-blue)/0.35)]"
                >
                  <img src={layer.src} alt={layer.label} className="w-full h-full object-cover" loading="eager" />
                </motion.div>
                <span className="text-xs font-medium text-foreground">{layer.label}</span>
                {i < layers.length - 1 && (
                  <motion.div
                    initial={{ height: 0, opacity: 0.6 }}
                    whileInView={{ height: "2.5rem", opacity: 1 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.6, delay: i * 0.3 + 0.2 }}
                    className="w-1 rounded-full bg-gradient-to-b from-[hsl(var(--glow-blue))] to-[hsl(var(--glow-purple))]"
                  />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Tech highlights */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {techHighlights.map((t, i) => (
            <motion.div
              key={t}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ delay: i * 0.08 }}
              whileHover={{ y: -4, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
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
