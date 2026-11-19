import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import ThemeToggle from "@/components/ThemeToggle";

const links = [
  { label: "Platform", href: "#platform" },
  { label: "Solutions", href: "#solutions" },
  { label: "Intelligence", href: "#intelligence" },
  { label: "Architecture", href: "#architecture" },
  { label: "Use cases", href: "#use-cases" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("platform");

  useEffect(() => {
    const sections = links
      .map(({ href }) => document.getElementById(href.slice(1)))
      .filter((section): section is HTMLElement => section !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActiveSection(visible.target.id);
      },
      { rootMargin: "-25% 0px -60%", threshold: [0, 0.2, 0.5] },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      aria-label="Primary navigation"
      className="fixed inset-x-0 top-0 z-50 px-4 sm:px-6 lg:px-10"
    >
      <div className="mx-auto mt-4 max-w-7xl">
        <div className="nav-shell relative flex h-16 items-center justify-between px-3 sm:px-4">
          <a href="#platform" className="group flex items-center gap-3 rounded-xl px-2 py-1.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring" aria-label="OpenVisionX home">
            <div className="h-9 w-9 overflow-hidden rounded-xl border border-border/60 bg-card p-1 shadow-sm transition-transform group-hover:scale-105">
              <img src="/openVisionXLogo.png" alt="OpenVisionX logo" className="w-full h-full object-contain" />
            </div>
            <div className="leading-none">
              <span className="block font-display text-base font-bold tracking-tight text-foreground sm:text-lg">OpenVisionX</span>
              <span className="mt-1 hidden text-[9px] font-semibold uppercase tracking-[0.24em] text-muted-foreground sm:block">Vision intelligence</span>
            </div>
          </a>

          <div className="hidden items-center rounded-xl border border-border/50 bg-muted/35 p-1 lg:flex">
            {links.map((item) => {
              const isActive = activeSection === item.href.slice(1);
              return (
                <a
                  key={item.label}
                  href={item.href}
                  aria-current={isActive ? "page" : undefined}
                  className={`relative rounded-lg px-3.5 py-2 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring ${isActive ? "text-foreground" : "text-muted-foreground hover:text-foreground"}`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="active-nav"
                      className="absolute inset-0 rounded-lg border border-border/60 bg-background shadow-sm"
                      transition={{ type: "spring", stiffness: 350, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{item.label}</span>
                </a>
              );
            })}
          </div>

          <div className="flex items-center gap-2">
            <ThemeToggle />
            <a href="#contact" className="hidden h-10 items-center gap-1.5 rounded-xl bg-foreground px-4 text-sm font-semibold text-background transition-transform hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background sm:inline-flex">
              Request demo
            </a>
            <button
              type="button"
              className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-border/70 bg-background/70 text-foreground transition-colors hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring lg:hidden"
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileOpen}
              aria-controls="mobile-navigation"
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
                id="mobile-navigation"
                className="absolute left-0 right-0 top-full mt-2 lg:hidden"
              >
                <div className="nav-shell overflow-hidden p-2">
                  {links.map((item) => (
                    <a
                      key={item.label}
                      href={item.href}
                      onClick={() => setMobileOpen(false)}
                      className={`flex items-center justify-between rounded-xl px-4 py-3 text-sm font-semibold transition-colors ${activeSection === item.href.slice(1) ? "bg-primary/10 text-primary" : "text-foreground hover:bg-muted"}`}
                    >
                      {item.label}
                    </a>
                  ))}
                  <a href="#contact" onClick={() => setMobileOpen(false)} className="mt-2 flex items-center justify-center gap-2 rounded-xl bg-foreground px-4 py-3 text-sm font-semibold text-background sm:hidden">
                    Request demo
                  </a>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </motion.nav>
  );
}
