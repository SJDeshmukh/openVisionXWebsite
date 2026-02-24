import { motion } from "framer-motion";
import { Shield, Zap, Brain, Puzzle, Rocket } from "lucide-react";

const reasons = [
  { icon: Brain, title: "AI-First Architecture", desc: "Every component built around machine intelligence." },
  { icon: Shield, title: "Institutional-Grade Security", desc: "SOC 2, encrypted biometrics, zero-trust." },
  { icon: Zap, title: "Real-Time Intelligence", desc: "Sub-second processing at institutional scale." },
  { icon: Puzzle, title: "Seamless Integration", desc: "REST APIs, webhooks, and native SDKs." },
  { icon: Rocket, title: "Future-Ready Expansion", desc: "Modular design for evolving requirements." },
];

const metrics = [
  { value: "99.7%", label: "Recognition Accuracy" },
  { value: "50K+", label: "Active Users" },
  { value: "200+", label: "Routes Optimized" },
  { value: "30+", label: "Institutions Onboarded" },
];

export default function WhySection() {
  return (
    <section className="relative py-32 section-padding">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <p className="text-sm font-medium tracking-[0.2em] uppercase text-primary mb-4">
            Why Us
          </p>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6">
            Why{" "}
            <span className="gradient-text-blue">OpenVisionX</span>
          </h2>
        </motion.div>

        {/* Reason cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-20">
          {reasons.map((r, i) => (
            <motion.div
              key={r.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className="glass-panel-hover p-7 group"
            >
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <r.icon className="w-5 h-5 text-primary" />
              </div>
              <h3 className="font-display font-semibold text-foreground mb-2">{r.title}</h3>
              <p className="text-sm text-muted-foreground">{r.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Metrics */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="glass-panel p-8 md:p-10"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {metrics.map((m, i) => (
              <motion.div
                key={m.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center"
              >
                <p className="text-3xl md:text-4xl font-display font-bold gradient-text-blue mb-1">
                  {m.value}
                </p>
                <p className="text-sm text-muted-foreground">{m.label}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
