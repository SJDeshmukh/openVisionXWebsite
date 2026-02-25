import { useState, MouseEvent, useRef, useEffect } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { Navigation, Clock, Users, Check, Route, Smartphone } from "lucide-react";

const features = [
  "Live GPS on every vehicle",
  "Aggressive ETA enforcement",
  "Route optimization engine",
  "Parent / student control apps",
  "Admin command analytics",
];

const stats = [
  { value: "27%", label: "Reduced Delay", icon: Clock },
  { value: "35%", label: "Route Efficiency ↑", icon: Navigation },
  { value: "Live", label: "Occupancy Data", icon: Users },
];

const routeFeatures = [
  "Route registration system",
  "Student enrollment integration",
  "Dynamic seat allocation",
  "Multi-campus scalability",
  "Web + Mobile access",
];

const routeScreens = [
  { title: "Route Builder", detail: "Drag-and-drop route design" },
  { title: "Student List", detail: "Enrollment management" },
  { title: "Live Map", detail: "Real-time tracking view" },
];

const phoneMetrics = [
  { label: "Active buses", value: "42" },
  { label: "On-time", value: "97%" },
  { label: "Avg ETA delta", value: "-2m" },
  { label: "Alerts", value: "1" },
];

export default function BusTracking() {
  const [cursorPos, setCursorPos] = useState({ x: 50, y: 40 });
  const [ctaOffset, setCtaOffset] = useState({ x: 0, y: 0 });
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [metricIndex, setMetricIndex] = useState(0);
  const [gifError, setGifError] = useState(false);
  useEffect(() => {
    const id = setInterval(() => {
      setMetricIndex((i) => (i + 1) % phoneMetrics.length);
    }, 1400);
    return () => clearInterval(id);
  }, []);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const layerOneX = useTransform(mouseX, [-0.5, 0.5], [-26, 26]);
  const layerOneY = useTransform(mouseY, [-0.5, 0.5], [18, -18]);
  const layerTwoX = useTransform(mouseX, [-0.5, 0.5], [18, -18]);
  const layerTwoY = useTransform(mouseY, [-0.5, 0.5], [-12, 12]);
  const busOffsetX = useTransform(mouseX, [-0.5, 0.5], [-18, 18]);
  const busOffsetY = useTransform(mouseY, [-0.5, 0.5], [10, -10]);

  const handleMouseMove = (event: MouseEvent<HTMLDivElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const rawX = (event.clientX - rect.left) / rect.width;
    const rawY = (event.clientY - rect.top) / rect.height;
    const clampedX = Math.max(0, Math.min(1, rawX));
    const clampedY = Math.max(0, Math.min(1, rawY));
    mouseX.set(clampedX - 0.5);
    mouseY.set(clampedY - 0.5);
    setCursorPos({
      x: clampedX * 100,
      y: clampedY * 100,
    });
  };

  const handleCtaMouseMove = (event: MouseEvent<HTMLButtonElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const offsetX = event.clientX - rect.left - rect.width / 2;
    const offsetY = event.clientY - rect.top - rect.height / 2;
    setCtaOffset({
      x: offsetX * 0.16,
      y: offsetY * 0.16,
    });
  };

  const resetCtaOffset = () => {
    setCtaOffset({ x: 0, y: 0 });
  };

  return (
    <section className="relative py-20 section-padding overflow-hidden">
      <motion.div
        className="pointer-events-none absolute -top-40 -right-32 w-72 h-72 rounded-full bg-primary/10 blur-3xl"
        style={{ x: layerOneX, y: layerOneY }}
      />
      <motion.div
        className="pointer-events-none absolute -bottom-32 -left-24 w-64 h-64 rounded-full bg-accent/10 blur-3xl"
        style={{ x: layerTwoX, y: layerTwoY }}
      />

      <div className="max-w-6xl mx-auto relative" onMouseMove={handleMouseMove}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="mb-6"
        >
            <div className="flex items-center justify-center mb-3">
            <div className="w-14 h-14 rounded-xl overflow-hidden border border-primary/40 bg-background/60 shadow-[0_0_30px_hsl(var(--glow-blue)/0.25)]">
              <img src="/routeX_logo%207.43.16%E2%80%AFAM.png" alt="RouteX Logo" className="w-full h-full object-contain" />
            </div>
          </div>
          <p className="text-xs sm:text-sm font-semibold text-primary mb-4 text-center">
            <span className="block font-display font-extrabold text-3xl md:text-4xl tracking-[0.35em] uppercase">
              {["R","O","U","T","E","X"].map((char, i) => (
                <motion.span
                  key={`routex-top-${i}`}
                  initial={{ opacity: 0, y: 16, scale: 0.95 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true, amount: 0.6 }}
                  transition={{ duration: 0.5, ease: "easeInOut", delay: 0.12 + i * 0.08 }}
                  className="inline-block"
                >
                  {char}
                </motion.span>
              ))}
            </span>
            <span className="block text-xs md:text-sm tracking-[0.3em] uppercase text-primary/80 mt-1">
              Mobility & Route Management
            </span>
          </p>

          <div className="grid md:grid-cols-2 gap-6 items-start">
            <div className="text-left md:text-left">
              <h2 className="text-3xl md:text-3xl lg:text-4xl font-display font-extrabold text-foreground mb-1 tracking-[-0.03em]">
                Transit Under{" "}
                <span className="gradient-text-blue">Total Watch.</span>
              </h2>
              <p className="text-xs text-muted-foreground max-w-md">
                Every bus, every face, every second. Occupancy and ETAs lock in as soon as a student boards.
              </p>
            </div>

            <div className="text-left md:text-left">
              <h3 className="text-xl md:text-2xl font-display font-extrabold text-foreground mb-1 tracking-[-0.03em]">
                RouteX Route Management
              </h3>
              <p className="text-xs text-muted-foreground max-w-md">
                Design hard limits. Manage every route from a single command layer, across campuses and fleets.
              </p>
            </div>
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-6 items-start mt-10">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8 }}
          >
            <div className="space-y-2.5 mb-5">
              {features.map((f, i) => (
                <motion.div
                  key={f}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: false }}
                  transition={{ delay: i * 0.1 }}
                  whileHover={{ x: 4, scale: 1.01 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex items-center gap-2.5"
                >
                  <div className="w-6 h-6 rounded-full bg-primary/15 flex items-center justify-center shrink-0">
                    <Check className="w-3.5 h-3.5 text-primary" />
                  </div>
                  <span className="text-foreground text-sm">{f}</span>
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
                  viewport={{ once: false }}
                  transition={{ delay: 0.3 + i * 0.1 }}
                  whileHover={{ scale: 1.06, rotate: -1.5 }}
                  whileTap={{ scale: 0.97 }}
                  className="stat-bubble flex items-center gap-2"
                >
                  <s.icon className="w-4 h-4 text-primary" />
                  <span className="font-display font-bold text-primary">{s.value}</span>
                  <span className="text-muted-foreground text-xs">{s.label}</span>
                </motion.div>
              ))}
            </div>

            
            {/* Phone UI moved under left column */}
          </motion.div>
 
          {/* Phone UI moved to far-right column; removed here */}

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-2"
          >
            <div className="glass-panel relative overflow-hidden bg-black/40 aspect-video max-h-[320px] md:max-h-[380px]">
              <video
                src="/bus_track.mp4"
                className="w-full h-full object-contain"
                ref={videoRef}
                autoPlay={false}
                loop
                muted
                playsInline
              />
            </div>
            <div className="mt-4 flex flex-col items-center gap-2">
              <motion.button
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                onMouseMove={handleCtaMouseMove}
                onMouseLeave={resetCtaOffset}
                onClick={() => {
                  const v = videoRef.current;
                  if (v) {
                    v.play().catch(() => {});
                    v.scrollIntoView({ behavior: "smooth", block: "center" });
                  }
                }}
                className="glow-button flex items-center gap-2 text-sm sm:text-base relative overflow-hidden whitespace-nowrap min-w-[210px] md:min-w-[240px] justify-center"
              >
                <motion.span
                  style={{ x: ctaOffset.x, y: ctaOffset.y }}
                  transition={{ type: "spring", stiffness: 260, damping: 18, mass: 0.2 }}
                  className="flex items-center gap-2 whitespace-nowrap"
                >
                  <Navigation className="w-4 h-4" />
                  Track buses live
                </motion.span>
              </motion.button>
              <div className="flex items-center gap-2 text-xs text-muted-foreground">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-glow-pulse" />
                <span>Live occupancy and ETAs updating every few seconds</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8 }}
          >
            <div className="space-y-3">
              {routeFeatures.map((f, i) => (
                <motion.div
                  key={f}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: false }}
                  transition={{ delay: i * 0.1 }}
                  whileHover={{ x: 4, scale: 1.01 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex items-center gap-2.5"
                >
                  <div className="w-6 h-6 rounded-full bg-primary/15 flex items-center justify-center shrink-0">
                    <Check className="w-3.5 h-3.5 text-primary" />
                  </div>
                  <span className="text-foreground text-sm">{f}</span>
                </motion.div>
              ))}
            </div>

            <div className="glass-panel p-4 mt-5 flex items-center gap-3">
              <Route className="w-5 h-5 text-primary shrink-0" />
              <p className="text-sm text-white">
                Routes update in real-time across web and mobile platforms simultaneously.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20, rotateY: 15 }}
            whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
            viewport={{ once: false }}
                transition={{ duration: 1 }}
            whileHover={{ y: -8 }}
            className="flex justify-center"
          >
            <div className="relative" style={{ perspective: "1000px" }}>
              <motion.div
                animate={{ rotateY: [-3, 3, -3] }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                className="w-[200px] h-[400px] md:w-[230px] md:h-[460px] rounded-[28px] p-3 relative overflow-hidden border border-border/40 bg-secondary/30 dark:bg-white/10 backdrop-blur"
                style={{
                  boxShadow:
                    "0 20px 80px -20px hsl(187, 100%, 50%, 0.15), 0 0 40px -10px hsl(254, 100%, 69%, 0.1)",
                }}
              >
                <div className="w-20 h-5 rounded-full bg-background dark:bg-white/20 mx-auto mb-3" />
                <div className="space-y-3">
                  <div className="flex items-center gap-2 mb-3">
                    <Smartphone className="w-4 h-4 text-primary" />
                    <span className="text-xs font-display font-semibold text-foreground">OpenVisionX</span>
                  </div>
                  <div className="rounded-xl overflow-hidden bg-secondary/50 dark:bg-white/10 border border-border/40">
                    {gifError ? (
                      <div className="h-[200px] grid place-items-center text-[11px] text-muted-foreground">
                        Place mobile-tracking.gif in /public
                      </div>
                    ) : (
                      <img
                        src="/mobile-tracking.gif"
                        alt="Live tracking"
                        className="w-full h-[180px] object-cover"
                        onError={() => setGifError(true)}
                      />
                    )}
                  </div>
                  <motion.div
                    key={metricIndex}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                    className="bg-secondary/70 dark:bg-white/10 rounded-xl p-3 flex items-center justify-between"
                  >
                    <span className="text-[11px] text-muted-foreground">{phoneMetrics[metricIndex].label}</span>
                    <span className="text-xs font-display font-bold text-primary">{phoneMetrics[metricIndex].value}</span>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
