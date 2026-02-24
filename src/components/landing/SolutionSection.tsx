import { motion } from "framer-motion";
import { Scan, Bus, LayoutDashboard, Smartphone } from "lucide-react";

const connections = [
  { icon: Scan, label: "Face Recognition" },
  { icon: Bus, label: "Bus Tracking" },
  { icon: LayoutDashboard, label: "Dashboard" },
  { icon: Smartphone, label: "Mobile App" },
];

export default function SolutionSection() {
  return (
    <section className="relative py-32 section-padding overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-40" />

      <div className="relative max-w-5xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-sm font-medium tracking-[0.2em] uppercase text-primary mb-4">
            The Solution
          </p>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6">
            One Unified{" "}
            <span className="gradient-text-blue">AI Platform</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-16 text-balance">
            OpenVisionX integrates biometric identity verification with intelligent mobility
            systems — all in one centralized AI ecosystem.
          </p>
        </motion.div>

        {/* Central core + connections */}
        <div className="relative flex items-center justify-center py-12">
          {/* Central glowing core */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative z-10"
          >
            <div className="w-24 h-24 rounded-full flex items-center justify-center"
              style={{
                background: "radial-gradient(circle, hsl(187, 100%, 50%) 0%, hsl(254, 100%, 69%) 100%)",
                boxShadow: "0 0 60px 10px hsl(187, 100%, 50%, 0.2), 0 0 120px 30px hsl(254, 100%, 69%, 0.1)",
              }}
            >
              <span className="font-display font-bold text-navy-deep text-sm">AI CORE</span>
            </div>
            {/* Pulse rings */}
            <div className="absolute inset-0 rounded-full border border-primary/30 animate-pulse-ring" />
            <div className="absolute inset-[-8px] rounded-full border border-primary/20 animate-pulse-ring" style={{ animationDelay: "0.5s" }} />
          </motion.div>

          {/* Connection lines and nodes */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-16 w-full max-w-3xl">
              {connections.map((c, i) => (
                <motion.div
                  key={c.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.4 + i * 0.1 }}
                  className="flex flex-col items-center gap-3"
                >
                  <div className="glass-panel w-14 h-14 flex items-center justify-center">
                    <c.icon className="w-6 h-6 text-primary" />
                  </div>
                  <span className="text-xs text-muted-foreground font-medium">{c.label}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
