import { motion } from "framer-motion";
import { GraduationCap, Building2, Landmark, Bus } from "lucide-react";

const useCases = [
  { icon: GraduationCap, title: "Schools", desc: "Automated attendance & safe transport for K-12." },
  { icon: Landmark, title: "Universities", desc: "Campus-wide identity & multi-route transit." },
  { icon: Building2, title: "Corporate Campuses", desc: "Employee verification & shuttle management." },
  { icon: Bus, title: "Transport Agencies", desc: "Fleet optimization & rider intelligence." },
];

export default function UseCasesSection() {
  return (
    <section className="relative py-32 section-padding">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="text-sm font-semibold tracking-[0.3em] uppercase text-primary mb-3">
            Use Cases
          </p>
          <h2 className="text-4xl md:text-5xl font-display font-extrabold text-foreground tracking-[-0.03em]">
            Built for{" "}
            <span className="gradient-text-blue">Every Institution.</span>
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {useCases.map((uc, i) => (
            <motion.div
              key={uc.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              whileHover={{ y: -6, rotateY: 5, rotateX: -3, scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="glass-panel-hover p-7 text-center group"
              style={{ perspective: "600px" }}
            >
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-5 group-hover:bg-primary/20 transition-colors">
                <uc.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-display font-semibold text-foreground mb-2">{uc.title}</h3>
              <p className="text-sm text-muted-foreground">{uc.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
