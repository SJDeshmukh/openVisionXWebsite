import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState, useMemo } from "react";
import { Camera, Shield, Activity, Target, Sparkles, UserCheck, Zap } from "lucide-react";

interface Student {
  id: number;
  x: number;
  y: number;
  name: string;
  status: "pending" | "scanning" | "regenerating" | "verified";
  distance: "near" | "mid" | "far";
}

const generateStudents = (): Student[] => [
  { id: 1, x: 25, y: 35, name: "S. ROBERTS", status: "pending", distance: "far" },
  { id: 2, x: 75, y: 32, name: "A. CHEN", status: "pending", distance: "far" },
  { id: 3, x: 50, y: 48, name: "M. GARCIA", status: "pending", distance: "mid" },
  { id: 4, x: 18, y: 62, name: "J. SMITH", status: "pending", distance: "mid" },
  { id: 5, x: 82, y: 58, name: "L. WONG", status: "pending", distance: "mid" },
  { id: 6, x: 35, y: 82, name: "K. PATEL", status: "pending", distance: "near" },
  { id: 7, x: 68, y: 78, name: "D. JONES", status: "pending", distance: "near" },
];

const StudentAvatar = ({ student, isScanning }: { student: Student; isScanning: boolean }) => {
   const sizeScale = useMemo(() => student.distance === 'far' ? 0.55 : student.distance === 'mid' ? 0.75 : 1, [student.distance]);
   
   return (
      <div className="relative flex flex-col items-center">
         {/* Identification Label - Adjusted positioning to avoid HUD overlap */}
         <AnimatePresence>
            {student.status !== "pending" && (
               <motion.div
                  initial={{ opacity: 0, scale: 0.8, y: 5 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="absolute -top-12 whitespace-nowrap z-30"
               >
                  {student.status === "scanning" && (
                     <div className="bg-primary/20 backdrop-blur-md text-[8px] px-2 py-1 rounded-full border border-primary/50 text-primary font-bold uppercase tracking-[0.15em] flex items-center gap-1.5 shadow-[0_0_20px_rgba(74,222,128,0.2)]">
                        <motion.div animate={{ rotate: 360 }} transition={{ duration: 2, repeat: Infinity, ease: "linear" }}>
                           <Target className="w-2.5 h-2.5" />
                        </motion.div>
                        Analysing...
                     </div>
                  )}
                  {student.status === "regenerating" && (
                     <div className="bg-blue-500/20 backdrop-blur-md text-[8px] px-2 py-1 rounded-full border border-blue-400/50 text-blue-400 font-bold uppercase tracking-[0.15em] flex items-center gap-1.5 shadow-[0_0_20px_rgba(59,130,246,0.3)]">
                        <Sparkles className="w-2.5 h-2.5 animate-pulse" /> Regen AI
                     </div>
                  )}
                  {student.status === "verified" && (
                     <motion.div 
                        initial={{ scale: 0.5, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        className="bg-green-500/20 backdrop-blur-md text-[8px] px-2.5 py-1 rounded-full border border-green-400/50 text-green-400 font-bold uppercase tracking-[0.15em] flex items-center gap-1.5 shadow-[0_0_20px_rgba(34,197,94,0.3)]"
                     >
                        <UserCheck className="w-2.5 h-2.5" /> {student.name}
                     </motion.div>
                  )}
               </motion.div>
            )}
         </AnimatePresence>

         {/* Human Silhouette - Refined shapes and fills */}
         <motion.div 
            animate={{ 
               y: [0, -1.5, 0],
               opacity: student.status === "pending" ? 0.2 : 1,
               filter: student.status === "pending" ? "grayscale(1) blur(1px)" : "grayscale(0) blur(0px)"
            }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            style={{ scale: sizeScale }}
            className="relative"
         >
            {/* Head Silhouette */}
            <motion.div 
               animate={
                  student.status === "verified" 
                     ? { borderColor: "hsl(var(--primary))", backgroundColor: "hsla(var(--primary), 0.15)", boxShadow: "0 0 15px hsla(var(--glow-blue), 0.2)" }
                     : student.status === "regenerating"
                     ? { borderColor: "hsl(var(--accent))", backgroundColor: "hsla(var(--accent), 0.1)", boxShadow: "0 0 15px hsla(var(--glow-purple), 0.2)" }
                     : { borderColor: "rgba(148, 163, 184, 0.2)", backgroundColor: "rgba(148, 163, 184, 0.05)" }
               }
               className="w-10 h-10 rounded-full border-[1.5px] mb-1.5 flex items-center justify-center relative overflow-hidden transition-all duration-700"
            >
               {/* Face Scanning Matrix Lines */}
               {student.status !== "pending" && (
                  <div className="absolute inset-0 opacity-30">
                     <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent_45%,hsl(var(--primary))_50%,transparent_55%)] bg-[length:10px_10px] animate-pulse" />
                     <motion.div 
                        animate={{ top: ["-10%", "110%"] }}
                        transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                        className="absolute inset-x-0 h-[2px] bg-primary/60 blur-[1px]"
                     />
                  </div>
               )}

               {/* Mesh Effect during Regeneration */}
               {student.status === "regenerating" && (
                  <motion.div 
                     initial={{ opacity: 0 }}
                     animate={{ opacity: 0.8 }}
                     className="absolute inset-0 bg-[radial-gradient(circle,transparent_40%,hsl(var(--accent))_100%)] opacity-40 mix-blend-screen"
                  />
               )}
            </motion.div>

            {/* Torso Silhouette */}
            <motion.div 
               animate={
                  student.status === "verified" 
                     ? { borderColor: "hsl(var(--primary))", backgroundColor: "hsla(var(--primary), 0.1)", boxShadow: "0 0 20px hsla(var(--glow-blue), 0.1)" }
                     : student.status === "regenerating"
                     ? { borderColor: "hsl(var(--accent))", backgroundColor: "hsla(var(--accent), 0.05)", boxShadow: "0 0 20px hsla(var(--glow-purple), 0.1)" }
                     : { borderColor: "rgba(148, 163, 184, 0.2)", backgroundColor: "rgba(148, 163, 184, 0.02)" }
               }
               className="w-14 h-16 border-[1.5px] rounded-t-[24px] rounded-b-xl flex flex-col items-center justify-center transition-all duration-700"
            >
               {/* Body Tracking Points */}
               {student.status !== "pending" && (
                  <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-20">
                     <motion.path 
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        d="M 50% 10% L 50% 80% M 25% 30% L 75% 30%"
                        stroke="currentColor" strokeWidth="0.8" 
                     />
                     <circle cx="50%" cy="10%" r="1" fill="currentColor" />
                     <circle cx="25%" cy="30%" r="1" fill="currentColor" />
                     <circle cx="75%" cy="30%" r="1" fill="currentColor" />
                  </svg>
               )}
            </motion.div>

            {/* Tactical Ring on Detection */}
            {student.status === "scanning" && (
               <>
                  <motion.div 
                     initial={{ scale: 0.75, opacity: 0 }}
                     animate={{ scale: 1.8, opacity: [0, 0.4, 0] }}
                     transition={{ duration: 1.2, repeat: Infinity }}
                     className="absolute inset-0 border border-primary/50 rounded-full"
                  />
                  <div className="absolute -inset-4 border border-primary/10 rounded-full animate-pulse blur-[1px]" />
               </>
            )}
         </motion.div>
      </div>
   );
};

export default function ClassroomCapture() {
  const [students, setStudents] = useState<Student[]>(generateStudents());
  const [scanPos, setScanPos] = useState(-15);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setScanPos((prev) => {
        const next = prev + 0.8;
        if (next > 115) {
           setStudents(generateStudents());
           return -15;
        }
        return next;
      });
    }, 40);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
     const updatedStudents = students.map(student => {
        if (scanPos >= student.x - 4 && scanPos <= student.x + 4) {
           if (student.status === "pending") {
              return { ...student, status: "scanning" as const };
           }
        } else if (scanPos > student.x + 4) {
           if (student.status === "scanning") {
              return { ...student, status: student.distance === "far" ? "regenerating" as const : "verified" as const };
           }
        }
        return student;
     });
     
     const finalStudents = updatedStudents.map(student => {
        if (student.status === "regenerating" && scanPos > student.x + 18) {
           return { ...student, status: "verified" as const };
        }
        return student;
     });

     if (JSON.stringify(finalStudents) !== JSON.stringify(students)) {
        setStudents(finalStudents);
     }
  }, [scanPos]);

  return (
    <div className="glass-panel aspect-video w-full relative overflow-hidden bg-slate-950/80 group border-primary/10 shadow-[0_40px_100px_rgba(0,0,0,0.4)]">
      {/* Background Texture / Grain Overlay */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
      
      {/* HUD Grid Layer */}
      <div className="absolute inset-0 opacity-[0.05] pointer-events-none" 
           style={{ backgroundImage: 'linear-gradient(rgba(74,222,128,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(74,222,128,0.1) 1px, transparent 1px)', backgroundSize: '50px 50px' }} />
      
      {/* Corner Brackets */}
      <div className="absolute inset-8 pointer-events-none z-40">
         <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-primary/40 rounded-tl-lg" />
         <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-primary/40 rounded-tr-lg" />
         <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-primary/40 rounded-bl-lg" />
         <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-primary/40 rounded-br-lg" />
      </div>

      {/* High-Tech Top Bar */}
      <div className="absolute top-6 left-10 right-10 flex justify-between items-start z-50 pointer-events-none">
         <div className="flex flex-col gap-1.5">
            <motion.div 
               animate={{ opacity: [1, 0.4, 1] }} 
               transition={{ duration: 1.5, repeat: Infinity }}
               className="flex items-center gap-2.5"
            >
               <div className="w-2.5 h-2.5 rounded-full bg-primary shadow-[0_0_10px_hsl(var(--glow-blue))]" />
               <span className="text-[11px] font-mono text-primary font-black uppercase tracking-[0.25em]">AttendX Live Feed</span>
            </motion.div>
            <div className="text-[8px] font-mono text-slate-500 uppercase tracking-widest pl-5">
               Engine: FaceBodySync v6.0 // Secure Channel 02
            </div>
         </div>
         <div className="flex flex-col items-end gap-2">
            <div className="bg-slate-900/60 backdrop-blur-xl border border-white/5 py-1.5 px-4 rounded-full flex items-center gap-2.5 shadow-2xl">
               <Zap className="w-3.5 h-3.5 text-yellow-400 fill-yellow-400/20" />
               <span className="text-[9px] font-mono font-black text-white/90 uppercase tracking-[0.1em]">AI DETECTION ACTIVE</span>
            </div>
            <div className="text-[8px] font-mono text-slate-500 uppercase tracking-tighter">Confidence: 99.98% Total Coverage</div>
         </div>
      </div>

      {/* Scan Line Overlay - More subtle and cinematic */}
      <motion.div 
        style={{ left: `${scanPos}%` }}
        className="absolute top-0 bottom-0 w-[4px] z-30 pointer-events-none"
      >
         <div className="h-full w-full bg-gradient-to-r from-transparent via-primary to-transparent blur-[1px]" />
         <div className="absolute inset-y-0 -left-10 w-20 bg-gradient-to-r from-transparent to-primary/5 blur-xl" />
      </motion.div>

      {/* Main Student Visualization */}
      <div className="absolute inset-0 px-20 pt-16 pb-12">
         {students.map((student) => (
           <div
             key={student.id}
             className="absolute"
             style={{ 
               top: `${student.y}%`, 
               left: `${student.x}%`,
               transform: 'translate(-50%, -50%)'
             }}
           >
             <StudentAvatar student={student} isScanning={Math.abs(scanPos - student.x) < 5} />
           </div>
         ))}
      </div>

      {/* High-Tech Footer HUD */}
      <div className="absolute bottom-6 left-10 right-10 flex justify-between items-end z-50 pointer-events-none">
         <div className="flex items-center gap-10 text-[9px] font-mono text-slate-400/80 uppercase tracking-widest">
            <div className="flex items-center gap-2.5">
               <div className="w-1.5 h-1.5 rounded-full bg-green-500 shadow-[0_0_5px_#22c55e]" />
               <span>ID-Sync: {students.filter(s => s.status === 'verified').length} / {students.length}</span>
            </div>
            <div className="flex items-center gap-2.5">
               <Shield className="w-3.5 h-3.5 text-blue-500" />
               <span className="text-[8px]">OpenVisionX Protocol v3</span>
            </div>
         </div>
         <div className="text-[8px] font-mono text-slate-600 flex flex-col items-end gap-1">
            <span>TIMESTAMP: {new Date().toISOString().slice(0, 19).replace('T', ' ')}</span>
            <span>COORD: 34.0522 N, 118.2437 W</span>
         </div>
      </div>

      {/* Cinematic Vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(circle,transparent_50%,rgba(0,0,0,0.4)_100%)] pointer-events-none" />
    </div>
  );
}
