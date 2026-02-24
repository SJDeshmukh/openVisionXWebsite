import { motion } from "framer-motion";
import { MapPin, Navigation, Clock, Users, BarChart3, Check } from "lucide-react";

const features = [
  "Live GPS tracking",
  "Accurate ETA prediction",
  "Route optimization engine",
  "Parent / Student mobile app",
  "Admin dashboard analytics",
];

const stats = [
  { value: "27%", label: "Reduced Delay", icon: Clock },
  { value: "35%", label: "Route Efficiency ↑", icon: Navigation },
  { value: "Live", label: "Occupancy Data", icon: Users },
];

export default function BusTracking() {
  return (
    <section className="relative py-32 section-padding overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="text-center mb-4"
        >
          <p className="text-sm font-medium tracking-[0.2em] uppercase text-primary mb-4">
            Mobility
          </p>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6">
            Smart Transit &{" "}
            <span className="gradient-text-blue">Real-Time Tracking</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mt-16">
          {/* Features */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="space-y-4 mb-10">
              {features.map((f, i) => (
                <motion.div
                  key={f}
                  initial={{ opacity: 0, x: -20 }}
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

            {/* Stat bubbles */}
            <div className="flex flex-wrap gap-3">
              {stats.map((s, i) => (
                <motion.div
                  key={s.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + i * 0.1 }}
                  className="stat-bubble flex items-center gap-2"
                >
                  <s.icon className="w-4 h-4 text-primary" />
                  <span className="font-display font-bold text-primary">{s.value}</span>
                  <span className="text-muted-foreground text-xs">{s.label}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Map visualization */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="glass-panel aspect-[4/3] relative overflow-hidden p-1">
              <div className="absolute inset-0 grid-bg opacity-60 rounded-2xl" />

              {/* Route lines */}
              <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 300">
                <motion.path
                  d="M 50,250 Q 120,200 200,180 T 350,80"
                  stroke="hsl(187, 100%, 50%)"
                  strokeWidth="2"
                  fill="none"
                  strokeDasharray="8 4"
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 2, delay: 0.3 }}
                />
                <motion.path
                  d="M 30,200 Q 150,120 250,150 T 380,50"
                  stroke="hsl(254, 100%, 69%)"
                  strokeWidth="1.5"
                  fill="none"
                  strokeDasharray="6 4"
                  opacity={0.5}
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 2, delay: 0.6 }}
                />
              </svg>

              {/* Animated bus dot */}
              <div className="absolute animate-bus-move" style={{ top: "55%" }}>
                <div className="relative">
                  <div className="w-4 h-4 rounded-full bg-primary" style={{
                    boxShadow: "0 0 16px 4px hsl(187, 100%, 50%, 0.5)"
                  }} />
                  <div className="absolute inset-0 w-4 h-4 rounded-full border border-primary/40 animate-pulse-ring" />
                </div>
              </div>

              {/* Map pins */}
              {[
                { top: "20%", left: "80%", label: "Campus A" },
                { top: "70%", left: "15%", label: "Station" },
                { top: "45%", left: "50%", label: "Stop 3" },
              ].map((pin) => (
                <div key={pin.label} className="absolute flex flex-col items-center" style={{ top: pin.top, left: pin.left }}>
                  <MapPin className="w-4 h-4 text-accent" />
                  <span className="text-[10px] text-muted-foreground mt-0.5">{pin.label}</span>
                </div>
              ))}

              {/* Analytics overlay */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 1 }}
                className="absolute bottom-4 right-4 glass-panel p-3 text-xs"
              >
                <div className="flex items-center gap-2 mb-1">
                  <BarChart3 className="w-3 h-3 text-primary" />
                  <span className="text-muted-foreground">Live Analytics</span>
                </div>
                <p className="text-primary font-display font-bold">12 buses active</p>
                <p className="text-muted-foreground">Avg ETA: 4.2 min</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
