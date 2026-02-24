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
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <p className="text-sm font-medium tracking-[0.2em] uppercase text-primary mb-4">
            The Problem
          </p>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6 text-balance">
            Institutions Are Still Operating{" "}
            <span className="gradient-text-blue">Blind</span>
          </h2>
        </motion.div>

        <div className="relative space-y-[-20px] md:space-y-[-40px]">
          {problems.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 50, x: i % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, y: 0, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7, delay: i * 0.15 }}
              className="glass-panel-hover p-8 relative"
              style={{
                zIndex: 10 + i,
                marginLeft: `${i * 20}px`,
                marginRight: `${(2 - i) * 20}px`,
              }}
            >
              <div className="flex items-start gap-5">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                  <p.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-display font-semibold text-foreground mb-2">
                    {p.title}
                  </h3>
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
