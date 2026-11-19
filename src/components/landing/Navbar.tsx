import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { BrainCircuit, Bus, ChevronDown, Fingerprint, Menu, ScanFace, X } from "lucide-react";
import ThemeToggle from "@/components/ThemeToggle";

const links = [
  { label: "Intelligence", href: "#intelligence" },
  { label: "Architecture", href: "#architecture" },
  { label: "Use cases", href: "#use-cases" },
];

const products = [
  { label: "TapInX", detail: "Touchless access", href: "#products", icon: Fingerprint },
  { label: "AttendX", detail: "AI attendance", href: "#products", icon: ScanFace },
  { label: "RouteX", detail: "Mobility intelligence", href: "#products", icon: Bus },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <motion.nav initial={{ opacity: 0, y: -16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} aria-label="Primary navigation" className="fixed inset-x-0 top-0 z-50 px-3 sm:px-6">
      <div className={`signature-nav mx-auto mt-3 max-w-[1380px] ${scrolled ? "signature-nav-scrolled" : ""}`}>
        <a href="#platform" className="group flex items-center gap-3 rounded-2xl px-2 py-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring" aria-label="OpenVisionX home">
          <div className="brand-mark"><img src="/openvisionx-symbol-transparent.png" alt="" className="h-full w-full object-contain" /></div>
          <div><span className="block font-display text-[1.05rem] font-bold tracking-[-0.04em] text-foreground">OpenVisionX</span><span className="hidden text-[0.62rem] font-bold uppercase tracking-[0.22em] text-muted-foreground sm:block">Physical intelligence</span></div>
        </a>

        <div className="hidden items-center gap-1 lg:flex">
          <div className="relative" onMouseEnter={() => setProductsOpen(true)} onMouseLeave={() => setProductsOpen(false)}>
            <button type="button" onClick={() => setProductsOpen((value) => !value)} aria-expanded={productsOpen} className="signature-nav-link">Products <ChevronDown className={`h-3.5 w-3.5 transition-transform ${productsOpen ? "rotate-180" : ""}`} /></button>
            <AnimatePresence>
              {productsOpen && (
                <motion.div initial={{ opacity: 0, y: 8, scale: 0.98 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: 8, scale: 0.98 }} className="product-menu">
                  <div className="mb-3 flex items-center gap-2 px-2 text-xs font-bold uppercase tracking-[0.18em] text-muted-foreground"><BrainCircuit className="h-4 w-4 text-primary" />Connected product suite</div>
                  {products.map((product) => <a key={product.label} href={product.href} className="product-menu-item" onClick={() => setProductsOpen(false)}><span className="flex h-10 w-10 items-center justify-center rounded-xl border border-border/70 bg-background/80"><product.icon className="h-5 w-5 text-primary" /></span><span><strong className="block font-display text-sm text-foreground">{product.label}</strong><span className="text-xs text-muted-foreground">{product.detail}</span></span></a>)}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          {links.map((item) => <a key={item.label} href={item.href} className="signature-nav-link">{item.label}</a>)}
        </div>

        <div className="flex items-center gap-2">
          <div className="hidden items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/5 px-3 py-2 text-[0.68rem] font-bold uppercase tracking-[0.16em] text-emerald-500 xl:flex"><span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_10px_rgb(52_211_153)]" />AI systems online</div>
          <ThemeToggle />
          <button type="button" className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-border/70 bg-background/70 text-foreground lg:hidden" aria-label={mobileOpen ? "Close menu" : "Open menu"} aria-expanded={mobileOpen} onClick={() => setMobileOpen((value) => !value)}>{mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}</button>
        </div>

        <AnimatePresence>
          {mobileOpen && (
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 10 }} className="mobile-signature-menu">
              <p className="px-4 pb-2 pt-3 text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground">Products</p>
              {products.map((product) => <a key={product.label} href={product.href} onClick={() => setMobileOpen(false)} className="mobile-signature-link"><product.icon className="h-4 w-4 text-primary" />{product.label}<span>{product.detail}</span></a>)}
              <div className="my-2 h-px bg-border/60" />
              {links.map((item) => <a key={item.label} href={item.href} onClick={() => setMobileOpen(false)} className="mobile-signature-link">{item.label}</a>)}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
}
