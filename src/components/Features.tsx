import { motion } from "framer-motion";
import { Zap, Brain, Shield } from "lucide-react";

const features = [
  {
    icon: Brain,
    title: "Neural Architecture",
    description:
      "Next-generation transformer models that learn, adapt, and evolve. Built for enterprise-scale intelligence.",
  },
  {
    icon: Zap,
    title: "Real-Time Inference",
    description:
      "Sub-millisecond latency at scale. Deploy models that respond faster than human perception.",
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description:
      "SOC 2 compliant with end-to-end encryption. Your data never leaves your infrastructure.",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

export default function Features() {
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
          <p className="text-sm font-medium tracking-[0.2em] uppercase text-accent mb-4">
            Capabilities
          </p>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6">
            Intelligence at Every Layer
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-balance">
            A unified platform that transforms how organizations build, deploy, and scale AI systems.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid md:grid-cols-3 gap-6"
        >
          {features.map((feature) => (
            <motion.div
              key={feature.title}
              variants={cardVariants}
              className="glass-panel-hover p-8 group cursor-default"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors duration-500">
                <feature.icon className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-xl font-display font-semibold text-foreground mb-3">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
