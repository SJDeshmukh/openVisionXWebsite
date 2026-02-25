import { motion } from "framer-motion";
import { Clock, Eye, Database } from "lucide-react";

const problems = [
  {
    icon: Clock,
    title: "Manual Attendance",
    desc: "Time-consuming. Proxy issues. Inaccurate logs.",
    offset: 0,
  },
  {
    icon: Eye,
    title: "Unpredictable Bus Systems",
    desc: "Delays. No visibility. Poor route planning.",
    offset: 40,
  },
  {
    icon: Database,
    title: "Disconnected Systems",
    desc: "Data silos. No centralized intelligence.",
    offset: 80,
  },
];

export default function ProblemSection() {
  return (
    <section className="relative py-32 section-padding">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <p className="text-sm font-semibold tracking-[0.3em] uppercase text-primary mb-3">
            The Problem
          </p>
          <h2 className="text-4xl md:text-5xl font-display font-extrabold text-foreground mb-2 text-balance tracking-[-0.03em]">
            Institutions Still Operate{" "}
            <span className="gradient-text-blue">Blind.</span>
          </h2>
        </motion.div>

        <div className="relative space-y-6 md:space-y-8">
          {problems.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, margin: "-50px" }}
              transition={{ duration: 0.7, delay: i * 0.15 }}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="glass-panel p-6 md:p-8 relative"
            >
              <div className="flex items-start gap-5">
                <div className="w-10 h-10 rounded-full bg-primary/15 text-primary flex items-center justify-center font-mono text-xs shrink-0">
                  {(i + 1).toString().padStart(2, "0")}
                </div>
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center">
                      <p.icon className="w-5 h-5 text-primary" />
                    </div>
                    <h3 className="text-xl md:text-2xl font-display font-semibold text-foreground">
                      {p.title}
                    </h3>
                  </div>
                  <p className="text-sm md:text-base text-muted-foreground">
                    {p.title}
                  </p>
                  <p className="text-muted-foreground">{p.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
