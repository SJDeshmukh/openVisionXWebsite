import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="fixed top-0 left-0 right-0 z-50 section-padding"
    >
      <div className="max-w-6xl mx-auto mt-4">
        <div className="glass-panel px-6 py-3 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg flex items-center justify-center overflow-hidden"
              style={{ background: "linear-gradient(135deg, hsl(187, 100%, 50%), hsl(254, 100%, 69%))" }}
            >
              <span className="font-display font-bold text-xs text-navy-deep">OV</span>
            </div>
            <span className="font-display font-bold text-lg text-foreground tracking-tight">
              OpenVisionX
            </span>
          </div>

          <div className="hidden md:flex items-center gap-8">
            {["Platform", "Solutions", "Architecture", "Contact"].map((item) => (
              <a
                key={item}
                href="#"
                className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200"
              >
                {item}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors hidden sm:block">
              Sign in
            </a>
            <button className="glow-button text-sm px-5 py-2 font-semibold">
              Request Demo
            </button>
          </div>
        </div>
      </div>
    </motion.nav>
  );
}
