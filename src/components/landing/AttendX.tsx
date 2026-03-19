import { motion } from "framer-motion";
import { Users, Sparkles, Smartphone, Shield, Zap } from "lucide-react";
import ClassroomCapture from "./ClassroomCapture";

const features = [
  {
    icon: <Users className="w-5 h-5" />,
    title: "Class-wide bulk attendance",
    description: "Mark entire classrooms in seconds with a single capture."
  },
  {
    icon: <Smartphone className="w-5 h-5" />,
    title: "3-4 photos for total coverage",
    description: "Zero-blind-spot logic ensures everyone is accounted for."
  },
  {
    icon: <Zap className="w-5 h-5" />,
    title: "AI Face Regeneration technology",
    description: "High-precision reconstruction for students at 30ft+ distance."
  },
  {
    icon: <Shield className="w-5 h-5" />,
    title: "Zero-student-left-behind logic",
    description: "Enterprise-grade accuracy for complex classroom environments."
  }
];

export default function AttendX() {
  return (
    <section id="attendx" className="relative py-32 overflow-hidden bg-slate-950">
      {/* Background Decorative elements */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] -z-10" />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[120px] -z-10" />

      <div className="container mx-auto px-6">
        {/* Centered Product Header - Matching FaceAttendance/BusTracking */}
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: false, margin: "-100px" }}
           transition={{ duration: 0.7 }}
           className="text-center mb-16"
        >
           <div className="flex items-center justify-center mb-4">
              <div className="w-14 h-14 rounded-xl overflow-hidden border border-primary/40 bg-background/60 shadow-[0_0_30px_hsl(var(--glow-blue)/0.25)] p-2">
                 <img src="/attendX.png" alt="AttendX Logo" className="w-full h-full object-contain" />
              </div>
           </div>
           <h2 className="font-display font-extrabold text-3xl md:text-4xl text-primary mb-2">
              <span className="block tracking-[0.35em] uppercase">
                 {["A","T","T","E","N","D","X"].map((char, i) => (
                    <motion.span
                       key={`attendx-${i}`}
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
                 Intelligence in Attendance
              </span>
           </h2>
           <p className="text-2xl md:text-3xl font-display font-extrabold text-foreground mb-3 tracking-[-0.03em]">
              One Click. <span className="gradient-text-blue">The Whole Class.</span>
           </p>
           <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Our proprietary <span className="text-primary font-bold">Face Regeneration</span> technology enables high-accuracy attendance from group photos, even for students in the back row.
           </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row items-center gap-20">
          {/* Left Content */}
          <div className="lg:w-1/2 space-y-10">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + index * 0.1 }}
                  className="flex gap-5 group"
                >
                  <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-slate-950 transition-all duration-500 shadow-xl">
                    {feature.icon}
                  </div>
                  <div className="space-y-1.5">
                    <h4 className="font-black text-white group-hover:text-primary transition-colors duration-300 tracking-tight">
                      {feature.title}
                    </h4>
                    <p className="text-sm text-slate-500 leading-tight">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>


          </div>

          {/* Right Visualization */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, x: 50 }}
            whileInView={{ opacity: 1, scale: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="lg:w-1/2 w-full relative"
          >
            <div className="absolute -inset-10 bg-primary/10 blur-[100px] -z-10" />
            <ClassroomCapture />
            
            {/* Status HUD floating elements */}
            <motion.div 
               animate={{ y: [0, -10, 0] }}
               transition={{ duration: 5, repeat: Infinity }}
               className="absolute -top-10 -right-5 glass-panel py-3 px-6 border-white/10 shadow-2xl backdrop-blur-2xl"
            >
               <div className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary animate-ping" />
                  <span className="text-[10px] font-black text-white uppercase tracking-widest">Processing Node 04: ON</span>
               </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
