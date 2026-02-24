import { motion } from "framer-motion";
import { useRef } from "react";
import { ArrowRight } from "lucide-react";

const useCases = [
  {
    title: "Autonomous Research",
    description:
      "Deploy AI agents that read papers, synthesize findings, and generate novel hypotheses — 24/7.",
    tag: "Research",
  },
  {
    title: "Predictive Analytics",
    description:
      "Forecast market movements, supply chain disruptions, and customer behavior with 97% accuracy.",
    tag: "Finance",
  },
  {
    title: "Code Generation",
    description:
      "Ship production-ready code from natural language specs. Full test coverage included.",
    tag: "Engineering",
  },
  {
    title: "Medical Imaging",
    description:
      "Detect anomalies in medical scans with superhuman precision. FDA-approved pipeline.",
    tag: "Healthcare",
  },
  {
    title: "Content Intelligence",
    description:
      "Generate, curate, and optimize content at scale. Multilingual, brand-safe, always on.",
    tag: "Marketing",
  },
];

export default function UseCases() {
  const scrollRef = useRef<HTMLDivElement>(null);

  return (
    <section className="relative py-32">
      <div className="section-padding mb-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="max-w-6xl mx-auto"
        >
          <p className="text-sm font-medium tracking-[0.2em] uppercase text-accent mb-4">
            Use Cases
          </p>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6">
            Intelligence, Applied
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl text-balance">
            From research labs to trading floors, OpenVisionX powers the next generation of intelligent systems.
          </p>
        </motion.div>
      </div>

      {/* Horizontal scroll */}
      <div
        ref={scrollRef}
        className="flex gap-6 overflow-x-auto pb-8 px-6 md:px-12 lg:px-20 xl:px-32 snap-x snap-mandatory scrollbar-hide"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {useCases.map((useCase, i) => (
          <motion.div
            key={useCase.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.08 }}
            className="glass-panel-hover p-8 min-w-[320px] md:min-w-[380px] snap-start flex flex-col justify-between group cursor-default"
            style={{ marginTop: i % 2 === 0 ? 0 : 32 }}
          >
            <div>
              <span className="inline-block text-xs font-medium tracking-wider uppercase text-accent bg-accent/10 px-3 py-1 rounded-full mb-6">
                {useCase.tag}
              </span>
              <h3 className="text-2xl font-display font-bold text-foreground mb-4">
                {useCase.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {useCase.description}
              </p>
            </div>
            <div className="mt-8 flex items-center gap-2 text-sm font-medium text-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              Learn more <ArrowRight className="w-4 h-4" />
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
