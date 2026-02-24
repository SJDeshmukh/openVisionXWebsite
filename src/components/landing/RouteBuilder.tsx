import { motion } from "framer-motion";
import { Check, Route, Smartphone } from "lucide-react";

const features = [
  "Route registration system",
  "Student enrollment integration",
  "Dynamic seat allocation",
  "Multi-campus scalability",
  "Web + Mobile access",
];

const screens = [
  { title: "Route Builder", detail: "Drag-and-drop route design" },
  { title: "Student List", detail: "Enrollment management" },
  { title: "Live Map", detail: "Real-time tracking view" },
];

export default function RouteBuilder() {
  return (
    <section className="relative py-32 section-padding overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="text-sm font-medium tracking-[0.2em] uppercase text-primary mb-4">
            Route Management
          </p>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6">
            Design Smarter Routes.{" "}
            <span className="gradient-text-blue">Manage Seamlessly.</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Phone mockup */}
          <motion.div
            initial={{ opacity: 0, x: -40, rotateY: 15 }}
            whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="flex justify-center"
          >
            <div className="relative" style={{ perspective: "1000px" }}>
              <motion.div
                animate={{ rotateY: [-3, 3, -3] }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                className="glass-panel w-[220px] h-[440px] md:w-[260px] md:h-[520px] rounded-[32px] p-3 relative overflow-hidden"
                style={{
                  boxShadow: "0 20px 80px -20px hsl(187, 100%, 50%, 0.15), 0 0 40px -10px hsl(254, 100%, 69%, 0.1)",
                }}
              >
                {/* Phone notch */}
                <div className="w-20 h-5 rounded-full bg-background mx-auto mb-3" />

                {/* Screen content */}
                <div className="space-y-3">
                  <div className="flex items-center gap-2 mb-4">
                    <Smartphone className="w-4 h-4 text-primary" />
                    <span className="text-xs font-display font-semibold text-foreground">OpenVisionX</span>
                  </div>

                  {screens.map((screen, i) => (
                    <motion.div
                      key={screen.title}
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.5 + i * 0.15 }}
                      className="bg-secondary/60 rounded-xl p-3"
                    >
                      <p className="text-xs font-display font-semibold text-foreground">{screen.title}</p>
                      <p className="text-[10px] text-muted-foreground">{screen.detail}</p>
                    </motion.div>
                  ))}

                  {/* Mini route nodes */}
                  <div className="flex items-center justify-between px-2 pt-2">
                    {[1, 2, 3, 4].map((n) => (
                      <div key={n} className="flex flex-col items-center gap-1">
                        <div className="w-3 h-3 rounded-full bg-primary/40" />
                        <div className="w-px h-4 bg-primary/20" />
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Features */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="space-y-4">
              {features.map((f, i) => (
                <motion.div
                  key={f}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <div className="w-6 h-6 rounded-full bg-primary/15 flex items-center justify-center shrink-0">
                    <Check className="w-3.5 h-3.5 text-primary" />
                  </div>
                  <span className="text-foreground">{f}</span>
                </motion.div>
              ))}
            </div>

            <div className="glass-panel p-6 mt-10 flex items-center gap-3">
              <Route className="w-5 h-5 text-primary shrink-0" />
              <p className="text-sm text-muted-foreground">
                Routes update in real-time across web and mobile platforms simultaneously.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
