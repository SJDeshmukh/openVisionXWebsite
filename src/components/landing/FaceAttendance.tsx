import { motion } from "framer-motion";
import { Check } from "lucide-react";

const features = [
  "Real-time facial recognition",
  "Anti-spoof detection",
  "Automated attendance logs",
  "Cloud dashboard access",
  "API integration ready",
];

export default function FaceAttendance() {
  return (
    <section className="relative py-32 section-padding overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="text-center mb-4"
        >
          <div className="flex items-center justify-center mb-3">
            <div className="w-14 h-14 rounded-xl overflow-hidden border border-primary/40 bg-background/60 shadow-[0_0_30px_hsl(var(--glow-blue)/0.25)]">
              <img src="/tapinx-logo.svg" alt="TapInX Logo" className="w-full h-full object-contain" />
            </div>
          </div>
          <h2 className="font-display font-extrabold text-3xl md:text-4xl text-primary mb-2">
            <span className="block tracking-[0.35em] uppercase">
              {["T","A","P","I","N","X"].map((char, i) => (
                <motion.span
                  key={`tapinx-${i}`}
                  initial={{ opacity: 0, y: 16, scale: 0.95 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true, amount: 0.6 }}
                  transition={{ duration: 0.5, ease: "easeInOut", delay: 0.15 + i * 0.08 }}
                  className="inline-block"
                >
                  {char}
                </motion.span>
              ))}
            </span>
            <span className="block text-xs md:text-sm tracking-[0.3em] uppercase text-primary/80 mt-1">
              Attendance System
            </span>
          </h2>
          <p className="text-2xl md:text-3xl font-display font-extrabold text-foreground mb-3 tracking-[-0.03em]">
            Identity Under <span className="gradient-text-blue">Total Watch.</span>
          </p>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            AI-powered face verification that logs attendance the moment students walk in.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mt-16">
          {/* Face scan visualization */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8 }}
            whileHover={{ y: -8 }}
            className="relative"
          >
            <div className="glass-panel aspect-square max-w-[400px] mx-auto relative overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-48 h-48 md:w-56 md:h-56 rounded-full border-2 border-primary/30 relative overflow-hidden bg-black/40">
                  <div className="absolute inset-0">
                    <img 
                      src="/face1.gif" 
                      alt="Face Recognition Scanning" 
                      className="w-full h-full object-cover opacity-90 scale-110"
                    />
                  </div>
                  {[
                    "top-0 left-0 border-t-2 border-l-2",
                    "top-0 right-0 border-t-2 border-r-2",
                    "bottom-0 left-0 border-b-2 border-l-2",
                    "bottom-0 right-0 border-b-2 border-r-2",
                  ].map((pos, i) => (
                    <div
                      key={i}
                      className={`absolute w-6 h-6 border-primary/60 ${pos}`}
                    />
                  ))}
                </div>
              </div>

              {/* Confidence score */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: false }}
                transition={{ delay: 0.6 }}
                className="absolute bottom-6 left-6 right-6"
              >
                <div className="glass-panel p-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs text-muted-foreground">Match Confidence</span>
                    <span className="text-sm font-display font-bold text-primary">99.7%</span>
                  </div>
                  <div className="w-full h-1.5 rounded-full bg-secondary overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: "99.7%" }}
                      viewport={{ once: false }}
                      transition={{ duration: 1.2, delay: 0.8 }}
                      className="h-full rounded-full"
                      style={{ background: "linear-gradient(90deg, hsl(187, 100%, 50%), hsl(254, 100%, 69%))" }}
                    />
                  </div>
                  <p className="text-xs text-primary mt-2 font-medium">✓ Identity Verified — John D.</p>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Features list */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8 }}
          >
            <div className="space-y-4 mb-8">
              {features.map((f, i) => (
                <motion.div
                  key={f}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: false }}
                  transition={{ delay: i * 0.1 }}
                  whileHover={{ x: 6, scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex items-center gap-3"
                >
                  <div className="w-6 h-6 rounded-full bg-primary/15 flex items-center justify-center shrink-0">
                    <Check className="w-3.5 h-3.5 text-primary" />
                  </div>
                  <span className="text-foreground">{f}</span>
                </motion.div>
              ))}
            </div>

            <div className="glass-panel p-6 mt-8">
              <p className="text-lg font-display font-semibold gradient-text-cyan">
                Zero Touch. Instant Logging. Fully Automated.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
