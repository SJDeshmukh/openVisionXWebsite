import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
// Theme toggle moved outside navbar

const links = [
  { label: "Platform", href: "#platform" },
  { label: "Command", href: "#solutions" },
  { label: "Architecture", href: "#architecture" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [hoveredLabel, setHoveredLabel] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="fixed top-0 left-0 right-0 z-50 section-padding"
    >
      <div className="max-w-6xl mx-auto mt-4">
        <div className="glass-panel px-6 py-3 flex items-center justify-between relative">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg overflow-hidden">
              <img src="/openVisionXLogo.png" alt="OpenVisionX logo" className="w-full h-full object-contain" />
            </div>
            <span className="font-display font-bold text-lg nav-text tracking-tight">OpenVisionX</span>
          </div>

          <div className="hidden md:flex items-center gap-4 relative px-2">
            {links.map((item, index) => {
              const isHovered = hoveredLabel === item.label;
              return (
                <button
                  key={item.label}
                  onMouseEnter={() => setHoveredLabel(item.label)}
                  onMouseLeave={() => setHoveredLabel(null)}
                  className="relative px-3 py-1.5 rounded-full text-xs md:text-sm font-medium tracking-[0.18em] uppercase nav-text transition-colors"
                >
                  {isHovered && (
                    <motion.span
                      layoutId="nav-pill"
                      className="absolute inset-0 rounded-full bg-primary/10 border border-primary/40"
                      transition={{ type: "spring", stiffness: 260, damping: 20 }}
                    />
                  )}
                  <motion.a
                    href={item.href}
                    initial={{ opacity: 0, y: -6 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.2 + index * 0.05 }}
                    className="relative z-10 flex items-center justify-center hover:text-primary nav-text"
                    whileHover={{ y: -1, scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                  >
                    {item.label}
                  </motion.a>
                </button>
              );
            })}
          </div>

          <div className="flex items-center gap-3">
            <button
              className="md:hidden inline-flex items-center justify-center w-9 h-9 rounded-lg border border-border/50 hover:bg-background/60 transition-colors"
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              onClick={() => setMobileOpen((v) => !v)}
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

          <AnimatePresence>
            {mobileOpen && (
              <motion.div
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.2 }}
                className="absolute top-full left-2 right-2 mt-2 md:hidden"
              >
                <div className="glass-panel p-2 rounded-xl">
                  {links.map((item) => (
                    <a
                      key={item.label}
                      href={item.href}
                      onClick={() => setMobileOpen(false)}
                      className="block px-3 py-2 rounded-lg text-sm font-medium tracking-[0.16em] uppercase nav-text hover:bg-primary/10"
                    >
                      {item.label}
                    </a>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </motion.nav>
  );
}
