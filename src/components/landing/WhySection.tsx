import { motion } from "framer-motion";

const reasons = [
  { gif: "/ai_first.gif", title: "AI-First Architecture", desc: "Every component built around machine intelligence." },
  { gif: "/security.gif", title: "Institutional-Grade Security", desc: "SOC 2, encrypted biometrics, zero-trust." },
  { gif: "/real_time.gif", title: "Real-Time Intelligence", desc: "Sub-second processing at institutional scale." },
  { gif: "/seamless.gif", title: "Seamless Integration", desc: "REST APIs, webhooks, and native SDKs." },
  { gif: "/iron_man_future.gif", title: "Future-Ready Expansion", desc: "Modular design for evolving requirements." },
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
          <p className="text-sm font-semibold tracking-[0.3em] uppercase text-primary mb-3">
            Why Us
          </p>
          <h2 className="text-4xl md:text-5xl font-display font-extrabold text-foreground mb-6 tracking-[-0.03em]">
            Why{" "}
            <span className="gradient-text-blue">OpenVisionX.</span>
          </h2>
        </motion.div>

        {/* Reason cards */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-14">
          {reasons.map((r, i) => (
            <motion.div
              key={r.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              whileHover={{ y: -6, scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="glass-panel-hover p-4 group text-center"
            >
              <div className="mx-auto mb-3 w-16 h-16 md:w-18 md:h-18 rounded-full overflow-hidden border border-border/60 bg-secondary/40 shadow-[0_0_30px_hsl(var(--glow-blue)/0.15)]">
                <img src={r.gif} alt={r.title} className="w-full h-full object-cover" loading="eager" />
              </div>
              <h3 className="font-display font-semibold text-foreground mb-1">{r.title}</h3>
              <p className="text-xs text-muted-foreground">{r.desc}</p>
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
