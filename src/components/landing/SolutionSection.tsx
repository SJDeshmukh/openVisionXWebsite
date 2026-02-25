import { motion } from "framer-motion";
import { Scan, Bus, LayoutDashboard, Smartphone } from "lucide-react";

const connections = [
  { icon: Scan, label: "TapInX Attendance" },
  { icon: Bus, label: "RouteX Bus Tracking" },
  { icon: LayoutDashboard, label: "Dashboard" },
  { icon: Smartphone, label: "Mobile App" },
];

const products = [
  {
    label: "TapInX",
    metric: "0.5s",
    metricLabel: "check-in",
    description: "Touchless verification that writes to your TapInX attendance system in real time.",
  },
  {
    label: "RouteX",
    metric: "100%",
    metricLabel: "Fleet visibility",
    description: "Live GPS, punctuality scores, route health and optimization for every vehicle.",
  },
];

export default function SolutionSection() {
  return (
    <section id="solutions" className="relative py-32 section-padding overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-40" />

      <div className="relative max-w-5xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-100px" }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-sm font-semibold tracking-[0.3em] uppercase text-primary mb-3">
            The Solution
          </p>
          <h2 className="text-4xl md:text-5xl font-display font-extrabold text-foreground mb-4 tracking-[-0.03em]">
            One Unified{" "}
            <span className="gradient-text-blue">AI Command Layer.</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-16 text-balance">
            Enforce identity, movement and access from a single AI core that watches every entry,
            every route and every event in real time.
          </p>
        </motion.div>

        <div className="relative flex items-center justify-center py-12">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative z-10"
          >
            <div className="w-24 h-24 rounded-full overflow-hidden"
              style={{
                boxShadow: "0 0 60px 10px hsl(187, 100%, 50%, 0.2), 0 0 120px 30px hsl(254, 100%, 69%, 0.1)",
              }}
            >
              <img src="/architecture-net.gif" alt="AI core symbol" className="w-full h-full object-cover" />
            </div>
            {/* Pulse rings */}
            <div className="absolute inset-0 rounded-full border border-primary/30 animate-pulse-ring" />
            <div className="absolute inset-[-8px] rounded-full border border-primary/20 animate-pulse-ring" style={{ animationDelay: "0.5s" }} />
          </motion.div>

          <div className="absolute inset-0 flex items-center justify-center">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-16 md:gap-32 w-full max-w-6xl justify-items-center">
              {connections.map((c, i) => (
                <motion.div
                  key={c.label}
                  initial={{ opacity: 0, y: 0 }}
                  whileInView={{ opacity: 1 }}
                  animate={{ y: [-6, 6] }}
                  viewport={{ once: false }}
                  transition={{ duration: 3.6, delay: 0.2 + i * 0.12, repeat: Infinity, repeatType: "mirror", ease: "easeInOut" }}
                  className="flex flex-col items-center gap-4"
                >
                  <div className="relative">
                    <motion.div
                      className="glass-panel w-20 h-20 flex items-center justify-center rounded-2xl shadow-[0_0_45px_hsl(var(--glow-blue)/0.25)]"
                      animate={{ scale: [1, 1.04, 1] }}
                      transition={{ duration: 3.6, delay: 0.3 + i * 0.12, repeat: Infinity, repeatType: "mirror", ease: "easeInOut" }}
                    >
                      <c.icon className="w-9 h-9 text-primary" />
                    </motion.div>
                    <motion.div
                      className="absolute inset-0 rounded-2xl border border-primary/20"
                      animate={{ opacity: [0.35, 0.15, 0.35], scale: [1, 1.06, 1] }}
                      transition={{ duration: 3.6, delay: 0.2 + i * 0.12, repeat: Infinity, repeatType: "mirror", ease: "easeInOut" }}
                    />
                  </div>
                  <span className="text-sm text-muted-foreground font-medium">{c.label}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-28 space-y-10 text-left">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.6 }}
            className="text-sm font-medium tracking-[0.2em] uppercase text-primary"
          >
            Products
          </motion.p>

          <div className="grid md:grid-cols-2 gap-10">
            {products.map((p, index) => (
              <motion.div
                key={p.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -6, rotateX: -3, rotateY: 3 }}
                className="glass-panel-hover p-8 pt-10 group relative"
                style={{ perspective: "800px" }}
              >
                <div className="stat-bubble text-[10px] absolute top-3 right-3">
                  <span className="text-foreground mr-1">{p.metric}</span>
                  <span className="text-muted-foreground">{p.metricLabel}</span>
                </div>
                <div className="flex items-center gap-4 mt-6 mb-4">
                  {p.label === "TapInX" && (
                    <div className="w-10 h-10 rounded-lg overflow-hidden border border-primary/40 bg-background/60 shrink-0 shadow-[0_0_24px_hsl(var(--glow-blue)/0.2)]">
                      <img src="/tapinx-logo.svg" alt="TapInX" className="w-full h-full object-contain" />
                    </div>
                  )}
                  {p.label === "RouteX" && (
                    <div className="w-10 h-10 rounded-lg overflow-hidden border border-primary/40 bg-background/60 shrink-0 shadow-[0_0_24px_hsl(var(--glow-blue)/0.2)]">
                      <img src="/routeX_logo%207.43.16%E2%80%AFAM.png" alt="RouteX" className="w-full h-full object-contain" />
                    </div>
                  )}
                  <h3 className="font-display font-extrabold text-2xl md:text-3xl tracking-[-0.04em] text-foreground gradient-text-blue transition-transform duration-200 group-hover:scale-105">
                    <span className="inline-flex">
                      {p.label.split("").map((char, charIndex) => (
                        <motion.span
                          key={`${p.label}-${charIndex}`}
                          initial={{ opacity: 0, y: 18, scale: 0.94 }}
                          whileInView={{ opacity: 1, y: 0, scale: 1 }}
                          viewport={{ once: true, amount: 0.6 }}
                          transition={{
                            duration: 0.6,
                            ease: "easeInOut",
                            delay: 0.25 + index * 0.12 + charIndex * 0.08,
                          }}
                          className="inline-block"
                        >
                          {char === " " ? "\u00A0" : char}
                        </motion.span>
                      ))}
                    </span>
                  </h3>
                </div>
                <p className="text-sm md:text-base text-muted-foreground mb-5">
                  {p.description}
                </p>
                <div className="h-1.5 rounded-full bg-secondary overflow-hidden">
                  <motion.div
                    initial={{ width: "0%" }}
                    whileInView={{ width: "100%" }}
                    viewport={{ once: false }}
                    transition={{ duration: 1, delay: 0.2 + index * 0.1 }}
                    className="h-full rounded-full"
                    style={{
                      background:
                        "linear-gradient(90deg, hsl(var(--glow-blue)), hsl(var(--glow-purple)))",
                    }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
